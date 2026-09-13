"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Download, RefreshCw, Share2, WifiOff, X } from "lucide-react";
import { useTheme } from "next-themes";

type InstallPrompt = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};
type PwaState = {
  supported: boolean;
  installed: boolean;
  offlineReady: boolean;
  online: boolean;
  installPrompt: InstallPrompt | null;
  clearPrompt: () => void;
  checkUpdate: () => Promise<void>;
};
const PwaContext = createContext<PwaState | null>(null);

export function PwaProvider({ children }: { children: React.ReactNode }) {
  const [supported, setSupported] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);
  const [online, setOnline] = useState(true);
  const [installPrompt, setInstallPrompt] = useState<InstallPrompt | null>(null);
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [updating, setUpdating] = useState(false);
  const registration = useRef<ServiceWorkerRegistration | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", resolvedTheme === "dark" ? "#141416" : "#ffffff");
  }, [resolvedTheme]);

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      !("serviceWorker" in navigator) ||
      !window.isSecureContext
    )
      return;
    setSupported(true);
    setOnline(navigator.onLine);
    const display = window.matchMedia("(display-mode: standalone)");
    const syncInstalled = () =>
      setInstalled(
        display.matches || Boolean((navigator as Navigator & { standalone?: boolean }).standalone),
      );
    syncInstalled();
    let disposed = false;
    let lastCheck = 0;
    let controlled = Boolean(navigator.serviceWorker.controller);
    const cleanups: (() => void)[] = [];
    const markWaiting = (worker: ServiceWorker) => {
      setWaiting(worker);
      setDismissed(false);
    };
    const check = () => {
      if (
        document.visibilityState !== "visible" ||
        !navigator.onLine ||
        Date.now() - lastCheck < 60_000
      )
        return;
      lastCheck = Date.now();
      void registration.current?.update().catch(() => {});
    };
    const connectivity = () => {
      setOnline(navigator.onLine);
      if (navigator.onLine) check();
    };
    const captureInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPrompt);
    };
    const didInstall = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };
    const controllerChanged = () => {
      setOfflineReady(true);
      // All open tabs move to the same release when an update is accepted.
      if (controlled) window.location.reload();
      controlled = true;
    };
    display.addEventListener("change", syncInstalled);
    window.addEventListener("online", connectivity);
    window.addEventListener("offline", connectivity);
    window.addEventListener("beforeinstallprompt", captureInstall);
    window.addEventListener("appinstalled", didInstall);
    document.addEventListener("visibilitychange", check);
    navigator.serviceWorker.addEventListener("controllerchange", controllerChanged);
    void navigator.serviceWorker
      .register("/sw.js", { scope: "/", updateViaCache: "none" })
      .then((reg) => {
        if (disposed) return;
        registration.current = reg;
        setOfflineReady(Boolean(reg.active));
        if (reg.waiting) markWaiting(reg.waiting);
        const watch = () => {
          const worker = reg.installing;
          if (!worker) return;
          const changed = () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller)
              markWaiting(worker);
            if (worker.state === "activated") setOfflineReady(true);
          };
          worker.addEventListener("statechange", changed);
          cleanups.push(() => worker.removeEventListener("statechange", changed));
        };
        reg.addEventListener("updatefound", watch);
        cleanups.push(() => reg.removeEventListener("updatefound", watch));
        watch();
        check();
      })
      .catch(() => {
        /* Browsing remains available if storage or registration is blocked. */
      });
    return () => {
      disposed = true;
      for (const cleanup of cleanups) cleanup();
      display.removeEventListener("change", syncInstalled);
      window.removeEventListener("online", connectivity);
      window.removeEventListener("offline", connectivity);
      window.removeEventListener("beforeinstallprompt", captureInstall);
      window.removeEventListener("appinstalled", didInstall);
      document.removeEventListener("visibilitychange", check);
      navigator.serviceWorker.removeEventListener("controllerchange", controllerChanged);
    };
  }, []);

  const checkUpdate = async () => {
    if (!navigator.onLine) throw new Error("Reconnect to check for updates.");
    if (!registration.current) {
      registration.current = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      });
    }
    await registration.current.update();
    if (registration.current.waiting) markCurrentWaiting();
  };
  const markCurrentWaiting = () => {
    setWaiting(registration.current?.waiting ?? null);
    setDismissed(false);
  };
  return (
    <PwaContext.Provider
      value={{
        supported,
        installed,
        offlineReady,
        online,
        installPrompt,
        clearPrompt: () => setInstallPrompt(null),
        checkUpdate,
      }}
    >
      {children}
      <div className="pwa-notices" aria-live="polite">
        {!online ? (
          <div className="pwa-notice">
            <WifiOff size={18} aria-hidden="true" />
            <p>
              <strong>You’re offline.</strong>{" "}
              {offlineReady
                ? "Saved portfolio pages are available. External links need a connection."
                : "Reconnect to save the portfolio for offline use."}
            </p>
          </div>
        ) : null}
        {waiting && !dismissed ? (
          <div className="pwa-notice">
            <p>
              <strong>A fresh version is ready.</strong>
              <br />
              Refresh to see the latest portfolio.
            </p>
            <button
              type="button"
              disabled={updating}
              onClick={() => {
                setUpdating(true);
                waiting.postMessage({ type: "SKIP_WAITING" });
              }}
            >
              {updating ? "Updating…" : "Refresh"}
            </button>
            <button
              className="pwa-dismiss"
              type="button"
              aria-label="Dismiss update for now"
              onClick={() => setDismissed(true)}
            >
              <X size={18} />
            </button>
          </div>
        ) : null}
      </div>
    </PwaContext.Provider>
  );
}

export function PwaControls() {
  const pwa = useContext(PwaContext);
  const [help, setHelp] = useState(false);
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [ios, setIos] = useState(false);
  useEffect(() => {
    setIos(
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1),
    );
  }, []);
  if (!pwa?.supported) return null;
  const install = async () => {
    if (!pwa.installPrompt) {
      setHelp(!help);
      return;
    }
    try {
      await pwa.installPrompt.prompt();
      await pwa.installPrompt.userChoice;
    } catch {
      setHelp(true);
    } finally {
      pwa.clearPrompt();
    }
  };
  const share = async () => {
    const data = {
      title: document.title,
      url: `https://arangates.github.io${window.location.pathname}`,
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(data.url);
        setNotice("Page link copied.");
      }
    } catch (error) {
      if (!(error instanceof Error && error.name === "AbortError"))
        setNotice(`Share this page: ${data.url}`);
    }
  };
  return (
    <div className="pwa-controls">
      <div className="pwa-actions">
        {!pwa.installed ? (
          <button type="button" onClick={() => void install()} aria-expanded={help}>
            <Download size={14} /> Install app
          </button>
        ) : null}
        <button type="button" onClick={() => void share()}>
          <Share2 size={14} /> Share page
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              await pwa.checkUpdate();
              setNotice("Update check requested. You’ll be notified when a new version is ready.");
            } catch {
              setNotice("Couldn’t check for updates. Reconnect and try again.");
            } finally {
              setBusy(false);
            }
          }}
        >
          <RefreshCw size={14} /> {busy ? "Checking…" : "Check for updates"}
        </button>
      </div>
      {help ? (
        <p className="install-help">
          {ios
            ? "In Safari, tap Share, then Add to Home Screen and Add."
            : "Open your browser’s menu and choose Install app or Add to Home Screen. On Safari for Mac, choose File → Add to Dock. Installation options depend on your browser."}
        </p>
      ) : null}
      <p className="pwa-cache-status">
        {pwa.offlineReady
          ? "Available offline on this device"
          : "Offline copy is not ready yet. Keep this page open while connected."}
      </p>
      <p role="status" className="pwa-action-status">
        {notice}
      </p>
    </div>
  );
}

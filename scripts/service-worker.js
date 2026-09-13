/* VERSION and PRECACHE are injected by build-pwa.mjs. */
const PREFIX = "aranga-portfolio-";
const CACHE = PREFIX + VERSION;
const files = new Map(PRECACHE.map(({ url }) => [url, url]));
for (const { url } of PRECACHE) {
  if (url.endsWith("/index.html")) {
    const route = url.slice(0, -"index.html".length);
    files.set(route, url);
    if (route !== "/") files.set(route.slice(0, -1), url);
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      try {
        // Limit concurrent requests; verify content to reject a partially deployed release.
        let next = 0;
        const results = await Promise.allSettled(
          Array.from({ length: 6 }, async () => {
            while (next < PRECACHE.length) {
              const entry = PRECACHE[next++];
              const response = await fetch(entry.url, { cache: "reload" });
              if (!response.ok || response.redirected) throw new Error(`Cannot cache ${entry.url}`);
              const hash = Array.from(
                new Uint8Array(
                  await crypto.subtle.digest("SHA-256", await response.clone().arrayBuffer()),
                ),
              )
                .map((byte) => byte.toString(16).padStart(2, "0"))
                .join("");
              if (hash !== entry.hash) throw new Error(`Release changed: ${entry.url}`);
              await cache.put(entry.url, response);
            }
          }),
        );
        const failure = results.find((result) => result.status === "rejected");
        if (failure) throw failure.reason;
      } catch (error) {
        await caches.delete(CACHE);
        throw error;
      }
      // Updates wait for explicit acceptance. The first installation activates normally.
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) {
        if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
      }
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin || url.pathname === "/sw.js")
    return;
  let key = files.get(url.pathname);
  // Never return HTML for a React Server Component request.
  if (request.headers.get("RSC") === "1" && key?.endsWith(".html")) {
    const payload = key.replace(/\.html$/, ".txt");
    key = files.has(payload) ? payload : undefined;
  }
  if (key) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        const cached = await cache.match(key);
        if (cached) return cached;
        return fetch(request);
      })(),
    );
  } else if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          return await fetch(request);
        } catch {
          const cache = await caches.open(CACHE);
          const fallback = await cache.match("/offline.html");
          return new Response(
            fallback ? await fallback.text() : "You’re offline. Reconnect and try again.",
            {
              status: 503,
              headers: { "Content-Type": "text/html; charset=utf-8" },
            },
          );
        }
      })(),
    );
  }
});

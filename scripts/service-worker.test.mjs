import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash, webcrypto } from "node:crypto";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
const template = await readFile(new URL("./service-worker.js", import.meta.url), "utf8");
const fixtures = {
  "/index.html": "<h1>Home</h1>",
  "/work/index.html": "<h1>Work</h1>",
  "/work/index.txt": "React payload",
  "/_next/static/app.js": "app code",
  "/offline.html": "<h1>Offline</h1>",
};
async function harness({ corrupt = false } = {}) {
  const stores = new Map([
    ["another-app", new Map()],
    ["aranga-portfolio-old", new Map()],
  ]);
  const listeners = {};
  let online = true,
    skipped = false,
    claimed = false;
  const caches = {
    async open(name) {
      if (!stores.has(name)) stores.set(name, new Map());
      const store = stores.get(name);
      return {
        async put(url, response) {
          store.set(url, response.clone());
        },
        async match(url) {
          return store.get(url)?.clone();
        },
      };
    },
    async keys() {
      return [...stores.keys()];
    },
    async delete(name) {
      return stores.delete(name);
    },
  };
  const self = {
    location: { origin: "https://example.test" },
    addEventListener: (name, fn) => {
      listeners[name] = fn;
    },
    skipWaiting: () => {
      skipped = true;
    },
    clients: {
      claim: async () => {
        claimed = true;
      },
    },
  };
  const entries = Object.entries(fixtures).map(([url, body]) => ({
    url,
    hash: createHash("sha256").update(body).digest("hex"),
  }));
  const fetch = async (input) => {
    if (!online) throw new Error("offline");
    const url = typeof input === "string" ? input : new URL(input.url).pathname;
    return new Response(
      corrupt && url === "/work/index.html" ? "mixed deployment" : (fixtures[url] ?? "Not found"),
      { status: url in fixtures ? 200 : 404 },
    );
  };
  vm.runInNewContext(`const VERSION="test";const PRECACHE=${JSON.stringify(entries)};${template}`, {
    self,
    caches,
    fetch,
    crypto: webcrypto,
    URL,
    Response,
    Map,
    Uint8Array,
  });
  const lifecycle = (name) => {
    let promise;
    listeners[name]({
      waitUntil: (p) => {
        promise = p;
      },
    });
    return promise;
  };
  const request = async (path, options = {}) => {
    let response;
    listeners.fetch({
      request: {
        url: new URL(path, self.location.origin).href,
        method: "GET",
        headers: new Headers(),
        mode: "navigate",
        ...options,
      },
      respondWith: (value) => {
        response = value;
      },
    });
    return response;
  };
  return {
    stores,
    lifecycle,
    request,
    offline: () => {
      online = false;
    },
    message: (data) => listeners.message({ data }),
    get skipped() {
      return skipped;
    },
    get claimed() {
      return claimed;
    },
  };
}

test("offline pages, query strings, route aliases and React payloads remain distinct", async () => {
  const sw = await harness();
  await sw.lifecycle("install");
  sw.offline();
  assert.equal(
    await (await sw.request("/work/?utm_source=shortcut")).text(),
    fixtures["/work/index.html"],
  );
  assert.equal(await (await sw.request("/work")).text(), fixtures["/work/index.html"]);
  assert.equal(
    await (await sw.request("/work/?_rsc=abc", { headers: new Headers({ RSC: "1" }) })).text(),
    "React payload",
  );
  assert.equal(await (await sw.request("/work/index.txt?_rsc=abc")).text(), "React payload");
  const missing = await sw.request("/unknown/");
  assert.equal(missing.status, 503);
  assert.match(await missing.text(), /Offline/);
});
test("cross-origin requests, writes and worker update checks bypass the cache", async () => {
  const sw = await harness();
  assert.equal(await sw.request("https://github.com/arangates"), undefined);
  assert.equal(await sw.request("/work/", { method: "POST" }), undefined);
  assert.equal(await sw.request("/sw.js"), undefined);
});
test("inconsistent deployments fail atomically without deleting the old release", async () => {
  const sw = await harness({ corrupt: true });
  await assert.rejects(sw.lifecycle("install"), /Release changed/);
  assert.equal(sw.stores.has("aranga-portfolio-test"), false);
  assert.equal(sw.stores.has("aranga-portfolio-old"), true);
});
test("updates only activate on request; cleanup is scoped to this portfolio", async () => {
  const sw = await harness();
  await sw.lifecycle("install");
  assert.equal(sw.skipped, false);
  sw.message({ type: "SKIP_WAITING" });
  assert.equal(sw.skipped, true);
  await sw.lifecycle("activate");
  assert.equal(sw.claimed, true);
  assert.equal(sw.stores.has("aranga-portfolio-old"), false);
  assert.equal(sw.stores.has("another-app"), true);
});

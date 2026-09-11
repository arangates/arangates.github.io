import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
const root = resolve("apps/web/out");
const routes = ["", "about", "projects", "blog", "skills", "work"];
for (const route of routes) {
  const file = resolve(root, route, "index.html");
  assert.ok(existsSync(file), `Missing exported route: /${route}`);
  const html = readFileSync(file, "utf8");
  assert.ok(!html.includes('/_next/image?'), `Image runtime required on /${route}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const url = match[1];
    if (url.startsWith("//")) continue;
    let target = resolve(root, "." + decodeURIComponent(url));
    assert.ok(existsSync(target), `Broken local URL ${url} in /${route}`);
    if (statSync(target).isDirectory()) target = resolve(target, "index.html");
    assert.ok(existsSync(target), `No static index for ${url}`);
  }
}
for (const removed of ["api", "login", "dashboard"]) assert.ok(!existsSync(resolve(root, removed)), `Unexpected backend route: ${removed}`);
for (const asset of ["404.html", "icon.svg", "aranga.jpg", "manifest.webmanifest", ".nojekyll"]) assert.ok(existsSync(resolve(root, asset)), `Missing asset: ${asset}`);
const manifest = JSON.parse(readFileSync(resolve(root, "manifest.webmanifest"), "utf8"));
for (const icon of manifest.icons) assert.ok(existsSync(resolve(root, "." + icon.src)), `Missing manifest icon ${icon.src}`);
console.log(`Verified ${routes.length} static pages, local links, images, manifest, and 404 page.`);

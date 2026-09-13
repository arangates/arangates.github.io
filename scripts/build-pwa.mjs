// Run after static export. A release is cached atomically, including Next's route payloads.
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../apps/web/out");
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
async function walk(directory) {
  const files = [];
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, item.name);
    if (item.isDirectory()) files.push(...(await walk(path)));
    else if (!item.name.startsWith(".") && !item.name.endsWith(".map") && item.name !== "sw.js")
      files.push(path);
  }
  return files;
}
const entries = await Promise.all(
  (await walk(root)).sort().map(async (path) => ({
    url: "/" + relative(root, path).split("/").map(encodeURIComponent).join("/"),
    hash: digest(await readFile(path)),
  })),
);
const template = await readFile(resolve(here, "service-worker.js"), "utf8");
const version = digest(JSON.stringify(entries) + template).slice(0, 16);
await writeFile(
  resolve(root, "sw.js"),
  `const VERSION = ${JSON.stringify(version)};\nconst PRECACHE = ${JSON.stringify(entries)};\n${template}`,
);
console.log(`PWA release ${version}: ${entries.length} verified offline files.`);

import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "about/", "work/", "skills/", "projects/", "blog/"].map((path) => ({
    url: `https://arangates.github.io/${path}`,
  }));
}

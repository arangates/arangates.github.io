import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Aranga — Software Engineer & Builder",
    short_name: "Aranga",
    description:
      "Projects, writing, skills, and work by Aranganathan Rathinavelu. Available offline.",
    lang: "en",
    dir: "ltr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    categories: ["portfolio", "education"],
    prefer_related_applications: false,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
    screenshots: [
      {
        src: "/screenshots/desktop.png",
        sizes: "1440x1000",
        type: "image/png",
        form_factor: "wide",
        label: "Aranga’s projects and engineering portfolio",
      },
      {
        src: "/screenshots/mobile.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "Aranga’s portfolio on mobile",
      },
    ],
    shortcuts: [
      {
        name: "Projects",
        short_name: "Projects",
        description: "Explore what I build",
        url: "/projects/",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Work history",
        short_name: "Experience",
        description: "My engineering experience",
        url: "/work/",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Skills",
        short_name: "Skills",
        description: "My tools and expertise",
        url: "/skills/",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Writing",
        short_name: "Writing",
        description: "Browse the article archive",
        url: "/blog/",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}

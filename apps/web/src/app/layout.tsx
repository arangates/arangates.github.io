import type { Metadata, Viewport } from "next";

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { DiscoverySidebar } from "@/components/discovery-sidebar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  applicationName: "Aranga",
  appleWebApp: { capable: true, title: "Aranga", statusBarStyle: "default" },
  icons: { apple: [{ url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" }] },
  metadataBase: new URL("https://arangates.github.io"),
  title: { default: "Aranga — Software Engineer & Builder", template: "%s — Aranga" },
  description:
    "Aranganathan Rathinavelu is a software engineer at ASML, based in the Netherlands. Explore projects, writing, and thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <div className="site-shell">
            <Header />
            {children}
            <DiscoverySidebar />
          </div>
        </Providers>
      </body>
    </html>
  );
}

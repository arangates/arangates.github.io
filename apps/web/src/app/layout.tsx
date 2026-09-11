import type { Metadata } from "next";

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { DiscoverySidebar } from "@/components/discovery-sidebar";

export const metadata: Metadata = {
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

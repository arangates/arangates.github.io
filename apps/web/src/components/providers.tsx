"use client";
import { PwaProvider } from "./pwa";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <PwaProvider>{children}</PwaProvider>
    </ThemeProvider>
  );
}

"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="theme-sun" size={17} />
      <Moon className="theme-moon" size={17} />
    </button>
  );
}

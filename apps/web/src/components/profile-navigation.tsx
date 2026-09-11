"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function ProfileNavigation() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  return (
    <nav className="profile-navigation" aria-label="Profile sections">
      {([
        { href: "/about", label: "About" },
        { href: "/work", label: "Work history" },
        { href: "/skills", label: "Skills" },
      ] as const).map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={pathname === item.href ? "page" : undefined}
          className={pathname === item.href ? "selected" : ""}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

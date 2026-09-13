"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Layers,
  Newspaper,
  UserRound,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Wrench,
} from "lucide-react";
import { Github } from "./social-icons";

const navigation = [
  { href: "/", label: "Home", icon: House },
  { href: "/projects", label: "Projects", icon: Layers },
  { href: "/blog", label: "Writing", icon: Newspaper },
  { href: "/work", label: "Work history", icon: BriefcaseBusiness },
  { href: "/skills", label: "Skills", icon: Wrench },
  { href: "/about", label: "About", icon: UserRound },
] as const;

export default function Header() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const isProfile = ["/about", "/work", "/skills"].includes(pathname);
  const mobileNavigation = navigation.filter(
    (item) => item.href !== "/work" && item.href !== "/skills",
  );
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <aside className="left-rail">
        <div className="left-rail-inner">
          <Link href="/" className="brand" aria-label="Aranga home">
            <span className="brand-symbol">a</span>
            <span>Aranga</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(({ href, label, icon: Icon }) => (
              <Link
                href={href}
                key={href}
                className={pathname === href ? "active" : ""}
                aria-current={pathname === href ? "page" : undefined}
              >
                <Icon size={23} strokeWidth={1.8} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
          <a
            className="follow-link"
            href="https://www.linkedin.com/in/arangates/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="mini-portrait">
              <Image src="/aranga.jpg" alt="" width={26} height={26} />
              <i />
            </span>
            <span>
              Connect with Aranga <ArrowUpRight size={13} />
            </span>
          </a>
          <p className="rail-label">Discover</p>
          <a
            className="discover-link"
            href="https://github.com/arangates"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={22} />
            <span>Open source</span>
          </a>
          <div className="rail-group">
            <p>My projects</p>
            <a href="https://github.com/arangates/gita" target="_blank" rel="noreferrer">
              <span className="topic-icon gita-icon">गी</span>
              <span>Gita Explorer</span>
            </a>
            <a href="https://github.com/arangates/spacex" target="_blank" rel="noreferrer">
              <span className="topic-icon space-icon">↗</span>
              <span>SpaceX Explorer</span>
            </a>
            <a href="https://github.com/arangates/die-wise" target="_blank" rel="noreferrer">
              <span className="topic-icon chip-icon">⌘</span>
              <span>Die Wise</span>
            </a>
          </div>
          <a
            className="source-link"
            href="https://github.com/arangates"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={19} />
            <span>Find me on GitHub</span>
            <ArrowUpRight size={14} />
          </a>
          <div className="rail-footer">
            Aranganathan Rathinavelu
            <br />
            Engineer & builder · Netherlands
          </div>
        </div>
      </aside>
      <nav className="mobile-tabs" aria-label="Mobile navigation">
        {mobileNavigation.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href || (href === "/about" && isProfile) ? "active" : ""}
            aria-current={
              pathname === href || (href === "/about" && isProfile) ? "page" : undefined
            }
          >
            <Icon size={23} />
            <span>{href === "/about" ? "Profile" : label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}

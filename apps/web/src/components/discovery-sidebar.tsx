"use client";
import { useState } from "react";
import Link from "next/link";
import { skillGroups, workHistory } from "@/content/career";
import Image from "next/image";
import { Search, ArrowUpRight, MapPin, ExternalLink, X } from "lucide-react";
import { posts } from "@/content/portfolio";
import { Github, Linkedin } from "./social-icons";

const searchable = [
  {
    title: "Work history",
    detail: workHistory.map((item) => item.company).join(" · "),
    href: "/work",
  },
  ...skillGroups.map((group) => ({
    title: group.title,
    detail: group.skills.join(" · "),
    href: `/skills#${group.id}`,
  })),
  { title: "About Aranga", detail: "Software engineer · ASML", href: "/about" },
  {
    title: "Gita Explorer",
    detail: "Project · Next.js, TypeScript",
    href: "https://github.com/arangates/gita",
  },
  {
    title: "SpaceX Explorer",
    detail: "Project · JavaScript",
    href: "https://github.com/arangates/spacex",
  },
  {
    title: "Die Wise",
    detail: "Project · Semiconductors",
    href: "https://github.com/arangates/die-wise",
  },
  ...posts.map((p) => ({
    title: p.title,
    detail: `Writing · ${p.category}`,
    href: `https://aranganathan.vercel.app/blog/${p.slug}`,
  })),
];
export function DiscoverySidebar() {
  const [query, setQuery] = useState("");
  const results = searchable.filter((item) =>
    `${item.title} ${item.detail}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <aside className="right-rail" aria-label="Discover Aranga">
      <div className="right-rail-inner">
        <div className="rail-search">
          <Search size={20} />
          <input
            type="search"
            onKeyDown={(event) => {
              if (event.key === "Escape") setQuery("");
            }}
            aria-label="Search portfolio"
            placeholder="Search Aranga’s portfolio"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query ? (
            <button aria-label="Clear portfolio search" onClick={() => setQuery("")}>
              <X size={16} />
            </button>
          ) : null}
        </div>
        {query.trim() ? (
          <div className="rail-results">
            <p className="panel-label" aria-live="polite">
              {results.length} {results.length === 1 ? "result" : "results"}
            </p>
            {results.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("https:") ? "_blank" : undefined}
                rel={item.href.startsWith("https:") ? "noreferrer" : undefined}
              >
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </a>
            ))}
            {results.length === 0 ? <p>No results. Try “React”, “Gita”, or “writing”.</p> : null}
          </div>
        ) : (
          <>
            <section className="role-panel">
              <div className="panel-heading">
                <span>AT WORK</span>
                <span className="live-pill">SINCE 2022</span>
              </div>
              <div className="role-content">
                <span className="asml-logo">ASML</span>
                <div>
                  <strong>Software Engineer 3</strong>
                  <span>ASML</span>
                </div>
              </div>
              <div className="panel-location">
                <MapPin size={12} /> Netherlands
              </div>
              <Link className="panel-more" href="/work">
                Work history <ArrowUpRight size={12} />
              </Link>
            </section>
            <section className="profile-panel">
              <Image src="/aranga.jpg" alt="Aranga" width={42} height={42} />
              <div>
                <strong>A curious human.</strong>
                <p>Making complex things feel simple.</p>
              </div>
            </section>
            <section className="rail-group stack-panel">
              <p>
                My toolkit <Link href="/skills">All skills ↗</Link>
              </p>
              {[
                { icon: "⚛", name: "React", className: "react-icon" },
                { icon: "N", name: "Next.js", className: "next-icon" },
                { icon: "TS", name: "TypeScript", className: "ts-icon" },
                { icon: "JS", name: "JavaScript", className: "js-icon" },
                { icon: "#", name: "CSS", className: "css-icon" },
              ].map((item) => (
                <div className="stack-row" key={item.name}>
                  <span className={`topic-icon ${item.className}`}>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </section>
            <div className="outside-links">
              <a href="https://github.com/arangates" target="_blank" rel="noreferrer">
                <Github size={20} />
                GitHub
                <ArrowUpRight size={14} />
              </a>
              <a href="https://www.linkedin.com/in/arangates/" target="_blank" rel="noreferrer">
                <Linkedin size={20} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
              <a href="https://aranganathan.vercel.app/blog" target="_blank" rel="noreferrer">
                <ExternalLink size={19} />
                Original blog
                <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="sidebar-note">
              A collection of things I build,
              <br />
              ideas I explore, and lessons I share.
            </p>
          </>
        )}
      </div>
    </aside>
  );
}

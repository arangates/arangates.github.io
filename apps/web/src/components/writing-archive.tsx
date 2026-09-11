"use client";
import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { posts } from "@/content/portfolio";
export function WritingArchive() {
  const [query, setQuery] = useState("");
  const filtered = posts.filter((post) =>
    `${post.title} ${post.category} ${post.description}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="search-field">
        <Search size={18} />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles…"
          aria-label="Search articles"
        />
        <span aria-live="polite">{filtered.length} articles</span>
      </div>
      <div className="archive-list">
        {filtered.map((post) => (
          <a
            key={post.slug}
            href={`https://aranganathan.vercel.app/blog/${post.slug}`}
            className="archive-article"
            target="_blank"
            rel="noreferrer"
          >
            <span className="section-number">{post.category}</span>
            <h2>
              {post.title}
              <ArrowUpRight size={20} />
            </h2>
            <p>{post.description}</p>
          </a>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="empty-search">
          <h2>No articles found</h2>
          <p>
            Try another topic, or <button onClick={() => setQuery("")}>clear your search</button>.
          </p>
        </div>
      ) : null}
    </>
  );
}

import type { Metadata } from "next";
import { ProjectStories } from "@/components/portfolio-stories";
export const metadata: Metadata = { title: "Projects" };
export default function Projects() {
  return (
    <main className="news-feed" id="main-content">
      <header className="feed-header">
        <div>
          <h1>Projects</h1>
          <p>Ideas turned into something you can use.</p>
        </div>
      </header>
      <section className="feed-section">
        <h2 className="section-title">Made by Aranga</h2>
        <ProjectStories />
      </section>
      <a
        className="all-repos"
        href="https://github.com/arangates?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        Explore all repositories on GitHub ↗
      </a>
    </main>
  );
}

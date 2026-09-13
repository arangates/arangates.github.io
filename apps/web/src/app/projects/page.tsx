import { PageFooter } from "@/components/page-footer";
import { PageHeader } from "@/components/page-header";
import type { Metadata } from "next";
import { ProjectStories } from "@/components/portfolio-stories";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source projects by Aranganathan Rathinavelu, exploring scripture, space exploration, and semiconductors.",
};
export default function Projects() {
  return (
    <main className="news-feed" id="main-content">
      <PageHeader title="Projects" description="Ideas turned into something you can use." />
      <section className="feed-section">
        <h2 className="section-title">Selected projects</h2>
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
      <PageFooter />
    </main>
  );
}

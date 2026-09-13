import { PageFooter } from "@/components/page-footer";
import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { ProfileStory, ProjectStories, WritingStories } from "@/components/portfolio-stories";

export default function Home() {
  return (
    <main id="main-content" className="news-feed">
      <PageHeader title="Aranga" description="Software engineer at ASML · Netherlands" />
      <Link className="announcement" href="/work">
        <span className="announcement-icon">a</span>
        <span>
          <strong>Interfaces for complex data at ASML</strong>
          <span>
            Software engineer · Netherlands <ChevronRight size={14} />
          </span>
        </span>
        <ArrowUpRight className="announcement-arrow" size={24} />
      </Link>
      <section className="feed-section">
        <h2 className="section-title">Meet Aranga</h2>
        <ProfileStory />
      </section>
      <section className="feed-section" id="projects">
        <div className="section-heading">
          <h2 className="section-title">Selected projects</h2>
          <Link href="/projects">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <ProjectStories />
      </section>
      <section className="feed-section" id="writing">
        <div className="section-heading">
          <h2 className="section-title">From the workbench</h2>
          <Link href="/blog">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <WritingStories />
      </section>
      <a
        className="connect-card"
        href="https://www.linkedin.com/in/arangates/"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span className="publisher">LET’S CONNECT</span>
          <strong>
            Good things start with
            <br />a conversation.
          </strong>
          <span>Say hello on LinkedIn</span>
        </span>
        <ArrowUpRight size={30} />
      </a>
      <PageFooter />
    </main>
  );
}

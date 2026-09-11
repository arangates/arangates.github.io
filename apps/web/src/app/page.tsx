import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { ProfileStory, ProjectStories, WritingStories } from "@/components/portfolio-stories";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main id="main-content" className="news-feed">
      <header className="feed-header">
        <div>
          <h1>Aranga</h1>
          <p>Engineer. Builder. Always curious.</p>
        </div>
        <div className="feed-header-right">
          <ModeToggle />
          <Image src="/aranga.jpg" alt="" width={43} height={43} />
        </div>
      </header>
      <a
        className="announcement"
        href="https://www.linkedin.com/in/arangates/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="announcement-icon">a</span>
        <span>
          <strong>Building thoughtful experiences at ASML</strong>
          <span>
            Software engineer · Netherlands <ChevronRight size={14} />
          </span>
        </span>
        <ArrowUpRight className="announcement-arrow" size={24} />
      </a>
      <section className="feed-section">
        <h2 className="section-title">Top Stories</h2>
        <ProfileStory />
      </section>
      <section className="feed-section" id="projects">
        <div className="section-heading">
          <h2 className="section-title">Made by Aranga</h2>
          <Link href="/projects">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <ProjectStories />
      </section>
      <section className="feed-section" id="writing">
        <div className="section-heading">
          <h2 className="section-title">From the Workbench</h2>
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
      <footer className="feed-footer">
        © {new Date().getFullYear()} Aranganathan Rathinavelu
        <br />
        <span>Built with curiosity. Made for the web.</span>
      </footer>
    </main>
  );
}

import { PageFooter } from "@/components/page-footer";
import { PageHeader } from "@/components/page-header";
import type { Metadata } from "next";
import Link from "next/link";
import { ProfileNavigation } from "@/components/profile-navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Aranganathan Rathinavelu, a full-stack software engineer at ASML in the Netherlands, building for the web since 2016.",
};
export default function About() {
  return (
    <main className="news-feed" id="main-content">
      <PageHeader title="About" description="The person behind the projects." />
      <ProfileNavigation />
      <section className="about-article">
        <Image src="/aranga.jpg" alt="Aranganathan Rathinavelu" width={160} height={180} priority />
        <span className="publisher red-publisher">ENGINEER & BUILDER</span>
        <h2>
          Aranganathan Rathinavelu.
          <br />
          Aranga, for short.
        </h2>
        <p>
          I’m a software engineer at ASML, based in the Netherlands. I enjoy turning complex
          problems into useful, approachable tools.
        </p>
        <p>
          Since 2016, I’ve worked on product dashboards, design systems, and full-stack
          applications. At ASML, I build data visualization tools for computational lithography.
        </p>
        <p>
          I care about thoughtful interfaces, simple interactions, and the little details that make
          software feel good to use.
        </p>
      </section>
      <section className="feed-section">
        <h2 className="section-title">Recent experience</h2>
        <div className="experience-card">
          <span className="asml-logo">ASML</span>
          <div>
            <strong>Software Engineer 3</strong>
            <p>ASML · Netherlands</p>
          </div>
          <span className="current-label">Current</span>
        </div>
        <div className="experience-card">
          <span className="boloo-logo">b.</span>
          <div>
            <strong>Full Stack Engineer</strong>
            <p>Boloo</p>
          </div>
          <span className="previous-label">Previously</span>
        </div>
        <Link className="profile-inline-link" href="/work">
          View full work history →
        </Link>
        <Link className="profile-inline-link" href="/skills">
          Explore skills & expertise →
        </Link>
      </section>
      <a
        className="all-repos"
        href="https://www.linkedin.com/in/arangates/"
        target="_blank"
        rel="noreferrer"
      >
        Connect on LinkedIn <ArrowUpRight size={16} />
      </a>
      <PageFooter />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProfileNavigation } from "@/components/profile-navigation";
import { skillGroups, certifications } from "@/content/career";
export const metadata: Metadata = {
  title: "Skills",
  description:
    "Aranga’s toolkit: frontend engineering, Python and Django, data visualization, delivery practices, and semiconductor domain expertise.",
};
export default function SkillsPage() {
  return (
    <main className="news-feed" id="main-content">
      <header className="feed-header">
        <div>
          <h1>Skills</h1>
          <p>The tools and thinking behind the work.</p>
        </div>
      </header>
      <ProfileNavigation />
      <section className="career-intro">
        <span className="publisher red-publisher">FULL-STACK ENGINEERING</span>
        <h2>
          Good tools.
          <br />
          Thoughtful applications.
        </h2>
        <p>
          I work across JavaScript and Python, combining React and Next.js interfaces with Django,
          PostgreSQL, and Redis. My experience spans product interfaces, data visualization, and
          semiconductor applications.
        </p>
      </section>
      <nav className="skill-jump-links" aria-label="Skill categories">
        <a href="#frontend">Frontend</a>
        <a href="#backend">Backend</a>
        <a href="#delivery">Delivery</a>
        <a href="#practice">Practices</a>
        <a href="#domain">Domain</a>
      </nav>
      <div className="skill-groups">
        {skillGroups.map((group, i) => (
          <section className="skill-group" key={group.id} id={group.id}>
            <div className="skill-group-heading">
              <span className={`skill-group-symbol skill-symbol-${i}`} aria-hidden="true">
                {["{ }", "⌘", "✓", "↗", "◇"][i]}
              </span>
              <h2>{group.title}</h2>
            </div>
            <p>{group.description}</p>
            <ul className="skill-chips">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <section className="learning-section">
        <h2 className="section-title">Continued Learning</h2>
        <div className="learning-card">
          <h3>Certifications & training</h3>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
        <div className="learning-card">
          <h3>Recognition</h3>
          <p>NASSCOM Technology Explorer (NTE)</p>
        </div>
      </section>
      <div className="career-next">
        <Link href="/work">
          See these skills in practice <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}

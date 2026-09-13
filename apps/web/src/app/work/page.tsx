import { PageFooter } from "@/components/page-footer";
import { PageHeader } from "@/components/page-header";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import { ProfileNavigation } from "@/components/profile-navigation";
import { workHistory } from "@/content/career";
export const metadata: Metadata = {
  title: "Work History",
  description:
    "Aranganathan Rathinavelu’s engineering experience, from frontend applications to full-stack tooling for computational lithography at ASML.",
};
export default function WorkPage() {
  return (
    <main className="news-feed" id="main-content">
      <PageHeader
        title="Work History"
        description="The teams, challenges, and work along the way."
      />
      <ProfileNavigation />
      <section className="career-intro">
        <span className="publisher red-publisher">BUILDING SINCE 2016</span>
        <h2>
          From web interfaces to
          <br />
          semiconductor insights.
        </h2>
        <p>
          I build and maintain large-scale web applications, with a focus on clear interfaces,
          complex data, and reliable delivery.
        </p>
      </section>
      <div className="career-section-heading">
        <h2 className="section-title">Experience</h2>
        <span>Most recent first</span>
      </div>
      <div className="work-history">
        {workHistory.map((company) => (
          <article className="work-company" key={company.company}>
            <header className="work-company-header">
              <span className={`employer-mark employer-${company.tone}`} aria-hidden="true">
                {company.mark}
              </span>
              <div>
                <h2>{company.company}</h2>
                <p>
                  <MapPin size={12} />
                  {company.location}
                </p>
              </div>
            </header>
            <div className="company-roles">
              {company.roles.map((role) => (
                <section className="work-role" key={role.title}>
                  <div className="work-role-title">
                    <h3>{role.title}</h3>
                    {"current" in role && role.current ? (
                      <span className="current-role-badge">Current</span>
                    ) : null}
                  </div>
                  <p className="role-dates">{role.dates}</p>
                  {role.highlights.length > 0 ? (
                    <ul>
                      {role.highlights.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  ) : null}
                  {role.tags.length > 0 ? (
                    <div className="career-tags">
                      {role.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <span className="publisher">ANNA UNIVERSITY</span>
          <h3>Bachelor of Engineering</h3>
          <p>Electrical and Electronics Engineering</p>
          <span className="role-dates">2012 — 2016</span>
        </div>
      </section>
      <div className="career-next">
        <Link href="/skills">
          Explore my skills <ArrowRight size={16} />
        </Link>
        <a href="https://www.linkedin.com/in/arangates/" target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight size={16} />
        </a>
      </div>
      <PageFooter />
    </main>
  );
}

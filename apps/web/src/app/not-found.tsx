import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";

export default function NotFound() {
  return (
    <main className="news-feed" id="main-content">
      <PageHeader title="Page not found" description="There’s more to explore." />
      <section className="not-found-card">
        <span className="publisher red-publisher">404</span>
        <h2>A little off course.</h2>
        <p>This page may have moved, or the link may be out of date.</p>
        <Link className="primary-link" href="/">
          Back to home <ArrowRight size={17} />
        </Link>
        <Link className="profile-inline-link" href="/projects">
          Explore projects <ArrowRight size={16} />
        </Link>
      </section>
      <PageFooter />
    </main>
  );
}

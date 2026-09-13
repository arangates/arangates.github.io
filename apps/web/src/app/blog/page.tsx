import { PageFooter } from "@/components/page-footer";
import { PageHeader } from "@/components/page-header";
import type { Metadata } from "next";
import { WritingArchive } from "@/components/writing-archive";
export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on frontend development and building for the web by Aranganathan Rathinavelu.",
};
export default function BlogPage() {
  return (
    <main className="news-feed blog-main" id="main-content">
      <PageHeader title="Writing" description="Notes from the workbench." />
      <h2 className="section-title">Thinking Out Loud</h2>
      <p className="blog-intro">
        On building for the web, figuring things out, and sharing what I learn along the way.
      </p>
      <WritingArchive />
      <p className="archive-note">From the archive. Articles open on my original site.</p>
      <PageFooter />
    </main>
  );
}

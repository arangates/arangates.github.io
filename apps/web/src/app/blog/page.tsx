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
      <header className="feed-header">
        <div>
          <h1>Writing</h1>
          <p>Notes from the workbench.</p>
        </div>
      </header>
      <h2 className="section-title">Thinking Out Loud</h2>
      <p className="blog-intro">
        On building for the web, figuring things out, and sharing what I learn along the way.
      </p>
      <WritingArchive />
      <p className="archive-note">From the archive. Articles open on my original site.</p>
    </main>
  );
}

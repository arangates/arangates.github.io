import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/content/portfolio";

export function ProjectStories() {
  return (
    <div className="stories">
      <a
        className="story-card"
        href="https://github.com/arangates/gita"
        target="_blank"
        rel="noreferrer"
      >
        <div className="story-art gita-art">
          <span className="art-kicker">GITA EXPLORER</span>
          <div className="gita-rings" />
          <span className="gita-word">गीता</span>
          <span className="art-caption">A little space for reflection.</span>
        </div>
        <div className="story-body">
          <span className="publisher gita-publisher">Gita Explorer</span>
          <h3>Ancient wisdom. A simpler way to explore it.</h3>
          <p>
            A quiet place to browse, read, and share the Bhagavad Gita. Built with Next.js and
            TypeScript.
          </p>
          <div className="story-meta">
            <span>Personal project · Open source</span>
            <ArrowUpRight size={17} />
          </div>
        </div>
      </a>
      <a
        className="story-card"
        href="https://github.com/arangates/spacex"
        target="_blank"
        rel="noreferrer"
      >
        <div className="story-art space-art">
          <span className="art-kicker">SPACEX EXPLORER</span>
          <div className="space-orbit" />
          <div className="space-planet" />
          <span className="space-headline">
            The next
            <br />
            frontier.
          </span>
          <span className="art-caption">Every launch has a story.</span>
        </div>
        <div className="story-body">
          <span className="publisher">SPACEX EXPLORER</span>
          <h3>A launch-by-launch journey beyond Earth.</h3>
          <p>Browse the missions and launches of the SpaceX program in one place.</p>
          <div className="story-meta">
            <span>Personal project · JavaScript</span>
            <ArrowUpRight size={17} />
          </div>
        </div>
      </a>
      <a
        className="story-card compact-story"
        href="https://github.com/arangates/die-wise"
        target="_blank"
        rel="noreferrer"
      >
        <div className="compact-copy">
          <span className="publisher">DIE WISE</span>
          <h3>Exploring the world inside the chip.</h3>
          <p>Semiconductor explorations, built with TypeScript.</p>
          <div className="story-meta">
            <span>Personal project</span>
            <ArrowUpRight size={17} />
          </div>
        </div>
        <div className="chip-art" aria-hidden="true">
          <span>⌘</span>
        </div>
      </a>
    </div>
  );
}
export function ProfileStory() {
  return (
    <a className="story-card profile-story" href="/about">
      <div className="profile-cover">
        <div>
          <span className="art-kicker">ENGINEER. BUILDER. CURIOUS HUMAN.</span>
          <span className="cover-name">
            Hello,
            <br />
            I’m Aranga.
          </span>
          <span className="cover-location">BASED IN THE NETHERLANDS</span>
        </div>
        <Image src="/aranga.jpg" alt="Aranganathan Rathinavelu" width={270} height={300} priority />
      </div>
      <div className="story-body">
        <span className="publisher red-publisher">MEET THE DEVELOPER</span>
        <h2>Making complex things feel simple.</h2>
        <p>
          I’m Aranganathan Rathinavelu, a software engineer at ASML. I build thoughtful digital
          experiences and care about the details that make software a joy to use.
        </p>
        <div className="story-meta">
          <span>My story · Engineering & curiosity</span>
          <ArrowUpRight size={17} />
        </div>
      </div>
    </a>
  );
}
export function WritingStories() {
  return (
    <div className="stories">
      {posts.slice(0, 3).map((post, i) => (
        <a
          className="story-card compact-story writing-story"
          key={post.slug}
          href={`https://aranganathan.vercel.app/blog/${post.slug}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="compact-copy">
            <span className="publisher red-publisher">{post.category}</span>
            <h3>{post.title}</h3>
            <div className="story-meta">
              <span>From the archive · Aranga</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
          <div className={`writing-art writing-art-${i}`} aria-hidden="true">
            {i === 0 ? "{ }" : i === 1 ? "N" : "♫"}
          </div>
        </a>
      ))}
    </div>
  );
}

import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import { Words } from '../components/Words';
import { About } from 'components/About';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto">
        <About />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white pt-8">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="How I Built My Site with Next.js"
            slug="how-i-built-my-website-with-nextjs"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Using the Spotify API with Next.js"
            slug="spotify-api-nextjs"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <BlogPostCard
            title="Which Back End Should I Use As A Front-End Developer?"
            slug="backend"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <Words />
        <span className="h-16" />
      </div>
    </Container>
  );
}

import { useState } from 'react';

import Container from 'components/Container';
import QuotesPost from 'components/QuotesPost';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'lib/utils';
import { allQuotes } from '.contentlayer/data';

export default function Quotes({
  quotes
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogQuotes = quotes
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((post) =>
      post.quote.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="Quotes – Aranganathan Rathinavelu"
      description="Thoughts on the readings"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Quotes
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`When [God] is moving you toward a new consciousness, you need to recognize the winds of change at once, move with them instead of clinging to what is already gone.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search Quotes"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Quotes"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {!filteredBlogQuotes.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No quotes found.
          </p>
        )}
        {filteredBlogQuotes.map((post) => (
          <QuotesPost key={post.slug} {...post} />
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const quotes = allQuotes.map((post) =>
    pick(post, ['slug', 'publishedAt', 'author', 'quote'])
  );

  return { props: { quotes } };
}

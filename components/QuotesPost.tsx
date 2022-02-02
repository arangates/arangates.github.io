import type { Quote } from '.contentlayer/types';

const QuoteIcon = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-12"
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
  );
};
export default function QuotesPost({
  quote,
  author,
  slug
}: Pick<Quote, 'quote' | 'author' | 'slug'>) {
  return (
    <blockquote className="pl-12 mt-10">
      <div className="relative">
        <QuoteIcon />
        <div className="text-gray-700 dark:text-gray-200">{quote}</div>
      </div>

      <footer className="mt-2 italic font-bold text-gray-500 dark:text-gray-500">
        <span className="font-normal">- {author}</span>
      </footer>
    </blockquote>
  );
}

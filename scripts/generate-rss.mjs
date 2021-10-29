import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '.contentlayer/data';

async function generate() {
  const feed = new RSS({
    title: 'Aranganathan Rathinavelu',
    site_url: 'https://aranganathan.vercel.app',
    feed_url: 'https://aranganathan.vercel.app/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://aranganathan.vercel.app/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();

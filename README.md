[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Farangates%2Faranganathan.vercel.app)

# aranganathan.vercel.app

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://aranga.in/dashboard), newsletter subscription, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://aranga.in/dashboard) containing metrics like sales, views, and subscribers.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/arangates/aranganathan.vercel.app.git
$ cd aranganathan.vercel.app
$ yarn
$ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/arangates/aranganathan.vercel.app/blob/main/.env.example).

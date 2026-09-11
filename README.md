# Aranga’s portfolio

Personal portfolio for Aranganathan Rathinavelu, hosted at **https://arangates.github.io**.

Built with Next.js, React, TypeScript, and Tailwind CSS. All pages are exported as static HTML, CSS, and JavaScript. Search and theme switching run in the browser. No database, authentication, API server, environment variables, or deployment secrets are required.

## Local development

Use Node.js 24+ and pnpm 11.17.0.

```sh
npm install --global pnpm@11.17.0
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3001.

## Build and preview the actual static site

```sh
pnpm build
pnpm verify:export
pnpm preview
```

Open http://localhost:4173. The preview serves `apps/web/out` directly, including directory indexes and the 404 page, without a Next.js server or SPA fallback. Stop it with Ctrl+C. Set `PORT` to use another port.

Do not use `next start`: the build is a static export.

## Publish to GitHub Pages

1. Rename this GitHub repository to **arangates.github.io** under **Settings → General → Repository name**. It must belong to the `arangates` account.
2. If using GitHub Free, make the repository public. Paid plans may support Pages from private repositories.
3. Under **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source. Leave the custom domain empty for the `github.io` address.
4. Commit these changes and push them to `main`. If your default branch has another name, update the branch filters and deployment condition in `.github/workflows/pages.yml`.
5. In **Actions**, open **Deploy portfolio to GitHub Pages** and wait for the build and deployment jobs to finish. You can also run it manually on `main` with **Run workflow**.
6. Visit https://arangates.github.io and open `/about/`, `/projects/`, `/blog/`, `/skills/`, and `/work/` directly to confirm deployment.

If necessary, update your local remote after renaming:

```sh
git remote set-url origin https://github.com/arangates/arangates.github.io.git
```

The workflow installs from the frozen lockfile, lints, builds, checks exported links/assets, and publishes only `apps/web/out`. Pull requests run the build checks without deploying. GitHub provides the deployment token automatically; no personal access token is needed.

The site is served at the domain root, so **do not add a `basePath` or `assetPrefix`**. Do not commit `out`, `.next`, `.env`, or `node_modules`. A `.nojekyll` marker is included in the export. There is no CNAME file because this setup uses the default GitHub Pages domain.

## Content and structure

- `apps/web/src/app/`: Home, About, Projects, Writing, Skills, and Work History pages.
- `apps/web/src/content/career.ts`: Work history, skills, and certifications.
- `apps/web/src/content/portfolio.ts`: Existing article titles, descriptions, and URLs.
- `apps/web/src/components/portfolio-stories.tsx`: Project and profile story cards.
- `apps/web/src/components/header.tsx`: Desktop and mobile navigation.
- `apps/web/src/components/discovery-sidebar.tsx`: Portfolio search and discovery panels.
- `apps/web/src/index.css`: Styling and responsive layouts.
- `apps/web/public/`: Public assets, including the profile photo.
- `scripts/`: Static preview and export verification.

Articles currently link to the original blog at `aranganathan.vercel.app`; the article bodies are not copied into this repository.

After changing content, push to `main` to rebuild and publish. Dates and content rendered at build time update on the next deployment.

## Checks

```sh
pnpm lint
pnpm check-types
pnpm build
pnpm verify:export
```

`pnpm format` formats the repository. Keep new features static: server authentication, API routes, request-time data, and server actions require a different hosting setup.

## Hosting references

- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

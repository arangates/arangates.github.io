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

1. Use the **arangates/arangates.github.io** repository for the account’s root Pages site.
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
- `apps/web/src/components/page-header.tsx` and `page-footer.tsx`: Shared page title, appearance control, and contact links.
- `apps/web/src/app/not-found.tsx`: Branded recovery page for missing URLs.
- `apps/web/src/app/robots.ts` and `sitemap.ts`: Static search-engine discovery files.
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
pnpm test:pwa
```

`pnpm format` formats the repository. Keep new features static: server authentication, API routes, request-time data, and server actions require a different hosting setup.

## Hosting references

- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Publishing content

Keep work history and skills in `career.ts`. Keep claims specific to work you can describe publicly. Link credentials to LinkedIn; add issuer and date only when verified. An updated résumé can be added later, but the outdated résumé and template cover letter are intentionally not included.

## Progressive web app

The production build generates `apps/web/out/sw.js` after Next.js exports the site. No PWA service worker is registered during `pnpm dev`; test offline behavior with `pnpm build && pnpm preview` on localhost or the HTTPS GitHub Pages deployment.

- Install from the footer or your browser’s installation menu. iPhone/iPad users can use Safari → Share → Add to Home Screen. macOS Safari supports File → Add to Dock.
- The first successful visit saves every portfolio page, image, and script, including Next.js navigation payloads. Wait for **Available offline on this device** in the footer before disconnecting. Browser storage is best-effort and may be cleared or evicted.
- App shortcuts open Projects, Work history, Skills, and Writing. PNG icons include a maskable variant and an Apple touch icon. Standalone windows respect device safe areas and the selected color theme.
- Share the current page through the native share sheet when supported, with clipboard fallback. Shared links always use the public GitHub Pages domain.
- A new deployment downloads into a separate, content-verified cache. **Refresh** accepts the update and refreshes open portfolio tabs; **Dismiss** keeps the current release. Updates are checked on opening, reconnecting, returning to the tab, or using **Check for updates**. Old portfolio caches are removed after activation. Other applications’ caches are untouched.
- Unknown pages show an offline fallback while disconnected. LinkedIn, GitHub, email, and full articles on the original blog require their respective external services; these are not cached.

All PWA controls are progressive enhancements. Installation and sharing availability depend on the browser. The portfolio does not request notification, location, or file permissions. Push subscriptions and background submissions are not implemented because this static portfolio has no backend or submission workflow.

### PWA verification

`pnpm test:pwa` exercises cache isolation, offline HTML and React payloads, failed/mixed deployments, and explicit update activation. `pnpm verify:export` checks app assets, shortcut routes, and actual PNG dimensions. CI runs both.

For browser verification: visit the production preview, wait for the offline-ready label, enable browser DevTools offline mode, navigate to another portfolio page and reload. Rebuild while the page remains open, reconnect, then use **Check for updates** and **Refresh** to verify the update flow. Also test installation on a real iOS/Android device before announcing platform-specific support.

If you ever retire the service worker, deploy a replacement at `/sw.js` that unregisters itself and removes only the `aranga-portfolio-` caches. Simply removing registration from React will not remove workers already installed on visitors’ devices.

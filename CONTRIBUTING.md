# Contributing to BTAJI Crew

Thanks for helping improve the community website. Useful contributions include clearer content, accessible interactions, responsive layouts, corrected links, and well-sourced competition updates.

## Set up your checkout

Use the commands in the [README](README.md#run-locally) to clone the repository, install dependencies with `npm ci`, and start Vite. This project includes an npm lockfile; keep it consistent with `package.json` when changing dependencies.

Create a branch for your change:

```bash
git switch -c docs/improve-community-guide
```

Choose a name that describes your own change. External contributors can fork the repository and open a pull request from their fork.

## Find the right file

| Location | Purpose |
| --- | --- |
| `src/App.tsx` | Routes and shared application providers. |
| `src/pages/` | Home, competitions, research, and certificate pages. |
| `src/components/` | Navigation, footer, and reusable page sections. |
| `src/components/ui/` | Shared shadcn/ui components. |
| `src/components/RouteScroll.tsx` | Page titles and scroll position on navigation. |
| `src/data/stormCost.ts` | Final leaderboard, participant identities, search, and certificate file mapping. |
| `src/assets/` | Team portraits and other bundled images. |
| `public/certificates/storm-cost/` | Approved participant certificate PDFs. |
| `src/index.css` and `tailwind.config.ts` | Theme, typography, and styling. |
| `src/test/` | Vitest tests and test setup. |
| `vercel.json` | SPA rewrite so nested routes work when opened directly. |

Website content is currently maintained in source files. There is no CMS or database to configure.

## Check your change

Run the checks relevant to your work:

```bash
npm run build
npm test
npx tsc --noEmit -p tsconfig.app.json
npm run lint
```

`npm run test:watch` keeps tests running while you work. For a production preview, run `npm run build` followed by `npm run preview` and open the URL printed by Vite.

For interface changes, check desktop and mobile layouts, keyboard navigation, and the main interaction you changed. Open nested pages directly and refresh them as well as following links from the homepage.

Documentation-only changes normally need link and formatting checks, rather than a full application test run. Mention any existing check failures separately from issues caused by your changes.

## Update community and competition content

- Use participants' confirmed names for certificates. A Kaggle display name may differ from the name they want printed.
- Preserve final leaderboard ranks, score precision, and team membership unless an authoritative correction is available.
- Keep each participant's certificate-page identifier stable so shared links continue to work.
- Follow the [certificate publishing guide](public/certificates/storm-cost/README.md) when adding PDFs.
- Publish only approved public content. Contact details collected to arrange certificates do not belong in the website data or repository.

## Open a pull request

Keep each change focused. Explain what a visitor will see, why the change helps, and how you checked it. Include screenshots for visible layout changes and source links for factual corrections. Do not include build output, local credentials, or `node_modules`.

## Deployment reference

The project builds into `dist/` with `npm run build`. A Vercel deployment can use:

| Setting | Value |
| --- | --- |
| Framework | Vite |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |

Keep the rewrite in `vercel.json` so routes such as `/competitions/storm-cost/certificates/ayeshasal89` reach the React app. Other static hosts need an equivalent fallback to `index.html`, while serving existing assets normally.

Certificate availability is determined during the build. Adding a PDF requires a fresh build and deployment of both the application and its public files.

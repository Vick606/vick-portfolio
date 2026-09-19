# Victor Koech — Portfolio

![GitHub last commit](https://img.shields.io/github/last-commit/Vick606/vick-portfolio)
![GitHub issues](https://img.shields.io/github/issues/Vick606/vick-portfolio)
![GitHub stars](https://img.shields.io/github/stars/Vick606/vick-portfolio)

Personal portfolio for **Victor Koech** — AI training, LLM evaluation and Python engineering.

**Live:** https://vk-portfolio.vercel.app/

## Features

- **Responsive layout** — mobile-first, tested down to small phone widths
- **Dark / light theme** — follows the system preference by default, with a manual toggle
- **Curated project list** — six projects, tiered into featured work and additional work
- **Scroll-driven animation** — parallax hero and staggered section reveals
- **Fully static** — every route is prerendered at build time; no runtime data fetching

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router, Turbopack) |
| Language | [TypeScript](https://www.typescriptlang.org/) 5.9, `strict` |
| UI runtime | [React](https://react.dev/) 19 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3.4 |
| Components | [shadcn/ui](https://ui.shadcn.com/) on Radix primitives |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Linting | [ESLint](https://eslint.org/) 9, flat config |
| Package manager | [pnpm](https://pnpm.io/) 12 |
| Hosting | [Vercel](https://vercel.com/) |

## Getting started

### Prerequisites

- **Node.js 20.9.0 or newer** — required by Next.js 16
- **pnpm 10 or newer** — if you don't have it:

  ```bash
  winget install pnpm.pnpm      # Windows
  brew install pnpm             # macOS
  ```

  Or see the [pnpm install docs](https://pnpm.io/installation) for other platforms.

### Setup

```bash
git clone https://github.com/Vick606/vick-portfolio.git
cd vick-portfolio
pnpm install
pnpm dev
```

Then open http://localhost:3000.

### Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server (Turbopack) |
| `pnpm build` | Create an optimised production build |
| `pnpm start` | Serve the production build locally |
| `pnpm lint` | Run ESLint across the project |

`pnpm install --frozen-lockfile` installs exactly the versions pinned in `pnpm-lock.yaml` and fails if the lockfile is out of sync — use it in CI. Plain `pnpm install` will update the lockfile when `package.json` has changed.

### A note on pnpm

pnpm stores each package version once in a global content-addressable store and hard-links it into each project, so several projects sharing a stack don't duplicate it on disk. It also keeps `node_modules` isolated, which means a package you never declared in `package.json` cannot be imported — that turns phantom dependencies into an immediate error instead of a build failure on Vercel.

Two things worth knowing:

- Hard links can't cross volumes. The store must be on the same drive as the project, otherwise pnpm silently falls back to copying and the disk saving disappears. Check with `pnpm store path`.
- If a package with a lifecycle script is skipped during install, run `pnpm approve-builds` to approve it.

## Project structure

```
app/                     App Router entry point
  layout.tsx             Root layout, metadata, fonts
  page.tsx               Home page — composes the sections
  globals.css            Tailwind layers, theme tokens, custom utilities
  providers.tsx          Theme provider
components/
  layout/                Header, navigation, theme toggle
  sections/              Page sections — hero, about, skills, services,
                         projects, education, certifications, contact
  ui/                    shadcn/ui primitives (button, card, badge, sheet…)
lib/                     Shared utilities
public/images/           Profile photo
```

## Customisation

| What | Where |
|---|---|
| Project entries | `components/sections/projects.tsx` |
| Skills | `components/sections/skills.tsx` |
| Services offered | `components/sections/services.tsx` |
| Education | `components/sections/education.tsx` |
| Certifications | `components/sections/certifications.tsx` |
| Colour tokens and theme | `app/globals.css` |

## Deployment

Deployed on Vercel and wired to this repository:

- Push to `main` → production deploy
- Open a pull request → preview deploy with its own URL

Vercel detects the package manager from the lockfile and runs `pnpm install` — no build settings needed. Do **not** set an override install command of `pnpm install` in the project settings, as that pins the build to the oldest pnpm version Vercel has available.

No environment variables are required.

## License

Released under the MIT License — see [LICENSE](LICENSE).

## Contact

- **GitHub** — [@Vick606](https://github.com/Vick606)
- **LinkedIn** — [Victor Koech](https://www.linkedin.com/in/victor-koech-b69407136/)
- **Email** — [vickoch20@gmail.com](mailto:vickoch20@gmail.com)

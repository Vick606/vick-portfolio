# Victor Koech — Portfolio

![GitHub last commit](https://img.shields.io/github/last-commit/Vick606/vick-portfolio)
![GitHub issues](https://img.shields.io/github/issues/Vick606/vick-portfolio)
![GitHub stars](https://img.shields.io/github/stars/Vick606/vick-portfolio)

Personal portfolio for **Victor Koech** — machine learning, data science and AI engineering work.

**Live:** https://vk-portfolio.vercel.app/

## Features

- **Responsive layout** — mobile-first, tested down to small phone widths
- **Dark / light theme** — follows the system preference by default, with a manual toggle
- **Filterable project gallery** — browse by category, with per-category counts
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
| Hosting | [Vercel](https://vercel.com/) |

## Getting started

### Prerequisites

- **Node.js 20.9.0 or newer** — required by Next.js 16
- npm

### Setup

```bash
git clone https://github.com/Vick606/vick-portfolio.git
cd vick-portfolio
npm ci
npm run dev
```

Then open http://localhost:3000.

`npm ci` installs the exact versions pinned in `package-lock.json`. Use it rather than `npm install` to get a reproducible tree.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Create an optimised production build |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

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
                         projects, certifications, contact
  ui/                    shadcn/ui primitives (button, card, badge, sheet…)
lib/                     Shared utilities
public/images/           Profile photo and project imagery
```

## Customisation

| What | Where |
|---|---|
| Project entries and categories | `components/sections/projects.tsx` |
| Skills and proficiency levels | `components/sections/skills.tsx` |
| Certifications | `components/sections/certifications.tsx` |
| Services offered | `components/sections/services.tsx` |
| Colour tokens and theme | `app/globals.css` |

## Deployment

Deployed on Vercel and wired to this repository:

- Push to `main` → production deploy
- Open a pull request → preview deploy with its own URL

No environment variables are required.

## License

Released under the MIT License — see [LICENSE](LICENSE).

## Contact

- **GitHub** — [@Vick606](https://github.com/Vick606)
- **LinkedIn** — [Victor Koech](https://www.linkedin.com/in/victor-koech-b69407136/)
- **Email** — [vickoch20@gmail.com](mailto:vickoch20@gmail.com)

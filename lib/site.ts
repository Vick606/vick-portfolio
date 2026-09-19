// Single source of truth for the site's absolute URL and identity strings.
//
// `metadataBase`, `sitemap.ts` and `robots.ts` all need an absolute origin, and
// hardcoding it in three places is how a sitemap ends up advertising a preview
// host. `metadataBase` is derived from this, and every relative URL in
// `openGraph` / `alternates` resolves against it.
//
// Deliberately NOT inferred from `VERCEL_URL`. That variable holds the
// *deployment* host, so on a preview build the canonical tag and every OG image
// URL would point at `vk-portfolio-git-<branch>-<hash>.vercel.app`. A canonical
// tag aimed at a preview host is worse than no canonical tag at all — it tells
// crawlers the real page is somewhere it isn't.
//
// Moving to a custom domain: either change the fallback below, or set
// `NEXT_PUBLIC_SITE_URL` in the Vercel project and change no code at all. The
// value must include the scheme (`https://…`) — `new URL()` throws otherwise,
// which fails the build rather than shipping a broken canonical.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vk-portfolio.vercel.app';

export const SITE_NAME = 'Victor Koech';

export const SITE_TITLE = 'Victor Koech | AI Training, LLM Evaluation & Python';

export const SITE_DESCRIPTION =
  'Five years in AI training, data annotation and Python. I build the tooling that makes AI evaluation reproducible.';

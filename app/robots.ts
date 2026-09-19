import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Nothing here is private, so the default is to allow everything. The file
// exists mainly so `/robots.txt` returns 200 with a working sitemap pointer
// instead of a 404 — and so that if a private area is ever added, the place to
// disallow it already exists and is obvious.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

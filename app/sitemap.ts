import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// The site is a single page. Every nav target is an in-page anchor, not a
// route, so there is exactly one URL worth listing — and the anchors are
// deliberately NOT listed. Search engines treat `/#about` and `/` as the same
// document, so including them would create duplicate entries rather than extra
// coverage.
//
// No `lastModified`: it would be `new Date()` evaluated at build time, telling
// crawlers the page changed on every deploy when it did not. A sitemap entry
// with no lastmod is valid, and honest.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL }];
}

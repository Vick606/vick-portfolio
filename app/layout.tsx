import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './providers';
import { Header } from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '@/lib/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // Without this, Next.js cannot resolve the relative URLs below and emits no
  // absolute `og:image` / canonical URL at all — the link preview silently
  // renders as a bare URL with no card.
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    // Unused today (one page), but a child route that sets its own title picks
    // this up instead of silently inheriting the full site title.
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  // Google ignores meta keywords entirely. Kept short and factual for the
  // engines that still read them; every term is drawn from the locked
  // positioning, nothing aspirational.
  keywords: [
    'AI training',
    'LLM evaluation',
    'data annotation',
    'Python',
    'AI evaluation',
    'remote AI trainer',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: '/',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    // `summary_large_image` promises a 1200x630 image. There isn't one yet, and
    // a large card with no image looks worse than a compact one — so this stays
    // `summary` until `app/opengraph-image.tsx` lands, then flips.
    card: 'summary',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        {/* First focusable element on the page. `#main` carries tabIndex={-1}
            so following this link actually moves focus, not just the scroll
            position — otherwise keyboard users stay stranded in the header. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main id="main" tabIndex={-1} className="relative min-h-screen">
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
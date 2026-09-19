import { Inter } from 'next/font/google';
import { ThemeProvider } from './providers';
import { Header } from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Victor Koech | AI Training, LLM Evaluation & Python',
  description:
    'Five years in AI training, data annotation and Python. I build the tooling that makes AI evaluation reproducible.',
  icons: {
    icon: '/favicon.ico',
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
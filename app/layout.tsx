import { Inter } from 'next/font/google';
import { ThemeProvider } from './providers';
import { Header } from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Victor K | Data Science & Workflow Automation',
  description: 'Transforming data into insights and workflows into efficiency',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main id="main" className="relative min-h-screen">
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
import { Inter } from 'next/font/google';
import { ThemeProvider } from './providers';
import { Header } from '@/components/layout/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Victor Koech - Data Scientist & Tech Enthusiast',
  description: 'Portfolio showcasing data science projects and technical expertise',
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
        </ThemeProvider>
      </body>
    </html>
  );
}
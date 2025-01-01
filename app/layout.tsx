// app/layout.tsx
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers'
import { Header } from '@/components/layout/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moncef Djezzar - AI & Data Science Portfolio',
  description: 'AI and Data Science Portfolio showcasing machine learning projects and technical expertise',
  icons: {
    icon: '/favicon.ico', // Place your favicon in the public folder
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
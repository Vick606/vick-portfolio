"use client"

import { useEffect, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { Menu, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

// Order matches the render order in app/page.tsx.
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' }
]

// Stable no-op subscription for the hydration guard below. Declared at module
// scope so the reference never changes between renders.
const subscribeToNothing = () => () => {}
const getIsClient = () => true
const getIsServer = () => false

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, setTheme } = useTheme()
  // Hydration guard: false during SSR and the first client render, true after.
  // Replaces the previous setState-in-effect pattern, which React flags as
  // triggering cascading renders.
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    getIsClient,
    getIsServer,
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tracks which section sits under the header. The rootMargin carves out a
  // band just below the 64px header so exactly one section reads as current
  // rather than several at once.
  //
  // The nav links themselves are plain anchors now: scrolling is CSS
  // (`html { scroll-behavior }` in globals.css) and the header offset is
  // `scroll-mt-20` on each section. Nothing here calls preventDefault, so the
  // URL hash is written normally and links can be shared, middle-clicked and
  // opened without JS.
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-80px 0px -70% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container relative mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="#home"
              className="text-xl font-bold hover:text-primary transition-colors"
            >
              Victor Koech
            </Link>
          </motion.div>

          {/* Eight links need room: the nav appears at lg, and the gap is 6
              rather than 8, so it clears the logo instead of colliding with it
              around tablet widths. */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navLinks.map(({ href, label }) => {
                const isActive = activeSection === href
                return (
                  <motion.li
                    key={href}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href={href}
                      aria-current={isActive ? 'true' : undefined}
                      className={`transition-colors relative group ${
                        isActive ? 'text-primary' : 'hover:text-primary'
                      }`}
                    >
                      {label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <AnimatePresence mode="wait" initial={false}>
              {mounted && (
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="relative h-9 w-9 md:h-10 md:w-10 hover:bg-accent hover:text-accent-foreground rounded-full"
                  >
                    <Sun className="h-4 w-4 md:h-5 md:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 md:h-5 md:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                <nav className="flex flex-col mt-6">
                  {navLinks.map(({ href, label }, index) => (
                    <motion.div
                      key={href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={href}
                        aria-current={activeSection === href ? 'true' : undefined}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 text-lg transition-colors block ${
                          activeSection === href
                            ? 'text-primary'
                            : 'hover:text-primary'
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

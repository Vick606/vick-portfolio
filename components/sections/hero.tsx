"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight, User } from "lucide-react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
    >
      {/* Dynamic Background with Parallax Effect */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background/20 dark:from-primary/10 dark:to-background/10" />
        <div className="absolute inset-0 bg-grid-black/[0.1] dark:bg-grid-white/[0.1]" />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 dark:from-primary/5 dark:to-primary/10"
        />
      </motion.div>

      {/* Split Layout Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content (Left on Desktop, Second on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 text-center md:text-left flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Victor Koech
            </span>
            <br />
            My Journey in Tech and Data Science
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          Harnessing machine learning and data analytics to solve complex real-world problems.
          </p>
          <p className="text-sm text-muted-foreground italic mb-8">
          &quot;Innovating for a smarter tomorrow&quot;
          </p>

          {/* Animated CTAs (Smaller Buttons) */}
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2 text-sm md:text-base"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Projects <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-primary text-primary px-4 py-2 rounded-lg font-medium flex items-center gap-2 text-sm md:text-base"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About Me <User className="w-3 h-3 md:w-4 md:h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Image (Right on Desktop, First on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ scale: imageScale }}
          className="order-1 md:order-2 relative w-48 h-48 md:w-64 md:h-64"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/60 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-background relative">
              {/* Geometric Pattern */}
              <div className="absolute inset-0 bg-[url('/images/geometric-pattern.svg')] bg-cover opacity-20 dark:opacity-10" />
              {/* Profile Image */}
              <Image
                src="/images/profile.png"
                alt="Profile"
                fill
                className="object-cover rounded-full z-10 filter grayscale-[50%] contrast-[110%] brightness-[90%]"
                priority
              />
            </div>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-xl" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full blur-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
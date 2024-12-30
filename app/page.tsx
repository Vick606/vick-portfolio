// app/page.tsx
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { SkillsSection } from '@/components/sections/skills'
import { ProjectsSection } from '@/components/sections/projects'
import { ContactSection } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
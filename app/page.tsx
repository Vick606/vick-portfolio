import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { CertificationsSection } from '@/components/sections/certifications';
import { ContactSection } from '@/components/sections/contact';
import { ServicesSection } from '@/components/sections/services'; // Import the new ServicesSection

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection /> {/* Add the ServicesSection here */}
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
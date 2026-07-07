import { AboutSection } from '@/sections/about/about-section';
import { ContactSection } from '@/sections/contact/contact-section';
import { ExperienceSection } from '@/sections/experience/experience-section';
import { HeroSection } from '@/sections/hero/hero-section';
import { ProjectSection } from '@/sections/projects/project-section';
import { SkillSection } from '@/sections/skills/skills-section';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection/>
    </main>
  );
};

export default HomePage;

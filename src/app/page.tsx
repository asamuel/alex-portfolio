import { AboutSection } from '@/sections/about/about';
import { ContactSection } from '@/sections/contact/contact-section';
import { ExperienceSection } from '@/sections/experience/experience';
import { HeroSection } from '@/sections/hero/hero';
import { ProjectSection } from '@/sections/projects/project-section';
import { SkillSection } from '@/sections/skills/skills';

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

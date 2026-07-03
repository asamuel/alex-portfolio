import { AboutSection } from '@/sections/about/about';
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
    </main>
  );
};

export default HomePage;

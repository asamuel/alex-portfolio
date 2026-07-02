import { AboutSection } from '@/sections/about/about';
import { ExperienceSection } from '@/sections/experience/experience';
import { HeroSection } from '@/sections/hero/hero';
import { SkillSection } from '@/sections/skills/skills';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
    </main>
  );
};

export default HomePage;

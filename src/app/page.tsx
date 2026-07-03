import { AboutSection } from '@/sections/about/about';
import { HeroSection } from '@/sections/hero/hero';
import { SkillSection } from '@/sections/skills/skills';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
    </main>
  );
};

export default HomePage;

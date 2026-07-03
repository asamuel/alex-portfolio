import { skills } from '@/constants/skills';
import { SkillsGrid } from './skills-grid';

export const SkillSection = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">Skills</p>

          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technologies I use to build secure and scalable systems.
          </h2>
        </div>

        <div className="mt-12">
          <SkillsGrid skills={skills} />
        </div>
      </div>
    </section>
  );
};

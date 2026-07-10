import type { Skill } from '@/types/skill';

import { SkillTag } from './skill-tag';

type SkillsGridProps = {
  skills: Skill[];
};

const SKILL_VISIBLE_LIMITS: Record<string, number> = {
  backend: 7,
  frontend: 6,
  mobile: 6,
  database: 5,
  'cloud-devops': 4,
  'ai-tools': 3,
};

const DEFAULT_VISIBLE_SKILLS = 6;

export const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
      {skills.map((skillGroup) => {
        const visibleLimit = SKILL_VISIBLE_LIMITS[skillGroup.id] ?? DEFAULT_VISIBLE_SKILLS;

        const visibleItems = skillGroup.items.slice(0, visibleLimit);
        const hiddenCount = skillGroup.items.length - visibleItems.length;

        return (
          <article
            key={skillGroup.id}
            className="flex flex-col rounded-sm border border-border bg-card/60 p-4 transition-all duration-300 hover:border-accent/50 hover:bg-card sm:p-5 lg:hover:-translate-y-0.5"
          >
            <h3 className="font-mono text-sm font-medium uppercase tracking-widest text-foreground">
              {skillGroup.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">{skillGroup.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <div className="flex flex-wrap gap-2 xl:hidden">
                {visibleItems.map((item) => (
                  <SkillTag key={item.name} name={item.name} />
                ))}

                {hiddenCount > 0 && <SkillTag name={`+${hiddenCount}`} isCounter />}
              </div>

              <div className="hidden flex-wrap gap-2 xl:flex">
                {skillGroup.items.map((item) => (
                  <SkillTag key={item.name} name={item.name} />
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

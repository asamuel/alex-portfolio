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
    <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-3">
      {skills.map((skillGroup) => {
        const visibleLimit = SKILL_VISIBLE_LIMITS[skillGroup.id] ?? DEFAULT_VISIBLE_SKILLS;

        const visibleItems = skillGroup.items.slice(0, visibleLimit);
        const hiddenCount = skillGroup.items.length - visibleItems.length;

        return (
          <div
            key={skillGroup.id}
            className="rounded-sm border border-border p-5 bg-card/60 transition-colors hover:bg-card"
          >
            <h3 className="font-mono text-sm uppercase tracking-widest text-foreground">
              {skillGroup.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-foreground/65">{skillGroup.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <div className="hidden flex-wrap gap-2 lg:flex">
                {skillGroup.items.map((item) => (
                  <SkillTag key={item.name} name={item.name} />
                ))}
              </div>

              <div className="flex flex-wrap gap-2 lg:hidden">
                {visibleItems.map((item) => (
                  <SkillTag key={item.name} name={item.name} />
                ))}

                {hiddenCount > 0 && <SkillTag name={`+${hiddenCount}`} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

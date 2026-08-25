import { Project } from '@/types/project';
import { TechCategory } from '@/types/tech-category';
import { techCategoryLabels } from '@/types/tech-category';

type ProjectTechStackProps = {
  project: Project;
};

export const ProjectTechStack = ({ project }: ProjectTechStackProps) => {
  const groupedTech = project.techStack.reduce<Partial<Record<TechCategory, string[]>>>(
    (groups, tech) => {
      const items = groups[tech.category] ?? [];

      items.push(tech.name);
      groups[tech.category] = items;
      return groups;
    },
    {}
  );

  const categories = Object.entries(groupedTech) as [TechCategory, string[]][];

  if (categories.length === 0) return null;

  return (
    <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
              Tech Stack
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {categories.map(([category, tecnologies]) => (
              <div key={category} className="border-t border-border pt-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {techCategoryLabels[category]}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tecnologies.map((tecnology) => (
                    <span
                      key={tecnology}
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                    >
                      {tecnology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import type { Project } from '@/types/project';

type ProjectImpactProps = {
  project: Project;
};

export const ProjectImpact = ({ project }: ProjectImpactProps) => {
  if (project.impact.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
              Impact
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.impact.map((item) => (
              <article key={item} className="rounded-xl border border-border bg-card p-5 sm:p-6">
                <p className="text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Project } from '@/types/project';

type ProjectContributionsProps = {
  project: Project;
};

export const ProjectContributions = ({ project }: ProjectContributionsProps) => {
  if (project.keyContributions.length === 0) return null;

  return (
    <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
              Key Contributions
            </p>
          </div>

          <ol className="border-t border-border">
            {project.keyContributions.map((contribution, index) => (
              <li
                key={contribution}
                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[48px_1fr] sm:gap-6"
              >
                <span className="font-mono text-xs text-muted-foreground" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="max-w-3xl text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
                  {contribution}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

import type { Project } from '@/types/project';

type ProjectChallengesProps = {
  project: Project;
};

export const ProjectChallenges = ({ project }: ProjectChallengesProps) => {
  if (project.keyChallenges.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <h2 className="font-mono text-xs font-normal uppercase tracking-[0.22em] text-accent sm:text-sm">
              Key Challenges
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.keyChallenges.map((challenge, index) => (
              <article
                key={challenge}
                className="
                rounded-xl
                border
                border-border
                bg-card/60
                p-5
                transition-[transform,border-color,background-color]
                duration-200
                ease-out
                hover:-translate-y-0.5
                hover:border-accent/30
                hover:bg-card
                sm:p-6"
              >
                <span className="font-mono text-xs text-muted-foreground" aria-hidden="true">
                  Challenge {String(index + 1).padStart(2, '0')}
                </span>

                <p className="mt-3 text-base leading-7 text-foreground/75  sm:leading-8">
                  {challenge}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

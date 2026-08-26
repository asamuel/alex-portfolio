import { Project } from '@/types/project';

type ProjectChallengesProps = {
  project: Project;
};
export const ProjectChallenges = ({ project }: ProjectChallengesProps) => {
  if (project.keyChallenges.length === 0) return null;

  return (
    <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
              Key Challenges
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {project.keyChallenges.map((challenge) => (
              <article key={challenge} className="border-t border-border pt-5">
                <p className="text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
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

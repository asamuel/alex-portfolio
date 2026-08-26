import { Project } from '@/types/project';
import { ProjectNarrativeText } from './project-narrative-text';

type ProjecEngineeringDecisionsProps = {
  project: Project;
};

export const ProjecEngineeringDecisions = ({ project }: ProjecEngineeringDecisionsProps) => {
  if (!project.engineeringDecisions?.length) return null;

  return (
    <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
              Engineering Decisions
            </p>
          </div>

          <div className="max-w-3xl space-y-10 sm:space-y-12">
            {project.engineeringDecisions.map((decision) => (
              <article key={decision.title}>
                <h3 className="font-mono text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {decision.title}
                </h3>

                <ProjectNarrativeText segments={decision.description} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

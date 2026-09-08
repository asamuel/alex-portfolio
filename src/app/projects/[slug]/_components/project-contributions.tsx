import { Boxes, ShieldCheck, Workflow, Database, Gauge, Wrench } from 'lucide-react';

import type { Project } from '@/types/project';

type ProjectContributionsProps = {
  project: Project;
};

const contributionIcons = [Boxes, ShieldCheck, Workflow, Database, Gauge, Wrench];

export const ProjectContributions = ({ project }: ProjectContributionsProps) => {
  if (project.keyContributions.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <h2 className="font-mono text-xs font-normal uppercase tracking-[0.22em] text-accent sm:text-sm">
              Key Contributions
            </h2>
          </div>

          <ol className="grid gap-x-10 sm:grid-cols-2">
            {project.keyContributions.map((contribution, index) => {
              const Icon = contributionIcons[index % contributionIcons.length];

              return (
                <li
                  key={contribution}
                  className="grid grid-cols-[32px_1fr] gap-4 border-t border-border py-6"
                >
                  <Icon className="mt-1 h-4 w-4 text-accent" aria-hidden="true" />

                  <p className="text-base leading-7 text-foreground/75 sm:leading-8">
                    {contribution}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

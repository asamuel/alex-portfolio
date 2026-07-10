import { projects } from '@/constants/projects';

import { ProjectGrid } from './projects-grid';

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-4xl sm:mb-10 lg:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
            Projects
          </p>

          <h2 className="mt-4 max-w-3xl text-pretty font-mono text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Projects built to solve real-world problems.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6">
            A collection of projects showcasing technical depth, architectural decisions, and
            measurable impact across product and infrastructure initiatives.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
};

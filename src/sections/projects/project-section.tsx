import { projects } from '@/constants/projects';
import { ProjectGrid } from './projects-grid';

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8 "
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl md:mb-16">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">Projects</p>

          <h2 className="mt-4 max-w-2xl font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something impactful
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            A collection of projects showcasing technical depth, architectural decisions, and
            measurable impact across product and infrastructure initiatives.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
};

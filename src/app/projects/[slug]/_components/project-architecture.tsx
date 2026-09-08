import type { Project } from '@/types/project';

import { ProjectMedia } from './project-media';
import { ProjectNarrativeText } from './project-narrative-text';

type ProjectArchitectureProps = {
  project: Project;
};

export const ProjectArchitecture = ({ project }: ProjectArchitectureProps) => {
  const architectureMedia = project.media.filter((media) => media.category === 'architecture');

  return (
    <section className="border-b border-border bg-card/30 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <h2 className="font-mono text-xs font-normal uppercase tracking-[0.22em] text-accent sm:text-sm">
              Architecture
            </h2>
          </div>

          <div className="space-y-12">
            <div className="max-w-[70ch]">
              <ProjectNarrativeText segments={project.architecture} />
            </div>

            {architectureMedia.length > 0 && (
              <div className="space-y-12">
                {architectureMedia.map((media, index) => (
                  <ProjectMedia key={`${project.slug}-architecture-${index}`} media={media} />
                ))}
              </div>
            )}

            {project.architectureHighlights?.length ? (
              <div>
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Core Architecture Decisions
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.architectureHighlights.map((highlight) => (
                    <article
                      key={highlight.title}
                      className="
                      rounded-xl
                      border
                      border-border
                      bg-card
                      p-5
                      transition-[transform,border-color]
                      duration-200
                      ease-out
                      hover:-translate-y-0.5
                      hover:border-accent/30
                      sm:p-6
                    "
                    >
                      <h3 className="font-mono text-sm font-semibold text-foreground sm:text-base">
                        {highlight.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground/90">
                        {highlight.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

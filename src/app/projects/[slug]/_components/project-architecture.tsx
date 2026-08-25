import { Project } from '@/types/project';
import { ProjectMedia } from './project-media';

type ProjectArchitectureProps = {
  project: Project;
};

export const ProjectArchitecture = ({ project }: ProjectArchitectureProps) => {
  const architectureMedia = project.media.filter((media) => media.category === 'architecture');

  return (
    <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em]  text-accent sm:text-sm">
              Architecture
            </p>
          </div>

          <div className="space-y-12">
            <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {project.architecture}
            </p>

            {architectureMedia.length > 0 && (
              <div className="space-y-10">
                {architectureMedia.map((media, index) => (
                  <ProjectMedia key={`${project.slug}-architecture-${index}`} media={media} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

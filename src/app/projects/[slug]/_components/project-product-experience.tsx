import { Project } from '@/types/project';
import { ProjectMedia } from './project-media';

type ProjectProductExperienceProps = {
  project: Project;
};
export const ProjectProductExperience = ({ project }: ProjectProductExperienceProps) => {
  const proyectMedia = project.media.filter((media) => media.category !== 'architecture');
  if (proyectMedia.length === 0) return null;

  return (
    <section className="border-b border-border bg-card/20 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <h2 className="font-mono text-xs font-normal uppercase tracking-[0.22em] text-accent sm:text-sm">
              Product Experience
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {proyectMedia.map((media, index) => (
              <ProjectMedia key={`${project.slug}-${media.category}-${index}`} media={media} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

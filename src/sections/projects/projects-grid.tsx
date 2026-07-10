import type { Project } from '@/types/project';

import { ProjectCard } from './project-card';

type ProjectsGridProps = {
  projects: Project[];
};

export const ProjectGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6 xl:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};

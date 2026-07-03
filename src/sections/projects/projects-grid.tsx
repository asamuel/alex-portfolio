import type { Project } from '@/types/project';
import { ProjectCard } from './project-card';

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};

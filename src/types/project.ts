import { ProjectMedia } from './project-media';
import { TechItem } from './tech-item';

export interface Project {
  title: string;
  slug: string;
  status: 'completed' | 'in-progress' | 'planned';
  summary: string;
  overview: string;
  role: string;
  architecture: string;
  techStack: TechItem[];
  keyContributions: string[];
  keyChallenges: string[];
  impact: string[];
  media: ProjectMedia[];
  repositoryUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
}

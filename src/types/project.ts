import { ProjectMedia } from './project-media';
import { ProjectNarrativeItem, ProjectNarrativeSegment } from './project-narrative-item';
import { TechItem } from './tech-item';

export interface Project {
  title: string;
  slug: string;
  status: 'completed' | 'in-progress' | 'planned';
  summary: string;
  overview: ProjectNarrativeSegment[];
  role: string;
  architecture: ProjectNarrativeSegment[];
  techStack: TechItem[];
  keyContributions: string[];
  keyChallenges: string[];
  impact: string[];
  engineeringDecisions?: ProjectNarrativeItem[];
  securityConsiderations?: ProjectNarrativeItem[];
  lessonsLearned?: ProjectNarrativeItem[];
  media: ProjectMedia[];
  repositoryUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
}

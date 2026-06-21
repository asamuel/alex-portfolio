import { ProjectMediaCategory } from './project-media-category';

export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
  category: ProjectMediaCategory;
};

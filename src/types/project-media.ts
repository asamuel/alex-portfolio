import { ProjectMediaCategory } from './project-media-category';

export type ProjectMediaBase = {
  alt: string;
  caption?: string;
  category: ProjectMediaCategory;
};

export type StandardProjectMedia = ProjectMediaBase & {
  type: 'standard';
  src: string;
};

export type ThemeProjectMedia = ProjectMediaBase & {
  type: 'themed';
  src: {
    light: string;
    dark: string;
  };
};

export type ProjectMedia = StandardProjectMedia | ThemeProjectMedia;

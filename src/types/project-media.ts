import { ProjectMediaCategory } from './project-media-category';

type ProjectMediaBase = {
  alt: string;
  caption?: string;
  category: ProjectMediaCategory;
};

type StandardProjectMedia = ProjectMediaBase & {
  type: 'standard';
  src: string;
  width: number;
  height: number;
};

type ThemedProjectMedia = ProjectMediaBase & {
  type: 'themed';
  src: {
    light: string;
    dark: string;
  };
  width: number;
  height: number;
};

type ResponsiveThemedProjectMedia = ProjectMediaBase & {
  type: 'responsive-themed';
  src: {
    desktop: {
      light: string;
      dark: string;
      width: number;
      height: number;
    };
    mobile: {
      light: string;
      dark: string;
      width: number;
      height: number;
    };
  };
};

export type ProjectMedia = StandardProjectMedia | ThemedProjectMedia | ResponsiveThemedProjectMedia;

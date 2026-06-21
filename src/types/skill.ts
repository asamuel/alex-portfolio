import type { TechItem } from './tech-item';

export interface Skill {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
}

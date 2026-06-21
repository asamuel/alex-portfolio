import type { TechItem } from './tech-item';

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: TechItem[];
}

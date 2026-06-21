export type EducationType = 'degree' | 'certification' | 'course';

export interface Education {
  id: string;
  type: EducationType;
  title: string;
  institution: string;
  startYear?: number;
  endYear?: number | null;
  issuedYear?: number;
  credentialUrl?: string;
  description?: string;
}

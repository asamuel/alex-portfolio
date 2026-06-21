import type { Education } from '@/types/education';

export const education: Education[] = [
  {
    id: 'uca-systems-engineering',
    type: 'degree',
    title: "Bachelor's in Systems Engineering",
    institution: 'Central American University (UCA)',
    startYear: 2011,
    endYear: 2015,
    description:
      'Academic foundation in software engineering, system analysis, databases, and enterprise application development.',
  },
  {
    id: 'oracle-apex-cloud-developer',
    type: 'certification',
    title: 'Oracle APEX Cloud Developer Professional',
    institution: 'Oracle University',
    issuedYear: 2025,
    credentialUrl:
      'https://catalog-education.oracle.com/pls/certview/sharebadge?id=2D355DF93C69DD4D8E048B0B9A45694DC8C9CD0765E75AAAB2C63BF61F7D2093',
    description:
      'Professional certification focused on cloud application development using Oracle APEX.',
  },
  {
    id: 'azure-fundamentals',
    type: 'course',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    institution: 'Udemy',
    issuedYear: 2025,
    description: 'Fundamental cloud concepts, Azure services, pricing, governance, and security.',
  },
  {
    id: 'scrum-master-product-owner',
    type: 'course',
    title: 'Scrum Master & Product Owner',
    institution: 'Udemy',
    issuedYear: 2024,
    description:
      'Agile methodologies, Scrum framework, product backlog management, and team collaboration.',
  },
  {
    id: 'react-redux-es6',
    type: 'course',
    title: 'React / Redux / ES6',
    institution: 'Udemy',
    issuedYear: 2024,
    description:
      'Modern frontend development focused on React ecosystem, state management, and ES6+.',
  },
];

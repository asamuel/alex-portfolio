export const techCategoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  authentication: 'Authentication',
  security: 'Security',
  integration: 'Integration',
  infrastructure: 'Infrastructure',
  testing: 'Testing',
  mobile: 'Mobile',
  cloud: 'Cloud',
  devops: 'DevOps',
  ai: 'AI',
  tools: 'Tools',
} as const;

export type TechCategory = keyof typeof techCategoryLabels;

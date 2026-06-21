import type { Skill } from '@/types/skill';

export const skills: Skill[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Building scalable APIs, enterprise integrations, and transactional systems.',
    items: [
      { name: '.NET Core', category: 'backend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'Java', category: 'backend' },
      { name: 'Spring Boot', category: 'backend' },
      { name: 'REST API', category: 'backend' },
      { name: 'SOAP', category: 'backend' },
      { name: 'JWT', category: 'backend' },
      { name: 'OAuth2', category: 'backend' },
      { name: 'Oracle Service Bus', category: 'backend' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Creating modern web applications with scalable UI architecture.',
    items: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Redux Toolkit', category: 'frontend' },
      { name: 'Zustand', category: 'frontend' },
      { name: 'Material UI', category: 'frontend' },
      { name: 'Shadcn/UI', category: 'frontend' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Developing secure Android applications with modern native architecture.',
    items: [
      { name: 'Kotlin', category: 'mobile' },
      { name: 'Jetpack Compose', category: 'mobile' },
      { name: 'Hilt', category: 'mobile' },
      { name: 'Coroutines', category: 'mobile' },
      { name: 'Flow', category: 'mobile' },
      { name: 'Room', category: 'mobile' },
      { name: 'DataStore', category: 'mobile' },
      { name: 'Retrofit', category: 'mobile' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Data',
    description: 'Designing and optimizing relational databases and enterprise data flows.',
    items: [
      { name: 'Oracle', category: 'database' },
      { name: 'PL/SQL', category: 'database' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'SQL Server', category: 'database' },
      { name: 'MySQL', category: 'database' },
      { name: 'Oracle APEX', category: 'database' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Working with modern development workflows and CI/CD pipelines.',
    items: [
      { name: 'Git', category: 'devops' },
      { name: 'GitHub Actions', category: 'devops' },
      { name: 'Azure DevOps', category: 'cloud' },
      { name: 'Docker', category: 'cloud' },
      { name: 'SonarQube', category: 'devops' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'Tools & AI',
    description:
      'AI-assisted development and testing tools to improve productivity, code quality, and delivery speed.',
    items: [
      { name: 'Jest', category: 'testing' },
      { name: 'MSTest', category: 'testing' },
      { name: 'React Testing Library', category: 'testing' },
      { name: 'Cursor', category: 'ai' },
      { name: 'GitHub Copilot', category: 'ai' },
    ],
  },
];

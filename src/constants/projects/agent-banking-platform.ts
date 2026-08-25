import { Project } from '@/types/project';

export const agentBankingPlatform: Project = {
  title: 'Agent Banking Platform',
  slug: 'agent-banking-platform',
  status: 'in-progress',
  summary:
    'Native Android platform deployed on PAX smart POS devices to enable distributed banking services across commercial agents nationwide.',
  overview:
    'Designed and developed a secure native Android platform for BANPRO’s agent banking network, enabling commercial establishments across Nicaragua to operate as distributed banking agents. The application provides access to a broad range of financial services including remittances, bill payments, money transfers, cash withdrawals, government payments, and other banking agreements directly from PAX smart POS devices.',
  role: 'Senior Android Engineer',

  architecture:
    'Native Android architecture built with Kotlin, Jetpack Compose, MVVM, Clean Architecture, Hilt, Retrofit, Room, and DataStore. Security-focused implementation following enterprise mobile security best practices, including secure communication, protected local storage, and runtime integrity controls.',
  techStack: [
    {
      name: 'Kotlin',
      category: 'backend',
    },
    {
      name: 'Jetpack Compose',
      category: 'frontend',
    },
    {
      name: 'MVVM',
      category: 'backend',
    },
    {
      name: 'Clean Architecture',
      category: 'backend',
    },
    {
      name: 'Hilt',
      category: 'infrastructure',
    },
    {
      name: 'Retrofit',
      category: 'integration',
    },
    {
      name: 'Room',
      category: 'database',
    },
    {
      name: 'DataStore',
      category: 'database',
    },
    {
      name: 'TLS 1.3',
      category: 'security',
    },
    {
      name: 'Certificate Pinning',
      category: 'security',
    },
    {
      name: 'Android Keystore',
      category: 'security',
    },
    {
      name: 'PAX SDK',
      category: 'integration',
    },
  ],
  keyContributions: [
    'Designed the modular architecture for large-scale distributed banking services.',
    'Implemented secure authentication and API communication flows.',
    'Integrated multiple banking agreements and transactional services.',
    'Implemented secure local persistence for operational resilience.',
    'Integrated with PAX smart POS hardware capabilities.',
    'Applied mobile security best practices for enterprise deployment.',
  ],
  keyChallenges: [
    'Designing a scalable mobile architecture capable of supporting multiple banking agreements.',
    'Securing transactional communication across distributed field devices.',
    'Handling hardware-level integrations with PAX smart POS devices.',
    'Managing secure credential and token storage on deployed terminals.',
    'Implementing runtime integrity protections for enterprise-grade mobile operations.',
  ],
  impact: [
    'Expanded BANPRO’s distributed banking service coverage across Nicaragua.',
    'Enabled faster access to banking services through local commercial agents.',
    'Improved operational efficiency for financial transactions outside traditional branches.',
    'Strengthened security and operational reliability on field-deployed POS devices.',
    'Established a scalable mobile foundation for future banking agreements and services.',
  ],
  media: [
    {
      type: 'standard',
      src: '/images/projects/agent-banking-platform/app-preview.png',
      alt: 'Agent banking platform dashboard on PAX device',
      caption: 'Main service dashboard deployed on PAX smart POS devices',
      category: 'preview',
      width: 739,
      height: 1059,
    },
    {
      type: 'standard',
      src: '/images/projects/agent-banking-platform/service-flow-diagram.png',
      alt: 'Distributed banking services flow diagram',
      caption: 'High-level orchestration of banking services across agent terminals',
      category: 'flow',
      width: 739,
      height: 1059,
    },
    {
      type: 'standard',
      src: '/images/projects/agent-banking-platform/security-architecture-diagram.png',
      alt: 'Mobile security architecture diagram',
      caption: 'Enterprise mobile security architecture for secure field transactions',
      category: 'architecture',
      width: 739,
      height: 1059,
    },
  ],
  isPrivate: true,
};

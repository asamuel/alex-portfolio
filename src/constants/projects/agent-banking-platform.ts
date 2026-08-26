import { Project } from '@/types/project';

export const agentBankingPlatform: Project = {
  title: 'Agent Banking Platform',
  slug: 'agent-banking-platform',
  status: 'in-progress',
  summary:
    'Native Android platform deployed on PAX smart POS devices to enable distributed banking services across commercial agents nationwide.',
  overview: [
    {
      text: 'Designed and developed a secure native ',
    },
    {
      text: 'Android',
      emphasis: 'code',
    },
    {
      text: ' platform for BANPRO’s agent banking network, enabling commercial establishments across Nicaragua to operate as distributed banking agents. The application provides access to a broad range of ',
    },
    {
      text: 'financial services',
      emphasis: 'strong',
    },
    {
      text: ' including remittances, bill payments, money transfers, cash withdrawals, government payments, and other banking agreements directly from PAX smart POS devices.',
    },
  ],
  role: 'Senior Android Engineer',

  architecture: [
    {
      text: 'Native Android architecture',
      emphasis: 'strong',
    },
    {
      text: ' built with Kotlin, Jetpack Compose, MVVM, Clean Architecture, Hilt, Retrofit, Room, and DataStore. ',
    },
    {
      text: 'Security-focused',
      emphasis: 'strong',
    },
    {
      text: ' implementation following enterprise mobile security best practices, including secure communication, protected local storage, and runtime integrity controls.',
    },
  ],
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
  engineeringDecisions: [
    {
      title: 'Modular architecture for multiple banking services',
      description: [
        {
          text: 'The application was structured around ',
        },
        {
          text: 'Clean Architecture',
          emphasis: 'code',
        },
        {
          text: ' and ',
        },
        {
          text: 'MVVM',
          emphasis: 'code',
        },
        {
          text: ' to separate presentation, domain logic, data access, and external integrations. This made it easier to add new banking agreements without coupling each service directly to device, network, or UI concerns.',
        },
      ],
    },
    {
      title: 'Native Android for field reliability',
      description: [
        {
          text: 'A native Android implementation with ',
        },
        {
          text: 'Kotlin',
          emphasis: 'code',
        },
        {
          text: ' and ',
        },
        {
          text: 'Jetpack Compose',
          emphasis: 'code',
        },
        {
          text: ' provided direct access to platform capabilities and PAX device integrations while keeping the user interface aligned with the operational constraints of dedicated smart POS terminals.',
        },
      ],
    },
    {
      title: 'Dependency boundaries through injection',
      description: [
        {
          text: 'Application dependencies were managed with ',
        },
        {
          text: 'Hilt',
          emphasis: 'code',
        },
        {
          text: ' so repositories, services, persistence components, and hardware integrations could remain loosely coupled. This helped keep feature modules easier to test, evolve, and replace as the platform expanded.',
        },
      ],
    },
    {
      title: 'Controlled service integration layer',
      description: [
        {
          text: 'Remote banking services were accessed through a dedicated networking layer built around ',
        },
        {
          text: 'Retrofit',
          emphasis: 'code',
        },
        {
          text: '. API communication, authentication headers, error handling, and service responses were kept outside the presentation layer so transactional flows remained easier to reason about.',
        },
      ],
    },
    {
      title: 'Local persistence for operational resilience',
      description: [
        {
          text: 'The application combined ',
        },
        {
          text: 'Room',
          emphasis: 'code',
        },
        {
          text: ' and ',
        },
        {
          text: 'DataStore',
          emphasis: 'code',
        },
        {
          text: ' to separate structured local data from lightweight application state and preferences. Local persistence was used selectively to support continuity without treating the device as the authoritative source for financial transaction state.',
        },
      ],
    },
    {
      title: 'Hardware integration behind clear boundaries',
      description: [
        {
          text: 'Interactions with PAX smart POS capabilities were isolated behind integration components using the ',
        },
        {
          text: 'PAX SDK',
          emphasis: 'code',
        },
        {
          text: '. Keeping device-specific behavior outside core business logic reduced coupling between banking workflows and hardware implementation details.',
        },
      ],
    },
  ],
  securityConsiderations: [
    {
      title: 'Protected network communication',
      description: [
        {
          text: 'Communication with backend banking services used ',
        },
        {
          text: 'TLS 1.3',
          emphasis: 'code',
        },
        {
          text: ' together with ',
        },
        {
          text: 'Certificate Pinning',
          emphasis: 'code',
        },
        {
          text: ' to strengthen transport security and reduce exposure to unauthorized certificate interception on field-deployed devices.',
        },
      ],
    },
    {
      title: 'Protected credential storage',
      description: [
        {
          text: 'Sensitive credentials and cryptographic material were handled through ',
        },
        {
          text: 'Android Keystore',
          emphasis: 'code',
        },
        {
          text: ' rather than being stored directly in application files or plain local preferences. This kept sensitive material inside Android-managed security boundaries.',
        },
      ],
    },
    {
      title: 'Server-authoritative transactions',
      description: [
        {
          text: 'The mobile application coordinated transactional workflows, but backend services remained responsible for validating and authorizing financial operations. Local device state was not treated as authoritative for completed banking transactions.',
        },
      ],
    },
    {
      title: 'Runtime integrity controls',
      description: [
        {
          text: 'The application included runtime integrity protections intended to identify unsupported or potentially compromised execution environments before sensitive banking functionality was allowed to continue.',
        },
      ],
    },
    {
      title: 'Secure local persistence',
      description: [
        {
          text: 'Local storage was limited to information required for application behavior and operational continuity. Sensitive values were handled separately from ordinary persisted state, reducing unnecessary exposure on devices deployed outside traditional branch environments.',
        },
      ],
    },
    {
      title: 'Device-specific integration boundaries',
      description: [
        {
          text: 'PAX hardware operations were isolated from core banking logic so device APIs could not directly bypass application-level validation or service orchestration. Hardware access remained part of controlled application workflows.',
        },
      ],
    },
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

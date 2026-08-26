import { Project } from '@/types/project';

export const enterpriseIntegrationPlatform: Project = {
  title: 'Enterprise Integration Platform',
  slug: 'enterprise-integration-platform',
  status: 'completed',
  summary:
    'Enterprise service orchestration platform built with Oracle Service Bus for banking integrations with government institutions, remittance providers, and external financial services.',
  overview: [
    {
      text: 'Designed, developed, and maintained an ',
    },
    {
      text: 'enterprise integration platform ',
      emphasis: 'strong',
    },
    {
      text: 'responsible for orchestrating critical banking operations between internal systems and external ',
    },
    {
      text: 'third-party providers. ',
      emphasis: 'strong',
    },
    {
      text: 'The platform exposed banking capabilities and consumed public and private services, enabling interoperability across government entities, remittance companies, and financial institutions.',
    },
  ],

  role: 'Senior Systems Analyst & Integration Developer',
  architecture: [
    {
      text: 'Service-oriented architecture ',
    },
    {
      text: '(SOA) ',
      emphasis: 'strong',
    },
    {
      text: 'using Oracle Service Bus ',
    },
    {
      text: '(OSB)',
      emphasis: 'code',
    },
    {
      text: ' as the orchestration layer, ',
    },
    {
      text: 'WebLogic',
      emphasis: 'code',
    },
    {
      text: ' as runtime infrastructure, ',
    },
    {
      text: 'JMS',
      emphasis: 'code',
    },
    {
      text: ' for asynchronous communication, ',
    },
    {
      text: 'XQuery',
      emphasis: 'code',
    },
    {
      text: ' for message transformation, and Oracle Database with ',
    },
    {
      text: 'PL/SQL',
      emphasis: 'code',
    },
    {
      text: ' for transactional support.',
    },
  ],
  techStack: [
    {
      name: 'Oracle Service Bus',
      category: 'integration',
    },
    {
      name: 'Oracle WebLogic',
      category: 'infrastructure',
    },
    {
      name: 'SOAP',
      category: 'integration',
    },
    {
      name: 'REST APIs',
      category: 'integration',
    },
    {
      name: 'XQuery',
      category: 'backend',
    },
    {
      name: 'JMS',
      category: 'integration',
    },
    {
      name: 'Oracle Database',
      category: 'database',
    },
    {
      name: 'PL/SQL',
      category: 'backend',
    },
    {
      name: 'XML',
      category: 'integration',
    },
    {
      name: 'JSON',
      category: 'integration',
    },
  ],
  keyContributions: [
    'Built and maintained service orchestration flows for banking operations.',
    'Integrated external government and remittance provider services.',
    'Exposed internal banking capabilities as secure service endpoints.',
    'Designed message transformation pipelines using XQuery.',
    'Implemented asynchronous processing using JMS queues.',
    'Optimized and maintained transactional PL/SQL procedures.',
    'Diagnosed and resolved production-level integration issues.',
  ],
  engineeringDecisions: [
    {
      title: 'Service-oriented orchestration layer',
      description: [
        {
          text: 'The platform used ',
        },
        {
          text: 'Oracle Service Bus',
          emphasis: 'code',
        },
        {
          text: ' as the central orchestration layer so service routing, transformation, validation, and integration logic could remain separate from the systems consuming or providing those services.',
        },
      ],
    },
    {
      title: 'Synchronous and asynchronous integration patterns',
      description: [
        {
          text: 'The architecture combined synchronous service calls with ',
        },
        {
          text: 'JMS',
          emphasis: 'code',
        },
        {
          text: ' for operations that benefited from asynchronous processing. This allowed integration flows to use the communication model that best matched the transactional and operational requirements of each service.',
        },
      ],
    },
    {
      title: 'Canonical message transformation',
      description: [
        {
          text: 'Message transformation logic was centralized using ',
        },
        {
          text: 'XQuery',
          emphasis: 'code',
        },
        {
          text: ' to translate between heterogeneous ',
        },
        {
          text: 'XML',
          emphasis: 'code',
        },
        {
          text: ' and ',
        },
        {
          text: 'JSON',
          emphasis: 'code',
        },
        {
          text: ' structures. Keeping transformations inside the integration layer reduced coupling between internal banking systems and external provider contracts.',
        },
      ],
    },
    {
      title: 'Protocol adaptation at the integration boundary',
      description: [
        {
          text: 'The platform supported both ',
        },
        {
          text: 'SOAP',
          emphasis: 'code',
        },
        {
          text: ' and ',
        },
        {
          text: 'REST APIs',
          emphasis: 'code',
        },
        {
          text: ' so legacy and modern systems could participate in the same integration ecosystem without requiring each backend application to understand every external protocol.',
        },
      ],
    },
    {
      title: 'Transactional support close to the data layer',
      description: [
        {
          text: 'Database-intensive operations were supported through ',
        },
        {
          text: 'Oracle Database',
          emphasis: 'code',
        },
        {
          text: ' and ',
        },
        {
          text: 'PL/SQL',
          emphasis: 'code',
        },
        {
          text: ' where transactional consistency and efficient data processing were important. This kept data-centric logic close to the persistence layer while the orchestration layer coordinated the broader service flow.',
        },
      ],
    },
    {
      title: 'Centralized production diagnostics',
      description: [
        {
          text: 'Integration behavior was organized so failures could be traced across service pipelines, asynchronous messaging, and database operations. This was especially important for diagnosing production incidents involving several systems in the same transaction path.',
        },
      ],
    },
  ],
  securityConsiderations: [
    {
      title: 'Controlled service exposure',
      description: [
        {
          text: 'Internal banking capabilities were exposed through controlled service endpoints rather than allowing external systems to interact directly with backend applications. The integration layer acted as the boundary for routing, validation, transformation, and access to internal services.',
        },
      ],
    },
    {
      title: 'Validation at integration boundaries',
      description: [
        {
          text: 'Incoming and outgoing service messages were validated as part of the orchestration flow before being propagated to downstream systems. This reduced the risk of malformed or incompatible payloads reaching internal banking services.',
        },
      ],
    },
    {
      title: 'Isolation of external provider contracts',
      description: [
        {
          text: 'External provider schemas, protocols, and transformation rules remained inside the integration layer. Internal systems therefore depended on controlled service contracts instead of directly trusting third-party message formats.',
        },
      ],
    },
    {
      title: 'Asynchronous message control',
      description: [
        {
          text: 'Flows using ',
        },
        {
          text: 'JMS',
          emphasis: 'code',
        },
        {
          text: ' were handled through managed queues so asynchronous operations could be processed within controlled messaging infrastructure rather than through unmanaged point-to-point communication.',
        },
      ],
    },
    {
      title: 'Server-side orchestration',
      description: [
        {
          text: 'Routing, transformation, and transactional coordination were executed within the server-side integration platform. External consumers provided requests, but the orchestration layer remained responsible for how those requests were interpreted and propagated through internal systems.',
        },
      ],
    },
    {
      title: 'Operational traceability',
      description: [
        {
          text: 'Production incidents could involve ',
        },
        {
          text: 'Oracle Service Bus',
          emphasis: 'code',
        },
        {
          text: ', ',
        },
        {
          text: 'JMS',
          emphasis: 'code',
        },
        {
          text: ', external providers, and database transactions in the same workflow. Maintaining traceable integration paths was therefore important for investigating failures without exposing unnecessary internal implementation details to external consumers.',
        },
      ],
    },
  ],
  keyChallenges: [
    'Handled complex XML/JSON transformations between heterogeneous systems.',
    'Managed high-availability transactional flows under strict banking requirements.',
    'Solved interoperability issues across legacy and modern service providers.',
    'Implemented resilient asynchronous communication patterns for critical operations.',
    'Troubleshot production incidents involving OSB pipelines, JMS, and database transactions.',
  ],
  impact: [
    'Enabled seamless interoperability between internal banking systems and external institutions.',
    'Improved transaction reliability and integration stability.',
    'Reduced manual processing across multiple banking workflows.',
    'Strengthened service orchestration for mission-critical financial operations.',
    'Contributed to scalable and maintainable enterprise integration architecture.',
  ],
  media: [
    {
      type: 'standard',
      src: '/images/projects/enterprise-integration-platform/service-orchestration-preview.png',
      alt: 'Enterprise integration orchestration flow',
      caption: 'High-level orchestration of banking service flows',
      category: 'preview',
      width: 739,
      height: 1059,
    },
    {
      type: 'standard',
      src: '/images/projects/enterprise-integration-platform/service-flow-diagram.png',
      alt: 'Service orchestration flow diagram',
      caption: 'External and internal service interaction lifecycle',
      category: 'flow',
      width: 739,
      height: 1059,
    },
    {
      type: 'standard',
      src: '/images/projects/enterprise-integration-platform/architecture-diagram.png',
      alt: 'Enterprise integration architecture diagram',
      caption: 'SOA architecture using Oracle Service Bus, WebLogic, JMS, and Oracle Database',
      category: 'architecture',
      width: 739,
      height: 1059,
    },
  ],
  isPrivate: true,
};

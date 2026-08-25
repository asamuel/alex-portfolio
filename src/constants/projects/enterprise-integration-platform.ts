import { Project } from '@/types/project';

export const enterpriseIntegrationPlatform: Project = {
  title: 'Enterprise Integration Platform',
  slug: 'enterprise-integration-platform',
  status: 'completed',
  summary:
    'Enterprise service orchestration platform built with Oracle Service Bus for banking integrations with government institutions, remittance providers, and external financial services.',
  overview:
    'Designed, developed, and maintained an enterprise integration platform responsible for orchestrating critical banking operations between internal systems and external third-party providers. The platform exposed banking capabilities and consumed public and private services, enabling interoperability across government entities, remittance companies, and financial institutions.',
  role: 'Senior Systems Analyst & Integration Developer',
  architecture:
    'Service-oriented architecture (SOA) using Oracle Service Bus as the orchestration layer, WebLogic as runtime infrastructure, JMS for asynchronous communication, XQuery for message transformation, and Oracle Database with PL/SQL for transactional support.',
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

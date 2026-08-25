import { Project } from '@/types/project';

export const paymentGatewayPlatform: Project = {
  title: 'Payment Gateway Platform',
  slug: 'payment-gateway-platform',
  status: 'completed',
  summary:
    'Enterprise multi-tenant payment gateway integrated with Cybersource for secure transaction orchestration.',
  overview:
    'Designed and developed an enterprise-grade payment gateway platform focused on secure multi-tenant transaction processing. The platform centralized authentication, authorization, tenant isolation, and transaction orchestration, enabling multiple business units to operate under a unified architecture while maintaining strong security boundaries and operational independence.',
  role: 'Senior Full Stack Engineer',
  architecture:
    'Monolithic architecture built with ASP.NET Core MVC using Razor Views for server-rendered UI, Material UI for component styling, IdentityServer for authentication and authorization, PostgreSQL for persistence, and Cybersource as the external payment provider.',
  techStack: [
    {
      name: 'C#',
      category: 'backend',
    },
    {
      name: '.NET 8',
      category: 'backend',
    },
    {
      name: '.NET 9',
      category: 'backend',
    },
    {
      name: 'ASP.NET Core MVC',
      category: 'backend',
    },
    {
      name: 'Razor Views',
      category: 'frontend',
    },
    {
      name: 'Material UI',
      category: 'frontend',
    },
    {
      name: 'IdentityServer',
      category: 'authentication',
    },
    {
      name: 'OAuth2',
      category: 'security',
    },
    {
      name: 'JWT',
      category: 'security',
    },
    {
      name: 'PostgreSQL',
      category: 'database',
    },
    {
      name: 'Cybersource API',
      category: 'integration',
    },
  ],
  keyContributions: [
    'Designed the multi-tenant authentication and authorization model.',
    'Implemented secure payment processing flows with Cybersource integration.',
    'Built tenant-aware transaction orchestration and validation pipelines.',
    'Developed role-based access control and permission management.',
    'Implemented audit logging for financial traceability.',
    'Created transaction monitoring dashboards for internal operations.',
  ],
  keyChallenges: [
    'Designed tenant isolation within a monolithic architecture while preserving scalability.',
    'Solved Cybersource request signing, validation, and transaction lifecycle management.',
    'Implemented centralized authentication flows across multiple tenants using IdentityServer.',
    'Ensured transactional consistency and security across payment operations.',
  ],
  impact: [
    'Successfully deployed into production in an enterprise environment.',
    'Improved payment reliability across multiple business units.',
    'Reduced onboarding complexity for new tenants.',
    'Strengthened security, auditability, and operational monitoring.',
    'Established a scalable authentication foundation for future platform growth.',
  ],
  media: [
    {
      type: 'standard',
      src: '/images/projects/payment-gateway-platform/dashboard-preview.png',
      alt: 'Payment gateway dashboard preview',
      caption: 'Main transaction dashboard overview',
      category: 'preview',
      width: 739,
      height: 1059,
    },
    {
      type: 'standard',
      src: '/images/projects/payment-gateway-platform/payment-flow-diagram.png',
      alt: 'Payment processing flow diagram',
      caption: 'Cybersource payment lifecycle orchestration',
      category: 'flow',
      width: 739,
      height: 1059,
    },
    {
      type: 'standard',
      src: '/images/projects/payment-gateway-platform/architecture-diagram.png',
      alt: 'Payment gateway platform architecture diagram',
      caption: 'Monolithic architecture using ASP.NET Core MVC, IdentityServer, and PostgreSQL',
      category: 'architecture',
      width: 739,
      height: 1059,
    },
  ],
  isPrivate: true,
};

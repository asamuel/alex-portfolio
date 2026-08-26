import { Project } from '@/types/project';

export const paymentGatewayPlatform: Project = {
  title: 'Payment Gateway Platform',
  slug: 'payment-gateway-platform',
  status: 'completed',
  summary:
    'Enterprise multi-tenant payment gateway integrated with Cybersource for secure transaction orchestration.',
  overview: [
    {
      text: 'Designed and developed an enterprise-grade payment gateway platform focused on secure ',
    },
    {
      text: 'multi-tenant',
      emphasis: 'strong',
    },
    {
      text: ' transaction processing. The platform centralized authentication, authorization, tenant isolation, and transaction orchestration, enabling multiple business units to operate under a unified architecture while maintaining strong security boundaries and operational independence.',
    },
  ],
  role: 'Senior Full Stack Engineer',
  architecture: [
    {
      text: 'Monolithic architecture built with ASP.NET Core MVC using Razor Views for server-rendered UI, Material UI for component styling, IdentityServer for authentication and authorization, PostgreSQL for persistence, and Cybersource as the external payment provider.',
    },
  ],
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
  engineeringDecisions: [
    {
      title: 'Tenant isolation inside a monolithic architecture',
      description: [
        {
          text: 'The platform was designed as a multi-tenant system within a single ASP.NET Core application. Tenant context was incorporated into authentication, authorization, transaction processing, and data access so multiple business units could share the platform while maintaining clear operational boundaries.',
        },
      ],
    },
    {
      title: 'Centralized identity and authorization',
      description: [
        {
          text: 'Authentication and authorization were centralized through ',
        },
        {
          text: 'IdentityServer',
          emphasis: 'code',
        },
        {
          text: ', using ',
        },
        {
          text: 'OAuth2',
          emphasis: 'code',
        },
        {
          text: ' and ',
        },
        {
          text: 'JWT',
          emphasis: 'code',
        },
        {
          text: ' for secure identity propagation. Role-based access control and tenant-aware permissions were handled as platform concerns instead of being implemented independently by each module.',
        },
      ],
    },
    {
      title: 'Centralized payment orchestration',
      description: [
        {
          text: 'Integration with ',
        },
        {
          text: 'Cybersource',
          emphasis: 'code',
        },
        {
          text: ' was kept behind a controlled transaction flow responsible for request preparation, signing, validation, provider communication, and transaction lifecycle handling. This reduced duplicated integration logic and kept payment behavior easier to maintain.',
        },
      ],
    },
    {
      title: 'Transactional consistency over distributed complexity',
      description: [
        {
          text: 'The architecture prioritized predictable transactional behavior over introducing unnecessary distributed components. Keeping the core payment workflow within one application boundary simplified consistency, validation, and operational support while responsibilities remained separated internally.',
        },
      ],
    },
    {
      title: 'Auditability as part of the workflow',
      description: [
        {
          text: 'Audit logging was incorporated into the payment workflow so relevant transaction and authorization activity could be traced during operational investigation and support.',
        },
      ],
    },
    {
      title: 'Operational visibility',
      description: [
        {
          text: 'Internal dashboards exposed transaction activity and processing state to the teams responsible for operating the platform. The goal was not only to execute payment flows, but also to make their behavior easier to inspect and support.',
        },
      ],
    },
  ],

  securityConsiderations: [
    {
      title: 'Tenant-aware authorization',
      description: [
        {
          text: 'Authorization decisions considered both the authenticated user and the active tenant context. Roles and permissions were evaluated within that scope to reduce the risk of users operating outside their authorized business unit.',
        },
      ],
    },
    {
      title: 'Centralized authentication',
      description: [
        {
          text: 'The platform used ',
        },
        {
          text: 'IdentityServer',
          emphasis: 'code',
        },
        {
          text: ' as the centralized identity authority, with ',
        },
        {
          text: 'OAuth2',
          emphasis: 'code',
        },
        {
          text: ' and ',
        },
        {
          text: 'JWT',
          emphasis: 'code',
        },
        {
          text: ' supporting authenticated application flows. Centralizing authentication helped avoid duplicated security logic across tenants and modules.',
        },
      ],
    },
    {
      title: 'Secure provider integration',
      description: [
        {
          text: 'Requests sent to ',
        },
        {
          text: 'Cybersource',
          emphasis: 'code',
        },
        {
          text: ' followed a controlled request construction, signing, validation, and response-handling process. Provider-specific security logic remained inside the payment integration boundary rather than being distributed across the application.',
        },
      ],
    },
    {
      title: 'Server-controlled payment operations',
      description: [
        {
          text: 'Sensitive transaction orchestration, authorization checks, and validation remained on the server side. Client-facing interfaces were treated as input channels rather than trusted sources for transaction validity.',
        },
      ],
    },
    {
      title: 'Financial traceability',
      description: [
        {
          text: 'Relevant transaction and authorization activity was recorded to provide a clearer operational history and support investigation when payment issues required analysis.',
        },
      ],
    },
    {
      title: 'Tenant data boundaries',
      description: [
        {
          text: 'Application workflows and persistence operations incorporated tenant context so one business unit could not unintentionally operate on another tenant’s transaction scope.',
        },
      ],
    },
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

import { Project } from '@/types/project';

export const paymentGatewayPlatform: Project = {
  title: 'Payment Gateway Platform',
  slug: 'payment-gateway-platform',
  status: 'completed',
  summary:
    'Multi-tenant enterprise payment gateway that centralized secure transaction orchestration, tenant-aware access control, and Cybersource payment processing for multiple business units.',

  overview: [
    {
      text: 'Designed and developed a ',
    },
    {
      text: 'multi-tenant payment gateway platform',
      emphasis: 'strong',
    },
    {
      text: ' focused on centralizing secure transaction processing for multiple business units. The platform unified authentication, authorization, tenant isolation, and payment orchestration behind a single operational model, allowing teams to onboard and operate payment flows with consistent security boundaries, auditability, and operational support.',
    },
  ],

  role: 'Senior Full Stack Engineer',

  architecture: [
    {
      text: 'Designed as a ',
    },
    {
      text: 'modular monolith',
      emphasis: 'strong',
    },
    {
      text: ' built with ',
    },
    {
      text: 'ASP.NET Core MVC',
      emphasis: 'code',
    },
    {
      text: ' and ',
    },
    {
      text: 'Razor Views',
      emphasis: 'code',
    },
    {
      text: ', with ',
    },
    {
      text: 'IdentityServer',
      emphasis: 'code',
    },
    {
      text: ' handling authentication and authorization, ',
    },
    {
      text: 'PostgreSQL',
      emphasis: 'code',
    },
    {
      text: ' as the persistence layer, and ',
    },
    {
      text: 'Cybersource',
      emphasis: 'code',
    },
    {
      text: ' as the external payment provider. The architecture kept tenant context, transaction workflows, and operational concerns centralized while preserving clear internal separation of responsibilities.',
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

  featuredTech: ['.NET 8', 'ASP.NET Core MVC', 'IdentityServer', 'PostgreSQL', 'Cybersource'],

  keyContributions: [
    'Designed and implemented the multi-tenant authentication and authorization model for a shared payment platform.',
    'Built secure payment processing flows integrated with Cybersource.',
    'Implemented tenant-aware transaction orchestration, validation, and processing pipelines.',
    'Developed role-based access control and permission management across tenants and platform modules.',
    'Introduced audit logging to improve transaction traceability and operational investigation.',
    'Built internal dashboards to monitor transaction activity and support platform operations.',
  ],

  keyChallenges: [
    'Designing tenant isolation inside a shared monolithic architecture without compromising maintainability or scalability.',
    'Implementing Cybersource request signing, validation, and end-to-end transaction lifecycle handling.',
    'Centralizing authentication and authorization flows across multiple tenants with IdentityServer.',
    'Preserving transactional consistency and security across critical payment operations.',
  ],

  engineeringDecisions: [
    {
      title: 'Tenant isolation inside a shared application',
      description: [
        {
          text: 'The platform was built as a shared multi-tenant application, so tenant context became a first-class architectural concern. Authentication, authorization, transaction processing, and data access all incorporated tenant awareness to allow multiple business units to share the platform without losing operational separation.',
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
          text: ' for secure identity propagation. Role-based access control and tenant-scoped permissions were treated as platform concerns instead of being reimplemented independently by each functional area.',
        },
      ],
    },
    {
      title: 'Dedicated payment orchestration boundary',
      description: [
        {
          text: 'Integration with ',
        },
        {
          text: 'Cybersource',
          emphasis: 'code',
        },
        {
          text: ' was kept behind a controlled orchestration flow responsible for request preparation, signing, validation, provider communication, and transaction lifecycle handling. This reduced duplicated provider logic and made payment behavior easier to evolve and support.',
        },
      ],
    },
    {
      title: 'Transactional consistency over distributed complexity',
      description: [
        {
          text: 'The architecture prioritized predictable transactional behavior over introducing unnecessary distributed components. Keeping the core workflow inside one application boundary simplified consistency, validation, support, and operational troubleshooting while still maintaining strong internal separation of responsibilities.',
        },
      ],
    },
    {
      title: 'Operational visibility as a platform capability',
      description: [
        {
          text: 'The platform was designed not only to execute payment flows but also to make them observable. Audit logging and internal dashboards were incorporated so transaction state and operational behavior could be inspected more easily during support and incident investigation.',
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
          text: ' supporting authenticated application flows. Centralizing authentication reduced duplicated security logic and kept identity handling consistent across tenants and modules.',
        },
      ],
    },
    {
      title: 'Secure provider integration boundary',
      description: [
        {
          text: 'Requests sent to ',
        },
        {
          text: 'Cybersource',
          emphasis: 'code',
        },
        {
          text: ' followed a controlled process for request construction, signing, validation, and response handling. Provider-specific security logic remained inside the integration boundary rather than being scattered across the application.',
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
          text: 'Relevant transaction and authorization activity was recorded to support operational traceability and simplify investigation when payment issues required analysis.',
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

  lessonsLearned: [
    {
      title: 'Tenant context must be a platform concern',
      description: [
        {
          text: 'In multi-tenant systems, tenant awareness cannot be treated as a late validation step. It needs to be present from authentication through authorization, data access, and workflow execution.',
        },
      ],
    },
    {
      title: 'Payment integrations deserve a dedicated orchestration layer',
      description: [
        {
          text: 'Keeping provider-specific signing, validation, and lifecycle handling inside a controlled orchestration boundary made the platform easier to maintain and reduced duplicated logic across modules.',
        },
      ],
    },
    {
      title: 'Operational tooling matters as much as core transaction logic',
      description: [
        {
          text: 'Dashboards and audit trails were essential for supportability. In payment systems, being able to understand what happened is almost as important as executing the transaction correctly.',
        },
      ],
    },
    {
      title: 'A monolith can still be the right choice',
      description: [
        {
          text: 'For this platform, keeping the system inside a single application boundary reduced unnecessary complexity and made consistency easier to preserve, as long as internal responsibilities remained clearly structured.',
        },
      ],
    },
  ],

  impact: [
    'Deployed a shared enterprise payment platform for multiple business units.',
    'Improved consistency and reliability across payment processing flows.',
    'Reduced onboarding complexity for new tenants by centralizing identity and transaction orchestration.',
    'Strengthened platform security, auditability, and operational visibility.',
    'Established a scalable foundation for future platform growth and additional payment capabilities.',
  ],

  media: [
    {
      type: 'responsive-themed',
      src: {
        desktop: {
          light: '/projects/payment-gateway-platform/payment-flow-desktop-light.webp',
          dark: '/projects/payment-gateway-platform/payment-flow-desktop-dark.webp',
          width: 1536,
          height: 1024,
        },
        mobile: {
          light: '/projects/payment-gateway-platform/payment-flow-mobile-light.webp',
          dark: '/projects/payment-gateway-platform/payment-flow-mobile-dark.webp',
          width: 941,
          height: 1672,
        },
      },
      alt: 'Payment transaction lifecycle diagram',
      caption:
        'Sanitized payment lifecycle from tenant authorization through provider processing, validation, persistence, audit, and response.',
      category: 'flow',
    },
    {
      type: 'responsive-themed',
      src: {
        desktop: {
          light: '/projects/payment-gateway-platform/architecture-desktop-light.webp',
          dark: '/projects/payment-gateway-platform/architecture-desktop-dark.webp',
          width: 1536,
          height: 1024,
        },
        mobile: {
          light: '/projects/payment-gateway-platform/architecture-mobile-light.webp',
          dark: '/projects/payment-gateway-platform/architecture-mobile-dark.webp',
          width: 1122,
          height: 1402,
        },
      },
      alt: 'Payment gateway multi-tenant architecture diagram',
      caption:
        'High-level architecture showing tenant-aware identity, transaction orchestration, persistence, and Cybersource integration.',
      category: 'architecture',
    },
  ],

  isPrivate: true,
};

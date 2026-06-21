import { Project } from '@/types/project';

export const projects: Project[] = [
  {
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
        src: '/images/projects/payment-gateway-platform/dashboard-preview.png',
        alt: 'Payment gateway dashboard preview',
        caption: 'Main transaction dashboard overview',
        category: 'preview',
      },
      {
        src: '/images/projects/payment-gateway-platform/payment-flow-diagram.png',
        alt: 'Payment processing flow diagram',
        caption: 'Cybersource payment lifecycle orchestration',
        category: 'flow',
      },
      {
        src: '/images/projects/payment-gateway-platform/architecture-diagram.png',
        alt: 'Payment gateway platform architecture diagram',
        caption: 'Monolithic architecture using ASP.NET Core MVC, IdentityServer, and PostgreSQL',
        category: 'architecture',
      },
    ],
    isPrivate: true,
  },
  {
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
        src: '/images/projects/enterprise-integration-platform/service-orchestration-preview.png',
        alt: 'Enterprise integration orchestration flow',
        caption: 'High-level orchestration of banking service flows',
        category: 'preview',
      },
      {
        src: '/images/projects/enterprise-integration-platform/service-flow-diagram.png',
        alt: 'Service orchestration flow diagram',
        caption: 'External and internal service interaction lifecycle',
        category: 'flow',
      },
      {
        src: '/images/projects/enterprise-integration-platform/architecture-diagram.png',
        alt: 'Enterprise integration architecture diagram',
        caption: 'SOA architecture using Oracle Service Bus, WebLogic, JMS, and Oracle Database',
        category: 'architecture',
      },
    ],
    isPrivate: true,
  },
  {
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
        src: '/images/projects/agent-banking-platform/app-preview.png',
        alt: 'Agent banking platform dashboard on PAX device',
        caption: 'Main service dashboard deployed on PAX smart POS devices',
        category: 'preview',
      },
      {
        src: '/images/projects/agent-banking-platform/service-flow-diagram.png',
        alt: 'Distributed banking services flow diagram',
        caption: 'High-level orchestration of banking services across agent terminals',
        category: 'flow',
      },
      {
        src: '/images/projects/agent-banking-platform/security-architecture-diagram.png',
        alt: 'Mobile security architecture diagram',
        caption: 'Enterprise mobile security architecture for secure field transactions',
        category: 'architecture',
      },
    ],
    isPrivate: true,
  },
  {
    title: 'Multi-Tenant E-commerce Platform',
    slug: 'multi-tenant-ecommerce-platform',
    status: 'in-progress',
    summary:
      'Multi-tenant e-commerce platform currently being built to help businesses launch branded online stores with custom domains, payments, and merchant administration.',
    overview:
      'Building a SaaS-oriented multi-tenant e-commerce platform that enables multiple businesses to operate independent branded online stores under a shared architecture. Each merchant will be able to manage products, orders, branding, domain configuration, and payment settings from a dedicated administration panel.',

    role: 'Full Stack Engineer',
    architecture:
      'In-progress architecture built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, NestJS, PostgreSQL, Prisma, Stripe, and a tenant-aware data model supporting custom domain routing and merchant isolation.',
    techStack: [
      {
        name: 'Next.js',
        category: 'frontend',
      },
      {
        name: 'React',
        category: 'frontend',
      },
      {
        name: 'TypeScript',
        category: 'frontend',
      },
      {
        name: 'Tailwind CSS',
        category: 'frontend',
      },
      {
        name: 'shadcn/ui',
        category: 'frontend',
      },
      {
        name: 'NestJS',
        category: 'backend',
      },
      {
        name: 'Node.js',
        category: 'backend',
      },
      {
        name: 'PostgreSQL',
        category: 'database',
      },
      {
        name: 'Prisma',
        category: 'database',
      },
      {
        name: 'Stripe',
        category: 'integration',
      },
      {
        name: 'Custom Domains',
        category: 'infrastructure',
      },
    ],
    keyContributions: [
      'Designing the tenant-aware architecture for multiple independent storefronts.',
      'Building merchant branding customization and custom domain support.',
      'Developing product, order, payment, and tenant management modules.',
      'Implementing Stripe integration for secure online payments.',
      'Building the merchant administration panel.',
    ],
    keyChallenges: [
      'Designing tenant isolation across storefronts, admin panels, and payment configurations.',
      'Supporting dynamic custom branding and domain routing per merchant.',
      'Building a scalable data model for products, customers, orders, and tenants.',
      'Integrating secure and flexible payment processing with Stripe.',
    ],

    impact: [
      'Will provide a reusable SaaS foundation for selling e-commerce solutions to multiple businesses.',
      'Will reduce time-to-market for merchants launching branded online stores.',
      'Will strengthen expertise in modern full-stack SaaS architecture and product engineering.',
    ],
    media: [
      {
        src: '/images/projects/multi-tenant-ecommerce-platform/storefront-preview.png',
        alt: 'Multi-tenant e-commerce storefront preview',
        caption: 'Storefront experience with merchant-specific branding',
        category: 'preview',
      },
      {
        src: '/images/projects/multi-tenant-ecommerce-platform/admin-dashboard.png',
        alt: 'Merchant admin dashboard preview',
        caption: 'Merchant administration panel for products, orders, payments, and branding',
        category: 'screenshot',
      },
      {
        src: '/images/projects/multi-tenant-ecommerce-platform/architecture-diagram.png',
        alt: 'Multi-tenant e-commerce architecture diagram',
        caption: 'SaaS architecture with custom domains and Stripe integration',
        category: 'architecture',
      },
    ],
    repositoryUrl: 'https://github.com/asamuel/multi-tenant-ecommerce-platform',
    isPrivate: false,
  },
];

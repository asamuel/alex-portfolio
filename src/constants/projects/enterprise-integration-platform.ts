import { Project } from '@/types/project';

export const enterpriseIntegrationPlatform: Project = {
  title: 'Enterprise Integration Platform',
  slug: 'enterprise-integration-platform',
  status: 'completed',

  summary:
    'Enterprise integration platform orchestrating bidirectional banking services across internal systems, government institutions, remittance providers, financial institutions, and external service providers.',

  overview: [
    {
      text: 'Designed, developed, and maintained an enterprise integration platform responsible for orchestrating critical banking operations between internal systems and external service providers. The platform supported both ',
    },
    {
      text: 'service consumption and service exposure',
      emphasis: 'strong',
    },
    {
      text: ', allowing banking capabilities to be exposed through controlled integration boundaries while also consuming government, remittance, financial, and third-party services. Integration flows combined routing, transformation, protocol adaptation, asynchronous processing, transactional operations, and standardized error handling across heterogeneous systems.',
    },
  ],

  role: 'Senior Systems Analyst & Integration Developer',

  architecture: [
    {
      text: 'Service-oriented architecture using ',
    },
    {
      text: 'Oracle Service Bus',
      emphasis: 'code',
    },
    {
      text: ' as the central orchestration and mediation layer, ',
    },
    {
      text: 'Oracle WebLogic',
      emphasis: 'code',
    },
    {
      text: ' as the runtime platform, and an ',
    },
    {
      text: 'API Gateway',
      emphasis: 'code',
    },
    {
      text: ' as the external API exposure and security boundary. ',
    },
    {
      text: 'JMS',
      emphasis: 'code',
    },
    {
      text: ' supported asynchronous workflows, ',
    },
    {
      text: 'XQuery',
      emphasis: 'code',
    },
    {
      text: ' handled canonical message transformation, and ',
    },
    {
      text: 'Oracle Database / PL/SQL',
      emphasis: 'code',
    },
    {
      text: ' supported transactional data operations. SOAP and REST integrations could both consume external services and expose internal banking capabilities through standardized integration contracts.',
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
      name: 'API Gateway',
      category: 'security',
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
      name: 'Java Callouts',
      category: 'backend',
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
    {
      name: 'mTLS',
      category: 'security',
    },
    {
      name: 'API Keys',
      category: 'security',
    },
    {
      name: 'Java KeyStore',
      category: 'security',
    },
  ],

  featuredTech: ['Oracle Service Bus', 'WebLogic', 'JMS', 'XQuery', 'Oracle Database'],

  keyContributions: [
    'Designed and maintained orchestration flows for critical banking integrations across internal and external systems.',
    'Integrated government institutions, remittance providers, financial institutions, and third-party services with internal banking capabilities.',
    'Implemented bidirectional integration patterns supporting both consumption of external services and controlled exposure of internal banking functionality.',
    'Designed XQuery transformation pipelines between heterogeneous XML and JSON contracts.',
    'Implemented synchronous service interactions and asynchronous processing workflows using JMS.',
    'Standardized integration behavior including request validation, HTTP handling, error responses, and service contract conventions.',
    'Implemented provider-specific authentication mechanisms including certificates, mTLS, API keys, and other service-specific credentials where required.',
    'Managed certificates and Java KeyStore configuration within the WebLogic environment for secure service integrations.',
    'Implemented Java callouts for integration requirements that required behavior beyond the standard capabilities provided by Oracle Service Bus.',
    'Developed and optimized Oracle PL/SQL routines supporting transactional integration flows.',
    'Diagnosed and resolved production incidents spanning OSB pipelines, API Gateway boundaries, JMS messaging, external providers, and database operations.',
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
          text: ' as the central orchestration and mediation layer so routing, transformation, validation, service composition, and integration logic remained separated from the systems consuming or providing those services.',
        },
      ],
    },

    {
      title: 'Bidirectional integration model',
      description: [
        {
          text: 'The integration layer supported both consumption and exposure of services. External provider capabilities could be consumed by internal banking systems, while selected internal banking operations could also be exposed through controlled service contracts. Some workflows combined both directions within the same orchestration flow.',
        },
      ],
    },

    {
      title: 'API Gateway as the external security boundary',
      description: [
        {
          text: 'Externally exposed APIs passed through an ',
        },
        {
          text: 'API Gateway',
          emphasis: 'code',
        },
        {
          text: ' responsible for the external access and security boundary. This kept public-facing authentication and authorization concerns separated from the orchestration responsibilities handled by Oracle Service Bus.',
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
          text: ' for operations that benefited from asynchronous processing. Each integration could therefore use the communication model that best matched its transactional and operational requirements.',
        },
      ],
    },

    {
      title: 'Canonical transformation at integration boundaries',
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
          text: ' contracts. Keeping transformation inside the integration layer reduced coupling between internal banking systems and external provider schemas.',
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
          text: ' so legacy and modern systems could participate in the same integration ecosystem without requiring each backend application to understand every external protocol or provider contract.',
        },
      ],
    },

    {
      title: 'Standardized service contracts and error handling',
      description: [
        {
          text: 'Integration services followed common conventions for HTTP behavior, response structures, validation, and error handling. Establishing shared standards made services more predictable for consumers and reduced unnecessary differences between integrations developed for different providers.',
        },
      ],
    },

    {
      title: 'Extensibility through Java callouts',
      description: [
        {
          text: 'When an integration required HTTP, protocol, or processing behavior that was not adequately supported by standard ',
        },
        {
          text: 'Oracle Service Bus',
          emphasis: 'code',
        },
        {
          text: ' capabilities, ',
        },
        {
          text: 'Java callouts',
          emphasis: 'code',
        },
        {
          text: ' were used to implement the required behavior without forcing provider-specific complexity into unrelated integration flows.',
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
          text: ' when transactional consistency and efficient data processing were important. This kept data-centric logic close to the persistence layer while the orchestration layer coordinated the broader service workflow.',
        },
      ],
    },

    {
      title: 'Centralized production diagnostics',
      description: [
        {
          text: 'Integration behavior was structured so failures could be traced across service pipelines, API Gateway boundaries, asynchronous messaging, external provider interactions, and database operations. This was essential when investigating production incidents involving several systems in the same transaction path.',
        },
      ],
    },
  ],

  securityConsiderations: [
    {
      title: 'API Gateway security boundary',
      description: [
        {
          text: 'Externally exposed banking APIs were protected through the ',
        },
        {
          text: 'API Gateway',
          emphasis: 'code',
        },
        {
          text: ', which acted as the external boundary for authentication, authorization, and controlled API exposure before requests reached the integration layer.',
        },
      ],
    },

    {
      title: 'Controlled service exposure',
      description: [
        {
          text: 'Internal banking capabilities were exposed through controlled integration contracts rather than allowing external consumers to interact directly with backend systems. The API Gateway and integration layer together provided separation between external consumers and internal banking services.',
        },
      ],
    },

    {
      title: 'Outbound provider authentication',
      description: [
        {
          text: 'When consuming external services, provider-specific authentication requirements were handled within the integration boundary. Depending on the provider, integrations could use certificates, ',
        },
        {
          text: 'mTLS',
          emphasis: 'code',
        },
        {
          text: ', ',
        },
        {
          text: 'API keys',
          emphasis: 'code',
        },
        {
          text: ', or other service-specific authentication mechanisms.',
        },
      ],
    },

    {
      title: 'Certificate and keystore management',
      description: [
        {
          text: 'Certificates required by external integrations were managed through ',
        },
        {
          text: 'Java KeyStore',
          emphasis: 'code',
        },
        {
          text: ' configuration in the WebLogic environment. This supported certificate-based trust and mutual TLS requirements without embedding certificate material directly into service implementation logic.',
        },
      ],
    },

    {
      title: 'Validation at integration boundaries',
      description: [
        {
          text: 'Incoming and outgoing messages were validated as part of integration workflows before being propagated to downstream systems. This helped prevent malformed or incompatible payloads from crossing service boundaries.',
        },
      ],
    },

    {
      title: 'Isolation of external provider contracts',
      description: [
        {
          text: 'External provider schemas, protocols, authentication requirements, and transformation rules remained inside the integration layer. Internal banking systems could depend on controlled internal contracts instead of directly depending on provider-specific implementations.',
        },
      ],
    },

    {
      title: 'Managed asynchronous communication',
      description: [
        {
          text: 'Flows using ',
        },
        {
          text: 'JMS',
          emphasis: 'code',
        },
        {
          text: ' were handled through managed messaging infrastructure so asynchronous operations could be coordinated through controlled queues rather than unmanaged point-to-point communication.',
        },
      ],
    },

    {
      title: 'Server-side orchestration',
      description: [
        {
          text: 'Routing, transformation, provider communication, and transactional coordination remained within the server-side integration environment. External consumers supplied requests, while the integration platform controlled how those requests were interpreted and propagated through downstream systems.',
        },
      ],
    },

    {
      title: 'Operational traceability',
      description: [
        {
          text: 'Production incidents could span ',
        },
        {
          text: 'API Gateway',
          emphasis: 'code',
        },
        {
          text: ', ',
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
          text: ', external providers, and database operations within the same workflow. Traceable integration paths were therefore important for diagnosing failures while keeping internal implementation details isolated from external consumers.',
        },
      ],
    },
  ],

  keyChallenges: [
    'Handled complex XML and JSON transformations between heterogeneous internal and external service contracts.',
    'Designed integrations that both consumed external capabilities and exposed internal banking functionality through controlled boundaries.',
    'Solved interoperability problems between legacy SOAP services, modern REST APIs, and provider-specific protocols.',
    'Integrated multiple authentication and transport-security mechanisms required by different external providers.',
    'Implemented asynchronous processing for operations requiring decoupled execution through JMS.',
    'Extended Oracle Service Bus with Java callouts when integration requirements exceeded standard platform capabilities.',
    'Maintained consistent HTTP behavior, validation, error handling, and response conventions across a large integration ecosystem.',
    'Troubleshot production incidents spanning API Gateway, OSB pipelines, JMS messaging, external providers, and Oracle database transactions.',
  ],

  impact: [
    'Enabled bidirectional interoperability between internal banking systems and government institutions, remittance providers, financial institutions, and other external services.',
    'Centralized routing, transformation, protocol adaptation, and orchestration within a shared enterprise integration layer.',
    'Allowed legacy SOAP services and modern REST APIs to participate in consistent banking integration workflows.',
    'Supported both synchronous and asynchronous communication models for different transactional requirements.',
    'Reduced coupling between internal banking applications and provider-specific schemas, protocols, and authentication mechanisms.',
    'Established reusable integration standards for service contracts, validation, HTTP behavior, and error handling.',
    'Improved operational support by making complex multi-system transaction paths easier to trace and diagnose.',
  ],

  lessonsLearned: [
    {
      title: 'Integration boundaries reduce system coupling',
      description: [
        {
          text: 'Keeping provider-specific protocols, schemas, authentication mechanisms, and transformations inside the integration layer allowed internal applications to evolve without directly depending on every external service contract.',
        },
      ],
    },

    {
      title: 'Synchronous and asynchronous patterns solve different problems',
      description: [
        {
          text: 'Not every banking operation benefits from the same communication model. Using synchronous services and managed asynchronous messaging according to each workflow produced clearer and more maintainable integration designs.',
        },
      ],
    },

    {
      title: 'Standards matter at enterprise scale',
      description: [
        {
          text: 'Consistent service contracts, error structures, HTTP behavior, validation rules, and integration conventions become increasingly important as the number of services and external providers grows.',
        },
      ],
    },

    {
      title: 'Production diagnostics are part of integration architecture',
      description: [
        {
          text: 'When a single transaction crosses API gateways, orchestration pipelines, queues, providers, and databases, traceability cannot be treated as an afterthought. Operational visibility needs to be considered as part of the integration design itself.',
        },
      ],
    },
  ],

  architectureHighlights: [
    {
      title: 'Bidirectional integration',
      description:
        'The platform both consumed external services and exposed controlled internal banking capabilities.',
    },
    {
      title: 'Protocol and message mediation',
      description:
        'OSB centralized routing, SOAP/REST adaptation, validation, and XQuery transformations between heterogeneous contracts.',
    },
    {
      title: 'Synchronous and asynchronous flows',
      description:
        'Direct service interactions and JMS-based processing supported different transactional and operational requirements.',
    },
  ],

  media: [
    {
      type: 'responsive-themed',
      src: {
        desktop: {
          light: '/projects/enterprise-integration-platform/architecture-desktop-light.webp',
          dark: '/projects/enterprise-integration-platform/architecture-desktop-dark.webp',
          width: 1536,
          height: 1024,
        },
        mobile: {
          light: '/projects/enterprise-integration-platform/architecture-mobile-light.webp',
          dark: '/projects/enterprise-integration-platform/architecture-mobile-dark.webp',
          width: 1024,
          height: 1536,
        },
      },
      alt: 'Enterprise banking integration platform architecture diagram',
      caption:
        'High-level architecture showing API Gateway exposure, Oracle Service Bus orchestration, synchronous and JMS-based asynchronous flows, external providers, internal banking services, and Oracle transactional support.',
      category: 'architecture',
    },
  ],

  isPrivate: true,
};

import { Project } from '@/types/project';

export const developerPortfolio: Project = {
  title: 'Developer Portfolio',
  slug: 'developer-portfolio',
  status: 'completed',

  summary:
    'Production-grade engineering portfolio built with Next.js to showcase technical experience, projects, and engineering decisions while prioritizing performance, accessibility, SEO, and maintainability.',

  overview: [
    {
      text: 'Designed and developed a production portfolio as a professional engineering platform rather than a traditional static personal website. The application centralizes technical experience, projects, professional branding, and contact capabilities within a ',
    },
    {
      text: 'minimal product-oriented interface',
      emphasis: 'strong',
    },
    {
      text: '. The implementation focuses on ',
    },
    {
      text: 'server-first',
      emphasis: 'strong',
    },
    {
      text: ' rendering, strong ',
    },
    {
      text: 'SEO',
      emphasis: 'strong',
    },
    {
      text: ', accessibility, responsive behavior, production email delivery, custom theming, and a maintainable component architecture designed to evolve through independent releases.',
    },
  ],
  role: 'Full Stack Engineer',

  architecture: [
    {
      text: 'Server-first application built with ',
    },
    {
      text: 'Next.js App Router',
      emphasis: 'code',
    },
    {
      text: ', ',
    },
    {
      text: 'React',
      emphasis: 'code',
    },
    {
      text: ', and ',
    },
    {
      text: 'TypeScript',
      emphasis: 'code',
    },
    {
      text: ', using ',
    },
    {
      text: 'Tailwind CSS',
      emphasis: 'code',
    },
    {
      text: ' and ',
    },
    {
      text: 'shadcn/ui',
      emphasis: 'code',
    },
    {
      text: ' for the presentation layer. Portfolio content is modeled through strongly typed constants and rendered through reusable sections and components. Client-side boundaries are intentionally limited to functionality that requires ',
    },
    {
      text: 'browser interaction',
      emphasis: 'strong',
    },
    {
      text: ', including theme switching and the contact form. A custom light and dark theme system uses CSS variables, localStorage, system color preference detection, and an initialization script executed before the application renders to minimize theme flashing. Contact submissions are processed through a Next.js Route Handler with server-side schema validation, honeypot protection, IP-based rate limiting, and Resend integration. The application is continuously deployed to ',
    },
    {
      text: 'Vercel',
      emphasis: 'code',
    },
    {
      text: ' from GitHub, with ',
    },
    {
      text: 'Cloudflare',
      emphasis: 'code',
    },
    {
      text: ' managing the custom domain, DNS, and inbound email routing.',
    },
  ],

  techStack: [
    {
      name: 'Next.js 16',
      category: 'frontend',
    },
    {
      name: 'React 19',
      category: 'frontend',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
    },
    {
      name: 'Tailwind CSS 4',
      category: 'frontend',
    },
    {
      name: 'shadcn/ui',
      category: 'frontend',
    },
    {
      name: 'React Hook Form',
      category: 'frontend',
    },
    {
      name: 'Zod',
      category: 'security',
    },
    {
      name: 'Resend',
      category: 'integration',
    },
    {
      name: 'Vercel',
      category: 'cloud',
    },
    {
      name: 'Cloudflare',
      category: 'infrastructure',
    },
    {
      name: 'Vercel Analytics',
      category: 'tools',
    },
    {
      name: 'Speed Insights',
      category: 'tools',
    },
  ],

  keyContributions: [
    'Designed and implemented the complete portfolio architecture using the Next.js App Router.',
    'Built reusable and strongly typed sections for professional experience, skills, projects, profile information, and navigation.',
    'Created a custom responsive dark and light theme system using CSS variables, localStorage, system preference detection, and explicit client-side state synchronization.',
    'Implemented pre-render theme initialization to reduce visible theme changes during application startup.',
    'Built a production contact workflow using React Hook Form, Zod, Next.js Route Handlers, and Resend.',
    'Implemented honeypot bot detection and IP-based request throttling for the public contact endpoint.',
    'Configured the custom domain, DNS infrastructure, inbound email routing, and branded professional email.',
    'Implemented comprehensive SEO metadata, Open Graph metadata, Twitter metadata, sitemap generation, robots directives, web manifest, and custom social preview assets.',
    'Implemented custom loading, error, and not-found experiences using Next.js App Router conventions.',
    'Integrated Vercel Analytics and Speed Insights for production traffic and performance observability.',
    'Configured continuous production deployment through GitHub and Vercel.',
    'Optimized the production experience for performance, accessibility, SEO, responsive behavior, and maintainability.',
  ],

  keyChallenges: [
    'Creating a distinctive professional identity without sacrificing readability, accessibility, responsive behavior, or loading performance.',
    'Defining clear Server and Client Component boundaries while keeping unnecessary client-side JavaScript to a minimum.',
    'Building a custom theme implementation that respects the operating system preference, persists explicit user choices, and avoids visible theme flashing during initialization.',
    'Building a secure public contact workflow without exposing email provider credentials or backend configuration to the browser.',
    'Protecting the contact endpoint against automated submissions while keeping the contact experience frictionless and avoiding CAPTCHA.',
    'Coordinating Vercel deployment, Cloudflare DNS and email routing, and Resend transactional email under a single professional domain.',
    'Supporting comprehensive SEO and social-sharing behavior while keeping metadata centralized and maintainable inside the App Router architecture.',
    'Maintaining a clean visual system with minimal animation and decorative complexity while still creating a distinctive modern engineering portfolio.',
  ],

  engineeringDecisions: [
    {
      title: 'Server-first by default',
      description: [
        {
          text: 'The portfolio uses ',
        },
        {
          text: 'Server Components',
          emphasis: 'strong',
        },
        {
          text: ' as the default rendering model because most of the application is content-driven and does not require browser-side state. ',
        },
        {
          text: 'Client Components',
          emphasis: 'strong',
        },
        {
          text: ' are introduced only where browser APIs or direct user interaction are necessary, including theme switching and the contact form. This keeps client-side boundaries explicit and avoids shipping unnecessary JavaScript.',
        },
      ],
    },

    {
      title: 'Custom theme without an additional dependency',
      description: [
        {
          text: 'Rather than introducing a theme library, I implemented a focused light and dark theme system using CSS variables, ',
        },
        {
          text: 'localStorage',
          emphasis: 'code',
        },
        {
          text: ', system preference detection through ',
        },
        {
          text: 'matchMedia',
          emphasis: 'code',
        },
        {
          text: ', and a small initialization script executed before hydration. The behavior remains explicit and fully aligned with the portfolio design tokens.',
        },
      ],
    },

    {
      title: 'Server-side contact processing',
      description: [
        {
          text: 'The contact form performs client-side validation for user experience, but ',
        },
        {
          text: 'the server remains the source of trust',
          emphasis: 'strong',
        },
        {
          text: '. Submissions are processed through ',
        },
        {
          text: '/api/contact',
          emphasis: 'code',
        },
        {
          text: ', validated with ',
        },
        {
          text: 'Zod',
          emphasis: 'code',
        },
        {
          text: ', and passed to a dedicated email service so provider credentials never reach browser code.',
        },
      ],
    },

    {
      title: 'Low-friction abuse protection',
      description: [
        {
          text: 'I chose a ',
        },
        {
          text: 'honeypot',
          emphasis: 'strong',
        },
        {
          text: ' and lightweight ',
        },
        {
          text: 'IP-based rate limiting',
          emphasis: 'strong',
        },
        {
          text: ' instead of adding CAPTCHA. The goal was to reduce basic automated abuse while preserving a frictionless contact experience. Detected honeypot submissions intentionally receive a normal success response without triggering email delivery.',
        },
      ],
    },
  ],

  securityConsiderations: [
    {
      title: 'Server-only credentials',
      description: [
        {
          text: 'Resend API credentials, sender configuration, and destination email settings are stored in ',
        },
        {
          text: 'environment variables',
          emphasis: 'code',
        },
        {
          text: ' and used exclusively from server-side code. The browser never communicates directly with the email provider.',
        },
      ],
    },
    {
      title: 'Server-side input validation',
      description: [
        {
          text: 'The contact form validates input in the browser for immediate feedback, but every submission is validated again with ',
        },
        {
          text: 'Zod',
          emphasis: 'code',
        },
        {
          text: ' inside the Route Handler. ',
        },
        {
          text: 'Server-side validation',
          emphasis: 'strong',
        },
        {
          text: ' defines the real trust boundary.',
        },
      ],
    },
    {
      title: 'Honeypot bot detection',
      description: [
        {
          text: 'A hidden ',
        },
        {
          text: 'company',
          emphasis: 'code',
        },
        {
          text: ' field is invisible to normal users but may be populated by simple automated bots. When that happens, the endpoint returns a normal success response without sending an email, reducing the chance of exposing the detection mechanism.',
        },
      ],
    },
    {
      title: 'Request throttling',
      description: [
        {
          text: 'The public contact endpoint applies lightweight IP-based throttling with a limit of ',
        },
        {
          text: 'five requests within a ten-minute window',
          emphasis: 'strong',
        },
        {
          text: ' for the active server instance. This provides a practical first layer of abuse protection without introducing external persistence or infrastructure.',
        },
      ],
    },
    {
      title: 'Controlled failure responses',
      description: [
        {
          text: 'Validation failures, throttled requests, email delivery errors, and unexpected server exceptions return ',
        },
        {
          text: 'controlled responses',
          emphasis: 'strong',
        },
        {
          text: ' that avoid exposing provider details, credentials, stack traces, or other internal implementation information.',
        },
      ],
    },
  ],

  impact: [
    'Deployed a production-ready engineering portfolio on the custom alexbenavidez.dev domain.',
    'Achieved approximately 99 Performance and 100 Accessibility, Best Practices, and SEO scores in Lighthouse Desktop testing.',
    'Established a centralized professional destination for technical experience, projects, engineering capabilities, professional branding, and recruiter contact.',
    'Implemented a production contact workflow connected to the branded contact@alexbenavidez.dev professional email identity.',
    'Established automated production deployments through the GitHub and Vercel workflow.',
    'Integrated production analytics and performance monitoring through Vercel Analytics and Speed Insights.',
    'Created an extensible project architecture capable of evolving from project cards into detailed technical case studies in Release 2.',
    'Established a production foundation that can evolve through additional releases without requiring a redesign of the core portfolio architecture.',
  ],

  lessonsLearned: [
    {
      title: 'Architecture matters even for small products',
      description: [
        {
          text: 'A portfolio does not need enterprise-level complexity, but decisions around rendering, content modeling, accessibility, deployment, and security still benefit from ',
        },
        {
          text: 'clear boundaries and intentional architecture',
          emphasis: 'strong',
        },
        {
          text: '. Keeping the system simple became easier once each responsibility had a defined place.',
        },
      ],
    },
    {
      title: 'Server-first is a strong default',
      description: [
        {
          text: 'Starting with ',
        },
        {
          text: 'Server Components',
          emphasis: 'code',
        },
        {
          text: ' for content-heavy pages made it easier to keep client-side behavior focused. ',
        },
        {
          text: 'Client Components were added only where interaction or browser APIs provided real value.',
          emphasis: 'accent',
        },
        {
          text: ' This reduced unnecessary JavaScript and made rendering responsibilities easier to reason about.',
        },
      ],
    },
    {
      title: 'Theme systems have subtle edge cases',
      description: [
        {
          text: 'Implementing a custom theme looked simple initially, but required careful handling of ',
        },
        {
          text: 'localStorage',
          emphasis: 'code',
        },
        {
          text: ', ',
        },
        {
          text: 'matchMedia',
          emphasis: 'code',
        },
        {
          text: ', initialization timing, hydration, and persisted user preference. ',
        },
        {
          text: 'Small UI features can introduce meaningful architectural considerations.',
          emphasis: 'strong',
        },
      ],
    },
    {
      title: 'Security should match the actual risk',
      description: [
        {
          text: 'The public contact form did not justify adding a heavy security layer such as CAPTCHA, but it still required protection against malformed input and basic automated abuse. ',
        },
        {
          text: 'A lightweight combination of server validation, honeypot detection, and request throttling',
          emphasis: 'strong',
        },
        {
          text: ' provided an appropriate balance between protection and user experience.',
        },
      ],
    },
    {
      title: 'Production concerns are part of the product',
      description: [
        {
          text: 'SEO, accessibility, analytics, performance monitoring, transactional email, DNS configuration, and deployment are not merely finishing touches. ',
        },
        {
          text: 'They are part of delivering a complete production application.',
          emphasis: 'accent',
        },
        {
          text: ' Treating them as first-class concerns made the portfolio more representative of real-world software engineering work.',
        },
      ],
    },
    {
      title: 'Simple abstractions age better',
      description: [
        {
          text: 'Typed constants, reusable components, semantic HTML, and small focused utilities were often enough without introducing additional libraries or complex state management. ',
        },
        {
          text: 'The simplest abstraction that clearly expresses the responsibility is usually the easiest to maintain.',
          emphasis: 'strong',
        },
      ],
    },
  ],

  media: [
    {
      type: 'standard',
      src: '/projects/developer-portfolio/portfolio-preview.webp',
      alt: 'Alex Benavídez developer portfolio homepage',
      caption: 'Production portfolio homepage and professional branding',
      category: 'preview',
      width: 1559,
      height: 886,
    },
    {
      type: 'standard',
      src: '/projects/developer-portfolio/mobile-preview.webp',
      alt: 'Alex Benavídez developer portfolio mobile interface',
      caption: 'Responsive mobile experience',
      category: 'screenshot',
      width: 440,
      height: 851,
    },
    {
      type: 'themed',
      src: {
        light: '/projects/developer-portfolio/architecture-diagram-light.webp',
        dark: '/projects/developer-portfolio/architecture-diagram-dark.webp',
      },
      alt: 'Developer portfolio application architecture diagram',
      caption: 'High-level architecture of the Next.js application and production services',
      category: 'architecture',
      width: 737,
      height: 1019,
    },
  ],

  repositoryUrl: 'https://github.com/asamuel/alex-portfolio',
  liveUrl: 'https://alexbenavidez.dev',
  isPrivate: false,
};

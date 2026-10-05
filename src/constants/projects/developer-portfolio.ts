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
      text: 'Server-first application where content is modeled through strongly typed constants and rendered through reusable sections and components. Client-side boundaries are intentionally limited to functionality that requires ',
    },
    {
      text: 'browser interaction',
      emphasis: 'strong',
    },
    {
      text: '. Contact submissions are processed through a Next.js Route Handler with server-side schema validation, honeypot protection, IP-based rate limiting, and Resend integration. The application is continuously deployed to ',
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
  architectureHighlights: [
    {
      title: 'Server-first',
      description:
        'Content-heavy pages default to Server Components to keep client-side JavaScript focused.',
    },
    {
      title: 'Explicit client boundaries',
      description:
        'Browser-dependent behavior is isolated to focused Client Components such as theme switching and contact interaction.',
    },
    {
      title: 'Production integrations',
      description:
        'Deployment, DNS, email delivery, analytics, and monitoring are separated across dedicated production services.',
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
  featuredTech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Vercel'],

  keyContributions: [
    'Designed and implemented the complete portfolio architecture using the Next.js App Router.',
    'Built reusable and strongly typed sections for professional experience, skills, projects, profile information, and navigation.',
    'Created a custom responsive dark and light theme system using CSS variables, localStorage, system preference detection, and explicit client-side state synchronization.',
    'Built a production contact workflow using React Hook Form, Zod, Next.js Route Handlers, and Resend.',
    'Implemented honeypot bot detection and IP-based request throttling for the public contact endpoint.',
    'Implemented comprehensive SEO metadata, Open Graph metadata, Twitter metadata, sitemap generation, robots directives, web manifest, and custom social preview assets.',
  ],

  keyChallenges: [
    'Creating a distinctive professional identity without sacrificing readability, accessibility, responsive behavior, or loading performance.',
    'Defining clear Server and Client Component boundaries while keeping unnecessary client-side JavaScript to a minimum.',
    'Building a custom theme implementation that respects the operating system preference, persists explicit user choices, and avoids visible theme flashing during initialization.',
    'Building a secure public contact workflow without exposing email provider credentials or backend configuration to the browser.',
    'Protecting the contact endpoint against automated submissions while keeping the contact experience frictionless and avoiding CAPTCHA.',
    'Coordinating Vercel deployment, Cloudflare DNS and email routing, and Resend transactional email under a single professional domain.',
  ],

  engineeringDecisions: [
    {
      title: 'Server-first by default',
      description: [
        {
          text: 'The portfolio uses ',
        },
        {
          text: 'Server Components as the default rendering model',
          emphasis: 'strong',
        },
        {
          text: ' because most of the application is content-driven and does not require browser-side state. Client Components are introduced only where browser APIs or direct user interaction are necessary, including theme switching and the contact form.',
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
          text: ', ',
        },
        {
          text: 'matchMedia',
          emphasis: 'code',
        },
        {
          text: ', and a small initialization script executed before hydration.',
        },
      ],
    },
    {
      title: 'Server-side contact processing',
      description: [
        {
          text: 'The contact form performs client-side validation for user experience, but the server remains the source of trust. Submissions are processed through ',
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
          text: 'I chose a honeypot and lightweight IP-based rate limiting instead of adding CAPTCHA. The goal was to reduce basic automated abuse while keeping the contact experience frictionless for legitimate users.',
        },
      ],
    },
    {
      title: 'Framework-native SEO',
      description: [
        {
          text: 'SEO and social metadata are implemented through the Next.js metadata APIs, including Open Graph, Twitter metadata, sitemap generation, robots directives, and per-project metadata.',
        },
      ],
    },
  ],

  securityConsiderations: [
    {
      title: 'Server-only credentials',
      description: [
        {
          text: 'Resend credentials and email configuration are stored in environment variables and used exclusively from server-side code. The browser never communicates directly with the email provider.',
        },
      ],
    },
    {
      title: 'Server-side input validation',
      description: [
        {
          text: 'Contact submissions are validated again with ',
        },
        {
          text: 'Zod',
          emphasis: 'code',
        },
        {
          text: ' inside the Route Handler, even though the form also performs client-side validation.',
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
          text: ' field helps identify simple automated submissions. Detected submissions receive a normal success response without triggering email delivery.',
        },
      ],
    },
    {
      title: 'Request throttling',
      description: [
        {
          text: 'The public contact endpoint applies lightweight IP-based throttling with a five-request limit over a ten-minute window within the active server instance.',
        },
      ],
    },
  ],

  impact: [
    'Deployed a production-ready engineering portfolio on the custom alexbenavidez.dev domain.',
    'Achieved approximately 99 Performance and 100 Accessibility, Best Practices, and SEO scores in Lighthouse Desktop testing.',
    'Established a centralized professional destination for technical experience, projects, engineering capabilities, professional branding, and recruiter contact.',
    'Implemented a production contact workflow connected to the branded contact@alexbenavidez.dev professional email identity.',
    'Integrated production analytics and performance monitoring through Vercel Analytics and Speed Insights.',
    'Created an extensible project architecture capable of evolving from project cards into detailed technical case studies in Release 2.',
  ],

  lessonsLearned: [
    {
      title: 'Architecture matters even for small products',
      description: [
        {
          text: 'A portfolio does not need enterprise complexity, but rendering, content modeling, accessibility, deployment, and security still benefit from clear boundaries and intentional architecture.',
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
          text: ' for content-heavy pages made it easier to keep client-side behavior focused and avoid unnecessary JavaScript.',
        },
      ],
    },
    {
      title: 'Security should match the actual risk',
      description: [
        {
          text: 'The public contact form required protection against malformed input and basic automated abuse, but not a heavy security layer. Server validation, honeypot detection, and request throttling provided an appropriate balance.',
        },
      ],
    },
    {
      title: 'Production concerns are part of the product',
      description: [
        {
          text: 'SEO, accessibility, analytics, performance monitoring, transactional email, DNS configuration, and deployment are part of delivering a complete production application, not just finishing touches.',
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
      type: 'responsive-themed',
      src: {
        desktop: {
          light: '/projects/developer-portfolio/architecture-desktop-light.webp',
          dark: '/projects/developer-portfolio/architecture-desktop-dark.webp',
          width: 737,
          height: 1019,
        },
        mobile: {
          light: '/projects/developer-portfolio/architecture-mobile-light.webp',
          dark: '/projects/developer-portfolio/architecture-mobile-dark.webp',
          width: 923,
          height: 1704,
        },
      },
      alt: 'Developer portfolio application architecture diagram',
      caption: 'High-level architecture of the Next.js application and production services',
      category: 'architecture',
    },
  ],

  repositoryUrl: 'https://github.com/asamuel/alex-portfolio',
  liveUrl: 'https://alexbenavidez.dev',
  isPrivate: false,
};

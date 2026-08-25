import { Project } from '@/types/project';

export const developerPortfolio: Project = {
  title: 'Developer Portfolio',
  slug: 'developer-portfolio',
  status: 'completed',

  summary:
    'Production-grade engineering portfolio built with Next.js to showcase technical experience, projects, and engineering decisions while prioritizing performance, accessibility, SEO, and maintainability.',

  overview:
    'Designed and developed a production portfolio as a professional engineering platform rather than a traditional static personal website. The application centralizes technical experience, projects, professional branding, and contact capabilities within a minimal product-oriented interface. The implementation focuses on server-first rendering, strong SEO, accessibility, responsive behavior, production email delivery, custom theming, and a maintainable component architecture designed to evolve through independent releases.',

  role: 'Full Stack Engineer',

  architecture:
    'Server-first application built with Next.js App Router, React, and TypeScript, using Tailwind CSS and shadcn/ui for the presentation layer. Portfolio content is modeled through strongly typed constants and rendered through reusable sections and components. Client-side boundaries are intentionally limited to functionality that requires browser interaction, including theme switching and the contact form. A custom light and dark theme system uses CSS variables, localStorage, system color preference detection, and an initialization script executed before the application renders to minimize theme flashing. Contact submissions are processed through a Next.js Route Handler with server-side schema validation, honeypot protection, IP-based rate limiting, and Resend integration. The application is continuously deployed to Vercel from GitHub, with Cloudflare managing the custom domain, DNS, and inbound email routing.',

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
    'Used Server Components as the default rendering model and introduced Client Components only where browser APIs, client state, or user interaction required them.',
    'Separated portfolio content into strongly typed constants instead of embedding professional data directly inside presentation components.',
    'Structured the homepage as focused reusable sections rather than building the entire interface directly inside the root page component.',
    'Implemented a custom theme system rather than introducing an additional theme dependency, keeping the behavior explicit and under application control.',
    'Executed a small inline theme initialization script before body rendering so the stored or system-preferred theme can be applied before React hydration.',
    'Used useSyncExternalStore for theme state synchronization, keeping the custom external theme state compatible with React rendering semantics.',
    'Dynamically loaded the interactive theme toggle without server-side rendering because its behavior depends directly on browser APIs such as localStorage and matchMedia.',
    'Used CSS custom properties as semantic design tokens so the same component styles can operate consistently across light and dark themes.',
    'Kept page sections focused on presentation while moving contact email delivery into a dedicated service and server-side Route Handler.',
    'Used schema-based validation with Zod on the server rather than trusting client-side form validation.',
    'Implemented a honeypot field instead of adding CAPTCHA, preserving a frictionless contact experience while filtering basic automated submissions.',
    'Returned a normal success response for honeypot submissions without sending an email, avoiding disclosure of the anti-bot mechanism.',
    'Applied lightweight IP-based rate limiting to reduce repeated contact endpoint abuse without adding an external persistence dependency to the initial production release.',
    'Kept email provider credentials and environment-specific configuration exclusively on the server.',
    'Used Next.js metadata APIs for SEO, Open Graph, Twitter metadata, sitemap, robots configuration, viewport configuration, and application metadata.',
    'Loaded Vercel Analytics and Speed Insights only in the Vercel production environment.',
    'Kept the visual system intentionally minimal and product-oriented, prioritizing typography, spacing, accessibility, content hierarchy, and performance over decorative animation.',
  ],

  securityConsiderations: [
    'Kept Resend API credentials, sender configuration, and destination email configuration exclusively on the server through environment variables.',
    'Validated every incoming contact submission server-side with a Zod schema before processing the request.',
    'Implemented a hidden honeypot field to detect automated form submissions without introducing additional interaction for legitimate users.',
    'Silently accepted detected honeypot submissions without sending an email, preventing automated clients from learning how bot detection is implemented.',
    'Applied IP-based request throttling to the public contact endpoint to reduce repeated automated submissions.',
    'Limited contact submissions to five requests per ten-minute window within the active rate-limiter instance.',
    'Returned controlled API responses for validation failures, rate-limit violations, delivery failures, and unexpected errors without exposing internal implementation details.',
    'Kept transactional email delivery behind a server-side service instead of invoking Resend directly from browser code.',
    'Separated inbound professional email routing through Cloudflare from transactional contact-form delivery through Resend.',
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
    'A strong engineering portfolio benefits more from clear technical storytelling and deliberate architecture than from excessive animation or visual complexity.',
    'Server-first rendering provides a strong default for content-heavy applications when interactive client boundaries remain explicit and narrow.',
    'Custom theme management is relatively small in scope but requires careful handling of initialization, persistence, hydration, system preferences, and browser-only APIs.',
    'Separating content from presentation makes professional information easier to maintain and provides a natural foundation for richer technical case-study pages.',
    'SEO, accessibility, email delivery, analytics, performance monitoring, deployment, and security are part of the application architecture rather than final-stage polish.',
    'Simple anti-abuse mechanisms such as honeypots and lightweight throttling can provide useful protection without adding friction to a public contact form.',
    'Production deployment infrastructure and professional email configuration are important parts of presenting a personal engineering project as a complete product.',
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

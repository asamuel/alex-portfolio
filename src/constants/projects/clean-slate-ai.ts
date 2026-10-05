import { Project } from '@/types/project';

export const cleanSlateAI: Project = {
  title: 'CleanSlate AI',
  slug: 'cleanslate-ai',
  status: 'completed',

  summary:
    'AI-assisted CSV data quality tool combining deterministic validation with structured LLM analysis and human-reviewed corrections.',

  overview: [
    {
      text: 'Built a focused data-cleaning workflow that combines deterministic CSV validation with ',
    },
    {
      text: 'LLM-assisted semantic analysis',
      emphasis: 'strong',
    },
    {
      text: '. Users can upload a CSV, review detected issues and AI suggestions, accept or reject changes, and export a cleaned dataset without allowing the model to modify source data automatically.',
    },
  ],

  role: 'Senior Software Engineer',

  architecture: [
    {
      text: 'Next.js application using ',
    },
    {
      text: 'Papa Parse',
      emphasis: 'code',
    },
    {
      text: ' for CSV processing, deterministic validation for predictable data-quality checks, a server-side API route for ',
    },
    {
      text: 'OpenAI',
      emphasis: 'code',
    },
    {
      text: ' analysis with ',
    },
    {
      text: 'GPT-5.6 Luna',
      emphasis: 'code',
    },
    {
      text: ', and ',
    },
    {
      text: 'Zod',
      emphasis: 'code',
    },
    {
      text: ' to validate structured AI responses before they reach the review interface.',
    },
  ],

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
      name: 'Papa Parse',
      category: 'integration',
    },
    {
      name: 'Zod',
      category: 'backend',
    },
    {
      name: 'OpenAI API',
      category: 'ai',
    },
    {
      name: 'GPT-5.6 Luna',
      category: 'ai',
    },
    {
      name: 'Vercel',
      category: 'infrastructure',
    },
  ],

  featuredTech: ['Next.js', 'TypeScript', 'OpenAI API', 'Zod', 'Papa Parse'],

  keyContributions: [
    'Designed the complete CSV analysis and human-review workflow.',
    'Separated deterministic validation from semantic LLM analysis.',
    'Integrated OpenAI through a server-side API boundary with structured response validation.',
    'Implemented accept and reject controls so AI suggestions never modify source data automatically.',
    'Built cleaned CSV generation and export from approved user decisions.',
  ],

  engineeringDecisions: [
    {
      title: 'Deterministic rules before AI',
      description: [
        {
          text: 'Predictable checks such as missing values, duplicates, and format validation were handled deterministically. The LLM was reserved for contextual and semantic issues where rule-based validation was less effective.',
        },
      ],
    },
    {
      title: 'Structured LLM output',
      description: [
        {
          text: 'The OpenAI integration returns structured findings that are validated with ',
        },
        {
          text: 'Zod',
          emphasis: 'code',
        },
        {
          text: ' before being exposed to the UI, reducing dependence on unstructured model responses.',
        },
      ],
    },
    {
      title: 'Human-in-the-loop corrections',
      description: [
        {
          text: 'AI recommendations are presented as suggestions rather than automatically applied changes. Users explicitly accept or reject each correction before the cleaned dataset is generated.',
        },
      ],
    },
    {
      title: 'Graceful AI dependency',
      description: [
        {
          text: 'Deterministic CSV analysis remains useful independently of the LLM, preventing the core workflow from becoming entirely dependent on an external AI service.',
        },
      ],
    },
  ],

  securityConsiderations: [
    {
      title: 'Server-side AI integration',
      description: [
        {
          text: 'OpenAI credentials and model communication remain behind a server-side application boundary rather than being exposed to the browser.',
        },
      ],
    },
    {
      title: 'Validated model responses',
      description: [
        {
          text: 'Structured AI output is validated before it becomes application state, preventing malformed model responses from being trusted directly by the client.',
        },
      ],
    },
    {
      title: 'Controlled data mutation',
      description: [
        {
          text: 'Uploaded data is not modified automatically by the model. Cleaned output is derived only from corrections explicitly approved by the user.',
        },
      ],
    },
  ],

  keyChallenges: [
    'Combining predictable data-quality rules with contextual AI analysis without duplicating responsibilities.',
    'Constraining LLM output into a reliable structured format suitable for application logic.',
    'Keeping AI suggestions useful while preserving explicit user control over every modification.',
    'Designing a simple review experience for potentially noisy or ambiguous data-quality findings.',
  ],

  impact: [
    'Delivered a complete AI-assisted CSV cleaning workflow from upload through reviewed export.',
    'Demonstrated a practical LLM integration where AI complements deterministic application logic instead of replacing it.',
    'Created a public project that can be inspected through both the deployed application and source repository.',
  ],

  lessonsLearned: [
    {
      title: 'AI works best behind clear boundaries',
      description: [
        {
          text: 'Separating deterministic logic, model communication, response validation, and user decisions made the AI feature easier to reason about and maintain.',
        },
      ],
    },
    {
      title: 'Structured outputs matter',
      description: [
        {
          text: 'LLM responses become significantly more useful in product workflows when they are constrained and validated like any other external integration.',
        },
      ],
    },
    {
      title: 'Human review should remain explicit',
      description: [
        {
          text: 'For data-cleaning tasks, AI suggestions are more trustworthy when users can inspect and approve changes before they affect exported data.',
        },
      ],
    },
  ],

  architectureHighlights: [
    {
      title: 'Hybrid analysis',
      description:
        'Deterministic checks handle predictable issues while the LLM focuses on semantic inconsistencies.',
    },
    {
      title: 'Structured AI boundary',
      description: 'OpenAI responses are validated before entering application state.',
    },
    {
      title: 'Human-controlled output',
      description: 'Only approved suggestions are applied when generating the cleaned CSV.',
    },
  ],

  media: [
    {
      type: 'standard',
      src: '/projects/cleanslate-ai/product-preview.webp',
      alt: 'CleanSlate AI CSV analysis and review interface',
      caption:
        'Interactive review workflow for inspecting detected data issues, evaluating AI suggestions, and approving corrections before export.',
      category: 'screenshot',
      width: 1536,
      height: 1024,
    },
    {
      type: 'responsive-themed',
      src: {
        desktop: {
          light: '/projects/cleanslate-ai/architecture-desktop-light.webp',
          dark: '/projects/cleanslate-ai/architecture-desktop-dark.webp',
          width: 1448,
          height: 1086,
        },
        mobile: {
          light: '/projects/cleanslate-ai/architecture-mobile-light.webp',
          dark: '/projects/cleanslate-ai/architecture-mobile-dark.webp',
          width: 882,
          height: 1784,
        },
      },
      alt: 'CleanSlate AI data analysis and human review workflow diagram',
      caption:
        'High-level workflow combining deterministic CSV validation, GPT-5.6 Luna semantic analysis, structured response validation, human review, and cleaned data export.',
      category: 'architecture',
    },
  ],

  repositoryUrl: 'https://github.com/asamuel/cleanslate-ai',
  liveUrl: 'https://cleanslate-ai.vercel.app/',
  isPrivate: false,
};

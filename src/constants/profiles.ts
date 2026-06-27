import type { Profile } from '@/types/profile';

export const profile: Profile = {
  name: 'Alex Benavídez',
  shortName: 'Alex',
  role: 'Senior Software Engineer',

  tagline: 'Building scalable, reliable, and performant systems that solve real-world problems.',

  bio: `Software engineer with 10+ years of experience building enterprise-grade systems, fintech platforms, payment gateways, and secure mobile applications.`,

  location: 'Nicaragua',

  profileImage: '/profile-anime2.png',

  focusAreas: ['Fintech', 'Enterprise Systems', 'Payment Platforms', 'System Integrations'],

  stats: [
    {
      label: 'Experience',
      value: '10',
      suffix: '+',
      description: 'YEARS',
    },
    {
      label: 'Projects',
      value: '25',
      suffix: '+',
      description: 'DELIVERED',
    },
    {
      label: 'Integrations',
      value: '20',
      suffix: '+',
      description: 'ENTERPRISE INTEGRATIONS',
    },
    {
      label: 'Platforms',
      value: '3',
      suffix: '+',
      description: 'PAYMENTS • MOBILE • WEB',
    },
  ],

  seo: {
    title: 'Alex Benavídez - Senior Software Engineer',
    description:
      'Senior software engineer with 10+ years of experience building scalable, reliable systems.',
    siteName: 'Alex Benavídez Portfolio',
    url: 'https://alexbenavidez.dev',
    ogImage: '/og-image.png',
  },
};

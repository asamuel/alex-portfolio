import type { SocialLink } from '@/types/social-link';

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'View my projects',
    href: 'https://github.com/asamuel',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://linkedin.com/in/samuelbz',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    value: 'samuelxlm0@gmail.com',
    href: 'mailto:samuelxlm0@gmail.com',
    external: false,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Quick chat',
    href: 'https://wa.me/50587635584?text=Hi%20Alex%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
    external: true,
  },
];

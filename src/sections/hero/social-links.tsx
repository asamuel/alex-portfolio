import Link from 'next/link';

import { socialIcons } from '@/components/shared/social-icons';
import { socialLinks } from '@/constants/social-links';

export const HeroSocialLinks = () => {
  return (
    <nav aria-label="Social media links">
      <ul className="flex items-center justify-center gap-3 sm:gap-4">
        {socialLinks.map((link, index) => {
          const Icon = socialIcons[link.id];

          return (
            <li key={link.id} className="flex items-center gap-3 sm:gap-4">
              <Link
                href={link.href}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                aria-label={link.label}
                className="inline-flex size-10 items-center justify-center rounded border border-border text-foreground transition-all hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon className="size-5" aria-hidden="true" />
              </Link>

              {index < socialLinks.length - 1 && (
                <span aria-hidden="true" className="font-mono text-foreground/20">
                  |
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

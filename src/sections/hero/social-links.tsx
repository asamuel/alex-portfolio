import Link from 'next/link';
import { socialLinks } from '@/constants/social-links';
import { socialIcons } from '@/components/shared/social-icons';

export const HeroSocialLinks = () => {
  return (
    <div className="flex gap-4 ">
      {socialLinks.map((link, index) => {
        const Icon = socialIcons[link.id];

        return (
          <div key={link.id} className="flex items-center gap-4">
            <Link
              key={link.id}
              href={link.href}
              {...(link.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              aria-label={link.label}
              className="p-2 rounded border border-border hover:border-accent hover:text-accent transition-all"
            >
              <Icon className="w-5 h-5" />
            </Link>

            {index < socialLinks.length - 1 && (
              <span className="text-foreground/20 font-mono">|</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

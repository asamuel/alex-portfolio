import { ArrowUpRight } from 'lucide-react';

import { socialIcons } from '@/components/shared/social-icons';
import type { SocialLink } from '@/types/social-link';

type ContactCardProps = {
  contact: SocialLink;
};

export const ContactCard = ({ contact }: ContactCardProps) => {
  const Icon = socialIcons[contact.id];

  return (
    <a
      href={contact.href}
      target={contact.external ? '_blank' : undefined}
      rel={contact.external ? 'noopener noreferrer' : undefined}
      className="group flex min-h-18 items-center gap-3 rounded-xl border border-border bg-card/60 px-3.5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:gap-4 sm:px-4 lg:hover:-translate-y-0.5"
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-accent sm:size-11 sm:rounded-xl">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">{contact.label}</p>

        <p className="truncate text-sm text-muted-foreground">{contact.value}</p>
      </div>

      <ArrowUpRight
        className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        aria-hidden="true"
      />
    </a>
  );
};

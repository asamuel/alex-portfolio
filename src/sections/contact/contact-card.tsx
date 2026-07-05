import { ArrowUpRight } from 'lucide-react';

import type { SocialLink } from '@/types/social-link';
import { socialIcons } from '@/components/shared/social-icons';

interface ContactCardProps {
  contact: SocialLink;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  const Icon = socialIcons[contact.id];

  return (
    <a
      href={contact.href}
      target={contact.external ? '_blank' : undefined}
      rel={contact.external ? 'noreferrer' : undefined}
      className="group flex items-center gap-4 rounded-2xl border py-3 px-4 backdrop-blur-xl transition-all duration-300 bg-card/60 hover:bg-card hover:-translate-y-0.5 hover:border-accent/40"
    >
      <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-accent">
        <Icon className="size-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">{contact.label}</p>
        <p className="truncate text-sm text-muted-foreground">{contact.value}</p>
      </div>

      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 " />
    </a>
  );
};

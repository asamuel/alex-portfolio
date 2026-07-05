import { socialLinks } from '@/constants/social-links';
import { ContactCard } from './contact-card';

export const ContactInfo = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Contact</p>

        <h2 className="mt-4 max-w-2xl font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s build something impactful
        </h2>

        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          I&apos;m open to collaborating on scalable backend systems, enterprise integrations,
          mobile solutions, and modern web products.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {socialLinks.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

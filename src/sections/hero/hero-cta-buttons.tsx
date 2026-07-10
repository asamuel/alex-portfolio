import Link from 'next/link';
import { Mail, PanelsTopLeft } from 'lucide-react';

export const HeroCtaButtons = () => {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 pt-2 sm:w-auto sm:max-w-none sm:flex-row sm:pt-4">
      <Link
        href="#projects"
        className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded border border-foreground/20 px-6 py-3 font-mono text-sm font-medium transition-all hover:border-accent hover:bg-accent/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
      >
        <PanelsTopLeft className="size-4" aria-hidden="true" />
        <span>PROJECTS</span>
      </Link>

      <Link
        href="#contact"
        className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-accent px-6 py-3 font-mono text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
      >
        <Mail className="size-4" aria-hidden="true" />
        <span>GET IN TOUCH</span>
      </Link>
    </div>
  );
};

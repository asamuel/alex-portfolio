import Link from 'next/link';
import { Mail } from 'lucide-react';

export const HeroCtaButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-4">
      <Link
        href="#projects"
        className="px-6 py-3 border border-foreground/20 hover:border-accent hover:bg-accent/5 rounded transition-all font-mono text-sm font-medium inline-flex items-center justify-center gap-2 group"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2m0 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2"
          />
        </svg>
        PROJECTS
      </Link>
      <Link
        href="#contact"
        className="px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all font-mono text-sm font-medium inline-flex items-center justify-center gap-2 group"
      >
        <Mail className="w-4 h-4" />
        GET IN TOUCH
      </Link>
    </div>
  );
};

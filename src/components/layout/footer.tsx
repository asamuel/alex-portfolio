import { socialLinks } from '@/constants/social-links';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';
import { BrandLogo } from '../shared/brand-logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Link href="#hero" className="flex items-center gap-4">
            <BrandLogo className="size-8 translate-y-[-2px]" width={32} height={32} />

            <span className="font-mono text-base font-semibold tracking-tight text-foreground">
              Alex Benavidez
              <span className="text-accent">.</span>
            </span>
          </Link>

          <p className="max-w-md text-sm text-muted-foreground">
            Senior Software Engineer building scalable systems, enterprise integrations, and modern
            digital products.
          </p>

          <p className="text-xs text-muted-foreground">
            © {currentYear} Alex Benavidez. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button asChild variant="outline" size="sm" className="w-fit cursor-pointer rounded-full">
            <Link href="#hero">
              Back to top
              <ArrowUp className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

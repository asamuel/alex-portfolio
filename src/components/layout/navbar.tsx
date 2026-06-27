'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '@/components/layout/theme-toggle.client';
import { navigationItems } from '@/constants/navigation';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-mono text-sm tracking-tight">
          <span className="text-muted-foreground">{'>_ '}</span>
          <span className="text-foreground">alex</span>
          <span className="text-accent">.dev</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[11px] uppercase tracking-[0.18em] text-foreground/90 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] tracking-[0.18em] text-primary">AVAILABLE</span>
          </div>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary/60 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-5">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xs uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

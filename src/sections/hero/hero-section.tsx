import { profile } from '@/constants/profile';

import { HeroCtaButtons } from './hero-cta-buttons';
import { HeroImage } from './hero-image';
import { HeroSocialLinks } from './social-links';
import { HeroStats } from './stats';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-background text-foreground"
    >
      {/* Background integrated image */}
      <HeroImage />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex max-w-2xl flex-col gap-6">
              {/* Name */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h2 className="text-5xl font-sans tracking-tight sm:text-6xl lg:text-7xl">
                    Hello, I&apos;m
                  </h2>

                  <h2 className="text-5xl font-sans tracking-tight sm:text-6xl lg:text-7xl">
                    {profile.name}
                  </h2>

                  <div className="h-3 w-3 rounded-full bg-accent" />
                </div>
              </div>

              {/* Tagline */}
              <p className="max-w-md font-mono text-base leading-relaxed text-foreground/80 sm:text-lg">
                {profile.tagline}
              </p>

              {/* CTA */}
              <HeroCtaButtons />

              {/* Social */}
              <HeroSocialLinks />
            </div>

            {/* Empty right column to preserve layout spacing */}
            <div />
          </div>

          {/* Stats */}
          <div className="mt-auto">
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
};

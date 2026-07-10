import { profile } from '@/constants/profile';

import { HeroCtaButtons } from './hero-cta-buttons';
import { HeroSocialLinks } from './social-links';
import { HeroStats } from './stats';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-background text-foreground"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[38%] h-[420px] w-[min(900px,95vw)] -translate-x-1/2 rounded-full bg-accent/2 blur-[160px] sm:h-[520px] lg:top-[42%] lg:h-[600px] lg:w-[1100px] lg:blur-[220px]"
      />

      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center lg:-translate-y-4">
          {/* Main content */}
          <div className="flex w-full max-w-4xl flex-col items-center gap-5 sm:gap-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm sm:tracking-[0.35em]">
              <span className="sm:hidden">Software Engineer</span>
              <span className="hidden sm:inline">Senior Software Engineer</span>
            </p>

            <h1 className="max-w-full font-sans text-[clamp(2.75rem,12vw,4rem)] leading-[0.95] tracking-[-0.04em] text-foreground sm:text-7xl sm:leading-none lg:text-[5.8rem]">
              {profile.name}
              <span className="text-accent">.</span>
            </h1>

            <p className="max-w-sm font-mono text-sm leading-7 text-foreground/80 sm:max-w-[720px] sm:text-lg sm:leading-relaxed">
              {profile.tagline}
            </p>

            <HeroCtaButtons />

            <HeroSocialLinks />
          </div>

          {/* Stats */}
          <div className="mt-14 w-full max-w-4xl sm:mt-16 lg:mt-20">
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
};

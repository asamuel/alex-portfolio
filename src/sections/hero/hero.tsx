import { HeroStats } from './stats';
import { HeroSocialLinks } from './social-links';
import { HeroImage } from './hero-image';
import { profile } from '@/constants/profiles';
import { HeroCtaButtons } from './hero-cta-buttons';

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Name with accent */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans tracking-tight">
                  Hello, I&apos;m
                </h2>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans tracking-tight">
                  {profile.name}
                </h2>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-foreground/80 font-mono leading-relaxed max-w-md">
              {profile.tagline}
            </p>

            {/* CTA Buttons */}
            <HeroCtaButtons />

            {/* Social Icons */}
            <HeroSocialLinks />
          </div>

          {/* Right - Profile Image */}
          <HeroImage />
        </div>

        {/* Stats Section */}
        <HeroStats />
      </div>
    </section>
  );
};

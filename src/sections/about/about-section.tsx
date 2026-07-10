import { profile } from '@/constants/profile';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Section heading */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
            About
          </p>

          <h2 className="mt-4 max-w-2xl text-pretty font-mono text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Engineering reliable systems with product impact.
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <p className="text-base leading-8 text-foreground/80 sm:text-lg sm:leading-9 lg:text-xl">
            {profile.bio}
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <div
                key={area}
                className="flex min-h-14 items-center rounded-md border border-border bg-card px-4 py-3 font-mono text-sm text-foreground/85 transition-colors hover:border-accent"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

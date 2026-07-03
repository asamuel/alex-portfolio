import { profile } from '@/constants/profiles';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">About</p>
          <h2 className="mt-4 max-w-md text-3xl font-mono font-bold tracking-tight text-foreground sm:text-3xl">
            Engineering reliable systems with product impact.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-9 text-foreground/80 sm:text-xl">{profile.bio}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-md border border-border bg-card px-4 py-4 font-mono text-sm text-foreground/85 transition-colors hover:border-accent"
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

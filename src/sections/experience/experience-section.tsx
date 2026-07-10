import { experiences } from '@/constants/experiences';

import { ExperienceTimeline } from './experience-timeline';

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
            Experience
          </p>

          <h2 className="mt-4 text-pretty font-mono text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            A decade building enterprise systems.
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
};

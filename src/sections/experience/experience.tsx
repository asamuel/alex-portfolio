import { experiences } from '@/constants/experiences';
import { ExperienceTimeline } from './experience-timeline';

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-full">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">Experience</p>

          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-3xl">
            A decade building enterprise systems.
          </h2>
        </div>

        <div className="mt-12">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
};

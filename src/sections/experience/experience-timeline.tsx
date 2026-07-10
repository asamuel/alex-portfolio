import type { Experience } from '@/types/experience';

import { ExperienceCard } from './experience-card';

type ExperienceTimelineProps = {
  experiences: Experience[];
};

export const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative flex flex-col gap-5 border-l border-border pl-4.5 sm:gap-6 sm:pl-6">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

import { Experience } from '@/types/experience';
import React from 'react';

interface ExperienceTypeProps {
  experience: Experience;
}
export const ExperienceCard = ({ experience }: ExperienceTypeProps) => {
  const period = experience.current
    ? `${experience.startDate} — Current`
    : `${experience.startDate} — ${experience.endDate}`;

  return (
    <article className="relative rounded-md p-6 border border-border bg-card/60 transition-all duration-300 hover:bg-card">
      <span className="absolute -left-[31px] top-7 size-2.5 rounded-full bg-accent" />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-mono text-xl font-semibold text-foreground">{experience.role}</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {experience.company} · {experience.location}
          </p>
        </div>

        <span className="w-fit rounded-sm border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
          {period}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted-foreground">{experience.summary}</p>

      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        {experience.responsibilities.slice(0, 4).map((responsibility) => (
          <li key={responsibility} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.slice(0, 7).map((technology) => (
          <span
            key={technology.name}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
          >
            {technology.name}
          </span>
        ))}
      </div>
    </article>
  );
};

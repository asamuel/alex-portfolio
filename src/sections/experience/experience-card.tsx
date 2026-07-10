import type { Experience } from '@/types/experience';

type ExperienceCardProps = {
  experience: Experience;
};

const MAX_RESPONSIBILITIES = 4;
const MAX_TECHNOLOGIES = 7;

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const period = experience.current
    ? `${experience.startDate} — Current`
    : `${experience.startDate} — ${experience.endDate}`;

  return (
    <article className="relative rounded-md border border-border bg-card/60 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-card sm:p-6 lg:hover:-translate-y-0.5">
      {/* Timeline marker */}
      <span
        aria-hidden="true"
        className="absolute -left-[25px] top-6 size-2.5 rounded-full bg-accent sm:-left-[31px] sm:top-7"
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-pretty font-mono text-lg font-semibold leading-snug text-foreground sm:text-xl">
            {experience.role}
          </h3>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {experience.company}
            <span aria-hidden="true"> · </span>
            {experience.location}
          </p>
        </div>

        <span className="w-fit shrink-0 rounded-sm border border-border px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground sm:px-3 sm:text-xs">
          {period}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-muted-foreground sm:mt-5">{experience.summary}</p>

      <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-6 text-muted-foreground sm:mt-5">
        {experience.responsibilities.slice(0, MAX_RESPONSIBILITIES).map((responsibility) => (
          <li key={responsibility} className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />

            <span>{responsibility}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.slice(0, MAX_TECHNOLOGIES).map((technology) => (
          <span
            key={technology.name}
            className="inline-flex min-h-7 items-center whitespace-nowrap rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-accent hover:text-foreground sm:px-3"
          >
            {technology.name}
          </span>
        ))}
      </div>
    </article>
  );
};

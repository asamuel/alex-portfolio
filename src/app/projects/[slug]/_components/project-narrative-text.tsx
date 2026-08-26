import { ProjectNarrativeSegment } from '@/types/project-narrative-item';

type ProjectNarrativeTextProps = {
  segments: ProjectNarrativeSegment[];
};

export const ProjectNarrativeText = ({ segments }: ProjectNarrativeTextProps) => {
  return (
    <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
      {segments.map((segment, index) => {
        if (segment.emphasis === 'strong') {
          return (
            <strong key={`${segment.text}-${index}`} className="font-semibold text-foreground">
              {segment.text}
            </strong>
          );
        }

        if (segment.emphasis === 'accent') {
          return (
            <span key={`${segment.text}-${index}`} className="font-medium text-accent">
              {segment.text}
            </span>
          );
        }

        if (segment.emphasis === 'code') {
          return (
            <code
              key={`${segment.text}-${index}`}
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
            >
              {segment.text}
            </code>
          );
        }

        if (segment.emphasis === 'muted') {
          return (
            <span key={`${segment.text}-${index}`} className="text-muted-foreground/75">
              {segment.text}
            </span>
          );
        }

        return <span key={`${segment.text}-${index}`}>{segment.text}</span>;
      })}
    </p>
  );
};

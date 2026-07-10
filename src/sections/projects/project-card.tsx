import Link from 'next/link';
import { ArrowUpRight, Lock } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/types/project';

type ProjectCardProps = {
  project: Project;
};

const PROJECT_STATUS_LABELS: Record<Project['status'], string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'Planned',
};

const MAX_VISIBLE_TECHNOLOGIES = 5;

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const challenge = project.keyChallenges[0];
  const visibleTechStack = project.techStack.slice(0, MAX_VISIBLE_TECHNOLOGIES);

  const hiddenTechnologiesCount = project.techStack.length - visibleTechStack.length;

  return (
    <Card className="group flex h-full flex-col rounded-md border-border bg-card/60 py-0 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-card lg:hover:-translate-y-0.5">
      <CardHeader className="gap-4 px-4 pt-5 sm:gap-5 sm:px-6 sm:pt-6">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="rounded-sm border-border/60 bg-muted/30 px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] sm:px-3"
          >
            {PROJECT_STATUS_LABELS[project.status]}
          </Badge>

          {project.isPrivate && (
            <Badge
              variant="secondary"
              className="gap-1 rounded-sm border border-border/60 bg-muted/30 px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:px-3"
            >
              <Lock className="size-3" aria-hidden="true" />
              Private
            </Badge>
          )}
        </div>

        <CardTitle className="text-pretty font-mono text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col px-4 pb-0 sm:px-6">
        <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>

        <div className="mt-5 sm:mt-6">
          <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Role
          </p>

          <p className="text-sm leading-6 text-foreground">{project.role}</p>
        </div>

        {challenge && (
          <div className="mt-5 sm:mt-6">
            <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Challenge solved
            </p>

            <p className="text-sm leading-7 text-muted-foreground">{challenge}</p>
          </div>
        )}

        <div className="mt-auto pt-5 sm:pt-6">
          <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Tech stack
          </p>

          <div className="flex flex-wrap gap-2">
            {visibleTechStack.map((technology) => (
              <Badge
                key={technology.name}
                variant="outline"
                className="whitespace-nowrap rounded-sm px-2.5 py-1 font-mono text-xs font-normal"
              >
                {technology.name}
              </Badge>
            ))}

            {hiddenTechnologiesCount > 0 && (
              <Badge
                variant="outline"
                className="rounded-sm border-accent/30 px-2.5 py-1 font-mono text-xs font-normal text-accent"
              >
                +{hiddenTechnologiesCount}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-0 bg-transparent px-4 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
        <Link
          href={`/projects/${project.slug}`}
          prefetch={false}
          className="inline-flex min-h-10 items-center gap-2 rounded-sm font-mono text-sm uppercase tracking-wider text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View Project
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </CardFooter>
    </Card>
  );
};

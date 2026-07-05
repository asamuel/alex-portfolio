import { ArrowUpRight, Lock } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/types/project';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

const PROJECT_STATUS_LABELS: Record<Project['status'], string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'planned',
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const challenge = project.keyChallenges[0];
  const visibleTechStack = project.techStack.slice(0, 5);

  return (
    <Card
      className="group flex h-full flex-col backdrop-blur-md rounded-md border-border bg-card/60 transition-all duration-300 hover:bg-card hover:border-accent/90
hover:-translate-y-0.5"
    >
      <CardHeader className="space-y-5 mt-4">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-border/60 bg-muted/30 px-3 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] rounded-sm"
          >
            {PROJECT_STATUS_LABELS[project.status]}
          </Badge>

          {project.isPrivate && (
            <Badge
              variant="secondary"
              className="gap-1 border-border/60 bg-muted/30 px-3 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] rounded-sm text-muted-foreground/70"
            >
              <Lock className="size-3" />
              Private
            </Badge>
          )}
        </div>

        <CardTitle className="font-mono text-2xl font-semibold tracking-tight text-foreground">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>

        <div className="mt-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Role
          </p>
          <p className="text-sm text-foreground">{project.role}</p>
        </div>

        <div className="mt-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Challenge solved
          </p>
          <p className="text-sm leading-7 text-muted-foreground">{challenge}</p>
        </div>

        <div className="mt-6 mt-auto">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Tech stack
          </p>

          <div className="flex flex-wrap gap-2">
            {visibleTechStack.map((technology) => (
              <Badge
                key={technology.name}
                variant="outline"
                className="font-mono text-xs font-normal rounded-sm"
              >
                {technology.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-0 bg-transparent px-6 pb-6 pt-6 mb-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-accent transition-colors hover:text-foreground"
        >
          View Project
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </CardFooter>
    </Card>
  );
};

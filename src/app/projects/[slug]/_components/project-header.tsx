import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import type { Project } from '@/types/project';

type ProjectHeaderProps = {
  project: Project;
};

const formatStatus = (status: Project['status']) => {
  return status.replace('-', ' ');
};

export const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  const hasActions = project.liveUrl || project.repositoryUrl;

  return (
    <section className="border-b border-border bg-background px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
              Case Study
            </p>

            <span className="text-muted-foreground" aria-hidden="true">
              /
            </span>

            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground sm:text-sm">
              {formatStatus(project.status)}
            </p>
          </div>

          <h1 className="mt-4 text-pretty font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            {project.summary}
          </p>

          {project.featuredTech?.length ? (
            <div className="mt-7 flex flex-wrap gap-2">
              {project.featuredTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-10 border-t border-border pt-8 sm:mt-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Role
              </p>

              <p className="mt-2 text-sm font-medium text-foreground sm:text-base">
                {project.role}
              </p>
            </div>

            {hasActions && (
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-accent px-6 py-3 font-mono text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    <span>Live site</span>
                  </Link>
                )}

                {project.repositoryUrl && (
                  <Link
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded border border-foreground/20 px-6 py-3 font-mono text-sm font-medium transition-all hover:border-accent hover:bg-accent/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
                  >
                    <FaGithub className="size-4" aria-hidden="true" />
                    <span>Source</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

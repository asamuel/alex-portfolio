import { Project } from '@/types/project';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

type ProjectHeaderProps = {
  project: Project;
};

const formatStatus = (status: Project['status']) => {
  return status.replace('-', ' ');
};

export const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <section className="border-b border-border bg-background px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
            Project / {formatStatus(project.status)}
          </p>

          <h1 className="mt-4 text-pretty font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {project.summary}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-end sm:gap-x-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Role
            </p>

            <p className="mt-2 text-sm font-medium text-foreground sm:text-base">{project.role}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Status
            </p>

            <p className="mt-2 text-sm font-medium capitalize text-foreground sm:text-base">
              {formatStatus(project.status)}
            </p>
          </div>

          {(project.liveUrl || project.repositoryUrl) && (
            <div className="flex flex-wrap gap-3 sm:ml-auto">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Live site
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}

              {project.repositoryUrl && (
                <Link
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Source
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

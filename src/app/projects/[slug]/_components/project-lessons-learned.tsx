import { Lightbulb } from 'lucide-react';

import type { Project } from '@/types/project';

import { ProjectNarrativeText } from './project-narrative-text';

type ProjectLessonsLearnedProps = {
  project: Project;
};

export const ProjectLessonsLearned = ({ project }: ProjectLessonsLearnedProps) => {
  if (!project.lessonsLearned?.length) {
    return null;
  }

  return (
    <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <h2 className="font-mono text-xs font-normal uppercase tracking-[0.22em] text-accent sm:text-sm">
              Lessons Learned
            </h2>
          </div>

          <div className="max-w-[70ch] space-y-8 sm:space-y-10">
            {project.lessonsLearned.map((lesson) => (
              <article key={lesson.title} className="border-l border-border pl-5 sm:pl-6">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-4 w-4 text-accent" aria-hidden="true" />

                  <h3 className="text-lg font-semibold tracking-tight text-foreground/90 sm:text-xl">
                    {lesson.title}
                  </h3>
                </div>

                <ProjectNarrativeText segments={lesson.description} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

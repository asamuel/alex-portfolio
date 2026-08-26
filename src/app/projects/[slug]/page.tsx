import { profile } from '@/constants/profile';
import { projects } from '@/constants/projects';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectHeader } from './_components/project-header';
import { ProjectArchitecture } from './_components/project-architecture';
import { ProjectTechStack } from './_components/project-tech-stack';
import { ProjectContributions } from './_components/project-contributions';
import { ProjecEngineeringDecisions } from './_components/project-engineering-decisions';
import { ProjectNarrativeText } from './_components/project-narrative-text';
import { ProjectChallenges } from './_components/project-challenges';
import { ProjectSecurityConsiderations } from './_components/project-security-considerations';
import { ProjectImpact } from './_components/project-impact';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const url = `${profile.seo.url}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description: project.summary,
      url,
      siteName: profile.seo.siteName,
      type: 'article',
      locale: profile.seo.locale,
    },

    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${profile.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <ProjectHeader project={project} />

      <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
                Overview
              </p>
            </div>

            <div className="max-w-3xl">
              <ProjectNarrativeText segments={project.overview} />
            </div>
          </div>
        </div>
      </section>

      <ProjectArchitecture project={project} />

      <ProjectTechStack project={project} />

      <ProjectContributions project={project} />

      <ProjecEngineeringDecisions project={project} />

      <ProjectChallenges project={project} />

      <ProjectSecurityConsiderations project={project} />

      <ProjectImpact project={project} />
    </main>
  );
}

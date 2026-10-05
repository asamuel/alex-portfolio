'use client';

import dynamic from 'next/dynamic';
import type { CSSProperties } from 'react';
import { useState } from 'react';

import type { ProjectMedia } from '@/types/project-media';

type ResponsiveThemedMedia = Extract<ProjectMedia, { type: 'responsive-themed' }>;

type ProjectResponsiveMediaProps = {
  media: ResponsiveThemedMedia;
  className?: string;
  loading?: 'eager' | 'lazy';
  reserveSpace?: boolean;
};

type ProjectResponsiveMediaContentProps = ProjectResponsiveMediaProps & {
  onLoad?: () => void;
};

const ProjectResponsiveMediaContent = dynamic<ProjectResponsiveMediaContentProps>(
  () => import('./project-responsive-media-content'),
  {
    ssr: false,
  }
);

export const ProjectResponsiveMedia = ({
  media,
  className,
  loading = 'lazy',
  reserveSpace = true,
}: ProjectResponsiveMediaProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const style = {
    '--mobile-aspect': `${media.src.mobile.width} / ${media.src.mobile.height}`,
    '--desktop-aspect': `${media.src.desktop.width} / ${media.src.desktop.height}`,
  } as CSSProperties;

  return (
    <div
      className={
        reserveSpace
          ? 'relative w-full overflow-hidden aspect-[var(--mobile-aspect)] md:aspect-[var(--desktop-aspect)]'
          : 'relative'
      }
      style={style}
    >
      {reserveSpace && !isLoaded && (
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-muted/20
            font-mono
            text-xs
            text-muted-foreground
            animate-pulse
            motion-reduce:animate-none
          "
          aria-hidden="true"
        >
          Loading diagram…
        </div>
      )}

      <ProjectResponsiveMediaContent
        media={media}
        className={className}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

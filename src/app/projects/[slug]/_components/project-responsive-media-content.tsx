'use client';

import { useSyncExternalStore } from 'react';

import { getThemeServerSnapshot, getThemeSnapshot, subscribeToTheme } from '@/lib/theme-store';

import type { ProjectMedia } from '@/types/project-media';

type ResponsiveThemedMedia = Extract<ProjectMedia, { type: 'responsive-themed' }>;

type ProjectResponsiveMediaContentProps = {
  media: ResponsiveThemedMedia;
  className?: string;
  loading?: 'eager' | 'lazy';
  onLoad?: () => void;
};

const ProjectResponsiveMediaContent = ({
  media,
  className,
  loading = 'lazy',
  onLoad,
}: ProjectResponsiveMediaContentProps) => {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getThemeServerSnapshot);

  const desktop = media.src.desktop;
  const mobile = media.src.mobile;

  const desktopSrc = theme === 'dark' ? desktop.dark : desktop.light;

  const mobileSrc = theme === 'dark' ? mobile.dark : mobile.light;

  return (
    <picture>
      <source
        media="(max-width: 767px)"
        srcSet={mobileSrc}
        width={mobile.width}
        height={mobile.height}
      />

      <img
        src={desktopSrc}
        alt={media.alt}
        width={desktop.width}
        height={desktop.height}
        loading={loading}
        decoding="async"
        onLoad={onLoad}
        className={className}
      />
    </picture>
  );
};

export default ProjectResponsiveMediaContent;

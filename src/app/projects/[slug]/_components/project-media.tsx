import Image from 'next/image';

import type { ProjectMedia as ProjectMediaType } from '@/types/project-media';
import { ProjectMediaLightbox } from './project-media-lightbox';

type ProjectMediaProps = {
  media: ProjectMediaType;
};

export const ProjectMedia = ({ media }: ProjectMediaProps) => {
  const imageWrapperStyle = {
    maxWidth: `${media.width}px`,
  };

  const imageSizes = `(max-width: 640px) calc(100vw - 56px), (max-width: 1024px) calc(100vw - 96px), ${media.width}px`;

  return (
    <figure className="space-y-4">
      <div className="flex justify-center">
        <div
          className="w-full overflow-hidden rounded-xl border border-border bg-card p-3 sm:p-4"
          style={imageWrapperStyle}
        >
          <ProjectMediaLightbox media={media}>
            {media.type === 'themed' ? (
              <>
                <Image
                  src={media.src.light}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  sizes={imageSizes}
                  className="
                  block
                  h-auto
                  w-full
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-[1.01]
                  dark:hidden
                "
                />

                <Image
                  src={media.src.dark}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  sizes={imageSizes}
                  className="
                  hidden
                  h-auto
                  w-full
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-[1.01]
                  dark:block
                "
                />
              </>
            ) : (
              <Image
                src={media.src}
                alt={media.alt}
                width={media.width}
                height={media.height}
                sizes={imageSizes}
                className="
                h-auto
                w-full
                transition-transform
                duration-300
                ease-out
                group-hover:scale-[1.01]
                "
              />
            )}
          </ProjectMediaLightbox>
        </div>
      </div>

      {media.caption && (
        <figcaption
          className="mx-auto font-mono text-xs leading-5 text-muted-foreground/90 sm:text-sm"
          style={imageWrapperStyle}
        >
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
};

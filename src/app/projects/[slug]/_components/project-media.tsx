import Image from 'next/image';

import type { ProjectMedia as ProjectMediaType } from '@/types/project-media';

type ProjectMediaProps = {
  media: ProjectMediaType;
};

export const ProjectMedia = ({ media }: ProjectMediaProps) => {
  const imageWrapperStyle = {
    maxWidth: `${media.width}px`,
  };

  const imageSizes = `(max-width: 768px) 100vw, ${media.width}px`;

  return (
    <figure className="space-y-4">
      <div className="flex justify-center">
        <div
          className="w-full overflow-hidden rounded-xl border border-border bg-card p-3 sm:p-4"
          style={imageWrapperStyle}
        >
          {media.type === 'themed' ? (
            <>
              <Image
                src={media.src.light}
                alt={media.alt}
                width={media.width}
                height={media.height}
                sizes={imageSizes}
                className="block h-auto w-full dark:hidden"
              />

              <Image
                src={media.src.dark}
                alt=""
                width={media.width}
                height={media.height}
                sizes={imageSizes}
                className="hidden h-auto w-full dark:block"
              />
            </>
          ) : (
            <Image
              src={media.src}
              alt={media.alt}
              width={media.width}
              height={media.height}
              sizes={imageSizes}
              className="h-auto w-full"
            />
          )}
        </div>
      </div>

      {media.caption && (
        <figcaption
          className="mx-auto text-sm leading-6 text-muted-foreground"
          style={imageWrapperStyle}
        >
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
};

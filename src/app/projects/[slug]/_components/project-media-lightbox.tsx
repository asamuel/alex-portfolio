'use client';

import Image from 'next/image';

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import type { ProjectMedia } from '@/types/project-media';

import { ProjectResponsiveMedia } from './project-responsive-media';

type ProjectMediaLightboxProps = {
  media: ProjectMedia;
  children: React.ReactNode;
};

export const ProjectMediaLightbox = ({ media, children }: ProjectMediaLightboxProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="
            group
            block
            w-full
            cursor-zoom-in
            overflow-hidden
            text-left
          "
          aria-label={`Open ${media.alt}`}
        >
          {children}
        </button>
      </DialogTrigger>

      <DialogContent
        className="
          flex
          max-h-[95vh]
          max-w-[95vw]
          items-center
          justify-center
          border-border
          bg-background/95
          p-4
          shadow-none
          backdrop-blur-sm
          sm:max-w-[95vw]
          sm:p-8
        "
      >
        <DialogTitle className="sr-only">{media.alt}</DialogTitle>

        {media.type === 'responsive-themed' ? (
          <ProjectResponsiveMedia
            media={media}
            loading="eager"
            reserveSpace={false}
            className="
              h-auto
              max-h-[88vh]
              w-auto
              max-w-full
              object-contain
            "
          />
        ) : media.type === 'themed' ? (
          <>
            <Image
              src={media.src.light}
              alt={media.alt}
              width={media.width}
              height={media.height}
              sizes="95vw"
              className="
                block
                h-auto
                max-h-[88vh]
                w-auto
                max-w-full
                object-contain
                dark:hidden
              "
            />

            <Image
              src={media.src.dark}
              alt=""
              width={media.width}
              height={media.height}
              sizes="95vw"
              className="
                hidden
                h-auto
                max-h-[88vh]
                w-auto
                max-w-full
                object-contain
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
            sizes="95vw"
            className="
              h-auto
              max-h-[88vh]
              w-auto
              max-w-full
              object-contain
            "
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

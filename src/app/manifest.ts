import type { MetadataRoute } from 'next';

import { profile } from '@/constants/profile';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.seo.siteName,
    short_name: profile.shortName,
    description: profile.seo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: profile.seo.themeColor,
    icons: [
      {
        src: '/brand/forward-mark-dark.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

import type { MetadataRoute } from 'next';

import { profile } from '@/constants/profile';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.seo.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}

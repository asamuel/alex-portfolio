'use client';

import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('@/components/layout/theme-toggle'), {
  ssr: false,
  loading: () => <div className="h-10 w-10 rounded-md border border-border" aria-hidden="true" />,
});

export default ThemeToggle;

'use client';

import { RefreshCcw } from 'lucide-react';

import { BrandLogo } from '@/components/shared/brand-logo';
import { Button } from '@/components/ui/button';
import { profile } from '@/constants/profile';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <BrandLogo className="size-12" width={48} height={48} />

        <span className="mt-10 font-mono text-sm font-semibold uppercase tracking-[0.35em] text-accent">
          Error
        </span>

        <h1 className="mt-6 font-mono text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Something went wrong
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>

        <Button onClick={reset} size="lg" className="mt-12">
          <RefreshCcw className="size-4" />
          Try again
        </Button>

        <span className="mt-16 font-mono text-sm text-muted-foreground">{profile.name}</span>
      </div>
    </main>
  );
}

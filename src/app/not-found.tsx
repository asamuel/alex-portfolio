import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-[0.35em] text-accent">
          404
        </span>

        <h1 className="mt-6 font-mono text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className="mt-12 flex items-center gap-4">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="size-4" />
              Back Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

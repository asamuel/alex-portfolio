import { BrandLogo } from '@/components/shared/brand-logo';

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-pulse">
          <BrandLogo className="size-12" width={48} height={48} />
        </div>

        <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase">
          Loading...
        </p>
      </div>
    </main>
  );
}

import { profile } from '@/constants/profile';
import { cn } from '@/lib/utils';

export const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 border-y border-border/60 sm:grid-cols-4 sm:border-y-0">
      {profile.stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            'flex min-h-32 flex-col items-center justify-center px-3 py-5 text-center sm:min-h-0 sm:px-5 sm:py-0',
            index % 2 === 0 && 'border-r border-border',
            index < 2 && 'border-b border-border sm:border-b-0',
            index < profile.stats.length - 1 && 'sm:border-r sm:border-border'
          )}
        >
          <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-widest">
            {stat.label}
          </p>

          <p className="mt-2 font-mono text-3xl font-bold leading-none sm:text-4xl">
            {stat.value}
            {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
          </p>

          <p className="mt-3 max-w-40 font-mono text-[0.65rem] leading-relaxed text-muted-foreground sm:text-xs">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

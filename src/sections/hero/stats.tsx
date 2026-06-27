import { profile } from '@/constants/profiles';

export const HeroStats = () => {
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:mt-20 sm:grid-cols-4 sm:gap-6 sm:pt-6">
      {profile.stats.map((stat) => {
        return (
          <div
            key={stat.label}
            className="space-y-2 pr-4 sm:pr-6 border-r border-border last:border-r-0"
          >
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-foreground/60">
              {stat.label}
            </p>

            <p className="text-3xl font-mono font-bold sm:text-4xl">
              {stat.value}
              {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
            </p>

            <p className="text-xs font-mono text-foreground/60">{stat.description}</p>
          </div>
        );
      })}
    </div>
  );
};

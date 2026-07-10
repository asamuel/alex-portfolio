export const HeroImageDesign = () => {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] overflow-hidden lg:block">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

      <div className="absolute right-[-20%] top-1/2 size-[760px] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <svg
        viewBox="0 0 760 720"
        className="absolute right-[-4%] top-1/2 h-[720px] w-[760px] -translate-y-1/2 opacity-80"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: 13 }).map((_, index) => {
          const y = 130 + index * 38;
          const opacity = 0.12 + index * 0.015;

          return (
            <path
              key={index}
              d={`M80 ${y} C190 ${y - 70}, 300 ${y + 70}, 420 ${y} S620 ${y - 70}, 720 ${y}`}
              stroke={index === 5 || index === 8 ? 'var(--color-accent)' : 'var(--color-border)'}
              strokeOpacity={index === 5 || index === 8 ? 0.35 : opacity}
              strokeWidth="1"
            />
          );
        })}

        <circle cx="530" cy="320" r="4" fill="var(--color-accent)" opacity="0.85" />
        <circle cx="610" cy="442" r="3" fill="var(--color-accent)" opacity="0.6" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-background via-background/90 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
};

export const SkillTag = ({ name }: { name: string }) => (
  <span className="rounded-md border border-border px-3 py-1 font-mono text-xs text-foreground/75 transition-colors hover:border-accent hover:text-foreground">
    {name}
  </span>
);

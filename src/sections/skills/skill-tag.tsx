import { cn } from '@/lib/utils';

type SkillTagProps = {
  name: string;
  isCounter?: boolean;
};

export const SkillTag = ({ name, isCounter = false }: SkillTagProps) => {
  return (
    <span
      className={cn(
        'inline-flex min-h-7 items-center whitespace-nowrap rounded-md border border-border px-2.5 py-1 font-mono text-xs text-foreground/75 transition-colors hover:border-accent hover:text-foreground sm:px-3',
        isCounter && 'border-accent/30 text-accent'
      )}
    >
      {name}
    </span>
  );
};

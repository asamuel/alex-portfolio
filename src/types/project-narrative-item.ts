export type NarrativeEmphasis = 'strong' | 'accent' | 'code' | 'muted';

export type ProjectNarrativeSegment = {
  text: string;
  emphasis?: NarrativeEmphasis;
};

export type ProjectNarrativeItem = {
  title: string;
  description: ProjectNarrativeSegment[];
};

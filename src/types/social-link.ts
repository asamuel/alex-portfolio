export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'whatsapp';

export interface SocialLink {
  id: SocialPlatform;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

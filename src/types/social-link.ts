export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'whatsapp';

export interface SocialLink {
  id: SocialPlatform;
  label: string;
  href: string;
  external: boolean;
}

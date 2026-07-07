export interface ProfileSeo {
  title: string;
  description: string;
  siteName: string;
  url: string;
  ogImage: string;
  themeColor: string;
  locale: string;
  type: string;
  keywords: string[];
  author: string;
  creator: string;
  robots: {
    index: boolean;
    follow: boolean;
  };
}

export interface ProfileStat {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  profileImage: string;
  focusAreas: string[];
  stats: ProfileStat[];
  seo: ProfileSeo;
}

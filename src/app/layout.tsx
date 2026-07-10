import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { themeInitScript } from '@/lib/theme';
import './globals.css';
import { profile } from '@/constants/profile';
import { Navbar } from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.seo.url),
  title: {
    default: profile.seo.title,
    template: `%s | ${profile.name}`,
  },
  description: profile.seo.description,
  applicationName: profile.seo.siteName,
  authors: [{ name: profile.seo.author }],
  creator: profile.seo.creator,
  keywords: profile.seo.keywords,
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: profile.seo.url,
    siteName: profile.seo.siteName,
    images: [
      {
        url: profile.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} portfolio`,
      },
    ],
    locale: profile.seo.locale,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
    images: [profile.seo.ogImage],
  },
  robots: profile.seo.robots,
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        {children}
        {process.env.VERCEL === '1' && <Analytics />}
        <Footer />
      </body>
    </html>
  );
}

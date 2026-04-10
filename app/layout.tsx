import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { isPreviewEnvironment, SITE_URL } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',      // Prevents invisible text during font load (improves CLS)
  preload: true,
  variable: '--font-inter',
});

const SITE_NAME = 'AUTOScraping';
const DEFAULT_OG_IMAGE = '/og-image.png';
const isPreview = isPreviewEnvironment();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AUTOScraping | AI Web Scraping, Data Factory & Data Squad',
    template: '%s | AUTOScraping',
  },
  description:
    'AI-powered web scraping, data extraction and enrichment services. Power faster decisions with Data Factory and Data Squad teams.',
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'AUTOScraping - AI Web Scraping, Data Factory & Data Squad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@autoscraping',
    creator: '@autoscraping',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: isPreview
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
      },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'AUTOScraping',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
      sameAs: [
        'https://www.linkedin.com/company/autoscraping',
        'https://www.instagram.com/autoscraping',
        'https://www.facebook.com/autoscraping',
        'https://github.com/autoscraping',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+16314004766',
          contactType: 'customer service',
          email: 'info@autoscraping.com',
          availableLanguage: ['Spanish', 'English'],
          areaServed: ['US', 'AR', 'LATAM'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'AUTOScraping',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#location-ar`,
      name: 'AUTOScraping',
      image: `${SITE_URL}/logo.png`,
      url: SITE_URL,
      telephone: '+16314004766',
      email: 'info@autoscraping.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Urquiza 123',
        addressLocality: 'Santiago del Estero',
        addressCountry: 'AR',
      },
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#location-us`,
      name: 'AUTOScraping',
      image: `${SITE_URL}/logo.png`,
      url: SITE_URL,
      telephone: '+16314004766',
      email: 'info@autoscraping.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8 The Green STE A',
        addressLocality: 'Dover',
        addressRegion: 'DE',
        postalCode: '19901',
        addressCountry: 'US',
      },
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Middleware sets 'x-lang' on every response so the root layout
  // can apply the correct lang attribute to <html> server-side.
  const headersList = headers();
  const lang = headersList.get('x-lang') ?? 'es';

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${inter.className}`}>
        <JsonLd schema={organizationSchema} />
        {children}
      </body>
    </html>
  );
}

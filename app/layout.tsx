import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

// Barlow Condensed isn't a variable font in next/font's dataset, so weights
// must be listed explicitly — 700 covers every heading usage (Tailwind's
// font-bold), 600 is included as a safety net for any semibold headings.
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dtlawater.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'DTLA Water – Premium Water Delivery | Downtown Los Angeles',
    template: '%s | DTLA Water',
  },
  description:
    'Premium purified and alkaline water delivery for offices, industrial facilities, events, and film productions across Downtown Los Angeles.',
  keywords: [
    'water delivery',
    'alkaline water delivery',
    'purified water delivery',
    'Downtown LA water delivery',
    'Los Angeles office water delivery',
    'industrial water delivery Los Angeles',
    'film production water delivery',
    'pH 9.5 alkaline water',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'DTLA Water',
    title: 'DTLA Water – Premium Water Delivery | Downtown Los Angeles',
    description:
      'Premium purified and alkaline water delivery for offices, industrial facilities, events, and film productions across Downtown Los Angeles.',
    images: [
      {
        url: '/dtla-water-logo.png',
        width: 700,
        height: 322,
        alt: 'DTLA Water – Premium Water Delivery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTLA Water – Premium Water Delivery',
    description: 'Purified & alkaline water delivered to your door. No contracts, cancel anytime.',
    images: ['/dtla-water-logo.png'],
  },
  icons: {
    icon: '/dtla-water-logo.png',
    shortcut: '/dtla-water-logo.png',
    apple: '/dtla-water-logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    // Add your Google Search Console verification token here
    google: 'your-google-verification-token',
  },
}

// JSON-LD local business schema for Google rich results
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DTLA Water',
  description:
    'Premium purified and alkaline water delivery for offices, industrial facilities, events, and film productions across Downtown Los Angeles.',
  url: BASE_URL,
  telephone: '+12133714500',
  email: 'owner@dtlawater.com', // ⚠️ placeholder — confirm real inbox
  priceRange: '$$',
  servesCuisine: null,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1360 South Figueroa Street',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    postalCode: '90015',
    addressCountry: 'US',
  },
  // ⚠️ approximate coordinates for 1360 S Figueroa St — verify exact geocode before launch
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.0407,
    longitude: -118.2685,
  },
  areaServed: [
    { '@type': 'City', name: 'Downtown LA' },
    { '@type': 'City', name: 'Koreatown' },
    { '@type': 'City', name: 'Hollywood' },
    { '@type': 'City', name: 'Vernon' },
    { '@type': 'City', name: 'Culver City' },
    { '@type': 'City', name: 'Burbank' },
    { '@type': 'City', name: 'Glendale' },
    { '@type': 'City', name: 'Pasadena' },
    { '@type': 'City', name: 'Montrose' },
    { '@type': 'City', name: 'Arcadia' },
    { '@type': 'City', name: 'Azusa' },
    { '@type': 'City', name: 'El Monte' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Water Delivery Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Purified Water Delivery',
          description: '10-stage ultra-filtered purified water, 3 and 5 gallon bottles.',
        },
        price: '6.99',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Alkaline Water Delivery (pH 9.5)',
          description: 'Purified and remineralized alkaline water at pH 9.5.',
        },
        price: '8.99',
        priceCurrency: 'USD',
      },
    ],
  },
  // ⚠️ placeholder handles — confirm real DTLA Water social accounts
  sameAs: [
    'https://www.facebook.com/dtlawater',
    'https://www.instagram.com/dtlawater',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className={inter.className}>
        {children}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}

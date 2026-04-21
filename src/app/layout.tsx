import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import StickyBottomBar from '@/components/StickyBottomBar'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL('https://skdholidays.in'),
  title: {
    default: 'Best Taxi & Bike Rental in Dharamshala | SKD Holidays',
    template: '%s | SKD Holidays',
  },
  description:
    'Book taxi, scooty, bike & tour packages in Dharamshala at best price. Local taxi, airport pickup, Royal Enfield rental, Triund trek & more. Call SKD Holidays now!',
  keywords: [
    'taxi dharamshala', 'bike rental dharamshala', 'scooty rental dharamshala',
    'tour packages dharamshala', 'dharamshala to manali taxi', 'royal enfield rental mcleod ganj',
    'cab service dharamshala', 'dharamshala travel agent', 'himachal pradesh taxi',
    'skd holidays dharamshala', 'triund trek package', 'dalhousie tour',
  ],
  authors: [{ name: 'SKD Holidays' }],
  creator: 'SKD Holidays',
  publisher: 'SKD Holidays',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         'https://skdholidays.in',
    siteName:    'SKD Holidays',
    title:       'Best Taxi & Bike Rental in Dharamshala | SKD Holidays',
    description: 'Book taxi, scooty, bike & tour packages in Dharamshala at best price.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SKD Holidays Dharamshala' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Best Taxi & Bike Rental in Dharamshala | SKD Holidays',
    description: 'Book taxi, scooty, bike & tour packages in Dharamshala at best price.',
    images:      ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon:  [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor:          '#16a34a',
  width:               'device-width',
  initialScale:        1,
  maximumScale:        5,
}

const structuredData = {
  '@context':    'https://schema.org',
  '@type':       'LocalBusiness',
  name:          BUSINESS.name,
  image:         'https://skdholidays.in/og-image.jpg',
  description:   'Reliable taxi, bike rental and tour packages in Dharamshala, Himachal Pradesh.',
  url:           'https://skdholidays.in',
  telephone:     BUSINESS.phone,
  email:         BUSINESS.email,
  address: {
    '@type':           'PostalAddress',
    streetAddress:     'Main Market',
    addressLocality:   'Dharamshala',
    addressRegion:     'Himachal Pradesh',
    postalCode:        '176215',
    addressCountry:    'IN',
  },
  geo: {
    '@type':     'GeoCoordinates',
    latitude:    32.2190,
    longitude:   76.3234,
  },
  openingHoursSpecification: {
    '@type':    'OpeningHoursSpecification',
    dayOfWeek:  ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens:      '05:00',
    closes:     '23:00',
  },
  sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
  priceRange:    '₹₹',
  hasMap:        BUSINESS.mapUrl,
  servesCuisine: undefined,
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Card',
  areaServed: ['Dharamshala','McLeod Ganj','Kangra','Manali','Dalhousie','Shimla','Pathankot'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="leaf-bg">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyBottomBar />
      </body>
    </html>
  )
}

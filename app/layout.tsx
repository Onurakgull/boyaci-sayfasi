import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no'
};

export const metadata: Metadata = {
  title: "Bafra Boyacı | #1 Bafra Boya Ustası - 15+ Yıl Deneyim ☎️ 0505 520 9625",
  description: "⭐ Bafra'nın 1 Numaralı Boyacısı! 15+ yıl deneyim, 1000+ mutlu müşteri. İç cephe, dış cephe, ev boyama. Ücretsiz keşif! Bafra boyacı arıyorsanız hemen arayın ☎️ 0505 520 9625",
  keywords: "bafra boyacı, bafra boya ustası, boyacı bafra, boya ustası bafra, ev boyama bafra, iç cephe boyama bafra, dış cephe boyama bafra, bafra boya badana, bafra boyama hizmeti, boyacı samsun, usta boyacı bafra, profesyonel boyacı bafra, güvenilir boyacı bafra, kaliteli boyacı bafra, uygun fiyat boyacı bafra, bafra ev boyacısı, bafra dış cephe boyacısı, bafra iç cephe boyacısı",
  authors: [{ name: "Bafra Boyacı" }],
  generator: "Next.js",
  applicationName: "Bafra Boyacı",
  referrer: "origin-when-cross-origin",
  creator: "Bafra Boyacı",
  publisher: "Bafra Boyacı",
  metadataBase: new URL('https://bafraninboyacisi.com.tr'),
  alternates: {
    canonical: 'https://bafraninboyacisi.com.tr',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#2563EB' },
      { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "Bafra Boyacı | #1 Bafra Boya Ustası - 15+ Yıl Deneyim",
    description: "⭐ Bafra'nın 1 Numaralı Boyacısı! 15+ yıl deneyim, 1000+ mutlu müşteri. Bafra boyacı arıyorsanız doğru adrestesiniz! ☎️ 0505 520 9625",
    url: 'https://bafraninboyacisi.com.tr',
    siteName: 'Bafra Boyacı - Bafranın Boyacısı',
    locale: "tr_TR",
    type: "website",
    countryName: "Turkey",
    images: [
      {
        url: 'https://bafraninboyacisi.com.tr/painter.jpg',
        width: 1200,
        height: 630,
        alt: 'Bafra Boyacı - Profesyonel Boyama Hizmeti',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bafra Boyacı | #1 Bafra Boya Ustası - 15+ Yıl Deneyim',
    description: '⭐ Bafra\'nın 1 Numaralı Boyacısı! Bafra boyacı arıyorsanız hemen arayın ☎️ 0505 520 9625',
    images: ['https://bafraninboyacisi.com.tr/painter.jpg'],
    creator: '@bafraboyaci',
    site: '@bafraboyaci',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Bafra Boyacı" />
        <meta name="application-name" content="Bafra Boyacı" />
        <meta name="msapplication-TileColor" content="#2563EB" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="geo.region" content="TR-55" />
        <meta name="geo.placename" content="Bafra, Samsun" />
        <meta name="geo.position" content="41.5667;35.9" />
        <meta name="ICBM" content="41.5667, 35.9" />
        <meta name="DC.title" content="Bafra Boyacı - Bafra Boya Ustası" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Bafra Boyacı" />
        <meta name="coverage" content="Worldwide" />
        <meta name="identifier-URL" content="https://bafraninboyacisi.com.tr" />
        <meta name="category" content="Boyama Hizmetleri, İnşaat, Tadilat" />
        <meta name="subject" content="Bafra Boyacı, Boya Ustası, Ev Boyama" />
        <link rel="canonical" href="https://bafraninboyacisi.com.tr" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#2563EB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "ProfessionalService"],
              "name": "Bafra Boyacı",
              "alternateName": ["Bafranın Boyacısı", "Bafra Boya Ustası", "Boyacı Bafra"],
              "description": "Bafra'nın 1 numaralı boyacısı. 15+ yıl deneyim, 1000+ mutlu müşteri. İç cephe, dış cephe, ev boyama hizmetleri. Bafra boyacı arıyorsanız hemen arayın!",
              "url": "https://bafraninboyacisi.com.tr",
              "telephone": "+90-505-520-9625",
              "email": "info@bafraninboyacisi.com.tr",
              "areaServed": ["Bafra", "Samsun", "Terme", "Vezirköprü", "Alaçam", "Asarcık"],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "currenciesAccepted": "TRY",
              "openingHours": ["Mo-Sa 08:00-18:00"],
              "foundingDate": "2009",
              "slogan": "Bafra'nın 1 Numaralı Boyacısı",
              "knowsAbout": ["İç Cephe Boyama", "Dış Cephe Boyama", "Ev Boyama", "Boya Badana", "Duvar Boyama", "Apartman Boyama"],
              "sameAs": [
                "https://www.google.com/maps/search/bafra+boyacı",
                "https://www.yandex.com.tr/harita/search/bafra%20boyacı"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bafra",
                "addressRegion": "Samsun",
                "addressCountry": "TR",
                "postalCode": "55400"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.5667,
                "longitude": 35.9
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 41.5667,
                  "longitude": 35.9
                },
                "geoRadius": "25000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Boyama Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "İç Cephe Boyama",
                      "description": "Ev içi duvar boyama hizmeti"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dış Cephe Boyama",
                      "description": "Bina dış cephe boyama hizmeti"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Boya Badana",
                      "description": "Duvar boya ve badana hizmeti"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5"
              },
              "image": [
                "https://bafraninboyacisi.com.tr/painter.jpg"
              ],
              "logo": "https://bafraninboyacisi.com.tr/icon.svg"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

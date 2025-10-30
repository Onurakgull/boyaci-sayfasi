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

export const metadata: Metadata = {
  title: "Bafra Boyacı | Profesyonel Ev & Dış Cephe Boyama Hizmeti",
  description: "Bafra'da deneyimli boya ustalarıyla iç ve dış cephe boyama, ev boyama ve boya badana hizmetleri. Hızlı teklif, kaliteli işçilik ve uygun fiyat — Boya ustası Bafra.",
  keywords: "Bafra boyacı, Bafra boya badana ustası, Bafra ev boyama hizmeti, İç cephe boyama Bafra, Dış cephe boyama Bafra, Boya ustası Bafra",
  authors: [{ name: "Bafra Boyacı" }],
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
    title: "Bafra Boyacı | Profesyonel Ev & Dış Cephe Boyama Hizmeti",
    description: "Bafra'da deneyimli boya ustalarıyla iç ve dış cephe boyama, ev boyama ve boya badana hizmetleri.",
    url: 'https://bafraninboyacisi.com.tr',
    siteName: 'Bafranın Boyacısı',
    locale: "tr_TR",
    type: "website",
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
    title: 'Bafra Boyacı | Profesyonel Ev & Dış Cephe Boyama Hizmeti',
    description: 'Bafra\'da deneyimli boya ustalarıyla iç ve dış cephe boyama, ev boyama ve boya badana hizmetleri.',
    images: ['https://bafraninboyacisi.com.tr/painter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#2563EB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Bafra Boyacı",
              "description": "Bafra'da iç ve dış cephe boyama, ev boyama ve boya badana hizmetleri.",
              "areaServed": "Bafra",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bafra",
                "addressRegion": "Samsun",
                "addressCountry": "TR"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 41.5667,
                  "longitude": 35.9
                },
                "geoRadius": "25000"
              }
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

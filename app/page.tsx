import type { Metadata } from "next";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingPaintWidget from './components/FloatingPaintWidget';

export const metadata: Metadata = {
  title: "Bafra Boyacı ⭐ #1 Bafra Boya Ustası | 0505 520 9625 🎨",
  description: "🏆 Bafra'nın 1 Numaralı Boyacısı! Google'da 'bafra boyacı' aramasında #1! 15+ yıl deneyim ✅ 1000+ mutlu müşteri ✅ Ücretsiz keşif ✅ Hemen ara: 0505 520 9625",
  keywords: "bafra boyacı, bafra boya ustası, boyacı bafra, boya ustası bafra, ev boyama bafra, iç cephe boyama bafra, dış cephe boyama bafra, bafra boya badana, bafra boyama hizmeti, boyacı samsun bafra, usta boyacı bafra, profesyonel boyacı bafra, güvenilir boyacı bafra, kaliteli boyacı bafra, uygun fiyat boyacı bafra, bafra ev boyacısı, bafra dış cephe boyacısı, bafra iç cephe boyacısı, bafra boyama ustası, bafranın boyacısı",
  alternates: {
    canonical: "https://bafraninboyacisi.com.tr",
  },
  openGraph: {
    title: "Bafra Boyacı ⭐ #1 Bafra Boya Ustası | 0505 520 9625",
    description: "🏆 Bafra'nın 1 Numaralı Boyacısı! Google'da 'bafra boyacı' aramasında ilk sırada! 15+ yıl deneyim, 1000+ mutlu müşteri. Hemen ara!",
    url: "https://bafraninboyacisi.com.tr",
    type: "website",
    images: [
      {
        url: "https://bafraninboyacisi.com.tr/painter.jpg",
        width: 1200,
        height: 630,
        alt: "Bafra Boyacı - Profesyonel Boyama Hizmeti",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO için gizli H1 başlığı */}
      <h1 className="sr-only">
        Bafra Boyacı | Bafra Boya Ustası | Boyacı Bafra | İç Cephe Boyama Bafra | Dış Cephe Boyama Bafra | Ev Boyama Bafra | Bafra Boya Badana Ustası | Profesyonel Boyacı Bafra | Güvenilir Boyacı Bafra | Usta Boyacı Bafra
      </h1>
      
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingPaintWidget />
    </div>
  );
}

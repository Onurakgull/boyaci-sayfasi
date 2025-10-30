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
  title: "Bafra Boyacı | 15+ Yıllık Deneyim ile Profesyonel Boyama Hizmeti",
  description: "Bafra'nın en güvenilir boya ustası. İç cephe boyama, dış cephe boyama ve ev boyama hizmetleri. Ücretsiz keşif, kaliteli malzeme garantisi. ☎️ 0505 520 9625 - Hemen arayın!",
  keywords: "Bafra boyacı, Bafra boya ustası, ev boyama Bafra, iç cephe boyama Bafra, dış cephe boyama Bafra, boya badana Bafra, boyacı Samsun, usta boyacı Bafra",
  alternates: {
    canonical: "https://bafraninboyacisi.com.tr",
  },
  openGraph: {
    title: "Bafra Boyacı | 15+ Yıllık Deneyim ile Profesyonel Boyama Hizmeti",
    description: "Bafra'nın en güvenilir boya ustası. İç cephe boyama, dış cephe boyama ve ev boyama hizmetleri. Ücretsiz keşif ve kaliteli hizmet garantisi.",
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
        Bafra Boyacı - Profesyonel İç Cephe Boyama Bafra, Dış Cephe Boyama Bafra ve Bafra Ev Boyama Hizmeti | Bafra Boya Badana Ustası
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

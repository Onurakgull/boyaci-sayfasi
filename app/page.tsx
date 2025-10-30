import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingPaintWidget from './components/FloatingPaintWidget';

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

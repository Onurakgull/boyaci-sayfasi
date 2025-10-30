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

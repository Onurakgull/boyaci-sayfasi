'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Aktif bölümü takip et
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'experience', 'about', 'contact'];
      const scrollY = window.scrollY + 100; // Offset for better detection

      if (scrollY < 300) {
        setActiveSection('');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (section: string) => {
    const isActive = activeSection === section || (section === '' && activeSection === '');
    return isActive 
      ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300" 
      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300";
  };

  const getMobileLinkClass = (section: string) => {
    const isActive = activeSection === section || (section === '' && activeSection === '');
    return isActive 
      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300" 
      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300";
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group relative">
              {/* Ana Logo Container */}
              <div className="relative">
                {/* Fırça tutan adam silüeti ve BB ikonu */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300 shadow-lg logo-container">
                  {/* Arka plan dekoratif elementler */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
                  
                  {/* BB Harfleri */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      B<span className="text-yellow-300">B</span>
                    </span>
                  </div>
                  
                  {/* Fırça ikonu - Sağ alt köşe */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 transform rotate-45 group-hover:rotate-12 transition-transform duration-300 brush-icon">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      {/* Fırça sapı */}
                      <rect x="10" y="2" width="2" height="8" fill="#FCD34D" rx="1"/>
                      {/* Metal kısım */}
                      <rect x="9" y="9" width="4" height="2" fill="#C0C0C0" rx="0.5"/>
                      {/* Kıllar */}
                      <rect x="8.5" y="11" width="1" height="4" fill="#DBEAFE" rx="0.5"/>
                      <rect x="10" y="11" width="1" height="5" fill="#BFDBFE" rx="0.5"/>
                      <rect x="11.5" y="11" width="1" height="4.5" fill="#93C5FD" rx="0.5"/>
                      <rect x="13" y="11" width="1" height="4" fill="#DBEAFE" rx="0.5"/>
                    </svg>
                  </div>
                  
                  {/* Boya damlaları efekti */}
                  <div className="absolute top-1 left-1 w-1 h-1 bg-red-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity paint-drop"></div>
                  <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-green-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity paint-drop"></div>
                  <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-50 group-hover:opacity-90 transition-opacity paint-drop"></div>
                </div>
                

              </div>
              
              {/* Desktop'ta görünen animasyonlu metin */}
              <div className="ml-3 text-xl font-bold hidden sm:block">
                <span className="text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-1000 ease-in-out whitespace-nowrap">
                  Bafranın Boyacısı
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#" className={getLinkClass('')}>
                Ana Sayfa
              </a>
              <a href="#services" className={getLinkClass('services')}>
                Hizmetler
              </a>
              <a href="#experience" className={getLinkClass('experience')}>
                Deneyim
              </a>
              <a href="#about" className={getLinkClass('about')}>
                Hakkımızda
              </a>
              <a href="#contact" className={getLinkClass('contact')}>
                İletişim
              </a>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+905055209625" 
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
            >
              {/* Dekoratif arka plan */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* İçerik */}
              <div className="relative flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-blue-100 group-hover:text-white transition-colors duration-300">Ücretsiz Arama</span>
                  <span className="font-bold">Hemen Ara</span>
                </div>
              </div>
              
              {/* Pulse efekti */}
              <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a
                href="#"
                className={getMobileLinkClass('')}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </a>
              <a
                href="#services"
                className={getMobileLinkClass('services')}
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </a>
              <a
                href="#experience"
                className={getMobileLinkClass('experience')}
                onClick={() => setIsMenuOpen(false)}
              >
                Deneyim
              </a>
              <a
                href="#about"
                className={getMobileLinkClass('about')}
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </a>
              <a
                href="#contact"
                className={getMobileLinkClass('contact')}
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </a>
              <div className="pt-4">
                <a
                  href="tel:+905055209625"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 w-full shadow-lg relative overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Dekoratif arka plan */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-blue-100 group-hover:text-white transition-colors duration-300">Ücretsiz Arama</span>
                      <span className="font-bold">Hemen Ara</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

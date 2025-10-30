export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 group relative">
              {/* Footer Logo - Navbar ile aynı tasarım */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300 shadow-lg logo-container">
                  {/* Arka plan dekoratif elementler */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
                  
                  {/* BB Harfleri */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      B<span className="text-yellow-300">B</span>
                    </span>
                  </div>
                  
                  {/* Fırça ikonu */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 transform rotate-45 group-hover:rotate-12 transition-transform duration-300 brush-icon">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <rect x="10" y="2" width="2" height="8" fill="#FCD34D" rx="1"/>
                      <rect x="9" y="9" width="4" height="2" fill="#C0C0C0" rx="0.5"/>
                      <rect x="8.5" y="11" width="1" height="4" fill="#DBEAFE" rx="0.5"/>
                      <rect x="10" y="11" width="1" height="5" fill="#BFDBFE" rx="0.5"/>
                      <rect x="11.5" y="11" width="1" height="4.5" fill="#93C5FD" rx="0.5"/>
                      <rect x="13" y="11" width="1" height="4" fill="#DBEAFE" rx="0.5"/>
                    </svg>
                  </div>
                  
                  {/* Boya damlaları */}
                  <div className="absolute top-1 left-1 w-1 h-1 bg-red-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity paint-drop"></div>
                  <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-green-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity paint-drop"></div>
                  <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-50 group-hover:opacity-90 transition-opacity paint-drop"></div>
                </div>
                

              </div>
              
              {/* Footer'da animasyonlu metin */}
              <div className="ml-3 text-xl font-bold">
                <span className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-1000 ease-in-out whitespace-nowrap">
                  Bafranın Boyacısı
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Bafra ve çevresinde 15+ yıldır kaliteli boyama hizmeti sunuyoruz. 
              Profesyonel ekibimiz ve kaliteli malzemelerimizle hayalinizdeki görünümü yakalayın.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <span>📘</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <span>📷</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <span>🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Deneyim
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+905055209625" className="hover:text-white transition-colors">
                  0505 520 9625
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@bafraboyaci.com" className="hover:text-white transition-colors">
                  info@bafraboyaci.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <div>Bafra/Samsun</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bafra Boyacı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

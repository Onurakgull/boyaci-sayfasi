'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Bafra Boyacı — Güvenilir Boya Ustası",
      subtitle: "15+ Yıllık Deneyim",
      description: "Bafra ev boyama hizmeti ve boya badana ihtiyaçlarınız için uzman ekip. İç cephe boyama Bafra ve dış cephe boyama Bafra alanlarında profesyonel çözümler.",
      features: [
        { icon: "🏆", text: "Bafra boya badana ustası", number: "15+" },
        { icon: "✅", text: "Kaliteli malzeme garantisi", number: "100%" },
        { icon: "💰", text: "Uygun fiyat politikası", number: "500+" },
        { icon: "🧹", text: "Temiz ve düzenli çalışma", number: "24/7" }
      ]
    },
    {
      title: "İç Cephe Boyama Bafra",
      subtitle: "Modern Renkler",
      description: "İç cephe boyama Bafra hizmetimizle evinizin içini yenileyin. Boya ustası Bafra ekibimizle kaliteli hizmet garantisiyle.",
      features: [
        { icon: "🏠", text: "Bafra ev boyama uzmanı", number: "300+" },
        { icon: "🎨", text: "Renk danışmanlığı", number: "50+" },
        { icon: "⏱️", text: "Hızlı teslim", number: "3-5" },
        { icon: "🛡️", text: "Garanti süresi", number: "2 YIL" }
      ]
    },
    {
      title: "Dış Cephe Boyama Bafra",
      subtitle: "Dayanıklı Koruma",
      description: "Dış cephe boyama Bafra hizmetimizle binanızın dış cephesini hava koşullarına dayanıklı özel boyalarla koruyun. Bafra boyacı ekibimizle uzun ömürlü çözümler.",
      features: [
        { icon: "🏢", text: "Dış cephe boyama uzmanı", number: "200+" },
        { icon: "🌧️", text: "Hava dayanıklılığı", number: "10+" },
        { icon: "🎯", text: "Başarı oranımız", number: "99%" },
        { icon: "📞", text: "Müşteri desteği", number: "7/24" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 saniyede bir otomatik geçiş

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 1000);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 1000);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
          {/* Sol taraf - Metin içeriği */}
          <div className="relative z-10">
            <div className={`transition-all duration-700 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {slides[currentSlide].title.split(' ').slice(0, -1).join(' ')}
                <span className="block text-yellow-400">{slides[currentSlide].title.split(' ').slice(-1)[0]}</span>
              </h1>
              <div className="text-2xl text-yellow-300 font-semibold mb-4">
                {slides[currentSlide].subtitle}
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <a 
                href="#contact" 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors text-center transform hover:scale-105"
              >
                Ücretsiz Keşif
              </a>
              <a 
                href="tel:+905055209625" 
                className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors text-center transform hover:scale-105"
              >
                0505 520 9625
              </a>
            </div>

            {/* Slider navigasyon */}
            <div className="flex space-x-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-yellow-400 w-8' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Sağ taraf - Animasyonlu Ev */}
          <div className="lg:text-right relative">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center scale-75 sm:scale-90 md:scale-100 lg:scale-105">
              {/* Sol ev parçası */}
              <div className={`absolute transition-all duration-1000 ease-in-out ${
                isAnimating 
                  ? 'transform -translate-x-full opacity-0' 
                  : 'transform translate-x-0 opacity-100'
              }`}>
                <svg width="100%" height="100%" viewBox="0 0 300 300" className="house-left max-w-[300px] sm:max-w-[350px] md:max-w-[400px] max-h-[300px] sm:max-h-[350px] md:max-h-[400px]">
                  {/* Sol yarı ev */}
                  <polygon 
                    points="30,150 150,60 150,270 30,270" 
                    fill="rgba(255, 255, 255, 0.15)" 
                    stroke="#1E40AF" 
                    strokeWidth="3"
                  />
                  {/* Çatı sol */}
                  <polygon 
                    points="15,150 150,45 150,60 30,150" 
                    fill="#1E40AF"
                  />
                  {/* Çatı detayı */}
                  <line x1="20" y1="145" x2="145" y2="50" stroke="#1E3A8A" strokeWidth="2" />
                  {/* Kapı sol yarı - Dikdörtgen */}
                  <rect x="50" y="210" width="45" height="60" fill="#8B5CF6" />
                  <rect x="52" y="212" width="41" height="56" fill="#A855F7" />
                  
                  {/* Pencere - Düzeltilmiş */}
                  <rect x="70" y="125" width="35" height="35" fill="rgba(254, 243, 199, 0.4)" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="2" />
                  <rect x="72" y="127" width="31" height="31" fill="rgba(255, 251, 235, 0.3)" />
                  <line x1="87.5" y1="125" x2="87.5" y2="160" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1.5" />
                  <line x1="70" y1="142.5" x2="105" y2="142.5" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1.5" />
                  
                  {/* Boya damlaları efekti - Düzeltilmiş konumlar */}
                  <circle cx="85" cy="175" r="2" fill="#F59E0B" opacity="0.7" />
                  <circle cx="110" cy="185" r="1.5" fill="#EF4444" opacity="0.6" />
                  <circle cx="65" cy="195" r="1" fill="#10B981" opacity="0.8" />
                </svg>
              </div>

              {/* Sağ ev parçası */}
              <div className={`absolute transition-all duration-1000 ease-in-out ${
                isAnimating 
                  ? 'transform translate-x-full opacity-0' 
                  : 'transform translate-x-0 opacity-100'
              }`}>
                <svg width="100%" height="100%" viewBox="0 0 300 300" className="house-right max-w-[300px] sm:max-w-[350px] md:max-w-[400px] max-h-[300px] sm:max-h-[350px] md:max-h-[400px]">
                  {/* Sağ yarı ev */}
                  <polygon 
                    points="150,60 270,150 270,270 150,270" 
                    fill="rgba(255, 255, 255, 0.15)" 
                    stroke="#1E40AF" 
                    strokeWidth="3"
                  />
                  {/* Çatı sağ */}
                  <polygon 
                    points="150,45 285,150 270,150 150,60" 
                    fill="#1E40AF"
                  />
                  {/* Çatı detayı */}
                  <line x1="155" y1="50" x2="280" y2="145" stroke="#1E3A8A" strokeWidth="2" />
                  {/* Kapı sağ yarı - Dikdörtgen */}
                  <rect x="205" y="210" width="45" height="60" fill="#8B5CF6" />
                  <rect x="207" y="212" width="41" height="56" fill="#A855F7" />
                  
                  {/* Kapı kolu */}
                  <circle cx="220" cy="240" r="2.5" fill="#F59E0B" />
                  <circle cx="220" cy="240" r="1.5" fill="#FBBF24" />
                  
                  {/* Pencere - Düzeltilmiş */}
                  <rect x="195" y="125" width="35" height="35" fill="rgba(254, 243, 199, 0.4)" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="2" />
                  <rect x="197" y="127" width="31" height="31" fill="rgba(255, 251, 235, 0.3)" />
                  <line x1="212.5" y1="125" x2="212.5" y2="160" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1.5" />
                  <line x1="195" y1="142.5" x2="230" y2="142.5" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1.5" />
                  
                  {/* Boya damlaları efekti - Düzeltilmiş konumlar */}
                  <circle cx="215" cy="175" r="2" fill="#8B5CF6" opacity="0.7" />
                  <circle cx="190" cy="185" r="1.5" fill="#F59E0B" opacity="0.6" />
                  <circle cx="235" cy="195" r="1" fill="#EF4444" opacity="0.8" />
                </svg>
              </div>

              {/* Birleşmiş ev içinde özellikler - Duvar yazıları olarak */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-500 ${
                isAnimating 
                  ? 'opacity-0 scale-50' 
                  : 'opacity-100 scale-100'
              }`}>
                <div className="relative w-[280px] sm:w-[380px] md:w-[450px] lg:w-[500px] h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px]">
                  {/* Ana ev yapısı - Birleşmiş hali */}
                  <svg width="100%" height="100%" viewBox="0 0 288 288" className="absolute inset-0">
                    {/* Birleşmiş ev */}
                    <polygon 
                      points="30,144 144,48 258,144 258,258 30,258" 
                      fill="rgba(248, 250, 252, 0.1)" 
                      stroke="rgba(255, 255, 255, 0.3)" 
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    {/* Çatı çizgisi */}
                    <line x1="144" y1="48" x2="144" y2="258" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3,3" />
                  </svg>

                  {/* Dış çevre yazıları - Pratik hizmet açıklamaları */}
                  {(() => {
                    // Slide'a göre farklı hizmet açıklamaları
                    const serviceTexts: { [key: number]: string[] } = {
                      0: [ // Profesyonel Boyama Hizmeti
                        "Duvarların Kusursuz Boyanması",
                        "Kapıların Profesyonel Boyanması", 
                        "Boya Sonrası Temizlik",
                        "Kaliteli Malzeme Garantisi"
                      ],
                      1: [ // İç Mekan Boyama
                        "Oda Duvarları Boyama",
                        "Mutfak Dolap Boyama",
                        "Banyo Fayans Boyama", 
                        "Salon Dekoratif Boyama"
                      ],
                      2: [ // Dış Cephe Boyama
                        "Bina Dış Cephe Boyama",
                        "Balkon Korkuluk Boyama",
                        "Çatı Oluğu Boyama",
                        "Bahçe Duvarı Boyama"
                      ]
                    };

                    const currentTexts = serviceTexts[currentSlide] || serviceTexts[0];
                    
                    const positions = [
                      { x: '-left-12 sm:-left-16 md:-left-20', y: 'top-0', rotation: 'rotate-8', color: 'text-red-400', bgColor: 'bg-red-500/30' },
                      { x: '-right-12 sm:-right-16 md:-right-20', y: 'top-4 sm:top-6 md:top-8', rotation: '-rotate-4', color: 'text-green-400', bgColor: 'bg-green-500/30' },
                      { x: '-left-14 sm:-left-18 md:-left-24', y: 'bottom-8 sm:bottom-10 md:bottom-12', rotation: 'rotate-4', color: 'text-purple-400', bgColor: 'bg-purple-500/30' },
                      { x: '-right-14 sm:-right-18 md:-right-24', y: 'bottom-0', rotation: '-rotate-8', color: 'text-yellow-400', bgColor: 'bg-yellow-500/30' }
                    ];
                    
                    return currentTexts.map((text: string, index: number) => (
                      <div 
                        key={index}
                        className={`absolute ${positions[index].x} ${positions[index].y} transform ${positions[index].rotation} transition-all duration-700 delay-${(index + 1) * 300} z-10 scale-75 sm:scale-90 md:scale-100 ${
                          isAnimating 
                            ? 'opacity-0 scale-50 translate-y-8' 
                            : 'opacity-100 scale-100 translate-y-0'
                        }`}
                      >
                        {/* Çok daha geliştirilmiş arka plan efekti */}
                        <div className={`absolute -inset-6 ${positions[index].bgColor} rounded-2xl blur-md`}></div>
                        <div className="absolute -inset-4 bg-white/25 backdrop-blur-lg rounded-xl border-2 border-white/40 shadow-2xl"></div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-lg"></div>
                        
                        <div className="text-center relative z-10 p-2 sm:p-3 md:p-4 min-w-[100px] sm:min-w-[120px] md:min-w-[140px] max-w-[120px] sm:max-w-[140px] md:max-w-[160px]">
                          <div className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 filter drop-shadow-lg">🎨</div>
                          <div className={`text-xs sm:text-sm md:text-base font-bold mb-1 sm:mb-2 ${positions[index].color} paint-text leading-tight`}
                               style={{
                                 textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 12px currentColor, -1px -1px 2px rgba(255,255,255,0.3)'
                               }}>
                            {text}
                          </div>
                          <div className="text-xs sm:text-sm text-white font-semibold leading-tight"
                               style={{
                                 textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 6px rgba(255,255,255,0.3)'
                               }}>
                            ✓ Profesyonel Hizmet
                          </div>
                        </div>
                        
                        {/* Çok daha geliştirilmiş boya damlası efekti */}
                        <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-5 ${positions[index].color.replace('text-', 'bg-')} rounded-full opacity-80 animate-pulse shadow-lg`}
                             style={{
                               clipPath: 'ellipse(50% 70% at 50% 30%)',
                               filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                             }}></div>
                        
                        {/* Ek boya sıçraması efektleri */}
                        <div className={`absolute -top-2 -right-2 w-1 h-1 ${positions[index].color.replace('text-', 'bg-')} rounded-full opacity-60 animate-pulse`}
                             style={{ animationDelay: '0.5s' }}></div>
                        <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 ${positions[index].color.replace('text-', 'bg-')} rounded-full opacity-50 animate-pulse`}
                             style={{ animationDelay: '1s' }}></div>
                      </div>
                    ));
                  })()}

                  {/* Orta başlık - Slide'a göre değişken */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-1000 delay-700 z-20 ${
                    isAnimating 
                      ? 'opacity-0 scale-75' 
                      : 'opacity-100 scale-100'
                  }`}>
                    <div className="bg-white/20 backdrop-blur-md rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border-2 border-white/30 shadow-2xl min-w-[150px] sm:min-w-[180px] md:min-w-[200px]">
                      {(() => {
                        const centerTexts = [
                          { title: "Profesyonel", subtitle: "Boyama Hizmeti" },
                          { title: "İç Mekan", subtitle: "Boyama" },
                          { title: "Dış Cephe", subtitle: "Boyama" }
                        ];
                        const currentCenter = centerTexts[currentSlide] || centerTexts[0];
                        
                        return (
                          <>
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-lg"
                                style={{
                                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                }}>
                              {currentCenter.title}
                            </h3>
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-yellow-400 drop-shadow-lg"
                                style={{
                                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px #FBBF24'
                                }}>
                              {currentCenter.subtitle}
                            </h3>
                          </>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Dekoratif boya damlaları */}
                  <div className="absolute top-6 left-24 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-1000 opacity-80"></div>
                  <div className="absolute top-16 right-20 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1500 opacity-70"></div>
                  <div className="absolute bottom-12 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000 opacity-80"></div>
                  <div className="absolute bottom-20 right-24 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-500 opacity-70"></div>
                  
                  {/* Ek boya sıçramaları */}
                  <div className="absolute top-32 left-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-3000 opacity-60"></div>
                  <div className="absolute bottom-32 right-32 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-2500 opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arkaplan dekoratif elementler */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-yellow-400/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-white/20 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}

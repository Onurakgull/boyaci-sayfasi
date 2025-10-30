'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Tamamlanan Proje"
    },
    {
      number: 15,
      suffix: "+",
      label: "Yıllık Deneyim"
    },
    {
      number: 100,
      suffix: "%",
      label: "Müşteri Memnuniyeti"
    },
    {
      number: 24,
      suffix: "/7",
      label: "Destek Hizmeti"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000; // 2 saniye
        const increment = end / (duration / 16); // 60fps

        const timer = setInterval(() => {
          start += increment;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.floor(start), end);
            return newCounts;
          });

          if (start >= end) {
            clearInterval(timer);
          }
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-500/10"></div>
        
        {/* Boya izleri */}
        <div className="absolute top-8 left-10 wavy-paint-stroke opacity-20" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-20 right-16 wavy-paint-stroke opacity-15 rotate-12" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-24 left-1/4 wavy-paint-stroke opacity-25 -rotate-6" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-32 right-1/3 wavy-paint-stroke opacity-30 rotate-45" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-16 right-20 wavy-paint-stroke opacity-20 -rotate-12" style={{animationDelay: '1.5s'}}></div>
        
        {/* Ek dekoratif boya damlaları */}
        <div className="absolute top-10 right-1/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-red-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-green-400/35 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <span className="text-lg">🏆</span>
            Deneyimimiz Rakamlarla
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Deneyim & Başarılarımız
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            15+ yıllık yolculuğumuzda elde ettiğimiz başarıları ve 
            müşteri memnuniyetimizi rakamlarla gösteriyoruz
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Stat kartı */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 text-center group relative overflow-hidden">
                {/* Dekoratif gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* İkon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/25 transition-colors duration-300">
                    <span className="text-2xl md:text-3xl">
                      {index === 0 ? '🏗️' : index === 1 ? '⏰' : index === 2 ? '😊' : '📞'}
                    </span>
                  </div>
                  
                  {/* Sayı */}
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {counts[index]}{stat.suffix}
                  </div>
                  
                  {/* Label */}
                  <div className="text-blue-200 text-sm md:text-base lg:text-lg font-medium group-hover:text-blue-100 transition-colors duration-300 leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alt bilgi */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-blue-100 px-6 py-3 rounded-full text-sm border border-white/10">
            <span className="text-base">✨</span>
            Her proje, kalitemizin ve deneyimimizin kanıtıdır
          </div>
        </div>
      </div>
    </section>
  );
}

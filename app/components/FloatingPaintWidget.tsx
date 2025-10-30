'use client';

import { useState } from 'react';

export default function FloatingPaintWidget() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover ile açılan bilgi paneli */}
      <div className={`absolute bottom-16 right-0 transition-all duration-300 transform ${
        isHovered 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 min-w-[280px] relative">
          {/* Üçgen ok */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white/95 rotate-45 border-r border-b border-white/20"></div>
          
          {/* İçerik */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🎨</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Bafra Boyacısı</h3>
                <p className="text-sm text-gray-600">Profesyonel Hizmet</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <a 
                href="tel:+905055209625" 
                className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Hemen Ara</div>
                  <div className="text-sm text-gray-600">0505 520 9625</div>
                </div>
              </a>
              
              <a 
                href="https://wa.me/905055209625" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">💬</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">WhatsApp</div>
                  <div className="text-sm text-gray-600">Mesaj Gönder</div>
                </div>
              </a>
              
              <a 
                href="#contact" 
                className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">📋</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Ücretsiz Keşif</div>
                  <div className="text-sm text-gray-600">Randevu Al</div>
                </div>
              </a>
            </div>
            
            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>⭐ 15+ Yıl Deneyim</span>
                <span>✅ %100 Garanti</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ana boya fırçası ikonu */}
      <div 
        className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-3xl border-4 border-white/30 ${
          isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
        }`}
      >
        {/* Boya fırçası SVG ikonu */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
        >
          {/* Fırça sapı */}
          <rect x="12" y="2" width="2" height="12" fill="white" rx="1" />
          
          {/* Fırça metal kısmı */}
          <rect x="11" y="13" width="4" height="3" fill="#FCD34D" rx="0.5" />
          
          {/* Fırça kılları */}
          <rect x="9" y="16" width="1.5" height="4" fill="white" rx="0.75" />
          <rect x="11" y="16" width="1.5" height="5" fill="white" rx="0.75" />
          <rect x="13" y="16" width="1.5" height="4.5" fill="white" rx="0.75" />
          <rect x="15" y="16" width="1.5" height="4" fill="white" rx="0.75" />
          
          {/* Boya damlaları */}
          <circle cx="8" cy="18" r="1.5" fill="#EF4444" opacity="0.8" />
          <circle cx="17" cy="19" r="1" fill="#10B981" opacity="0.7" />
          <circle cx="6" cy="21" r="0.8" fill="#8B5CF6" opacity="0.6" />
        </svg>
        
        {/* Animasyonlu boya damlaları */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500 opacity-60"></div>
        <div className="absolute top-1 -left-3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000 opacity-50"></div>
      </div>

      {/* Pulse efekti */}
      <div className={`absolute inset-0 bg-blue-400 rounded-full transition-all duration-1000 ${
        isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-20'
      } -z-10`}></div>
    </div>
  );
}

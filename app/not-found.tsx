'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Paint Brush Icon */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full text-blue-600 animate-bounce"
              fill="currentColor"
            >
              {/* Paint brush handle */}
              <rect x="20" y="140" width="12" height="40" rx="6" className="fill-amber-600" />
              
              {/* Paint brush ferrule (metal part) */}
              <rect x="18" y="130" width="16" height="15" rx="2" className="fill-gray-400" />
              
              {/* Paint brush bristles */}
              <path 
                d="M15 130 Q26 120 37 130 Q26 110 26 90 Q26 110 15 130 Z" 
                className="fill-blue-600"
              />
              
              {/* Paint drops */}
              <circle cx="45" cy="95" r="4" className="fill-blue-500 animate-pulse" />
              <circle cx="55" cy="105" r="3" className="fill-blue-400 animate-pulse" style={{animationDelay: '0.5s'}} />
              <circle cx="65" cy="85" r="2" className="fill-blue-300 animate-pulse" style={{animationDelay: '1s'}} />
              
              {/* Paint splash */}
              <path 
                d="M80 100 Q90 95 100 105 Q110 100 120 110 Q110 120 100 115 Q90 125 80 115 Z"
                className="fill-blue-200 opacity-70"
              />
            </svg>
          </div>
          
          {/* Paint trail effect */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"
                  style={{animationDelay: `${i * 0.2}s`}}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Aradığınız sayfa boyandı ve başka bir yere taşındı! 🎨
          </p>
          <p className="text-gray-500">
            Belki URL'de bir yazım hatası var ya da sayfa kaldırılmış olabilir.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Ana Sayfaya Dön
          </Link>
          
          <Link 
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Bize Ulaşın
          </Link>
        </div>

        {/* Company Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="font-semibold">Bafranın Boyacısı</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Profesyonel boyama hizmetleri • Bafra/Samsun
          </p>
        </div>

        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-100 rounded-full blur-xl opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-100 rounded-full blur-xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-10 w-16 h-16 bg-green-100 rounded-full blur-xl opacity-70 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
    </div>
  );
}

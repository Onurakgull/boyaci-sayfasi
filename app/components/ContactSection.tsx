'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData);
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Telefon",
      details: ["0505 520 9625"]
    },
    {
      icon: "📧",
      title: "E-posta",
      details: ["info@bafraboyaci.com"]
    },
    {
      icon: "📍",
      title: "Adres",
      details: ["Bafra/Samsun"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">İletişime Geçin</h2>
          <p className="text-xl text-gray-600">
            Ücretsiz keşif ve fiyat teklifi için hemen bize ulaşın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info with Background */}
          <div 
            className="relative rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/painter.jpg')"
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/85 via-blue-800/80 to-blue-900/90"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 space-y-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Bizimle İletişime Geçin</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  15+ yıllık deneyimimizle hayalinizdeki boyama projesini gerçekleştiriyoruz. 
                  Ücretsiz keşif için hemen arayın!
                </p>
              </div>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <span className="text-white text-2xl">{info.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-blue-100 group-hover:text-white transition-colors duration-300">
                        {info.title === "Telefon" ? (
                          <a 
                            href={`tel:${detail.replace(/[^0-9]/g, '')}`} 
                            className="hover:text-yellow-300 transition-colors font-medium text-lg"
                          >
                            {detail}
                          </a>
                        ) : info.title === "E-posta" ? (
                          <a 
                            href={`mailto:${detail}`} 
                            className="hover:text-yellow-300 transition-colors font-medium"
                          >
                            {detail}
                          </a>
                        ) : (
                          <span className="font-medium">{detail}</span>
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Decorative paint splashes */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-red-400/50 rounded-full animate-bounce"></div>
              <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-green-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Adınızı girin"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Telefon numaranız"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="E-posta adresiniz"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Projeniz hakkında detay verin..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

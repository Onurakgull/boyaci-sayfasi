export default function ServicesSection() {
  const services = [
    {
      icon: "🏠",
      title: "İç Cephe Boyama Bafra",
      description: "İç cephe boyama Bafra hizmetimizle evinizin içini modern renkler ve kaliteli boyalarla yenileyin. Bafra ev boyama hizmeti kapsamında oda, salon, mutfak ve banyo boyama.",
      features: ["• Duvar boyama", "• Tavan boyama", "• Dekoratif boyama"],
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: "🏢",
      title: "Dış Cephe Boyama Bafra",
      description: "Dış cephe boyama Bafra uzmanı ekibimizle binanızın dış cephesini hava koşullarına dayanıklı kaliteli boyalarla koruyun. Boya ustası Bafra garantisi.",
      features: ["• Cephe boyama", "• Çatı boyama", "• Balkon boyama"],
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: "🎨",
      title: "Bafra Boya Badana Ustası",
      description: "Bafra boya badana ustası ekibimizle özel tasarım ve dekoratif boyama işleri. Bafra boyacı olarak mekanınıza benzersiz görünüm kazandırıyoruz.",
      features: ["• Duvar kağıdı", "• Stencil işleri", "• Özel desenler"],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Bafra Boyacı Hizmetleri</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Bafra ev boyama hizmeti, iç cephe boyama Bafra ve dış cephe boyama Bafra için kapsamlı hizmetler sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 service-card relative overflow-hidden group"
            >
              {/* Fırça darbesi SVG - Sol alttan sağ üste */}
              <svg 
                className="absolute inset-0 w-full h-full opacity-25 group-hover:opacity-40 transition-opacity duration-500"
                viewBox="0 0 320 240"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient 
                    id={`paintGradient-${index}`} 
                    x1="0%" y1="100%" x2="100%" y2="0%"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0%" stopColor={
                      index === 0 ? '#3B82F6' :
                      index === 1 ? '#10B981' :
                      '#8B5CF6'
                    } stopOpacity="0.7" />
                    <stop offset="50%" stopColor={
                      index === 0 ? '#1D4ED8' :
                      index === 1 ? '#059669' :
                      '#7C3AED'
                    } stopOpacity="0.5" />
                    <stop offset="100%" stopColor={
                      index === 0 ? '#1E40AF' :
                      index === 1 ? '#047857' :
                      '#6D28D9'
                    } stopOpacity="0.3" />
                  </linearGradient>
                  
                  {/* Fırça dokusu için pattern */}
                  <pattern id={`brushTexture-${index}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <rect width="8" height="8" fill="none"/>
                    <circle cx="2" cy="2" r="0.5" fill="currentColor" opacity="0.3"/>
                    <circle cx="6" cy="6" r="0.3" fill="currentColor" opacity="0.2"/>
                  </pattern>
                </defs>
                
                {/* Ana fırça darbesi yolu */}
                <path
                  d={`M 0,240 
                      Q 50,220 100,200 
                      Q 150,180 200,160 
                      Q 230,140 250,120 
                      Q 270,100 280,80
                      Q 290,60 295,40
                      Q 300,20 305,10
                      L 320,0
                      L 320,15
                      Q 310,25 300,35
                      Q 285,55 275,75
                      Q 260,95 240,115
                      Q 210,145 180,165
                      Q 130,195 80,215
                      Q 40,235 20,240
                      Z`}
                  fill={`url(#paintGradient-${index})`}
                  className="brush-stroke-path"
                />
                
                {/* Fırça dokusu overlay */}
                <path
                  d={`M 0,240 
                      Q 50,220 100,200 
                      Q 150,180 200,160 
                      Q 230,140 250,120 
                      Q 270,100 280,80
                      Q 290,60 295,40
                      Q 300,20 305,10
                      L 320,0
                      L 320,15
                      Q 310,25 300,35
                      Q 285,55 275,75
                      Q 260,95 240,115
                      Q 210,145 180,165
                      Q 130,195 80,215
                      Q 40,235 20,240
                      Z`}
                  fill={`url(#brushTexture-${index})`}
                  opacity="0.6"
                />
                
                {/* Boya damlaları efekti - Daha büyük ve belirgin */}
                <circle cx="80" cy="180" r="6" fill={
                  index === 0 ? '#3B82F6' :
                  index === 1 ? '#10B981' :
                  '#8B5CF6'
                } opacity="0.9" className="animate-pulse"/>
                <circle cx="150" cy="120" r="5" fill={
                  index === 0 ? '#1D4ED8' :
                  index === 1 ? '#059669' :
                  '#7C3AED'
                } opacity="0.85" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                <circle cx="220" cy="80" r="4" fill={
                  index === 0 ? '#1E40AF' :
                  index === 1 ? '#047857' :
                  '#6D28D9'
                } opacity="0.8" className="animate-pulse" style={{animationDelay: '1s'}}/>
                
                {/* Ekstra boya sıçramaları */}
                <circle cx="60" cy="200" r="2" fill={
                  index === 0 ? '#3B82F6' :
                  index === 1 ? '#10B981' :
                  '#8B5CF6'
                } opacity="0.7" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                <circle cx="180" cy="140" r="3" fill={
                  index === 0 ? '#2563EB' :
                  index === 1 ? '#047857' :
                  '#6D28D9'
                } opacity="0.75" className="animate-pulse" style={{animationDelay: '2s'}}/>
                <circle cx="250" cy="60" r="2.5" fill={
                  index === 0 ? '#1E40AF' :
                  index === 1 ? '#065F46' :
                  '#5B21B6'
                } opacity="0.8" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
              </svg>

              {/* Renkli Brush ikonu sağ üst köşe - Responsive */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 z-10">
                {/* Özel renkli fırça SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Fırça sapı */}
                  <rect x="45" y="5" width="10" height="45" fill="#8B4513" rx="5"/>
                  
                  {/* Fırça metal kısmı */}
                  <rect x="42" y="48" width="16" height="10" fill="#C0C0C0" rx="2"/>
                  
                  {/* Soluk renkli fırça kılları - Kart renkleriyle uyumlu */}
                  <rect x="37" y="58" width="4" height="30" fill={
                    index === 0 ? '#93C5FD' :
                    index === 1 ? '#6EE7B7' :
                    '#C4B5FD'
                  } rx="2"/>
                  <rect x="42" y="58" width="4" height="32" fill={
                    index === 0 ? '#BFDBFE' :
                    index === 1 ? '#A7F3D0' :
                    '#DDD6FE'
                  } rx="2"/>
                  <rect x="47" y="58" width="4" height="31" fill={
                    index === 0 ? '#DBEAFE' :
                    index === 1 ? '#D1FAE5' :
                    '#EDE9FE'
                  } rx="2"/>
                  <rect x="52" y="58" width="4" height="33" fill={
                    index === 0 ? '#BFDBFE' :
                    index === 1 ? '#A7F3D0' :
                    '#DDD6FE'
                  } rx="2"/>
                  <rect x="57" y="58" width="4" height="29" fill={
                    index === 0 ? '#93C5FD' :
                    index === 1 ? '#6EE7B7' :
                    '#C4B5FD'
                  } rx="2"/>
                </svg>
                
                {/* Fırçadan damlayan boya - Soluk renk */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-6 opacity-85 animate-pulse`}
                style={{
                  backgroundColor: index === 0 ? '#93C5FD' :
                                 index === 1 ? '#6EE7B7' :
                                 '#C4B5FD',
                  clipPath: 'ellipse(50% 70% at 50% 30%)',
                  animationDelay: '1.5s',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                }}></div>
              </div>

              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 md:mb-6 relative z-10`}>
                <span className={`${service.iconColor} text-lg sm:text-xl md:text-2xl`}>{service.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 md:mb-4 relative z-10">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6 relative z-10 leading-relaxed">
                {service.description}
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="leading-relaxed">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

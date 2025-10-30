'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-lg">🏠</span>
            Bafra Boyacı - Güvenilir Boya Ustası
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Bafra Boya Badana Ustası Hakkında
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bafra bölgesinde 15+ yıllık deneyimimiz ve profesyonel boya ustası Bafra ekibimizle 
            iç cephe boyama Bafra, dış cephe boyama Bafra ve Bafra ev boyama hizmeti sunuyoruz
          </p>
        </div>

        {/* Ana İçerik */}
        <div className="max-w-6xl mx-auto">
          {/* Kenan Topuz Profil Kartı */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100 mb-12 md:mb-16 relative overflow-hidden">
            {/* Dekoratif boya damlaları */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-yellow-400/40 rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-green-400/35 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative z-10">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
                  <span className="text-white text-2xl md:text-3xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-300">KT</span>
                  {/* Küçük fırça ikonu */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">🎨</span>
                  </div>
                </div>
              </div>
              
              {/* İçerik */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Kenan Topuz</h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Usta Boyacı</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Kurucu</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    15+ yıldır Bafra ve çevresinde boyama sektöründe faaliyet gösteren 
                    <strong className="text-gray-900 font-semibold"> Kenan Topuz</strong> ve profesyonel ekibi olarak, 
                    her projede kalite ve müşteri memnuniyetini ön planda tutuyoruz.
                  </p>
                  <p>
                    Deneyimli ekibimizle birlikte iç ve dış mekan boyama, dekoratif boyama, 
                    duvar kağıdı uygulaması ve tadilat hizmetlerinde uzmanlaştık.
                  </p>
                  <p>
                    Kaliteli malzeme kullanımı, titiz işçilik ve zamanında teslim prensiplerimizle 
                    <strong className="text-blue-600 font-semibold"> 500+ projeyi</strong> başarıyla tamamladık.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Özellikler Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Profesyonel Ekip</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deneyimli ve sertifikalı boyacılardan oluşan ekibimiz
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Kalite Garantisi</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kullandığımız malzemeler ve işçiliğimizde kalite garantisi
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Hızlı Hizmet</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Zamanında başlama ve teslim etme konusunda güvenilir hizmet
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Uygun Fiyat</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kaliteli hizmeti en uygun fiyatlarla sunuyoruz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

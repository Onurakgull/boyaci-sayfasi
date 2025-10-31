import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bafra Boyacı Hizmetleri | İç Cephe Boyama Bafra | Dış Cephe Boyama Bafra',
  description: 'Bafra boyacı hizmetleri: İç cephe boyama Bafra, dış cephe boyama Bafra, ev boyama Bafra. Boyacı Bafra ve boya ustası Bafra ile kaliteli hizmet.',
  keywords: 'bafra boyacı hizmetleri, iç cephe boyama bafra, dış cephe boyama bafra, ev boyama bafra, boyacı bafra, boya ustası bafra, bafra boya badana',
  alternates: {
    canonical: 'https://bafraninboyacisi.com.tr/hizmetler',
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: 'İç Cephe Boyama Bafra',
      icon: '🏠',
      description: 'Evinizin iç mekanlarını en kaliteli boyalarla boyuyoruz. İç cephe boyama Bafra hizmetimizde uzman ekibimizle evınızı yeniliyoruz.',
      features: [
        'Kaliteli iç mekan boyaları',
        'Renk danışmanlığı hizmeti',
        'Hızlı ve temiz uygulama',
        '2 yıl garanti'
      ],
      keywords: ['iç cephe boyama bafra', 'ev içi boyama', 'oda boyama'],
      price: 'Ücretsiz keşif ile fiyat alın'
    },
    {
      title: 'Dış Cephe Boyama Bafra',
      icon: '🏢',
      description: 'Binanızın dış cephesini hava koşullarına dayanıklı boyalarla koruyoruz. Dış cephe boyama Bafra\'da en deneyimli ekibiz.',
      features: [
        'Hava dayanıklı dış cephe boyaları',
        'UV korumalı özel boyalar',
        'Yüksekten çalışma sertifikası',
        '5 yıl garanti'
      ],
      keywords: ['dış cephe boyama bafra', 'bina cephesi boyama', 'apartman boyama'],
      price: 'M2 başına uygun fiyat'
    },
    {
      title: 'Ev Boyama Bafra',
      icon: '🎨',
      description: 'Ev boyama Bafra hizmetimizle evinizi baştan sona yeniliyoruz. Boyacı Bafra deneyimimizle kaliteli ve hızlı hizmet.',
      features: [
        'Komple ev boyama hizmeti',
        'Tavan ve duvar boyama',
        'Mobilya maskeleme',
        'Temizlik dahil'
      ],
      keywords: ['ev boyama bafra', 'komple ev boyama', 'evde boyama'],
      price: 'Paket fiyat avantajı'
    },
    {
      title: 'Boya Badana Bafra',
      icon: '🧱',
      description: 'Bafra boya badana hizmetimizle duvarlarınızı temizleyip boyuyoruz. Boya ustası Bafra ekibimizle profesyonel sonuç.',
      features: [
        'Eski boya temizliği',
        'Duvar hazırlık işlemleri',
        'Kaliteli badana malzemesi',
        'Düzgün yüzey garantisi'
      ],
      keywords: ['bafra boya badana', 'duvar badana', 'badana ustası'],
      price: 'Ekonomik fiyat seçenekleri'
    },
    {
      title: 'Apartman Boyama Bafra',
      icon: '🏘️',
      description: 'Apartman boyama Bafra hizmetimizle binanızın ortak alanlarını boyuyoruz. Merdiven, koridor ve ortak alan boyama.',
      features: [
        'Ortak alan boyama',
        'Merdiven boyama',
        'Kapı girişi boyama',
        'Hızlı teslim'
      ],
      keywords: ['apartman boyama bafra', 'ortak alan boyama', 'merdiven boyama'],
      price: 'Apartman özel fiyat'
    },
    {
      title: 'Ofis Boyama Bafra',
      icon: '🏢',
      description: 'Ofis boyama Bafra hizmetimizle iş yerinizi modern görünüme kavuşturuyoruz. İş yerlerine özel boyama çözümleri.',
      features: [
        'İş yeri boyama',
        'Ofis renk seçimi',
        'Hızlı uygulama',
        'Minimum aksama'
      ],
      keywords: ['ofis boyama bafra', 'iş yeri boyama', 'ticari alan boyama'],
      price: 'İş yeri özel fiyat'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bafra Boyacı Hizmetleri 🎨
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bafra'nın 1 numaralı boyacısından profesyonel boyama hizmetleri. 
            Boyacı Bafra ve boya ustası Bafra deneyimimizle kaliteli hizmet garantisi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Özellikler:</h3>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {service.keywords.map((keyword, keyIndex) => (
                    <span 
                      key={keyIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-500 mb-3">{service.price}</p>
                <a 
                  href="tel:+905055209625"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                >
                  📞 Hemen Ara
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bafra Boyacı ile Hemen İletişime Geçin! 🚀
          </h2>
          <p className="text-xl mb-6">
            Ücretsiz keşif ve fiyat teklifi için bugün arayın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905055209625"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 0505 520 9625
            </a>
            <a 
              href="https://wa.me/905055209625"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Hizmet Verdiğimiz Bölgeler
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Bafra Merkez', 'Samsun', 'Terme', 'Vezirköprü', 'Alaçam', 'Asarcık', 'Kavak', 'Ladik'].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow">
                <span className="font-semibold text-gray-900">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Footer */}
        <div className="mt-12 text-center text-gray-600">
          <h3 className="text-xl font-bold mb-4">Bafra Boyacı - Tüm Boyama İhtiyaçlarınız İçin</h3>
          <p className="mb-2">
            <strong>Bafra boyacı</strong> | <strong>Boyacı Bafra</strong> | <strong>Boya ustası Bafra</strong> | <strong>İç cephe boyama Bafra</strong>
          </p>
          <p className="text-sm">
            <strong>Dış cephe boyama Bafra</strong> • <strong>Ev boyama Bafra</strong> • <strong>Bafra boya badana</strong> • <strong>Apartman boyama Bafra</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

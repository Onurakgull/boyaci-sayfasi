import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bafra Boyacı Blog | Boya Ustası Bafra İpuçları ve Bilgiler',
  description: 'Bafra boyacı uzmanından boya ipuçları, renk seçimi, ev boyama rehberi. Boya ustası Bafra deneyimleriyle yazılmış faydalı makaleler.',
  keywords: 'bafra boyacı blog, boya ipuçları, ev boyama rehberi, renk seçimi, boya ustası bafra yazıları',
  alternates: {
    canonical: 'https://bafraninboyacisi.com.tr/blog',
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Bafra Boyacı Seçerken Dikkat Edilmesi Gerekenler',
      excerpt: 'Bafra boyacı ararken nelere dikkat etmelisiniz? Boyacı Bafra seçiminde önemli kriterler.',
      date: '2024-10-30',
      readTime: '5 dk',
      keywords: ['bafra boyacı', 'boyacı seçimi', 'boya ustası']
    },
    {
      title: 'İç Cephe Boyama Bafra: Renk Seçimi Rehberi',
      excerpt: 'İç cephe boyama Bafra işlemlerinde doğru renk nasıl seçilir? Oda özelliklerine göre renk seçimi.',
      date: '2024-10-29',
      readTime: '7 dk',
      keywords: ['iç cephe boyama bafra', 'renk seçimi', 'ev boyama']
    },
    {
      title: 'Dış Cephe Boyama Bafra: Hava Koşullarına Uygun Boyalar',
      excerpt: 'Dış cephe boyama Bafra\'da hangi boyalar kullanılmalı? Karadeniz iklimi için en uygun boya çeşitleri.',
      date: '2024-10-28',
      readTime: '6 dk',
      keywords: ['dış cephe boyama bafra', 'hava dayanıklı boya', 'karadeniz iklimi']
    },
    {
      title: 'Ev Boyama Bafra: Mevsim Planlaması',
      excerpt: 'Ev boyama Bafra işlemleri için en uygun mevsim hangisi? Boyacı Bafra deneyimleri.',
      date: '2024-10-27',
      readTime: '4 dk',
      keywords: ['ev boyama bafra', 'boya mevsimi', 'bafra iklimi']
    },
    {
      title: 'Boya Ustası Bafra Tavsiyeleri: Boya Bakımı',
      excerpt: 'Boya ustası Bafra uzmanından boyalı yüzeylerin bakım ve temizlik ipuçları.',
      date: '2024-10-26',
      readTime: '5 dk',
      keywords: ['boya ustası bafra', 'boya bakımı', 'temizlik ipuçları']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bafra Boyacı Blog 📝
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Boya ustası Bafra deneyimleriyle yazılmış faydalı makaleler. 
            Bafra boyacı uzmanından ipuçları ve rehberler.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.map((keyword, keyIndex) => (
                      <span 
                        key={keyIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                <span>{post.readTime} okuma</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bafra Boyacı Hizmeti Alın 🎨
          </h2>
          <p className="text-xl mb-6">
            Bafra\'nın 1 numaralı boyacısından profesyonel hizmet alın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905055209625"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Hemen Ara: 0505 520 9625
            </a>
            <a 
              href="/#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              💬 Whatsapp Mesaj
            </a>
          </div>
        </div>

        {/* SEO Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-4">
            <strong>Bafra Boyacı</strong> | <strong>Boyacı Bafra</strong> | <strong>Boya Ustası Bafra</strong>
          </p>
          <p className="text-sm">
            İç cephe boyama Bafra • Dış cephe boyama Bafra • Ev boyama Bafra • Bafra boya badana
          </p>
        </div>
      </div>
    </div>
  );
}

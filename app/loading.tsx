export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Animated Paint Brush Loading */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full animate-spin"
            style={{ animationDuration: '2s' }}
          >
            {/* Paint brush handle */}
            <rect x="38" y="60" width="8" height="25" rx="4" fill="#D97706" />
            
            {/* Paint brush ferrule */}
            <rect x="36" y="55" width="12" height="8" rx="2" fill="#9CA3AF" />
            
            {/* Paint brush bristles */}
            <path 
              d="M32 55 Q42 45 52 55 Q42 35 42 20 Q42 35 32 55 Z" 
              fill="#2563EB"
              className="animate-pulse"
            />
            
            {/* Paint drops - animated */}
            <circle cx="55" cy="25" r="3" fill="#60A5FA" className="animate-bounce" />
            <circle cx="65" cy="35" r="2" fill="#93C5FD" className="animate-bounce" style={{animationDelay: '0.2s'}} />
            <circle cx="75" cy="20" r="1.5" fill="#BFDBFE" className="animate-bounce" style={{animationDelay: '0.4s'}} />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Sayfa Yükleniyor...
          </h2>
          <p className="text-gray-600">
            Bafranın Boyacısı hazırlanıyor
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 mx-auto bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

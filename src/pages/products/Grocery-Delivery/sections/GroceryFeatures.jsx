import React from 'react';

const GroceryFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-1V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c1.1 0 2-.9 2-2v-3l-3-5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
        </svg>
      ),
      title: "Lightning Fast Delivery",
      description: "Get your groceries delivered in 30 minutes or less. Our AI-powered route optimization ensures the quickest delivery.",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-100",
      stats: "30 min guarantee",
      highlight: "Fastest in town"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Farm Fresh Guarantee",
      description: "We source directly from local farms within 24 hours of delivery. If not fresh, we replace it for free.",
      color: "from-green-500 to-lime-600",
      bgColor: "bg-green-100",
      stats: "100% fresh",
      highlight: "Farm to table"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
        </svg>
      ),
      title: "Massive Selection",
      description: "Over 15,000 products including organic, gluten-free, international, and specialty items you won't find elsewhere.",
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-100",
      stats: "15k+ products",
      highlight: "Premium brands"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/>
        </svg>
      ),
      title: "Personal Shopping Assistant",
      description: "Get personalized recommendations based on your preferences, past orders, and dietary restrictions.",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-100",
      stats: "AI powered",
      highlight: "Smart picks"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: "Smart Reorder",
      description: "AI learns your shopping habits and creates smart lists. Reorder your weekly groceries with just one tap.",
      color: "from-lime-600 to-green-600",
      bgColor: "bg-lime-100",
      stats: "One-tap order",
      highlight: "Saves time"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: "Premium Safety",
      description: "Contactless delivery, temperature-checked products, and tamper-proof packaging for complete peace of mind.",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-100",
      stats: "Contactless",
      highlight: "Safety first"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z"/>
        </svg>
      ),
      title: "Member Pricing",
      description: "Exclusive discounts for members, early access to deals, and special offers on premium products.",
      color: "from-emerald-600 to-green-600",
      bgColor: "bg-emerald-100",
      stats: "Save up to 40%",
      highlight: "Members only"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0 1.36-1.35 2.04-2.92 2.04-4.9h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/>
        </svg>
      ),
      title: "Flexible Scheduling",
      description: "Choose from 15-minute delivery windows. Schedule up to 2 weeks in advance or get it within the hour.",
      color: "from-teal-600 to-green-600",
      bgColor: "bg-teal-100",
      stats: "15-min slots",
      highlight: "When you want"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden py-20 px-4 lg:px-6">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="premium-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22c55e" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="1" fill="#22c55e"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Premium section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-green-200">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Premium Features
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Smart Shoppers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Choose FreshMart
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience grocery shopping reimagined with cutting-edge technology and farm-fresh quality
          </p>
        </div>

        {/* Premium features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div className="p-6">
                {/* Icon with glow */}
                <div className="relative mb-5">
                  <div className={`absolute inset-0 ${feature.bgColor} rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                  <div className={`relative w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  
                  {/* Premium badge */}
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    {feature.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats with premium styling */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${feature.color} bg-green-100 px-3 py-1 rounded-full`}>
                    {feature.stats}
                  </span>
                  
                  <div className="flex items-center gap-1 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs">Learn more</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className={`absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-tl-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Premium stats bar */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl py-8 px-6 text-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50k+</div>
                <div className="text-green-100 text-sm">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15k+</div>
                <div className="text-green-100 text-sm">Products</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">30min</div>
                <div className="text-green-100 text-sm">Avg Delivery</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
                <div className="text-green-100 text-sm">App Store Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 opacity-40">
          <span className="text-sm font-semibold text-gray-400">ORGANIC CERTIFIED</span>
          <span className="text-sm font-semibold text-gray-400">FARM FRESH</span>
          <span className="text-sm font-semibold text-gray-400">NON-GMO</span>
          <span className="text-sm font-semibold text-gray-400">LOCAL GROWN</span>
          <span className="text-sm font-semibold text-gray-400">SUSTAINABLE</span>
        </div>
      </div>
    </section>
  );
};

export default GroceryFeatures;
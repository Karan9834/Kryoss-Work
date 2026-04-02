import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Lightning Fast Delivery",
      description: "Get your favorite meals delivered in under 30 minutes. Real-time tracking from kitchen to your doorstep.",
      gradient: "from-orange-500 to-red-500",
      topLine: "from-orange-500 via-red-500 to-orange-500",
      shadowIcon: "🚀",
      shadowColor: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Guaranteed",
      description: "Every restaurant is carefully vetted. Hot, fresh, and exactly as you ordered - guaranteed satisfaction.",
      gradient: "from-emerald-500 to-teal-500",
      topLine: "from-emerald-500 via-teal-500 to-emerald-500",
      shadowIcon: "⭐",
      shadowColor: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Wide Restaurant Network",
      description: "Choose from 1000+ local restaurants. From street food to fine dining, we've got you covered.",
      gradient: "from-blue-500 to-cyan-500",
      topLine: "from-blue-500 via-cyan-500 to-blue-500",
      shadowIcon: "🏪",
      shadowColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Best Price Promise",
      description: "Exclusive deals and offers. Get the best value for every meal you order.",
      gradient: "from-purple-500 to-pink-500",
      topLine: "from-purple-500 via-pink-500 to-purple-500",
      shadowIcon: "💰",
      shadowColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "24/7 Customer Support",
      description: "Our support team is always here to help. Any time, any day - we've got your back.",
      gradient: "from-amber-500 to-orange-500",
      topLine: "from-amber-500 via-orange-500 to-amber-500",
      shadowIcon: "💬",
      shadowColor: "from-amber-500/20 to-orange-500/20"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6h18M9 12h6M5 18h14" />
        </svg>
      ),
      title: "Easy Reordering",
      description: "Your favorites, just a tap away. Reorder your previous meals with one click.",
      gradient: "from-rose-500 to-red-500",
      topLine: "from-rose-500 via-red-500 to-rose-500",
      shadowIcon: "🔄",
      shadowColor: "from-rose-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/20 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 blur opacity-30"></div>
              <div className="relative px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200/50">
                <span className="text-sm font-semibold tracking-wider text-orange-600 uppercase">Why Choose Us</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Delivering </span>
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Happiness
            </span>
            <span className="text-gray-900"> Since Day One</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're passionate about bringing the best culinary experiences directly to you. 
            Here's why millions trust us with their meals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.topLine} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Shadow icon on right bottom corner */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${feature.shadowColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 blur-md`}></div>
              <div className="absolute bottom-4 right-4 text-5xl opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110 transform translate-x-2 translate-y-2">
                {feature.shadowIcon}
              </div>
              
              {/* Decorative shine effect on hover */}
              <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-orange-300"></span>
            <span className="text-sm">Trusted by 10,000+ happy customers</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-orange-300"></span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
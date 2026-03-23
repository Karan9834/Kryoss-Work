import React, { useState } from 'react';

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const features = [
    {
      id: 1,
      category: 'management',
      title: 'Smart Booking Engine',
      description: 'Real-time reservations with automated confirmations, calendar sync, and intelligent room allocation. Reduce manual work by 70%.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      stats: '98% accuracy',
    },
    {
      id: 2,
      category: 'management',
      title: 'Room Management',
      description: 'Track room status, maintenance needs, housekeeping schedules, and optimize occupancy rates in real-time.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      stats: '100% visibility',
    },
    {
      id: 3,
      category: 'management',
      title: 'Staff Coordination',
      description: 'Efficiently manage shifts, assign tasks, track performance, and streamline team communication.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      stats: '40% efficiency',
    },
    {
      id: 4,
      category: 'analytics',
      title: 'Revenue Analytics',
      description: 'Real-time insights into occupancy rates, ADR, RevPAR, and revenue trends with predictive analytics.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      stats: '35% revenue',
    },
    {
      id: 5,
      category: 'analytics',
      title: 'Guest Insights',
      description: 'Centralize guest preferences, behavior patterns, and feedback to deliver personalized experiences.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      stats: '95% satisfaction',
    },
    {
      id: 6,
      category: 'integration',
      title: 'Multi-Property Support',
      description: 'Manage multiple hotel locations from a single dashboard with centralized control and reporting.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      stats: 'unlimited',
    },
    {
      id: 7,
      category: 'integration',
      title: 'Channel Manager',
      description: 'Connect with OTAs, payment gateways, and channel managers to centralize all reservations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m3.172-3.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102" />
        </svg>
      ),
      stats: '50+ channels',
    },
    {
      id: 8,
      category: 'analytics',
      title: 'Performance Reports',
      description: 'Customizable reports with key metrics, trends, and actionable insights for better decision making.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      stats: 'real-time',
    },
  ];

  const filteredFeatures = activeTab === 'all' 
    ? features 
    : features.filter(f => f.category === activeTab);

  const handleLearnMore = (featureTitle) => {
    console.log(`Learn more about: ${featureTitle}`);
    // Add your navigation or modal logic here
  };

  const handleTryDemo = (featureTitle) => {
    console.log(`Try demo for: ${featureTitle}`);
    // Add your demo link or modal logic here
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-purple-950 py-20 md:py-28 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          background: "radial-gradient(circle at top, rgba(139, 92, 246, 0.15), transparent)"
        }}></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Powerful{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
              Features
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Everything you need to run a modern hotel operation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
            }`}
          >
            All Features
          </button>
          <button
            onClick={() => setActiveTab('management')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'management'
                ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
            }`}
          >
            Management
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('integration')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'integration'
                ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
            }`}
          >
            Integrations
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
              }}
            >
              {/* Animated Top Travelling Line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              {/* Second Travelling Line (from right) */}
              <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000 ease-in-out delay-200"></div>
              
              {/* Vertical Lines on Hover */}
              <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out"></div>
              <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-violet-500 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 ease-in-out delay-200"></div>
              
              {/* Icon Container */}
              <div className="relative mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-400 transition-all duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="relative text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Stats Badge */}
              <div className="relative inline-block px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-xs font-medium mb-4">
                {feature.stats}
              </div>
              
             
              
              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;
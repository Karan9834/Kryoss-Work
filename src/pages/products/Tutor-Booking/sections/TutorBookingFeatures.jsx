import React from 'react';

const TutorBookingFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/>
        </svg>
      ),
      title: "Expert Tutor Network",
      description: "Access thousands of qualified, background-checked tutors across 100+ subjects, all with proven track records.",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-100",
      stats: "2,500+ Active Tutors"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2h6v2h-6V6zm0 4h6v2h-6v-2zm-6 0h4v2H6v-2zm10 4h-4v-2h4v2zm-10 0h4v2H6v-2z"/>
        </svg>
      ),
      title: "Instant Booking",
      description: "Book sessions in seconds with our smart scheduling system. Find available tutors and confirm instantly.",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-100",
      stats: "< 30 sec booking"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"/>
        </svg>
      ),
      title: "Progress Tracking",
      description: "Monitor learning progress with detailed reports, session notes, and performance analytics.",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-100",
      stats: "Real-time updates"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6h-2v2h-2V6h-2V4h2V2h2v2h2v2zm-10 3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 4c-2.33 0-7 1.17-7 3.5V17h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: "1-on-1 Video Sessions",
      description: "Integrated HD video conferencing with interactive whiteboard, screen sharing, and recording options.",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-100",
      stats: "HD Quality"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2h6v2h-6V6zm0 4h6v2h-6v-2zm-6 0h4v2H6v-2zm10 4h-4v-2h4v2zm-10 0h4v2H6v-2z"/>
        </svg>
      ),
      title: "Smart Matching",
      description: "AI-powered algorithm matches students with the perfect tutor based on learning style, goals, and preferences.",
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-100",
      stats: "95% match rate"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Secure Payments",
      description: "Safe, encrypted payments with multiple options. Pay per session or subscribe for regular lessons.",
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-100",
      stats: "100% secure"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2h6v2h-6V6zm0 4h6v2h-6v-2zm-6 0h4v2H6v-2zm10 4h-4v-2h4v2zm-10 0h4v2H6v-2z"/>
        </svg>
      ),
      title: "Resource Library",
      description: "Access thousands of worksheets, practice tests, and learning materials shared by top tutors.",
      color: "from-cyan-600 to-teal-600",
      bgColor: "bg-cyan-100",
      stats: "10k+ resources"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/>
        </svg>
      ),
      title: "Parent Dashboard",
      description: "Parents can monitor progress, communicate with tutors, and manage bookings from a single dashboard.",
      color: "from-violet-600 to-purple-600",
      bgColor: "bg-violet-100",
      stats: "Real-time updates"
    }
  ];

  const categories = [
    { name: "Mathematics", icon: "📐", count: 850 },
    { name: "Science", icon: "🔬", count: 620 },
    { name: "Languages", icon: "🌍", count: 540 },
    { name: "Test Prep", icon: "📝", count: 420 },
    { name: "Music", icon: "🎵", count: 310 },
    { name: "Computer Science", icon: "💻", count: 280 }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-indigo-50/20 to-white relative overflow-hidden py-20 px-4 lg:px-6">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="features-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#features-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-indigo-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            <span className="text-indigo-700 text-sm font-medium">Platform Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Successful Tutoring
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make tutoring seamless, effective, and enjoyable for everyone.
          </p>
        </div>

        {/* Categories strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white border border-indigo-100 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <span className="text-lg">{cat.icon}</span>
                <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">{cat.count}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Features grid */}
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
                {/* Icon */}
                <div className={`relative mb-4 w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                    {feature.stats}
                  </span>
                  
                  <div className="flex items-center gap-1 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
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
      </div>
    </section>
  );
};

export default TutorBookingFeatures;
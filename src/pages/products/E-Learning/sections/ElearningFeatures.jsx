import React from 'react';

const ElearningFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13v7l5.2 3.1.8-1.2-4.5-2.7V7z"/>
        </svg>
      ),
      title: "Interactive Courses",
      description: "Learn by doing with hands-on projects, quizzes, and coding exercises that reinforce your knowledge.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      stats: "200+ Courses"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience and proven teaching methods.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      stats: "50+ Experts"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2h6v2h-6V6zm0 4h6v2h-6v-2zm-6 0h4v2H6v-2zm10 4h-4v-2h4v2zm-10 0h4v2H6v-2z"/>
        </svg>
      ),
      title: "Certification",
      description: "Earn recognized certificates upon completion to showcase your skills and advance your career.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      stats: "30+ Certifications"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6h-2v2h-2V6h-2V4h2V2h2v2h2v2zm-10 3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 4c-2.33 0-7 1.17-7 3.5V17h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: "Community Support",
      description: "Join a vibrant community of learners, participate in discussions, and get help when you need it.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      stats: "50k+ Members"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13v7l5.2 3.1.8-1.2-4.5-2.7V7z"/>
        </svg>
      ),
      title: "Flexible Learning",
      description: "Learn at your own pace with lifetime access to course materials and mobile-friendly platform.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      stats: "24/7 Access"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"/>
        </svg>
      ),
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics, progress reports, and personalized recommendations.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      stats: "Real-time Analytics"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="#000"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Learning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of learners trust our platform for their professional growth
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Premium border accent */}
              <div className={`absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-gradient-to-b ${feature.color} transition-all duration-500`}></div>
              
              <div className="p-8">
                {/* Icon container */}
                <div className={`relative mb-6 inline-block`}>
                  <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`relative w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats and CTA */}
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                    {feature.stats}
                  </span>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 group/btn">
                    <span className="text-sm">Learn more</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-tl-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom stats banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50k+</div>
              <div className="text-blue-100">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Expert Courses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
              <div className="text-blue-100">Rating (10k+ reviews)</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Certifications</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Explore All Features
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElearningFeatures;
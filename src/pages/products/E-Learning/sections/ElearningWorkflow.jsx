import React from 'react';

const ElearningWorkflow = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Path",
      description: "Browse through 200+ expert-crafted courses and select the learning path that aligns with your career goals.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13v7l5.2 3.1.8-1.2-4.5-2.7V7z"/>
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      features: ["Career-focused paths", "Beginner to advanced", "Skill assessments"]
    },
    {
      number: "02",
      title: "Learn Interactively",
      description: "Engage with hands-on projects, coding exercises, and real-world scenarios that reinforce your learning.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6h-2v2h-2V6h-2V4h2V2h2v2h2v2zm-10 3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 4c-2.33 0-7 1.17-7 3.5V17h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      features: ["Interactive quizzes", "Coding challenges", "Project-based learning"]
    },
    {
      number: "03",
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics, milestone achievements, and personalized feedback.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"/>
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      features: ["Progress dashboard", "Skill analytics", "Achievement badges"]
    },
    {
      number: "04",
      title: "Get Certified",
      description: "Earn industry-recognized certificates and showcase your achievements to employers worldwide.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2h6v2h-6V6zm0 4h6v2h-6v-2zm-6 0h4v2H6v-2zm10 4h-4v-2h4v2zm-10 0h4v2H6v-2z"/>
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      features: ["Verified certificates", "Share on LinkedIn", "Employer recognized"]
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-50 relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0" stroke="#000" strokeWidth="0.5" strokeOpacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            Simple 4-Step Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to mastering new skills in just four simple steps
          </p>
        </div>

        {/* Workflow steps with connecting lines */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step card */}
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 relative z-10">
                  {/* Number badge */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 text-transparent bg-clip-text bg-gradient-to-r ${step.color}">
                    <div className="w-12 h-12">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${step.color}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector arrow (visible on desktop) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 hidden lg:block">
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Simple stats - just numbers without any CTA */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Student Rating</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Guaranteed</div>
          </div>
        </div>

        {/* Simple trust badges - no interaction */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-40">
          <span className="text-xl font-bold text-gray-400">Microsoft</span>
          <span className="text-xl font-bold text-gray-400">Google</span>
          <span className="text-xl font-bold text-gray-400">Amazon</span>
          <span className="text-xl font-bold text-gray-400">Apple</span>
          <span className="text-xl font-bold text-gray-400">Meta</span>
        </div>
      </div>
    </div>
  );
};

export default ElearningWorkflow;
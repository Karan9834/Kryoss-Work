import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Sign Up & Setup',
      description: 'Create your account in minutes and configure your hotel details, room types, and pricing structure. Get started with zero setup fees.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      color: 'from-teal-500 to-cyan-500',
      bgLight: 'from-teal-50 to-cyan-50',
    },
    {
      id: 2,
      number: '02',
      title: 'Connect Channels',
      description: 'Integrate with OTAs, payment gateways, and channel managers to centralize all reservations in one place.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m3.172-3.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      bgLight: 'from-blue-50 to-cyan-50',
    },
    {
      id: 3,
      number: '03',
      title: 'Manage Operations',
      description: 'Handle bookings, room assignments, staff schedules, and guest communications from one intuitive dashboard.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'from-indigo-500 to-blue-500',
      bgLight: 'from-indigo-50 to-blue-50',
    },
    {
      id: 4,
      number: '04',
      title: 'Analyze & Grow',
      description: 'Access real-time analytics, track performance metrics, and make data-driven decisions to maximize revenue.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-emerald-500 to-teal-500',
      bgLight: 'from-emerald-50 to-teal-50',
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      {/* Decorative Dots Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23e5e7eb'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dots)'/%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              It Works
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Simple setup process to get your hotel running in no time
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.bgLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Number Background */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                {step.number}
              </div>
              
              {/* Icon Container with Hover Animation */}
              <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className={`relative text-xl font-bold text-gray-900 mb-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:${step.color} group-hover:text-transparent group-hover:bg-clip-text`}>
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>
              
              {/* Animated Bottom Border */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${step.color} group-hover:w-full transition-all duration-500`} />
              
              {/* Decorative Arrow on Hover */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Line (Desktop Only) */}
        <div className="hidden lg:block relative mt-8 px-8">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="flex justify-between px-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative -top-3">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full">
            <span className="text-teal-600 font-medium">Ready to get started?</span>
            <svg className="w-4 h-4 text-teal-500" style={{ animation: 'bounceX 1s infinite' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Add custom animation */}
      <style>{`
        @keyframes bounceX {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
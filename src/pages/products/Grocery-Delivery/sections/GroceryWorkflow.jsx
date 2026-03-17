import React from 'react';

const GroceryWorkflow = () => {
  const steps = [
    {
      number: "01",
      title: "Browse & Select",
      description: "Explore 15,000+ fresh products. Use smart filters to find exactly what you need by category, diet, or brand.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      color: "from-green-600 to-emerald-600",
      features: ["Smart filters", "Dietary preferences", "Brand search"],
      time: "2 minutes"
    },
    {
      number: "02",
      title: "Add to Cart",
      description: "Build your cart with ease. Save favorites, create shopping lists, and get real-time price updates.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
      color: "from-emerald-600 to-teal-600",
      features: ["Smart lists", "Favorites", "Price alerts"],
      time: "1 minute"
    },
    {
      number: "03",
      title: "Choose Delivery",
      description: "Pick your preferred 15-minute delivery window. Track your order in real-time from store to doorstep.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-1V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c1.1 0 2-.9 2-2v-3l-3-5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
        </svg>
      ),
      color: "from-teal-600 to-cyan-600",
      features: ["Live tracking", "15-min slots", "SMS updates"],
      time: "30 seconds"
    },
    {
      number: "04",
      title: "Enjoy Fresh",
      description: "Receive your order with our contactless delivery. Rate products and earn rewards for every purchase.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "from-green-600 to-lime-600",
      features: ["Contactless", "Reward points", "Rate products"],
      time: "Immediate"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50/30 relative overflow-hidden py-20 px-4 lg:px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Timeline pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="workflow-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="30" x2="60" y2="30" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="5,5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#workflow-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-green-200">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0 1.36-1.35 2.04-2.92 2.04-4.9h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12z"/>
            </svg>
            Simple 4-Step Process
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Store to Doorstep
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              in Minutes
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your fresh groceries has never been easier. Follow these simple steps and we'll handle the rest.
          </p>
        </div>

        {/* Workflow steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-green-200 via-emerald-200 to-green-200 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step card */}
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 relative z-10 border border-gray-100">
                  {/* Number with icon */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-green-600 shadow">
                        {step.number}
                      </span>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-4">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${step.color}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Time indicator */}
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                    </svg>
                    <span className="text-xs text-gray-400">Takes {step.time}</span>
                  </div>
                </div>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-20 hidden lg:block">
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-green-100">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition-all">
            <div className="text-2xl font-bold text-green-600 mb-1">15k+</div>
            <div className="text-xs text-gray-500">Daily Orders</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition-all">
            <div className="text-2xl font-bold text-green-600 mb-1">30min</div>
            <div className="text-xs text-gray-500">Avg Delivery</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition-all">
            <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
            <div className="text-xs text-gray-500">On-Time Rate</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition-all">
            <div className="text-2xl font-bold text-green-600 mb-1">4.9</div>
            <div className="text-xs text-gray-500">Customer Rating</div>
          </div>
        </div>

        {/* Live demo preview */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-1V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c1.1 0 2-.9 2-2v-3l-3-5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Track Your Order Live</h3>
                <p className="text-green-100 text-sm">See exactly where your groceries are in real-time</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
                ))}
              </div>
              <span className="text-sm text-green-100">127 orders on the way</span>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-green-600">50,000+ families</span> trust us for their weekly groceries
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroceryWorkflow;
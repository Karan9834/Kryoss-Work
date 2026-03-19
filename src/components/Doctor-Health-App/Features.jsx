import React from 'react'

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Instant Appointments",
      description: "Book appointments with specialists in real-time, no waiting lists or complicated forms.",
      color: "emerald",
      lineColor: "bg-emerald-500",
      borderColor: "group-hover:border-emerald-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Video Consultations",
      description: "Face-to-face consultations from the comfort of your home with HD video quality.",
      color: "amber",
      lineColor: "bg-amber-500",
      borderColor: "group-hover:border-amber-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Digital Prescriptions",
      description: "Receive e-prescriptions instantly after consultation, sent directly to your phone.",
      color: "emerald",
      lineColor: "bg-emerald-500",
      borderColor: "group-hover:border-emerald-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Health Records",
      description: "Secure storage for your medical history, reports, and documents all in one place.",
      color: "amber",
      lineColor: "bg-amber-500",
      borderColor: "group-hover:border-amber-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Availability",
      description: "Round-the-clock access to medical professionals for emergencies and consultations.",
      color: "emerald",
      lineColor: "bg-emerald-500",
      borderColor: "group-hover:border-emerald-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Secure & Private",
      description: "Your health data is encrypted and protected with enterprise-grade security.",
      color: "amber",
      lineColor: "bg-amber-500",
      borderColor: "group-hover:border-amber-500"
    }
  ]

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L30 55 M5 30 L55 30' stroke='%2310B981' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-emerald-200"></div>
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <div className="w-8 h-px bg-amber-200"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          
          <p className="text-lg text-gray-600">
            We've designed the perfect healthcare experience with features that put you first. 
            From instant appointments to secure health records.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Colored line that appears on hover - different color for each card */}
              <div className={`absolute top-0 left-0 w-full h-1 ${feature.lineColor} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out`}></div>
              
              {/* Second line from bottom on hover */}
              <div className={`absolute bottom-0 right-0 w-full h-1 ${feature.lineColor} transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out delay-100`}></div>
              
              {/* Icon with pop and tilt effect on hover */}
              <div className={`inline-flex p-4 rounded-xl bg-${feature.color}-50 text-${feature.color}-600 mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:-translate-y-1 transition-all duration-300 ease-out`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Small colored dot indicators */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${feature.lineColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`absolute bottom-4 left-4 w-2 h-2 rounded-full ${feature.lineColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150`}></div>
            </div>
          ))}
        </div>

        {/* Simple stats bar */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600">50k+</div>
              <div className="text-sm text-gray-500 mt-1">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">500+</div>
              <div className="text-sm text-gray-500 mt-1">Specialists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">100k+</div>
              <div className="text-sm text-gray-500 mt-1">Consultations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">4.9</div>
              <div className="text-sm text-gray-500 mt-1">User Rating</div>
            </div>
          </div>
        </div>

        {/* Simple trust message */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            Trusted by thousands of patients across the country
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
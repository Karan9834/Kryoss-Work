import React from 'react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Verified Specialists",
      description: "Every doctor on our platform undergoes rigorous credential verification. We ensure you're consulting with qualified, experienced professionals.",
      stats: "500+ Verified Doctors",
      color: "emerald"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Availability",
      description: "Healthcare doesn't follow a 9-to-5 schedule. Neither do we. Access medical consultation anytime, day or night, including holidays.",
      stats: "Always Open",
      color: "amber"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Affordable Care",
      description: "Quality healthcare shouldn't break the bank. Our transparent pricing and multiple consultation options fit every budget.",
      stats: "30-50% Lower Costs",
      color: "emerald"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Privacy First",
      description: "Your health data is sacred. We use bank-level encryption and strictly adhere to medical data privacy regulations.",
      stats: "HIPAA Compliant",
      color: "amber"
    }
  ]

  const benefits = [
    {
      number: "10min",
      label: "Average wait time",
      description: "No more sitting in waiting rooms"
    },
    {
      number: "98%",
      label: "Patient satisfaction",
      description: "Based on 10,000+ reviews"
    },
    {
      number: "50+",
      label: "Specialties covered",
      description: "From cardiology to dermatology"
    },
    {
      number: "4.9★",
      label: "App store rating",
      description: "Top-rated health app"
    }
  ]

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10B981 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-emerald-300"></div>
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
              Why Thousands Trust Us
            </span>
            <div className="w-8 h-px bg-amber-300"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Vyom Health
            </span>
          </h2>
          
          <p className="text-lg text-gray-600">
            We're redefining healthcare with a patient-first approach, combining medical expertise with cutting-edge technology.
          </p>
        </div>

        {/* Main reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Hover background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${reason.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-${reason.color}-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon and stat row */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-${reason.color}-50 text-${reason.color}-600 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                    {reason.icon}
                  </div>
                  <span className={`text-sm font-semibold text-${reason.color}-600 bg-${reason.color}-50 px-4 py-2 rounded-full`}>
                    {reason.stats}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative corner dot */}
                <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full bg-${reason.color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Key metrics/benefits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {benefit.number}
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-1">{benefit.label}</div>
              <div className="text-xs text-gray-400">{benefit.description}</div>
            </div>
          ))}
        </div>

        {/* Bottom trust indicators - simplified */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
          <span>🔒 HIPAA Compliant</span>
          <span>🏥 500+ Hospitals</span>
          <span>💳 Secure Payments</span>
          <span>📱 24/7 Support</span>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
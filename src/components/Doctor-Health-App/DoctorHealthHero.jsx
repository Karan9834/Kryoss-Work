import React from 'react'
import hero from "../../assets/Doctor-Health-App/doctorhealthhero.png"

const DoctorHealthHero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 overflow-hidden">
      {/* Subtle medical pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L30 55 M5 30 L55 30' stroke='%2334D399' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 min-h-[600px] md:min-h-[550px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Premium logo with glow */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  Vyom
                </span>
                <span className="text-xl md:text-2xl font-light text-emerald-300">Health</span>
              </div>
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>

            {/* Premium heading with gradient accent */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              <span className="block text-white">Your Health,</span>
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>

            {/* Description - light gray for readability */}
            <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 max-w-lg">
              Connect with trusted doctors, book appointments instantly, and manage your family's health journey all in one secure platform.
            </p>

            {/* Premium button with glow effect */}
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg text-base sm:text-lg shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:-translate-y-0.5 transition-all duration-200 overflow-hidden" onClick={() => document.getElementById('explore-health')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Trust indicators - light colored for dark bg */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 md:mt-10">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm text-gray-300">500+ Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm text-gray-300">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm text-gray-300">Secure Booking</span>
              </div>
            </div>
          </div>

          {/* Right Image - Simple with subtle glow */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-emerald-500 rounded-full filter blur-3xl opacity-20"></div>
              <img 
                src={hero}
                alt="Doctor consultation"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorHealthHero
import React from "react";

const TutorBookingHero = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://demo.creativeitem.com/index.php?product=tutor-booking",
    );
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#0B1120] to-[#1A1F35] relative overflow-hidden py-16 px-4 lg:px-6">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur border border-white/10 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-indigo-300 text-sm font-medium">✨ Smart Tutor Booking Platform</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Find & Book the Perfect Tutor
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mt-2">
                in Just a Few Clicks
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg max-w-lg">
              Connect students with expert tutors, schedule sessions instantly,
              and manage learning seamlessly with our modern tutor booking solution.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleLiveDemo}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300"
            >
              View Live Demo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Features row */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
                <span className="text-gray-300">Instant Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
                <span className="text-gray-300">Verified Tutors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
                <span className="text-gray-300">Flexible Scheduling</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-2 border-[#1A1F35]"></div>
                ))}
                <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-[#1A1F35] flex items-center justify-center text-xs text-white">10k+</div>
              </div>
              <span className="text-gray-400 text-sm">Trusted by 50,000+ students</span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-center">
            {/* Main image with glow effect */}
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
              <img
                src="https://img.freepik.com/free-vector/online-education-concept_23-2148525673.jpg"
                alt="Tutor Booking"
                className="relative rounded-2xl shadow-2xl max-h-[400px] w-auto object-cover border border-white/10"
              />
              
              {/* Floating booking card */}
              <div className="absolute -bottom-4 -left-4 bg-[#1A1F35] backdrop-blur rounded-xl shadow-2xl p-4 w-56 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Book Session</p>
                    <p className="text-xs text-gray-400">Math • John Doe</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
                  Confirm Booking
                </button>
              </div>

              {/* Floating rating card */}
              <div className="absolute top-4 -right-4 bg-[#1A1F35] backdrop-blur rounded-xl shadow-2xl px-4 py-2 border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white">4.8</span>
                  <span className="text-xs text-gray-400">(2.5k)</span>
                </div>
              </div>

              {/* Floating time badge */}
              <div className="absolute top-20 left-4 bg-[#1A1F35]/90 backdrop-blur rounded-lg shadow-xl px-3 py-1.5 border border-white/10">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-300">Available today</span>
                </div>
              </div>

              {/* Live demo indicator */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-2 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default TutorBookingHero;
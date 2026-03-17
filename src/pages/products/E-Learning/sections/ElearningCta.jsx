import React from 'react';

const ElearningCta = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements - subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main heading - medium size */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your Learning Journey
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Starts Here
          </span>
        </h2>

        {/* Description - medium */}
        <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-8">
          Join over 50,000+ students already learning on our platform.
        </p>

        {/* Stats grid - compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">50k+</div>
            <div className="text-xs text-white/40">Active Students</div>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">200+</div>
            <div className="text-xs text-white/40">Expert Courses</div>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">4.9</div>
            <div className="text-xs text-white/40">Avg Rating</div>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">30+</div>
            <div className="text-xs text-white/40">Certifications</div>
          </div>
        </div>

        {/* Trust badges - compact */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {/* Student avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white/20"></div>
              ))}
              <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white text-xs">5k+</div>
            </div>
            <span className="text-white/60 text-xs">Trusted worldwide</span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z"/>
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-xs">4.9 from 10k+ reviews</span>
          </div>

          {/* Money-back guarantee */}
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-4 py-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-white/80 text-xs">30-day guarantee</span>
          </div>
        </div>

        {/* Featured on - compact */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-white/40 text-xs mb-4">As featured in</p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-40">
            <span className="text-base font-bold text-white">TechCrunch</span>
            <span className="text-base font-bold text-white">Forbes</span>
            <span className="text-base font-bold text-white">Wired</span>
            <span className="text-base font-bold text-white">EdTech</span>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-6 text-white/20 text-xs">
          <p>© 2025 E-Learning Platform</p>
        </div>
      </div>
    </div>
  );
};

export default ElearningCta;
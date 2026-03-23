import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950bg-emerald-400 / bg-green-500 from-emerald-300 to-green-40 from-emerald-500 to-green-600 hover:shadow-emerald-500/30">
      {/* Background decorative elements - subtle and modern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main container with medium height */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px] md:min-h-[550px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-12 md:py-16">
          
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Streamline Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400">
                Hotel Management
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Powerful, intuitive dashboard to manage bookings, staff, rooms, and guest experiences — all in one place.
            </p>

            {/* Only the Explore Products button - no badges */}
            <div className="pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-teal-500/30 hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                Explore Products
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Main image - Hotel management dashboard mockup */}
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Hotel management dashboard preview"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-auto border border-white/10"
              />
              
              {/* Optional: Small overlay to blend with theme */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Optional: Subtle wave separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto opacity-10">
          <path fill="white" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
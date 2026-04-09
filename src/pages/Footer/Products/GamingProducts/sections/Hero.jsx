import React from 'react';
import hero from "../../../../../assets/Application-Solutions/hero.png";

const Hero = ({
  title = "Gaming",
  highlight = "Products",
  description = "Transform your business with cutting-edge application solutions. We deliver scalable, secure, and innovative software tailored to your needs.",
  badge = "🎮 Interactive Entertainment",
  bgGradient = "bg-gradient-to-br from-slate-900 via-red-900 to-slate-900",
  highlightGradient = "bg-gradient-to-r from-cyan-400 to-blue-500",
  badgeColor = "text-cyan-400",
  buttonColor = "bg-gradient-to-r from-red-500 to-orange-600",
  glowColor = "bg-red-500/20",
  particleColor1 = "bg-cyan-400",
  particleColor2 = "bg-blue-400"
}) => {
  return (
    <section className={`relative ${bgGradient} overflow-hidden py-20 md:py-28`}>

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Slanting diagonal lines */}
      <div
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L60 60 M60 0 L0 60' stroke='%23ffffff' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* TOP WAVE (very subtle) */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-[40px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C321.39,50.47,258.71,66.66,183.44,85.59,135.05,108.87,59.71,118.11,0,95.8V0H1200V95.8C1146.53,108.87,1070.05,101.29,985.66,92.83Z"
            fill="white"
            fillOpacity="0.04"
          />
        </svg>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* LEFT */}
          <div className="max-w-xl text-center md:text-left">

            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className={`text-xs font-normal ${badgeColor} tracking-wide`}>
                {badge}
              </span>
            </div>

            {/* Heading H1 - Mobile: 30px, Desktop: 48px, Weight: 700 */}
            <h1 className="text-[1.875rem] md:text-[3rem] font-bold text-white leading-tight">
              {title}{" "}
              <span className={`block bg-clip-text text-transparent ${highlightGradient}`}>
                {highlight}
              </span>
            </h1>

            {/* Description - Size: 16px, Weight: 400 */}
            <p className="mt-5 text-base font-normal text-gray-300 leading-relaxed">
              {description}
            </p>

            {/* CTA Buttons - Size: 16px, Weight: 600 */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <button className={`px-6 py-3 ${buttonColor} text-white rounded-full font-semibold text-base shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105`}>
                Get Started →
              </button>

              <button className="px-6 py-3 border border-white/20 text-white rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>

            </div>

            {/* Stats Section */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">

                {/* Stat 1 */}
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-white">5000+</div>
                  <div className="text-xs font-normal text-gray-400 mt-1">Projects Delivered</div>
                </div>

                {/* Stat 2 */}
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-white">98%</div>
                  <div className="text-xs font-normal text-gray-400 mt-1">Client Satisfaction</div>
                </div>

                {/* Stat 3 */}
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-white">24/7</div>
                  <div className="text-xs font-normal text-gray-400 mt-1">Support Available</div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT - Image */}
          <div className="relative flex justify-center md:justify-end">

            {/* Glow effect */}
            <div className={`absolute w-[280px] h-[280px] ${glowColor} rounded-full blur-3xl`}></div>

            {/* Decorative circles */}
            <div className={`absolute -top-6 -right-6 w-24 h-24 ${glowColor} rounded-full blur-xl`}></div>
            <div className={`absolute -bottom-6 -left-6 w-32 h-32 ${glowColor} rounded-full blur-xl`}></div>

            <img
              src={hero}
              alt="Application Solutions Illustration"
              className="relative w-full max-w-sm md:max-w-md rounded-xl border border-white/10 shadow-xl backdrop-blur-sm"
            />

          </div>

        </div>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,135.05,108.87,183.44,85.59,223.46,66.66,258.71,50.47,321.39,56.44Z"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-1.5 h-1.5 ${particleColor1} rounded-full animate-float opacity-60`}></div>
        <div className={`absolute top-3/4 right-1/4 w-2 h-2 ${particleColor2} rounded-full animate-float-delay opacity-60`}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-float-slow opacity-40"></div>
        <div className={`absolute top-1/2 right-1/3 w-1.5 h-1.5 ${particleColor1} rounded-full animate-float opacity-50`}></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes floatDelay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: floatDelay 7s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
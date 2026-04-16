import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../../../../../assets/Enterprise-Product/crmhero.jpg';

const Hero = ({
  title = "Enterprise",
  highlight = "Products",
  description = "Transform your business with cutting-edge application solutions. We deliver scalable, secure, and innovative software tailored to your needs.",
  badge = "🏢 Corporate Solutions",
  bgGradient = "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
  highlightGradient = "bg-gradient-to-r from-blue-400 to-indigo-500",
  badgeColor = "text-blue-400",
  buttonColor = "bg-gradient-to-r from-blue-500 to-indigo-600",
  glowColor = "bg-blue-500/20",
  particleColor1 = "bg-blue-400",
  particleColor2 = "bg-indigo-400"
}) => {
  const navigate = useNavigate();

  return (
    <section className={`relative ${bgGradient} overflow-hidden py-20 md:py-28`}>

      {/* Modern grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 40px)`,
        }}
      />

      {/* Gradient orbs */}
      <div className={`absolute top-20 left-10 w-64 h-64 ${glowColor} rounded-full blur-3xl`}></div>
      <div className={`absolute bottom-20 right-10 w-80 h-80 ${glowColor} rounded-full blur-3xl`}></div>

      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-[30px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* Modern badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className={`text-xs font-semibold ${badgeColor}`}>
                {badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[1.875rem] md:text-[3rem] font-bold text-white leading-tight">
              {title}{" "}
              <span className={`bg-clip-text text-transparent ${highlightGradient}`}>
                {highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base text-gray-300 leading-relaxed">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button onClick={() => navigate('/company/contact')} className={`group px-6 py-3 ${buttonColor} text-white rounded-full font-semibold text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2`}>
                <span>Get Started</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Stats with modern design */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-xs text-gray-400 mt-1">Projects</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-xs text-gray-400 mt-1">Satisfaction</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-gray-400 mt-1">Support</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2"></div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - Image without glow effect */}
          <div className="relative flex justify-center md:justify-end">

            {/* Decorative rings only - NO GLOW EFFECT */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-cyan-400/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-blue-400/30 rounded-full"></div>

            {/* Image container - removed glow effects */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
              <img
                src={hero}
                alt="Application Solutions"
                className="relative w-full max-w-sm md:max-w-md transform transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>

        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-[30px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-1.5 h-1.5 ${particleColor1} rounded-full animate-float opacity-60`}></div>
        <div className={`absolute top-3/4 right-1/4 w-2 h-2 ${particleColor2} rounded-full animate-float-delay opacity-60`}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-float-slow opacity-40"></div>
        <div className={`absolute top-1/2 right-1/3 w-1.5 h-1.5 ${particleColor1} rounded-full animate-float opacity-50`}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-float opacity-30"></div>
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
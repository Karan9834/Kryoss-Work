import React from "react";
import { ArrowRight } from "lucide-react";
import heroimg from "../../assets/HMS-Hotel/hero.avif";
const HotelHero = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-[#F97316]">

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/90 via-[#F97316]/80 to-[#F97316]/70 z-0"></div>

      {/* Teal Wave Cut Section */}
      <div className="absolute inset-0 z-0">
        {/* Teal Background Section */}
        <div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-[#0D9488] to-[#14b8a6]"></div>

        {/* Main Wave Divider - Premium Organic Shape */}
        <div className="absolute bottom-[45%] left-0 w-full z-10">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#0D9488"
              fillOpacity="1"
              d="M0,192L60,186.7C120,181,240,171,360,170.7C480,171,600,181,720,197.3C840,213,960,235,1080,234.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>

        {/* Secondary Wave for Depth */}
        <div className="absolute bottom-[43%] left-0 w-full z-5 opacity-50">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#0D9488"
              fillOpacity="0.6"
              d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,197.3C840,213,960,235,1080,234.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-5"></div>

      {/* Soft Radial Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0D9488]/20 rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center z-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-5">
            {/* Premium Divider Line */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-white/50"></div>
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
                Luxury Hospitality
              </span>
            </div>

            {/* H1 - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Smart Hospitality
              <span className="block relative">
                <span className="relative inline-block bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-shine">
                  Management
                </span>
              </span>
            </h1>

            {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
            <p className="text-[16px] md:text-[18px] font-normal leading-[1.6] text-white/80 max-w-lg">
              Elevate your hotel operations with intelligent booking systems,
              personalized guest experiences, and seamless management tools
              designed for modern hospitality.
            </p>

            {/* Premium CTA Button - Updated typography */}
            <div className="pt-3">
              <button className="group relative px-7 py-3.5 bg-white text-[#F97316] rounded-xl font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 text-[14px] md:text-[15px] tracking-[0.01em]" onClick={() => document.getElementById('explore-hotel-solutions')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="relative z-10 flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE - Premium Glass Card */}
          <div className="relative flex justify-center items-center">
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-[#0D9488]/20 rounded-full blur-2xl"></div>

            {/* Premium Image Container */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/30 to-[#0D9488]/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-xl">
                <img
                  src={heroimg}
                  alt="Luxury Hotel Suite"
                  className="w-full h-[300px] rounded-xl shadow-xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* Premium Overlay Gradient */}
                <div className="absolute inset-2 rounded-xl bg-gradient-to-tr from-[#F97316]/20 via-transparent to-[#0D9488]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Premium Icon */}
            <div className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/30 animate-float">
              <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="rgba(13,148,136,0.3)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
};

export default HotelHero;
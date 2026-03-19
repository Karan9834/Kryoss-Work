import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../assets/saloonlanding-img/saloonlandinghero.webp';




const SalonHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#FFF8F5] overflow-hidden flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFE4D6] rounded-full blur-[120px] -mr-64 -mt-64 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFEBDD] rounded-full blur-[100px] -ml-32 -mb-32 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full pt-20">

        {/* Left Content */}
        <div className="text-left space-y-8 animate-fadeInLeft">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#FFE4D6]">
            <span className="w-2 h-2 rounded-full bg-[#FF4D29] animate-pulse"></span>
            <span className="text-[#FF4D29] text-xs font-bold uppercase tracking-widest">Salon Excellence</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-semibold text-[#1A1C2C] leading-[1.2]">
            Your Trusted <span className="text-[#FF4D29]">Salon App</span> Development Company
          </h1>



          <p className="text-[#4A4B5E] text-lg lg:text-xl max-w-xl leading-relaxed">
            Experience the future of beauty commerce with our advanced salon app solutions,
            offering seamless online bookings, appointment management, and revenue optimization.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-4 bg-gradient-to-r from-[#FF4D29] to-[#E63E1C] text-white font-bold rounded-full shadow-xl shadow-[#FF4D29]/25 hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
              Get A Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Content - Single Image Placeholder */}
        <div className="relative flex justify-center items-center  animate-fadeInRight">

          <img
            src={heroImg}
            alt="Salon App Hero"
            className="w-[450px] h-[450px] object-contain"
          />

        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float 4s ease-in-out 2s infinite; }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default SalonHero;

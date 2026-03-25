import React from "react";
import { ArrowRight, Settings } from "lucide-react";
import heroImg from "@/assets/travelagency-img/travelagencyhero.jpg";

const AgencyManagementHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[#1A1404]">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-amber-600/20 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">Agency Management Solution</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
              Powerful <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
                Back-Office ERP
              </span> <br />
              for Tour Operators
            </h1>

            <p className="text-gray-400 text-lg lg:text-xl max-w-xl leading-relaxed">
              Streamline your agency operations, manage vendors, automate commissions, and scale your business with data-driven insights.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://preview.codecanyon.net/item/wootour-woocommerce-travel-tour-and-appointment-booking/full_screen_preview/19404740"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-2xl shadow-amber-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                Live Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right — image placeholder */}
          <div className="relative animate-fadeInRight lg:pr-10">
            <div className="relative group">
              <div className="absolute -inset-10 bg-gradient-to-tr from-amber-600/30 to-orange-400/20 rounded-[60px] blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
              <div className="relative z-10 w-full max-w-[500px] mx-auto aspect-video bg-white/5 rounded-[40px] border-8 border-white/10 shadow-2xl overflow-hidden transition-all duration-700 group-hover:scale-[1.02] flex items-center justify-center">
                <img src={heroImg} alt="Agency ERP Hero" className="w-full h-full object-cover" />
                {/* Live badge */}
                <div className="absolute bottom-6 right-6 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></div>
                  <span className="text-[10px] text-white font-bold uppercase tracking-wider">Cloud ERP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft { 0% { opacity:0; transform:translateX(-40px); } 100% { opacity:1; transform:translateX(0); } }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes fadeInRight { 0% { opacity:0; transform:translateX(40px); } 100% { opacity:1; transform:translateX(0); } }
        .animate-fadeInRight { animation: fadeInRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
      `}</style>
    </section>
  );
};

export default AgencyManagementHero;

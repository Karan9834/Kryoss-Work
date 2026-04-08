import React from "react";
import { Cpu, Users, Rocket, ArrowRight } from "lucide-react";
import img from "../../assets/Home/about.png";

const WorkApproach = () => {
  return (
    <section className="w-full py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-orange-50/80 via-orange-50/30 to-white">

      {/* 🔝 Curved Wave at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="url(#wave-gradient-top)" 
            fillOpacity="0.35" 
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,202.7C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <defs>
            <linearGradient id="wave-gradient-top" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* subtle glow - enhanced orange */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-orange-400/25 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-amber-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-300/10 blur-[100px] rounded-full"></div>

      {/* 🔻 Straight Line at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500"></div>

      {/* MAIN GRID (SWAPPED HERE) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">

        {/* LEFT CONTENT (will appear RIGHT on lg) */}
        <div>

          {/* badge - matching About section */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-orange-600 text-xs font-semibold uppercase tracking-widest">
              OUR APPROACH
            </span>
          </div>

          {/* heading - matching About section */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Why <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Kryoss Work</span>{" "}
            Builds Better Digital Products
          </h2>

          {/* underline - matching About section */}
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-6 mb-6"></div>

          {/* paragraph - matching About section */}
          <p className="text-gray-600 leading-relaxed max-w-xl text-base font-normal">
            We deliver high-quality, intelligent digital solutions with a strong focus on speed,
            scalability, and real business impact. Our modern development approach ensures
            cost-effective and future-ready products.
          </p>

          {/* FEATURES LIST */}
          <div className="mt-10 space-y-8">

            <div className="flex gap-5 items-start group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 shrink-0 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg">
                <Cpu size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  AI-Driven Project Intelligence
                </h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed font-normal">
                  Gain real-time visibility into every stage of your project through smart analytics 
                  and AI-driven tracking. This enables faster decision-making and optimized execution.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 shrink-0 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg">
                <Users size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  Dedicated Experts Team
                </h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed font-normal">
                  Our experienced team adapts quickly to your requirements, ensuring flexibility, 
                  transparency, and alignment with your business goals.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 shrink-0 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg">
                <Rocket size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  Predictive & Fast Delivery
                </h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed font-normal">
                  With smart planning and scalable architecture, we ensure on-time delivery 
                  while maintaining high performance and long-term reliability.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE (will appear LEFT on lg) */}
        <div className="relative">

          {/* Decorative wave element around image */}
          <div className="absolute -top-6 -right-6 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,50 Q30,30 50,50 T90,50" stroke="#F97316" strokeWidth="2" fill="none"/>
              <path d="M10,60 Q30,40 50,60 T90,60" stroke="#F59E0B" strokeWidth="2" fill="none"/>
              <path d="M10,70 Q30,50 50,70 T90,70" stroke="#F97316" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={img}
              alt="Kryoss Work"
              className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl opacity-20"></div>
          </div>

          {/* TEXT BELOW IMAGE */}
          <p className="mt-6 text-gray-600 text-base leading-relaxed font-normal">
            We specialize in building ready-to-deploy digital products including learning platforms,
            eCommerce systems, logistics solutions, and enterprise applications — all powered by
            modern technologies and scalable systems.
          </p>

          {/* CTA Button */}
          <button 
            className="mt-6 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group"
          >
            Request a Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>

        </div>
      </div>

      {/* Decorative floating waves */}
      <div className="absolute left-10 top-1/3 w-20 h-20 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="#F97316" strokeWidth="3" fill="none"/>
        </svg>
      </div>
      
      <div className="absolute right-10 bottom-1/4 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="#F59E0B" strokeWidth="3" fill="none"/>
          <path d="M0,60 Q25,40 50,60 T100,60" stroke="#F97316" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </section>
  );
};

export default WorkApproach;
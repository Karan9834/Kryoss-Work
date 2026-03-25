import React from "react";
import { Globe, Star, Users, Zap } from "lucide-react";
import aboutImg from "@/assets/travelbooking-img/travelbookingabout.jpg";

const TourBookingAbout = () => {
  const highlights = [
    { icon: Globe, label: "120+ Countries", color: "text-sky-500", bg: "bg-sky-50" },
    { icon: Users, label: "50k+ Travelers", color: "text-teal-500", bg: "bg-teal-50" },
    { icon: Star, label: "4.9/5 Rating", color: "text-amber-500", bg: "bg-amber-50" },
    { icon: Zap, label: "Real-Time Sync", color: "text-indigo-500", bg: "bg-indigo-50" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl opacity-70 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Image placeholder */}
          <div className="relative group animate-fadeInLeft order-2 lg:order-1">
            <div className="absolute -inset-8 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-[50px] blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-700 pointer-events-none"></div>
            <div className="relative z-10 rounded-[40px] border-4 border-white shadow-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-sky-100 via-cyan-50 to-teal-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
              <img src={aboutImg} alt="About Tour Booking" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Content — accent quote + grid highlights */}
          <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
            <div>
              <span className="text-amber-500 font-bold text-sm uppercase tracking-[0.3em] block mb-3">The Technology Behind</span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B] leading-tight mb-4">
                One Platform for Every<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Travel Experience</span>
              </h2>
            </div>

            {/* Accent quote block — different from simple checklist */}
            <blockquote className="border-l-4 border-sky-400 pl-6 py-2 bg-sky-50 rounded-r-2xl">
              <p className="text-sky-800 text-base leading-relaxed font-medium italic">
                "We bring flights, hotels, tour packages, and travel agents onto a single, unified booking experience — so travelers book with confidence and operators earn more."
              </p>
            </blockquote>

            <p className="text-gray-500 text-base leading-relaxed">
              Our OTA platform integrates with leading GDS systems, hotel APIs, and payment gateways to deliver real-time inventory and seamless checkout across web and mobile.
            </p>

            {/* Stats mini-grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className={`flex items-center gap-3 p-4 ${h.bg} rounded-2xl border border-white shadow-sm hover:shadow-md transition-all`}>
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <h.icon size={20} className={h.color} />
                  </div>
                  <span className="text-[#1E293B] font-bold text-sm">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft { 0%{opacity:0;transform:translateX(-40px)} 100%{opacity:1;transform:translateX(0)} }
        .animate-fadeInLeft{animation:fadeInLeft 0.8s ease-out forwards}
        @keyframes fadeInRight { 0%{opacity:0;transform:translateX(40px)} 100%{opacity:1;transform:translateX(0)} }
        .animate-fadeInRight{animation:fadeInRight 0.8s ease-out forwards}
      `}</style>
    </section>
  );
};

export default TourBookingAbout;

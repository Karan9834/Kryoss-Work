import React from "react";
import { Search, Map, CreditCard, Bell, Smartphone, BarChart3, Globe, Star } from "lucide-react";

const features = [
  { icon: Search, title: "Smart Search & Filters", desc: "Real-time inventory search across flights, hotels, and packages with 30+ filter parameters.", color: "text-sky-600", bg: "bg-sky-50", accent: "border-sky-200" },
  { icon: Map, title: "Destination Map Explorer", desc: "Visual geo-map for discovering destinations, attractions, and accommodation zones.", color: "text-teal-600", bg: "bg-teal-50", accent: "border-teal-200" },
  { icon: CreditCard, title: "Multi-Currency Payments", desc: "50+ currencies supported with EMI options, wallet top-up, and fraud detection.", color: "text-amber-600", bg: "bg-amber-50", accent: "border-amber-200" },
  { icon: Bell, title: "Smart Alerts & Reminders", desc: "Push notifications for price drops, check-in reminders, and exclusive travel deals.", color: "text-indigo-600", bg: "bg-indigo-50", accent: "border-indigo-200" },
  { icon: Smartphone, title: "iOS & Android Apps", desc: "Native apps with offline mode, biometric login, and cross-device sync.", color: "text-rose-600", bg: "bg-rose-50", accent: "border-rose-200" },
  { icon: BarChart3, title: "Booking Analytics", desc: "Channel performance, revenue funnels, and traveler behavior insights in real-time.", color: "text-purple-600", bg: "bg-purple-50", accent: "border-purple-200" },
  { icon: Globe, title: "Multi-Language Support", desc: "Auto-detect language switching across 30+ languages with full RTL layout support.", color: "text-cyan-600", bg: "bg-cyan-50", accent: "border-cyan-200" },
  { icon: Star, title: "Verified Reviews System", desc: "Star ratings, verified photo reviews, and trust scores that drive repeat bookings.", color: "text-orange-600", bg: "bg-orange-50", accent: "border-orange-200" },
];

const TourBookingFeatures = () => {
  return (
    <section className="py-24 bg-[#F8FAFF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#0EA5E9 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-sky-400"></div>
            <span className="text-sky-600 font-bold text-sm uppercase tracking-widest">Platform Features</span>
            <div className="w-8 h-px bg-sky-400"></div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B]">
            Everything Travelers <span className="text-sky-600">Love</span>, Everything Operators <span className="text-amber-500">Need</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">
            A complete suite of tools to manage, grow, and delight on every booking touchpoint.
          </p>
        </div>

        {/* 2-col table-like feature rows — alternating accent side */}
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((f, idx) => (
            <div key={idx} className={`group flex items-start gap-5 p-5 bg-white rounded-3xl border ${f.accent} shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}>
              <div className={`w-12 h-12 shrink-0 rounded-2xl ${f.bg} flex items-center justify-center ${f.color} group-hover:scale-110 transition-transform duration-300 border border-white shadow-sm`}>
                <f.icon size={22} />
              </div>
              <div className="pt-0.5">
                <h3 className={`text-sm font-bold text-[#1E293B] mb-1 group-hover:${f.color} transition-colors uppercase tracking-tight`}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourBookingFeatures;

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../../assets/saloonlanding-img/saloonlandingabout.png';




const SalonAbout = () => {
  const highlights = [
    { text: "Smart Appointment Scheduling", color: "bg-rose-50", iconColor: "text-rose-500", hoverBg: "hover:bg-rose-100" },
    { text: "Real-time Inventory Tracking", color: "bg-blue-50", iconColor: "text-blue-500", hoverBg: "hover:bg-blue-100" },
    { text: "Customer Loyalty Programs", color: "bg-purple-50", iconColor: "text-purple-500", hoverBg: "hover:bg-purple-100" },
    { text: "Staff Performance Analytics", color: "bg-amber-50", iconColor: "text-amber-500", hoverBg: "hover:bg-amber-100" },
    { text: "Seamless Online Payments", color: "bg-emerald-50", iconColor: "text-emerald-500", hoverBg: "hover:bg-emerald-100" },
    { text: "Multi-location Management", color: "bg-indigo-50", iconColor: "text-indigo-500", hoverBg: "hover:bg-indigo-100" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-100/40 blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <img
              src={aboutImg}

              alt="About Salon Vision"
              className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"

            />
            {/* Background Blob */}
            {/* <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-100 rounded-full blur-2xl -z-10 opacity-60"></div> */}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 animate-fadeInRight">
            <div className="space-y-4">
              <span className="text-rose-600 font-bold text-sm uppercase tracking-[0.3em]">About </span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#1A1C2C] leading-tight">
                Revolutionizing the <span className="bg-gradient-to-r from-purple-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">Beauty Industry</span> Through Tech
              </h2>


              <p className="text-[#4A4B5E] text-lg leading-relaxed">
                We provide a holistic digital ecosystem for salon owners to streamline their operations,
                enhance customer satisfaction, and scale their business with data-driven insights.
                Our platform is designed to be as intuitive for your staff as it is delightful for your clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 ${item.color} rounded-2xl ${item.hoverBg} transition-colors group cursor-default border border-transparent hover:border-white shadow-sm`}>
                  <CheckCircle2 size={20} className={`${item.iconColor} group-hover:scale-110 transition-transform`} />
                  <span className="text-[#1A1C2C] font-semibold text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="px-8 py-3 rounded-full border-2 border-rose-100 text-rose-600 font-bold hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                Read Full Story
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .animate-fadeInRight {
          animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default SalonAbout;

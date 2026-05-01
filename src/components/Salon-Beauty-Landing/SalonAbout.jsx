import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../../assets/saloonlanding-img/saloonlandingabout.jpg';

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

          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-orange-100/40 blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <img
              src={aboutImg}
              alt="About Salon Vision"
              className="w-full h-full rounded-3xl shadow-xl object-contain group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          {/* Right Side - Content - Updated Typography */}
          <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
            <div className="space-y-4">
              {/* Badge - Updated: text-[14px] font-bold tracking-[0.3em] uppercase */}
              <span className="text-rose-600 text-[14px] font-bold tracking-[0.3em] uppercase">About</span>

              {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
              <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
                Revolutionizing the <span className="bg-gradient-to-r from-purple-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">Beauty Industry</span> Through Tech
              </h2>

              {/* Description Text - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-[#4A4B5E]">
                We provide a holistic digital ecosystem for salon owners to streamline their operations,
                enhance customer satisfaction, and scale their business with data-driven insights.
                Our platform is designed to be as intuitive for your staff as it is delightful for your clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 ${item.color} rounded-2xl ${item.hoverBg} transition-colors group cursor-default border border-transparent hover:border-white shadow-sm`}>
                  <CheckCircle2 size={20} className={`${item.iconColor} group-hover:scale-110 transition-transform`} />
                  {/* Highlight text - Updated: text-[14px] md:text-[16px] font-semibold */}
                  <span className="text-[#1A1C2C] font-semibold text-[14px] md:text-[16px]">{item.text}</span>
                </div>
              ))}
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
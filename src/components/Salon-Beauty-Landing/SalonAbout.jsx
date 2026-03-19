import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../../assets/saloonlanding-img/saloonlandingabout.png';




const SalonAbout = () => {
  const highlights = [
    "Smart Appointment Scheduling",
    "Real-time Inventory Tracking",
    "Customer Loyalty Programs",
    "Staff Performance Analytics",
    "Seamless Online Payments",
    "Multi-location Management"
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
              <span className="text-[#FF4D29] font-bold text-sm uppercase tracking-[0.3em]">About Our Vision</span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#1A1C2C] leading-tight">
                Revolutionizing the <span className="text-[#FF4D29]">Beauty Industry</span> Through Tech
              </h2>


              <p className="text-[#4A4B5E] text-lg leading-relaxed">
                We provide a holistic digital ecosystem for salon owners to streamline their operations,
                enhance customer satisfaction, and scale their business with data-driven insights.
                Our platform is designed to be as intuitive for your staff as it is delightful for your clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-[#FFF8F5] rounded-2xl hover:bg-[#FFE4D6] transition-colors group cursor-default">
                  <CheckCircle2 size={20} className="text-[#FF4D29] group-hover:scale-110 transition-transform" />
                  <span className="text-[#1A1C2C] font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="px-8 py-3 rounded-full border-2 border-[#FFE4D6] text-[#FF4D29] font-bold hover:bg-[#FF4D29] hover:text-white transition-all duration-300">
                Read Full Story
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
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

import React from "react";
import {
  Award,
  Clock,
  Users,
  Shield,
  Headphones,
  Rocket,
  Truck,
  Globe
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award size={22} />,
      title: "Industry Expertise",
      desc: "5+ years specializing in wholesale food distribution and logistics.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-gray-100",
      hoverBorder: "hover:border-amber-200"
    },
    {
      icon: <Clock size={22} />,
      title: "Fast Delivery",
      desc: "Optimized routes ensuring same-day and next-day delivery options.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-gray-100",
      hoverBorder: "hover:border-blue-200"
    },
    {
      icon: <Truck size={22} />,
      title: "Supply Chain",
      desc: "End-to-end visibility from supplier to customer doorstep.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-gray-100",
      hoverBorder: "hover:border-emerald-200"
    },
    {
      icon: <Shield size={22} />,
      title: "Quality Assurance",
      desc: "Strict quality checks and temperature-controlled logistics.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-gray-100",
      hoverBorder: "hover:border-green-200"
    },
    {
      icon: <Headphones size={22} />,
      title: "24/7 Support",
      desc: "Dedicated support team available round the clock.",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-gray-100",
      hoverBorder: "hover:border-red-200"
    },
    {
      icon: <Rocket size={22} />,
      title: "Scalable Platform",
      desc: "Grow from small business to enterprise without changing systems.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-gray-100",
      hoverBorder: "hover:border-indigo-200"
    }
  ];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16,185,129,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-5 border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-emerald-700">Why Choose Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Built for Wholesale Excellence
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We combine technology, logistics expertise, and reliability to deliver the best wholesale solution.
          </p>
        </div>

        {/* CARDS - 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-white border ${item.borderColor} p-6 shadow-sm transition-all duration-300 ${item.hoverBorder} hover:shadow-md`}
            >
              {/* ICON - No hover scaling */}
              <div className={`w-12 h-12 mb-5 rounded-xl flex items-center justify-center ${item.bgColor} ${item.iconColor}`}>
                {item.icon}
              </div>

              {/* TITLE - No color change on hover */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESC - No color change */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* TRUST SECTION - No hover effects */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Shield size={18} className="text-emerald-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Food Safety</div>
                <div className="font-semibold text-gray-900">ISO Certified</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users size={18} className="text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Trusted By</div>
                <div className="font-semibold text-gray-900">500+ Businesses</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Truck size={18} className="text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Daily Deliveries</div>
                <div className="font-semibold text-gray-900">50,000+</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Globe size={18} className="text-orange-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Coverage</div>
                <div className="font-semibold text-gray-900">50+ Cities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
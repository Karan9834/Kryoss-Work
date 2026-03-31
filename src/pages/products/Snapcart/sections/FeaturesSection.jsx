import React from "react";
import {
  Zap,
  Shield,
  BarChart3,
  ShoppingCart,
  Smartphone,
  Settings,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap size={20} />,
      title: "Lightning Fast Performance",
      desc: "Optimized for speed with seamless user experience.",
    },
    {
      icon: <Shield size={20} />,
      title: "Secure & Reliable",
      desc: "Advanced security to protect your business and users.",
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Advanced Analytics",
      desc: "Real-time insights to grow your business smarter.",
    },
    {
      icon: <ShoppingCart size={20} />,
      title: "Smart Order Management",
      desc: "Automate and track orders efficiently.",
    },
    {
      icon: <Smartphone size={20} />,
      title: "Mobile First Design",
      desc: "Optimized for all devices and mobile users.",
    },
    {
      icon: <Settings size={20} />,
      title: "Easy Customization",
      desc: "Flexible system tailored to your needs.",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0f172a] overflow-hidden">
      
      {/* 🔥 Subtle Background Glow */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-yellow-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-5 border border-orange-500/20">
            Features
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Scale Faster
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            Powerful tools designed to simplify operations and boost your growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-orange-500/20 to-yellow-500/20 hover:from-orange-500/40 hover:to-yellow-500/40 transition"
            >
              
              {/* Card */}
              <div className="h-full bg-[#111827] rounded-2xl p-6 border border-white/5 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                
                {/* Icon */}
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-16 text-center text-sm text-gray-500">
          Built for performance • Designed for scale • Loved by developers
        </div>
      </div>
    </section>
  );
};

export default Features;
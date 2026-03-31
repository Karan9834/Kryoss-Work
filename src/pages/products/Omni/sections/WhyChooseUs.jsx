import React from "react";
import {
  Award,
  Clock,
  Users,
  Shield,
  Headphones,
  Rocket,
  TrendingUp,
  Zap,
  Star,
  Globe,
  CreditCard
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award size={22} />,
      title: "Industry Expertise",
      desc: "5+ years of e-commerce experience helping 1000+ businesses succeed.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
      hoverBorder: "hover:border-orange-300",
      hoverBg: "hover:bg-orange-50/80"
    },
    {
      icon: <Zap size={22} />,
      title: "Lightning Fast",
      desc: "Optimized performance with 99.9% uptime and sub-second load times.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
      hoverBorder: "hover:border-orange-300",
      hoverBg: "hover:bg-orange-50/80"
    },
    {
      icon: <Users size={22} />,
      title: "Expert Support",
      desc: "24/7 dedicated support team with average 2-minute response time.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
      hoverBorder: "hover:border-orange-300",
      hoverBg: "hover:bg-orange-50/80"
    },
    {
      icon: <Shield size={22} />,
      title: "Secure Platform",
      desc: "PCI compliant with SSL encryption and advanced fraud protection.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
      hoverBorder: "hover:border-orange-300",
      hoverBg: "hover:bg-orange-50/80"
    },
    {
      icon: <CreditCard size={22} />,
      title: "Multiple Payments",
      desc: "Support for 50+ payment gateways and digital wallets worldwide.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
      hoverBorder: "hover:border-orange-300",
      hoverBg: "hover:bg-orange-50/80"
    },
    {
      icon: <Rocket size={22} />,
      title: "Scalable Solution",
      desc: "Grow from startup to enterprise without changing platforms.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
      hoverBorder: "hover:border-orange-300",
      hoverBg: "hover:bg-orange-50/80"
    }
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-orange-50/30 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(249,115,22,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-semibold text-orange-700">Why Choose Snapcart</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            The Smart Choice for
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              {" "}E-commerce Success
            </span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Join thousands of successful merchants who trust Snapcart to power their online business.
          </p>
        </div>

        {/* CARDS - Premium Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl bg-white border-2 ${item.borderColor} p-6 shadow-md transition-all duration-300 ${item.hoverBg} ${item.hoverBorder} hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Icon with Gradient Background */}
              <div className={`w-14 h-14 mb-5 rounded-xl flex items-center justify-center ${item.bgColor} ${item.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 transition-all duration-300 group-hover:text-orange-600">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <div className="mt-16 pt-8 border-t-2 border-orange-100">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition">
                <Star size={18} className="text-orange-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Customer Rating</div>
                <div className="font-semibold text-gray-900">4.9/5 (500+ reviews)</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition">
                <Users size={18} className="text-orange-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Active Stores</div>
                <div className="font-semibold text-gray-900">1,000+ Businesses</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition">
                <Globe size={18} className="text-orange-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Global Reach</div>
                <div className="font-semibold text-gray-900">50+ Countries</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition">
                <Clock size={18} className="text-orange-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Support Response</div>
                <div className="font-semibold text-gray-900">&lt; 2 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
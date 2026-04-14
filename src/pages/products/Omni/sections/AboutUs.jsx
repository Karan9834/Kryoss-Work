import React from "react";
import { ShoppingBag, Truck, Shield, Star, Zap, Clock, Users, Globe } from "lucide-react";
import omniabout from "../../../../assets/Omnicart/omnicartabout.png"
const AboutUs = () => {
  const stats = [
    { value: "1000+", label: "Active Stores", icon: <ShoppingBag size={18} /> },
    { value: "50k+", label: "Daily Orders", icon: <Zap size={18} /> },
    { value: "99.9%", label: "Uptime", icon: <Shield size={18} /> },
    { value: "24/7", label: "Support", icon: <Clock size={18} /> },
  ];

  const features = [
    {
      icon: <Truck size={16} />,
      title: "Fast Delivery",
      desc: "Lightning-fast shipping with real-time tracking"
    },
    {
      icon: <Shield size={16} />,
      title: "Secure Payments",
      desc: "PCI compliant with multiple payment gateways"
    },
    {
      icon: <Star size={16} />,
      title: "High Conversions",
      desc: "Optimized checkout for maximum sales"
    },
    {
      icon: <Users size={16} />,
      title: "Customer Support",
      desc: "Dedicated support for your business"
    }
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">

      {/* Background Pattern - Yellow/Orange Dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(249,115,22,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - IMAGE SECTION */}
          <div className="relative order-2 lg:order-1">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl filter blur-2xl opacity-20"></div>

            {/* Main Image Card */}
            <div className="relative bg-white rounded-2xl border border-orange-100 p-2 shadow-xl">
              <img
                src={omniabout}
                alt="Ecommerce Dashboard"
                className="rounded-xl w-full h-auto shadow-lg"
              />

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-yellow-500 shadow-xl rounded-xl p-3 border border-white/20">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">5+</p>
                  <p className="text-xs text-white/90">Years of Excellence</p>
                </div>
              </div>

              {/* Floating Rating Badge */}
              <div className="absolute -top-4 -left-4 bg-white shadow-lg rounded-xl p-2 border border-orange-100">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <span className="text-xs font-semibold text-gray-900">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - CONTENT SECTION */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-5 border border-orange-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-semibold text-orange-700">About Snapcart</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powering E-commerce
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                {" "}Success Stories
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              Snapcart is a cutting-edge e-commerce platform designed to help businesses launch and scale their online stores with ease. Our mobile-first approach ensures your customers get the best shopping experience across all devices.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2019, we've helped over 1,000 businesses transform their online presence, processing millions of orders with 99.9% uptime and unmatched reliability.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section - Below both columns */}
        <div className="mt-12 pt-6 border-t-2 border-orange-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-12 h-12 mx-auto mb-2 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-all duration-300 group-hover:scale-110">
                  <div className="text-orange-600">{stat.icon}</div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
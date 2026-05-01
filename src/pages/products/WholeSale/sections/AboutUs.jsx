import React from "react";
import { Truck, Shield, Clock, TrendingUp, Package, Users, Globe, Headphones } from "lucide-react";
import about from "../../../../assets/Wholesale/2.png"
const AboutUs = () => {

  const features = [
    {
      icon: <Package size={18} />,
      title: "Inventory Management",
      desc: "Real-time stock tracking and automated reordering"
    },
    {
      icon: <Truck size={18} />,
      title: "Logistics Optimization",
      desc: "Smart routing and delivery schedule management"
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Analytics Dashboard",
      desc: "Data-driven insights for better decision making"
    },
    {
      icon: <Globe size={18} />,
      title: "Multi-warehouse",
      desc: "Manage multiple locations from single platform"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-emerald-50/30 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16,185,129,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - IMAGE SECTION */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl filter blur-2xl opacity-20"></div>
            
            {/* Main Image Card */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-3 shadow-2xl">
              <img 
                src={about}
                alt="Wholesale Food Distribution"
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
          
          {/* RIGHT - CONTENT SECTION */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-emerald-700">About Us</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Revolutionizing 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {" "}Wholesale Food Distribution
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a leading wholesale food distribution platform dedicated to transforming 
              the way businesses manage their supply chain. Our mission is to make food distribution 
              more efficient, transparent, and sustainable.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded in 2019, we've grown to serve over 500 businesses across the country, 
              processing thousands of orders daily. Our technology-first approach helps reduce 
              food waste, optimize logistics, and maximize profits for our partners.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
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
      </div>
    </section>
  );
};

export default AboutUs;
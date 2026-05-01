import React from "react";
import { 
  Package, 
  Truck, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart3, 
  Bell,
  Warehouse,
  RefreshCw,
  Globe,
  Headphones
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Package size={24} />,
      title: "Inventory Management",
      desc: "Real-time stock tracking, automated reordering, and multi-warehouse support.",
      color: "from-emerald-500 to-teal-500",
      iconBg: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500"
    },
    {
      icon: <Truck size={24} />,
      title: "Logistics Optimization",
      desc: "Smart routing, delivery scheduling, and real-time driver tracking.",
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: <Shield size={24} />,
      title: "Quality Control",
      desc: "Ensure food safety with batch tracking and expiration management.",
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Analytics Dashboard",
      desc: "Data-driven insights for sales forecasting and inventory optimization.",
      color: "from-orange-500 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500"
    },
    {
      icon: <Warehouse size={24} />,
      title: "Multi-Warehouse",
      desc: "Manage multiple locations, transfers, and stock levels from one platform.",
      color: "from-indigo-500 to-blue-500",
      iconBg: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-500"
    },
    {
      icon: <Users size={24} />,
      title: "Supplier Network",
      desc: "Connect with verified suppliers and manage purchase orders seamlessly.",
      color: "from-rose-500 to-pink-500",
      iconBg: "bg-gradient-to-br from-rose-500/20 to-pink-500/20",
      iconColor: "text-rose-500"
    },
    {
      icon: <Bell size={24} />,
      title: "Smart Alerts",
      desc: "Real-time notifications for low stock, expiring products, and deliveries.",
      color: "from-yellow-500 to-amber-500",
      iconBg: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-500"
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Automated Reordering",
      desc: "Set reorder points and automate purchase orders to prevent stockouts.",
      color: "from-cyan-500 to-blue-500",
      iconBg: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-5 animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-white/90">Powerful Features</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {" "}Scale Your Wholesale Business
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive features designed to streamline your wholesale food distribution operations.
          </p>
        </div>
        
        {/* Features Grid - 4 columns on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border ${feature.color.replace('from-', 'border-').replace(' to-', '/30 border-')}`}
                style={{ borderWidth: "1px" }}
              ></div>
              
              {/* Icon */}
              <div className={`w-12 h-12 mb-5 rounded-xl flex items-center justify-center ${feature.iconBg} ${feature.iconColor} transition-all duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.desc}
              </p>
              
              {/* Subtle Learn More Link */}
              <div className="mt-4 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className={`${feature.iconColor}`}>
                  Learn More
                </span>
                <svg className={`w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 ${feature.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-6 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center gap-2 group mx-auto">
            Explore All Features
            <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
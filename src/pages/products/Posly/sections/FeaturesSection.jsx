import React from "react";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Package, 
  ShoppingCart,
  BarChart3,
  Truck,
  Users,
  Database,
  Bell,
  Download,
  Cloud,
  Lock,
  RefreshCw,
  Settings
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Real-time Inventory",
      desc: "Track stock levels instantly with zero lag updates across all channels.",
      color: "from-yellow-500 to-orange-500",
      iconBg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-500"
    },
    {
      icon: <Shield size={24} />,
      title: "Secure System",
      desc: "Bank-grade encryption and security protocols to protect your data.",
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Smart Analytics",
      desc: "AI-powered insights and predictive analytics to boost sales.",
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "POS Integration",
      desc: "Seamless integration with all major POS systems and payment gateways.",
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    },
    {
      icon: <Truck size={24} />,
      title: "Supply Chain",
      desc: "End-to-end supply chain management from supplier to customer.",
      color: "from-indigo-500 to-blue-500",
      iconBg: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-500"
    },
    {
      icon: <Users size={24} />,
      title: "Multi-user Access",
      desc: "Role-based access control for teams of any size.",
      color: "from-red-500 to-rose-500",
      iconBg: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
      iconColor: "text-red-500"
    },
    {
      icon: <Database size={24} />,
      title: "Cloud Backup",
      desc: "Automatic cloud backups with 99.9% uptime guarantee.",
      color: "from-teal-500 to-green-500",
      iconBg: "bg-gradient-to-br from-teal-500/20 to-green-500/20",
      iconColor: "text-teal-500"
    },
    {
      icon: <Bell size={24} />,
      title: "Smart Alerts",
      desc: "Real-time notifications for low stock, expiring items, and more.",
      color: "from-orange-500 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Very Subtle Glowing Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-white/80">Powerful Features</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Scale Your Business
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful inventory management features designed to help you streamline operations and boost efficiency.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              {/* Subtle Hover Border */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border ${feature.color.replace('from-', 'border-').replace(' to-', '/30 border-')}`}
                style={{ borderWidth: "1px" }}
              ></div>
              
              {/* Icon - Now with subtle background instead of glowing */}
              <div className={`w-12 h-12 mb-5 rounded-xl flex items-center justify-center ${feature.iconBg} ${feature.iconColor} transition-all duration-300 group-hover:scale-105`}>
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
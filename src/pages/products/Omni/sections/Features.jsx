import React from "react";
import { 
  ShoppingCart, 
  Truck, 
  Shield, 
  TrendingUp, 
  Zap, 
  Users, 
  BarChart3, 
  Smartphone,
  CreditCard,
  Globe,
  Headphones
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Smartphone size={22} />,
      title: "Mobile-First Design",
      desc: "Optimized for mobile devices with responsive layouts that convert.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <ShoppingCart size={22} />,
      title: "Smart Cart",
      desc: "Abandoned cart recovery and intelligent product recommendations.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <Truck size={22} />,
      title: "Real-time Tracking",
      desc: "Live order tracking with delivery status updates for customers.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <CreditCard size={22} />,
      title: "Multiple Payments",
      desc: "Support for cards, digital wallets, and local payment methods.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <Shield size={22} />,
      title: "Secure Platform",
      desc: "PCI compliant with SSL encryption and fraud protection.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Analytics Dashboard",
      desc: "Real-time insights on sales, traffic, and customer behavior.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <Zap size={22} />,
      title: "Fast Performance",
      desc: "Lightning-fast loading times for better user experience.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <Users size={22} />,
      title: "Multi-Vendor",
      desc: "Support for multiple sellers and commission management.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#FFF7ED" fillOpacity="0.8" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,176C672,171,768,181,864,197.3C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(249,115,22,0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Subtle Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-5 border border-orange-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-semibold text-orange-700">Powerful Features</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Everything You Need to
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              {" "}Sell Online
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Powerful e-commerce features designed to help you build, manage, and scale your online store.
          </p>
        </div>
        
        {/* Features Grid - 4 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl bg-white border border-gray-100 p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-orange-200"
            >
              {/* Icon */}
              <div className={`w-11 h-11 mb-4 rounded-xl flex items-center justify-center ${feature.iconBg} ${feature.iconColor} transition-all duration-300 group-hover:scale-105`}>
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#FFF7ED" fillOpacity="0.8" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Features;
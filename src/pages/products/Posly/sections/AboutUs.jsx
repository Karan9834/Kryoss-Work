import React from "react";
import { 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Clock, 
  Zap, 
  BarChart3,
  Package,
  ShoppingCart
} from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Zap size={20} />,
      title: "Lightning Fast",
      desc: "Real-time inventory updates with zero lag"
    },
    {
      icon: <Shield size={20} />,
      title: "Secure & Safe",
      desc: "Bank-grade encryption for your data"
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Smart Analytics",
      desc: "AI-powered insights to boost sales"
    },
    {
      icon: <Clock size={20} />,
      title: "24/7 Support",
      desc: "Round-the-clock customer assistance"
    }
  ];

  const stats = [
    { value: "500+", label: "Businesses" },
    { value: "50k+", label: "Daily Orders" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - IMAGE SECTION */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl filter blur-2xl opacity-20"></div>
            
            {/* Main Image Card */}
            <div className="relative bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-sm rounded-2xl border border-gray-200 p-3 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=500&fit=crop"
                alt="POSly Inventory Management Dashboard"
                className="rounded-xl w-full h-auto shadow-lg object-cover"
              />
              
              {/* Floating Badge 1 - Top Right */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-xl flex items-center gap-2">
                <Package size={16} />
                <span>Real-time Tracking</span>
              </div>
              
              {/* Floating Badge 2 - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white shadow-xl rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <ShoppingCart size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Daily Orders</p>
                    <p className="text-xl font-bold text-gray-900">50,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT - CONTENT SECTION */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-blue-700">About POSly</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Revolutionizing Inventory
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Management
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              POSly is a cutting-edge inventory management system designed to help businesses 
              track stock, manage orders, and boost sales with real-time insights. Our platform 
              combines powerful analytics with an intuitive interface to streamline your operations.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded with a mission to simplify inventory management, POSly has helped 500+ 
              businesses reduce stockouts by 80% and increase operational efficiency by 3x.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
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
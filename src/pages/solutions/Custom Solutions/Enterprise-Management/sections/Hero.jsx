import React from 'react';
import { ArrowRight, CheckCircle, Database, Shield, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  const handleExploreProduct = () => {
    window.open("https://your-demo-link.com", "_blank");
  };

  return (
    <section className="relative w-full py-16 md:py-20 flex items-center overflow-hidden">
      {/* Light Violet Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100"></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v25L30 55L5 45V20L30 5z' fill='none' stroke='%238b5cf6' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Glow Effects - Smaller */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-violet-500/30 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/20 blur-[90px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge - Smaller */}
          <div className="inline-flex items-center gap-2 bg-violet-500/20 backdrop-blur-sm border border-violet-500/30 text-violet-200 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold">
            <Zap size={12} />
            <span>Enterprise Resource Planning</span>
          </div>

          {/* Heading - Smaller */}
          <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
            <span className="text-white text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">Streamline Your</span>
            <br />
            <span className="leading-[1.2] bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
              Business Operations
            </span>
          </h1>

          {/* Description - Smaller */}
          <p className="mt-4 text-gray-200 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            All-in-one ERP solutions to manage finance, inventory, HR, and customer relationships. 
            Boost efficiency and scale your business with our integrated platform.
          </p>

          {/* Stats - Smaller */}
          <div className="mt-6 flex gap-6">
            <div>
              <p className="text-violet-300 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">500+</p>
              <p className="text-gray-300 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">Businesses</p>
            </div>
            <div>
              <p className="text-violet-300 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">99.9%</p>
              <p className="text-gray-300 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">Uptime</p>
            </div>
            <div>
              <p className="text-violet-300 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">24/7</p>
              <p className="text-gray-300 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">Support</p>
            </div>
          </div>

          {/* Buttons - Smaller */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleExploreProduct}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg shadow-lg shadow-violet-600/30 hover:scale-105 hover:shadow-xl transition-all duration-300 text-[16px] font-semibold tracking-[0.01em] normal-case"
            >
              Explore Product <ArrowRight size={16} />
            </button>
          </div>

          {/* Features List - Smaller */}
          <div className="mt-6 flex flex-wrap gap-4 text-gray-300 text-[11px]">
            <div className="flex items-center gap-1">
              <Database size={11} className="text-violet-400" />
              <span>Inventory Management</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield size={11} className="text-violet-400" />
              <span>Secure Finance</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp size={11} className="text-violet-400" />
              <span>Analytics Dashboard</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE - Smaller */}
        <div className="relative flex justify-center">
          {/* Glow behind image - Smaller */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/30 to-purple-500/30 blur-2xl rounded-full"></div>
          
          {/* Decorative circles - Smaller */}
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-violet-500/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-purple-500/30 rounded-full blur-xl"></div>
          
          {/* Decorative corner elements - Smaller */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-l-3 border-t-3 border-violet-400 rounded-tl-xl"></div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-3 border-b-3 border-purple-400 rounded-br-xl"></div>

          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
            alt="ERP Solutions Dashboard"
            className="relative w-full max-w-md rounded-xl shadow-2xl border border-violet-500/30 hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
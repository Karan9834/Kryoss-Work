import React from 'react';
import { ArrowRight, Star, Utensils, Clock, Users, Shield } from 'lucide-react';
import hero from "../../../../../assets/Resturant management/1,..jpg"

const Hero = () => {
  return (
    <section className="relative w-full py-16 md:py-20 flex items-center overflow-hidden">
      {/* Dark Background with Orange & Cream accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#0a0a0a]"></div>
      
      {/* Subtle Cream Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v25L30 55L5 45V20L30 5z' fill='none' stroke='%23f5e6d3' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Orange Glow Effects - Smaller */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-500/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-amber-600/15 blur-[90px] rounded-full"></div>
        <div className="absolute top-1/2 left-0 w-[200px] h-[200px] bg-orange-400/10 blur-[70px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold">
            <Utensils size={12} />
            <span>Restaurant Management Solution</span>
          </div>

          {/* Heading - Smaller */}
          <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
            <span className="text-white text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">Streamline Your</span>
            <br />
            <span className="leading-[1.2] bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
              Restaurant Operations
            </span>
          </h1>

          {/* Description - Smaller */}
          <p className="mt-4 text-gray-400 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            All-in-one platform to manage orders, inventory, staff, and customers. 
            Boost efficiency and increase revenue with our smart restaurant solution.
          </p>

          {/* Stats - Smaller */}
          <div className="mt-6 flex gap-6">
            <div>
              <p className="text-orange-400 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">500+</p>
              <p className="text-gray-500 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">Restaurants</p>
            </div>
            <div>
              <p className="text-orange-400 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">99.9%</p>
              <p className="text-gray-500 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">Uptime</p>
            </div>
            <div>
              <p className="text-orange-400 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">24/7</p>
              <p className="text-gray-500 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">Support</p>
            </div>
          </div>

          {/* Buttons - Smaller */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg shadow-lg shadow-orange-500/30 hover:scale-105 hover:shadow-xl transition-all duration-300 text-[16px] font-semibold tracking-[0.01em] normal-case"
            >
              Explore Product <ArrowRight size={16} />
            </button>
          </div>

          {/* Features List - Smaller */}
          <div className="mt-6 flex flex-wrap gap-4 text-gray-400 text-[11px]">
            <div className="flex items-center gap-1">
              <Clock size={11} className="text-orange-400" />
              <span>Real-time Tracking</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={11} className="text-orange-400" />
              <span>Staff Management</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield size={11} className="text-orange-400" />
              <span>Secure Payments</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE - Smaller */}
        <div className="relative flex justify-center">
          {/* Glow behind image - Smaller */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-amber-500/30 blur-2xl rounded-full"></div>
          
          {/* Decorative circles - Smaller */}
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-orange-500/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-amber-500/30 rounded-full blur-xl"></div>
          
          {/* Decorative corner elements - Smaller */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-l-3 border-t-3 border-orange-500 rounded-tl-xl"></div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-3 border-b-3 border-amber-500 rounded-br-xl"></div>

          <img
            src={hero}
            alt="Restaurant Management Dashboard"
            className="relative w-full max-w-md rounded-xl shadow-2xl border border-orange-500/30 hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
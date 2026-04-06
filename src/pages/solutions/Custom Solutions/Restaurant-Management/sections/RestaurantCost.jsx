import React from 'react';
import { DollarSign, TrendingUp, Shield, Clock, ArrowRight, Sparkles } from 'lucide-react';
import costImg from "../../../../../assets/Restaurant-Manage/cost.png"; // Add your image path

const RestaurantCost = () => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div className="order-1 md:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <Sparkles size={12} className="text-orange-500" />
            <span>Pricing Guide</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How Much Does A{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Restaurant Management Software Cost?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            If you are thinking to build a cloud-based restaurant management software, it is important 
            to choose the right developers with great technical expertise. Whether you own a chain of 
            restaurants or a single location mini outlet, you need a reliable system that can help you 
            in taking customer orders, sending those requests to the kitchen and ensuring delivering of 
            all orders correctly on time.
          </p>

          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
            Though the price shouldn't be the ultimate deciding factor when it comes to choosing a 
            Restaurant POS Solution, cost undoubtedly plays a significant role. Check out the estimated 
            restaurant management software price by selecting only the features you need and pay for 
            what you choose. Talk to our experts and transform your innovative ideas into reality with 
            the best solution at a minimal budget.
          </p>

          {/* Key Points */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                <TrendingUp size={12} className="text-orange-600" />
              </div>
              <span className="text-gray-700 text-xs font-medium">Pay for what you need</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                <Shield size={12} className="text-orange-600" />
              </div>
              <span className="text-gray-700 text-xs font-medium">Minimal budget options</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                <Clock size={12} className="text-orange-600" />
              </div>
              <span className="text-gray-700 text-xs font-medium">Flexible pricing plans</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm">
              Talk to Our Experts <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center order-2 md:order-2">
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -right-3 w-16 h-16 border-r-4 border-t-4 border-orange-500 rounded-tr-2xl"></div>
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-4 border-b-4 border-amber-500 rounded-bl-2xl"></div>
          
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/20 to-amber-500/20 blur-2xl rounded-full"></div>

          <img
            src={costImg}
            alt="Restaurant Management Software Cost"
            className="relative w-full max-w-md rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default RestaurantCost;
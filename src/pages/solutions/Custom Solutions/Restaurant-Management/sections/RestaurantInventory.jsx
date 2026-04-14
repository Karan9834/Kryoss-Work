import React from 'react';
import { Package, Monitor, TrendingUp, BarChart3 } from 'lucide-react';
import inventoryImg from "../../../../../assets/Restaurant-Manage/inventory.png"; // Add your image path

const RestaurantInventory = () => {
  const inventoryFeatures = [
    {
      icon: <Package size={18} />,
      title: "Inventory and material tracking software",
      description: "Real-time tracking of stock levels, ingredients, and supplies."
    },
    {
      icon: <Monitor size={18} />,
      title: "Asset monitoring software",
      description: "Monitor kitchen equipment and restaurant assets efficiently."
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Forecasting and analysis software",
      description: "Predict demand and optimize inventory levels with AI-driven insights."
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Reporting and analytics dashboard",
      description: "Comprehensive reports on usage, waste, and cost optimization."
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div className="order-1 md:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            Inventory Software
          </div>

          {/* Heading */}
          <h2 className="text-gray-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Restaurant{" "}
            <span className="leading-[1.2] bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Inventory Software
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Make inventory management and tracking a breeze. Build sophisticated restaurant 
            inventory management software that offers inventory organization simple.
          </p>

          {/* Inventory Features Grid - Transparent Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {inventoryFeatures.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl border border-orange-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 mt-0.5 text-[14px] md:text-[16px] font-normal leading-[1.6]">{item.description}</p>
                </div>
              </div>
            ))}
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
            src={inventoryImg}
            alt="Restaurant Inventory Software"
            className="relative w-full max-w-md rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default RestaurantInventory;
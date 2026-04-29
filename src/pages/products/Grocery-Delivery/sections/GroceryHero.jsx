import { MessageCircle } from "lucide-react";
import React from "react";
import heroimg from '@/assets/Grocery-Delivery/hero.jpg';
const GroceryHero = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/ready-grocery-delivery-man-app-rider-app-delivery-app-addon/full_screen_preview/60319134",
      "_blank"
    );
  };

  return (
    <section className="w-full bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden py-16 px-4 lg:px-6">
      {/* Animated green orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      {/* Leaf pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 10 Q25 5, 30 10 Q35 15, 30 20 Q25 25, 20 20 Q15 15, 20 10" fill="#22c55e" stroke="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-green-100 border border-green-200 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              <span className="text-green-700 text-sm font-medium">Fresh Grocery Delivery</span>
            </div>

            {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Ready Grocery
              <span className="block text-green-600 mt-2">
                Delivered in Minutes
              </span>
            </h1>

            {/* CTA Buttons - Fixed the layout */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleLiveDemo}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-green-200 hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
              >
                Live Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a 
                href="/company/contact" 
                className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-gray-50"
              >
                <MessageCircle size={18} />
                Let's Discuss
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-center flex-wrap gap-4">
            {/* Main image */}
            <div className="relative z-10">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src={heroimg}
                alt="Fresh groceries"
                className="relative rounded-3xl shadow-2xl max-h-[450px] w-auto object-cover border-8 border-white"
              />
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default GroceryHero;
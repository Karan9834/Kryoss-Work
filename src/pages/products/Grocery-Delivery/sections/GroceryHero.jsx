import { MessageCircle } from "lucide-react";
import React from "react";

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

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Ready Grocery
              <span className="block text-green-600 mt-2">
                Delivered in Minutes
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-lg">
              Shop from 10,000+ fresh products. Get your groceries delivered to your doorstep in as little as 30 minutes.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleLiveDemo}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-green-200 hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
            >
              Live Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>

            {/* Features row */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-gray-600">30 Min Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-gray-600">10k+ Products</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-gray-600">Free Delivery*</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-center flex-wrap gap-4">
            {/* Main image */}
            <div className="relative z-10">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh groceries"
                className="relative rounded-3xl shadow-2xl max-h-[450px] w-auto object-cover border-8 border-white"
              />

              {/* Floating offer card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-2xl p-4 min-w-[180px] border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-wrap gap-4">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">First Order</p>
                    <p className="text-lg font-bold text-green-600">20% OFF</p>
                  </div>
                </div>
              </div>

              {/* Floating delivery card */}
              <div className="absolute top-6 -right-5 bg-white rounded-xl shadow-xl p-3 border border-green-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-1V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c1.1 0 2-.9 2-2v-3l-3-5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-500">Delivery in</p>
                    <p className="text-sm font-bold text-gray-900">30 min</p>
                  </div>
                </div>
              </div>

              {/* Fresh badge */}
              <div className="absolute bottom-20 right-0 bg-green-600 text-white rounded-lg shadow-lg px-3 py-1.5">
                <span className="text-xs font-semibold">✨ 100% Fresh</span>
              </div>
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
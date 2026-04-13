import { MessageCircle } from "lucide-react";
import React from 'react';

const GroceryCta = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/ready-grocery-delivery-man-app-rider-app-delivery-app-addon/full_screen_preview/60319134",
      "_blank"
    );
  };
  return (
    <section className="w-full bg-gradient-to-r from-green-600 to-emerald-600 py-12 px-4 lg:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Content */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Ready for Fresh Groceries?
        </h2>
        <p className="text-green-100 text-sm md:text-base mb-5">
          Join thousands of happy customers getting fresh delivery every day
        </p>

        {/* CTA Button */}
        <button
          onClick={handleLiveDemo}
          className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
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

        {/* Small stats */}
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-green-100 flex-wrap gap-4">
          <span>✓ Free Delivery*</span>
          <span>✓ 30 Min Delivery</span>
          <span>✓ 100% Fresh</span>
        </div>

        {/* Small note */}
        <p className="text-green-200 text-xs mt-3">
          *Free delivery on first 3 orders
        </p>
      </div>
    </section>
  );
};

export default GroceryCta;
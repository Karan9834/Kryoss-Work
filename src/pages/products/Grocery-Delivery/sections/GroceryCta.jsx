import React from 'react';

const GroceryCta = () => {
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
        <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
          Start Shopping Now
        </button>

        {/* Small stats */}
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-green-100">
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
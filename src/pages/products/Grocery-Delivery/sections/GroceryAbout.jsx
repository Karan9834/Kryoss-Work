import React from 'react';
import aboutimg from '@/assets/Grocery-Delivery/about.jpg';
const GroceryAbout = () => {
  return (
    <section className="w-full bg-white py-16 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - IMAGE */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutimg}
                alt="Fresh grocery store"
                className="w-full h-[400px] object-cover"
              />
              {/* Simple overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Simple badge */}
            <div className="absolute -bottom-3 -right-3 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-sm font-semibold">Since 2020</span>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTENT */}
          <div className="space-y-5 order-1 lg:order-2">
            {/* Section badge */}
            <div className="inline-block bg-green-100 px-4 py-1.5 rounded-full">
              <span className="text-green-700 text-sm font-medium">About Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Trusted
              <span className="block text-green-600">Grocery Partner</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, we've been serving fresh groceries to thousands of happy customers.
              We work directly with local farmers and suppliers to bring you the freshest products at the best prices.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From farm-fresh vegetables to organic fruits, dairy, and pantry essentials - we've got everything
              you need for your daily meals. Quality and freshness are our top priorities.
            </p>

            {/* Simple stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-2xl font-bold text-green-600">10k+</div>
                <div className="text-xs text-gray-500">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-xs text-gray-500">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">30min</div>
                <div className="text-xs text-gray-500">Delivery</div>
              </div>
            </div>

            {/* Simple features */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-sm text-gray-600">100% Fresh</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-sm text-gray-600">Organic Options</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-sm text-gray-600">Local Farmers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroceryAbout;
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroceryAbout;
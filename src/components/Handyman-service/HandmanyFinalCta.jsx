import React from "react";
import { Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#fff8e6] overflow-hidden">

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-transparent to-yellow-100 opacity-40"></div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Badge */}
        <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm inline-block mb-6">
          Get Updates
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Stay Ahead with Our{" "}
          <span className="text-yellow-600">
            Latest Updates
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Subscribe to our newsletter for exclusive updates and insights on the
          latest trends in app development solutions. Stay informed and never
          miss an important update.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">

          <div className="relative w-full sm:w-[450px]">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"
              size={18}
            />

            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full pl-12 pr-40 py-4 rounded-full bg-white border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
            />

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 
                         bg-yellow-500 hover:bg-yellow-600 
                         text-white px-6 py-2 rounded-full 
                         font-medium shadow-md transition"
            >
              Subscribe
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
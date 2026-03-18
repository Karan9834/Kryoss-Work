import React from "react";
import { Mail } from "lucide-react";

const HRMNewsletter = () => {
  return (
    <section className="w-full py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="
          relative text-center px-8 py-16 rounded-3xl
          bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100
          border border-purple-200
        ">

          {/* TOP TAG */}
          <span className="inline-block px-4 py-1 mb-5 text-sm rounded-full 
            bg-purple-100 text-purple-600 font-medium">
            Get Updates
          </span>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Stay Ahead with Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Latest Updates
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Subscribe to our newsletter for exclusive updates, HR insights, and 
            product improvements. Stay informed and never miss an important update.
          </p>

          {/* INPUT BOX */}
          <div className="
            max-w-xl mx-auto flex items-center gap-3
            bg-white border border-gray-200
            rounded-full px-4 py-2 shadow-sm
          ">

            {/* ICON */}
            <Mail className="text-purple-500" size={18} />

            {/* INPUT */}
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 outline-none text-sm"
            />

            {/* BUTTON */}
            <button className="
              px-6 py-2 rounded-full text-white text-sm font-semibold
              bg-gradient-to-r from-purple-600 to-indigo-600
              hover:scale-105 transition
            ">
              Subscribe
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HRMNewsletter;
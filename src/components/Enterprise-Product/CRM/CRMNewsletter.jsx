import React from "react";
import { Mail } from "lucide-react";

const CRMNewsletter = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50">

      <div className="max-w-5xl mx-auto px-6">

        {/* CONTAINER */}
        <div className="
          relative text-center 
          px-8 py-16 rounded-3xl
          bg-white border border-blue-100
          shadow-[0_20px_60px_rgba(37,99,235,0.08)]
        ">

          {/* TAG */}
          <span className="inline-block px-4 py-1 mb-5 text-sm rounded-full 
            bg-blue-100 text-blue-600 font-medium">
            Stay Updated
          </span>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Get the Latest CRM Insights & Updates
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Subscribe to receive product updates, CRM tips, and growth strategies 
            directly in your inbox.
          </p>

          {/* INPUT BOX */}
          <div className="
            max-w-xl mx-auto flex items-center gap-3
            bg-blue-50 border border-blue-100
            rounded-full px-4 py-2
          ">

            {/* ICON */}
            <Mail className="text-blue-500" size={18} />

            {/* INPUT */}
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-sm"
            />

            {/* BUTTON */}
            <button className="
              px-6 py-2 rounded-full text-white text-sm font-semibold
              bg-gradient-to-r from-blue-600 to-indigo-600
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

export default CRMNewsletter;
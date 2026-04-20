import React from "react";
import { Mail } from "lucide-react";

const HRMNewsletter = () => {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-6">

        <div className="
          relative text-center px-8 py-16 rounded-3xl
          bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100
          border border-purple-200
        ">

          {/* TOP TAG / BADGE - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <span className="inline-block px-4 py-1 mb-5 rounded-full 
            bg-purple-100 text-purple-600 text-[12px] font-medium tracking-[0.05em] uppercase">
            Get Updates
          </span>

          {/* HEADING - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-5">
            Stay Ahead with Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Latest Updates
            </span>
          </h2>

          {/* DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Subscribe to our newsletter for exclusive updates, HR insights, and 
            product improvements. Stay informed and never miss an important update.
          </p>

          {/* INPUT BOX */}
          <div className="
            max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3
            bg-white sm:border border-gray-200
            rounded-2xl sm:rounded-full px-4 py-2 sm:shadow-sm
          ">

            {/* ICON */}
            <Mail className="text-purple-500" size={18} />

            {/* INPUT */}
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 outline-none text-[14px] font-normal"
            />

            {/* BUTTON - Updated typography */}
            <button className="
              px-6 py-2 rounded-full text-white font-semibold
              bg-gradient-to-r from-purple-600 to-indigo-600
              hover:scale-105 transition
              text-[13px] md:text-[14px] tracking-[0.01em]
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
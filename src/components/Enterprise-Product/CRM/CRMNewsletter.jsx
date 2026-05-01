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

          {/* BADGE - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <span className="inline-block px-4 py-1 mb-5 rounded-full 
            bg-blue-100 text-blue-600 text-[12px] font-medium tracking-[0.05em] uppercase">
            Stay Updated
          </span>

          {/* HEADING - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-5">
            Get the Latest CRM Insights & Updates
          </h2>

          {/* DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 max-w-xl mx-auto mb-10 text-[14px] md:text-[16px] font-normal leading-[1.6]">
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

            {/* INPUT - Updated placeholder typography */}
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-[14px] font-normal"
            />

            {/* BUTTON - Updated typography */}
            <button className="
              px-6 py-2 rounded-full text-white font-semibold
              bg-gradient-to-r from-blue-600 to-indigo-600
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

export default CRMNewsletter;
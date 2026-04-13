import { Link } from 'react-router-dom';
import React from "react";
import { ArrowRight } from "lucide-react";

const CRMFinalCTA = () => {
  return (
    <section className="w-full py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* CONTAINER */}
        <div className="
          rounded-3xl 
          px-10 py-16
          bg-gradient-to-r from-blue-600 to-indigo-700
          text-white
          shadow-[0_20px_60px_rgba(37,99,235,0.25)]
        ">

          {/* HEADING - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-5">
            Ready to Transform Your{" "}
            <span className="text-blue-200">
              Customer Relationships?
            </span>
          </h2>

          {/* DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Start managing your leads, automating workflows, and closing deals faster 
            with our powerful CRM platform built for modern businesses.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* PRIMARY BUTTON - Updated typography */}
            <Link to="/company/contact" className="
              bg-white text-blue-700 
              px-7 py-3 rounded-full font-semibold
              flex items-center justify-center gap-2
              hover:scale-105 transition
              text-[14px] md:text-[15px] tracking-[0.01em]
            ">
              Get Started
              <ArrowRight size={18} />
            </Link>

            {/* SECONDARY BUTTON - Updated typography */}
            <Link to="/company/contact" className="
              border border-white/40 
              px-7 py-3 rounded-full font-semibold
              hover:bg-white/10 transition
              text-[14px] md:text-[15px] tracking-[0.01em]
            ">
              Book a Consultation
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CRMFinalCTA;
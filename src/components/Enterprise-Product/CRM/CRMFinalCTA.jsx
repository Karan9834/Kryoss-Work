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

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
            Ready to Transform Your{" "}
            <span className="text-blue-200">
              Customer Relationships?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Start managing your leads, automating workflows, and closing deals faster 
            with our powerful CRM platform built for modern businesses.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* PRIMARY */}
            <button className="
              bg-white text-blue-700 
              px-7 py-3 rounded-full font-semibold
              flex items-center justify-center gap-2
              hover:scale-105 transition
            ">
              Get Started
              <ArrowRight size={18} />
            </button>

            {/* SECONDARY */}
            <button className="
              border border-white/40 
              px-7 py-3 rounded-full font-semibold
              hover:bg-white/10 transition
            ">
              Book a Demo
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CRMFinalCTA;
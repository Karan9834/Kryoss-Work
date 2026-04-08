import { Link } from 'react-router-dom';
import React from "react";
import crmCtaImg from "../../../assets/Enterprise-Product/crmcta.png";

const CRMCTA = () => {
  return (
    <section className="w-full py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="
          relative overflow-hidden
          rounded-[40px]
          bg-gradient-to-r from-blue-600 to-indigo-700
          px-10 md:px-16 py-14
          flex flex-col md:flex-row items-center justify-between
        ">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl z-10">

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              Ready to Boost Your Sales with CRM?
            </h2>

            <p className="text-white/80 mb-6 text-sm md:text-base">
              Start managing your leads, customers, and deals smarter with our powerful CRM platform.
              Launch faster, scale better, and close more deals effortlessly.
            </p>

            <Link to="/company/contact" className="
              bg-white text-blue-700 
              px-6 py-3 rounded-full font-semibold 
              hover:scale-105 transition
            ">
              Request a Consultation →
            </Link>

          </div>

          {/* RIGHT IMAGE (OVERLAP STYLE) */}
          <div className="relative mt-10 md:mt-0">

            <img
              src={crmCtaImg}
              alt="CRM CTA"
              className="
                w-[260px] md:w-[320px] 
                md:absolute md:-right-10 md:bottom-[-20px]
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default CRMCTA;
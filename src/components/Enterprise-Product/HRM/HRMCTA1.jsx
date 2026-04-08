import { Link } from 'react-router-dom';

import React from "react";
import hrmImage from "../../../assets/Enterprise-Product/hrmhero.png";

const HRMCTA = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* CTA BOX */}
        <div className="
          relative overflow-hidden
          bg-gradient-to-r from-purple-600 to-indigo-700
          rounded-[60px] md:rounded-[120px]
          px-10 md:px-16 py-16
          flex flex-col md:flex-row items-center justify-between
        ">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl z-10">

            <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-snug">
              Ready to Transform Your HR Operations?
            </h2>

            <p className="text-purple-100 mb-6">
              Streamline hiring, payroll, and workforce management with our powerful
              HRM solution. Start your journey today with a scalable and intelligent system.
            </p>

            {/* CTA BUTTON */}
            <Link to="/company/contact" className="
              bg-white text-purple-700 font-semibold
              px-6 py-3 rounded-full
              hover:scale-105 transition duration-300
            ">
              Request a Consultation
            </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-10 md:mt-0">

            <img
              src={hrmImage}
              alt="HRM"
              className="
                w-[260px] md:w-[380px]
                object-contain
                md:translate-x-10 md:-translate-y-6
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default HRMCTA;
import React from "react";
import { motion } from "framer-motion";
import payrollImg from "../../../../../assets/Hotel-Solutions/module7.png";

const PayrollModule = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#f8fbff]">

      {/* NEON CYAN BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-[#b2ecf7] to-white opacity-60"></div>

        <div className="absolute top-0 left-10 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-300/40 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(178,236,247,0.25),transparent_60%)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-xl border border-white/60 shadow-md hover:shadow-lg transition duration-300">
              <img
                src={payrollImg}
                alt="Payroll Management Module"
                className="w-full h-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* CONTENT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              <span className="text-cyan-700">Payroll</span> Management Module
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                The Scheme is reciprocal, and applicable only to the functioning hotels which are individual members of the Federation.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Hotels will allow a discount of 30% to a visiting hotelier on the production of a membership card.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                To avail the discount on hotel accommodation, card holders should make an advance reservation.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PayrollModule;
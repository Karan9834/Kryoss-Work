import React from "react";
import { motion } from "framer-motion";
import accountingImg from "../../../../../assets/Hotel-Solutions/module5.png";

const AccountingModule = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#b2ecf7]">

      {/* SOFT NEON EFFECT */}
      <div className="absolute inset-0">

        {/* gradient overlay for smoothness */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-[#b2ecf7] to-white/40"></div>

        {/* subtle glow blobs */}
        <div className="absolute top-0 left-10 w-80 h-80 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl"></div>

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
                src={accountingImg}
                alt="Accounting Module"
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
              <span className="text-cyan-700">Accounting</span> Module
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                General Ledger Profit / Cost Centres.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Automatic Direct Billing from Front Desk.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Printing and Mailing of Room / Monthly Guest Bills to Companies with statement and past due alerts.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Ability to flag Accounts due for Payments or Payment Delays.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Vendor detail management.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AccountingModule;
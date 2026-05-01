import React from "react";
import { motion } from "framer-motion";
import housekeepingImg from "../../../../../assets/Hotel-Solutions/module2.png";

const HousekeepingModule = () => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">

      {/* SUBTLE NEON BACKGROUND */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-gray-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-cyan-600">Hotel</span>{" "}
            Management Modules
          </h2>
          <div className="w-16 h-[2px] bg-cyan-600 mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Comprehensive modules for complete hotel management
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* CONTENT LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Housekeeping Module
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm md:text-base">
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-500">–</span>
                Room status: Dirty, Clean, Inspected, Under Repair.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-500">–</span>
                Manage Room status from housekeeping.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-500">–</span>
                Real-time updates for front desk.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-500">–</span>
                Staff communication system.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-500">–</span>
                Maid assignment to rooms.
              </li>
            </ul>
          </motion.div>

          {/* IMAGE RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2"
          >
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300">
              <img
                src={housekeepingImg}
                alt="Housekeeping Module"
                className="w-full h-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HousekeepingModule;
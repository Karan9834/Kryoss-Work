import React from "react";
import { motion } from "framer-motion";
import reservationImg from "../../../../../assets/Hotel-Solutions/module8.png"; // update if needed

const ReservationModule = () => {
  return (
    <section className="w-full py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* CONTENT LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              <span className="text-cyan-700">Reservation</span> Management Module
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Room status: Dirty, Clean, Inspected, Under Repair.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Manage Room status from the Housekeeping area.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Front Desk Staff can see real-time room updated status.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Housekeeper to front desk communications.
              </li>
              <li className="flex gap-2 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600">–</span>
                Maid assignment to rooms.
              </li>
            </ul>
          </motion.div>

          {/* IMAGE RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300">
              <img
                src={reservationImg}
                alt="Reservation Management Module"
                className="w-full h-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ReservationModule;
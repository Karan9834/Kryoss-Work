import React from "react";
import { motion } from "framer-motion";
import inventoryImg from "../../../../../assets/Hotel-Solutions/module6.png"; // update if needed

const InventoryModule = () => {
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
              <span className="text-cyan-700">Inventory</span> Module
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <li className="flex gap-2">
                <span className="text-cyan-600">–</span>
                Purchase Entry with Item wise Purchase Rate.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600">–</span>
                Department wise Material Issue & Purchase Return.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600">–</span>
                Material Return Entry from Department to Store.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600">–</span>
                Department wise Material Issue Report.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600">–</span>
                Department wise Material Return Report.
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
                src={inventoryImg}
                alt="Inventory Module"
                className="w-full h-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InventoryModule;
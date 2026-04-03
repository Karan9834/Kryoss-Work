import React from "react";
import { motion } from "framer-motion";
import crmImage from "../../../../../assets/customer/customer.png";

const CRMHero = () => {
  return (
    <section className="w-full min-h-[500px] md:h-[550px] relative overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-teal-700 to-emerald-100"></div>

      {/* Glow Effects */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-400/30 blur-[120px] rounded-full"></div>
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-teal-300/20 blur-[120px] rounded-full"></div>

      {/* Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full h-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-5 text-center md:text-left"
          >
            {/* Badge - Size: 0.75rem (12px), Weight: 400 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-[0.75rem] font-normal text-white/90 tracking-wide">
                CUSTOMER RELATIONSHIP MANAGEMENT
              </span>
            </div>

            {/* Heading - Mobile: 2rem (32px), Desktop: 3.5rem (56px), Weight: 700 */}
            <h1 className="text-[2rem] md:text-[3.5rem] font-bold leading-tight text-white">
              Build Stronger <br />
              <span className="text-emerald-200">Customer Relationships</span>
            </h1>

            {/* Description - Size: 1rem (16px), Weight: 400 */}
            <p className="text-[1rem] font-normal text-white/70 max-w-lg leading-relaxed">
              Transform how you connect with customers. Our intelligent CRM
              platform helps you understand, engage, and delight your audience
              like never before.
            </p>

            {/* Button - Size: 1rem (16px), Weight: 600 */}
            <button className="px-8 py-3 bg-white text-emerald-900 rounded-xl font-semibold text-[1rem] hover:scale-105 transition duration-300">
              EXPLORE PRODUCTS
            </button>

            {/* Stats Numbers - Size: 1.25rem (20px), Weight: 700 | Labels - Size: 0.75rem (12px), Weight: 400 */}
            <div className="flex gap-8 pt-4 flex-wrap text-white">
              <div>
                <div className="text-[1.25rem] font-bold">10K+</div>
                <div className="text-[0.75rem] font-normal text-white/50">ACTIVE CLIENTS</div>
              </div>
              <div>
                <div className="text-[1.25rem] font-bold">99%</div>
                <div className="text-[0.75rem] font-normal text-white/50">SATISFACTION</div>
              </div>
              <div>
                <div className="text-[1.25rem] font-bold">24/7</div>
                <div className="text-[0.75rem] font-normal text-white/50">SUPPORT</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Image full height */}
          <div className="md:w-1/2 relative flex justify-center md:justify-end items-center h-full">
            {/* Notification 1 */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-[10%] right-[30%] z-30 hidden md:block"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl -rotate-12">
                <span className="text-2xl">👋</span>
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white whitespace-nowrap">
                Hello
              </span>
            </motion.div>

            {/* Notification 2 */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
              transition={{ duration: 2.5, delay: 0.3, repeat: Infinity }}
              className="absolute top-[30%] right-[10%] z-30 hidden md:block"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl text-xs px-2 text-center -rotate-6">
                <span className="font-semibold text-gray-800">Need Help?</span>
              </div>
            </motion.div>

            {/* Image - Full height matching content */}
            <motion.img
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={crmImage}
              alt="CRM"
              className="w-full h-full max-h-[500px] md:max-h-[550px] object-contain object-right z-20 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMHero;
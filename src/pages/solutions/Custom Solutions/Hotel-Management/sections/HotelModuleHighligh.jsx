import React from "react";
import { motion } from "framer-motion";
import frontDeskImg from "../../../../../assets/Hotel-Solutions/module1.png";

const HotelModuleHighlight = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">

      {/* SUBTLE LIGHT NEON BG EFFECTS */}
      <div className="absolute inset-0">
        {/* Soft neon glow orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl"></div>
        
        {/* Soft neon lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-cyan-200 to-transparent opacity-30"></div>
        <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-cyan-200 to-transparent opacity-30"></div>
      </div>

      {/* Light Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold">
            <span className="text-cyan-600">Hotel</span>{" "}
            <span className="text-gray-800">Management Modules</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3"></div>
          <p className="text-cyan-700/60 mt-4 text-[0.875rem] md:text-[1rem] font-normal">
            Comprehensive modules for complete hotel management
          </p>
        </motion.div>

        {/* CONTENT - Left Right Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group"
          >
            <div className="relative">
              {/* Soft neon border glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-md"></div>
              <img
                src={frontDeskImg}
                alt="Front Desk Module"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500 relative z-10 rounded-2xl"
              />
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title with neon accent */}
            <div className="relative inline-block mb-4">
              <h3 className="text-[1.5rem] md:text-[1.875rem] font-bold text-gray-800">
                Front Desk Module
              </h3>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            {/* Features List */}
            <ul className="space-y-4 text-gray-600 text-[0.875rem] md:text-[1rem] font-normal">
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 group/feature hover:text-cyan-700 transition-colors"
              >
                <span className="text-cyan-500 mt-1 group-hover/feature:scale-125 transition-transform">✦</span>
                <span>Hotel Status from the Main Screen.</span>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3 group/feature hover:text-cyan-700 transition-colors"
              >
                <span className="text-cyan-500 mt-1 group-hover/feature:scale-125 transition-transform">✦</span>
                <span>Guest Check In, Check Out Screen.</span>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3 group/feature hover:text-cyan-700 transition-colors"
              >
                <span className="text-cyan-500 mt-1 group-hover/feature:scale-125 transition-transform">✦</span>
                <span>Guest Snaps with Web cam at Various Stages of Stay.</span>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3 group/feature hover:text-cyan-700 transition-colors"
              >
                <span className="text-cyan-500 mt-1 group-hover/feature:scale-125 transition-transform">✦</span>
                <span>Meal plan selection with detailed plan info.</span>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-3 group/feature hover:text-cyan-700 transition-colors"
              >
                <span className="text-cyan-500 mt-1 group-hover/feature:scale-125 transition-transform">✦</span>
                <span>Plan Information like C.P., M.A.P., A.P. on check in.</span>
              </motion.li>
            </ul>

            {/* Decorative neon line at bottom */}
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 pt-4"
            >
              <div className="w-32 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .bg-grid-pattern-light {
          background-image: linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default HotelModuleHighlight;
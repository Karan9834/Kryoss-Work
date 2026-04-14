import React from 'react';
import { motion } from "framer-motion";
import hotelImage from "../../../../../assets/Hotel-Solutions/hero.png";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50 min-h-[550px] md:h-[600px]">
      
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full py-12 md:py-0">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-5 text-center md:text-left"
          >
            {/* Badge - Size: 0.75rem (12px), Weight: 400 */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200"
            >
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-[0.75rem] font-normal text-blue-700 tracking-wide">
                HOTEL MANAGEMENT SOLUTIONS
              </span>
            </motion.div>

            {/* Heading - Size: 1.875rem (30px) mobile, 3rem (48px) desktop, Weight: 700 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[1.875rem] md:text-[3rem] font-bold leading-tight"
            >
              <span className="text-gray-800">Streamline Your</span>
              <br />
              <span className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Hotel Operations
              </span>
            </motion.h1>

            {/* Description - Size: 1rem (16px), Weight: 400 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[1rem] font-normal text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              All-in-one hotel management software to streamline reservations, 
              housekeeping, billing, and guest experiences.
            </motion.p>

            {/* Button - Size: 1rem (16px), Weight: 600 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center md:justify-start"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-[1rem] hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 text-[16px] font-semibold tracking-[0.01em] normal-case">
                EXPLORE NOW
              </button>
            </motion.div>

            {/* Stats - Numbers: 1.25rem (20px) Weight:700, Labels: 0.75rem (12px) Weight:400 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-8 justify-center md:justify-start pt-4 flex-wrap"
            >
              <div>
                <div className="text-[1.25rem] font-bold text-gray-800">5K+</div>
                <div className="text-[0.75rem] font-normal text-gray-500">HOTELS</div>
              </div>
              <div>
                <div className="text-[1.25rem] font-bold text-gray-800">98%</div>
                <div className="text-[0.75rem] font-normal text-gray-500">SATISFACTION</div>
              </div>
              <div>
                <div className="text-[1.25rem] font-bold text-gray-800">24/7</div>
                <div className="text-[0.75rem] font-normal text-gray-500">SUPPORT</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2 flex justify-center items-center"
          >
            <img
              src={hotelImage}
              alt="Hotel Management Solutions"
              className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave Format at Bottom - Neon Color */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          className="w-full h-auto" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="url(#neonGradient)"
            className="animate-wave text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]"
          />
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Second wave layer for depth */}
        <svg 
          className="w-full h-auto absolute bottom-0 left-0 opacity-60" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,90.7C1120,96,1280,96,1360,96L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="url(#neonGradient2)"
          />
          <defs>
            <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0891B2', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CSS for wave animation */}
      <style>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
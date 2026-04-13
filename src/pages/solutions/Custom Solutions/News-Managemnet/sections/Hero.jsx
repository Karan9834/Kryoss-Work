import React from 'react';
import { motion } from "framer-motion";
import newsImage from "../../../../../assets/News-Solution/hero.png"

const NewsHero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#7f1d1d] to-[#ef4444] min-h-[550px] md:h-[600px]">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Glow orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern-red opacity-10"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent opacity-30 rotate-45"></div>
          <div className="absolute bottom-40 right-20 w-60 h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent opacity-30 -rotate-45"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full py-12 md:py-0">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-5 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              <span className="text-[0.75rem] font-normal text-white/90 tracking-wide">
                NEWS MANAGEMENT SYSTEM
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[1.875rem] md:text-[3rem] font-bold leading-tight"
            >
              <span className="text-white">Manage Your</span>
              <br />
              <span className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-rose-200">
                News & Content
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[1rem] font-normal text-white/80 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              Streamline your news publishing workflow with our comprehensive 
              news management system. Publish, manage, and distribute content 
              effortlessly across multiple platforms.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center md:justify-start"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl font-semibold text-[1rem] hover:shadow-2xl hover:shadow-red-500/30 hover:scale-105 transition-all duration-300">
                EXPLORE NOW
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-8 justify-center md:justify-start pt-4 flex-wrap"
            >
              <div>
                <div className="text-[1.25rem] font-bold text-white">10K+</div>
                <div className="text-[0.75rem] font-normal text-white/60">ARTICLES</div>
              </div>
              <div>
                <div className="text-[1.25rem] font-bold text-white">500+</div>
                <div className="text-[0.75rem] font-normal text-white/60">PUBLISHERS</div>
              </div>
              <div>
                <div className="text-[1.25rem] font-bold text-white">24/7</div>
                <div className="text-[0.75rem] font-normal text-white/60">SUPPORT</div>
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
              src={newsImage}
              alt="News Management System"
              className="w-full max-w-md md:max-w-lg h-auto object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          className="w-full h-auto" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="url(#waveGradient)"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#7f1d1d', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Styles */}
      <style>{`
        .bg-grid-pattern-red {
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default NewsHero;
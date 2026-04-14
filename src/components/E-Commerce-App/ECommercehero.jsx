import React from 'react';
import { motion } from "framer-motion";
import hero from "../../assets/E-Commerce-App/ecommercehero1.png";

const ECommerceHero = () => {


  // Function to scroll to products section
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex flex-col">

      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      {/* Container */}
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 relative z-10 flex-1 pt-24 pb-0">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 space-y-6 text-center md:text-left self-center mb-2 md:mb-16"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            <span className="h-2 w-2 bg-purple-400 rounded-full"></span>
            <span className="text-xs text-white/80 tracking-wider">
              PREMIUM E-COMMERCE SOLUTION
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            <span className="text-white">Transform Your</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
              Online Store
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base text-white/70 max-w-lg mx-auto md:mx-0"
          >
            Enterprise-grade e-commerce platform with powerful analytics,
            seamless integrations, and unparalleled performance.
          </motion.p>

          {/* Button - Changed to Explore Now */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center md:justify-start"
          >
            <button
              onClick={scrollToProducts}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              <span className="absolute inset-0 bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-300"></span>
              <span className="relative flex items-center gap-2">
                EXPLORE NOW
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-8 justify-center md:justify-start pt-4 flex-wrap"
          >
            <div>
              <div className="text-xl font-bold text-white">$2.5B+</div>
              <div className="text-xs text-white/50">ANNUAL GMV</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">50K+</div>
              <div className="text-xs text-white/50">ACTIVE STORES</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">99.9%</div>
              <div className="text-xs text-white/50">UPTIME SLA</div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center md:justify-end self-center md:self-end mt-4 md:mt-auto"
        >
          <img
            src={hero}
            alt="E-commerce users"
            className="w-[120%] md:w-[150%] max-w-none h-auto object-bottom object-contain translate-x-0 md:translate-x-8 translate-y-3 md:translate-y-5"
            loading="lazy"
          />
        </motion.div>

      </div>

      {/* Grid pattern */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default ECommerceHero;
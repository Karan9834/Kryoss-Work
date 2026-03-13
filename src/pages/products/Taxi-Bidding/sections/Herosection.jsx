import React from 'react';
import { motion } from 'framer-motion';
import taxibidding from "../../../../assets/Product-update/taxibidding.png"

const Herosection = ({ demoUrl = "https://preview.codecanyon.net/item/exicube-bidcab-app/full_screen_preview/40458430" }) => {
  
  const handleLiveDemo = () => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Orange Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400 rounded-full blur-[150px] opacity-10" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              {/* Vehicle Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1.5 bg-gray-800/80 backdrop-blur-sm rounded-full text-xs font-medium text-orange-400 border border-orange-500/30">
                  <i className="fas fa-car mr-1.5 text-orange-400"></i>
                  SUV-maruti Suzuki
                </span>
                <span className="px-3 py-1.5 bg-gray-800/80 backdrop-blur-sm rounded-full text-xs font-medium text-orange-400 border border-orange-500/30">
                  <i className="fas fa-wagon mr-1.5 text-orange-400"></i>
                  Wagon R
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  VYOM DRIVE
                </span>
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
                inDriver Clone
              </h2>

              {/* Description */}
              <p className="text-base text-gray-400 mb-6 max-w-lg leading-relaxed">
                A ready-to-use inDriver Clone provides you with complete control over your business operations. It connects passengers and drivers seamlessly.
              </p>

              {/* Live Demo Button */}
              <motion.button
                onClick={handleLiveDemo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 flex items-center gap-2 group"
              >
                <i className="fas fa-play-circle text-sm"></i>
                Live Demo
                <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform"></i>
              </motion.button>

              {/* Stats */}
              <div className="flex gap-6 mt-8 pt-6 border-t border-gray-800">
                <div>
                  <div className="text-xl font-bold text-white">10K+</div>
                  <div className="text-xs text-gray-500">Active Rides</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">5K+</div>
                  <div className="text-xs text-gray-500">Happy Drivers</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">50K+</div>
                  <div className="text-xs text-gray-500">Passengers</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Image Container with Orange Glow */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/20 shadow-2xl shadow-orange-500/10">
                <div className="aspect-[4/3] relative">
                  {/* Image */}
                  <img 
                    src={taxibidding}
                    alt="SUV-maruti Suzuki Wagon R"
                    className="w-full h-full object-contain p-6"
                  />
                  
                  {/* Orange Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Simple Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-orange-500/30 flex items-center gap-1.5"
                  >
                    <i className="fas fa-star text-orange-400 text-xs"></i>
                    <span className="text-xs font-medium text-orange-400">4.8</span>
                  </motion.div>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, 
  Clock, 
  Star, 
  Bike, 
  Leaf,
  ExternalLink, MessageCircle } from "lucide-react";
import foodHeroImage from "../../../../assets/Product-update/food.jpg";

const FoodHeroSection = ({ demoUrl = "http://preview.codecanyon.net/item/viavi-food-delivery-script/full_screen_preview/15509686" }) => {
  
  const handleLiveDemo = () => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Green Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-600 rounded-full blur-[120px] opacity-20" />
      </div>

      {/* Food Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-4xl">🍕</div>
        <div className="absolute bottom-10 right-10 text-4xl">🍔</div>
        <div className="absolute top-1/3 right-1/4 text-3xl">🌮</div>
        <div className="absolute bottom-1/3 left-1/4 text-3xl">🍜</div>
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
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30 mb-4">
                <ShoppingBag className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Food Delivery Clone</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  FoodExpress
                </span>
                <br />
                Clone Script
              </h1>

              {/* Description */}
              <p className="text-base text-gray-300 mb-6 max-w-lg leading-relaxed">
                A complete ready-to-use food delivery marketplace solution with user app, driver app, and admin panel. Launch your own platform today.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-wrap gap-4">
                    <Leaf className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-xs text-gray-300">Restaurant Panel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-wrap gap-4">
                    <Bike className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-xs text-gray-300">Driver App</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-wrap gap-4">
                    <Clock className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-xs text-gray-300">Real-time Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-wrap gap-4">
                    <Star className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-xs text-gray-300">Rating System</span>
                </div>
              </div>

              {/* Live Demo Button - Only CTA */}
              <motion.button
                onClick={handleLiveDemo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center gap-2 group w-fit flex-wrap gap-4"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Image Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-[2rem] blur-2xl" />
                
                {/* Main Image */}
                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/20 shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={foodHeroImage}
                      alt="FoodExpress Clone"
                      className="w-full h-full object-contain p-6"
                    />
                    
                    {/* Floating Demo Badge */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3 h-3 text-white" />
                      <span className="text-xs font-medium text-white">Live Demo</span>
                    </motion.div>

                    {/* App Store Badges */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md border border-gray-700">
                        <span className="text-[8px] text-gray-300">App Store</span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md border border-gray-700">
                        <span className="text-[8px] text-gray-300">Google Play</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info Card */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-green-500/30 shadow-xl"
                >
                  <p className="text-xs text-white">
                    <span className="text-green-400 font-bold">✓</span> Complete Source Code
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodHeroSection;
import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Users,
  Bike,
  ChefHat,
  Sparkles,
  ArrowRight, MessageCircle
} from "lucide-react";
import ctaImage from "../../../../assets/Product-update/foodcta.png";

const FoodCTASection = ({ demoUrl = "https://food-demo.vercel.app" }) => {

  const handleLiveDemo = () => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Green Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-600 rounded-full blur-[120px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400 rounded-full blur-[150px] opacity-10" />
      </div>

      {/* Food Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 text-4xl">
        <div className="absolute top-10 left-[10%]">🍕</div>
        <div className="absolute bottom-10 right-[10%]">🍔</div>
        <div className="absolute top-1/3 right-1/4">🌮</div>
        <div className="absolute bottom-1/3 left-1/4">🍜</div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30 mb-5">
                <Sparkles className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Ready to Launch?</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Start Your{' '}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Food Delivery
                </span>
                <br />
                Business Today
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 leading-relaxed max-w-md">
                Get everything you need to launch your own food delivery platform. Complete apps for customers, drivers, and restaurants.
              </p>

              {/* Mini Stats */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-300">500+ Restaurants</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bike className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-300">1000+ Drivers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-300">4.8★ Rating</span>
                </div>
              </div>

              {/* Live Demo Button */}
              <motion.button
                onClick={handleLiveDemo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Live Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 mt-5">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center text-[10px] font-bold text-white flex-wrap gap-4">5K</div>
                  <div className="w-6 h-6 bg-green-600 rounded-full border-2 border-gray-900 flex items-center justify-center text-[10px] font-bold text-white flex-wrap gap-4">✓</div>
                </div>
                <span className="text-xs text-gray-400">Trusted by 500+ businesses</span>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Image Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-[2rem] blur-xl" />

                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/20 shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={ctaImage}
                      alt="FoodExpress App"
                      className="w-full h-full object-contain p-4"
                    />

                    {/* Floating Badge - Customer App */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-3 left-3 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-lg"
                    >
                      <span className="text-[10px] text-white font-medium flex items-center gap-1">
                        <Users className="w-3 h-3" /> Customer App
                      </span>
                    </motion.div>

                    {/* Floating Badge - Driver App */}
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                      className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-lg"
                    >
                      <span className="text-[10px] text-white font-medium flex items-center gap-1">
                        <Bike className="w-3 h-3" /> Driver App
                      </span>
                    </motion.div>

                    {/* Floating Badge - Restaurant Panel */}
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute bottom-3 left-3 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-lg"
                    >
                      <span className="text-[10px] text-white font-medium flex items-center gap-1">
                        <ChefHat className="w-3 h-3" /> Restaurant Panel
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-10 pt-6 border-t border-gray-800"
          >
            <p className="text-xs text-gray-400 italic max-w-2xl mx-auto">
              "Complete white-label solution with source code. Launch in days, not months."
            </p>
            <div className="flex justify-center items-center gap-1 mt-2 flex-wrap gap-4">
              <Star className="w-3 h-3 text-green-400 fill-green-400" />
              <Star className="w-3 h-3 text-green-400 fill-green-400" />
              <Star className="w-3 h-3 text-green-400 fill-green-400" />
              <Star className="w-3 h-3 text-green-400 fill-green-400" />
              <Star className="w-3 h-3 text-green-400 fill-green-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoodCTASection;
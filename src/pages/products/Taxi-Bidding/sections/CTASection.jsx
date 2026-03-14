import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Car, Award, Sparkles } from 'lucide-react';
import ctaImage from "../../../../assets/Product-update/taxicta.jpg";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Orange Background Accents - Subtle */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-600 rounded-full blur-[100px] opacity-20" />
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
              <div className="inline-flex items-center gap-2 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/20 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs font-medium text-orange-400">Join the Future</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Ready to Transform{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Your Journey?
                </span>
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-5 leading-relaxed max-w-md">
                Experience the freedom of choosing your fare and connecting with drivers who value your business.
              </p>

              {/* Mini Stats */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-xs text-gray-300">100K+ riders</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-xs text-gray-300">50K+ drivers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-xs text-gray-300">4.8★</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-400" />
                <span className="text-xs text-gray-400">Best Mobility App 2024</span>
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
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl" />
                
                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/20 shadow-xl">
                  {/* Image */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src={ctaImage}
                      alt="VYOM DRIVE App"
                      className="w-full h-full object-contain p-4"
                    />
                    
                    {/* Small Floating Badge */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-2 right-2 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md border border-white/20"
                    >
                      <span className="text-[10px] text-white">24/7 Support</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Quote - Small */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-8 pt-4 border-t border-gray-800"
          >
            <p className="text-xs text-gray-400 italic max-w-2xl mx-auto">
              "Fair prices, happy drivers, and satisfied passengers — all in one platform."
            </p>
            <div className="flex justify-center items-center gap-1 mt-2">
              <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
              <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
              <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
              <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
              <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
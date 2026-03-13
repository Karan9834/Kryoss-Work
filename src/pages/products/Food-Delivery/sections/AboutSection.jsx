import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Bike, Star, Heart, Shield } from 'lucide-react';
import aboutImage from "../../../../assets/Product-update/food1.jpg"; // You'll add this image

const FoodAboutSection = () => {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Green Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-green-50 rounded-full text-sm font-medium text-green-600 border border-green-200 mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Delivering Happiness{' '}
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                Since 2024
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're on a mission to connect people with their favorite meals, faster and fresher than ever before.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  {/* Image - SUGGESTION: Search Google for "chef team preparing food in kitchen black and green" or "restaurant kitchen team working" */}
                  <img 
                    src={aboutImage}
                    alt="Our team preparing fresh meals"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Green Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 via-transparent to-transparent" />
                  
                  {/* Stats Badge */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border-l-4 border-green-500"
                  >
                    <p className="text-sm font-bold text-gray-900">10M+ Meals</p>
                    <p className="text-xs text-gray-500">Delivered worldwide</p>
                  </motion.div>

                  {/* Rating Badge */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
                  >
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold text-gray-900">4.9</span>
                      <span className="text-xs text-gray-500">(50k+ reviews)</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 shadow-xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-xs opacity-90">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Story */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-bold text-green-600">FoodExpress</span> was born from a simple idea: great food should be accessible to everyone, anytime. What started as a small kitchen in 2024 has grown into a network of 500+ restaurant partners and 1000+ delivery heroes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the power of food to bring people together. Every meal we deliver carries our commitment to quality, speed, and customer satisfaction.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <Heart className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">Quality First</h4>
                  <p className="text-xs text-gray-500 mt-1">Fresh ingredients, always</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <Bike className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">Lightning Fast</h4>
                  <p className="text-xs text-gray-500 mt-1">30 min delivery</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <Shield className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">Safe Delivery</h4>
                  <p className="text-xs text-gray-500 mt-1">Contactless options</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <Users className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">24/7 Support</h4>
                  <p className="text-xs text-gray-500 mt-1">Always here to help</p>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500">Restaurants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50k+</div>
                  <div className="text-xs text-gray-500">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">45min</div>
                  <div className="text-xs text-gray-500">Avg. Delivery</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-500 italic text-sm max-w-3xl mx-auto">
              "Our mission is to bring the world's cuisines to your doorstep, creating moments of joy one meal at a time."
            </p>
            <div className="flex justify-center items-center gap-1 mt-3">
              <Clock className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-400">Open 24/7 - Always delivering happiness</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoodAboutSection;
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Users, Globe, Star, Shield, Award } from 'lucide-react';
import aboutImage from "../../../../assets/Product-update/about.png"

const AboutSection = () => {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Subtle Orange Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-30" />
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
            <span className="inline-block px-4 py-1.5 bg-orange-50 rounded-full text-sm font-medium text-orange-600 border border-orange-200 mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Transforming Mobility with{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing the way people commute by providing a seamless, transparent, and efficient ride-hailing experience.
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
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-xl">
                <div className="aspect-[4/3] relative">
                  {/* Image */}
                  <img 
                    src={aboutImage}
                    alt="About VYOM DRIVE"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Orange Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent" />
                  
                  {/* Company Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg flex items-center gap-2">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-medium text-gray-900">Est. 2020</span>
                  </div>
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
              {/* Company Description */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">VYOM DRIVE</span> is a cutting-edge ride-hailing platform that puts control back in the hands of passengers. Our innovative bidding model allows riders to set their fare while drivers compete for trips, creating a fair and transparent ecosystem.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With operations in 25+ countries and millions of happy riders, we're committed to making urban mobility accessible, affordable, and reliable for everyone.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-700">Safe Rides</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-700">50K+ Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <Globe className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-700">25+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-700">4.8★ Rating</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Shield className="w-4 h-4 text-orange-500" />
                  ISO 27001 Certified
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Award className="w-4 h-4 text-orange-500" />
                  Best Mobility App 2024
                </span>
              </div>
            </motion.div>
          </div>

          {/* Simple Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[
              { number: "100K+", label: "Daily Rides", icon: Car },
              { number: "50K+", label: "Active Drivers", icon: Users },
              { number: "25+", label: "Countries", icon: Globe },
              { number: "4.8★", label: "App Rating", icon: Star }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-orange-50/50 rounded-xl p-4 text-center border border-orange-100">
                  <Icon className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
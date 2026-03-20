import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/E-Commerce-App/aboutus.png";

const AboutUs = () => {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      
      {/* Container SAME as hero */}
      <div className="container mx-auto px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT IMAGE (same style as hero image positioning) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center md:justify-start"
        >
          <img
            src={aboutImg}
            alt="About Us"
            className="w-[95%] md:w-[100%] max-w-[500px] h-auto object-contain"
          />
        </motion.div>

        {/* RIGHT CONTENT (same structure as hero left side) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200">
            <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
            <span className="text-xs text-purple-600 tracking-wider">
              ABOUT OUR PLATFORM
            </span>
          </div>

          {/* Heading (same gradient style as hero) */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Built for Growth,</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              Designed for Scale
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Our platform empowers businesses to streamline operations, boost sales, 
            and deliver exceptional customer experiences. With powerful tools and 
            seamless integrations, we help you grow faster and smarter.
          </p>

          {/* Features (clean, minimal like SaaS) */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-purple-100 text-purple-600 text-sm">
                ⚡
              </div>
              <span className="text-gray-700 text-sm">Fast Performance</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-pink-100 text-pink-600 text-sm">
                🔗
              </div>
              <span className="text-gray-700 text-sm">Easy Integration</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 text-sm">
                📊
              </div>
              <span className="text-gray-700 text-sm">Analytics</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-purple-100 text-purple-600 text-sm">
                🛡️
              </div>
              <span className="text-gray-700 text-sm">Secure</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition duration-300">
              Learn More →
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
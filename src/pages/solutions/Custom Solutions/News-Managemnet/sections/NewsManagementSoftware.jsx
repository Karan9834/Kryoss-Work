import React from "react";
import { motion } from "framer-motion";
import newsImage from "../../../../../assets/News-Solution/about.png"; 

const NewsManagementSoftware = () => {
  return (
    <section className="w-full py-24 bg-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold">
            <span className="text-red-600">News Management</span>{" "}
            <span className="text-gray-800">Software</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 mx-auto mt-3"></div>
        </motion.div>

        {/* Content Layout - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* LEFT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-4"
          >
            <p className="text-[0.875rem] md:text-[1rem] font-normal text-gray-600 leading-relaxed">
              A news web portal is a digital platform that aggregates and delivers news from 
              various sources. In today's digital era, everyone from children to educators, 
              business leaders to students, professionals to homemakers prefers accessing 
              news updates on their smartphones at their convenience.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] font-normal text-gray-600 leading-relaxed">
              <span className="font-semibold text-red-700">Kryoss Softech</span> designs and 
              develops dynamic news portals with customizable categories and sections including 
              regional and national news, sports updates, business coverage, and informative content.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] font-normal text-gray-600 leading-relaxed">
              Our custom News Website CMS empowers news publishers to manage breaking news, 
              press releases, articles, blogs, online polls, and other related content seamlessly.
            </p>

            {/* Features Heading */}
            <h3 className="text-[1.125rem] md:text-[1.25rem] font-bold text-gray-800 mt-6 mb-3">
              Our News Web Portal Features:
            </h3>

            {/* Features List */}
            <ul className="space-y-3">
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3 group hover:text-red-700 transition-colors"
              >
                <span className="text-red-500 mt-1 group-hover:scale-125 transition-transform">✦</span>
                <span className="text-[0.875rem] md:text-[0.95rem] font-normal text-gray-600 group-hover:text-gray-800">Slider view of breaking news</span>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 group hover:text-red-700 transition-colors"
              >
                <span className="text-red-500 mt-1 group-hover:scale-125 transition-transform">✦</span>
                <span className="text-[0.875rem] md:text-[0.95rem] font-normal text-gray-600 group-hover:text-gray-800">SEO friendly website architecture</span>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3 group hover:text-red-700 transition-colors"
              >
                <span className="text-red-500 mt-1 group-hover:scale-125 transition-transform">✦</span>
                <span className="text-[0.875rem] md:text-[0.95rem] font-normal text-gray-600 group-hover:text-gray-800">Categorized news by city, state, and country</span>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3 group hover:text-red-700 transition-colors"
              >
                <span className="text-red-500 mt-1 group-hover:scale-125 transition-transform">✦</span>
                <span className="text-[0.875rem] md:text-[0.95rem] font-normal text-gray-600 group-hover:text-gray-800">Advanced search for video, audio, images, blogs, forums & email subscription</span>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3 group hover:text-red-700 transition-colors"
              >
                <span className="text-red-500 mt-1 group-hover:scale-125 transition-transform">✦</span>
                <span className="text-[0.875rem] md:text-[0.95rem] font-normal text-gray-600 group-hover:text-gray-800">User registration for profiles, blogs, and articles</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* RIGHT SIDE - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Subtle red glow effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50"></div>
              
              <img
                src={newsImage}
                alt="News Management Software"
                className="w-full max-w-md md:max-w-lg h-auto object-contain relative z-10 drop-shadow-xl rounded-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsManagementSoftware;
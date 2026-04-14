import React from "react";
import { motion } from "framer-motion";
import newsPortalImage from "../../../../../assets/News-Solution/whys.png"; 

const WhyChooseKryoss = () => {
  const features = [
    "News website and web portal development",
    "Customize news portal development",
    "Customize News Portal design",
    "Integrating Content Management System (CMS)",
    "Very good interface",
    "Maintenance and Support",
    "Images and Video posts",
    "Multilevel features (Admin, Author, Users and more)",
    "Easy managing administration panel",
    "Event Calendar",
    "Newsletters"
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-red-50 via-white to-rose-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[1.875rem] md:text-[2.25rem] text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-red-600">Why Choose</span>{" "}
            <span className="text-gray-800">Kryoss Work For News Portal Development?</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 mx-auto mt-3"></div>
        </motion.div>

        {/* Content Layout - Image Left, Text Right */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* LEFT SIDE - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Subtle red glow effect */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50"></div>
              
              <img
                src={newsPortalImage}
                alt="News Portal Development"
                className="w-full max-w-md md:max-w-lg h-auto object-contain relative z-10 drop-shadow-xl rounded-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 space-y-4"
          >
            {/* Description */}
            <p className="text-[0.875rem] md:text-[1rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              <span className="font-semibold text-red-700">Kryoss Work</span> takes pride in delivering 
              user-friendly news portals that provide appealing and efficient news portal development 
              services. Our news portal development enables publishers to share publications, press 
              releases, columns, articles, blogs, and other news-related content from across the globe.
            </p>

            {/* Features Grid - 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.03) }}
                  className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300"
                >
                  <span className="text-red-500 text-sm group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-[0.8rem] md:text-[0.875rem] font-normal text-gray-600 group-hover:text-gray-800">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKryoss;
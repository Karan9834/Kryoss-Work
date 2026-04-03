import React from "react";
import { motion } from "framer-motion";
import expertiseImage from "../../../../../assets/News-Solution/feature.png"; 

const FeatureExpertise = () => {
  const expertiseFeatures = [
    "Responsive News Portal Design",
    "Mobile App Development for News",
    "Custom CMS Integration",
    "Real-time News Updates",
    "Push Notifications",
    "Multi-language Support",
    "Social Media Integration",
    "Analytics & Reporting Dashboard",
    "Video & Multimedia Support",
    "User Subscription Management",
    "Breaking News Alerts",
    "Comment & Moderation System"
  ];

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
            <span className="text-red-600">Feature Expertise</span>{" "}
            <span className="text-gray-800">that We Offer In News Portal And Mobile Applications Services</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 mx-auto mt-3"></div>
        </motion.div>

        {/* Content Layout - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-4"
          >
            {/* Description */}
            <p className="text-[0.875rem] md:text-[1rem] font-normal text-gray-600 leading-relaxed">
              <span className="font-semibold text-red-700">Kryoss Work</span> provides a one-stop solution 
              for all your internet existence necessities. We offer web consultancy, web designing, 
              and redesigning of accessible websites. As a news portal development company, 
              we are amazingly cost-effective and deliver our web designing projects on time to our customers.
            </p>

            {/* Expertise Features Grid - 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
              {expertiseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.03) }}
                  className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                    <span className="text-red-500 text-xs group-hover:text-white transition-colors duration-300">✓</span>
                  </div>
                  <span className="text-[0.8rem] md:text-[0.875rem] font-normal text-gray-600 group-hover:text-gray-800">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
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
                src={expertiseImage}
                alt="News Portal & Mobile App Expertise"
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

export default FeatureExpertise;
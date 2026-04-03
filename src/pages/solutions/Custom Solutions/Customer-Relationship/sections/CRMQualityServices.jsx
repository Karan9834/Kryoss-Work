import React from "react";
import { motion } from "framer-motion";
import crmImage from "../../../../../assets/customer/quality.png";

const CRMQualityServices = () => {
  return (
    <section className="w-full py-24 bg-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold">
            <span className="text-teal-600">Best Quality</span>{" "}
            <span className="text-gray-800">CRM Software Development Services</span>
          </h2>
          <div className="w-16 h-[2px] bg-teal-600 mx-auto mt-3" />
        </motion.div>

        {/* MAIN CONTENT - Image Left, Content Right */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* LEFT SIDE - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={crmImage}
              alt="CRM Software Development Services"
              className="w-[85%] md:w-[90%] object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 space-y-4 text-center md:text-left"
          >
            {/* Description */}
            <p className="text-[0.875rem] md:text-[1rem] font-normal text-gray-600 leading-relaxed">
              We have a team of professionals who will help you make business expansion 
              with lucrative customer service and relationship administration in the 
              course of roping in CRM Development Company with the new IT ambiance.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] font-normal text-gray-600 leading-relaxed">
              We will help you create valuable customer relationships with CRM software 
              solutions personalized based on your requirements. Our CRM software solutions 
              help you integrate cutting edge solutions in your daily business transactions 
              that help you save time and cut expenditure while gaining and retaining more 
              potential customers.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] font-normal text-gray-600 leading-relaxed">
              With <span className="font-semibold text-teal-600">Kryoss Work</span>, you are able to opt for CRM software solutions 
              that help integrate multiple customer touch points that add up building loyalty 
              to get higher satisfaction and long term business partnerships as outcomes.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] font-normal text-gray-600 leading-relaxed">
              At <span className="font-semibold text-teal-600">Kryoss Work</span> we have a team of well experienced CRM developers 
              who you can expect designing CMS adaptable for small businesses and also for 
              large corporate. Making the most out of the best available customer facing 
              resources that aid planning, deploying targeted sales, and developing marketing 
              activities are the main solution while seeking CRM success.
            </p>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMQualityServices;
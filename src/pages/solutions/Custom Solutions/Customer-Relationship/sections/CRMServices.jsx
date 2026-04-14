import React from "react";
import { motion } from "framer-motion";
import crmImage from "../../../../../assets/customer/about.png";

const CRMServices = () => {
  return (
    <section className="w-full py-24 bg-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-[1.875rem] md:text-[2.25rem] text-center text-[30px] md:text-[36px] font-bold leading-[1.2]">
          <span className="text-emerald-600">Custom CRM</span>{" "}
          <span className="text-gray-800">Development Services</span>
        </h2>
        <div className="w-16 h-[2px] bg-emerald-600 mx-auto mt-3" />

        {/* MAIN CONTENT */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-12 relative">
          
          {/* IMAGE SIDE - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={crmImage}
              alt="CRM Development Services"
              className="w-[85%] md:w-[90%] object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* TEXT SIDE - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 space-y-4 text-center md:text-left"
          >
            {/* Title */}
            <h3 className="text-[1.5rem] md:text-[1.875rem] font-bold">
              <span className="text-emerald-600">CRM Solutions</span>{" "}
              <span className="text-gray-800">That Drive Growth</span>
            </h3>

            {/* Subtitle */}
            <h4 className="text-[1.5rem] md:text-[1.875rem] font-bold text-gray-700">
              Streamline Customer-Centric Processes
            </h4>

            {/* Description */}
            <p className="text-[0.875rem] md:text-[1rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Organizations invest in customer relationship management (CRM) 
              solutions to streamline their customer-centric processes and 
              boost profitability in sales and marketing. A well-designed CRM 
              solution provides employees with everything they need to build, 
              improve, and retain customer relationships.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Developing a robust CRM solution is key to business growth. Every 
              company develops meaningful relationships with customers through 
              marketing campaigns, customer service, sales initiatives, and more.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Companies without an integrated CRM solution risk missing growth 
              opportunities and failing to maximize business relationships.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              <span className="font-semibold text-emerald-700">Kryoss Work</span>{" "}
              delivers complete CRM solutions that log and track customer 
              interactions, providing a 360° view of your company's relationship 
              with your customer base.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMServices;
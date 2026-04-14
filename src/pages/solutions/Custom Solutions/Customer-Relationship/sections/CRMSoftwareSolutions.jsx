import React from "react";
import { motion } from "framer-motion";
import crmImage from "../../../../../assets/customer/solution.png";

// Icons for each feature
const icons = {
  account: (
    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  sales: (
    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  lead: (
    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  email: (
    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  marketing: (
    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  ),
  email2: (
    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const features = [
  {
    id: "01",
    title: "Account Management",
    description: "Gain 360-degree visibility with complete activity history on your custom dashboard.",
    icon: icons.account
  },
  {
    id: "02",
    title: "Sales Data Management",
    description: "Smooth assimilation of extensions & plugins to get real time sales data.",
    icon: icons.sales
  },
  {
    id: "03",
    title: "Lead Management",
    description: "Create, maintain, and manage lead and customer information from various channels.",
    icon: icons.lead
  },
  {
    id: "04",
    title: "Seamless Email",
    description: "Supercharge your task management with email integrations that track each task to completion.",
    icon: icons.email
  },
  {
    id: "05",
    title: "Marketing & Customer Engagement",
    description: "Enable personalized customer communication across multiple touchpoints.",
    icon: icons.marketing
  },
  {
    id: "06",
    title: "Seamless Email",
    description: "Supercharge your task management with email integrations that track each task to completion.",
    icon: icons.email2
  }
];

const CRMSoftwareSolutions = () => {
  // Split features into two columns
  const leftColumnFeatures = features.slice(0, 3);
  const rightColumnFeatures = features.slice(3, 6);

  return (
    <section className="w-full py-24 bg-gradient-to-br from-teal-50 via-white to-teal-50/50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[1.875rem] md:text-[2.25rem] text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-teal-600">CRM Software</span>{" "}
            <span className="text-gray-800">Solutions</span>
          </h2>
          <div className="w-16 h-[2px] bg-teal-600 mx-auto mt-3" />
          <p className="text-gray-600 mt-4 mx-auto text-[0.875rem] md:text-[1rem] text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Comprehensive CRM solutions to streamline your business processes and boost customer relationships
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* LEFT SIDE - 6 Points in 2 Columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Features 1-3 */}
              <div className="space-y-6">
                {leftColumnFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 group hover:translate-x-1 transition-transform duration-300"
                  >
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                        <span className="text-teal-600 group-hover:text-white font-bold text-xs">
                          {feature.id}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0 mt-0.5">
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-[0.95rem] md:text-[1rem] font-bold text-gray-800 mb-1 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-[0.8rem] md:text-[0.875rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column - Features 4-6 */}
              <div className="space-y-6">
                {rightColumnFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 3) * 0.1 }}
                    className="flex gap-3 group hover:translate-x-1 transition-transform duration-300"
                  >
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                        <span className="text-teal-600 group-hover:text-white font-bold text-xs">
                          {feature.id}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0 mt-0.5">
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-[0.95rem] md:text-[1rem] font-bold text-gray-800 mb-1 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-[0.8rem] md:text-[0.875rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 flex justify-center items-center"
          >
            <div className="relative">
              {/* Subtle teal background decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-50 rounded-full blur-3xl opacity-30"></div>
              
              <img
                src={crmImage}
                alt="CRM Software Solutions"
                className="w-full max-w-md md:max-w-lg h-auto object-contain relative z-10 drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom subtle decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default CRMSoftwareSolutions;
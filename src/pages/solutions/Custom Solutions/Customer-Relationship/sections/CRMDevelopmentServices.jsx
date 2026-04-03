import React from "react";
import { motion } from "framer-motion";
import crmImage from "../../../../../assets/customer/custom.png";

const CRMDevelopmentServices = () => {
  const services = [
    {
      id: "01",
      title: "Business Analysis",
      description: "Implies investigating your business objectives and suggesting ways to address them with CRM functionality."
    },
    {
      id: "02",
      title: "Risk and Change Management",
      description: "Implies defining a change strategy and steps to make changes safely and avoid unwelcomed consequences a change process can entail."
    },
    {
      id: "03",
      title: "Data Migration From Legacy CRM or Spreadsheets",
      description: "Is transferring your data into a new CRM solution without data loss, corruption or impact on your live business processes."
    },
    {
      id: "04",
      title: "User Training",
      description: "Means teaching employees to adopt CRM's functionality and use it efficiently."
    },
    {
      id: "05",
      title: "Production Rollout",
      description: "Implies transferring the CRM solution to the production environment where end users can exercise its capabilities to the full."
    },
    {
      id: "06",
      title: "Support and Evolution",
      description: "May include additional tuning of CRM features and processes to comply with emerging user needs. In other cases, support may entail ongoing improvements aimed to help CRM evolve and keep up with the digital transformation of the company."
    }
  ];

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
            <span className="text-teal-600">What Custom CRM Development</span>{" "}
            <span className="text-gray-800">Services Include:</span>
          </h2>
          <div className="w-16 h-[2px] bg-teal-600 mx-auto mt-3" />
        </motion.div>

        {/* MAIN CONTENT - Content Left, Image Right */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* LEFT SIDE - Services List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group hover:translate-x-1 transition-transform duration-300"
                >
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                      <span className="text-teal-600 group-hover:text-white font-bold text-sm">
                        {service.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[1rem] md:text-[1.125rem] font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[0.875rem] md:text-[0.95rem] font-normal text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
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
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
              
              <img
                src={crmImage}
                alt="Custom CRM Development Services"
                className="w-full max-w-md md:max-w-lg h-auto object-contain relative z-10 drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMDevelopmentServices;
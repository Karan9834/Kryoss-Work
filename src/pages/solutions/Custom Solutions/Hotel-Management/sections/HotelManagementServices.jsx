import { motion } from "framer-motion";
import hotelImage from "../../../../../assets/Hotel-Solutions/about.png";

const HotelManagementServices = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[1.875rem] md:text-[2.25rem] text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-cyan-600">Hotel Management</span>{" "}
            <span className="text-gray-800">Software Development</span>
          </h2>
          <div className="w-16 h-[2px] bg-cyan-600 mx-auto mt-3" />
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* IMAGE SIDE - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
              <img
                src={hotelImage}
                alt="Hotel Management Software Development"
                className="w-[85%] md:w-[90%] object-contain rounded-2xl shadow-2xl relative z-10"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* TEXT SIDE - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 space-y-4 text-center md:text-left"
          >
            {/* Description */}
            <p className="text-[0.875rem] md:text-[1rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Hotel management system is a software which helps hoteliers in managing their 
              bookings, guests, and other aspects of their hotel. There are many hotel 
              management software solutions popular in the world today.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              <span className="font-semibold text-cyan-700">Kryoss Softech</span> wants to help 
              you design, upgrade, and integrate new technology into your site so that you can 
              stand out from the competition and appeal to your clients.
            </p>

            <p className="text-[0.875rem] md:text-[1rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Our focus is to provide our customers with a hotel management site that will help 
              you not only in retaining clients but also help you with growing your client base.
            </p>

            {/* Stats Section */}
            <div className="flex gap-6 pt-4 flex-wrap justify-center md:justify-start">
              <div>
                <div className="text-[1.25rem] font-bold text-gray-800">500+</div>
                <div className="text-[0.75rem] font-normal text-gray-500">HOTELS</div>
              </div>
              <div>
                <div className="text-[1.25rem] font-bold text-gray-800">95%</div>
                <div className="text-[0.75rem] font-normal text-gray-500">SATISFACTION</div>
              </div>
              <div>
                <div className="text-[1.25rem] font-bold text-gray-800">24/7</div>
                <div className="text-[0.75rem] font-normal text-gray-500">SUPPORT</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HotelManagementServices;
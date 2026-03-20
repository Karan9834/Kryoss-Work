import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, BarChart3, CreditCard, Globe, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";

import image1 from "../../assets/E-Commerce-App/image1.png";
import image2 from "../../assets/E-Commerce-App/image2.png";
import image3 from "../../assets/E-Commerce-App/image3.png";
import image4 from "../../assets/E-Commerce-App/image4.png";

const solutions = [
  {
    title: "E-Commerce Setup",
    desc: "Launch your store quickly with powerful tools and seamless onboarding. Get online in minutes with our intuitive platform.",
    icon: ShoppingCart,
    img: image1,
    gradient: "from-purple-500 to-pink-500",
    stats: "2x faster setup",
    delay: 0.1,
  },
  {
    title: "Smart Analytics",
    desc: "Track performance and gain insights with real-time analytics dashboard. Make data-driven decisions effortlessly.",
    icon: BarChart3,
    img: image2,
    gradient: "from-blue-500 to-cyan-500",
    stats: "Real-time data",
    delay: 0.2,
  },
  {
    title: "Secure Payments",
    desc: "Enable fast and secure global transactions with integrated gateways. Support 50+ payment methods worldwide.",
    icon: CreditCard,
    img: image3,
    gradient: "from-green-500 to-emerald-500",
    stats: "99.9% uptime",
    delay: 0.3,
  },
  {
    title: "Global Expansion",
    desc: "Scale your business worldwide with multi-currency and localization. Reach customers in 100+ countries.",
    icon: Globe,
    img: image4,
    gradient: "from-orange-500 to-red-500",
    stats: "Global reach",
    delay: 0.4,
  },
];

const Solutions = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth progress line
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section className="w-full bg-gradient-to-b from-purple-50/50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* Decorative background elements with purple tones */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          {/* Badge with purple theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6"
          >
            <Sparkles size={16} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Our Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            How We
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Transform Your Business
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A systematic approach to launching and scaling your e-commerce success
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* CENTER LINE - Purple theme */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-200 via-pink-200 to-purple-200 rounded-full"></div>
          
          {/* ANIMATED PROGRESS LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/25"
          />

          {/* TIMELINE ITEMS */}
          <div className="relative space-y-16 md:space-y-24">
            {solutions.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* CONTENT CARD */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                      {/* Step Number with Icon */}
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-lg`}>
                          <Icon size={24} />
                        </div>
                        <span className={`text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${isEven ? "md:text-right" : "md:text-left"}`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-gray-600 mb-4 ${isEven ? "md:text-right" : "md:text-left"}`}>
                        {item.desc}
                      </p>

                      {/* Stats Tag */}
                      <div className={`flex ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${item.gradient} text-white shadow-md`}>
                          <Zap size={14} />
                          {item.stats}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* CENTER DOT WITH PULSE */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: item.delay + 0.3, type: "spring" }}
                      className="relative"
                    >
                      {/* Pulse rings */}
                      <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-25"></span>
                      <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} opacity-40 blur-md`}></span>
                      
                      {/* Dot */}
                      <div className={`relative w-4 h-4 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg`}></div>
                    </motion.div>
                  </div>

                  {/* IMAGE SECTION - No blur on hover */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      {/* Decorative gradient background */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                      
                      {/* Image container - removed blur overlay */}
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
                        />
                        
                        {/* Simple icon overlay on hover - no blur background */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center justify-center"
                        >
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-2xl transform -rotate-12 group-hover:rotate-0 transition duration-500`}>
                            <Icon size={32} className="text-white" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
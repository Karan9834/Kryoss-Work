import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Testimonials from '../../../components/home/Testimonials';
import Contact from '../../../components/home/Contact';

const socialMediaData = {
  tabs: [
    { id: 'Infographics', name: 'Infographics' },
    { id: 'Facebook', name: 'Facebook' },
    { id: 'Instagram', name: 'Instagram' },
    { id: 'Posters', name: 'Posters' }
  ],
  sections: {
    "Infographics": [
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Infographics 1.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Infographics 2.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Infographics 3.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/info 1.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/info 2.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/info 3.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/info 4.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/info 5.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/info 6.png"
    ],
    "Facebook": [
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Facebook 1.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Facebook 2.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Facebook 3.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/FB1 .png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/FB2 .png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/FB 3 .png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/FB 4 .png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/FB 5 .png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/FB 6 .png"
    ],
    "Instagram": [
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Instagram 1.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Instagram 2.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Instagram 3.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/IG 1.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/IG 2.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/IG 3 .png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/IG 4 .png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/IG 5 .png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/IG 6 .png"
    ],
    "Posters": [
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Poster 1.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Poster 2.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Poster 3.png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Poster 1 ..png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Poster 2 ..png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Poster 3 ..png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Poster 4 ..png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Poster 5 ..png",
      "https://kryosssoftech.org/icons/Social-Media-creative-works/Poster 6 ..png"
    ]
  }
};

const SocialMedia = () => {
  const [activeTab, setActiveTab] = useState(socialMediaData.tabs[0].id);

  return (
    <div className="w-full bg-white relative font-sans overflow-hidden">

      {/* 1. Hero Section */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://kryosssoftech.org/icons/banner/uiux123.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Social Media <span className="text-orange-500">Creative Works</span></h1>
        </motion.div>
      </section>

      {/* 2. Breadcrumb / Page Routing Section */}
      <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
          <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <a href="/works" className="hover:text-orange-500 transition-colors duration-300">Our Works</a>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-orange-500">Social Media Works</span>
        </div>
      </section>

      {/* 3. Portfolio Tabs Section */}
      <section className="pt-16 md:pt-24 bg-white relative z-10 w-full mb-16">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-black mb-4"
            >
              Our <span className="text-orange-500">Creative</span> Portfolio
            </motion.h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Nav Tabs */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-12 px-2 border-b border-gray-200 pb-4">
            {socialMediaData.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 text-sm lg:text-[16px] font-bold uppercase transition-all duration-300 tracking-wide relative ${
                  activeTab === tab.id
                    ? 'text-orange-500'
                    : 'text-gray-500 hover:text-orange-500'
                }`}
              >
                {tab.name}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-[18px] left-0 right-0 h-[3px] bg-orange-500"
                    initial={false}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

        </div>

        {/* Tab Content */}
        <div className="w-full mt-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="container mx-auto px-4 lg:px-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {socialMediaData.sections[activeTab]?.map((imgSrc, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)] transition-shadow duration-300 aspect-[4/3] bg-orange-50 flex items-center justify-center p-4 border border-gray-100"
                  >
                    <img
                      src={imgSrc}
                      alt={`${activeTab} creative work ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {(!socialMediaData.sections[activeTab] || socialMediaData.sections[activeTab].length === 0) && (
                <div className="w-full py-20 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <Star className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Projects Coming Soon</h3>
                  <p className="text-gray-500 max-w-md">We are currently curating our best works for this category. Check back later!</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Stats Counter Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden" style={{ backgroundImage: "url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700/50">
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">750+</h3>
              <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Project Delivered</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">150+</h3>
              <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Development Staff</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">10+</h3>
              <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Years of Experience</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">450+</h3>
              <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <Testimonials />

      {/* 6. Contact Section */}
      <Contact />

    </div>
  );
};

export default SocialMedia;

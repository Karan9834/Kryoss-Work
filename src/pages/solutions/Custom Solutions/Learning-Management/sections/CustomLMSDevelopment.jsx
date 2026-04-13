import { Link } from 'react-router-dom';
import React from 'react';

const CustomLMSDevelopment = () => {
  return (
    <section className="w-full font-['Inter'] relative overflow-hidden">
      
      {/* SUBTLE BLUE BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-white/80 to-indigo-100/20" />
      <div className="absolute inset-0 bg-blue-200/10" />
      
      {/* FLOATING BLUR ELEMENTS */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-300/15 blur-3xl rounded-full" />
      
      {/* CONTAINER - 2 COLUMN LAYOUT */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[600px]">
        
        {/* LEFT SIDE - IMAGE (50% WIDTH, FULL HEIGHT) */}
        <div className="hidden lg:block w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=700&fit=crop"
            alt="Custom LMS Development Services"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* SUBTLE BLUE OVERLAY ON IMAGE */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-indigo-600/15" />
        </div>
        
        {/* RIGHT SIDE - CONTENT (50% WIDTH) */}
        <div className="w-full lg:w-1/2 py-16 md:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white/50 backdrop-blur-[1px]">
          
          {/* PILL BADGE */}
          <div className="inline-flex items-center gap-2 bg-blue-100/60 backdrop-blur-sm text-blue-700 px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></span>
            <span className="text-[0.75rem] font-normal">Kryoss Softech</span>
          </div>
          
          {/* HEADING */}
          <h2 className="text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 leading-tight mb-6">
            Custom{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              LMS Development Services
            </span>
          </h2>
          
          {/* DESCRIPTION 1 */}
          <p className="text-[0.875rem] md:text-base font-normal text-gray-600 leading-relaxed mb-4">
            Streamline learning and development and convert instructor-led training into a cloud-based, 
            configurable learning management system.
          </p>
          
          {/* SUBHEADING */}
          <div className="inline-flex items-center gap-2 mt-4 mb-3">
            <div className="w-1 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            <h3 className="text-base md:text-lg font-semibold text-gray-800">
              Learning Management System
            </h3>
          </div>
          
          {/* DESCRIPTION 2 */}
          <p className="text-[0.875rem] md:text-base font-normal text-gray-600 leading-relaxed">
            Accelerate employee training and development and deliver extended enterprise training for 
            business growth. Achieve and demonstrate positive training ROI by assessing, prioritizing 
            and managing your training resources and delivering exceptional learning experiences. 
            Make knowledge accessible and readily available and create a single source of personalized 
            growth. With a custom cloud-based LMS that meets your company's exact needs, your L&D team 
            can design and deliver complete development programs or take advantage of microlearning and 
            boost employee engagement.
          </p>
          
          {/* BUTTON */}
          <Link to="/company/contact" className="mt-8 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-normal rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started →
          </Link>
          
        </div>
        
      </div>
      
      {/* MOBILE IMAGE (SHOWS ONLY ON MOBILE) */}
      <div className="block lg:hidden w-full px-6 pb-8">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
          alt="Custom LMS Development Services"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>
      
    </section>
  );
};

export default CustomLMSDevelopment;
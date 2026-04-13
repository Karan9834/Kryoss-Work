import { Link } from 'react-router-dom';
import React from 'react';

const LookingForLMS = () => {
  return (
    <section className="w-full py-16 md:py-24 font-['Inter'] relative overflow-hidden">
      
      {/* GLASSY BLUE BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-blue-50/30 to-indigo-100/30 backdrop-blur-[2px]" />
      
      {/* GLASSY CARD EFFECT OVERLAY */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      
      {/* FLOATING GLASSY BLUR ELEMENTS */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-300/25 blur-3xl rounded-full" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-300/20 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/15 blur-3xl rounded-full" />
      
      {/* CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT - CONTENT */}
          <div className="flex-1">
            
            {/* PILL BADGE - GLASSY BLUE */}
            <div className="inline-flex items-center gap-2 bg-blue-100/60 backdrop-blur-sm text-blue-700 px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[0.75rem] font-normal">Kryoss Work</span>
            </div>
            
            {/* HEADING */}
            <h2 className="text-[1.875rem] md:text-[3rem] font-bold text-gray-900 leading-tight mb-6">
              Looking For{" "}
              <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                LMS Development?
              </span>
            </h2>
            
            {/* DESCRIPTION 1 */}
            <p className="text-[0.875rem] md:text-base font-normal text-gray-700 leading-relaxed mb-4">
              Seeking the finest solutions to build software for an e-learning management system? 
              Kryoss Softech LMS system development services is the perfect destination for you. 
              Our LMS system is a free and open-source software learning management platform. When 
              technology is evolving at such an unprecedented pace, how can the education system lag behind?
            </p>
            
            {/* FEATURE LIST */}
            <div className="space-y-4 mt-6">
              
              {/* FEATURE 1 */}
              <div className="flex gap-3 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-[0.875rem] md:text-base font-normal text-gray-700 leading-relaxed">
                  As the premier LMS development company, we leverage our deep expertise to deliver exceptional results.
                </p>
              </div>
              
              {/* FEATURE 2 */}
              <div className="flex gap-3 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-[0.875rem] md:text-base font-normal text-gray-700 leading-relaxed">
                  Our cutting-edge tools and technologies enable us to address the unique requirements of your business.
                </p>
              </div>
              
              {/* FEATURE 3 */}
              <div className="flex gap-3 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-[0.875rem] md:text-base font-normal text-gray-700 leading-relaxed">
                  Highly intuitive and visually appealing user interface designed to deliver a superior user experience.
                </p>
              </div>
              
              {/* FEATURE 4 */}
              <div className="flex gap-3 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-[0.875rem] md:text-base font-normal text-gray-700 leading-relaxed">
                  Expert LMS developers with extensive experience in crafting tailor-made LMS development solutions.
                </p>
              </div>
              
            </div>
            
            {/* BUTTON - GLASSY */}
            <Link to="/company/contact" className="mt-8 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-normal rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started →
            </Link>
            
          </div>
          
          {/* RIGHT - IMAGE WITH GLASSY EFFECT */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* GLASSY CARD BACKGROUND */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="LMS Development Team"
                className="relative z-1 w-full h-full object-cover opacity-90"
                style={{ minHeight: "400px", maxHeight: "550px" }}
              />
              {/* GLASSY BLUE OVERLAY ON IMAGE */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 to-indigo-500/15 z-2" />
              {/* GLASSY BORDER EFFECT */}
              <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none z-3" />
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
};

export default LookingForLMS;
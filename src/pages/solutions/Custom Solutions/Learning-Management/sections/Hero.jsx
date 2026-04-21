import React from 'react';
import heroImg from '../../../../../assets/Learning Management/Landing page_.jpg';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white font-['Inter']">
      
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      
      {/* FLOATING BLUR ELEMENTS */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-300/30 blur-3xl rounded-full" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-indigo-300/30 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 blur-3xl rounded-full" />
      
      {/* DOTS PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT - TEXT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* BADGE - 0.75rem (12px), Weight: 400 */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 text-[12px] font-medium tracking-[0.05em] uppercase"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 text-[12px] font-medium tracking-[0.05em] uppercase"></span>
              </span>
              <span className="text-[0.75rem] font-normal">
                Next-Gen Learning Platform
              </span>
            </div>
            
            {/* HEADING - Mobile: 1.875rem (30px), Desktop: 3rem (48px), Weight: 700 */}
            <h1 className="text-[1.875rem] md:text-[3rem] text-gray-900 mb-6 text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
              Transform Your
              <span className="leading-[1.2] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
                {" "}Learning Experience
              </span>
            </h1>
            
            {/* DESCRIPTION - 1rem (16px), Weight: 400 */}
            <p className="text-gray-600 mx-auto lg:mx-0 mb-8 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">
              Empower your students and educators with our all-in-one Learning Management System. 
              Create, manage, and deliver engaging online courses with ease.
            </p>
            
            {/* BUTTON - 1rem (16px), Weight: 600 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden text-[16px] font-semibold tracking-[0.01em] normal-case">
                <span className="relative z-10 text-base font-semibold">Explore Products →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="px-8 py-3.5 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:text-blue-600 text-[16px] font-semibold tracking-[0.01em] normal-case">
                <span className="text-base font-semibold">Watch Demo 🎥</span>
              </button>
            </div>
            
            {/* STATS SECTION */}
            <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">
              
              {/* STAT 1 */}
              <div className="text-center lg:text-left">
                <div className="text-[1.25rem] font-bold text-gray-900">10K+</div>
                <div className="text-[0.75rem] font-normal text-gray-500">Students</div>
              </div>
              
              {/* STAT 2 */}
              <div className="text-center lg:text-left">
                <div className="text-[1.25rem] font-bold text-gray-900">500+</div>
                <div className="text-[0.75rem] font-normal text-gray-500">Institutions</div>
              </div>
              
              {/* STAT 3 */}
              <div className="text-center lg:text-left">
                <div className="text-[1.25rem] font-bold text-gray-900">98%</div>
                <div className="text-[0.75rem] font-normal text-gray-500">Satisfaction</div>
              </div>
              
            </div>
            
          </div>
          
          {/* RIGHT - IMAGE FROM UNSPLASH */}
          <div className="flex-1 relative">
            
            {/* MAIN IMAGE CARD */}
            <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-3 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImg}
                alt="Students learning together"
                className="w-full h-auto rounded-xl object-cover"
                style={{ minHeight: "300px", maxHeight: "500px" }}
              />
            </div>
            
            {/* OVERLAY GRADIENT */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 pointer-events-none" />
            
            {/* FLOATING ELEMENTS */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-3 animate-bounce-slow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-3 animate-bounce-slow animation-delay-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
      {/* BOTTOM WAVE DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20">
          <path 
            d="M0,40 C300,80 600,0 900,20 C1200,40 1400,60 1440,40 L1440,80 L0,80 Z" 
            fill="#f8fafc"
          />
        </svg>
      </div>
      
    </section>
  );
};

export default Hero;
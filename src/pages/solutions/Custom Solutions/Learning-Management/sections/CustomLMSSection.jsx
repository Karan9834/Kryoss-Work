import React from 'react';
import learning from "../../../../../assets/Learning Management/Custom Learning Management_.jpg"
const CustomLMSSection = () => {
  return (
    <section className="w-full py-16 md:py-24 font-['Inter'] relative overflow-hidden bg-white">
      
      {/* BACKGROUND - BLUE THEME */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />
      
      {/* FLOATING BLUR ELEMENTS - BLUE THEME */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full" />
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-indigo-300/20 blur-3xl rounded-full" />
      
      {/* DOTS PATTERN */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT - IMAGE */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={learning}
                alt="Custom LMS Solution"
                className="w-full h-auto object-cover"
              />
              {/* GRADIENT OVERLAY - BLUE THEME */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20" />
            </div>
          </div>
          
          {/* RIGHT - CONTENT */}
          <div className="flex-1">
            
            {/* PILL BADGE - BLUE THEME */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 text-[12px] font-medium tracking-[0.05em] uppercase"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 text-[12px] font-medium tracking-[0.05em] uppercase"></span>
              </span>
              <span className="text-[0.75rem] font-normal">Kryoss Woek</span>
            </div>
            
            {/* HEADING - Mobile: 1.875rem (30px), Desktop: 3rem (48px), Weight: 700 */}
            <h2 className="text-[1.875rem] md:text-[3rem] text-gray-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Custom Learning Management System Development
              <span className="leading-[1.2] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
                {" "}(LMS Solution)
              </span>
            </h2>
            
            {/* DESCRIPTION 1 - Mobile: 0.875rem (14px), Desktop: 1rem (16px), Weight: 400 */}
            <p className="text-[0.875rem] text-gray-600 mb-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Insightful, resourceful and highly intuitive learning management system development services 
              as per your custom business needs to boost your learning experiences.
            </p>
            
            {/* DESCRIPTION 2 */}
            <p className="text-[0.875rem] text-gray-600 mb-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              A Learning Management System (LMS) is the backbone of most enterprise elearning programmes. 
              An LMS controls who has access to your courses, and keeps records of learner progress and 
              test scores. Many LMS platforms include resource booking, collaboration and social networking 
              functionality. LMS software will also often integrate with other human resource systems within 
              a business.
            </p>
            
            {/* DESCRIPTION 3 */}
            <p className="text-[0.875rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Streamline learning and development and convert instructor-led training into a cloud-based, 
              configurable learning management system. Track the impact of learning on critical KPIs like 
              engagement, retention and skills. Compare training goals to organizational performance, scale 
              your learning operations and organize internal and external learning activities for multiple audiences.
            </p>
            
            {/* BUTTON - BLUE THEME */}
            <button className="mt-8 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-normal rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Let's Talk →
            </button>
            
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
};

export default CustomLMSSection;
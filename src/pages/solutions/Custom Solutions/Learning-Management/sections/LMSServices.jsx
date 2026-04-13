import React from 'react';

const LMSServices = () => {
  const services = [
    {
      number: "1",
      title: "LMS Design",
      desc: "Our teams design learning management systems to be both easy to use and pleasing to the eye. So whether it is LMS website design or the creation of e-Learning mobile apps, you can rely on our expertise in UI/UX to get a solution designed with the use of the best practices."
    },
    {
      number: "2",
      title: "Custom E-Learning Development",
      desc: "Custom LMS systems we deliver allow our clients to address all the challenges associated with the training of their professionals. We determine, develop, and implement every feature and function that will contribute to the boosted productivity and desired educational outreach."
    },
    {
      number: "3",
      title: "LMS Implementation",
      desc: "We not only develop but also ensure smooth integration of the system into your company, making it an integral part of your business. The cost of LMS implementation depends on the solution and the existence of other systems that need to be linked."
    },
    {
      number: "4",
      title: "Modernization And Support",
      desc: "We provide modernization and support services to both systems developed by our teams and other providers. Whether there is a need for other technologies, changes to the infrastructure, the release of new features, etc. — we have got you covered."
    },
    {
      number: "5",
      title: "LMS Consulting",
      desc: "Our learning management system consultants will analyze your business to discover its trigger points and find out which LMS features and functions work for you in the best way."
    }
  ];

  return (
    <section className="w-full font-['Inter'] relative overflow-hidden">
      
      {/* SUBTLE BLUE BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/80 to-indigo-100/30" />
      <div className="absolute inset-0 bg-blue-200/10" />
      
      {/* FLOATING BLUR ELEMENTS */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-300/15 blur-3xl rounded-full" />
      
      {/* CONTAINER - 2 COLUMN LAYOUT */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[700px]">
        
        {/* LEFT SIDE - IMAGE (50% WIDTH, FULL HEIGHT) */}
        <div className="hidden lg:block w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop"
            alt="LMS Development Services"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* SUBTLE BLUE OVERLAY ON IMAGE */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
        </div>
        
        {/* RIGHT SIDE - CONTENT (50% WIDTH) */}
        <div className="w-full lg:w-1/2 py-16 md:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
          
          {/* HEADER */}
          <div className="mb-10">
            
            {/* PILL BADGE */}
            <div className="inline-flex items-center gap-2 bg-blue-100/60 backdrop-blur-sm text-blue-700 px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></span>
              <span className="text-[0.75rem] font-normal">Our Services</span>
            </div>
            
            {/* HEADING */}
            <h2 className="text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 leading-tight mb-4">
              Learning Management System
              <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}Development Services
              </span>
            </h2>
            
            {/* DESCRIPTION */}
            <p className="text-[0.875rem] md:text-base font-normal text-gray-600 leading-relaxed">
              Acting as an LMS development company, Kryoss Softech offers full-cycle services 
              that cover each stage of product development.
            </p>
            
          </div>
          
          {/* SERVICES LIST */}
          <div className="space-y-6">
            
            {services.map((service) => (
              <div key={service.number} className="group flex gap-4">
                
                {/* NUMBER BADGE */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    {service.number}
                  </div>
                </div>
                
                {/* CONTENT */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[0.75rem] md:text-[0.875rem] font-normal text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
              </div>
            ))}
            
          </div>
          
          {/* BUTTON */}
          <button className="mt-10 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-normal rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Explore All Services →
          </button>
          
        </div>
        
      </div>
      
      {/* MOBILE IMAGE (SHOWS ONLY ON MOBILE) */}
      <div className="block lg:hidden w-full px-6 pb-8">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
          alt="LMS Development Services"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>
      
    </section>
  );
};

export default LMSServices;
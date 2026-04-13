import React from 'react';

const FeaturesGrid = () => {
  const features = [
    {
      title: "Create & Sell Courses",
      icon: "📚"
    },
    {
      title: "Conduct Live Classes",
      icon: "🎥"
    },
    {
      title: "Private Video Channel",
      icon: "📹"
    },
    {
      title: "Pool of Audio Lectures",
      icon: "🎧"
    },
    {
      title: "Personalised E-Library",
      icon: "📖"
    },
    {
      title: "Submit & Check Assignments",
      icon: "📝"
    },
    {
      title: "Conduct Online Tests",
      icon: "📊"
    },
    {
      title: "Live Chat with Students",
      icon: "💬"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 font-['Inter'] relative overflow-hidden bg-white">
      
      {/* SUBTLE BACKGROUND ACCENTS */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30" />
      
      {/* FLOATING BLUR ELEMENTS - VERY SUBTLE */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/15 blur-3xl rounded-full" />
      
      {/* CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          
          {/* PILL BADGE */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></span>
            <span className="text-[0.75rem] font-normal">All Features</span>
          </div>
          
          {/* HEADING */}
          <h2 className="text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 leading-tight mb-4">
            Get All The Features Required To Run Your
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Online Digital Academy
            </span>
          </h2>
          
        </div>
        
        {/* 4x2 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-7 text-center border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              
              {/* ICON - MEDIUM SIZE */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                <span className="text-3xl md:text-4xl">{feature.icon}</span>
              </div>
              
              {/* TITLE */}
              <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                {feature.title}
              </h3>
              
              {/* DECORATIVE LINE ON HOVER */}
              <div className="mt-3 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
            </div>
          ))}
          
        </div>
        
      </div>
      
    </section>
  );
};

export default FeaturesGrid;
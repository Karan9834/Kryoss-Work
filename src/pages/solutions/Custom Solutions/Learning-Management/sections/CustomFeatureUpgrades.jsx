import React from 'react';

const CustomFeatureUpgrades = () => {
  const features = [
    {
      title: "Manage Your Courses",
      desc: "Design your course curriculum with varied categories as you like.",
      icon: "📚"
    },
    {
      title: "Discussion Forums",
      desc: "Allow discussion forums to interact between students.",
      icon: "💬"
    },
    {
      title: "Simulated Online Test",
      desc: "Take personalized tests, evaluate and generate a ranking list for your students.",
      icon: "📝"
    },
    {
      title: "Virtual Classroom",
      desc: "Connect with students from all over the world and share live resources.",
      icon: "🎥"
    },
    {
      title: "Certification",
      desc: "Select templates and set preferred rules to enable certificates as you like.",
      icon: "🎓"
    },
    {
      title: "Media Content Support",
      desc: "Upload as many texts, audio, image, animation, & video files or import from cloud storage.",
      icon: "🎬"
    },
    {
      title: "Reports & Analysis",
      desc: "Monitor your student's performance and the growth of your business.",
      icon: "📊"
    },
    {
      title: "CMS",
      desc: "Manage courses, classes, exams & classes with our CMS.",
      icon: "⚙️"
    },
    {
      title: "Payment Gateways",
      desc: "Make payments online and offline with total security.",
      icon: "💳"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 font-['Inter'] relative overflow-hidden">
      
      {/* LIGHT BLUE HEAVY WEIGHT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/60 via-blue-100/50 to-indigo-200/50" />
      
      {/* EXTRA BLUE OVERLAY FOR HEAVY WEIGHTAGE */}
      <div className="absolute inset-0 bg-blue-300/20" />
      
      {/* GLASSY BLUR OVERLAY */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      
      {/* FLOATING GLASSY BLUR ELEMENTS */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/20 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/15 blur-3xl rounded-full" />
      
      {/* CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          
          {/* PILL BADGE */}
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md text-blue-700 px-4 py-1.5 rounded-full border border-white/50 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></span>
            <span className="text-[0.75rem] font-normal">Custom Solutions</span>
          </div>
          
          {/* HEADING */}
          <h2 className="text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 leading-tight mb-4">
            Custom{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Feature Upgrades
            </span>
          </h2>
          
          {/* DESCRIPTION */}
          <p className="text-[0.875rem] md:text-base font-normal text-gray-700 max-w-2xl mx-auto">
            Our dedicated team offers add-on features to upgrade your LMS Software and customize 
            the system as per business requirements.
          </p>
          
        </div>
        
        {/* GLASSMORPHISM CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* GLASSMORPHISM CARD BACKGROUND */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl" />
              
              {/* HOVER GLOW EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />
              
              {/* CARD CONTENT */}
              <div className="relative z-10 p-6 md:p-7">
                
                {/* ICON WITH GLASSY CIRCLE */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                {/* TITLE */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                {/* DESCRIPTION */}
                <p className="text-[0.75rem] md:text-[0.875rem] font-normal text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
                
                {/* DECORATIVE LINE ON HOVER */}
                <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-full" />
                
              </div>
              
            </div>
          ))}
          
        </div>
        
      </div>
      
    </section>
  );
};

export default CustomFeatureUpgrades;
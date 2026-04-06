import React from 'react';
import { Globe, Cloud, Building, Shield, Brain, Award } from 'lucide-react';
import erpSolutionsImg from "../../../../../assets/ERP-Solution/Modern.png"; 

const ERPSolutions = () => {
  const solutions = [
    {
      icon: <Globe size={18} />,
      title: "Web Based ERP Solution",
      description: "A web based ERP solution that can be accessed from anywhere and built with a simple yet modern designed UI that is easy to use."
    },
    {
      icon: <Cloud size={18} />,
      title: "Built on Cloud Platform",
      description: "Leverage the power of cloud computing and integrate it with great agility of our full-stack engineers to bring an innovative and secure ERP solution."
    },
    {
      icon: <Building size={18} />,
      title: "Enterprise Solutions",
      description: "Products designed to operate in a dynamic and disruptive enterprise environment vastly influenced by the advent of disruption in technology."
    },
    {
      icon: <Shield size={18} />,
      title: "Safe and Secure",
      description: "ERP Solutions developed with clean and efficient coding methodologies that protects the system and keeps the data secure."
    },
    {
      icon: <Brain size={18} />,
      title: "Embedded with AI",
      description: "Integrated Artificial Intelligence capabilities that makes the system smarter by implementing automation of activities powered by neural networks."
    },
    {
      icon: <Award size={18} />,
      title: "Reliable",
      description: "A 100% reliable ERP system that offers a robust work environment and has zero downtime."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex flex-col md:flex-row z-10">
        
        {/* LEFT IMAGE - 50% width full height */}
        <div className="relative md:w-1/2 h-[500px] md:h-auto overflow-hidden">
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-purple-500/20 z-0"></div>
          
          {/* Decorative corner elements */}
          <div className="absolute top-6 left-6 w-16 h-16 border-l-4 border-t-4 border-violet-500 rounded-tl-2xl z-10"></div>
          <div className="absolute bottom-6 right-6 w-16 h-16 border-r-4 border-b-4 border-purple-500 rounded-br-2xl z-10"></div>
          
          <img
            src={erpSolutionsImg}
            alt="ERP Solutions"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* RIGHT CONTENT - 50% width */}
        <div className="md:w-1/2 py-16 md:py-20 px-6 lg:px-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 text-violet-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
            Why Choose Us
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Modern, Integrated,{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Custom ERP Solutions
            </span>
          </h2>

          <p className="mt-3 text-gray-500 text-sm">
            Comprehensive ERP solutions tailored to your business needs
          </p>

          {/* Solutions Grid - 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl border border-violet-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 bg-white/40"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPSolutions;
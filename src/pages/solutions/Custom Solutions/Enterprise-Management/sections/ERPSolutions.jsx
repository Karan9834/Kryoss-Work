import React from 'react';
import { Globe, Cloud, Building, Shield, Brain, Award } from 'lucide-react';
import erpSolutionsImg from "../../../../../assets/Enterprise planning/3.....jpg";

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
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center order-1 md:order-1">
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -right-3 w-16 h-16 border-r-4 border-t-4 border-violet-500 rounded-tr-2xl"></div>
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-4 border-b-4 border-purple-500 rounded-bl-2xl"></div>

          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/20 to-purple-500/20 blur-2xl rounded-full"></div>

          <img
            src={erpSolutionsImg}
            alt="Why Choose Our ERP Solutions"
            className="relative w-full max-w-md rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-2 md:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 text-violet-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
            Why Choose Us
          </div>

          {/* Heading */}
          <h2 className="text-gray-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Modern, Integrated,{" "}
            <span className="leading-[1.2] bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Custom ERP Solutions
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Comprehensive ERP solutions tailored to your business needs. Our experienced ERP specialists
            help you align business goals with cutting-edge technology for maximum performance.
          </p>

          {/* Solutions Grid - 2 columns */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {solutions.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <span className="text-gray-700 text-xs leading-snug font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPSolutions;
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import customSoftwareImg from "../../../../assets/custom-software/software.png"; 

const WhatIsCustomSoftware = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-5">
              <span className="text-xs font-normal text-orange-700 tracking-wide">
                🔍 What Is Custom Software?
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-4">
              Built Exclusively for{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Your Business Needs
              </span>
            </h2>
            
            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-600">
              <p className="text-sm md:text-base font-normal leading-relaxed">
                Custom software is a tailor-made solution designed specifically to address your unique business 
                challenges and requirements. Unlike off-the-shelf products that offer one-size-fits-all functionality, 
                custom software is built from the ground up to align perfectly with your workflows, processes, 
                and growth objectives.
              </p>
              
              <p className="text-sm md:text-base font-normal leading-relaxed">
                From automating complex operations to integrating with existing systems, custom software empowers 
                businesses to scale efficiently, reduce manual errors, and gain a competitive edge. Whether you need 
                a customer portal, inventory management system, or enterprise resource planning tool, custom 
                development ensures you get exactly what you need — nothing more, nothing less.
              </p>
            </div>
            
            {/* Key Benefits List */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-700">Tailored to your workflow</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-700">Scalable & future-ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-700">Seamless integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-700">Enhanced security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-700">Dedicated support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-700">Competitive advantage</span>
              </div>
            </div>
          </div>
          
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            
            {/* Glowing orb effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/15 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl"></div>
            
            {/* Main image container with glass effect */}
            <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 shadow-xl border border-orange-200">
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-2xl"></div>
              
              {/* Image */}
              <img 
                src={customSoftwareImg}
                alt="Custom Software Development Illustration"
                className="relative w-full max-w-md lg:max-w-lg h-auto rounded-xl"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-orange-600/10 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating badge 1 */}
              <div className="absolute top-6 -left-3 bg-white shadow-lg rounded-lg px-3 py-2 border-l-4 border-orange-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-700">100% Customizable</span>
                </div>
              </div>
              
              {/* Floating badge 2 */}
              <div className="absolute bottom-6 -right-3 bg-white shadow-lg rounded-lg px-3 py-2 border-r-4 border-amber-500">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-700">Scalable Solutions</span>
                  <span className="text-sm">🚀</span>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default WhatIsCustomSoftware;
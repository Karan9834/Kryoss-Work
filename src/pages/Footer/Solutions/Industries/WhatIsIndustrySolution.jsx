import React from "react";
import { CheckCircle, ArrowRight, Building, Factory, Globe, Shield } from "lucide-react";
import industrySolutionImg from "../../../../assets/Indutries/industries.png"; // Update with your image path

const WhatIsIndustrySolution = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 border border-amber-200 mb-5">
              <span className="text-xs font-normal text-amber-700 tracking-wide">
                🏭 What Are Industry Solutions?
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-4">
              Tailored Technology for{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Your Sector's Success
              </span>
            </h2>
            
            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-600">
              <p className="text-sm md:text-base font-normal leading-relaxed">
                Industry solutions are specialized digital platforms and software systems designed to address 
                the unique challenges, workflows, and compliance requirements of specific business sectors. 
                Unlike generic software, these solutions are built with deep understanding of industry-specific 
                operations, regulations, and customer expectations.
              </p>
              
              <p className="text-sm md:text-base font-normal leading-relaxed">
                From healthcare to logistics, manufacturing to finance — industry solutions streamline operations, 
                enhance productivity, and drive innovation. They integrate seamlessly with existing systems, 
                ensure regulatory compliance, and provide actionable insights through advanced analytics, 
                helping businesses stay competitive in today's fast-paced digital economy.
              </p>
            </div>
            
            {/* Key Benefits List */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-gray-700">Industry-specific workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-gray-700">Process automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-gray-700">Scalable infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-gray-700">Regulatory compliance</span>
              </div>
            </div>
          </div>
          
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            
            {/* Glowing orb effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/15 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-500/15 rounded-full blur-2xl"></div>
            
            {/* Main image container with glass effect */}
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 shadow-xl border border-amber-200">
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-orange-500/10 rounded-2xl"></div>
              
              {/* Image */}
              <img 
                src={industrySolutionImg}
                alt="Industry Solutions Illustration"
                className="relative w-full max-w-md lg:max-w-lg h-auto rounded-xl"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-amber-600/10 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating badge 1 */}
              <div className="absolute top-6 -left-3 bg-white shadow-lg rounded-lg px-3 py-2 border-l-4 border-amber-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-700">11+ Industries Served</span>
                </div>
              </div>
              
              {/* Floating badge 2 */}
              <div className="absolute bottom-6 -right-3 bg-white shadow-lg rounded-lg px-3 py-2 border-r-4 border-orange-500">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-700">Enterprise Ready</span>
                  <span className="text-sm">🏭</span>
                </div>
              </div>
              
              {/* Floating badge 3 */}
              <div className="absolute top-1/2 -right-2 bg-white/90 backdrop-blur-sm shadow-md rounded-lg px-2 py-1 border border-amber-200">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-amber-500" />
                  <span className="text-xs font-medium text-gray-700">ISO Certified</span>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default WhatIsIndustrySolution;
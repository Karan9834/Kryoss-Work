import React from "react";
import { CheckCircle, ArrowRight, Zap, Clock, MapPin, CreditCard } from "lucide-react";
import onDemandImg from "../../../../assets/On-Demand/demand.png";

const WhatIsOnDemand = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-5">
              <span className="text-xs font-normal text-blue-700 tracking-wide">
                ⚡ What Is On-Demand Solution?
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-4">
              Instant Access to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Services You Need
              </span>
            </h2>
            
            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-600">
              <p className="text-sm md:text-base font-normal leading-relaxed">
                On-demand solutions are digital platforms that instantly connect consumers with service providers 
                at their convenience. Whether it's booking a ride, ordering food, or scheduling a home service, 
                these platforms deliver what you need, when you need it — with just a few taps on your smartphone.
              </p>
              
              <p className="text-sm md:text-base font-normal leading-relaxed">
                From real-time tracking to secure payments, on-demand apps have revolutionized how businesses 
                operate and how customers access services. They eliminate wait times, provide transparency, 
                and offer unparalleled convenience, making them the backbone of the modern digital economy.
              </p>
            </div>
            
            {/* Key Features List */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">Instant Service Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">Real-time Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">Secure Payments</span>
              </div>
            </div>
          </div>
          
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            
            {/* Glowing orb effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/15 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl"></div>
            
            {/* Main image container with glass effect */}
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 shadow-xl border border-blue-200">
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-2xl"></div>
              
              {/* Image */}
              <img 
                src={onDemandImg}
                alt="On-Demand Solutions Illustration"
                className="relative w-full max-w-md lg:max-w-lg h-auto rounded-xl"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating badge 1 */}
              <div className="absolute top-6 -left-3 bg-white shadow-lg rounded-lg px-3 py-2 border-l-4 border-blue-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-700">Real-time Tracking</span>
                </div>
              </div>
              
              {/* Floating badge 2 */}
              <div className="absolute bottom-6 -right-3 bg-white shadow-lg rounded-lg px-3 py-2 border-r-4 border-cyan-500">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-700">Instant Delivery</span>
                  <span className="text-sm">⚡</span>
                </div>
              </div>
              
              {/* Floating badge 3 */}
              <div className="absolute top-1/2 -right-2 bg-white/90 backdrop-blur-sm shadow-md rounded-lg px-2 py-1 border border-blue-200">
                <div className="flex items-center gap-1">
                  <CreditCard className="w-3 h-3 text-blue-500" />
                  <span className="text-xs font-medium text-gray-700">Secure Payments</span>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default WhatIsOnDemand;
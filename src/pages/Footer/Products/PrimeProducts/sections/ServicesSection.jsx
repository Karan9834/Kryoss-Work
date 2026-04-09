import React from "react";
import { useNavigate } from 'react-router-dom';
import { Plane, Building, Briefcase, List, Coins, CreditCard, Cloud, Calculator, Truck, Video, Newspaper, Landmark } from 'lucide-react';

const services = [
  { id: 1, icon: <Plane />, title: "Tour & Travel", description: "Tailored Tour & Travel solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/tour-travel" },
  { id: 2, icon: <Building />, title: "Real Estate", description: "Tailored Real Estate solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/real-estate" },
  { id: 3, icon: <Briefcase />, title: "Job Portals", description: "Tailored Job Portals solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/job-portals" },
  { id: 4, icon: <List />, title: "Business Directory", description: "Tailored Business Directory solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/business-directory" },
  { id: 5, icon: <Coins />, title: "Crypto & Exchange", description: "Tailored Crypto & Exchange solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/crypto" },
  { id: 6, icon: <CreditCard />, title: "POS Billing", description: "Tailored POS Billing solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/pos" },
  { id: 7, icon: <Cloud />, title: "SAAS Products", description: "Tailored SAAS Products solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/saas" },
  { id: 8, icon: <Calculator />, title: "Account & ERP", description: "Tailored Account & ERP solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/erp" },
  { id: 9, icon: <Truck />, title: "Transport & Logistics", description: "Tailored Transport & Logistics solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/transport" },
  { id: 10, icon: <Video />, title: "Video Conference", description: "Tailored Video Conference solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/video" },
  { id: 11, icon: <Newspaper />, title: "News & Magazine", description: "Tailored News & Magazine solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/news" },
  { id: 12, icon: <Landmark />, title: "BFSI & Finance", description: "Tailored BFSI & Finance solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/prime/finance" }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = (route) => {
    navigate(route);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Services We <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            We make business registration and compliance effortless.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative ${service.bgColor} border ${service.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full`}
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Icon with gradient background */}
              <div className={`relative z-10 w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <div className="text-white">
                  {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description - Fixed height to ensure consistency */}
              <p className="relative z-10 text-sm text-gray-600 leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              {/* Get Started Button - Now aligned at bottom */}
              <div className="relative z-10 mt-auto">
                <button
                  onClick={() => handleGetStarted(service.route)}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Get Started</span>
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Decorative shine effect */}
              <div className="absolute -inset-full group-hover:inset-0 transition-all duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
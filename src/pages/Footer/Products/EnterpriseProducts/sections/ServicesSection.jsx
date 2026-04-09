import React from "react";
import { useNavigate } from 'react-router-dom';
import { Users, Handshake, Newspaper, Hotel, Boxes, Settings, Activity, GraduationCap, BookOpen, PlusSquare, Calendar, Utensils } from 'lucide-react';

const services = [
  { id: 1, icon: <Users />, title: "HRM", description: "Tailored HRM solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/hrm" },
  { id: 2, icon: <Handshake />, title: "CRM", description: "Tailored CRM solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/crm" },
  { id: 3, icon: <Newspaper />, title: "NMS – News Management", description: "Tailored NMS – News Management solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/nms" },
  { id: 4, icon: <Hotel />, title: "HMS – Hotel Management", description: "Tailored HMS – Hotel Management solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/hms-hotel" },
  { id: 5, icon: <Boxes />, title: "IMS – Inventory Mgmt", description: "Tailored IMS – Inventory Mgmt solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/ims" },
  { id: 6, icon: <Settings />, title: "ERP", description: "Tailored ERP solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/erp" },
  { id: 7, icon: <Activity />, title: "HMS – Hospital Mgmt", description: "Tailored HMS – Hospital Mgmt solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/hms-hospital" },
  { id: 8, icon: <GraduationCap />, title: "SMS – School Mgmt", description: "Tailored SMS – School Mgmt solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/sms" },
  { id: 9, icon: <BookOpen />, title: "LMS – Learning Mgmt", description: "Tailored LMS – Learning Mgmt solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/lms" },
  { id: 10, icon: <PlusSquare />, title: "PMS – Pharmacy Mgmt", description: "Tailored PMS – Pharmacy Mgmt solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/pms" },
  { id: 11, icon: <Calendar />, title: "EMS – Event Mgmt", description: "Tailored EMS – Event Mgmt solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/ems" },
  { id: 12, icon: <Utensils />, title: "RMS – Restaurant Mgmt", description: "Tailored RMS – Restaurant Mgmt solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "/products/enterprise/rms" }
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
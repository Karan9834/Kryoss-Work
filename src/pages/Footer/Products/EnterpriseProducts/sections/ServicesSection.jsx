import React from "react";
import { useNavigate } from 'react-router-dom';
import { Users, Handshake, Newspaper, Hotel, Boxes, Settings, Activity, GraduationCap, BookOpen, PlusSquare, Calendar, Utensils, ArrowRight } from 'lucide-react';

const services = [
  { id: 1, icon: <Users />, title: "HRM", description: "Tailored HRM solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/hrm" },
  { id: 2, icon: <Handshake />, title: "CRM", description: "Tailored CRM solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/crm" },
  { id: 3, icon: <Newspaper />, title: "NMS – News Management", description: "Tailored NMS – News Management solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/nms" },
  { id: 4, icon: <Hotel />, title: "HMS – Hotel Management", description: "Tailored HMS – Hotel Management solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/hms-hotel" },
  { id: 5, icon: <Boxes />, title: "IMS – Inventory Mgmt", description: "Tailored IMS – Inventory Mgmt solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/ims" },
  { id: 6, icon: <Settings />, title: "ERP", description: "Tailored ERP solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/erp" },
  { id: 7, icon: <Activity />, title: "HMS – Hospital Mgmt", description: "Tailored HMS – Hospital Mgmt solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/hms-hospital" },
  { id: 8, icon: <GraduationCap />, title: "SMS – School Mgmt", description: "Tailored SMS – School Mgmt solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/sms" },
  { id: 9, icon: <BookOpen />, title: "LMS – Learning Mgmt", description: "Tailored LMS – Learning Mgmt solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/lms" },
  { id: 10, icon: <PlusSquare />, title: "PMS – Pharmacy Mgmt", description: "Tailored PMS – Pharmacy Mgmt solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/pms" },
  { id: 11, icon: <Calendar />, title: "EMS – Event Mgmt", description: "Tailored EMS – Event Mgmt solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/ems" },
  { id: 12, icon: <Utensils />, title: "RMS – Restaurant Mgmt", description: "Tailored RMS – Restaurant Mgmt solution", color: "from-blue-500 to-purple-500", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 to-purple-50", iconBg: "bg-gradient-to-br from-blue-500 to-purple-500", route: "/products/enterprise/rms" }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = (route) => {
    navigate(route);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24 overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Discover our comprehensive range of solutions tailored to meet your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleGetStarted(service.route)}
              className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden border border-gray-100`}
            >

              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '2px', margin: '-2px' }}>
                <div className="absolute inset-0 bg-white rounded-2xl"></div>
              </div>

              <div className="relative p-6 flex flex-col h-full">

                <div className="relative mb-5">
                  <div className={`absolute -inset-2 ${service.iconBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

                  <div className={`relative w-14 h-14 flex items-center justify-center rounded-xl ${service.iconBg} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {React.cloneElement(service.icon, { className: "w-7 h-7 text-white" })}
                  </div>
                </div>

                <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r ${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                <div className="relative mt-auto">
                  <button className="relative w-full px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
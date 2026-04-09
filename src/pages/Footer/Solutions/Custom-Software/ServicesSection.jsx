import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Briefcase, 
  Users, 
  Handshake, 
  Hotel, 
  Newspaper, 
  Utensils, 
  Settings, 
  Hospital, 
  School, 
  BookOpen, 
  Pill, 
  Bitcoin 
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Briefcase className="w-7 h-7" />,
    title: "Job Portal & App",
    description: "Complete job portal solution with resume parsing, AI matching, and employer dashboards.",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    route: "/solutions/job-portal",
  },
  {
    id: 2,
    icon: <Users className="w-7 h-7" />,
    title: "Human Resource Mgmt",
    description: "Streamline HR operations with payroll, attendance, performance tracking, and recruitment.",
    color: "from-rose-500 to-orange-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    route: "/solutions/hrm",
  },
  {
    id: 3,
    icon: <Handshake className="w-7 h-7" />,
    title: "Customer Relationship",
    description: "Manage leads, track interactions, and boost sales with intelligent CRM solutions.",
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    route: "/solutions/crm",
  },
  {
    id: 4,
    icon: <Hotel className="w-7 h-7" />,
    title: "Hotel Management",
    description: "All-in-one hotel software for bookings, check-ins, billing, and housekeeping.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    route: "/solutions/hotel-mgmt",
  },
  {
    id: 5,
    icon: <Newspaper className="w-7 h-7" />,
    title: "News Management",
    description: "Content management system for news portals with SEO and multi-platform publishing.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    route: "/solutions/news-mgmt",
  },
  {
    id: 6,
    icon: <Utensils className="w-7 h-7" />,
    title: "Restaurant Mgmt",
    description: "POS system, online ordering, inventory tracking, and table reservation software.",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    route: "/solutions/restaurant-mgmt",
  },
  {
    id: 7,
    icon: <Settings className="w-7 h-7" />,
    title: "Enterprise Planning (ERP)",
    description: "Integrated ERP solutions for finance, supply chain, manufacturing, and HR.",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    route: "/solutions/erp",
  },
  {
    id: 8,
    icon: <Hospital className="w-7 h-7" />,
    title: "Hospital Management",
    description: "Complete hospital information system for patient records, appointments, and billing.",
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    route: "/solutions/hospital-mgmt",
  },
  {
    id: 9,
    icon: <School className="w-7 h-7" />,
    title: "School Management",
    description: "School ERP with student records, fees management, exams, and parent communication.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    route: "/solutions/school-mgmt",
  },
  {
    id: 10,
    icon: <BookOpen className="w-7 h-7" />,
    title: "Learning Management",
    description: "LMS platform for online courses, assessments, certificates, and student progress tracking.",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    route: "/solutions/lms",
  },
  {
    id: 11,
    icon: <Pill className="w-7 h-7" />,
    title: "Pharmacy Management",
    description: "Inventory management, prescription tracking, billing, and supplier management system.",
    color: "from-teal-500 to-green-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    route: "/solutions/pharmacy-mgmt",
  },
  {
    id: 12,
    icon: <Bitcoin className="w-7 h-7" />,
    title: "Crypto & Exchange App",
    description: "Secure cryptocurrency exchange platform with wallet integration and real-time trading.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    route: "/solutions/crypto-exchange",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = (route) => {
    navigate(route);
  };

  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading - Mobile: 30px, Desktop: 36px, Weight: 700 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-normal text-orange-700 tracking-wide">
              🔥 Services We Offer
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-3">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-normal">
            We make technical compliance certifications effortless and convenient.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative ${service.bgColor} border ${service.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full`}
            >
              {/* Ember gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon Container - Ember themed */}
              <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-xl ${service.iconBg} shadow-md mb-5 group-hover:scale-110 transition-all duration-300`}>
                <div className={`${service.iconColor}`}>
                  {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                </div>
              </div>

              {/* Project Subtitle - Mobile: 24px, Desktop: 30px, Weight: 700 */}
              <h3 className="relative z-10 text-2xl md:text-[1.875rem] font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors duration-300 leading-tight">
                {service.title}
              </h3>

              {/* Description Text - Mobile: 14px, Desktop: 16px, Weight: 400 */}
              <p className="relative z-10 text-sm md:text-base font-normal text-gray-600 leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              {/* Get Started Button - Ember themed */}
              <div className="relative z-10 mt-auto">
                <button
                  onClick={() => handleGetStarted(service.route)}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn"
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

              {/* Animated bottom border */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-300`}></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-6">
          <p className="text-gray-500 text-sm md:text-base font-normal">
            Transform your business with our enterprise-grade software solutions
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;
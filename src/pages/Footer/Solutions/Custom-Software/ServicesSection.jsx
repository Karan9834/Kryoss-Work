import React from "react";
import { useNavigate } from 'react-router-dom';
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
  , ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Briefcase className="w-7 h-7" />,
    title: "Job Portal & App",
    description: "Complete job portal solution with resume parsing, AI matching, and employer dashboards.",
    color: "from-orange-500 to-amber-600", gradient: "from-orange-600 to-amber-700", bgGradient: "from-orange-50 to-amber-50", iconBg: "bg-gradient-to-br from-orange-500 to-amber-600",
    iconColor: "text-orange-600",
    route: "/solutions/job-portal",
  },
  {
    id: 2,
    icon: <Users className="w-7 h-7" />,
    title: "Human Resource Mgmt",
    description: "Streamline HR operations with payroll, attendance, performance tracking, and recruitment.",
    color: "from-rose-500 to-orange-500", gradient: "from-rose-600 to-orange-600", bgGradient: "from-rose-50 to-orange-50", iconBg: "bg-gradient-to-br from-rose-500 to-orange-500",
    iconColor: "text-rose-600",
    route: "/solutions/hrm",
  },
  {
    id: 3,
    icon: <Handshake className="w-7 h-7" />,
    title: "Customer Relationship",
    description: "Manage leads, track interactions, and boost sales with intelligent CRM solutions.",
    color: "from-amber-500 to-yellow-600", gradient: "from-amber-600 to-yellow-700", bgGradient: "from-amber-50 to-yellow-50", iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
    iconColor: "text-amber-600",
    route: "/solutions/crm",
  },
  {
    id: 4,
    icon: <Hotel className="w-7 h-7" />,
    title: "Hotel Management",
    description: "All-in-one hotel software for bookings, check-ins, billing, and housekeeping.",
    color: "from-emerald-500 to-teal-600", gradient: "from-emerald-600 to-teal-700", bgGradient: "from-emerald-50 to-teal-50", iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    iconColor: "text-emerald-600",
    route: "/solutions/hotel-mgmt",
  },
  {
    id: 5,
    icon: <Newspaper className="w-7 h-7" />,
    title: "News Management",
    description: "Content management system for news portals with SEO and multi-platform publishing.",
    color: "from-blue-500 to-indigo-600", gradient: "from-blue-600 to-indigo-700", bgGradient: "from-blue-50 to-indigo-50", iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    iconColor: "text-blue-600",
    route: "/solutions/news-mgmt",
  },
  {
    id: 6,
    icon: <Utensils className="w-7 h-7" />,
    title: "Restaurant Mgmt",
    description: "POS system, online ordering, inventory tracking, and table reservation software.",
    color: "from-orange-500 to-red-600", gradient: "from-orange-600 to-red-700", bgGradient: "from-orange-50 to-red-50", iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
    iconColor: "text-orange-600",
    route: "/solutions/restaurant-mgmt",
  },
  {
    id: 7,
    icon: <Settings className="w-7 h-7" />,
    title: "Enterprise Planning (ERP)",
    description: "Integrated ERP solutions for finance, supply chain, manufacturing, and HR.",
    color: "from-purple-500 to-indigo-600", gradient: "from-purple-600 to-indigo-700", bgGradient: "from-purple-50 to-indigo-50", iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
    iconColor: "text-purple-600",
    route: "/solutions/erp",
  },
  {
    id: 8,
    icon: <Hospital className="w-7 h-7" />,
    title: "Hospital Management",
    description: "Complete hospital information system for patient records, appointments, and billing.",
    color: "from-red-500 to-pink-600", gradient: "from-red-600 to-pink-700", bgGradient: "from-red-50 to-pink-50", iconBg: "bg-gradient-to-br from-red-500 to-pink-600",
    iconColor: "text-red-600",
    route: "/solutions/hospital-mgmt",
  },
  {
    id: 9,
    icon: <School className="w-7 h-7" />,
    title: "School Management",
    description: "School ERP with student records, fees management, exams, and parent communication.",
    color: "from-green-500 to-emerald-600", gradient: "from-green-600 to-emerald-700", bgGradient: "from-green-50 to-emerald-50", iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
    iconColor: "text-green-600",
    route: "/solutions/school-mgmt",
  },
  {
    id: 10,
    icon: <BookOpen className="w-7 h-7" />,
    title: "Learning Management",
    description: "LMS platform for online courses, assessments, certificates, and student progress tracking.",
    color: "from-cyan-500 to-blue-600", gradient: "from-cyan-600 to-blue-700", bgGradient: "from-cyan-50 to-blue-50", iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
    iconColor: "text-cyan-600",
    route: "/solutions/lms",
  },
  {
    id: 11,
    icon: <Pill className="w-7 h-7" />,
    title: "Pharmacy Management",
    description: "Inventory management, prescription tracking, billing, and supplier management system.",
    color: "from-teal-500 to-green-600", gradient: "from-teal-600 to-green-700", bgGradient: "from-teal-50 to-green-50", iconBg: "bg-gradient-to-br from-teal-500 to-green-600",
    iconColor: "text-teal-600",
    route: "/solutions/pharmacy-mgmt",
  },
  {
    id: 12,
    icon: <Bitcoin className="w-7 h-7" />,
    title: "Crypto & Exchange App",
    description: "Secure cryptocurrency exchange platform with wallet integration and real-time trading.",
    color: "from-amber-500 to-orange-600", gradient: "from-amber-600 to-orange-700", bgGradient: "from-amber-50 to-orange-50", iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
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
    <section className="relative bg-gradient-to-br from-rose-50 via-white to-rose-50 py-16 md:py-24 overflow-hidden">

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
                  <button className="relative w-full px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 cursor-pointer">
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
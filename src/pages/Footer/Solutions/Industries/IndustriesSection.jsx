import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  Hospital,
  GraduationCap,
  ShoppingBag,
  Building,
  Truck,
  Landmark,
  Users,
  Film,
  Newspaper,
  Utensils,
  Plane
  , ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Hospital className="w-7 h-7" />,
    title: "Healthcare",
    description: "Digital solutions for hospitals, clinics, telemedicine platforms, and patient management systems.",
    color: "from-blue-500 to-cyan-600", gradient: "from-blue-600 to-cyan-700", bgGradient: "from-blue-50 to-cyan-50", iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    iconColor: "text-blue-600",
    route: "/industries/healthcare",
  },
  {
    id: 2,
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Education",
    description: "LMS platforms, virtual classrooms, student management, and e-learning solutions for institutions.",
    color: "from-green-500 to-emerald-600", gradient: "from-green-600 to-emerald-700", bgGradient: "from-green-50 to-emerald-50", iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
    iconColor: "text-green-600",
    route: "/industries/education",
  },
  {
    id: 3,
    icon: <ShoppingBag className="w-7 h-7" />,
    title: "E-commerce",
    description: "Online stores, marketplace platforms, inventory management, and payment gateway integration.",
    color: "from-purple-500 to-indigo-600", gradient: "from-purple-600 to-indigo-700", bgGradient: "from-purple-50 to-indigo-50", iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
    iconColor: "text-purple-600",
    route: "/industries/ecommerce",
  },
  {
    id: 4,
    icon: <Building className="w-7 h-7" />,
    title: "Real Estate",
    description: "Property listing platforms, virtual tours, CRM for agents, and mortgage management systems.",
    color: "from-orange-500 to-red-600", gradient: "from-orange-600 to-red-700", bgGradient: "from-orange-50 to-red-50", iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
    iconColor: "text-orange-600",
    route: "/industries/real-estate",
  },
  {
    id: 5,
    icon: <Truck className="w-7 h-7" />,
    title: "Logistics",
    description: "Fleet management, route optimization, warehouse management, and real-time tracking solutions.",
    color: "from-cyan-500 to-teal-600", gradient: "from-cyan-600 to-teal-700", bgGradient: "from-cyan-50 to-teal-50", iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
    iconColor: "text-cyan-600",
    route: "/industries/logistics",
  },
  {
    id: 6,
    icon: <Landmark className="w-7 h-7" />,
    title: "Finance",
    description: "Banking solutions, payment gateways, investment platforms, and secure financial management systems.",
    color: "from-emerald-500 to-green-600", gradient: "from-emerald-600 to-green-700", bgGradient: "from-emerald-50 to-green-50", iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    iconColor: "text-emerald-600",
    route: "/industries/finance",
  },
  {
    id: 7,
    icon: <Users className="w-7 h-7" />,
    title: "Social Networking",
    description: "Community platforms, messaging apps, content sharing, and engagement analytics solutions.",
    color: "from-pink-500 to-rose-600", gradient: "from-pink-600 to-rose-700", bgGradient: "from-pink-50 to-rose-50", iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
    iconColor: "text-pink-600",
    route: "/industries/social-networking",
  },
  {
    id: 8,
    icon: <Film className="w-7 h-7" />,
    title: "Entertainment",
    description: "Streaming platforms, gaming solutions, content management, and subscription billing systems.",
    color: "from-indigo-500 to-purple-600", gradient: "from-indigo-600 to-purple-700", bgGradient: "from-indigo-50 to-purple-50", iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    iconColor: "text-indigo-600",
    route: "/industries/entertainment",
  },
  {
    id: 9,
    icon: <Newspaper className="w-7 h-7" />,
    title: "News & Media",
    description: "Digital publishing, content management, ad platforms, and real-time news delivery systems.",
    color: "from-red-500 to-pink-600", gradient: "from-red-600 to-pink-700", bgGradient: "from-red-50 to-pink-50", iconBg: "bg-gradient-to-br from-red-500 to-pink-600",
    iconColor: "text-red-600",
    route: "/industries/news-media",
  },
  {
    id: 10,
    icon: <Utensils className="w-7 h-7" />,
    title: "Food & Restaurant",
    description: "POS systems, online ordering, delivery management, and table reservation platforms.",
    color: "from-amber-500 to-yellow-600", gradient: "from-amber-600 to-yellow-700", bgGradient: "from-amber-50 to-yellow-50", iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
    iconColor: "text-amber-600",
    route: "/industries/food-restaurant",
  },
  {
    id: 11,
    icon: <Plane className="w-7 h-7" />,
    title: "Travel & Tourism",
    description: "Booking engines, itinerary planning, hotel management, and travel agency solutions.",
    color: "from-teal-500 to-cyan-600", gradient: "from-teal-600 to-cyan-700", bgGradient: "from-teal-50 to-cyan-50", iconBg: "bg-gradient-to-br from-teal-500 to-cyan-600",
    iconColor: "text-teal-600",
    route: "/industries/travel-tourism",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = (route) => {
    navigate(route);
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16 md:py-24 overflow-hidden">

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
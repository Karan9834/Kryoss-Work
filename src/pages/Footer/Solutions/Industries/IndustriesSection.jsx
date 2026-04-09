import React from "react";
import { useNavigate } from "react-router-dom";
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
} from "lucide-react";

const industries = [
  {
    id: 1,
    icon: <Hospital className="w-7 h-7" />,
    title: "Healthcare",
    description: "Digital solutions for hospitals, clinics, telemedicine platforms, and patient management systems.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    route: "/industries/healthcare",
  },
  {
    id: 2,
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Education",
    description: "LMS platforms, virtual classrooms, student management, and e-learning solutions for institutions.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    route: "/industries/education",
  },
  {
    id: 3,
    icon: <ShoppingBag className="w-7 h-7" />,
    title: "E-commerce",
    description: "Online stores, marketplace platforms, inventory management, and payment gateway integration.",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    route: "/industries/ecommerce",
  },
  {
    id: 4,
    icon: <Building className="w-7 h-7" />,
    title: "Real Estate",
    description: "Property listing platforms, virtual tours, CRM for agents, and mortgage management systems.",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    route: "/industries/real-estate",
  },
  {
    id: 5,
    icon: <Truck className="w-7 h-7" />,
    title: "Logistics",
    description: "Fleet management, route optimization, warehouse management, and real-time tracking solutions.",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    route: "/industries/logistics",
  },
  {
    id: 6,
    icon: <Landmark className="w-7 h-7" />,
    title: "Finance",
    description: "Banking solutions, payment gateways, investment platforms, and secure financial management systems.",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    route: "/industries/finance",
  },
  {
    id: 7,
    icon: <Users className="w-7 h-7" />,
    title: "Social Networking",
    description: "Community platforms, messaging apps, content sharing, and engagement analytics solutions.",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    route: "/industries/social-networking",
  },
  {
    id: 8,
    icon: <Film className="w-7 h-7" />,
    title: "Entertainment",
    description: "Streaming platforms, gaming solutions, content management, and subscription billing systems.",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    route: "/industries/entertainment",
  },
  {
    id: 9,
    icon: <Newspaper className="w-7 h-7" />,
    title: "News & Media",
    description: "Digital publishing, content management, ad platforms, and real-time news delivery systems.",
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    route: "/industries/news-media",
  },
  {
    id: 10,
    icon: <Utensils className="w-7 h-7" />,
    title: "Food & Restaurant",
    description: "POS systems, online ordering, delivery management, and table reservation platforms.",
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    route: "/industries/food-restaurant",
  },
  {
    id: 11,
    icon: <Plane className="w-7 h-7" />,
    title: "Travel & Tourism",
    description: "Booking engines, itinerary planning, hotel management, and travel agency solutions.",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    route: "/industries/travel-tourism",
  },
];

const IndustriesSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = (route) => {
    navigate(route);
  };

  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 border border-amber-200 mb-5">
            <span className="text-xs font-normal text-amber-700 tracking-wide">
              🏭 Industries We Serve
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-3">
            Solutions for{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-normal">
            Tailored digital solutions across 11+ industries to transform your business
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={`group relative ${industry.bgColor} border ${industry.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-xl ${industry.iconBg} shadow-md mb-5 group-hover:scale-110 transition-all duration-300`}>
                <div className={industry.iconColor}>
                  {React.cloneElement(industry.icon, { className: "w-7 h-7" })}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:opacity-80 transition-all duration-300 leading-tight">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm md:text-base font-normal text-gray-600 leading-relaxed mb-5 flex-grow">
                {industry.description}
              </p>

              {/* Get Started Button */}
              <div className="relative z-10 mt-auto">
                <button
                  onClick={() => handleGetStarted(industry.route)}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-gray-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Solutions</span>
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
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${industry.color} group-hover:w-full transition-all duration-300`}></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-6">
          <p className="text-gray-500 text-sm md:text-base font-normal">
            Transform your industry with our cutting-edge digital solutions
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default IndustriesSection;
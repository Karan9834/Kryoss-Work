import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Wrench,
  Shirt,
  Key,
  Video,
  Pill,
  Film,
  Wallet,
  Tag,
  Dumbbell,
  Stethoscope,
  Package,
  Truck
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Wrench className="w-7 h-7" />,
    title: "Mechanics App",
    description: "Connect customers with nearby mechanics for vehicle repair and maintenance services on-demand.",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    route: "/solutions/mechanics-app",
  },
  {
    id: 2,
    icon: <Shirt className="w-7 h-7" />,
    title: "Laundry App",
    description: "On-demand laundry and dry cleaning service with pickup, tracking, and delivery management.",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    route: "/solutions/laundry-app",
  },
  {
    id: 3,
    icon: <Key className="w-7 h-7" />,
    title: "Car Rental App",
    description: "Self-drive car rental platform with vehicle tracking, booking management, and payment integration.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    route: "/solutions/car-rental",
  },
  {
    id: 4,
    icon: <Video className="w-7 h-7" />,
    title: "Video Conferencing App",
    description: "High-quality video meeting platform with screen sharing, recording, and team collaboration features.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    route: "/solutions/video-conf",
  },
  {
    id: 5,
    icon: <Pill className="w-7 h-7" />,
    title: "Medicine Delivery App",
    description: "Online pharmacy platform with prescription upload, medicine delivery, and health tracking.",
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    route: "/solutions/medicine-delivery",
  },
  {
    id: 6,
    icon: <Film className="w-7 h-7" />,
    title: "Short Video App",
    description: "TikTok-style short video platform with filters, effects, likes, comments, and sharing features.",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    route: "/solutions/short-video",
  },
  {
    id: 7,
    icon: <Wallet className="w-7 h-7" />,
    title: "E-Wallet App",
    description: "Digital wallet solution with money transfer, bill payments, QR code scanning, and transaction history.",
    color: "from-teal-500 to-green-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    route: "/solutions/ewallet-app",
  },
  {
    id: 8,
    icon: <Tag className="w-7 h-7" />,
    title: "Classified App",
    description: "Online marketplace for buying and selling products with location-based search and chat features.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    route: "/solutions/classified-app",
  },
  {
    id: 9,
    icon: <Dumbbell className="w-7 h-7" />,
    title: "Fitness App",
    description: "Workout tracking platform with exercise videos, progress monitoring, and diet planning features.",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    route: "/solutions/fitness-app",
  },
  {
    id: 10,
    icon: <Stethoscope className="w-7 h-7" />,
    title: "Doctor Appointment App",
    description: "Healthcare platform for booking doctor appointments, video consultations, and medical records.",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    route: "/solutions/doctor-appointment",
  },
  {
    id: 11,
    icon: <Package className="w-7 h-7" />,
    title: "Courier Delivery App",
    description: "Parcel delivery platform with real-time tracking, delivery scheduling, and proof of delivery.",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    route: "/solutions/courier-delivery",
  },
  {
    id: 12,
    icon: <Truck className="w-7 h-7" />,
    title: "Logistics App",
    description: "Supply chain management platform with fleet tracking, route optimization, and warehouse management.",
    color: "from-slate-500 to-gray-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    route: "/solutions/logistics-app",
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
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-5">
            <span className="text-xs font-normal text-blue-700 tracking-wide">
              ⚡ On-Demand Solutions
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-3">
            Services We{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-normal">
            Launch your on-demand business with our ready-to-deploy solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative ${service.bgColor} border ${service.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-xl ${service.iconBg} shadow-md mb-5 group-hover:scale-110 transition-all duration-300`}>
                <div className={service.iconColor}>
                  {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm md:text-base font-normal text-gray-600 leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              {/* Get Started Button */}
              <div className="relative z-10 mt-auto">
                <button
                  onClick={() => handleGetStarted(service.route)}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn"
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
            Transform your business idea into a fully functional on-demand platform
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;
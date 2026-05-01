import React from "react";
import { useNavigate } from 'react-router-dom';
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
  , ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Wrench className="w-7 h-7" />,
    title: "Mechanics App",
    description: "Connect customers with nearby mechanics for vehicle repair and maintenance services on-demand.",
    color: "from-orange-500 to-red-600", gradient: "from-orange-600 to-red-700", bgGradient: "from-orange-50 to-red-50", iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
    iconColor: "text-orange-600",
    route: "/solutions/mechanics-app",
  },
  {
    id: 2,
    icon: <Shirt className="w-7 h-7" />,
    title: "Laundry App",
    description: "On-demand laundry and dry cleaning service with pickup, tracking, and delivery management.",
    color: "from-purple-500 to-indigo-600", gradient: "from-purple-600 to-indigo-700", bgGradient: "from-purple-50 to-indigo-50", iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
    iconColor: "text-purple-600",
    route: "/solutions/laundry-app",
  },
  {
    id: 3,
    icon: <Key className="w-7 h-7" />,
    title: "Car Rental App",
    description: "Self-drive car rental platform with vehicle tracking, booking management, and payment integration.",
    color: "from-green-500 to-emerald-600", gradient: "from-green-600 to-emerald-700", bgGradient: "from-green-50 to-emerald-50", iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
    iconColor: "text-green-600",
    route: "/solutions/car-rental",
  },
  {
    id: 4,
    icon: <Video className="w-7 h-7" />,
    title: "Video Conferencing App",
    description: "High-quality video meeting platform with screen sharing, recording, and team collaboration features.",
    color: "from-blue-500 to-cyan-600", gradient: "from-blue-600 to-cyan-700", bgGradient: "from-blue-50 to-cyan-50", iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    iconColor: "text-blue-600",
    route: "/solutions/video-conf",
  },
  {
    id: 5,
    icon: <Pill className="w-7 h-7" />,
    title: "Medicine Delivery App",
    description: "Online pharmacy platform with prescription upload, medicine delivery, and health tracking.",
    color: "from-red-500 to-pink-600", gradient: "from-red-600 to-pink-700", bgGradient: "from-red-50 to-pink-50", iconBg: "bg-gradient-to-br from-red-500 to-pink-600",
    iconColor: "text-red-600",
    route: "/solutions/medicine-delivery",
  },
  {
    id: 6,
    icon: <Film className="w-7 h-7" />,
    title: "Short Video App",
    description: "TikTok-style short video platform with filters, effects, likes, comments, and sharing features.",
    color: "from-rose-500 to-pink-600", gradient: "from-rose-600 to-pink-700", bgGradient: "from-rose-50 to-pink-50", iconBg: "bg-gradient-to-br from-rose-500 to-pink-600",
    iconColor: "text-rose-600",
    route: "/solutions/short-video",
  },
  {
    id: 7,
    icon: <Wallet className="w-7 h-7" />,
    title: "E-Wallet App",
    description: "Digital wallet solution with money transfer, bill payments, QR code scanning, and transaction history.",
    color: "from-teal-500 to-green-600", gradient: "from-teal-600 to-green-700", bgGradient: "from-teal-50 to-green-50", iconBg: "bg-gradient-to-br from-teal-500 to-green-600",
    iconColor: "text-teal-600",
    route: "/solutions/ewallet-app",
  },
  {
    id: 8,
    icon: <Tag className="w-7 h-7" />,
    title: "Classified App",
    description: "Online marketplace for buying and selling products with location-based search and chat features.",
    color: "from-amber-500 to-orange-600", gradient: "from-amber-600 to-orange-700", bgGradient: "from-amber-50 to-orange-50", iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
    iconColor: "text-amber-600",
    route: "/solutions/classified-app",
  },
  {
    id: 9,
    icon: <Dumbbell className="w-7 h-7" />,
    title: "Fitness App",
    description: "Workout tracking platform with exercise videos, progress monitoring, and diet planning features.",
    color: "from-emerald-500 to-green-600", gradient: "from-emerald-600 to-green-700", bgGradient: "from-emerald-50 to-green-50", iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    iconColor: "text-emerald-600",
    route: "/solutions/fitness-app",
  },
  {
    id: 10,
    icon: <Stethoscope className="w-7 h-7" />,
    title: "Doctor Appointment App",
    description: "Healthcare platform for booking doctor appointments, video consultations, and medical records.",
    color: "from-cyan-500 to-blue-600", gradient: "from-cyan-600 to-blue-700", bgGradient: "from-cyan-50 to-blue-50", iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
    iconColor: "text-cyan-600",
    route: "/solutions/doctor-appointment",
  },
  {
    id: 11,
    icon: <Package className="w-7 h-7" />,
    title: "Courier Delivery App",
    description: "Parcel delivery platform with real-time tracking, delivery scheduling, and proof of delivery.",
    color: "from-indigo-500 to-purple-600", gradient: "from-indigo-600 to-purple-700", bgGradient: "from-indigo-50 to-purple-50", iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    iconColor: "text-indigo-600",
    route: "/solutions/courier-delivery",
  },
  {
    id: 12,
    icon: <Truck className="w-7 h-7" />,
    title: "Logistics App",
    description: "Supply chain management platform with fleet tracking, route optimization, and warehouse management.",
    color: "from-slate-500 to-gray-600", gradient: "from-slate-600 to-gray-700", bgGradient: "from-slate-50 to-gray-50", iconBg: "bg-gradient-to-br from-slate-500 to-gray-600",
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
    <section className="relative bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24 overflow-hidden">

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
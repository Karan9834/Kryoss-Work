import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  Car,
  Utensils,
  ShoppingCart,
  Scissors,
  Tv,
  Heart,
  Sparkles,
  Home,
  ShoppingBag,
  List,
  Building,
  Hotel
  , ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Car className="w-8 h-8" />,
    title: "Taxi Booking App",
    description: "Launch your own ride-hailing platform with real-time tracking, fare calculation, and driver management.",
    color: "from-yellow-500 to-orange-500", gradient: "from-yellow-600 to-orange-600", bgGradient: "from-yellow-50 to-orange-50", iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
    route: "/solutions/taxi-booking",
  },
  {
    id: 2,
    icon: <Utensils className="w-8 h-8" />,
    title: "Food Delivery App",
    description: "Build a feature-rich food delivery app with restaurant onboarding, order tracking, and payment integration.",
    color: "from-red-500 to-orange-500", gradient: "from-red-600 to-orange-600", bgGradient: "from-red-50 to-orange-50", iconBg: "bg-gradient-to-br from-red-500 to-orange-500",
    route: "/solutions/food-delivery",
  },
  {
    id: 3,
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Grocery Delivery App",
    description: "Create an on-demand grocery delivery platform with inventory management and scheduled delivery.",
    color: "from-green-500 to-emerald-500", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 to-emerald-50", iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    route: "/solutions/grocery-delivery",
  },
  {
    id: 4,
    icon: <Scissors className="w-8 h-8" />,
    title: "Salon & Beauty App",
    description: "Develop a beauty service booking app with stylist profiles, appointment scheduling, and reviews.",
    color: "from-pink-500 to-rose-500", gradient: "from-pink-600 to-rose-600", bgGradient: "from-pink-50 to-rose-50", iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
    route: "/solutions/salon-beauty",
  },
  {
    id: 5,
    icon: <Tv className="w-8 h-8" />,
    title: "OTT App Development",
    description: "Build a streaming platform with video hosting, subscription plans, and multi-device support.",
    color: "from-purple-500 to-indigo-500", gradient: "from-purple-600 to-indigo-600", bgGradient: "from-purple-50 to-indigo-50", iconBg: "bg-gradient-to-br from-purple-500 to-indigo-500",
    route: "/solutions/ott-app",
  },
  {
    id: 6,
    icon: <Heart className="w-8 h-8" />,
    title: "Matrimony App",
    description: "Create a matchmaking platform with profile verification, intelligent matching, and chat features.",
    color: "from-red-500 to-pink-500", gradient: "from-red-600 to-pink-600", bgGradient: "from-red-50 to-pink-50", iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
    route: "/solutions/matrimony-app",
  },
  {
    id: 7,
    icon: <Sparkles className="w-8 h-8" />,
    title: "Dating App Development",
    description: "Build a modern dating app with swipe features, geolocation, and real-time messaging.",
    color: "from-purple-500 to-pink-500", gradient: "from-purple-600 to-pink-600", bgGradient: "from-purple-50 to-pink-50", iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    route: "/solutions/dating-app",
  },
  {
    id: 8,
    icon: <Home className="w-8 h-8" />,
    title: "Home Service App",
    description: "Launch a handyman service platform with service provider onboarding and booking management.",
    color: "from-blue-500 to-cyan-500", gradient: "from-blue-600 to-cyan-600", bgGradient: "from-blue-50 to-cyan-50", iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    route: "/solutions/home-service",
  },
  {
    id: 9,
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "E-Commerce App",
    description: "Create a full-featured online store with product catalog, cart, payments, and order tracking.",
    color: "from-indigo-500 to-purple-500", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 to-purple-50", iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
    route: "/solutions/ecommerce-app",
  },
  {
    id: 10,
    icon: <List className="w-8 h-8" />,
    title: "Business Directory App",
    description: "Build a local business listing platform with reviews, maps, and contact information.",
    color: "from-teal-500 to-green-500", gradient: "from-teal-600 to-green-600", bgGradient: "from-teal-50 to-green-50", iconBg: "bg-gradient-to-br from-teal-500 to-green-500",
    route: "/solutions/business-directory",
  },
  {
    id: 11,
    icon: <Building className="w-8 h-8" />,
    title: "Real Estate App",
    description: "Develop a property listing platform with virtual tours, agent profiles, and mortgage calculators.",
    color: "from-blue-500 to-indigo-500", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 to-indigo-50", iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
    route: "/solutions/real-estate-app",
  },
  {
    id: 12,
    icon: <Hotel className="w-8 h-8" />,
    title: "Hotel Booking App",
    description: "Create a hotel reservation platform with room booking, payment gateway, and review system.",
    color: "from-amber-500 to-orange-500", gradient: "from-amber-600 to-orange-600", bgGradient: "from-amber-50 to-orange-50", iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    route: "/solutions/hotel-booking",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = (route) => {
    navigate(route);
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 md:py-24 overflow-hidden">

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
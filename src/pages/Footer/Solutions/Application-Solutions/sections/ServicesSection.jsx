import React from "react";
import { useNavigate } from "react-router-dom";
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
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Car className="w-8 h-8" />,
    title: "Taxi Booking App",
    description: "Launch your own ride-hailing platform with real-time tracking, fare calculation, and driver management.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    route: "/solutions/taxi-booking",
  },
  {
    id: 2,
    icon: <Utensils className="w-8 h-8" />,
    title: "Food Delivery App",
    description: "Build a feature-rich food delivery app with restaurant onboarding, order tracking, and payment integration.",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    route: "/solutions/food-delivery",
  },
  {
    id: 3,
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Grocery Delivery App",
    description: "Create an on-demand grocery delivery platform with inventory management and scheduled delivery.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    route: "/solutions/grocery-delivery",
  },
  {
    id: 4,
    icon: <Scissors className="w-8 h-8" />,
    title: "Salon & Beauty App",
    description: "Develop a beauty service booking app with stylist profiles, appointment scheduling, and reviews.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    route: "/solutions/salon-beauty",
  },
  {
    id: 5,
    icon: <Tv className="w-8 h-8" />,
    title: "OTT App Development",
    description: "Build a streaming platform with video hosting, subscription plans, and multi-device support.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    route: "/solutions/ott-app",
  },
  {
    id: 6,
    icon: <Heart className="w-8 h-8" />,
    title: "Matrimony App",
    description: "Create a matchmaking platform with profile verification, intelligent matching, and chat features.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    route: "/solutions/matrimony-app",
  },
  {
    id: 7,
    icon: <Sparkles className="w-8 h-8" />,
    title: "Dating App Development",
    description: "Build a modern dating app with swipe features, geolocation, and real-time messaging.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    route: "/solutions/dating-app",
  },
  {
    id: 8,
    icon: <Home className="w-8 h-8" />,
    title: "Home Service App",
    description: "Launch a handyman service platform with service provider onboarding and booking management.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    route: "/solutions/home-service",
  },
  {
    id: 9,
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "E-Commerce App",
    description: "Create a full-featured online store with product catalog, cart, payments, and order tracking.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    route: "/solutions/ecommerce-app",
  },
  {
    id: 10,
    icon: <List className="w-8 h-8" />,
    title: "Business Directory App",
    description: "Build a local business listing platform with reviews, maps, and contact information.",
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    route: "/solutions/business-directory",
  },
  {
    id: 11,
    icon: <Building className="w-8 h-8" />,
    title: "Real Estate App",
    description: "Develop a property listing platform with virtual tours, agent profiles, and mortgage calculators.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    route: "/solutions/real-estate-app",
  },
  {
    id: 12,
    icon: <Hotel className="w-8 h-8" />,
    title: "Hotel Booking App",
    description: "Create a hotel reservation platform with room booking, payment gateway, and review system.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    route: "/solutions/hotel-booking",
  },
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
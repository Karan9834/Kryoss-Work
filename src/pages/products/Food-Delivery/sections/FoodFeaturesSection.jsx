import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone,
  Bike,
  CreditCard,
  Clock,
  MapPin,
  HeadphonesIcon,
  Star,
  Shield,
  ChefHat,
  Search,
  Bell,
  Package
} from 'lucide-react';

const FoodFeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "User App",
      description: "Intuitive mobile app for customers to browse restaurants and track orders in real-time.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Bike,
      title: "Driver App",
      description: "Dedicated app for delivery partners with route optimization and earnings tracking.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: ChefHat,
      title: "Restaurant Panel",
      description: "Complete dashboard for restaurants to manage orders, menu, and analytics.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Live order tracking from preparation to delivery with estimated time of arrival.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Smart Route Optimization",
      description: "AI-powered route planning for fastest deliveries and fuel efficiency.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CreditCard,
      title: "Multiple Payments",
      description: "Support for cards, digital wallets, cash, and in-app wallet for seamless transactions.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Bell,
      title: "Order Notifications",
      description: "Push notifications for order status, offers, and delivery updates.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Filter by cuisine, rating, distance, price, and dietary preferences.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Star,
      title: "Rating & Reviews",
      description: "Dual rating system for both restaurants and delivery partners.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "End-to-end encrypted transactions with fraud protection.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Multi-lingual customer support via chat, call, and email.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Package,
      title: "Order Management",
      description: "Complete order lifecycle management for all stakeholders.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Green Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-50 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Food Icons Pattern */}
      <div className="absolute inset-0 opacity-5 text-4xl">
        <div className="absolute top-40 left-[10%]">🍔</div>
        <div className="absolute top-60 right-[15%]">🍕</div>
        <div className="absolute bottom-40 left-[20%]">🌮</div>
        <div className="absolute bottom-60 right-[10%]">🍜</div>
        <div className="absolute top-1/3 left-1/4">🍣</div>
        <div className="absolute bottom-1/3 right-1/3">🥗</div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 rounded-full text-sm font-medium text-green-600 border border-green-200 mb-4">
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                Launch & Scale
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete food delivery ecosystem with dedicated apps for customers, drivers, and restaurants.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              );
            })}
          </div>

          {/* Three Platform Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <div className="bg-white border border-green-200 rounded-full px-6 py-3 shadow-md flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Customer App</span>
            </div>
            <div className="bg-white border border-green-200 rounded-full px-6 py-3 shadow-md flex items-center gap-3">
              <Bike className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Driver App</span>
            </div>
            <div className="bg-white border border-green-200 rounded-full px-6 py-3 shadow-md flex items-center gap-3">
              <ChefHat className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Restaurant Panel</span>
            </div>
          </motion.div>

          {/* Note */}
          <p className="text-center text-xs text-gray-400 mt-8">
            ⚡ All apps included • Fully customizable • Ready to deploy
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoodFeaturesSection;
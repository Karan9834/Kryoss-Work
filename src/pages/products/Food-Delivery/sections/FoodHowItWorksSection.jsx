import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone,
  Search,
  ShoppingBag,
  CreditCard,
  Bike,
  Clock,
  ChefHat,
  Bell,
  Package,
  Star,
  MapPin,
  UserCheck,
  ArrowRight
} from 'lucide-react';

const FoodHowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState('customer');

  const tabs = [
    { id: 'customer', label: 'For Customers', icon: Smartphone },
    { id: 'driver', label: 'For Drivers', icon: Bike },
    { id: 'restaurant', label: 'For Restaurants', icon: ChefHat }
  ];

  const customerSteps = [
    {
      icon: Smartphone,
      title: "Download App",
      description: "Get the FoodExpress app from App Store or Google Play and create your account."
    },
    {
      icon: MapPin,
      title: "Enter Location",
      description: "Set your delivery address and discover restaurants near you."
    },
    {
      icon: Search,
      title: "Browse & Select",
      description: "Explore menus, filter by cuisine, and choose your favorite dishes."
    },
    {
      icon: ShoppingBag,
      title: "Place Order",
      description: "Add items to cart, apply offers, and confirm your order."
    },
    {
      icon: CreditCard,
      title: "Pay Securely",
      description: "Pay via card, wallet, or cash on delivery - your choice."
    },
    {
      icon: Clock,
      title: "Track & Enjoy",
      description: "Watch your order in real-time and enjoy hot & fresh food."
    }
  ];

  const driverSteps = [
    {
      icon: UserCheck,
      title: "Register & Verify",
      description: "Sign up with documents, get verified, and start your journey."
    },
    {
      icon: Bell,
      title: "Receive Alerts",
      description: "Get notified about new order requests in your area."
    },
    {
      icon: MapPin,
      title: "Accept Order",
      description: "Choose orders that work for you and head to the restaurant."
    },
    {
      icon: Package,
      title: "Pick Up Food",
      description: "Confirm pickup at restaurant and check order details."
    },
    {
      icon: Bike,
      title: "Deliver Fast",
      description: "Navigate optimized route to deliver food to customer."
    },
    {
      icon: Star,
      title: "Earn & Grow",
      description: "Complete deliveries, earn money, and build your ratings."
    }
  ];

  const restaurantSteps = [
    {
      icon: ChefHat,
      title: "Partner With Us",
      description: "Register your restaurant and create your menu on our platform."
    },
    {
      icon: Bell,
      title: "Get Orders",
      description: "Receive real-time order notifications with customer details."
    },
    {
      icon: Clock,
      title: "Prepare Food",
      description: "Accept orders and start preparing fresh meals."
    },
    {
      icon: Package,
      title: "Ready for Pickup",
      description: "Mark order ready and hand over to delivery partner."
    },
    {
      icon: ShoppingBag,
      title: "Track Deliveries",
      description: "Monitor order status and delivery completion."
    },
    {
      icon: Star,
      title: "Grow Business",
      description: "Get reviews, insights, and grow your customer base."
    }
  ];

  const getSteps = () => {
    switch(activeTab) {
      case 'customer': return customerSteps;
      case 'driver': return driverSteps;
      case 'restaurant': return restaurantSteps;
      default: return customerSteps;
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Green Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Food Pattern */}
      <div className="absolute inset-0 opacity-5 text-3xl">
        <div className="absolute top-20 left-[15%]">🍔</div>
        <div className="absolute top-32 right-[20%]">🍕</div>
        <div className="absolute bottom-32 left-[25%]">🌮</div>
        <div className="absolute bottom-20 right-[15%]">🍜</div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 rounded-full text-sm font-medium text-green-600 border border-green-200 mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It{' '}
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three platforms, one seamless ecosystem. Choose your role and see how FoodExpress works for you.
            </p>
          </motion.div>

          {/* Toggle Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-green-300'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Steps Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {getSteps().map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg">
                      {index + 1}
                    </div>

                    {/* Card */}
                    <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 pt-8 h-full">
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Icon */}
                      <div className="relative mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow for visual flow (except last in row) */}
                      {index < getSteps().length - 1 && index % 3 !== 2 && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-5 h-5 text-green-300" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Helper */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <span className="text-xs text-gray-600">
                👆 Click on the tabs above to switch between roles
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoodHowItWorksSection;
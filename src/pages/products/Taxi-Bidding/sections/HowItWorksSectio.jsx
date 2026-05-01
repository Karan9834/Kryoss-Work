import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  MapPin, 
  CreditCard, 
  Car, 
  UserCheck, 
  Star,
  ArrowRight,
  Clock,
  Users,
  User
} from 'lucide-react';

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState('riders');

  const ridersSteps = [
    {
      icon: Smartphone,
      title: "Download App",
      description: "Get the VYOM DRIVE app from App Store or Google Play and create your account in seconds."
    },
    {
      icon: MapPin,
      title: "Set Your Location",
      description: "Enter your pickup and drop-off locations. Choose from available ride options near you."
    },
    {
      icon: CreditCard,
      title: "Name Your Fare",
      description: "Set your preferred fare and let nearby drivers bid for your ride. You're in control."
    },
    {
      icon: Car,
      title: "Choose Your Ride",
      description: "Review driver bids, ratings, and vehicle details. Select the best offer for you."
    },
    {
      icon: UserCheck,
      title: "Track & Ride",
      description: "Track your driver in real-time and enjoy a safe, comfortable journey to your destination."
    },
    {
      icon: Star,
      title: "Rate & Repeat",
      description: "Rate your experience and enjoy seamless rides anytime, anywhere."
    }
  ];

  const driversSteps = [
    {
      icon: UserCheck,
      title: "Register as Driver",
      description: "Sign up, verify your documents, and get ready to start earning."
    },
    {
      icon: Clock,
      title: "Browse Ride Requests",
      description: "See available rides with passenger-set fares in your area."
    },
    {
      icon: CreditCard,
      title: "Place Your Bid",
      description: "Offer your fare and compete fairly for rides you want."
    },
    {
      icon: Star,
      title: "Earn & Grow",
      description: "Complete rides, earn money, and build your reputation."
    }
  ];

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Orange Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30" />
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
            <span className="inline-block px-4 py-1.5 bg-orange-50 rounded-full text-sm font-medium text-orange-600 border border-orange-200 mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your role below to see how VYOM DRIVE works for you
            </p>
          </motion.div>

          {/* Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-gray-100 p-1 rounded-2xl inline-flex shadow-inner">
              <button
                onClick={() => setActiveTab('riders')}
                className={`relative px-8 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'riders'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <User className={`w-4 h-4 ${activeTab === 'riders' ? 'text-orange-500' : ''}`} />
                For Riders
              </button>
              <button
                onClick={() => setActiveTab('drivers')}
                className={`relative px-8 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'drivers'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Users className={`w-4 h-4 ${activeTab === 'drivers' ? 'text-orange-500' : ''}`} />
                For Drivers
              </button>
            </div>
          </motion.div>

          {/* Steps Display */}
          <AnimatePresence mode="wait">
            {activeTab === 'riders' ? (
              <motion.div
                key="riders"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {ridersSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={`rider-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group"
                    >
                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                        {index + 1}
                      </div>

                      {/* Card */}
                      <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 pt-8">
                        {/* Orange Gradient Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Icon */}
                        <div className="relative mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Arrow for visual flow (except last) */}
                        {index < ridersSteps.length - 1 && index % 3 !== 2 && (
                          <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                            <ArrowRight className="w-5 h-5 text-orange-300" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="drivers"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {driversSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={`driver-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group"
                    >
                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                        {index + 1}
                      </div>

                      {/* Card */}
                      <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 pt-8">
                        {/* Orange Gradient Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Icon */}
                        <div className="relative mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Arrow for visual flow (except last) */}
                        {index < driversSteps.length - 1 && (
                          <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                            <ArrowRight className="w-5 h-5 text-orange-300" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Helper Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-sm text-gray-500 mt-8"
          >
            <span className="inline-flex items-center gap-1">
              <ArrowRight className="w-3 h-3 text-orange-500" />
              Click on the tabs above to switch between rider and driver views
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
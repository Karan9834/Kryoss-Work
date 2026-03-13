import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  CreditCard, 
  Clock, 
  MapPin, 
  HeadphonesIcon,
  Users,
  TrendingUp
} from 'lucide-react';

const KeyFeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Booking",
      description: "Get matched with nearby drivers in seconds with our intelligent algorithm.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: CreditCard,
      title: "Flexible Pricing",
      description: "Choose your fare and let drivers bid for your ride. You're in control.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All drivers are verified and trips are tracked in real-time for your safety.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track your ride in real-time and share your trip status with loved ones.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Smart Navigation",
      description: "Optimized routes to get you to your destination faster and efficiently.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to assist you anytime.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Driver Partner Program",
      description: "Be your own boss with flexible hours and competitive earnings.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Get insights on your rides, earnings, and usage patterns.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Orange Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20" />
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
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-50 rounded-full text-sm font-medium text-orange-600 border border-orange-200 mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for a seamless ride-hailing experience, packed into one powerful platform.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Orange Gradient Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg">
              <span className="text-sm font-medium">And many more features coming soon</span>
              <Zap className="w-4 h-4 text-orange-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
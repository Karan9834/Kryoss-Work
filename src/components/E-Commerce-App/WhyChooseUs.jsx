import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Shield, 
  HeadphonesIcon, 
  Globe2, 
  Zap, 
  BarChart3, 
  CreditCard, 
  Users,
  Sparkles,
  Settings,
  Award,
  Clock
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Rocket,
      title: "Quick Launch",
      desc: "Go live in days, not months. Our platform gets your store up and running 3x faster than traditional solutions.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "Bank-level encryption, PCI compliance, and fraud protection keep your business and customer data safe.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      desc: "Round-the-clock assistance from our expert team. We're always here when you need us, anywhere in the world.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: Globe2,
      title: "Global Reach",
      desc: "Sell internationally with multi-currency, multilingual support, and localized payment gateways.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4,
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Optimized performance ensures quick loading times and smooth checkout experience for your customers.",
      gradient: "from-yellow-500 to-amber-500",
      delay: 0.5,
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      desc: "Real-time insights into sales, customer behavior, and inventory to make data-driven decisions.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.6,
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      desc: "Accept payments from 50+ gateways worldwide. Support for cards, wallets, BNPL, and local methods.",
      gradient: "from-pink-500 to-rose-500",
      delay: 0.7,
    },
    {
      icon: Users,
      title: "Multi-Vendor Ready",
      desc: "Built-in marketplace functionality for unlimited vendors with automated commission management.",
      gradient: "from-teal-500 to-green-500",
      delay: 0.8,
    },
    {
      icon: Settings,
      title: "Easy Integration",
      desc: "Seamlessly connect with your favorite tools - from inventory management to email marketing.",
      gradient: "from-cyan-500 to-blue-500",
      delay: 0.9,
    },
    {
      icon: Award,
      title: "Award Winning",
      desc: "Recognized as the leading e-commerce platform by industry experts for three consecutive years.",
      gradient: "from-amber-500 to-orange-500",
      delay: 1.0,
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      desc: "Enterprise-grade infrastructure ensures your store stays online and performs flawlessly always.",
      gradient: "from-emerald-500 to-teal-500",
      delay: 1.1,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge - Updated for dark theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
          >
            <Sparkles size={16} className="text-purple-300" />
            <span className="text-sm font-medium text-purple-300">Why Choose Us</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Smart Choice for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
              Your E-Commerce Success
            </span>
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Discover why thousands of online stores trust us for their e-commerce needs
          </p>
        </motion.div>

        {/* FEATURES GRID - ONLY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                {/* Icon with gradient */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ShoppingCart, User, Shield, Compass, Search, Smartphone, List, Navigation,
  Bell, CreditCard, Clock, Truck, PlusCircle, ArrowRight, CheckCircle, BarChart, ShoppingBag, Grid
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const ECommerceApp = () => {
  const [activeTab, setActiveTab] = useState("User App");
  const [activeFeatureTab, setActiveFeatureTab] = useState("Common");

  const panelFeatures = {
    "User App": {
      icon: ShoppingCart,
      image: "/SolAps/Ecommercemob1.png",
      features: [
        "Easy Registration & Sign-In", "Product Search & Filters", "Push Notifications",
        "Multiple Payment Gateways", "Order Tracking", "Wishlist Management",
        "Ratings & Reviews", "Real-time Support"
      ]
    },
    "Vendor Panel": {
      icon: ShoppingBag,
      image: "/SolAps/Ecommercemob2.png",
      features: [
        "Vendor Registration", "Product Management", "Order Fulfillment",
        "Revenue Dashboard", "Discount Management", "Inventory Control",
        "Analytics & Reports", "Customer Returns"
      ]
    },
    "Admin Panel": {
      icon: Shield,
      image: "/SolAps/Ecommercemob3.png",
      features: [
        "Dashboard Overview", "Vendor Management", "User Management",
        "Approve/Reject Products", "Payment Management", "Promotional Offers",
        "Push Notifications", "System Configuration"
      ]
    },
    "Delivery App": {
      icon: Truck,
      image: "/SolAps/Ecommercemob4.png",
      features: [
        "Order Assignments", "Route Optimization", "Status Updates",
        "Earning History", "Digital Signatures", "Availability Toggle",
        "Customer Communication", "In-App Navigation"
      ]
    }
  };

  const commonFeatures = [
    { icon: ShoppingCart, title: "Customizable Storefront", desc: "Build unique, brand-aligned interfaces with our customizable themes." },
    { icon: Search, title: "Advanced Search Filters", desc: "Allow users to find products effortlessly using smart filters." },
    { icon: CreditCard, title: "Secure Payments", desc: "Multiple gateway integration ensuring safe and smooth transactions." },
    { icon: Bell, title: "Push Notifications", desc: "Real-time alerts for orders, offers, and delivery updates." },
    { icon: List, title: "Inventory Management", desc: "Synchronized inventory tracking in real-time." },
    { icon: Shield, title: "Data Security", desc: "Robust data encryption protecting customer and business details." }
  ];

  const advanceFeatures = [
    { icon: Grid, title: "Multi-Vendor Support", desc: "Enable multiple sellers to register and sell products on one platform." },
    { icon: BarChart, title: "Predictive Analytics", desc: "AI-driven insights to predict shopping trends and inventory needs." },
    { icon: Smartphone, title: "Omnichannel Experience", desc: "Seamless shopping experience across devices and applications." },
    { icon: User, title: "Personalized Recommendations", desc: "Show items tailored to individual customer behaviors and history." },
    { icon: Clock, title: "Quick Checkout", desc: "One-click purchase options to reduce cart abandonment." },
    { icon: Truck, title: "Logistics API Integration", desc: "Connect with native logistics providers for automated routing." }
  ];

  const portfolio = [
    {
      title: "Fashion E-commerce",
      description: "A fast rendering fashion marketplace featuring AR-tryons and swift delivery management.",
      tags: ["Marketplace", "Fashion", "Scalable"],
      image: "/SolAps/Ecomport1.png"
    },
    {
      title: "Electronics B2B Portal",
      description: "Wholesale platform enabling bulk pricing, negotiation workflows, and credit limit features.",
      tags: ["B2B", "Wholesale", "Custom"],
      image: "/SolAps/Ecomport2.png"
    },
    {
      title: "SuperMarket Grocery Delivery",
      description: "On-demand grocery delivery network handling diverse SKUs and local vendor dispatch.",
      tags: ["Grocery", "On-Demand", "Mobile App"],
      image: "/SolAps/Ecomport3.png"
    }
  ];

  const stats = [
    { value: "500+", label: "E-commerce Projects" },
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "50M+", label: "Orders Processed" },
    { value: "4.9/5", label: "Client Ratings" }
  ];

  const solutions = [
    { icon: CheckCircle, title: "Ready-to-launch Scripts", desc: "Pre-configured setups that drastically reduce time-to-market." },
    { icon: User, title: "Dedicated Development Team", desc: "Hire skilled developers exclusively for your custom requirements." },
    { icon: PlusCircle, title: "Custom Ecosystem", desc: "End-to-end bespoke development tailored exactly to your brand." },
    { icon: Smartphone, title: "Native Mobile Apps", desc: "Fluid experiences utilizing iOS and Android native SDKs." },
  ];

  return (
    <div className="w-full bg-white relative font-sans overflow-hidden">
      <Helmet>
        <title>ECommerce App Development | KryossWork</title>
        <meta name="description" content="Launch your eCommerce business with our best single/multi-vendor eCommerce software. Readymade scripts for quick customization." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
        {/* Background Details */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-orange-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
              >
                <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">Next-Gen Storefront</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
              >
                Ultimate <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">ECommerce</span> App
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 font-light"
              >
                Launch your multi-vendor marketplace with scalable solutions, intuitive UI, and lightning-fast checkout experiences to uplift sales globally.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-orange-500 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Exploring
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-sm flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Live Demo
                </button>
              </motion.div>
            </div>

            {/* Image / Graphic */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-yellow-500/10 rounded-3xl blur-2xl transform rotate-3" />
                <img
                  src="/SolAps/Ecomapp.png"
                  alt="ECommerce Development"
                  className="relative z-10 max-h-[500px] w-full object-contain drop-shadow-2xl"
                  onError={(e) => { e.target.src = '/SolAps/FallbackEcom.png'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Breadcrumb Navigation */}
      <div className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 h-16 sm:h-20 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm font-medium text-gray-500">
            <a href="/" className="hover:text-orange-500 transition-colors hidden sm:block">Home</a>
            <span className="hidden sm:block text-gray-300">/</span>
            <a href="#" className="hover:text-orange-500 transition-colors">Solutions</a>
            <span className="text-gray-300">/</span>
            <a href="#" className="hover:text-orange-500 transition-colors hidden md:block">Application Solutions</a>
            <span className="hidden md:block text-gray-300">/</span>
            <span className="text-gray-900 border-b border-orange-500 pb-0.5 truncate max-w-[150px] sm:max-w-none">
              ECommerce App Development
            </span>
          </nav>
        </div>
      </div>

      {/* 3. Intro Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-orange-50 border border-orange-100 rounded-[2rem] transform -rotate-2" />
              <img
                src="/SolAps/Ecomintro.png"
                alt="Online Shopping"
                className="relative w-full rounded-2xl shadow-xl object-cover h-[450px]"
                onError={(e) => { e.target.src = '/SolAps/FallbackEcom.png'; }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <BarChart className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1">Conversion Rate</p>
                    <p className="text-2xl font-bold text-gray-900">+48%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Sales with <span className="text-orange-500">Robust Platforms</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg font-light leading-relaxed">
                Our ready-made E-Commerce scripts are fully customizable and scalable. Optimized effortlessly for better search results, faster page loads, higher conversions, and mobile-friendly shopping. Process all operations from a unified dashboard.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Accelerated Time-to-Market",
                  "Multi-Platform (iOS, Android, Web)",
                  "Extensive Vendor Features",
                  "High Performance & Stability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-orange-500 transition-all shadow-md">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Must Have Features (Tabs Layout) */}
      <section className="py-24 bg-[#FFFBF2] relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Comprehensive <span className="text-orange-500 relative inline-block">
                Panels
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg font-light">
              Explore dedicated features tailored for every stakeholder in the ecosystem.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs Navigation */}
            <div className="w-full lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
              {Object.entries(panelFeatures).map(([key, data]) => {
                const Icon = data.icon;
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all whitespace-nowrap lg:whitespace-normal duration-300 ${isActive
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-100"
                      }`}
                  >
                    <Icon size={20} className={isActive ? "text-orange-400" : "text-gray-400"} />
                    {key}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="w-full lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-10"
                >
                  <div className="w-full lg:w-1/3 flex justify-center items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-100 rounded-3xl blur-xl transform -rotate-6" />
                      <img
                        src={panelFeatures[activeTab].image}
                        alt={activeTab}
                        className="relative w-full max-w-[280px] h-auto object-contain drop-shadow-2xl"
                        onError={(e) => { e.target.src = '/SolAps/FallbackEcom.png'; }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      {React.createElement(panelFeatures[activeTab].icon, { className: "text-orange-500", size: 28 })}
                      {activeTab} Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {panelFeatures[activeTab].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-orange-600" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-10 px-6 py-3 bg-orange-50 text-orange-600 font-semibold rounded-lg hover:bg-orange-100 transition-colors flex items-center gap-2">
                      Explore full feature list <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Features Grid (#1E2A3A Background) */}
      <section className="py-24 bg-[#1E2A3A] relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] opacity-[0.05]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display drop-shadow-sm">
              Platform <span className="text-orange-400">Capabilities</span>
            </h2>
            <div className="flex justify-center gap-4 mt-8 bg-blue-900/30 p-2 rounded-2xl w-max mx-auto border border-blue-800/50 backdrop-blur-sm">
              <button
                onClick={() => setActiveFeatureTab("Common")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-orange-500 text-white shadow-lg" : "text-gray-300 hover:text-white"
                  }`}
              >
                Core Essentials
              </button>
              <button
                onClick={() => setActiveFeatureTab("Advance")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-orange-500 text-white shadow-lg" : "text-gray-300 hover:text-white"
                  }`}
              >
                Premium Tools
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeatureTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeFeatureTab === "Common" ? commonFeatures : advanceFeatures).map((feature, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-500/30 group">
                  <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors border border-blue-800/50">
                    <feature.icon className="text-orange-400 group-hover:text-white transition-colors" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-blue-200/70 font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 6. Stats Section (#FFFBF2) */}
      <section className="py-20 bg-[#FFFBF2] relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-2 font-display group-hover:scale-105 transition-transform">
                  {stat.value}
                </h3>
                <p className="text-sm font-bold text-orange-600 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Solution/Package Features */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Tailored to your <span className="text-orange-500">unique business needs</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg font-light">
                Our E-Commerce solutions provide the agility to launch fast and iterate aggressively with robust infrastructure.
              </p>
              <div className="hidden lg:block w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-60 absolute left-10 mt-10" />
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {solutions.map((sol, i) => {
                const Icon = sol.icon;
                return (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-orange-500">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{sol.title}</h4>
                      <p className="text-sm text-gray-600 font-light">{sol.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Portfolio Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">OUR E-COMMERCE PRODUCTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Latest Innovations</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = '/SolAps/FallbackEcom.png'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-2xl rounded-full" />
                  <ShoppingCart size={40} className="text-orange-400 absolute top-6 right-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold leading-tight z-10">{item.title}</h3>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 & 10. Global Components */}
      <Testimonial theme="orange" />
      <Industries theme={{ bg: "bg-[#fff3eb]", primary: "text-orange-500", iconBg: "bg-orange-100", iconColor: "text-orange-500" }} />
      <OurWork theme={{ primary: "text-orange-500", accent: "bg-orange-500" }} />
      <ContactUs id="contact-us" theme="orange" />
    </div>
  );
};

export default ECommerceApp;


import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    UtensilsCrossed, CheckCircle, Store, Shield, Smartphone, MapPin, 
    CreditCard, Clock, MessageSquare, Bell, Star, Settings, FileText, 
    BarChart, Zap, Headphones, Server, Code, Database, RefreshCw, 
    UserCheck, Phone, LayoutDashboard, Compass, ShoppingBag, History, 
    Search, Navigation, DollarSign, Users, Layers, Heart, Plane, 
    Building2, Truck, PlayCircle, GraduationCap, ArrowRight, Globe,
    Package, ShoppingCart, Tv, Video, TrendingUp, User, Award, Calendar,
    Play, Download, Subtitles, Lock, Chrome, Car, Apple, Scissors, Gift, Image, CalendarCheck, Star as StarIcon, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import SalonCardSection from '../../../components/Salon-Beauty-Landing/SalonCardSection';

const SalonBeautyApp = () => {
    const [activeTab, setActiveTab] = useState('Customer App');
    const [activeFeatureTab, setActiveFeatureTab] = useState('Common');

    const panelFeatures = {
        "Customer App": {
            icon: Users, image: "/images/salon-customer.jpg",
            features: [
                "Easy Registration", "Push Notifications", "Ratings & Reviews",
                "Quick Booking", "Social Media Login", "Multiple Payments",
                "Real-Time Updates", "Live Chat", "Booking Tracking",
                "Book Multiple Services", "Choose Beautician", "Loyalty Points"
            ]
        },
        "Provider App": {
            icon: Scissors, image: "/images/salon-provider.jpg",
            features: [
                "Beautician Profile", "Set Availability", "Service Management",
                "Accept/Decline Bookings", "Location Tracking", "Upcoming Appointments",
                "Contact Customers", "Track Earnings", "Appointment History",
                "Price Management", "Service Gallery", "Client Reviews"
            ]
        },
        "Salon App": {
            icon: Store, image: "/images/salon-store.jpg",
            features: [
                "Salon Profile", "Service Catalog", "Staff Management",
                "Appointment Management", "Discount Management", "Analytics Dashboard",
                "Payment Tracking", "Customer Reviews", "Sales Reports",
                "Inventory Management", "Marketing Tools", "Push Alerts"
            ]
        },
        "Admin Panel": {
            icon: Shield, image: "/images/salon-admin.jpg",
            features: [
                "Admin Management", "Complete Dashboard", "Salon Management",
                "Beautician Management", "Customer Management", "Transaction History",
                "Commission Engine", "Payment Reports", "Push Notifications"
            ]
        }
    };

    const commonFeatures = [
        { title: "Appointments", icon: Calendar, desc: "Customers can easily book, manage, and track appointments." },
        { title: "Services", icon: Scissors, desc: "Showcase the extensive range of beauty salon & spa services." },
        { title: "Gallery", icon: Image, desc: "View the images of salon interiors and fine works of stylists." },
        { title: "Offers", icon: Gift, desc: "Display exciting offers and deals currently running in your salon." },
        { title: "Shop", icon: ShoppingBag, desc: "Make it extremely easy for customers to purchase top notch products." },
        { title: "Reward System", icon: Award, desc: "Encourage your customers to stay loyal to your brand with points." }
    ];

    const advanceFeatures = [
        { title: "In-App Wallet", icon: CreditCard, desc: "Secure in-app wallet for fast, cashless transactions." },
        { title: "Subscription Plans", icon: Clock, desc: "Subscribe to regular salon services with special discounts." },
        { title: "GPS Integration", icon: MapPin, desc: "Find nearby salons and beauty parlors with location tracking." },
        { title: "Automated Dispatch", icon: Zap, desc: "Intelligent system to auto-assign the nearest available beautician." },
        { title: "Smart Analytics", icon: BarChart, desc: "Comprehensive dashboard for admins to track business metrics." },
        { title: "Service Video/Photo", icon: Image, desc: "Showcase your work with high-quality photos of completed services." }
    ];

    const portfolio = [
        { title: "Book Salon", description: "Online platform providing all type of salon types like beauty parlour, unisex salon.", tags: ["Salon", "Booking"], image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a0b9" },
        { title: "HomSwag", description: "Connect with trained and professional Beauty expert from industry.", tags: ["At Home", "Beauty"], image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1" },
        { title: "Vaasara", description: "Book Local Salons, Spas & Clinics with freedom and convenience.", tags: ["Local", "Spa"], image: "https://images.unsplash.com/photo-1560066984-138dadb4c035" }
    ];

    const stats = [
        { value: "750+", label: "Projects Delivered" },
        { value: "150+", label: "Development Staff" },
        { value: "10+", label: "Years Experience" },
        { value: "450+", label: "Satisfied Clients" }
    ];

    const solutions = [
        { title: "Fully Customizable", icon: Settings, desc: "Our Script is flexible enough to meet the specific needs of the Clients." },
        { title: "Linux Server Installation", icon: Server, desc: "Web Panels will work smoothly in open source Linux Servers." },
        { title: "Payments", icon: CreditCard, desc: "Our Scripts support API with easy Installations of new ones." },
        { title: "Technical Support", icon: Headphones, desc: "We provide Free Support and handle everything till launch." }
    ];

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            <Helmet>
                <title>Salon & Beauty App Development | KryossWork</title>
                <meta name="description" content="Create your own beauty and salon app platform now." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-pink-100 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-pink-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-pink-600 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">Premium Solution Available</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900"
                            >
                                Make A New Business <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">Story Now With Your Salon App</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-base text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0 font-semibold"
                            >
                                Build your Beauty & Salon Application with us and be ahead of the pack. Kryoss offers booking salon apps.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                                    Start Exploring
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-sm flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                    Live Demo
                                </button>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/10 to-fuchsia-600/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src="/images/salon-beauty-hero.png"
                                    alt="Salon & Beauty App Development"
                                    width="2048"
                                    height="1365"
                                    className="relative z-10 w-full h-auto aspect-[2048/1365] object-contain drop-shadow-2xl"
                                    onError={(e) => { e.target.src = '/SolAps/FallbackEcom.png'; }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="py-20 lg:py-32 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-4 bg-pink-100 border-pink-100 rounded-[2rem] transform -rotate-2" />
                            <img
                                src="/images/salon-beauty-intro.png"
                                alt="Make A New Business Story"
                                width="2048"
                                height="1365"
                                className="relative w-full rounded-2xl shadow-xl object-cover h-auto aspect-[2048/1365]"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800'; }}
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Scissors className="text-green-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Appointments Booked</p>
                                        <p className="text-2xl font-bold text-gray-900">420K+</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Make A New Business Story <span className="text-pink-600">With Salon App</span>
                            </h2>
                            <p className="text-gray-600 mb-6 text-base font-semibold leading-relaxed max-w-lg">
                                We engage customers from the beauty, spa and hair salons industry to give an online planning solution.
                            </p>
                            <ul className="space-y-4 mb-8">
                                
                                    <li key={0} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-pink-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Instant Bookings</span>
                                    </li>
                                
                                    <li key={1} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-pink-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Extensive Salon Network</span>
                                    </li>
                                
                                    <li key={2} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-pink-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Real-Time Tracking</span>
                                    </li>
                                
                                    <li key={3} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-pink-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Multi-Language Apps</span>
                                    </li>
                                
                            </ul>
                            <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-pink-600 transition-all shadow-md">
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
                            Comprehensive <span className="text-pink-600 relative inline-block">
                                Panels
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-200" viewBox="0 0 100 10" preserveAspectRatio="none">
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
                                            : "bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-gray-100"
                                            }`}
                                    >
                                        <Icon size={20} className={isActive ? "text-pink-500" : "text-gray-400"} />
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
                                            <div className="absolute inset-0 bg-pink-100 rounded-3xl blur-xl transform -rotate-6" />
                                            <img
                                                src={panelFeatures[activeTab].image}
                                                alt={activeTab}
                                                width="2048"
                                                height="1365"
                                                className="relative w-full max-w-[280px] h-auto object-contain drop-shadow-2xl"
                                                onError={(e) => { e.target.src = '/SolAps/FallbackEcom.png'; }}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-2/3">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            {React.createElement(panelFeatures[activeTab].icon, { className: "text-pink-600", size: 28 })}
                                            {activeTab} Features
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                            {panelFeatures[activeTab].features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                                        <CheckCircle className="w-3 h-3 text-pink-600" />
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="mt-10 px-6 py-3 bg-pink-100 text-pink-600 font-semibold rounded-lg hover:bg-pink-100 transition-colors flex items-center gap-2">
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
                            Platform <span className="text-pink-500">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-blue-900/30 p-2 rounded-2xl w-max mx-auto border border-blue-800/50 backdrop-blur-sm">
                            <button
                                onClick={() => setActiveFeatureTab("Common")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-pink-600 text-white shadow-lg" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                Core Essentials
                            </button>
                            <button
                                onClick={() => setActiveFeatureTab("Advance")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-pink-600 text-white shadow-lg" : "text-gray-300 hover:text-white"
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
                                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-pink-500/30 group">
                                    <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors border border-blue-800/50">
                                        <feature.icon className="text-pink-500 group-hover:text-white transition-colors" size={26} />
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
                                <p className="text-sm font-bold text-pink-600 uppercase tracking-widest">{stat.label}</p>
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
                                Tailored to your <span className="text-pink-600">unique business needs</span>
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg font-light">
                                Our Beauty solutions provide the agility to launch fast and iterate aggressively with robust infrastructure.
                            </p>
                            <div className="hidden lg:block w-32 h-32 bg-pink-100 rounded-full blur-2xl opacity-60 absolute left-10 mt-10" />
                        </div>

                        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {solutions.map((sol, i) => {
                                const Icon = sol.icon;
                                return (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-pink-200 transition-all duration-300">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-pink-600">
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
            <SalonCardSection />

            {/* 9 & 10. Global Components */}
            <Testimonial theme="pink" />
            <Industries theme={{ bg: "bg-[#FDF4F9]", primary: "text-pink-600", iconBg: "bg-pink-100", iconColor: "text-pink-600" }} />
            <OurWork theme={{ primary: "text-pink-600", accent: "bg-pink-600" }} />
            <ContactUs id="contact-us" theme="pink" />
        </div>
    );
};

export default SalonBeautyApp;

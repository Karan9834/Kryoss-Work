
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
    Play, Download, Subtitles, Lock, Chrome, Car, Apple, Scissors, Gift, Image, CalendarCheck, Star as StarIcon, Sparkles, Coffee
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import ProductSection from '../../../components/Food_delivery/ProductSection';

const FoodDeliveryApp = () => {
    const [activeTab, setActiveTab] = useState('Customer App');
    const [activeFeatureTab, setActiveFeatureTab] = useState('Common');
    const [leftHeight, setLeftHeight] = React.useState(0);
    const leftRef = React.useRef(null);

    React.useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight);
        }
    }, [activeTab]);

    const panelFeatures = {
        "Customer App": {
            icon: Users, image: "/SolAps/fooddelivery2.png",
            features: [
                "Easy Registration & Sign-In", "Push Notifications", "Ratings & Reviews",
                "Password Recovery", "Security & Ratings", "Quick Ordering",
                "Social Media Login", "Account Management", "In-App Payments",
                "Real-Time Updates", "Live Chat With Restaurant", "Order Tracking", "Seamless Payments"
            ]
        },
        "Vendor App": {
            icon: Store, image: "/SolAps/fooddelivery3.png",
            features: [
                "Unique Restaurant Profile", "Social Media Login", "Quick Registration",
                "Menu Management", "Order Management", "Accept/Decline Orders",
                "Location Management", "Previous and Upcoming Orders",
                "Contact With Customers", "Push Notifications", "Track Payments", "Analytics Dashboard"
            ]
        },
        "Admin Panel": {
            icon: Shield, image: "/SolAps/fooddelivery4.png",
            features: [
                "Create Sub Admins", "Multi-Level Admin Access", "Complete Dashboard",
                "Restaurant Management", "Customer Management", "Analytics & Reports",
                "Order Tracking System", "View Transaction History", "Block Restaurants/Users",
                "Add/Edit/Delete Profiles", "Manage Accounts", "Commission Management"
            ]
        },
        "Delivery Panel": {
            icon: Compass, image: "/images/delivery-app.jpg",
            features: [
                "Order Tracking", "Delivery Assignment", "Payment Tracking", "Reviews & Feedback",
                "Take Delivery Requests", "Track Customer Locations", "Update Order Status",
                "Earnings Management", "Delivery History", "Transaction History",
                "Profile Management", "Live Tracking"
            ]
        }
    };

    const commonFeatures = [
        { title: "Change/Cancel Order", icon: RefreshCw, desc: "Customers can modify or cancel their food order anytime directly from the app." },
        { title: "Schedule Orders", icon: Clock, desc: "Schedule food delivery for a later date and time, allowing restaurants to prepare." },
        { title: "Payment Modes", icon: CreditCard, desc: "Multiple payment options supported including digital wallets, and secure online methods." },
        { title: "Live Order Tracking", icon: MapPin, desc: "Real-time GPS tracking allows customers to monitor delivery location." },
        { title: "Chat With Restaurant", icon: MessageSquare, desc: "Customers and restaurants can communicate through in-app chat." },
        { title: "Push Notification", icon: Bell, desc: "Users receive real-time alerts for order confirmation, dispatch, and delivery updates." }
    ];

    const advanceFeatures = [
        { title: "In-App Wallet", icon: CreditCard, desc: "Secure in-app wallet for fast, cashless transactions with cashback offers." },
        { title: "SOS/Panic Button", icon: Shield, desc: "Integrated SOS button for enhanced delivery partner safety." },
        { title: "Automated Dispatch", icon: Zap, desc: "Auto-assigns the nearest available delivery partner to cut wait times." },
        { title: "Loyalty Programs", icon: Star, desc: "Reward frequent customers with points for discounted orders." },
        { title: "Heat Map Option", icon: MapPin, desc: "See locations with maximum orders to optimize routes." },
        { title: "Smart Analytics", icon: BarChart, desc: "Comprehensive dashboard to track business growth and user metrics." }
    ];

    const portfolio = [
        { title: "Groxery", description: "Groxery is an online store bridging essential goods, health care products, and more.", tags: ["Grocery", "Mobile App"], image: "https://images.unsplash.com/photo-1542838132-92c53300491e" },
        { title: "Kifayat", description: "Kifayat online covers all everyday needs from groceries to fresh vegetables.", tags: ["Fresh Food", "Delivery"], image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2" },
        { title: "AVEMART", description: "Get affordable fresh fruits and vegetables at best price with hassle-free delivery.", tags: ["Vegetables", "Online Store"], image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c" }
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
                <title>Food Delivery App Development | KryossWork</title>
                <meta name="description" content="Create your own food order and delivery platform now." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10 py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-emerald-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">Premium Solution Available</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900"
                            >
                                Food Delivery <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">App Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-base text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0 font-semibold"
                            >
                                Build your food delivery solution with us and be ahead of the pack. Empower your business platform with our lightning-fast mobile infrastructure.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-emerald-500 transition-all duration-300 flex items-center justify-center gap-2">
                                    Start Exploring
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-sm flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                    Live Demo
                                </button>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-[55%] relative flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src="/SolAps/fooddelivery.png"
                                    alt="Taxi App Development"
                                    width="2048"
                                    height="1365"
                                    className="relative z-10 w-[115%] max-w-none h-auto object-cover drop-shadow-2xl"
                                    onError={(e) => { e.target.src = '/SolAps/fooddelivery.png'; }}
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
                            <div className="relative w-full aspect-[2048/1365] flex items-center justify-center bg-gray-100 rounded-2xl shadow-xl">
                                <img
                                    src="/SolAps/fooddelivery1.png"
                                    alt="Taxi Booking Solution"
                                    width="2048"
                                    height="1365"
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => { e.target.src = "/SolAps/fooddelivery1.png"; }}
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Coffee className="text-green-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Rides Completed</p>
                                        <p className="text-2xl font-bold text-gray-900">+48%</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Complete multi-panel <span className="text-emerald-500">Seamless System</span>
                            </h2>
                            <p className="text-gray-600 mb-6 text-base font-semibold leading-relaxed max-w-lg">
                                Kryoss Softech is a leading one-stop solution that provides impressive features and turnkey solutions using friendly services at affordable prices to give an edge to the competitors.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Accelerated Time-to-Market",
                                    "Multi-Platform (iOS, Android, Web)",
                                    "Extensive Dispatcher Features",
                                    "High Performance & Stability"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-emerald-500 transition-all shadow-md">
                                Request a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/40 py-20 px-6">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
                            <span className="bg-gradient-to-r from-emerald-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Features for Food Delivery
                        </h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            Complete solutions with dedicated panels ensuring flawless operations
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-slate-500 rounded-full mx-auto mt-4"></div>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
                        {Object.keys(panelFeatures).map((key) => {
                            const isActive = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${isActive
                                        ? `bg-gradient-to-r from-emerald-600 to-slate-700 text-white shadow-lg shadow-emerald-200 scale-105`
                                        : `bg-white text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-400`
                                        }`}
                                >
                                    {key.toUpperCase()}
                                </button>
                            );
                        })}
                    </div>

                    {/* Layout - Simple image, no box */}
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                        {/* LEFT COLUMN */}
                        <div ref={leftRef} className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(0, 2).map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-white p-3 rounded-xl border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                                            </span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                    Integrated module for seamless functionality
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(2, 4).map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-white p-3 rounded-xl border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                                            </span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                    Advanced workflow logic optimization
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CENTER - Just the image, no frame, no box */}
                        <div className="flex justify-center">
                            <img
                                src={panelFeatures[activeTab].image}
                                alt={`${activeTab} panel`}
                                className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl"
                                style={{ height: leftHeight > 0 ? `${leftHeight}px` : 'auto' }}
                                onError={(e) => { e.target.src = '/SolAps/FallbackEcom.png'; }}
                            />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(4, 6).map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-white p-3 rounded-xl border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                                            </span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                    Robust tool implementation structure
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(6, 8).map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-white p-3 rounded-xl border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                                            </span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                    Enhanced ecosystem control features
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
                            Platform <span className="text-emerald-400">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-blue-900/30 p-2 rounded-2xl w-max mx-auto border border-blue-800/50 backdrop-blur-sm">
                            <button
                                onClick={() => setActiveFeatureTab("Common")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-emerald-500 text-white shadow-lg" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                Core Essentials
                            </button>
                            <button
                                onClick={() => setActiveFeatureTab("Advance")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-emerald-500 text-white shadow-lg" : "text-gray-300 hover:text-white"
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
                                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/30 group">
                                    <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors border border-blue-800/50">
                                        <feature.icon className="text-emerald-400 group-hover:text-white transition-colors" size={26} />
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
                                <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Our Solution/Package Features */}
            <section className="py-24 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-10" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    {/* Heading & Subheading - Top centered */}
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold tracking-wide mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Tailored to your{" "}
                            <span className="text-emerald-500 relative inline-block">
                                unique business
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200" viewBox="0 0 200 12" fill="currentColor">
                                    <path d="M0,10 C20,5 40,12 60,8 C80,4 100,10 120,7 C140,4 160,10 180,6 L200,6" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                            needs
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                            Our solution guarantees power, stability, and lifetime value packed with extraordinary integrations.
                        </p>
                    </div>

                    {/* Image + Content Grid */}
                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
                        {/* Left Image Section */}
                        <div className="w-full lg:w-2/5 relative group">
                            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />

                                {/* Image - Replace with your actual image */}
                                <img
                                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="Business solutions"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Floating badge */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg z-20 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Trusted by 500+ companies</p>
                                        <p className="text-sm text-gray-500">Worldwide customer base</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content Section - Solutions Grid */}
                        <div className="w-full lg:w-3/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                                {solutions.map((sol, i) => {
                                    const Icon = sol.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="group/card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 text-white group-hover/card:scale-110 transition-transform duration-300">
                                                    <Icon size={24} strokeWidth={1.8} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-lg mb-2">{sol.title}</h4>
                                                    <p className="text-gray-500 text-sm leading-relaxed">{sol.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProductSection />

            {/* 9 & 10. Global Components */}
            <Testimonial theme="emerald" />
            <Industries theme={{ bg: "bg-slate-50", primary: "text-emerald-500", iconBg: "bg-emerald-100", iconColor: "text-emerald-500" }} />
            <OurWork theme={{ primary: "text-emerald-500", accent: "bg-emerald-500" }} />
            <ContactUs id="contact-us" theme="emerald" />
        </div>
    );
};

export default FoodDeliveryApp;

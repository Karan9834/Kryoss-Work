import { Link } from 'react-router-dom';


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
import intro from "../../../assets/grocerylanding-img/Completemulti.png"
import tail from "../../../assets/grocerylanding-img/Tailored.jpg"

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import GroceryCardSection from '../../../components/Grocery-Landing/GroceryCardSection';
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const GroceryDeliveryApp = () => {
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
            icon: Users, image: "/SolAps/groceryapp2.png",
            features: [
                "Easy Registration", "Push Notifications", "Ratings & Reviews",
                "Password Recovery", "Quick Ordering", "Social Login",
                "Account Management", "Multiple Payment Options", "Real-Time Updates",
                "Live Chat With Store", "Order Tracking", "Reorder Items"
            ]
        },
        "Driver App": {
            icon: Car, image: "/SolAps/groceryapp3.png",
            features: [
                "Driver Profile", "Set Availability", "Delivery Management",
                "Accept/Decline Delivery", "Location Tracking", "Previous Deliveries",
                "Contact Store", "Push Notifications", "Track Earnings", "Delivery History"
            ]
        },
        "Store App": {
            icon: Store, image: "/SolAps/groceryapp4.png",
            features: [
                "Store Profile", "Product Catalog", "Inventory Management",
                "Order Management", "Discount Management", "Analytics Dashboard",
                "Payment Tracking", "Customer Reviews", "Sales Reports", "Partner Management"
            ]
        },
        "Admin Panel": {
            icon: Shield, image: "/SolAps/groceryapp5.png",
            features: [
                "Create Sub Admins", "Multi-Level Access", "Complete Dashboard",
                "Store Management", "Driver Management", "Customer Management",
                "Transaction History", "Commission Management", "Payment Reports"
            ]
        }
    };

    const commonFeatures = [
        { title: "Real-Time Tracking", icon: Navigation, desc: "Customers can check shipping status until the grocery order arrives." },
        { title: "Cost Calculator", icon: DollarSign, desc: "Customers can easily know and compare the cost of items." },
        { title: "Re-Order", icon: RefreshCw, desc: "Instantly order same items at any selected address with one tap." },
        { title: "Filters", icon: Settings, desc: "Use multiple filters to find exactly what they want from thousands of products." },
        { title: "Multiple Addresses", icon: MapPin, desc: "Add multiple addresses and choose any during checkout." },
        { title: "Digital Invoices", icon: FileText, desc: "Instantly send digital copy of invoice to email after purchase." }
    ];

    const advanceFeatures = [
        { title: "In-App Wallet", icon: CreditCard, desc: "Secure in-app wallet for fast, cashless, and hassle-free transactions." },
        { title: "Subscription Plans", icon: Clock, desc: "Allow customers to subscribe to regular grocery deliveries." },
        { title: "Automated Dispatch", icon: Zap, desc: "Intelligent system auto-assigns the nearest available delivery partner." },
        { title: "Inventory Management", icon: Package, desc: "Real-time inventory tracking with low stock alerts." },
        { title: "Loyalty Programs", icon: StarIcon, desc: "Reward frequent customers with points for discounts." },
        { title: "Smart Analytics", icon: BarChart, desc: "Comprehensive dashboard to track business growth." }
    ];

    const portfolio = [
        { title: "Heritage TUCH", description: "Online milk and dairy products delivery app offering natural farm-fresh milk.", tags: ["Milk Delivery", "Subscription"], image: "https://images.unsplash.com/photo-1563636619-e9143da7973b" },
        { title: "Meatigo", description: "Fresh Meats & Delicatessen Products with 120 Minutes Home Delivery.", tags: ["Meat Delivery", "Premium"], image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82c" },
        { title: "Superfoods", description: "Best buys in vegetables, fruits, dairy, and groceries at affordable prices.", tags: ["Grocery", "Fruits"], image: "https://images.unsplash.com/photo-1542838132-92c53300491e" }
    ];

    const stats = [
        { value: "750+", label: "Projects Delivered" },
        { value: "150+", label: "Development Staff" },
        { value: "5+", label: "Years Experience" },
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
                <title>Grocery Delivery App Development | kryossone</title>
                <meta name="description" content="Create your own grocery and delivery platform now." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-green-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10 py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-green-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">Premium Solution Available</span>
                            </motion.div>

                            {/* H1 - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900"
                            >
                                Grocery Delivery <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">App Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto lg:mx-0 mb-6 text-gray-600"
                            >
                                Build your grocery delivery solution with us and be ahead of the pack. Empower your business platform with our lightning-fast mobile infrastructure.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="text-[16px] font-semibold tracking-[0.01em] normal-case group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-green-500 transition-all duration-300 flex items-center justify-center gap-2" onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Start Exploring
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src="/SolAps/groceryapp.png"
                                    alt="Taxi App Development"
                                    width="2048"
                                    height="1365"
                                    className="relative z-10 w-[115%] max-w-none h-auto object-cover drop-shadow-2xl"
                                    onError={(e) => { e.target.src = '/SolAps/groceryapp.png'; }}
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
                                    src={intro}
                                    alt="Taxi Booking Solution"
                                    width="2048"
                                    height="1365"
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => { e.target.src = "/SolAps/groceryapp1.png"; }}
                                />
                            </div>

                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                                Complete multi-panel <span className="text-green-500">Seamless System</span>
                            </h2>
                            <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-600 mb-6 max-w-lg">
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
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/company/contact" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-green-500 transition-all shadow-md">
                                Request a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/40 py-20 px-6">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-slate-900">
                            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-green-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Features for Grocery Delivery
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-4 max-w-2xl mx-auto">
                            Complete solutions with dedicated panels ensuring flawless operations
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-slate-500 rounded-full mx-auto mt-4"></div>
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
                                        ? `bg-gradient-to-r from-green-600 to-slate-700 text-white shadow-lg shadow-green-200 scale-105`
                                        : `bg-white text-slate-600 hover:text-green-600 hover:bg-green-50 border-2 border-green-200 hover:border-green-400`
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
                                        className="group bg-white p-3 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-green-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
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
                                        className="group bg-white p-3 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-green-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
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
                                        className="group bg-white p-3 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-green-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
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
                                        className="group bg-white p-3 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-green-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
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

            {/* 5. Features Grid (Light Background matching reference) */}
            <section className="py-24 bg-[#F8FAFF] relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-slate-900 mb-6 font-display">
                            Platform <span className="text-green-600">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-white p-2 rounded-2xl w-max mx-auto border border-slate-200 shadow-sm backdrop-blur-sm">
                            <button
                                onClick={() => setActiveFeatureTab("Common")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-green-500 text-white shadow-lg" : "text-slate-600 hover:text-green-600"
                                    }`}
                            >
                                Core Essentials
                            </button>
                            <button
                                onClick={() => setActiveFeatureTab("Advance")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-green-500 text-white shadow-lg" : "text-slate-600 hover:text-green-600"
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
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {(activeFeatureTab === "Common" ? commonFeatures : advanceFeatures).map((feature, idx) => (
                                <div key={idx} className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-2xl transition-all duration-500 group relative overflow-hidden shadow-sm">
                                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-all duration-300">
                                        <feature.icon className="text-green-600 group-hover:text-white transition-colors" size={28} />
                                    </div>
                                    <h3 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500">{feature.desc}</p>

                                    {/* Subtle Watermark-style icon in background */}
                                    <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                        <feature.icon size={120} />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>


            {/* 7. Our Solution/Package Features */}
            <section className="py-24 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-10" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    {/* Heading & Subheading - Top centered */}
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="text-[12px] font-medium tracking-[0.05em] uppercase inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                            Tailored to your{" "}
                            <span className="text-green-500 relative inline-block">
                                unique business
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-green-200" viewBox="0 0 200 12" fill="currentColor">
                                    <path d="M0,10 C20,5 40,12 60,8 C80,4 100,10 120,7 C140,4 160,10 180,6 L200,6" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                            needs
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
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
                                    src={tail}
                                    alt="Business solutions"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
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
                                            className="group/card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 text-white group-hover/card:scale-110 transition-transform duration-300">
                                                    <Icon size={24} strokeWidth={1.8} />
                                                </div>
                                                <div>
                                                    <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-900 mb-2">{sol.title}</h4>
                                                    <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-500">{sol.desc}</p>
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

            <div id="product-section">
                <GroceryCardSection />
            </div>

            {/* 9 & 10. Global Components */}
            <Testimonial theme="green" />
            <Industries theme={{ bg: "bg-slate-50", primary: "text-green-500", iconBg: "bg-green-100", iconColor: "text-green-500" }} />
            <OurWork theme={{ primary: "text-green-500", accent: "bg-green-500" }} />
            <PopularBlogs />
            <ContactUs id="contact-us" theme="green" />
            <TeamMoments />
        </div>
    );
};

export default GroceryDeliveryApp;
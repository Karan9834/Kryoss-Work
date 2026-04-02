
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
    Play, Download, Subtitles, Lock, Chrome, Car, Apple, Scissors, Gift, Image, CalendarCheck, Star as StarIcon, Sparkles, Building,
    Hotel, Bed, Bath, Wifi, Coffee, Dumbbell, Waves, MessageCircle, LogIn, UserPlus, Home, List, DollarSign as Currency, ThumbsUp, Share2, Edit, Filter, Bookmark, Briefcase, Map, Pin, Radio, Tablet, Laptop, Facebook, Twitter, Linkedin, Instagram, Calendar as CalendarIcon, Smartphone as PhoneIcon, Key
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import ProductsSection from '../../../components/Busiuness-Directory/ProductsSection';

const ShoppingCartIcon = () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 2.6a2 2 0 002 2.4h10.8a2 2 0 002-2.4L17 13M7 13h10M9 18a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
);

const CalculatorIcon = () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const BusinessDirectoryApp = () => {
    const [activeTab, setActiveTab] = useState('Customer App');
    const [activeFeatureTab, setActiveFeatureTab] = useState('Common');

    const panelFeatures = {
        "Customer App": {
            icon: Users, image: "/images/directory-customer.jpg",
            features: [
                "Multiple Login Registration", "Browse Business By City", "Sort Business",
                "Reviews & Ratings Management", "Newsletter Subscription", "Social Media Sharing",
                "Prompt Notifications", "Advanced Search And Filter", "Save Favorites",
                "Share Business Listings", "Email Enquiries", "Map Navigation",
                "Business Details View", "Contact Business", "Get Directions"
            ]
        },
        "Vendor Panel": {
            icon: Store, image: "/images/directory-vendor.jpg",
            features: [
                "Business Profile Management", "Catalog Management", "Services Management",
                "Enquiry Management", "Customer Reviews", "Analytics Dashboard",
                "Favorites Tracking", "Location Management", "Payment Tracking",
                "Push Notifications", "Sales Reports", "CRM & Newsletter",
                "Business Hours Setup", "Photo Gallery", "Offer Management"
            ]
        },
        "Admin Panel": {
            icon: Shield, image: "/images/directory-admin.jpg",
            features: [
                "Manage Business Directory", "Manage Categories", "Manage Countries/States/Cities",
                "Manage Plans", "Manage Newsletters", "Manage Events",
                "Manage Services", "Secure Login", "User Management",
                "Payment Management", "Report Generation", "Commission Settings",
                "Ad Management", "Review Moderation", "Analytics Dashboard"
            ]
        }
    };

    const commonFeatures = [
        { title: "Social Media", icon: Share2, desc: "The good or bad reviews by the users can be posted on the social media as linked on the app." },
        { title: "Top 10", icon: Star, desc: "Special listings for most rated and top 10 best-offered product/services." },
        { title: "Make payment", icon: CreditCard, desc: "The users can make payments for using the app services much easily with the multiple payment modes available on the app." },
        { title: "Edit reviews", icon: Edit, desc: "If the customers change their mind about a product or services, they can edit the old reviews or ratings posted by them." },
        { title: "Advertise", icon: TrendingUp, desc: "The companies can also advertise their product/services on the app and generate more leads." },
        { title: "Directory", icon: List, desc: "The users can access the reviews and ratings of the listed companies on the app." },
        { title: "Add reactions", icon: ThumbsUp, desc: "The company can offer the customers to like or even dislike products or services." },
        { title: "Notifications", icon: Bell, desc: "The company and the customers can get notifications on the top ratings, worst reviews and much more." }
    ];

    const advanceFeatures = [
        { title: "Geo-Location Search", icon: MapPin, desc: "Find businesses near your current location with real-time GPS tracking and distance calculation." },
        { title: "Multi-City Support", icon: Globe, desc: "Browse businesses across multiple cities, states, and countries with easy switching." },
        { title: "Advanced Filtering", icon: Filter, desc: "Filter businesses by category, rating, price range, distance, and more for precise results." },
        { title: "Business Claiming", icon: UserCheck, desc: "Allow business owners to claim and manage their listings with verification process." },
        { title: "Promoted Listings", icon: DollarSign, desc: "Premium placement options for businesses to get more visibility and leads." },
        { title: "Analytics Dashboard", icon: BarChart, desc: "Detailed insights on profile views, enquiries, and customer engagement metrics." },
        { title: "QR Code Check-in", icon: Radio, desc: "Generate QR codes for businesses to allow customers to check-in and leave reviews." },
        { title: "Multi-Device Sync", icon: Tablet, desc: "Sync user data across mobile, tablet, and web platforms for seamless experience." }
    ];

    const portfolio = [
        { title: "CWJobs", description: "CWJobs.co.uk is a market leader in specialist IT recruitment, attracting around 500,000 IT professionals to its site.", tags: ["Jobs", "Recruitment", "IT"], image: "https://images.unsplash.com/photo-1521791136064-7986c2920216" },
        { title: "Borzo", description: "Completely hassle-free. No registration fee. No extra charges. Get your deliveries done, cheap and fast.", tags: ["Delivery", "Courier"], image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55" },
        { title: "Hotelcareer", description: "Staff wanted! Are you a receptionist, a waiter, a chef de partie, a pastry chef, or any hospitality enthusiast?", tags: ["Hospitality", "Jobs"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { title: "24Task", description: "Take the initial steps towards hiring the best talents for your project with the 24Task Employers app.", tags: ["Freelance", "Jobs", "Hiring"], image: "https://images.unsplash.com/photo-1557804506-669a67965ba0" }
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
                <title>Business Directory App Development | KryossWork</title>
                <meta name="description" content="Create your own business directory app platform now." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-blue-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">Premium Solution Available</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900"
                            >
                                Business Directory <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">App Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-base text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0 font-semibold"
                            >
                                If you are looking for an app to provide you all the basic information about anything you want to know.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
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
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-600/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src="/images/directory-hero.png"
                                    alt="Business Directory App Development"
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
                            <div className="absolute -inset-4 bg-blue-100 border-blue-100 rounded-[2rem] transform -rotate-2" />
                            <img
                                src="/images/directory-intro.png"
                                alt="Leading Business Directory"
                                width="2048"
                                height="1365"
                                className="relative w-full rounded-2xl shadow-xl object-cover h-auto aspect-[2048/1365]"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800'; }}
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Building className="text-green-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Active Listings</p>
                                        <p className="text-2xl font-bold text-gray-900">4.5M+</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Leading Business Directory <span className="text-blue-600">Development Company</span>
                            </h2>
                            <p className="text-gray-600 mb-6 text-base font-semibold leading-relaxed max-w-lg">
                                We create the next generation of city guides, restaurant locators, and directories for all platforms.
                            </p>
                            <ul className="space-y-4 mb-8">
                                
                                    <li key={0} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Multi-Device Platform</span>
                                    </li>
                                
                                    <li key={1} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Extensive Business Features</span>
                                    </li>
                                
                                    <li key={2} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Real-Time Geo-Tracking</span>
                                    </li>
                                
                                    <li key={3} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">High Performance</span>
                                    </li>
                                
                            </ul>
                            <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-md">
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
                            Comprehensive <span className="text-blue-600 relative inline-block">
                                Panels
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none">
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
                                            : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-100"
                                            }`}
                                    >
                                        <Icon size={20} className={isActive ? "text-blue-500" : "text-gray-400"} />
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
                                            <div className="absolute inset-0 bg-blue-100 rounded-3xl blur-xl transform -rotate-6" />
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
                                            {React.createElement(panelFeatures[activeTab].icon, { className: "text-blue-600", size: 28 })}
                                            {activeTab} Features
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                            {panelFeatures[activeTab].features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                        <CheckCircle className="w-3 h-3 text-blue-600" />
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="mt-10 px-6 py-3 bg-blue-100 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-2">
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
                            Platform <span className="text-blue-500">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-blue-900/30 p-2 rounded-2xl w-max mx-auto border border-blue-800/50 backdrop-blur-sm">
                            <button
                                onClick={() => setActiveFeatureTab("Common")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                Core Essentials
                            </button>
                            <button
                                onClick={() => setActiveFeatureTab("Advance")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:text-white"
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
                                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/30 group">
                                    <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors border border-blue-800/50">
                                        <feature.icon className="text-blue-500 group-hover:text-white transition-colors" size={26} />
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
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{stat.label}</p>
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
                                Tailored to your <span className="text-blue-600">unique business needs</span>
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg font-light">
                                Our Business directory solutions provide the agility to launch fast and iterate aggressively with robust infrastructure.
                            </p>
                            <div className="hidden lg:block w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60 absolute left-10 mt-10" />
                        </div>

                        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {solutions.map((sol, i) => {
                                const Icon = sol.icon;
                                return (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-blue-600">
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
            <ProductsSection />

            {/* 9 & 10. Global Components */}
            <Testimonial theme="blue" />
            <Industries theme={{ bg: "bg-[#F0F9FF]", primary: "text-blue-600", iconBg: "bg-blue-100", iconColor: "text-blue-600" }} />
            <OurWork theme={{ primary: "text-blue-600", accent: "bg-blue-600" }} />
            <ContactUs id="contact-us" theme="blue" />
        </div>
    );
};

export default BusinessDirectoryApp;

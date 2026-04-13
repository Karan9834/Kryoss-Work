import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Heart, Shield, Search, Smartphone, Bell, Clock, PlusCircle, ArrowRight,
    CheckCircle, User, Star, Settings, MessageCircle, MapPin, Video, Zap, Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import DatingCardSection from '../../../components/Dating-Matrimony-Landing/DatingCardSection';

const DatingAppDevelopment = () => {
    const [activeTab, setActiveTab] = useState("User App");
    const [activeFeatureTab, setActiveFeatureTab] = useState("Common");
    const [leftHeight, setLeftHeight] = React.useState(0);
    const leftRef = React.useRef(null);

    React.useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight);
        }
    }, [activeTab]);



    const panelFeatures = {
        "User App": {
            icon: Heart,
            image: "/SolAps/datingapp2.png",
            features: [
                "Profile Creation", "Swipe & Match", "Real-time Chat",
                "Video Calling", "Push Notifications", "Privacy Controls",
                "Travel Mode", "Subscription Packages"
            ]
        },
        "Admin Panel": {
            icon: Shield,
            image: "/SolAps/datingapp3.png",
            features: [
                "Dashboard Overview", "Content Moderation", "User Management",
                "Subscription Management", "Analytics & Reports", "Dispute Handling",
                "Promo Codes", "System Configuration"
            ]
        }
    };

    const commonFeatures = [
        { icon: Zap, title: "Swipe & Match", desc: "Addictive swiping mechanism with advanced algorithms." },
        { icon: MessageCircle, title: "Real-time Messaging", desc: "Fast, secure chat with multimedia support." },
        { icon: Video, title: "Video Calling", desc: "Face-to-face interaction to build trust before meetings." },
        { icon: Star, title: "AI Matchmaking", desc: "Intelligent personality-based suggestions using ML." },
        { icon: MapPin, title: "Geolocation Tracking", desc: "Find matches in your immediate area." },
        { icon: Shield, title: "Profile Verification", desc: "Photo and ID verification to ensure authenticity." }
    ];

    const advanceFeatures = [
        { icon: Clock, title: "Unlimited Rewinds", desc: "Never miss a connection; undo accidental left swipes." },
        { icon: Zap, title: "Profile Boost", desc: "Get 10x more visibility by appearing at the top of the stack." },
        { icon: Heart, title: "See Who Likes You", desc: "Instant notifications when someone swipes right on your profile." },
        { icon: Globe, title: "Travel Mode", desc: "Swipe in any city around the world before you arrive." },
        { icon: Bell, title: "Smart Notifications", desc: "Engagement-driven alerts to bring users back." },
        { icon: Smartphone, title: "Dark Mode Support", desc: "Native aesthetic dark modes for better night swiping." }
    ];

    const portfolio = [
        {
            title: "Hearts & Souls",
            description: "A values-based matching platform which gained 1M+ users within 6 months.",
            tags: ["Values-based", "Matching", "Scalable"],
            image: "/SolAps/Datingport1.png"
        },
        {
            title: "DateMate",
            description: "Highly interactive swiping app specialized in quick connections and ephemeral sharing.",
            tags: ["Casual", "Fast UI", "Mobile App"],
            image: "/SolAps/Datingport2.png"
        },
        {
            title: "PlatinumMatch",
            description: "Exclusive community for verified professionals with AI-driven personality matching.",
            tags: ["Elite", "Verified", "Custom"],
            image: "/SolAps/Datingport3.png"
        }
    ];

    const stats = [
        { value: "350+", label: "Dating Projects" },
        { value: "99.9%", label: "Uptime Guaranteed" },
        { value: "50M+", label: "Swipes Processed" },
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
                <title>Dating App Development | KryossWork</title>
                <meta name="description" content="Spark meaningful connections with your own premium dating app like Tinder or Bumble. Kryoss Softech offers AI matchmaking and real-time video chat." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-fuchsia-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10 py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-fuchsia-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">Premium Solution Available</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6 text-gray-900"
                            >
                                Dating App <br /> <span className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500">Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto lg:mx-0 mb-6 text-gray-600"
                            >
                                Build your dating apps solution with us and be ahead of the pack. Empower your business platform with our lightning-fast mobile infrastructure.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="text-[16px] font-semibold tracking-[0.01em] normal-case group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-fuchsia-500 transition-all duration-300 flex items-center justify-center gap-2" onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}>
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
                                <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 to-purple-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src="/SolAps/datingapp.png"
                                    alt="Taxi App Development"
                                    width="2048"
                                    height="1365"
                                    className="relative z-10 w-[115%] max-w-none h-auto object-cover drop-shadow-2xl"
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
                            <div className="relative w-full aspect-[2048/1365] flex items-center justify-center bg-gray-100 rounded-2xl shadow-xl">
                                <img
                                    src="/SolAps/datingapp1.png"
                                    alt="Taxi Booking Solution"
                                    width="2048"
                                    height="1365"
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => { e.target.src = "/SolAps/datingapp1.png"; }}
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Heart className="text-green-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Rides Completed</p>
                                        <p className="text-2xl font-bold text-gray-900">+48%</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                                Complete multi-panel <span className="text-fuchsia-500">Seamless System</span>
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
                                        <div className="w-6 h-6 rounded-full bg-fuchsia-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-fuchsia-600 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/company/contact" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-fuchsia-500 transition-all shadow-md">
                                Request a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/40 py-20 px-6">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-slate-900">
                            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-fuchsia-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Features for Dating Apps
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-4 max-w-2xl mx-auto">
                            Complete solutions with dedicated panels ensuring flawless operations
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-slate-500 rounded-full mx-auto mt-4"></div>
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
                                        ? `bg-gradient-to-r from-fuchsia-600 to-slate-700 text-white shadow-lg shadow-fuchsia-200 scale-105`
                                        : `bg-white text-slate-600 hover:text-fuchsia-600 hover:bg-fuchsia-50 border-2 border-fuchsia-200 hover:border-fuchsia-400`
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
                                        className="group bg-white p-3 rounded-xl border-2 border-fuchsia-200 hover:border-fuchsia-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-fuchsia-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-fuchsia-600 transition-colors">
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
                                        className="group bg-white p-3 rounded-xl border-2 border-fuchsia-200 hover:border-fuchsia-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-fuchsia-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-fuchsia-600 transition-colors">
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
                                        className="group bg-white p-3 rounded-xl border-2 border-fuchsia-200 hover:border-fuchsia-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-fuchsia-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-fuchsia-600 transition-colors">
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
                                        className="group bg-white p-3 rounded-xl border-2 border-fuchsia-200 hover:border-fuchsia-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-fuchsia-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-fuchsia-600 transition-colors">
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
                            Platform <span className="text-fuchsia-600">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-white p-2 rounded-2xl w-max mx-auto border border-slate-200 shadow-sm backdrop-blur-sm">
                            <button
                                onClick={() => setActiveFeatureTab("Common")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-fuchsia-500 text-white shadow-lg" : "text-slate-600 hover:text-fuchsia-600"
                                    }`}
                            >
                                Core Essentials
                            </button>
                            <button
                                onClick={() => setActiveFeatureTab("Advance")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-fuchsia-500 text-white shadow-lg" : "text-slate-600 hover:text-fuchsia-600"
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
                                    <div className="w-14 h-14 bg-fuchsia-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-500 transition-all duration-300">
                                        <feature.icon className="text-fuchsia-600 group-hover:text-white transition-colors" size={28} />
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

            {/* 6. Stats Section (#FFFBF2) */}
            <section className="py-20 bg-[#FFFBF2] relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-2 font-display group-hover:scale-105 transition-transform">
                                    {stat.value}
                                </h3>
                                <p className="text-sm font-bold text-fuchsia-600 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Our Solution/Package Features */}
            <section className="py-24 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-200 rounded-full blur-3xl opacity-20" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-300 rounded-full blur-3xl opacity-10" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    {/* Heading & Subheading - Top centered */}
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="text-[12px] font-medium tracking-[0.05em] uppercase inline-block px-4 py-1.5 bg-fuchsia-100 text-fuchsia-600 rounded-full mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                            Tailored to your{" "}
                            <span className="text-fuchsia-500 relative inline-block">
                                unique business
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-fuchsia-200" viewBox="0 0 200 12" fill="currentColor">
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
                                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="Business solutions"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Floating badge */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg z-20 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-fuchsia-500 rounded-full flex items-center justify-center">
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
                                            className="group/card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-fuchsia-200 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 text-white group-hover/card:scale-110 transition-transform duration-300">
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

            {/* 8. Portfolio Section */}
            <div id="product-section">
                <DatingCardSection />
            </div>

            {/* 9 & 10. Global Components */}
            <Testimonial theme="fuchsia" />
            <Industries theme={{ bg: "bg-slate-50", primary: "text-fuchsia-500", iconBg: "bg-fuchsia-100", iconColor: "text-fuchsia-500" }} />
            <OurWork theme={{ primary: "text-fuchsia-500", accent: "bg-fuchsia-500" }} />
            <ContactUs id="contact-us" theme="fuchsia" />
        </div>
    );
};

export default DatingAppDevelopment;

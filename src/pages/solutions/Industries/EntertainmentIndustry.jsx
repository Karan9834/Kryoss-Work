import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    CheckCircle, User, Shield, Compass,
    MapPin, CreditCard, Bell, Star, FileText, BarChart, Zap,
    Headphones, Server, Code, RefreshCw, Phone, ArrowRight,
    PlayCircle, Users, LogIn, Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import OTTCardSection from '../../../components/OTT-Landing/OTTCardSection';

const EntertainmentIndustry = () => {
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
            icon: User,
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
            features: [
                "Sign-up/Social Login", "Help Center & FAQs", "Push Notifications",
                "Video Recommendation", "Password Recovery", "Share Video Easily",
                "Subtitles/Audio Control", "Profile Management"
            ]
        },
        "Admin Dashboard": {
            icon: Shield,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
            features: [
                "Promotions Management", "Financial Analytics", "Audience Data",
                "Manage Ads", "Manage Categories", "Subscription Management",
                "Creator Database", "Control Center"
            ]
        },
        "Web Platforms": {
            icon: PlayCircle,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
            features: [
                "Cross-browser Support", "Secure Payment Option", "Dynamic Subtitles",
                "Reviews & Ratings", "Add to Watchlist", "HD Streaming Quality",
                "Genre Selection", "SEO Friendly Architecture"
            ]
        }
    };

    const commonFeatures = [
        { icon: Settings, title: "Powerful Admin Panel", desc: "Customize robust OTT streaming platform to control user accounts, content, and the interface seamlessly." },
        { icon: CreditCard, title: "Multiple Payment Gateways", desc: "Accommodate large user bases with easy, versatile subscription models driving higher revenues." },
        { icon: PlayCircle, title: "Categorization Management", desc: "Administrators categorize content, providing an intuitive, highly scalable entertainment environment." },
        { icon: Users, title: "User Flow Management", desc: "Analyze and periodically review viewer trends, choices, and interactions with video products." },
        { icon: BarChart, title: "Records and Statistics", desc: "Track overall application performance automatically with robust graphical time-interval metric reports." },
        { icon: RefreshCw, title: "Cross-platform Mobile", desc: "Build mobile applications available for deployment across iOS, Android, and web streaming devices natively." }
    ];

    const advanceFeatures = [
        { icon: Shield, title: "Cloud Management System", desc: "Store immense amounts of video data safely and reliably on premium cloud server architectures." },
        { icon: LogIn, title: "Automatic Logins", desc: "Keep viewers engaged rapidly through encrypted secure token retention cross-devices." },
        { icon: Zap, title: "Automated Recommendations", desc: "Intelligently display genre and watch-history based entertainment utilizing machine learning." },
        { icon: Star, title: "Video Player Controls", desc: "Advanced player with gesture control, forward/rewind, resolution adjustment & pip." },
        { icon: CreditCard, title: "Promotions & Gifts", desc: "Enhance marketing initiatives through promo codes and integrated user reward systems." },
        { icon: Phone, title: "Register Device Sync", desc: "Handle simultaneous streaming screens, sync timestamps across mobile, smart tv, and web." }
    ];

    const stats = [
        { value: "750+", label: "Projects Delivered" },
        { value: "150+", label: "Development Staff" },
        { value: "10+", label: "Years of Experience" },
        { value: "450+", label: "Satisfied Clients" }
    ];

    const solutions = [
        { icon: Settings, title: "Fully Customizable", desc: "Our Script is flexible enough to meet the specific needs of the Clients." },
        { icon: Server, title: "Linux Server Installation", desc: "Web Panels will work smoothly in open source Linux Servers." },
        { icon: CreditCard, title: "Payments", desc: "Our Scripts support API with easy Installations of new ones." },
        { icon: Headphones, title: "Technical Support", desc: "We provide Free Support and handle everything till launch." }
    ];

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            <Helmet>
                <title>Entertainment & OTT App Development | KryossWork</title>
                <meta name="description" content="We develop custom Streaming and OTT applications which provide rich experiences." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10 py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-blue-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">Premium Solution Available</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900"
                            >
                                OTT Platform & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">App Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-base text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0 font-semibold"
                            >
                                Kryoss Softech develops custom Streaming and OTT applications providing rich, intuitive, and omni-channel experiences to viewers utilizing modern web tech and infrastructure across screens.
                            </motion.p>
                        </div>

                        <div className="w-full lg:w-[55%] relative flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop"
                                    alt="OTT App Development"
                                    width="2048"
                                    height="1365"
                                    className="max-w-full max-h-full object-contain rounded-2xl shadow-xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 lg:py-32 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-4 bg-blue-50 border border-blue-100 rounded-[2rem] transform -rotate-2" />
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                                alt="Entertainment Platform Solution"
                                width="2048"
                                height="1365"
                                className="relative w-full rounded-2xl shadow-xl object-cover h-auto"
                            />
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Entertainment Platform <span className="text-blue-500">Development</span>
                            </h2>
                            <p className="text-gray-600 mb-6 text-base font-semibold leading-relaxed max-w-lg">
                                Kryoss Softech is an outstanding OTT app development company that provides a comprehensive suite of services to assist you manage, deliver, and monetize your OTT content. We strive to serve the ultimate mobile entertainment experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 py-20 px-6">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
                            <span className="bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Features of OTT Platform
                        </h2>
                    </div>

                    <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
                        {Object.keys(panelFeatures).map((key) => {
                            const isActive = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${isActive
                                        ? `bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-lg shadow-blue-200 scale-105`
                                        : `bg-white text-slate-600 hover:text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400`
                                        }`}
                                >
                                    {key.toUpperCase()}
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                        <div ref={leftRef} className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(0, 2).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0"><CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" /></span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{item}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(2, 4).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0"><CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" /></span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{item}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src={panelFeatures[activeTab].image}
                                alt={`${activeTab} panel`}
                                className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl"
                                style={{ height: leftHeight > 0 ? `${leftHeight}px` : 'auto' }}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(4, 6).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0"><CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" /></span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{item}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(6, 8).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0"><CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" /></span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{item}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-[#1E2A3A] relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display drop-shadow-sm">
                            Platform <span className="text-blue-400">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-blue-900/30 p-2 rounded-2xl w-max mx-auto border border-blue-800/50 backdrop-blur-sm">
                            <button onClick={() => setActiveFeatureTab("Common")} className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-blue-500 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}>Core Essentials</button>
                            <button onClick={() => setActiveFeatureTab("Advance")} className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-blue-500 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}>Premium Tools</button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div key={activeFeatureTab} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(activeFeatureTab === "Common" ? commonFeatures : advanceFeatures).map((feature, idx) => (
                                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/30 group">
                                    <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors border border-blue-800/50">
                                        <feature.icon className="text-blue-400 group-hover:text-white transition-colors" size={26} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-blue-200/70 font-light leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-[#FFFBF2] relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-2 font-display">{stat.value}</h3>
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide mb-4">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Tailored to your <span className="text-blue-500 relative inline-block">unique business</span> needs
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
                        <div className="w-full lg:w-2/5 relative group">
                            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Solutions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                                {solutions.map((sol, i) => {
                                    const Icon = sol.icon;
                                    return (
                                        <div key={i} className="group/card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 text-white group-hover/card:scale-110 transition-transform duration-300">
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

            {/* 8. Products Section */}
            <OTTCardSection />

            <Testimonial theme="blue" />
            <Industries theme={{ bg: "bg-blue-50", primary: "text-blue-500", iconBg: "bg-blue-100", iconColor: "text-blue-500" }} />
            <OurWork theme={{ primary: "text-blue-500", accent: "bg-blue-500" }} />
            <ContactUs id="contact-us" theme="blue" />
        </div>
    );
};

export default EntertainmentIndustry;

import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    ChevronRight, CheckCircle, Truck, User, Shield, Package,
    Smartphone, MapPin, CreditCard, Clock, MessageSquare,
    Bell, Star, Settings, FileText, Anchor, ArrowRight, Activity, PlusCircle,
    Server, Code, Database, Briefcase, Download, Users, Headphones, Anchor as PortIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import LogisticsCardSection from '../../../components/TransportLogistics-Landing/LogisticsCardSection';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const LogisticsApp = () => {
    const [activeTab, setActiveTab] = useState("Customer");
    const [activeFeatureTab, setActiveFeatureTab] = useState("Common");
    const [leftHeight, setLeftHeight] = React.useState(0);
    const leftRef = React.useRef(null);

    React.useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight);
        }
    }, [activeTab]);

    const panelFeatures = {
        "Customer": {
            icon: User,
            image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "Easy Registration", "Select Vehicles", "Estimate fare charges",
                "Get a quote", "Track shipments", "Alerts and notifications",
                "Billing and payments", "Rate driver performance", "Schedule bookings"
            ]
        },
        "Driver": {
            icon: Truck,
            image: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "Driver Registration", "Accept/Decline Requests", "Shipper Details",
                "Freight Details", "In-app Navigation", "Multiple Payment Integration",
                "Bill Approvals", "Track Earnings"
            ]
        },
        "Admin Panel": {
            icon: Shield,
            image: "https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "Monitor Drivers", "Manage Shippers & Trucks", "Tariffs Management",
                "Fuel Consumption Tracking", "Vehicle Management", "Billing & Invoice",
                "Trip Log Reports", "Push Notifications"
            ]
        }
    };

    const commonFeatures = [
        { icon: CreditCard, title: "Easy Payments", desc: "Integrated wallet in-app to facilitate quick and easy payments without complex processes." },
        { icon: Package, title: "Order Management", desc: "Easily track and manage your orders from the mobile app or web portal on the go." },
        { icon: Smartphone, title: "Recharge Wallet", desc: "Easy recharge via phone banking, no need to give any extra bank details." },
        { icon: Users, title: "Asset Management", desc: "Manage human resources and vehicular assets effectively all from the centralized app." },
        { icon: Shield, title: "Integrated Insurance", desc: "In-app insurance facility options available to safeguard your precious cargo." },
        { icon: Briefcase, title: "Bid Management", desc: "Full bidding portal to manage requests and accept bids for posted cargo deliveries." },
        { icon: Activity, title: "Live Tracking", desc: "Live tracking of goods to provide greater transparency and real-time updates to owners." },
        { icon: CheckCircle, title: "Verification Partner", desc: "Simple on-boarding process to become a verification partner and inspect logistic assets." }
    ];

    const advanceFeatures = [
        { icon: MapPin, title: "Real-Time Tracking", desc: "Enable real-time tracking on map interface for fleet managers, customers, and associates." },
        { icon: Settings, title: "Logistics Dashboard", desc: "Administrators and managers can handle all logistics related issues from one fully customizable panel." },
        { icon: Code, title: "Easy Integration", desc: "Integrates seamlessly with other ERP or CRM systems without updating data locally." },
        { icon: MessageSquare, title: "In-app chatting", desc: "In-app chatting ensures issues can be raised and resolved in real-time, preventing cost delays." },
        { icon: FileText, title: "Analytics", desc: "Both real-time and periodic reports are available to all users, according to their permission levels." },
        { icon: Clock, title: "Cost effective", desc: "Logistics apps optimize costs and resources involved in overall logistics operations efficiently." }
    ];

    const stats = [
        { value: "750+", label: "Projects Delivered" },
        { value: "150+", label: "Development Staff" },
        { value: "10+", label: "Years Experience" },
        { value: "450+", label: "Satisfied Clients" }
    ];

    const solutions = [
        { icon: Settings, title: "Fully Customizable", desc: "Flexible scripts to meet specific client needs and branding." },
        { icon: CheckCircle, title: "Bug Support", desc: "Report issues and get free support/updates for the first year." },
        { icon: Shield, title: "Lifetime License", desc: "One-off payment for lifetime software usage and domain license." },
        { icon: Server, title: "Linux Installation", desc: "Smooth configuration on open-source Linux servers by experts." },
        { icon: Database, title: "Open Source DB", desc: "Secure MySQL database usage with minimal renewal costs." },
        { icon: CreditCard, title: "Global Payments", desc: "Support for international payment gateways and easy API integration." },
        { icon: Headphones, title: "Technical Support", desc: "One year free support handling everything until launch." },
        { icon: Code, title: "Open Source Code", desc: "100% open source code allowing for full-scale customization." }
    ];

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            <Helmet>
                <title>Logistics App Development | KryossWork</title>
                <meta name="description" content="Top Logistics mobile app development company for automation of your transport fleet, effective organization of routes and resources." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#ECFDF5] via-white to-[#D1FAE5]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl" />
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
                                <span className="text-sm font-semibold text-gray-700">Digital Logistics Solution</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6 text-gray-900"
                            >
                                Logistics App <br /> <span className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto lg:mx-0 mb-6 text-gray-600"
                            >
                                White-label Fleet Management Solutions for your Logistics business. Our logistics mobile app will ensure automation of your transport fleet, effective organization of routes, and efficient distribution of resources.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="text-[16px] font-semibold tracking-[0.01em] normal-case group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2" onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}>
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
                                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Logistics App Development"
                                    width="2048"
                                    height="1365"
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => { e.target.src = 'https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=800'; }}
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
                            <div className="absolute -inset-4 bg-emerald-50 border border-emerald-100 rounded-[2rem] transform -rotate-2" />
                            <img
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Logistics App Solution"
                                width="2048"
                                height="1365"
                                className="relative w-full rounded-2xl shadow-xl object-cover h-auto aspect-[2048/1365]"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50a58?auto=format&fit=crop&q=80&w=800'; }}
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Truck className="text-emerald-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Active Shipments</p>
                                        <p className="text-2xl font-bold text-gray-900">+156</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                                Integrated <span className="text-emerald-600">Distribution Solution</span>
                            </h2>
                            <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-600 mb-6 max-w-lg">
                                We provide advanced logistics mobile app solutions that make it easier to carry out follow-ups and provide instant solutions in case of any inconveniences without holding back your services.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Customer, Driver & Admin Panels",
                                    "Real-Time Tracking & Push Notifications",
                                    "ERP/CRM Integrations & Analytics",
                                    "Automated Fleet & Asset Management"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/company/contact" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-all shadow-md">
                                Request a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 py-20 px-6">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-slate-900">
                            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-emerald-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Features for Logistics App
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-4 max-w-2xl mx-auto">
                            Complete logistics solution with customer, driver and admin panels
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-slate-500 rounded-full mx-auto mt-4"></div>
                    </div>

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

                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                        <div ref={leftRef} className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(0, 2).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-emerald-600 transition-colors">{item}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(2, 4).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-emerald-600 transition-colors">{item}</h4>
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
                                onError={(e) => { e.target.src = 'https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=800'; }}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(4, 6).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-emerald-600 transition-colors">{item}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(6, 8).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-emerald-600 transition-colors">{item}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Features Grid */}
            <section className="py-24 bg-[#1E293B] relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] opacity-[0.05]" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display drop-shadow-sm">
                            Platform <span className="text-emerald-400">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-emerald-900/30 p-2 rounded-2xl w-max mx-auto border border-emerald-800/50 backdrop-blur-sm">
                            <button
                                onClick={() => setActiveFeatureTab("Common")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-emerald-600 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}
                            >
                                Core Essentials
                            </button>
                            <button
                                onClick={() => setActiveFeatureTab("Advance")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-emerald-600 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}
                            >
                                Key Features
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
                            className={`grid grid-cols-1 md:grid-cols-2 ${activeFeatureTab === "Advance" ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-6`}
                        >
                            {(activeFeatureTab === "Common" ? commonFeatures : advanceFeatures).map((feature, idx) => (
                                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/30 group">
                                    <div className="w-14 h-14 bg-emerald-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors border border-emerald-800/50">
                                        <feature.icon className="text-emerald-400 group-hover:text-white transition-colors" size={26} />
                                    </div>
                                    <h3 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-white mb-3">{feature.title}</h3>
                                    <p className="text-emerald-200/70 text-sm font-light leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 5. Stats Section */}
            <section className="py-20 bg-[#ECFDF5] relative">
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

            {/* 6. Why Choose */}
            <section className="py-24 bg-gradient-to-br from-white via-emerald-50/30 to-white relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="text-[12px] font-medium tracking-[0.05em] uppercase inline-block px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                            Tailored to your{" "}
                            <span className="text-emerald-600 relative inline-block">
                                business needs
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200" viewBox="0 0 200 12" fill="currentColor">
                                    <path d="M0,10 C20,5 40,12 60,8 C80,4 100,10 120,7 C140,4 160,10 180,6 L200,6" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                            Our solution guarantees performance, stability, and lifetime value packed with seamless integrations for logistics business.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
                        <div className="w-full lg:w-2/5 relative group">
                            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                                <img
                                    src="https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="Logistics app support"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg z-20 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                                        <PlusCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Customized Solutions</p>
                                        <p className="text-sm text-gray-500">Flexible script implementation</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                                {solutions.map((sol, i) => {
                                    const Icon = sol.icon;
                                    return (
                                        <div key={i} className="group/card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 text-white group-hover/card:scale-110 transition-transform duration-300">
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
                <LogisticsCardSection />
            </div>
            <OurWork theme={{ primary: "text-emerald-600", accent: "bg-emerald-600" }} />
            <Testimonial theme="blue" />
            <Industries theme={{ bg: "bg-[#ecfdf5]", primary: "text-emerald-600", iconBg: "bg-emerald-100", iconColor: "text-emerald-600" }} />
            <ContactUs id="contact-us" theme="blue" />
        </div>
    );
};

export default LogisticsApp;

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    ChevronRight, CheckCircle, Shirt, User, Shield, Timer,
    Smartphone, MapPin, CreditCard, Clock, MessageSquare,
    Bell, Star, Settings, FileText, BarChart, Zap,
    Headphones, Server, Code, Database, RefreshCw,
    UserCheck, Phone, LayoutDashboard, ArrowRight, PlusCircle, UserPlus, Search, ListFilter,
    ShoppingBag, Tag, Truck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import hero from "../../../assets/Laundary/hero.jpg"
import multi from "../../../assets/Laundary/about.png"
import tail from "../../../assets/Laundary/tail.png"

const LaundryApp = () => {
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
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "One tap onboarding", "Select Service Type", "Quote for Laundry",
                "Booking & Discount", "Secured Payment", "Promos and deals",
                "Order Tracking", "Support & Help"
            ]
        },
        "Vendor App": {
            icon: ShoppingBag,
            image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "Order Management", "Pickup Status", "Processing Status",
                "Delivery Status", "Earning Reports", "Push Notifications",
                "Vendor Profile", "Service Coverage"
            ]
        },
        "Admin Panel": {
            icon: Shield,
            image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "Location Management", "Service Management", "Item Management",
                "Offer Management", "Driver Management", "Payment Management",
                "Website Management", "System Analytics"
            ]
        }
    };

    const commonFeatures = [
        { icon: UserPlus, title: "Registration", desc: "Simple and fast onboarding ought to be benefited to the client. The procedure ought not to belong and tedious." },
        { icon: Zap, title: "Single Tap Pickup", desc: "Clients are consistently in a rush. A solitary tap pickup solicitation will inform the administrator." },
        { icon: MapPin, title: "Order Tracking", desc: "The client can follow his request; regardless of whether the garments are washed or conveyed." },
        { icon: CreditCard, title: "Cost Calculator", desc: "This component will assist the client in knowing the expense by embedding the number and kind of garments." },
        { icon: Clock, title: "Order History", desc: "The client can keep a pattern of how frequently, they have requested laundry administrations." },
        { icon: Shirt, title: "Select Category", desc: "Under this element, the client is permitted with a choice to pick the fabric class and kind of wash." },
        { icon: Star, title: "Review And Rating", desc: "The client can check the surveys and appraisals shared by different clients for quality assurance." },
        { icon: Bell, title: "Push Notification", desc: "The client ought to be informed about either the conveyance status or about certain offers through SMS." }
    ];

    const advanceFeatures = [
        { icon: Settings, title: "Customizable & Whitelabel", desc: "A whitelabel solution that becomes a part of your business identity with branding." },
        { icon: Server, title: "Choice of Server", desc: "We help you deploy the solution on the server of your choice whether shared or cloud." },
        { icon: CreditCard, title: "Multiple Payment", desc: "Integrate Stripe, PayPal, or any payment gateway of choice effortlessly." },
        { icon: BarChart, title: "Scalable And Robust", desc: "Our solution is designed to grow from hundreds to thousands of users across many cities." },
        { icon: Headphones, title: "Various Support", desc: "At all times, you must support your drivers and customers or you risk losing them." },
        { icon: Zap, title: "Fastest Delivery", desc: "As the base solution is ready to use, we can deliver the solution to you with zero coding." }
    ];

    const stats = [
        { value: "750+", label: "Projects Delivered" },
        { value: "150+", label: "Development Staff" },
        { value: "5+", label: "Years Experience" },
        { value: "450+", label: "Satisfied Clients" }
    ];

    const solutions = [
        { icon: Smartphone, title: "Customizable Solution", desc: "Tailored to the unique needs of our Clients and packed with powerful features." },
        { icon: Server, title: "Flexible Deployment", desc: "Deploy on any server of your choice with our technical assistance." },
        { icon: CreditCard, title: "Payment Integration", desc: "Pre-integrated popular payment gateways for global transactions." },
        { icon: BarChart, title: "Robust Scaling", desc: "Built for high performance and scalability to handle business growth." },
        { icon: Headphones, title: "24/7 Support", desc: "Continuous support options for both back-end and user-facing issues." },
        { icon: Zap, title: "Rapid Launch", desc: "Fastest time to market with our ready-to-use base application framework." }
    ];

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            <Helmet>
                <title>Laundry App Development | KryossWork</title>
                <meta name="description" content="Expert laundry & Dry cleaning app development company providing custom mobile app services all around the globe." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl" />
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
                                <span className="text-sm font-semibold text-gray-700">Expert Cleaning Solutions</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6 text-gray-900"
                            >
                                On Demand Laundry <br /> <span className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">App Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto lg:mx-0 mb-6 text-gray-600"
                            >
                                Giving You Time Behind For The Important Stuff! We provide custom and readymade mobile app services all around the globe.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <Link to="/company/contact" className="text-[16px] font-semibold tracking-[0.01em] normal-case group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                                    Get Started
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-sm flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                    Explore Demo
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
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src={hero}
                                    alt="Laundry App Development"
                                    width="2048"
                                    height="1365"
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800'; }}
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
                            <div className="absolute -inset-4 bg-blue-50 border border-blue-100 rounded-[2rem] transform -rotate-2" />
                            <img
                                src={multi}
                                alt="Laundry App Solution"
                                width="2048"
                                height="1365"
                                className="relative w-full rounded-2xl shadow-xl object-cover h-auto aspect-[2048/1365]"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800'; }}
                            />
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                                Integrated <span className="text-blue-600">Laundry Solution</span>
                            </h2>
                            <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-600 mb-6 max-w-lg">
                                We help you create an effective dry cleaning app to provide to your customers and make the target ROI. Our solution is comprehensive and powerful.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "User, Vendor and Admin Panels",
                                    "One-tap Onboarding/Registration",
                                    "Simple Single Tap Pickup Request",
                                    "Advanced Order Tracking & History"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-md">
                                Order Your App
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 py-20 px-6">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-slate-900">
                            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Laundry App Features
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-4 max-w-2xl mx-auto">
                            Complete on-demand laundry solution with user, vendor and admin panels
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full mx-auto mt-4"></div>
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
                                        ? `bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-lg shadow-blue-200 scale-105`
                                        : `bg-white text-slate-600 hover:text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400`
                                        }`}
                                >
                                    {key.toUpperCase()}
                                </button>
                            );
                        })}
                    </div>

                    {/* Layout */}
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                        {/* LEFT COLUMN */}
                        <div ref={leftRef} className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(0, 2).map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-white p-3 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-blue-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
                                                    Streamlined service flow
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
                                        className="group bg-white p-3 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-blue-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
                                                    Enhanced business logic
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CENTER IMAGE */}
                        <div className="flex justify-center">
                            <img
                                src={panelFeatures[activeTab].image}
                                alt={`${activeTab} panel`}
                                className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl"
                                style={{ height: leftHeight > 0 ? `${leftHeight}px` : 'auto' }}
                                onError={(e) => { e.target.src = 'https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=800'; }}
                            />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(4, 6).map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-white p-3 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-blue-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
                                                    User engagement tools
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
                                        className="group bg-white p-3 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start"
                                    >
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-blue-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
                                                    Management operations
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

            {/* 5. Features Grid */}
            <section className="py-24 bg-[#1E293B] relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] opacity-[0.05]" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display drop-shadow-sm">
                            Laundry App <span className="text-blue-400">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-blue-900/30 p-2 rounded-2xl w-max mx-auto border border-blue-800/50 backdrop-blur-sm">
                            <button
                                onClick={() => setActiveFeatureTab("Common")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                Common Features
                            </button>
                            <button
                                onClick={() => setActiveFeatureTab("Advance")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                Unique Benefits
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
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {(activeFeatureTab === "Common" ? commonFeatures : advanceFeatures).map((feature, idx) => (
                                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/30 group">
                                    <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors border border-blue-800/50">
                                        <feature.icon className="text-blue-400 group-hover:text-white transition-colors" size={26} />
                                    </div>
                                    <h3 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-white mb-3">{feature.title}</h3>
                                    <p className="text-blue-200/70 font-light leading-relaxed text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 7. Our Solution Features */}
            <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-10" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="text-[12px] font-medium tracking-[0.05em] uppercase inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full mb-4">
                            Premium Benefits
                        </span>
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                            Tailored to your{" "}
                            <span className="text-blue-600 relative inline-block">
                                laundry business
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200" viewBox="0 0 200 12" fill="currentColor">
                                    <path d="M0,10 C20,5 40,12 60,8 C80,4 100,10 120,7 C140,4 160,10 180,6 L200,6" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                            Our solution will be tailored to the unique needs of our Clients and packed with powerful features and integrations.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
                        {/* Left Image */}
                        <div className="w-full lg:w-2/5 relative group">
                            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                                <img
                                    src={tail}
                                    alt="Laundry solution"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-3/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                                {solutions.map((sol, i) => {
                                    const Icon = sol.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="group/card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 text-white group-hover/card:scale-110 transition-transform duration-300">
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

            {/* 8. Products Section */}
            <OurWork theme={{ primary: "text-blue-600", accent: "bg-blue-600" }} />

            {/* Global Components */}
            <Testimonial theme="blue" />
            <Industries theme={{ bg: "bg-[#f0f9ff]", primary: "text-blue-600", iconBg: "bg-blue-100", iconColor: "text-blue-600" }} />
            <ContactUs id="contact-us" theme="blue" />
        </div>
    );
};

export default LaundryApp;

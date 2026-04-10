import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    ChevronRight, CheckCircle, Pill, User, Shield, Truck,
    Smartphone, MapPin, CreditCard, Clock, MessageSquare,
    Bell, Star, Settings, FileText, BarChart, Zap,
    Headphones, Server, Code, Database, RefreshCw,
    UserCheck, Phone, LayoutDashboard, ArrowRight, PlusCircle, UserPlus, Search, ShoppingCart, Upload
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const MedicineDeliveryApp = () => {
    const [activeTab, setActiveTab] = useState("Customer App");
    const [activeFeatureTab, setActiveFeatureTab] = useState("Common");
    const [leftHeight, setLeftHeight] = React.useState(0);
    const leftRef = React.useRef(null);

    React.useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight);
        }
    }, [activeTab]);

    const panelFeatures = {
        "Customer App": {
            icon: User,
            image: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "User Registration", "Profile Management", "Prescription Upload",
                "Add to Cart", "Expert Consultation", "Various Payment Methods",
                "Order Tracking", "Push Notifications"
            ]
        },
        "Pharmacy Panel": {
            icon: Pill,
            image: "https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "Pharmacy Dashboard", "Inventory Management", "Price Management",
                "Manage Orders", "Delivery Management", "Rating & Reviews",
                "Shipment Tracking", "Product Listing"
            ]
        },
        "User Panel": {
            icon: UserCheck,
            image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "Easy Dashboard", "Upload Prescription", "Find Products",
                "Expert Consult", "Secure Payment", "Order Tracking",
                "Notifications", "Reorder Medicines"
            ]
        },
        "Driver Panel": {
            icon: Truck,
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
            features: [
                "Driver Dashboard", "Assigned Orders", "Earnings Tracking",
                "GPS Navigation", "Real-time Tracking", "Easy Calling",
                "Payment Info", "Order Management"
            ]
        }
    };

    const commonFeatures = [
        { icon: UserPlus, title: "User Registration", desc: "Users can sign up with basic details or with Google/social media accounts seamlessly." },
        { icon: Search, title: "One Click Search Medicine", desc: "Patients can easily search for medicine on the app with just one click." },
        { icon: CreditCard, title: "Online Payment", desc: "Medicine ordering app integrates multiple payment APIs for various transaction modes." },
        { icon: Star, title: "Discount and Rewards", desc: "Customers can get good discounts and rewards based on their records and previous deals." },
        { icon: ShoppingCart, title: "Add to Cart", desc: "After filtering medicines, patients can simply add them to cart for hassle-free ordering." },
        { icon: Upload, title: "Easy Upload Prescription", desc: "Customers can easily upload prescriptions; pharmacists can preview and confirm medicines." },
        { icon: MessageSquare, title: "Live Chat", desc: "Customers can have a live chat with other users to discuss experiences and various issues." },
        { icon: Bell, title: "Push Notifications", desc: "Users get alerts via push notifications for orders, offers, reminders, and updates." }
    ];

    const advanceFeatures = [
        { icon: MapPin, title: "Real-Time Tracking", desc: "Track your medicine delivery in real-time from pharmacy to your doorstep." },
        { icon: UserCheck, title: "Expert Consultation", desc: "Connect with certified medical experts directly through the app for guidance." },
        { icon: Database, title: "Inventory Management", desc: "Pharmacies can manage stock levels, expiry dates, and add new products efficiently." },
        { icon: BarChart, title: "Analytics Dashboard", desc: "Comprehensive data insights for pharmacy owners and admin panels." },
        { icon: Shield, title: "Secure Payments", desc: "Multiple secured payment options with encrypted transaction processing." },
        { icon: RefreshCw, title: "Reorder Medicines", desc: "Easy one-click reorder for regular medications with saved prescription history." }
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
                <title>Medicine Delivery App Development | KryossWork</title>
                <meta name="description" content="Top Medicine Delivery App Development Company. We create on-demand pharmacy delivery app solutions for pharmacies, e-pharmacy startups and hospitals." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#F0FDF4] via-white to-[#DCFCE7]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-green-100/50 rounded-full blur-3xl" />
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-green-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">Online Medicine Delivery Solution</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900"
                            >
                                Medicine Delivery App <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-base text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0 font-semibold"
                            >
                                Take your medical store online and start delivering medicines at the doorstep. We create on-demand pharmacy delivery app solutions for pharmacies planning to deliver medicines.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2" onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}>
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
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-teal-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Medicine Delivery App Development"
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
                            <div className="absolute -inset-4 bg-green-50 border border-green-100 rounded-[2rem] transform -rotate-2" />
                            <img
                                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Medicine Delivery App Solution"
                                width="2048"
                                height="1365"
                                className="relative w-full rounded-2xl shadow-xl object-cover h-auto aspect-[2048/1365]"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'; }}
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Pill className="text-green-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Orders Delivered</p>
                                        <p className="text-2xl font-bold text-gray-900">+65%</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Integrated <span className="text-green-600">Medicine Delivery Solution</span>
                            </h2>
                            <p className="text-gray-600 mb-6 text-base font-semibold leading-relaxed max-w-lg">
                                At Kryoss Softech, we work closely with pharmacy chains, e-pharmacy startups, organizations, and hospitals towards creating seamless medicine ordering capability with our innovative medicine delivery software and pharmacy home delivery app solutions.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Customer, Pharmacy, User & Driver Panels",
                                    "Prescription Upload & Management",
                                    "Real-Time Order Tracking",
                                    "Expert Consultation & Live Chat"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/company/contact" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-green-600 transition-all shadow-md">
                                Request a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/40 py-20 px-6">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
                            <span className="bg-gradient-to-r from-green-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Features for Medicine Delivery App
                        </h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            Complete medicine delivery solution with customer, pharmacy, user and driver panels
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-slate-500 rounded-full mx-auto mt-4"></div>
                    </div>

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

                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                        <div ref={leftRef} className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(0, 2).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-green-600 transition-colors leading-tight">{item}</h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Seamless user interaction</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(2, 4).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-green-600 transition-colors leading-tight">{item}</h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Optimized workflow</p>
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
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-green-600 transition-colors leading-tight">{item}</h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Robust tool implementation</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(6, 8).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-green-600 transition-colors leading-tight">{item}</h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Advanced ecosystem control</p>
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
                            Platform <span className="text-green-400">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-green-900/30 p-2 rounded-2xl w-max mx-auto border border-green-800/50 backdrop-blur-sm">
                            <button
                                onClick={() => setActiveFeatureTab("Common")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-green-600 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}
                            >
                                Core Essentials
                            </button>
                            <button
                                onClick={() => setActiveFeatureTab("Advance")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-green-600 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}
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
                                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-green-500/30 group">
                                    <div className="w-14 h-14 bg-green-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors border border-green-800/50">
                                        <feature.icon className="text-green-400 group-hover:text-white transition-colors" size={26} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-green-200/70 font-light leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 5. Stats Section */}
            <section className="py-20 bg-[#F0FDF4] relative">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-2 font-display group-hover:scale-105 transition-transform">
                                    {stat.value}
                                </h3>
                                <p className="text-sm font-bold text-green-600 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Our Solution Features */}
            <section className="py-24 bg-gradient-to-br from-white via-green-50/30 to-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-10" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-semibold tracking-wide mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Tailored to your{" "}
                            <span className="text-green-600 relative inline-block">
                                unique needs
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-green-200" viewBox="0 0 200 12" fill="currentColor">
                                    <path d="M0,10 C20,5 40,12 60,8 C80,4 100,10 120,7 C140,4 160,10 180,6 L200,6" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                            Our solution guarantees power, stability, and lifetime value packed with extraordinary integrations.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
                        <div className="w-full lg:w-2/5 relative group">
                            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                                <img
                                    src="https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="Medicine delivery support"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg z-20 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                                        <div id="product-section">
                <PlusCircle className="w-5 h-5 text-white" />
            </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Customized Solutions</p>
                                        <p className="text-sm text-gray-500">Tailored to your brand</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                                {solutions.map((sol, i) => {
                                    const Icon = sol.icon;
                                    return (
                                        <div key={i} className="group/card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 text-white group-hover/card:scale-110 transition-transform duration-300">
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

            {/* Global Components */}
            <Testimonial theme="blue" />
            <Industries theme={{ bg: "bg-[#f0fdf4]", primary: "text-green-600", iconBg: "bg-green-100", iconColor: "text-green-600" }} />
            <ContactUs id="contact-us" theme="blue" />
        </div>
    );
};

export default MedicineDeliveryApp;

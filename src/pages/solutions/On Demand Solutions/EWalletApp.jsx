import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    ChevronRight, CheckCircle, Wallet, User, Shield, CreditCard,
    Smartphone, MapPin, Clock, MessageSquare,
    Bell, Star, Settings, FileText, BarChart, Zap,
    Headphones, Server, Code, Database, RefreshCw,
    UserCheck, Phone, LayoutDashboard, ArrowRight, PlusCircle, UserPlus, Search, QrCode, Cloud, Gift
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import hero from "../../../assets/e-wallet/hero.png"
import intro from "../../../assets/e-wallet/intro.png"
import tail from "../../../assets/e-wallet/tail.jpg"
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';
import user from "../../../assets/ewallet-app/user.png"
import admin from "../../../assets/ewallet-app/admin.jpg"

const EWalletApp = () => {
    const [activeTab, setActiveTab] = useState("Admin Panel");
    const [activeFeatureTab, setActiveFeatureTab] = useState("Common");
    const [leftHeight, setLeftHeight] = React.useState(0);
    const leftRef = React.useRef(null);

    React.useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight);
        }
    }, [activeTab]);

    const panelFeatures = {
        "Admin Panel": {
            icon: Shield,
            image: admin,
            features: [
                "Default Admin Panel", "New Offers Management", "Manage Users",
                "Usage Analytics", "Cash Report", "Reporting",
                "Users Data Control", "Intercom Support"
            ]
        },
        "User Panel": {
            icon: User,
            image: user,
            features: [
                "Add Cash", "Send Money", "Receive Payments",
                "Transfer Funds", "Recent Transactions", "Invite Friends",
                "Pay Bills", "Link Bank Account"
            ]
        }
    };

    const commonFeatures = [
        { icon: MapPin, title: "Geo-Location", desc: "GPS technology lets users find nearby friends for easy and rapid money transactions." },
        { icon: Smartphone, title: "In-App Camera", desc: "In-app camera feature to scan QR codes for payments, transfers & accepting money." },
        { icon: RefreshCw, title: "Data Sync", desc: "eWallet app automatically syncs bank account with registered mobile number & ensures accuracy." },
        { icon: QrCode, title: "QR Code", desc: "Allows users to pay, transfer, and accept payment with simple QR code scanning." },
        { icon: Cloud, title: "Cloud Connectivity", desc: "Cloud connectivity enables highly secured, reliable and rapid financial transactions." },
        { icon: CreditCard, title: "Third-party Integration", desc: "Integrate with third-party service providers allowing instant payments without app switching." },
        { icon: Phone, title: "USSD Payments", desc: "USSD payment option integrated for users that don't have smartphones." },
        { icon: Bell, title: "Push Notifications", desc: "Get push notifications for offers, transactions, promotions, and rewards on your smartphone." }
    ];

    const advanceFeatures = [
        { icon: Shield, title: "Password Protection", desc: "Users can keep transactions secured with a one-time password option beyond app passwords." },
        { icon: CreditCard, title: "Categorization", desc: "Choose the type of card to use for adding money or any other transaction." },
        { icon: Bell, title: "Push Notifications", desc: "Notifies users about all latest offers, promotions, transactions, rewards, and activity." },
        { icon: FileText, title: "Digital Receipt", desc: "Go paperless and get digital receipts for all transactions via email or message." },
        { icon: Database, title: "Backup Feature", desc: "Auto-backup allows users to restore and retrieve lost data or past transaction details." },
        { icon: Gift, title: "Gift Vouchers", desc: "Increase user engagement by rewarding users for every transaction they make." },
        { icon: UserPlus, title: "Referral", desc: "Reward users who refer your app to friends to quickly grow your user base." },
        { icon: Smartphone, title: "Virtual Cards", desc: "Users can create virtual cards like actual debit/credit cards for secure payments." },
        { icon: Cloud, title: "Cloud Integration", desc: "Integrates cloud computing to ensure storage is never an issue for users." },
        { icon: RefreshCw, title: "Data Synchronization", desc: "Sync important data from mobile numbers and other accounts to the eWallet app." },
        { icon: MapPin, title: "Geo-Location", desc: "Geolocation and GPS features in eWallet apps for transacting easily with nearby friends." },
        { icon: Clock, title: "Schedule Payments", desc: "Schedule payments for bills, mobile recharge and other recurring transactions easily." }
    ];

    const stats = [
        { value: "750+", label: "Projects Delivered" },
        { value: "150+", label: "Development Staff" },
        { value: "5+", label: "Years Experience" },
        { value: "450+", label: "Satisfied Clients" }
    ];

    const solutions = [
        { icon: Shield, title: "Password Protection", desc: "One-time password option for secured transaction processing." },
        { icon: FileText, title: "Digital Receipt", desc: "Paperless digital receipts for all transactions via email or message." },
        { icon: Database, title: "Backup Feature", desc: "Auto-backup to restore and retrieve all lost data or past transactions." },
        { icon: Gift, title: "Gift Vouchers", desc: "Reward users for every transaction to increase engagement and retention." },
        { icon: RefreshCw, title: "Data Synchronization", desc: "Seamlessly sync important data from mobile numbers and accounts." },
        { icon: CreditCard, title: "Virtual Cards", desc: "Create virtual debit/credit cards for safe and convenient online payments." },
        { icon: Cloud, title: "Cloud Integration", desc: "Cloud computing integration ensures storage is never an issue." },
        { icon: Clock, title: "Schedule Payments", desc: "Schedule recurring bill payments and mobile recharges easily." }
    ];

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            <Helmet>
                <title>E-Wallet App Development | kryossone</title>
                <meta name="description" content="Leading Digital eWallet App Development Company. We create highly-secured ewallet apps for Android and iOS platforms and wearable devices." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#FFFBEB] via-white to-[#FEF3C7]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10 py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-amber-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">Digital Wallet App Development Services</span>
                            </motion.div>

                            {/* H1 - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900"
                            >
                                E-Wallet App <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto lg:mx-0 mb-6 text-gray-600"
                            >
                                We hold immense expertise in digital eWallet app development and create highly-secured ewallet apps for both Android and iOS platforms and wearable devices. The digital wallet app has simplified the payment system for millions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="text-[16px] font-semibold tracking-[0.01em] normal-case group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-2" onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Start Exploring
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                            </motion.div>
                        </div>

                        <div className="w-full lg:w-[80%] relative flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src={hero}
                                    alt="E-Wallet App Development"
                                    width="2048"
                                    height="1400"
                                    className="max-w-full max-h-full object-cover"
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
                            <div className="absolute -inset-4 bg-amber-50 border border-amber-100 rounded-[2rem] transform -rotate-2" />
                            <img
                                src={intro}
                                alt="E-Wallet App Solution"
                                width="2048"
                                height="1365"
                                className="relative w-full rounded-2xl shadow-xl object-cover h-auto aspect-[2048/1365]"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'; }}
                            />
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                                Integrated <span className="text-amber-600">Digital Wallet Solution</span>
                            </h2>
                            <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-600 mb-6 max-w-lg">
                                At Kryoss Software, we provide mobile wallet app development services for Android and iOS. Our experienced developers have the full potential to develop fully protected and customized mobile payment applications with an appealing look for the digital-first world.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Admin Panel & User Panel with Full Control",
                                    "Secure QR Code Payments & Transfers",
                                    "Multi-Bank Account Linking",
                                    "Real-Time Notifications & Analytics"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/company/contact" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-amber-600 transition-all shadow-md">
                                Request a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/40 py-20 px-6">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-slate-900">
                            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-amber-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Features for E-Wallet App
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-4 max-w-2xl mx-auto">
                            Complete digital wallet solution with admin and user panels
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-slate-500 rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
                        {Object.keys(panelFeatures).map((key) => {
                            const isActive = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${isActive
                                        ? `bg-gradient-to-r from-amber-600 to-slate-700 text-white shadow-lg shadow-amber-200 scale-105`
                                        : `bg-white text-slate-600 hover:text-amber-600 hover:bg-amber-50 border-2 border-amber-200 hover:border-amber-400`
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
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-amber-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-amber-600 transition-colors">{item}</h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">Seamless user interaction</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(2, 4).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-amber-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-amber-600 transition-colors">{item}</h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">Optimized workflow</p>
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
                                className="w-full max-w-[300px] h-auto object-contain"
                                style={{ height: leftHeight > 0 ? `${leftHeight}px` : 'auto' }}
                                onError={(e) => { e.target.src = 'https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=800'; }}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(4, 6).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-amber-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-amber-600 transition-colors">{item}</h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">Robust tool implementation</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(6, 8).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-amber-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div>
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-amber-600 transition-colors">{item}</h4>
                                                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">Advanced ecosystem control</p>
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
                            Mobile Wallet App <span className="text-amber-400">Features</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-amber-900/30 p-2 rounded-2xl w-max mx-auto border border-amber-800/50 backdrop-blur-sm">
                            <button
                                onClick={() => setActiveFeatureTab("Common")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-amber-600 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}
                            >
                                Core Essentials
                            </button>
                            <button
                                onClick={() => setActiveFeatureTab("Advance")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-amber-600 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}
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
                            className={`grid grid-cols-1 md:grid-cols-2 ${activeFeatureTab === "Advance" ? "lg:grid-cols-4" : "lg:grid-cols-4"} gap-6`}
                        >
                            {(activeFeatureTab === "Common" ? commonFeatures : advanceFeatures).map((feature, idx) => (
                                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-500/30 group">
                                    <div className="w-14 h-14 bg-amber-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors border border-amber-800/50">
                                        <feature.icon className="text-amber-400 group-hover:text-white transition-colors" size={26} />
                                    </div>
                                    <h3 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-white mb-3">{feature.title}</h3>
                                    <p className="text-amber-200/70 font-light leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 6. Our Solution Features */}
            <section className="py-24 bg-gradient-to-br from-white via-amber-50/30 to-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-10" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="text-[12px] font-medium tracking-[0.05em] uppercase inline-block px-4 py-1.5 bg-amber-100 text-amber-600 rounded-full mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                            Tailored to your{" "}
                            <span className="text-amber-600 relative inline-block">
                                unique needs
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-200" viewBox="0 0 200 12" fill="currentColor">
                                    <path d="M0,10 C20,5 40,12 60,8 C80,4 100,10 120,7 C140,4 160,10 180,6 L200,6" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                            Our solution guarantees power, stability, and lifetime value packed with extraordinary integrations.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
                        <div className="w-full lg:w-2/5 relative group">
                            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                                <img
                                    src={tail}
                                    alt="E-wallet app support"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                                {solutions.map((sol, i) => {
                                    const Icon = sol.icon;
                                    return (
                                        <div key={i} className="group/card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-amber-200 transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 text-white group-hover/card:scale-110 transition-transform duration-300">
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

            {/* Global Components */}
            <Testimonial theme="blue" />
            <Industries theme={{ bg: "bg-[#fffbeb]", primary: "text-amber-600", iconBg: "bg-amber-100", iconColor: "text-amber-600" }} />
            <PopularBlogs />
            <ContactUs id="contact-us" theme="blue" />
            <TeamMoments />
        </div>
    );
};

export default EWalletApp;
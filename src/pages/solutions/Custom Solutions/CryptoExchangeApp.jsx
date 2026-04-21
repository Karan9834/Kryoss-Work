import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Coins, Shield, LayoutDashboard, Cloud, Smartphone, Database, CheckCircle, 
    ArrowRight, Globe, BarChart3, Settings, Users, Server, Lock, RefreshCw, 
    Zap, Code, FileText, CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import CryptoCardSection from '../../../components/CryptoExchange-Landing/CryptoCardSection';

// Asset Imports
import LandingPageImg from '../../../assets/Crypto & Exchange app/Landing page_.jpg';
import Extra1Img from '../../../assets/Crypto & Exchange app/Extra 1.jpg';
import Extra2Img from '../../../assets/Crypto & Exchange app/Extra 2.jpg';

const CryptoExchangeApp = () => {
    const services = [
        {
            icon: LayoutDashboard,
            title: "Centralized Exchange",
            desc: "Build a Cryptocurrency Exchange Platform mediated by a central controlling body, offering extreme security and trustworthy transacting of Cryptos."
        },
        {
            icon: Cloud,
            title: "Decentralized Exchange",
            desc: "Promotes the Exchange of Cryptos over the Decentralization phenomenon along with transparency, extreme anonymity, and middlemen-free transfer."
        },
        {
            icon: RefreshCw,
            title: "Hybrid Exchange",
            desc: "Avail the features of both CEX and DEX by building a Hybrid Exchange that supports crypto transfer via both modes, adding versatility."
        },
        {
            icon: Users,
            title: "P2P Exchange",
            desc: "Carry out end-to-end delivery of cryptos without middlemen through a dedicated framework for Peer-to-Peer exchanges."
        },
        {
            icon: Shield,
            title: "Escrow Exchange",
            desc: "Build a highly secured platform monitored by Escrow Protocol offering rapid speed, multi-currency pairing, and token support."
        },
        {
            icon: Globe,
            title: "OTC Exchange",
            desc: "Build an exclusive platform to carry out a voluminous amount of trade directly without the supervision of an exchange."
        },
        {
            icon: BarChart3,
            title: "Derivative Exchange",
            desc: "Carry out trade based on the market performance of Cryptos capable of trading over both DEX and CEX platforms."
        },
        {
            icon: FileText,
            title: "White Label Exchange",
            desc: "Fully end-to-end customizable White Label Crypto Exchange bringing more participants and contributing to improved UX."
        },
        {
            icon: LayoutDashboard,
            title: "Binance like Exchange",
            desc: "The benchmark standard for exchange seekers offering a Binance-like platform that is the forerunner of current Crypto trends."
        }
    ];

    const exchangeFeatures = [
        { icon: Smartphone, title: "Web And Mobile Adaptability", desc: "Highly scalable responsive designs, adaptable across mobile devices and modern API interface for liquidity integration." },
        { icon: Server, title: "Scalable Architecture", desc: "Adaptable to microservices complexities that supports scalable cloud deployment." },
        { icon: LayoutDashboard, title: "Intuitive User-interface", desc: "A user-friendly interface that has a minimalistic, semantic, and highly customizable design." },
        { icon: Code, title: "Blockchain APIs Development", desc: "Enable users to trade using real-time charts and historical values with third-party integration." },
        { icon: Settings, title: "Configurable Admin Console", desc: "Enable admin to edit trading fees, add new currencies, manage listings, and support countries." },
        { icon: Shield, title: "Security And Compliance", desc: "Activating cold wallet integration, multi-signature, 2FA, anti-money laundering, KYC, AES 256 cryptography." }
    ];

    const coreFeatures = [
        "Top-Notch Match Engine - automated peers matching", "Multi-Lingual - to attract a globalized consumer base",
        "Cross-Border Trading - international transactions", "Admin Panel - managed efficiently without technical expertise",
        "Intuitive UI - easy transactions without hindrance", "Payment Gateway Integration - customize supporting currencies"
    ];

    const advancedFeatures = [
        { icon: FileText, title: "Smart Contract Trading", desc: "Equipped with smart contract protocols to enhance trading with no disputes and hacks." },
        { icon: Code, title: "API Integration", desc: "Dedicated customized API and SDK integration to enhance liquidity and platform functionalities." },
        { icon: Shield, title: "Instant KYC", desc: "Make your exchange trustworthy by automating KYC verification with the instant feature." },
        { icon: RefreshCw, title: "Atomic Swap", desc: "Equipped with instant conversion of fiat to cryptocurrencies and vice versa." },
        { icon: Zap, title: "High TPS", desc: "As users increase, trading increases. Our exchanges are capable of handling 50000+ TPS." },
        { icon: Lock, title: "Escrow Service", desc: "Automated trading and secured transactions between peers guaranteed by escrow services." }
    ];

    const hiringReasons = [
        "5+ Years of Experience", "Agile Development Processes", "Proficient Teams",
        "Excellent Customization", "Long-term Support", "Dedicated Resources",
        "Enterprise-grade Services", "On-time Project Delivery", "Project Confidentiality", "Quick Upgrade Services"
    ];

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            <Helmet>
                <title>Crypto & Exchange Solutions | KryossWork</title>
                <meta name="description" content="Top-notch Cryptocurrency Exchange Development Company providing customizable, secure, and advanced blockchain solutions for trade." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />
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
                                <span className="text-sm font-semibold text-gray-700">Crypto Currency Exchange</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6 text-gray-900"
                            >
                                Cryptocurrency Exchange <br /> <span className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto lg:mx-0 mb-6 text-gray-600"
                            >
                                We are a top Cryptocurrency Exchange Development Company that has been developing cutting edge solutions using Blockchain. Complete solutions to unlock revenue and growth for your Crypto business.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="tracking-[0.01em] group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-[16px] font-semibold tracking-[0.01em] normal-case">
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
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src={LandingPageImg}
                                    alt="Crypto Exchange Development Platform"
                                    className="max-w-full h-auto object-contain rounded-3xl shadow-2xl relative z-10"
                                />
                                {/* Decorative elements using extra assets */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-10 -left-10 w-48 h-auto hidden md:block z-20"
                                >
                                    <img src={Extra1Img} alt="Exchange Feature" className="rounded-2xl shadow-xl border-4 border-white" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -top-10 -right-10 w-48 h-auto hidden md:block z-20"
                                >
                                    <img src={Extra2Img} alt="Crypto Portfolio" className="rounded-2xl shadow-xl border-4 border-white" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Services Section */}
            <section className="relative overflow-hidden bg-white py-20 px-6">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="tracking-[0.05em] inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full mb-4 text-[12px] font-medium tracking-[0.05em] uppercase">
                            Exchange Platforms
                        </span>
                        <h2 className="text-slate-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
                            Cryptocurrency Exchange <span className="text-blue-600">Services We Offer</span>
                        </h2>
                        <p className="text-slate-500 mt-4 mx-auto text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">
                            Developing interactive Crypto Exchange solutions for our global clients tailored to specific business needs.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors shadow">
                                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="leading-[1.6] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Features & Solutions Grid */}
            <section className="py-24 bg-[#0F172A] relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] opacity-[0.05]" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="leading-[1.2] text-white mb-6 font-display text-[30px] md:text-[36px] font-bold leading-[1.2]">
                            Cryptocurrency Exchange <span className="text-blue-400">Development Solutions</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {exchangeFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/30 group">
                                <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors border border-blue-800/50">
                                    <feature.icon className="text-blue-400 group-hover:text-white transition-colors" size={26} />
                                </div>
                                <h3 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-white mb-3">{feature.title}</h3>
                                <p className="text-blue-200/70 text-[14px] md:text-[16px] font-normal leading-[1.6]">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-3xl p-8 lg:p-12 border border-blue-800/50 backdrop-blur-sm">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-white font-display text-[30px] md:text-[36px] font-bold leading-[1.2]">
                                Core Features Of Our Cryptocurrency Exchange
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coreFeatures.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                    <span className="text-slate-300 font-medium text-sm leading-tight">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Advanced Features */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 py-20 px-6">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="leading-[1.2] text-slate-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
                            Advanced Features of <span className="text-blue-600">Crypto Exchange Software</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch mb-20">
                        {advancedFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-4">
                                    <feature.icon className="w-8 h-8 text-blue-600" />
                                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                </div>
                                <p className="leading-[1.6] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Hiring Section */}
                    <div className="flex flex-col lg:flex-row gap-16 xl:gap-20 bg-blue-900 rounded-3xl p-8 lg:p-12 text-white">
                        <div className="w-full lg:w-1/3">
                            <h2 className="mb-6 text-white text-[30px] md:text-[36px] font-bold leading-[1.2]">
                                Hire Our Crypto Exchange Development Team
                            </h2>
                            <p className="text-blue-200 mb-8 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                Hire our team of blockchain professionals to work dedicatedly on your crypto exchange development project. Our executives provide innovative and trustworthy solutions.
                            </p>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <div className="grid grid-cols-2 gap-4">
                                {hiringReasons.map((reason, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                        <span className="text-sm font-semibold text-slate-100">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CryptoCardSection />
            <OurWork theme={{ primary: "text-blue-600", accent: "bg-blue-600" }} />
            <Testimonial theme="blue" />
            <Industries theme={{ bg: "bg-[#eff6ff]", primary: "text-blue-600", iconBg: "bg-blue-100", iconColor: "text-blue-600" }} />
            <ContactUs id="contact-us" theme="blue" />
        </div>
    );
};

export default CryptoExchangeApp;

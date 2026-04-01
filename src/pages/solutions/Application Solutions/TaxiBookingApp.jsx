import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight, CheckCircle, Car, User, Shield,
    Smartphone, MapPin, CreditCard, Clock, MessageSquare,
    Bell, Star, Settings, FileText, BarChart, Zap,
    Headphones, Server, Code, Database, RefreshCw,
    UserCheck, Phone, LayoutDashboard, Compass
} from 'lucide-react';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const panelFeatures = {
    "Passenger App": {
        icon: User,
        image: "/images/passenger.jpg",
        features: [
            "Easy Registration & Sign-In", "Push Notifications", "Ratings & Reviews",
            "Password Recovery", "Security & Ratings", "Quick Bookings",
            "Social Media Login", "Account Management", "In-App Payments",
            "Real-Time Updates", "Live Chat With Driver", "Live Tracking", "Seamless Payments"
        ]
    },
    "Driver App": {
        icon: Car,
        image: "/images/driver.jpg",
        features: [
            "Unique Driver Profile", "Social Media Login", "Quick Registration",
            "Set Availability", "Reloads Ride Feature", "Accept/Decline Ride Request",
            "Post My Location Feature", "Previous and Upcoming Trip Log",
            "Contact With Dispatcher", "Push Notifications", "Track Payments", "Ride Details"
        ]
    },
    "Admin Panel": {
        icon: Shield,
        image: "/images/admin.jpg",
        features: [
            "Create Sub Admins", "Multi-Level Admin Access", "Complete Dashboard",
            "Driver Management", "Passenger Management", "Analytics & Reports",
            "God's Eye View", "View Transaction History", "Block Transport Company/Users",
            "Add/Edit/Delete Various Profiles", "Manage Payment Accounts", "Request Management"
        ]
    },
    "Dispatcher Panel": {
        icon: Compass,
        image: "/images/dispatcher.jpg",
        features: [
            "Ride Tracking", "Create Bookings", "Payment Tracking", "Reviews & Feedback",
            "Take phone bookings", "Track Driver locations", "Assign Trips to Drivers",
            "Drivers Management", "Take a Recurrent Booking", "Transaction History",
            "Add/Edit/Delete Profiles", "Live Tracking"
        ]
    }
};

const commonFeatures = [
    { title: "Change/Cancel Booking", icon: RefreshCw, desc: "Users can easily modify or cancel their ride booking anytime directly from the app with a few simple steps." },
    { title: "Schedule Rides", icon: Clock, desc: "Riders can schedule rides for a later date and time, allowing drivers to receive booking notifications in advance." },
    { title: "Payment Modes", icon: CreditCard, desc: "Multiple payment options are supported including credit cards, debit cards, digital wallets, and secure online methods." },
    { title: "Live Geo Tracking", icon: MapPin, desc: "Real-time GPS tracking allows riders to monitor driver location while drivers can quickly locate riders for pickup." },
    { title: "Talk To Your Driver", icon: Phone, desc: "Riders and drivers can communicate through in-app chat or call features without sharing personal contact details." },
    { title: "Promo Codes", icon: Star, desc: "Special discount codes and promotional offers help attract new users and reward loyal customers." },
    { title: "Push Notification", icon: Bell, desc: "Users receive real-time alerts for driver arrival, trip updates, booking confirmations, and important ride information." },
    { title: "Ride History", icon: FileText, desc: "Riders and drivers can view previous trips including date, time, trip details, and payment information." },
    { title: "Tips", icon: Zap, desc: "Customers can easily tip drivers through the app using any integrated payment method." },
    { title: "Refer A Friend", icon: UserCheck, desc: "Users can invite friends to join the platform using referral links and receive rewards for successful sign-ups." },
    { title: "Peak Hours", icon: BarChart, desc: "Ride fares automatically adjust during busy hours based on demand through dynamic pricing rules." },
    { title: "Filters", icon: Settings, desc: "Users can apply filters to quickly find rides, vehicle types, and preferred service options." }
];

const solutions = [
    { title: "Fully Customizable", icon: Settings, desc: "Our Script is flexible enough to meet the specific needs of the Clients." },
    { title: "Bug Support", icon: Shield, desc: "If there are any bugs or issues you can report to us, we will work on it & Update the status of the work. This service will be provided free for the first year." },
    { title: "Licence For A Lifetime", icon: FileText, desc: "Source Code for a lifetime license and one domain/ brand. With a one-off payment, your software will be covered for the duration of a lifetime." },
    { title: "Linux Server Installation", icon: Server, desc: "Web Panels will work smoothly in open source Linux Servers. You will be informed once the server configuration and hosting has been done by the technical team." },
    { title: "Open Source Database", icon: Database, desc: "We use MySQL, which is an open source and one of the safest databases. You will also have to pay minimal price for license renewal every year." },
    { title: "Payments", icon: CreditCard, desc: "Our Scripts support International Payment Gateways, API with easy Installations of new ones as per the business needs." },
    { title: "Technical Support", icon: Headphones, desc: "We provide One Year Free Support, even non-technical entrepreneurs will be benefitted, we handle everything till everything is launched." },
    { title: "Open Source Code", icon: Code, desc: "We provide a 100% open source code that will allow all types of customization’s." }
];

const portfolio = [
    {
        title: "Trusted Taxi-Cab Booking",
        description: "A reliable taxi booking platform with real-time ride tracking, driver management, and secure payment integration.",
        tags: ["Booking", "Realtime", "Secure"],
        image: "https://images.unsplash.com/photo-1549921296-3a6b0c4b7f47"
    },
    {
        title: "City Cab-Native Uber Clone",
        description: "A full-featured Uber-like app with ride scheduling, GPS tracking, driver-passenger matching, and fare estimation.",
        tags: ["Uber Clone", "GPS", "Mobile App"],
        image: "https://images.unsplash.com/photo-1556122071-e404cb6f31a2"
    },
    {
        title: "OneRoad-React Native App",
        description: "A cross-platform React Native taxi app designed for seamless booking, notifications, and user-friendly experience.",
        tags: ["React Native", "Cross Platform", "UI/UX"],
        image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
    }
];

const advanceFeatures = [
    { title: "In-App Wallet", icon: CreditCard, desc: "Secure in-app wallet for fast, cashless, and hassle-free transactions." },
    { title: "SOS/Panic Button", icon: Shield, desc: "Integrated SOS button for enhanced passenger and driver safety during journeys." },
    { title: "Multi-Language", icon: Settings, desc: "Allow users to operate the application in their preferred native languages." },
    { title: "Smart Analytics", icon: BarChart, desc: "Comprehensive dashboard for admins to track business growth and user metrics." },
    { title: "Heat Map Option", icon: MapPin, desc: "Empower drivers to see locations with maximum requests to optimize routes." },
    { title: "Automated Dispatch", icon: Zap, desc: "Intelligent system that auto-assigns the nearest available driver to cut wait times." },
    { title: "Loyalty Programs", icon: Star, desc: "Reward frequent riders with points that can be redeemed for discounted trips." },
    { title: "Driver Dashboard", icon: LayoutDashboard, desc: "Track driver behaviors, ratings, and acceptance rates to ensure high-quality service." }
];

const TaxiBookingApp = () => {
    const [activeTab, setActiveTab] = useState('Passenger App');
    const [activeFeatureTab, setActiveFeatureTab] = useState('common');

    const features = activeFeatureTab === "common" ? commonFeatures : advanceFeatures;

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            <Helmet>
                <title>Taxi Booking App Development | Kryoss</title>
                <meta name="description" content="Build your comprehensive taxi dispatch solution with our top-tier taxi booking app development services. Get multi-panel mobile applications equipped with outstanding features to outpace the competition." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FEF9C3] -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-50"></div>
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-200 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

                <div className="relative z-10 container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Content Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 text-left"
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 font-semibold mb-6 tracking-wide text-sm backdrop-blur-md">
                                Premium Solution Available
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1E293B] mb-6 tracking-tight leading-tight">
                                Taxi Booking <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">App Development</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#4A4B5E] font-light leading-relaxed mb-10 max-w-xl">
                                Build your taxi dispatch solution with us and be ahead of the pack. Empower your transportation business with our lightning-fast, highly scalable mobile infrastructure.
                            </p>
                            <div className="flex gap-4">
                                <a href="#contact-us" className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1">
                                    Let's Talk
                                </a>
                            </div>
                        </motion.div>

                        {/* Image Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 flex justify-center items-center relative"
                        >
                            <div className="relative w-full flex items-center justify-center min-h-[300px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent blur-[80px] rounded-full"></div>
                                <img
                                    src="/images/taxi-booking-hero.png"
                                    alt="Taxi App Development"
                                    className="relative z-10 max-h-[500px] w-full object-contain drop-shadow-2xl"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl' }}
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. Breadcrumb (Nav Path) */}
            <section className="bg-white/90 border-b border-gray-100 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-yellow-600 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="hover:text-yellow-600 cursor-pointer transition-colors duration-300">Solutions</span>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-yellow-600">Taxi Booking App Development</span>
                </div>
            </section>

            {/* 3. Home / Intro */}
            <section className="py-20 md:py-28 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Content Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Complete multi-panel solution for <br />
                                <span className="text-orange-500">seamless taxi booking experience</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                                Kryoss Softech is a leading one-stop solution that provides impressive features and options
                                that are available and give turnkey taxi app solutions using friendly services at affordable
                                prices and give an edge to the competitors.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed font-light">
                                Our team of experienced professionals works
                                relentlessly to deliver a robust taxi booking script that will streamline the entire online
                                taxi booking operations. Once you launch your own online taxi booking platform with our
                                outstanding taxi booking solution, you can grow your online ride-hailing business exponentially.
                            </p>
                        </motion.div>

                        {/* Image Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 flex justify-center items-center relative"
                        >
                            <div className="overflow-hidden relative group w-full flex items-center justify-center min-h-[300px]">
                                <img
                                    src="/images/taxi-booking-intro.png"
                                    alt="Taxi Booking Platform"
                                    className="max-h-[450px] w-full object-contain"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-xl' }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Must-Have Features (Tabs Layout) */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Must-Have Features <span className="text-orange-500">for Taxi Booking App</span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 items-stretch max-w-7xl mx-auto">

                        {/* LEFT IMAGE (40%) */}
                        <div className="w-full lg:w-2/5">
                            <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl relative">
                                <img
                                    src={panelFeatures[activeTab].image}
                                    alt={activeTab}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                {/* Text */}
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold">{activeTab}</h3>
                                    <p className="text-sm opacity-80">Modern & scalable system</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT (60%) */}
                        <div className="w-full lg:w-3/5 flex flex-col lg:flex-row gap-6">

                            {/* Tabs */}
                            <div className="w-full lg:w-1/3 flex flex-col gap-3">
                                {Object.keys(panelFeatures).map((key) => {
                                    const Icon = panelFeatures[key].icon;
                                    const isActive = activeTab === key;

                                    return (
                                        <button
                                            key={key}
                                            onClick={() => setActiveTab(key)}
                                            className={`relative px-5 py-4 rounded-2xl flex items-center gap-3 transition 
                ${isActive
                                                    ? "bg-orange-500 text-white shadow-lg"
                                                    : "bg-white text-gray-600 hover:bg-orange-50"
                                                }`}
                                        >
                                            <Icon size={20} />
                                            <span className="font-semibold">{key}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-2/3">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="bg-white rounded-3xl p-8 shadow-lg h-full"
                                    >
                                        <h3 className="text-xl font-bold mb-6">
                                            {activeTab} Features
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {panelFeatures[activeTab].features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle size={16} className="text-orange-500" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Features for Taxi App (Grid) */}
            <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-600/10 blur-[150px]"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Features for Taxi App
                        </h2>

                        {/* Tabs */}
                        <div className="flex justify-center gap-8 text-sm font-medium">
                            <button
                                onClick={() => setActiveFeatureTab("common")}
                                className={`relative pb-2 transition ${activeFeatureTab === "common"
                                    ? "text-orange-500"
                                    : "text-gray-400"
                                    }`}
                            >
                                Common Features
                                {activeFeatureTab === "common" && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500"></span>
                                )}
                            </button>

                            <button
                                onClick={() => setActiveFeatureTab("advance")}
                                className={`relative pb-2 transition ${activeFeatureTab === "advance"
                                    ? "text-orange-500"
                                    : "text-gray-400"
                                    }`}
                            >
                                Advance Features
                                {activeFeatureTab === "advance" && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500"></span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {features.map((feat, idx) => {
                            const Icon = feat.icon;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx % 4 * 0.1 }}
                                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:bg-gray-800 hover:border-orange-500/50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                                        <Icon className="text-orange-500 group-hover:text-white transition-colors" size={24} />
                                    </div>

                                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                        {feat.title}
                                    </h4>

                                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                                        {feat.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* 6. Stats Section */}
            <section className="py-16 bg-orange-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')] bg-cover bg-center opacity-20 mix-blend-multiply"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-orange-400/50">
                        <div className="p-4">
                            <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-md">750+</h3>
                            <p className="text-orange-100 font-bold uppercase tracking-wider text-sm">Projects Delivered</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-md">150+</h3>
                            <p className="text-orange-100 font-bold uppercase tracking-wider text-sm">Development Staff</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-md">10+</h3>
                            <p className="text-orange-100 font-bold uppercase tracking-wider text-sm">Years of Experience</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-md">450+</h3>
                            <p className="text-orange-100 font-bold uppercase tracking-wider text-sm">Satisfied Clients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Our Solution/Package Features */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Tailored to your <span className="text-orange-500">unique business needs</span>
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg font-light">
                                Our solution guarantees power, stability, and lifetime value packed with extraordinary integrations.
                            </p>
                            <div className="hidden lg:block w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-60 absolute left-10 mt-10"></div>
                        </div>

                        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {solutions.map((sol, i) => {
                                const Icon = sol.icon;
                                return (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-orange-500">
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

            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            OUR TAXI PRODUCTS
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Latest Taxi Products
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolio.map((item, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group flex flex-col h-full"
                            >
                                {/* IMAGE SECTION */}
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                    {/* Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-2xl rounded-full"></div>

                                    {/* Icon */}
                                    <Car size={40} className="text-orange-400 absolute top-6 right-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />

                                    {/* Title */}
                                    <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold leading-tight z-10">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* CONTENT */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {item.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 & 10. Global Components (Testimonials, Industries, OurWork, ContactUs) */}
            <Testimonial theme="orange" />
            <Industries theme={{ bg: "bg-[#fff3eb]", primary: "text-orange-500", iconBg: "bg-orange-100", iconColor: "text-orange-500" }} />
            <OurWork theme={{ primary: "text-orange-500", accent: "bg-orange-500" }} />
            <ContactUs id="contact-us" theme="orange" />

        </div>
    );
};

export default TaxiBookingApp;

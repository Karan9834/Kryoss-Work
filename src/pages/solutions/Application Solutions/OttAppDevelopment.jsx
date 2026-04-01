import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Film,
    CheckCircle,
    Users,
    Shield,
    Smartphone,
    MapPin,
    CreditCard,
    Clock,
    MessageSquare,
    Bell,
    Star,
    Settings,
    FileText,
    BarChart,
    Zap,
    Headphones,
    Server,
    Code,
    Database,
    RefreshCw,
    UserCheck,
    Phone,
    LayoutDashboard,
    Compass,
    Search,
    Navigation,
    DollarSign,
    Layers,
    Heart,
    Plane,
    Building2,
    Truck,
    PlayCircle,
    GraduationCap,
    ArrowRight,
    Send,
    Mail,
    Globe,
    Tv,
    Video,
    TrendingUp,
    History,
    User,
    Award,
    Calendar,
    Play,
    ThumbsUp,
    Download,
    Subtitles,
    Lock,
    Eye,
    Monitor,
    Wifi,
    Chrome,
    Apple,
    Film as FilmIcon
} from 'lucide-react';

// Reusable components
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const OttAppDevelopment = () => {
    const [activeTab, setActiveTab] = useState('User App');
    const [activeFeatureTab, setActiveFeatureTab] = useState('common');

    const panelFeatures = {
        "User App": {
            icon: Users,
            image: "/images/ott-user.jpg",
            features: [
                "Sign-up/Social Media Login", "Help Center", "Push Notifications",
                "Recommendations", "Recover Password", "Share Video",
                "Subtitles & Alternate Audio", "Profile Management", "Search bar",
                "Parental Control", "Payment Gateway", "User Comments",
                "Create Watchlist", "Video Download", "Payment Methods",
                "Video Description", "Video Player", "Genre Selection",
                "Subscription Plan", "Register Device Management", "Streaming Quality"
            ]
        },
        "Admin Dashboard": {
            icon: Shield,
            image: "/images/ott-admin.jpg",
            features: [
                "User Management", "Video Management", "Category Management",
                "Subscription Management", "Creator Management", "Ad Management",
                "Analytics Dashboard", "Revenue Reports", "Content Moderation",
                "Push Notifications", "Payment Management", "Device Management",
                "Language Management", "SEO Settings", "Role Management"
            ]
        },
        "Front-end Websites": {
            icon: Monitor,
            image: "/images/ott-website.jpg",
            features: [
                "SEO Friendly Design", "Responsive Layout", "Subscription Plans",
                "Content Showcase", "Trailer Player", "User Reviews",
                "Genre Navigation", "Search Functionality", "Trending Section",
                "Continue Watching", "My List", "Recommendations",
                "Blog Integration", "Contact Forms", "Newsletter Signup"
            ]
        }
    };

    const commonFeatures = [
        { title: "Powerful Admin Panel", icon: LayoutDashboard, desc: "We design and customize a robust OTT streaming platform to give you complete control over user account, content, and interface." },
        { title: "Multiple Payment Gateway", icon: CreditCard, desc: "Multiple payment gateways allow a large number of users to subscribe feasibly. As a result, it is an excellent trigger for higher revenue." },
        { title: "Videos, Category and Users Management", icon: Video, desc: "Admin can categorize the video content to make a highly scalable and user-friendly environment on the OTT platform." },
        { title: "User Management", icon: Users, desc: "Admin can monitor the user activity on its video content and then periodically analyze viewers' trends and choices." },
        { title: "SEO Friendly Design", icon: Chrome, desc: "We design an SEO-friendly OTT platform that simplifies your content's marketing strategies and audience reach." },
        { title: "Records and Statistics", icon: BarChart, desc: "You can track and analyze the app performance through the reports generated in a particular interval of time." },
        { title: "Android & iOS Platform", icon: Smartphone, desc: "The video streaming apps we provide support both iOS and Android. You can offer your OTT apps to your users on both platforms." },
        { title: "Custom Requirements", icon: Settings, desc: "We deliver your video streaming app with all the stunning features. We are ready to include any traits to fit your requirements." }
    ];

    const advanceFeatures = [
        { title: "Multi-DRM Protection", icon: Shield, desc: "Advanced digital rights management to protect your premium content from piracy and unauthorized access." },
        { title: "Adaptive Bitrate Streaming", icon: Wifi, desc: "Automatic quality adjustment based on user's internet connection for buffer-free viewing experience." },
        { title: "Offline Download", icon: Download, desc: "Allow users to download content and watch offline, increasing user engagement and retention." },
        { title: "Multi-Language Support", icon: Globe, desc: "Support multiple languages for UI, subtitles, and audio tracks to reach a global audience." },
        { title: "AI-Powered Recommendations", icon: TrendingUp, desc: "Personalized content suggestions based on viewing history and user preferences." },
        { title: "Live Streaming", icon: Play, desc: "Support for live events, sports, and real-time content streaming with chat integration." },
        { title: "Analytics & Insights", icon: BarChart, desc: "Detailed analytics on user behavior, content performance, and revenue metrics." },
        { title: "Social Media Integration", icon: Users, desc: "Allow users to share content and login via social media platforms for better engagement." }
    ];

    const solutions = [
        { title: "Fully Customizable", icon: Settings, desc: "Our Script is flexible enough to meet the specific needs of the Clients." },
        { title: "Bug Support", icon: Shield, desc: "If there are any bugs or issues you can report to us, we will work on it & Update the status of the work. This service will be provided free for the first year." },
        { title: "Licence For A Lifetime", icon: FileText, desc: "Source Code for a lifetime license and one domain/ brand. With a one-off payment, your software will be covered for the duration of a lifetime." },
        { title: "Linux Server Installation", icon: Server, desc: "Web Panels will work smoothly in open source Linux Servers. You will be informed once the server configuration and hosting has been done by the technical team." },
        { title: "Open Source Database", icon: Database, desc: "We use MySQL, which is an open source and one of the safest databases. You will also have to pay minimal price for license renewal every year." },
        { title: "Payments", icon: CreditCard, desc: "Our Scripts support International Payment Gateways, API with easy Installations of new ones as per the business needs." },
        { title: "Technical Support", icon: Headphones, desc: "We provide One Year Free Support, even non-technical entrepreneurs will be benefitted, we handle everything till everything is launched." },
        { title: "Open Source Code", icon: Code, desc: "We provide a 100% open source code that will allow all types of customization's." }
    ];

    const stats = [
        { label: "Projects Delivered", val: "750" },
        { label: "Development Staff", val: "150" },
        { label: "Years of Experience", val: "10" },
        { label: "Satisfied Clients", val: "450" }
    ];

    const portfolio = [
        {
            title: "Watcho",
            subtitle: "Original Spotlight Exclusive Shows & Films",
            desc: "Watcho is your go-to video streaming app for Watcho Originals online showcasing the best Hindi web series to watch online. Catch the best of originals, latest live channels, Telugu entertainment, new Tamil shows, and Kannada programmes.",
            tags: ["Streaming", "Originals", "Web Series"],
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85"
        },
        {
            title: "Rabbit",
            subtitle: "Video on Demand Platform",
            desc: "Rabbit Movies is a Video on Demand Platform that allows customers to watch a wide variety of Web Series, Movies and EXCLUSIVE Rabbit Original Content in regional and international language.",
            tags: ["VOD", "Movies", "Regional"],
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728"
        },
        {
            title: "Singapore Dating",
            subtitle: "Online Chat & Meet Singaporeans",
            desc: "Singapore Dating is the best free dating app to connect with Singaporean singles! It is a great way to meet people, to make new friends and mingle with them.",
            tags: ["Dating", "Social", "Chat"],
            image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
        },
        {
            title: "Here TV",
            subtitle: "LGBTQ+ Streaming Platform",
            desc: "Watch acclaimed original movies such as Shelter, Academy Award-winning films like Departures, and Emmy-nominated documentary, 30 Years from Here.",
            tags: ["LGBTQ+", "Movies", "Originals"],
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
        },
        {
            title: "DocuBay",
            subtitle: "Streaming Documentaries",
            desc: "Watch Free and Premium Award winning documentaries on crime, nature, travel, culture, science, sports and more. Our ever-growing documentary collection extends across a variety of categories.",
            tags: ["Documentaries", "Educational", "Premium"],
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728"
        }
    ];

    const latestWorks = [
        { title: "Movix", subtitle: "Video Streaming", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85" },
        { title: "Zoom Video Flix App", subtitle: "Streaming Platform", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728" },
        { title: "Prime Plex", subtitle: "Movies & Shows", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1" }
    ];

    const featuresList = [
        { name: "Sign-up/Social Login", icon: Users },
        { name: "Help Center", icon: Headphones },
        { name: "Push Notifications", icon: Bell },
        { name: "Recommendations", icon: Star },
        { name: "Share Video", icon: Users },
        { name: "Subtitles & Audio", icon: Subtitles },
        { name: "Profile Management", icon: User },
        { name: "Search Bar", icon: Search },
        { name: "Parental Control", icon: Lock },
        { name: "Payment Gateway", icon: CreditCard },
        { name: "Create Watchlist", icon: Tv },
        { name: "Video Download", icon: Download },
        { name: "Video Player", icon: Play },
        { name: "Genre Selection", icon: Layers },
        { name: "Subscription Plan", icon: Calendar },
        { name: "Streaming Quality", icon: Wifi }
    ];

    const industries = [
        { name: "Healthcare", icon: Heart },
        { name: "Travel & Tourism", icon: Plane },
        { name: "Banking & Finance", icon: Building2 },
        { name: "Logistics & Transport", icon: Truck },
        { name: "Media & Entertainment", icon: PlayCircle },
        { name: "Education & E-Learning", icon: GraduationCap }
    ];

    const features = activeFeatureTab === "common" ? commonFeatures : advanceFeatures;

    return (
        <div className="w-full bg-black relative font-sans overflow-hidden">
            <Helmet>
                <title>OTT App Development | Kryoss</title>
                <meta name="description" content="Create your own OTT streaming platform now! Kryoss Softech offers high-end customized OTT app development for Android, iOS, and Web." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-black">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-20"></div>
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-20"></div>

                <div className="relative z-10 container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Content Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 text-left"
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-red-600/30 border border-red-500/50 text-white font-semibold mb-6 tracking-wide text-sm backdrop-blur-md">
                                Premium Streaming Solution
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                                OTT App <br className="hidden lg:block" />
                                <span className="text-red-400">Development Company</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-xl">
                                Kryoss Softech is an outstanding OTT app development company that provides a comprehensive suite of services to assist you manage, deliver, and monetize your OTT content. We strive to serve the ultimate mobile entertainment experience to the users.
                            </p>
                            <div className="flex gap-4">
                                <a href="#contact-us" className="px-8 py-4 rounded-xl bg-red-600 text-white font-bold text-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-1">
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
                                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-[80px] rounded-full"></div>
                                <img
                                    src="/images/ott-hero.png"
                                    alt="OTT App Development"
                                    className="relative z-10 max-h-[500px] w-full object-contain drop-shadow-2xl"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl' }}
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. Breadcrumb */}
            <section className="bg-black/90 border-b border-gray-800 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-400">
                    <a href="/" className="hover:text-red-500 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-600" />
                    <span className="hover:text-red-500 cursor-pointer transition-colors duration-300">Solutions</span>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-600" />
                    <span className="text-red-500">OTT App Development</span>
                </div>
            </section>

            {/* 3. Home / Intro */}
            <section className="py-20 md:py-28 bg-black relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Content Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                OTT App <br />
                                <span className="text-red-500">Development Company</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6 font-light">
                                Kryoss Softech is an outstanding OTT app development company that provides a comprehensive suite of services to assist you manage, deliver, and monetize your OTT content. We strive to serve the ultimate mobile entertainment experience to the users.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed font-light">
                                We develop custom Streaming and OTT applications which provide rich, intuitive and omni channel experiences to viewers across devices and destinations. Our amazing OTT platform development will make your business reach the extent of success and high ROI.
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
                                    src="/images/ott-intro.png"
                                    alt="OTT Platform"
                                    className="max-h-[450px] w-full object-contain"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-xl' }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Must-Have Features (Tabs Layout) */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-black border-y border-red-900/30">
                <div className="container mx-auto px-4 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Features of <span className="text-red-500">OTT Platform Development</span>
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 items-stretch max-w-7xl mx-auto">

                        {/* LEFT IMAGE (40%) */}
                        <div className="w-full lg:w-2/5">
                            <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl relative">
                                <img
                                    src={panelFeatures[activeTab].image}
                                    alt={activeTab}
                                    className="w-full h-full object-cover transition-all duration-500"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800'; }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                                {/* Text */}
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold">{activeTab}</h3>
                                    <p className="text-sm opacity-80">Complete streaming solution</p>
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
                                                    ? "bg-red-600 text-white shadow-lg"
                                                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
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
                                        className="bg-gray-900 rounded-3xl p-8 shadow-lg h-full border border-gray-800"
                                    >
                                        <h3 className="text-xl font-bold text-white mb-6">
                                            {activeTab} Features
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                            {panelFeatures[activeTab].features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle size={16} className="text-red-500 flex-shrink-0" />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
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

            {/* 5. Features for OTT App (Grid) */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-600/5 blur-[150px]"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Must-Have Features for OTT App
                        </h2>

                        {/* Tabs */}
                        <div className="flex justify-center gap-8 text-sm font-medium">
                            <button
                                onClick={() => setActiveFeatureTab("common")}
                                className={`relative pb-2 transition ${activeFeatureTab === "common"
                                    ? "text-red-500"
                                    : "text-gray-500"
                                    }`}
                            >
                                Common Features
                                {activeFeatureTab === "common" && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
                                )}
                            </button>

                            <button
                                onClick={() => setActiveFeatureTab("advance")}
                                className={`relative pb-2 transition ${activeFeatureTab === "advance"
                                    ? "text-red-500"
                                    : "text-gray-500"
                                    }`}
                            >
                                Advance Features
                                {activeFeatureTab === "advance" && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
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
                                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:bg-gray-800 hover:border-red-500/50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600 transition-colors duration-300">
                                        <Icon className="text-red-500 group-hover:text-white transition-colors" size={24} />
                                    </div>

                                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
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
            <section className="py-16 bg-gradient-to-r from-red-900/20 to-black relative overflow-hidden border-y border-red-900/30">
                <div className="absolute inset-0 bg-[url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-red-800">
                        {stats.map((s, index) => (
                            <div key={index} className="p-4">
                                <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-2">{s.val}+</h3>
                                <p className="text-red-500 font-bold uppercase tracking-wider text-sm">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Our Solution/Package Features */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                What Support <span className="text-red-500">You Get?</span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg font-light">
                                Our solution will be tailored to the unique needs of our Clients and packed with powerful features and integrations.
                            </p>
                            <div className="hidden lg:block w-32 h-32 bg-red-600/20 rounded-full blur-2xl opacity-60 absolute left-10 mt-10"></div>
                        </div>

                        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {solutions.map((sol, i) => {
                                const Icon = sol.icon;
                                return (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-900 border border-gray-800 hover:shadow-md hover:border-red-500/50 transition-all duration-300">
                                        <div className="w-12 h-12 bg-gray-800 rounded-xl shadow-sm border border-gray-700 flex items-center justify-center flex-shrink-0 text-red-500">
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-2">{sol.title}</h4>
                                            <p className="text-sm text-gray-400 font-light">{sol.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Our Work Portfolio */}
            <section className="py-20 bg-gray-950 border-t border-gray-800">
                <div className="container mx-auto px-4 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-2">
                            OUR OTT PRODUCTS
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Work
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolio.slice(0, 3).map((item, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 group flex flex-col h-full"
                            >
                                {/* IMAGE SECTION */}
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800'; }}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                                    {/* Icon */}
                                    <Film size={40} className="text-red-500 absolute top-6 right-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />

                                    {/* Title */}
                                    <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold leading-tight z-10">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* CONTENT */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
                                        {item.desc.substring(0, 120)}...
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {item.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-red-600/20 text-red-400 text-[9px] font-bold uppercase tracking-wider rounded-md"
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

            {/* 9. Latest Works Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Latest <span className="text-red-500">OTT Products</span>
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {latestWorks.map((work, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-800 mb-6 border-4 border-gray-800 shadow-lg transition-all group-hover:border-red-500 group-hover:scale-105">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800'; }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white text-center group-hover:text-red-500 transition-colors">{work.title}</h3>
                                <p className="text-red-500 font-semibold uppercase text-xs tracking-wider text-center mt-1">{work.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Industries Section */}
            <section className="py-20 bg-gray-950">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Industries We <span className="text-red-500">Serve</span>
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            As one of the top mobile apps development companies, we provide custom mobile app development solutions for various industries catering startups, software product development companies, digital agencies, and enterprises.
                        </p>
                        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                        {industries.map((ind, index) => {
                            const Icon = ind.icon;
                            return (
                                <div key={index} className="text-center group cursor-pointer">
                                    <div className="w-24 h-24 bg-gray-800 hover:bg-red-600 transition-all border border-gray-700 rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-xl group-hover:scale-110">
                                        <Icon className="h-10 w-10 text-red-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-sm uppercase tracking-wider mt-4 text-gray-400 group-hover:text-red-500">{ind.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 11. Global Components */}
            <Testimonial theme="red" />
            <Industries theme={{ bg: "bg-gray-900", primary: "text-red-500", iconBg: "bg-red-600/20", iconColor: "text-red-500" }} />
            <OurWork theme={{ primary: "text-red-500", accent: "bg-red-600" }} />
            <ContactUs id="contact-us" theme="red" />

        </div>
    );
};

// Add missing ChevronRight component
const ChevronRight = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

export default OttAppDevelopment;
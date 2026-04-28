import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    CheckCircle, User, Shield, Server,
    MapPin, CreditCard, Bell, Star, FileText, BarChart, Zap,
    Headphones, Code, RefreshCw, PenTool, Layout, Box, Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import ProductSection from '../../../components/News/Products';
import hero from "../../../assets/News-Media/hero.png"
import intro from "../../../assets/News-Media/intro.jpg"
import why from "../../../assets/News-Media/why.jpg"
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const NewsMediaIndustry = () => {
    const [activeTab, setActiveTab] = useState("Reader App");
    const [activeFeatureTab, setActiveFeatureTab] = useState("Common");
    const [leftHeight, setLeftHeight] = React.useState(0);
    const leftRef = React.useRef(null);

    React.useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight);
        }
    }, [activeTab]);

    const panelFeatures = {
        "Reader App": {
            icon: User,
            image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1200&auto=format&fit=crop",
            features: [
                "Profile Management", "Category Selection", "Push Notifications",
                "Save & Read Later", "Social Media Sharing", "Content Discovery",
                "Advanced Filtering", "Search Archives"
            ]
        },
        "Author Panel": {
            icon: PenTool,
            image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1200&auto=format&fit=crop",
            features: [
                "Post Management", "Content Editor", "Analytics Tracking",
                "Publish Scheduling", "Media Library", "Earnings Dashboard",
                "Review Comments", "Author Profiles"
            ]
        },
        "Admin Dashboard": {
            icon: Shield,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
            features: [
                "Manage Users/Authors", "Category Management", "Revenue Analytics",
                "Ad Integration", "System Settings", "Content Moderation",
                "Email Dispatching", "Analytics Reports"
            ]
        }
    };

    const commonFeatures = [
        { icon: Layout, title: "Custom Feed Presentation", desc: "Showcases trending content and dynamic topics perfectly tailored to viewer preferences seamlessly." },
        { icon: Bell, title: "Instant Event Alerts", desc: "Pushes major updates and breaking information efficiently ensuring maximum platform re-engagement constantly." },
        { icon: Box, title: "Format Independence", desc: "Integrates articles, vlogs, and media seamlessly presenting a coherent digital editorial narrative reliably." },
        { icon: Settings, title: "Category Navigation", desc: "Streamlines user access via optimized hierarchical multi-level editorial categorizations easily." },
        { icon: BarChart, title: "Behavioral Analytics", desc: "Traces complete interaction logic supplying accurate predictive modeling data effectively." },
        { icon: RefreshCw, title: "Content Refresh Control", desc: "Supports real-time CMS deployment without breaking application front-end displays natively." }
    ];

    const advanceFeatures = [
        { icon: Server, title: "High-Load Processing", desc: "Accommodates sudden viral traffic spikes across all channels uniformly utilizing modern auto-scalability." },
        { icon: Shield, title: "Anti-Spam Verification", desc: "Clears unwanted comments or bot injections with optimized filtering rule-sets cleanly." },
        { icon: Star, title: "Premium Subscriptions", desc: "Configures flexible paywalls enforcing premium editorial monetization dynamically." },
        { icon: Zap, title: "Quick-Loading Archives", desc: "Retrieve massive volumes of historical editorial pieces immediately powered by optimized memory data logic." },
        { icon: PenTool, title: "Integrated Editing Suite", desc: "Allow contributing writers to build rich content pages naturally inside platform modules entirely." },
        { icon: Headphones, title: "Support Management", desc: "Assists user base quickly scaling resolution through integrated messaging systems automatically." }
    ];

    const stats = [
        { value: "750+", label: "Projects Delivered" },
        { value: "150+", label: "Development Staff" },
        { value: "5+", label: "Years of Experience" },
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
                <title>News & Media App Development | kryossone</title>
                <meta name="description" content="We specialize in digital press application delivery creating engaging spaces for large editorial companies." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10 py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-gray-500 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">Premium Solution Available</span>
                            </motion.div>

                            {/* H1 - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900"
                            >
                                News & Media <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">App Development</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto lg:mx-0 mb-6 text-gray-600"
                            >
                                Build scalable and modern news & media applications designed specifically for agencies seeking high volume content distribution. Maintain robust operations across worldwide readers.
                            </motion.p>
                        </div>

                        <div className="w-full lg:w-[55%] relative flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/10 to-blue-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src={hero}
                                    alt="News Media App Development"
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
                            <div className="absolute -inset-4 bg-gray-100 border border-gray-200 rounded-[2rem] transform -rotate-2" />
                            <img
                                src={intro}
                                alt="Media Solution"
                                width="2048"
                                height="1365"
                                className="relative w-full rounded-2xl shadow-xl object-cover h-auto"
                            />
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                                Press & Content <span className="text-gray-500">Distribution Solutions</span>
                            </h2>
                            <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-600 mb-6 max-w-lg">
                                Develop dynamic newspaper applications and digital magazines providing intuitive categorization systems directly engaging with global current affairs. Keep your readers hooked reliably on an ad-friendly interface.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50/40 py-20 px-6">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-slate-900">
                            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-gray-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Features of Media App
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
                                        ? `bg-gradient-to-r from-gray-600 to-slate-700 text-white shadow-lg shadow-gray-200 scale-105`
                                        : `bg-white text-slate-600 hover:text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-400`
                                        }`}
                                >
                                    {key.toUpperCase()}
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                        {/* LEFT */}
                        <div ref={leftRef} className="grid grid-cols-2 gap-3 min-h-[400px]">

                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(0, 2).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-gray-200 hover:border-gray-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div className="flex flex-col justify-center">
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-gray-600 transition-colors">
                                                    {item}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(2, 4).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-gray-200 hover:border-gray-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div className="flex flex-col justify-center">
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-gray-600 transition-colors">
                                                    {item}
                                                </h4>
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
                                className="w-full max-w-[300px] h-[400px] object-cover rounded-xl drop-shadow-2xl"
                                style={{ height: leftHeight > 0 ? `${leftHeight}px` : 'auto' }}
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="grid grid-cols-2 gap-3 min-h-[400px]">

                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(4, 6).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-gray-200 hover:border-gray-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div className="flex flex-col justify-center">
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-gray-600 transition-colors">
                                                    {item}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(6, 8).map((item, idx) => (
                                    <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-gray-200 hover:border-gray-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-start">
                                        <div className="flex gap-2 w-full items-start">
                                            <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                            <div className="flex flex-col justify-center">
                                                <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-gray-600 transition-colors">
                                                    {item}
                                                </h4>
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
                            Platform <span className="text-gray-400">Capabilities</span>
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 bg-black/30 p-2 rounded-2xl w-max mx-auto border border-gray-800/50 backdrop-blur-sm">
                            <button onClick={() => setActiveFeatureTab("Common")} className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Common" ? "bg-gray-500 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}>Core Essentials</button>
                            <button onClick={() => setActiveFeatureTab("Advance")} className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFeatureTab === "Advance" ? "bg-gray-500 text-white shadow-lg" : "text-gray-300 hover:text-white"}`}>Premium Tools</button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div key={activeFeatureTab} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(activeFeatureTab === "Common" ? commonFeatures : advanceFeatures).map((feature, idx) => (
                                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-500/30 group">
                                    <div className="w-14 h-14 bg-gray-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-500 transition-colors border border-gray-800/50">
                                        <feature.icon className="text-gray-400 group-hover:text-white transition-colors" size={26} />
                                    </div>
                                    <h3 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-100/70 font-light leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="text-[12px] font-medium tracking-[0.05em] uppercase inline-block px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full mb-4">Why Choose Us</span>
                        <h2 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
                            Tailored to your <span className="text-gray-500 relative inline-block">unique business</span> needs
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
                        <div className="w-full lg:w-2/5 relative group">
                            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                                <img src={why} alt="Solutions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                                {solutions.map((sol, i) => {
                                    const Icon = sol.icon;
                                    return (
                                        <div key={i} className="group/card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-start gap-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 text-white group-hover/card:scale-110 transition-transform duration-300">
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
            <div id="product-section">
                <ProductSection />
            </div>

            <Testimonial theme="gray" />
            <Industries theme={{ bg: "bg-gray-50", primary: "text-gray-500", iconBg: "bg-gray-100", iconColor: "text-gray-500" }} />
            <OurWork theme={{ primary: "text-gray-500", accent: "bg-gray-500" }} />
            <PopularBlogs />
            <ContactUs id="contact-us" theme="gray" />
            <TeamMoments />
        </div>
    );
};

export default NewsMediaIndustry;
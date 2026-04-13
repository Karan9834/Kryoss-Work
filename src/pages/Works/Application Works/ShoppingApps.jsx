import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import data from './ShoppingAppsData.json';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
const ShoppingApps = () => {
    const [activeTab, setActiveTab] = useState(data.tabs[0]?.id);
    const tabs = data.tabs || [];
    const sectionsData = data.sections || {};

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">

            {/* Hero Section */}
            <section
                className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center text-center text-white"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('https://kryosssoftech.org/icons/banner/shopping.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4"
                >
                    <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6">Shopping <span className="text-orange-500">Applications</span></h1>
                    <p className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto text-gray-200">
                        Next-generation shopping application solutions delivering seamless eCommerce experiences.
                    </p>
                </motion.div>
            </section>

            {/* Breadcrumb */}
            <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-orange-500">Shopping Applications</span>
                </div>
            </section>

            {/* Portfolio Tabs */}
            <section className="pt-16 md:pt-24 bg-white relative z-10 w-full mb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-black mb-4"
                        >
                            Our <span className="text-orange-500">Shopping</span> Portfolio
                        </motion.h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-8 px-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-2 text-sm lg:text-[15px] font-bold uppercase transition-colors duration-300 border-b-2 tracking-wide ${activeTab === tab.id ? 'border-orange-500 text-black' : 'border-transparent text-gray-500 hover:text-orange-500 hover:border-orange-500/50'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-full mt-8 min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col w-full"
                        >
                            {sectionsData[activeTab]?.map((item, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div key={index} className={`w-full py-16 lg:py-24 ${isEven ? 'bg-white' : 'bg-orange-50'}`}>
                                        <div className={`container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                            <div className="w-full lg:w-1/2 flex justify-center items-center relative drop-shadow-2xl">
                                                <img src={item.img} alt={item.alt || 'Portfolio App'} className="max-h-[500px] max-w-full object-contain" loading="lazy" />
                                            </div>
                                            <div className="w-full lg:w-1/2 flex flex-col justify-center z-20">
                                                <h3 className="text-2xl md:text-4xl font-extrabold text-black mb-6 leading-tight hover:text-orange-600 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: item.titleHtml || item.titleText }} />
                                                <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">{item.description}</p>
                                                {item.links && item.links.length > 0 && (
                                                    <div className="flex flex-wrap gap-4 items-center">
                                                        {item.links.map((link, idx) => {
                                                            if (!link.href || link.href === '#') return null;
                                                            return <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-lg bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg border border-orange-600">{link.text || 'View'}</a>;
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {(!sectionsData[activeTab] || sectionsData[activeTab].length === 0) && (
                                <div className="w-full py-20 flex flex-col items-center justify-center text-center">
                                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6"><Star className="w-10 h-10 text-gray-400" /></div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Projects Coming Soon</h3>
                                    <p className="text-gray-500 max-w-md">We are currently curating our best Shopping works. Check back later!</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden" style={{ backgroundImage: "url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700/50">
                        <div className="p-4"><h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">450+</h3><p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Satisfied Clients</p></div>
                        <div className="p-4"><h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">750+</h3><p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Project Delivered</p></div>
                        <div className="p-4"><h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">10+</h3><p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Years of Experience</p></div>
                        <div className="p-4"><h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">150+</h3><p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Development Staff</p></div>
                    </div>
                </div>
            </section>

            
            
        
            {/* New Added Sections */}
            <Testimonial theme="orange" />
            <Industries theme={{ bg: "bg-[#fff3eb]", primary: "text-orange-500", iconBg: "bg-orange-100", iconColor: "text-orange-500" }} />
            <OurWork theme={{ primary: "text-orange-500", accent: "bg-orange-500" }} />
            <ContactUs theme="orange" />

        </div>
    );
};

export default ShoppingApps;

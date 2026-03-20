import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Play, CheckCircle2, Star, MapPin, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import data from './UiUxData.json';
import Testimonials from '../../../components/home/Testimonials';
import Contact from '../../../components/home/Contact';

const UiUxWorks = () => {
    const [activeTab, setActiveTab] = useState(data.tabs[0]?.id);
    const tabs = data.tabs || [];
    const sectionsData = data.sections || {};

    // For Client Testimonials Embla Carousel
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">

            {/* 1. Hero Section */}
            <section
                className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center text-center text-white"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://kryosssoftech.org/icons/banner/uiux123.png')",
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
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">UI/UX <span className="text-orange-500">Works</span></h1>
                    <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        We deliver the best UI/UX design services to build your product with a creative and user-friendly interface.
                    </p>
                </motion.div>
            </section>

            {/* 2. Breadcrumb / Page Routing Section */}
            <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <a href="/works" className="hover:text-orange-500 transition-colors duration-300">Our Works</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-orange-500">UI/UX Works</span>
                </div>
            </section>

            {/* 3. Portfolio Tabs Section */}
            <section className="pt-16 md:pt-24 bg-white relative z-10 w-full mb-16">
                <div className="container mx-auto px-4 lg:px-8">

                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-black mb-4"
                        >
                            Our <span className="text-orange-500">Creative</span> Portfolio
                        </motion.h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Nav Tabs */}
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-8 px-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-2 text-sm lg:text-[15px] font-bold uppercase transition-colors duration-300 border-b-2 tracking-wide ${activeTab === tab.id
                                    ? 'border-orange-500 text-black'
                                    : 'border-transparent text-gray-500 hover:text-orange-500 hover:border-orange-500/50'
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Tab Content */}
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
                                    <div key={index} className={`w-full py-16 lg:py-24 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
                                        <div className={`container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                            {/* Image Box */}
                                            <div className="w-full lg:w-1/2 flex justify-center items-center relative drop-shadow-2xl">
                                                <img
                                                    src={item.img.startsWith('http') ? item.img : `https://kryosssoftech.org/${item.img}`}
                                                    alt={item.alt || 'Portfolio App'}
                                                    className="max-h-[500px] max-w-full object-contain transform hover:scale-105 transition-all duration-700 z-10"
                                                    loading="lazy"
                                                />
                                            </div>

                                            {/* Content Box */}
                                            <div className="w-full lg:w-1/2 flex flex-col justify-center z-20">
                                                <h3
                                                    className="text-2xl md:text-4xl font-extrabold text-black mb-6 leading-tight hover:text-orange-600 transition-colors duration-300"
                                                    dangerouslySetInnerHTML={{ __html: item.titleHtml || item.titleText }}
                                                />
                                                <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                                                    {item.description}
                                                </p>

                                                {item.links && item.links.length > 0 && (
                                                    <div className="flex flex-wrap gap-4 items-center">
                                                        {item.links.map((link, idx) => (
                                                            <a
                                                                key={idx}
                                                                href={link.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="hover:-translate-y-1 hover:brightness-110 transition-all duration-300"
                                                            >
                                                                <img
                                                                    src={link.img.startsWith('http') ? link.img : `https://kryosssoftech.org/${link.img.replace('assets/images/', '')}`}
                                                                    alt="Store Link"
                                                                    className="h-10 md:h-12 object-contain"
                                                                    onError={(e) => { e.target.style.display = 'none' }}
                                                                />
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {(!sectionsData[activeTab] || sectionsData[activeTab].length === 0) && (
                                <div className="w-full py-20 flex flex-col items-center justify-center text-center">
                                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                        <Star className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Projects Coming Soon</h3>
                                    <p className="text-gray-500 max-w-md">We are currently curating our best works for this category. Check back later!</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 4. Stats Counter Section */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden" style={{ backgroundImage: "url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700/50">
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">750+</h3>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Happy Clients</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">1200+</h3>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Projects Done</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">10+</h3>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Years Experience</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">150+</h3>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Team Members</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Testimonials Section */}
            <Testimonials />

            {/* 6. Contact Section */}
            <Contact />

        </div>
    );
};

export default UiUxWorks;

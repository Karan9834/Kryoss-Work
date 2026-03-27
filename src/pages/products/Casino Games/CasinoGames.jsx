import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, ShieldCheck, Cpu, Smartphone, Trophy, Star, CheckCircle, ArrowRight } from 'lucide-react';

import Testimonial from '../../../components/Common/Testimonial'
import OurWork from '../../../components/Common/OurWork'
import ContactUs from '../../../components/Common/ContactUs'

const CasinoGames = () => {
    const [activeTab, setActiveTab] = useState('prime');

    const primeGames = [
        {
            title: 'Kryoss Teen Patti',
            subtitle: 'Remote Multiplayer Game',
            desc: 'Kryoss Teen Patti is a real cash multiplayer game. A lot of people play at a time. It allows you to play with remote friends with your choice of boot value. Teen Patti reached the Indian subcontinent and is popular throughout South Asia, also called flush or flash.',
            img: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'ALF Slots',
            subtitle: 'Unity3d Game Builder',
            desc: 'If you ever wished to create your own Casino Slot Machine Game without programming knowledge, our AFL Slots Kit will save you hundreds of development hours and help you reach your digital dreams faster than ever.',
            img: 'https://images.unsplash.com/photo-1596838132175-fb1858a7f927?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Kryoss Multi Card Game',
            subtitle: 'Teen Patti, Rummy and Andar Bahar',
            desc: 'A comprehensive gambling card game bundle originating from the Indian subcontinent. It includes popular variations with influences from poker, providing a rich cultural gaming experience.',
            img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Kryoss Crypto Casino',
            subtitle: 'Slot Machine Online Gaming Platform',
            desc: 'Kryoss Crypto Casino uses provably fair technology based on strong cryptographic algorithms. It is perfect for entrepreneurs wanting to quickly start their own online gaming business with random results guaranteed.',
            img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
        }
    ];

    const zoomGames = [
        {
            title: 'Vyom Teenpatti',
            subtitle: 'Real Person Multiplayer Game',
            desc: 'Teen Patti means “three cards”. An Indian card game for 2 to 5 players with real persons only—no bots. Features secure cash addition via Razorpay and direct bank account withdrawals for winning.',
            img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'CLink Joker',
            subtitle: 'Multiplayer Game - Unity3d | Admob',
            desc: 'Joker is a famous card game where 3 cards are distributed to players. The dealer nominates jokers at random, adding a level of excitement and chance to every round. Supports 2-5 players.',
            img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'K-Slot Machine',
            subtitle: 'Combo 3 In 1 Unity Casino Game',
            desc: 'Extremely popular with mobile players worldwide. We provide a full-featured sample with easy customization and monetization via Admob, Facebook Audience Network, and AppLovin.',
            img: 'https://images.unsplash.com/photo-1606164222125-8d747b5ee3ad?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Kryoss Rummy Classic',
            subtitle: 'Rami (Admob + Android Studio)',
            desc: 'Test your card game skills against five different computer opponents across rookie to professional levels. Learn and improve before you encounter real-life Rummy professionals.',
            img: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800'
        }
    ];

    const renderProjectSection = (projects, sectionId) => (
        <motion.div 
            key={sectionId} 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-16 lg:gap-24 lg:px-12 mt-12 bg-white pb-20"
        >
            {projects.map((prod, idx) => {
                const isEven = idx % 2 === 0;
                return (
                    <div 
                        key={`${sectionId}-${idx}`} 
                        className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                    >
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                                <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img src={prod.img} alt={prod.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                            <div className="mb-2 md:mb-4">
                                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">{prod.title}</h3>
                                <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-bold uppercase tracking-wider">
                                    {prod.subtitle}
                                </span>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">{prod.desc}</p>
                            
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button className="flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                                    <Smartphone className="w-5 h-5 mr-2" /> Playstore
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center text-center text-white bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-orange-900/50 z-0"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Casino Gaming <span className="text-orange-500">Products</span></h1>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-200">Casino Game Development Company</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-8">
                        Kryoss Softech custom casino game software solutions catering to standard & mobile gaming systems, land-based systems, online casino systems, and sports-oriented platforms.
                    </p>
                    <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-orange-500/50">
                        Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our <span className="text-orange-500">Casino Solutions</span></h2>
                            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                                Kryoss casino game software solutions include popular game types, such as slots, bingo, poker, and more, with payment integrations, RGNs, and optimized security features.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Engineers sweepstakes software solutions that include sweepstakes apps, game skins, animations, graphics, and more, plus kiosk software integrations with intuitive UX/UI.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-md border hover:border-orange-500 transition-colors">
                                <ShieldCheck className="w-12 h-12 text-orange-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Optimized Security</h3>
                                <p className="text-sm text-gray-500">Advanced RNGs and secure payment integrations.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md border hover:border-orange-500 transition-colors">
                                <Gamepad2 className="w-12 h-12 text-orange-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Popular Games</h3>
                                <p className="text-sm text-gray-500">Slots, bingo, poker, and various table games.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tabbed Products Navigation */}
            <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
                <div className="container mx-auto px-4 flex justify-center gap-10 py-6">
                    <button 
                        onClick={() => setActiveTab('prime')}
                        className={`text-xl font-bold uppercase tracking-widest transition-all duration-300 pb-2 border-b-4 ${activeTab === 'prime' ? 'text-orange-500 border-orange-500' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
                    >
                        Prime Games
                    </button>
                    <button 
                        onClick={() => setActiveTab('zoom')}
                        className={`text-xl font-bold uppercase tracking-widest transition-all duration-300 pb-2 border-b-4 ${activeTab === 'zoom' ? 'text-orange-500 border-orange-500' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
                    >
                        Zoom Games
                    </button>
                </div>
            </nav>

            {/* Display Controlled Content */}
            <div className="container mx-auto px-4 pt-20">
                <AnimatePresence mode="wait">
                    {activeTab === 'prime' ? (
                        <div key="prime-section">
                             <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 underline underline-offset-8 decoration-orange-500 leading-tight">Kryoss <span className="text-orange-500">Prime Games</span></h2>
                                <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">Our premium collection of flagship casino gaming applications designed for high-end engagement.</p>
                            </div>
                            {renderProjectSection(primeGames, 'prime')}
                        </div>
                    ) : (
                        <div key="zoom-section">
                             <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 underline underline-offset-8 decoration-orange-500 leading-tight">Kryoss <span className="text-orange-500">Zoom Games</span></h2>
                                <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">Fast-paced, high-performance gaming solutions with seamless integration.</p>
                            </div>
                            {renderProjectSection(zoomGames, 'zoom')}
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Shared Reusable Sections */}
            <OurWork />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default CasinoGames;

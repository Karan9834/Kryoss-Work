import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Smartphone, ArrowRight } from 'lucide-react';
import VyomTeenPatti from '../../assets/casino-img/VyomTeenPatti.png';

const CasinoCardSection = () => {
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
        }
    ];

    const zoomGames = [
        {
            title: 'Vyom Teenpatti',
            subtitle: 'Real Person Multiplayer Game',
            desc: 'Teen Patti means “three cards”. An Indian card game for 2 to 5 players with real persons only—no bots. Features secure cash addition via Razorpay and direct bank account withdrawals for winning.',
            img: VyomTeenPatti
        },
        {
            title: 'CLink Joker',
            subtitle: 'Multiplayer Game - Unity3d | Admob',
            desc: 'Joker is a famous card game where 3 cards are distributed to players. The dealer nominates jokers at random, adding a level of excitement and chance to every round. Supports 2-5 players.',
            img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800'
        }
    ];

    const renderProjectSection = (projects, sectionId) => (
        <motion.div 
            key={sectionId} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
        >
            {projects.map((prod, idx) => {
                return (
                    <div 
                        key={`${sectionId}-${idx}`} 
                        className="group relative flex flex-col items-center text-center p-4 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-orange-100"
                    >
                        {/* Image Section */}
                        <div className="w-full h-80 bg-orange-50 rounded-[36px] overflow-hidden relative mb-8 flex items-center justify-center border-4 border-white">
                            <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                            <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full px-6 pb-10 flex flex-col items-center">
                            <div className="mb-4">
                                <h3 className="text-2xl font-black text-[#1E293B] group-hover:text-orange-600 transition-colors uppercase tracking-tight mb-2">{prod.title}</h3>
                                <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-3"></div>
                                <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {prod.subtitle}
                                </span>
                            </div>
                            
                            <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3">
                                {prod.desc}
                            </p>
                            
                            <div className="flex flex-wrap gap-4 justify-center mt-auto">
                                <button className="flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                                    <Smartphone className="w-5 h-5 mr-2" /> Playstore
                                </button>
                                <button className="flex items-center px-6 py-3 bg-white border border-gray-100 hover:bg-gray-50 text-slate-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                    Learn More <ArrowRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );

    return (
        <section id="casino-products" className="py-24 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header section with tabs */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="inline-flex px-3 py-1 bg-sky-100 text-sky-700 rounded-lg text-xs font-bold uppercase tracking-wider animate-pulse">
                            Our Portfolio
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-[#1E293B]">
                            Kryoss <span className="text-orange-600">Premium Games</span>
                        </h2>
                    </div>

                    <div className="flex p-2 bg-gray-100 rounded-[24px] w-full md:w-auto shadow-inner">
                        <button
                            onClick={() => setActiveTab('prime')}
                            className={`flex-1 md:w-44 py-4 rounded-[18px] font-black transition-all duration-300 uppercase tracking-widest text-xs ${activeTab === 'prime' ? 'bg-orange-600 text-white shadow-xl shadow-orange-200' : 'text-[#4A4B5E] hover:text-[#1E293B]'}`}
                        >
                            Prime Games
                        </button>
                        <button
                            onClick={() => setActiveTab('zoom')}
                            className={`flex-1 md:w-44 py-4 rounded-[18px] font-black transition-all duration-300 uppercase tracking-widest text-xs ${activeTab === 'zoom' ? 'bg-orange-600 text-white shadow-xl shadow-orange-200' : 'text-[#4A4B5E] hover:text-[#1E293B]'}`}
                        >
                            Zoom Games
                        </button>
                    </div>
                </div>

                {/* Display Controlled Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'prime' ? (
                        <div key="prime-section" className="space-y-12">
                             <div className="text-center">
                                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed italic">"Our premium collection of flagship casino gaming applications designed for high-end engagement."</p>
                            </div>
                            {renderProjectSection(primeGames, 'prime')}
                        </div>
                    ) : (
                        <div key="zoom-section" className="space-y-12">
                             <div className="text-center">
                                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed italic">"Fast-paced, high-performance gaming solutions with seamless integration."</p>
                            </div>
                            {renderProjectSection(zoomGames, 'zoom')}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CasinoCardSection;

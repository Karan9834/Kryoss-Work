import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ArrowRight } from 'lucide-react';

const FantasySportsCardSection = () => {
    const products = [
        { 
            title: 'Kryoss 11', 
            subtitle: 'Fantasy League Contest Sports',
            desc: "Provides a fantasy gaming platform for multiple sports such as football, cricket, hockey, etc. Participants assemble imaginary or virtual teams composed of proxies of real players of a professional sport. Compete based on the statistical performance of those players.",
            img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800"
        },
        { 
            title: 'Kryoss King', 
            subtitle: 'Fantasy Sports App',
            desc: "Kryoss Kings clone app is a replica of the fantasy sports app DraftKings that extends various modes of drafting and fantasy gaming solutions. It offers daily and weekly fantasy games with real-time sports match results and leaderboards.",
            img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
        },
        { 
            title: 'Vyom Fantasy App', 
            subtitle: 'FanDuel Clone App',
            desc: "An online fantasy sports app like FanDuel that enables you to conduct daily fantasy sports contests and also bookmarking services. Access daily fantasy sports events in NFL, NBA, MLB, IPL, NHL, WHL, EPL, etc.",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
        },
        { 
            title: 'Kryoss 365', 
            subtitle: 'White Label Bet 365 Clone',
            desc: "An all-inclusive sports betting solution housing a wide range of sports. Real time GPS tracking and Geofence is available to track location and issue unique tracking URLs.",
            img: "https://images.unsplash.com/photo-1516131206008-dbb41c4886d5?auto=format&fit=crop&q=80&w=800"
        },
    ];

    return (
        <section id="fantasy-products" className="py-24 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                        Our Products
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B]">
                        Powerful <span className="text-green-600">Fantasy Sports</span> Platforms
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">Explore our premium selection of fantasy gaming applications and solutions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-12">
                    {products.map((prod, idx) => {
                        return (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }}
                                className="group relative flex flex-col items-center text-center p-4 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-green-100"
                            >
                                {/* Image Section */}
                                <div className="w-full h-80 bg-green-50 rounded-[36px] overflow-hidden relative mb-8 flex items-center justify-center border-4 border-white">
                                    <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                                    <div className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                
                                {/* Content Section */}
                                <div className="w-full px-6 pb-10 flex flex-col items-center">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-black text-[#1E293B] group-hover:text-green-600 transition-colors uppercase tracking-tight mb-2">{prod.title}</h3>
                                        <div className="h-1.5 w-24 bg-green-500 mx-auto rounded-full mb-3"></div>
                                        <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {prod.subtitle}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3">
                                        {prod.desc}
                                    </p>
                                    
                                    <div className={`flex flex-wrap gap-4 justify-center mt-auto`}>
                                        <button className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                                            <Smartphone className="w-5 h-5 mr-2" /> Playstore
                                        </button>
                                        <button className="flex items-center px-6 py-3 bg-white border border-gray-100 hover:bg-gray-50 text-slate-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                            Learn More <ArrowRight className="w-5 h-5 ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FantasySportsCardSection;

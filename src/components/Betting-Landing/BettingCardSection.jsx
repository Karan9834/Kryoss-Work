import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, ArrowRight } from 'lucide-react';

const BettingCardSection = () => {
    const products = [
        {
            title: "Kryoss Matka",
            subtitle: "Satka Matka Betting Platform",
            desc: "The game of Satta Matka is back and is gaining popularity more rapidly than the ’70s and ’80s. Develop your very own smartphone application to offer lucrative betting opportunities with all of its thrills to players all around the world. Our matka bazar app development solution is the very best in class. Reach out to us and get started today! Built with the latest technology, our immense experience in the app segment propelled us to craft a world-class gaming software that will enable you to amass a wide customer base and in turn generate a large revenue.",
            image: "https://images.unsplash.com/photo-1596742572447-5790553ef443?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Kryoss Ludo King",
            subtitle: "Ludo King Clone (Real Money)",
            desc: "Kryoss Ludo is the online version of the most played board game – Ludo, with a great twist that you can play this game online for fun, and along with that, if you win, you will earn real cash. The goal here is to be the King of the ( Kryoss Ludo ) and if you want to be the king, you have to exercise your Ludo knowledge, you have to strategize your gameplay, you have to take calculative decisions, you have to pay attention, and with experience and expertise..",
            image: "https://images.unsplash.com/photo-1611996598533-4b1fba409b01?w=600&auto=format&fit=crop&q=60"
        }
    ];

    return (
        <section id="betting-products" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Our Products
                        </div>
                        <h2 className="text-4xl font-extrabold text-[#1E293B] mb-4">
                            Premium <span className="text-emerald-600">iGaming & Betting</span> Clones
                        </h2>
                        <p className="text-[#4A4B5E] text-lg font-medium">
                            World-class gaming software designed to amass customers and generate high revenue.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-12">
                    {products.map((product, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }}
                            className="group relative flex flex-col items-center text-center p-4 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-emerald-100"
                        >
                            {/* Image Section */}
                            <div className="w-full h-80 bg-emerald-50 rounded-[36px] overflow-hidden relative mb-8 flex items-center justify-center border-4 border-white">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full px-6 pb-10 flex flex-col items-center">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-black text-[#1E293B] group-hover:text-emerald-600 transition-colors uppercase tracking-tight mb-2">{product.title}</h3>
                                    <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-3"></div>
                                    <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {product.subtitle}
                                    </span>
                                </div>
                                <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3">
                                    "{product.desc}"
                                </p>
                                
                                <div className="flex flex-wrap gap-4 justify-center mt-auto">
                                    <button className="flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
                                        <Play size={18} className="mr-2 fill-white" /> Play Store
                                    </button>
                                    <button className="flex items-center px-6 py-3 bg-white border border-gray-100 hover:bg-gray-50 text-slate-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                        Learn More <ArrowRight size={18} className="ml-2 text-emerald-600" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BettingCardSection;

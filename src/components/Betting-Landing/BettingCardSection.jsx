import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, ArrowRight } from 'lucide-react';

const BettingCardSection = () => {
    const products = [
        {
            title: "GoBet",
            subtitle: "All-in-One Sports Betting App",
            desc: "GoBet is a comprehensive sports betting solution offering a wide range of sports markets, real-time odds, and a seamless user experience. Designed for high volume and global reach.",
            image: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "BetPro",
            subtitle: "Exchange & Multi-Market Betting",
            desc: "BetPro is a next-generation betting exchange platform that allows users to bet against each other. With its liquid markets, low latency, and robust settlement engine.",
            image: "https://images.unsplash.com/photo-1541344999736-83eca872f241?w=600&auto=format&fit=crop&q=60"
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
                                
                                <div className="flex justify-center mt-auto">
                                    <button className="flex items-center px-10 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 group/btn">
                                        View Details <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
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

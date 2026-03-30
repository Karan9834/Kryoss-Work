import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, ArrowRight } from 'lucide-react';

const MLMCardSection = () => {
    const products = [
        {
            title: "Kryoss Forsage Clone",
            subtitle: "MLM Forsage Clone Script",
            desc: "At Kryoss Softech, we proffer you with the Forsage MLM Clone Script - a holistically conceived decentralized ethereum smart contracts based MLM platform like Forsage that’s devised to channelize multiple sources of revenue and reverberate with the operating nuances of the MLM-centred crypto world. A must-have for anyone looking to make a legendary mark in this stellar niche! The awesome-looking app can be used for both Android and iOS platforms. It is optimized coded and easy to customize.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Kryoss Supersage Clone",
            subtitle: "MLM Supersage Clone Script",
            desc: "Kryoss Supersage is nothing but a top-notch decentralized TRON smart contracts-based MLM script that’s wholesomely designed, developed, and devised for handling diverse iterations of matrix marketing on the TRON blockchain. The entire MLM operations are led to self-executing smart contracts that are inherently immutable. With advanced commission and compensation schemes, leveraging multiple revenue sources is a defining deed of the Supersage clone. Power-packed and ready to launch!",
            image: "https://images.unsplash.com/photo-1621416894522-d28236bd2ecf?w=600&auto=format&fit=crop&q=60"
        }
    ];

    return (
        <section id="mlm-products" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Our Products
                        </div>
                        <h2 className="text-4xl font-extrabold text-[#1E293B] mb-4">
                            Ready-made <span className="text-blue-600">MLM Software</span> Clones
                        </h2>
                        <p className="text-[#4A4B5E] text-lg font-medium">
                            Highly secure and immutable decentralized MLM scripts for diverse marketing plans.
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
                            className="group relative flex flex-col items-center text-center p-4 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-blue-100"
                        >
                            {/* Image Section */}
                            <div className="w-full h-80 bg-blue-50 rounded-[36px] overflow-hidden relative mb-8 flex items-center justify-center border-4 border-white">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full px-6 pb-10 flex flex-col items-center">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-black text-[#1E293B] group-hover:text-blue-600 transition-colors uppercase tracking-tight mb-2">{product.title}</h3>
                                    <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-3"></div>
                                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {product.subtitle}
                                    </span>
                                </div>
                                <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3">
                                    "{product.desc}"
                                </p>
                                
                                <div className="flex flex-wrap gap-4 justify-center mt-auto">
                                    <button className="flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                                        <Play size={18} className="mr-2 fill-white" /> Play Store
                                    </button>
                                    <button className="flex items-center px-6 py-3 bg-white border border-gray-100 hover:bg-gray-50 text-slate-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                        Learn More <ArrowRight size={18} className="ml-2 text-blue-600" />
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

export default MLMCardSection;

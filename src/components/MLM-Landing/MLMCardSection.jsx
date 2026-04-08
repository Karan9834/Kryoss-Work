import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, ArrowRight } from 'lucide-react';


const MLMCardSection = () => {
    const products = [
        {
            title: "Hyip InvestPro",
            subtitle: "Premium Investment Platform",
            desc: "Hyip InvestPro is a professional, high-yield investment management system designed for scalability and security. It offers automated profit distribution, multi-currency support, and a comprehensive user dashboard.",
            image: "/Products/Hyip Pro.png",
            link: "/products/hyip-investpro"
        },
        {
            title: "revPTC",
            subtitle: "Enterprise MLM Solution",
            desc: "revPTC is an advanced multi-level marketing software suite that supports complex matrix, binary, and unilevel plans. Built on a secure architecture, it provides automated commission settlements and real-time genealogy tracking.",
            image: "/Products/RevPTC.avif",
            link: "/products/revptc"
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

                                <div className="flex justify-center mt-auto">
                                    <Link to={product.link}>
                                        <button className="flex items-center px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group/btn">
                                            View Details <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
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

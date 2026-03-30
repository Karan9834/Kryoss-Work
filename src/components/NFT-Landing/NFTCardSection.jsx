import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, ArrowRight } from 'lucide-react';

const NFTCardSection = () => {
    const products = [
        {
            title: "Kryoss OpenSea Clone",
            subtitle: "NFT OpenSea Clone",
            desc: "The blockchain experts of Kryoss have created a ready-made NFT Marketplace like OpenSea solution for entrepreneurs who desire to innovate in the NFT market. It is a decentralized NFT trading platform that has the potential to attract creators and investors from around the globe. The users can create, mint, buy, sell, bid, and list digital collectibles on the platform. Like we all know, OpenSea has been dominating this industry right from the start. Keeping this in mind, we have crafted a solution similar to OpenSea. Come up with innovative ideas and customize this script to outshine your competitors just like that. Give us a call to know more about our services.",
            image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Kryoss Zed Run Clone",
            subtitle: "NFT Zed Run Clone",
            desc: "Zed Run clone is a pre-engineered script plus a customizable solution of a virtual horse racing NFT gaming platform. It is embedded with diverse breeds of virtual horses, with each of them having special and unique attributes. The users can buy digital horses either from a drop-in allotted by the platform itself or in other third-party NFT marketplaces like OpenSea, Rarible, etc.The Kryoss Zed Run is similar to the Zed Run app. But we offer personalized services for you. We can help you design the horses in a unique way and also create a unique set of breeds entirely different from the ones in the Zed Run app. Join us to create a whole new virtual universe for a horse race in a short period of time.",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60"
        }
    ];

    return (
        <section id="nft-products" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Our Products
                        </div>
                        <h2 className="text-4xl font-extrabold text-[#1E293B] mb-4">
                            Ready-made <span className="text-violet-600">NFT Marketplace</span> Clones
                        </h2>
                        <p className="text-[#4A4B5E] text-lg font-medium">
                            Industry-leading clones and custom solutions crafted for high performance.
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
                            className="group relative flex flex-col items-center text-center p-4 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-violet-100"
                        >
                            {/* Image Section */}
                            <div className="w-full h-80 bg-violet-50 rounded-[36px] overflow-hidden relative mb-8 flex items-center justify-center border-4 border-white">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 bg-violet-500/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full px-6 pb-10 flex flex-col items-center">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-black text-[#1E293B] group-hover:text-violet-600 transition-colors uppercase tracking-tight mb-2">{product.title}</h3>
                                    <div className="h-1.5 w-24 bg-violet-500 mx-auto rounded-full mb-3"></div>
                                    <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {product.subtitle}
                                    </span>
                                </div>
                                <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3">
                                    "{product.desc}"
                                </p>
                                
                                <div className="flex flex-wrap gap-4 justify-center mt-auto">
                                    <button className="flex items-center px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-xl shadow-lg hover:shadow-violet-500/30 transition-all duration-300">
                                        <Play size={18} className="mr-2 fill-white" /> Play Store
                                    </button>
                                    <button className="flex items-center px-6 py-3 bg-white border border-gray-100 hover:bg-gray-50 text-slate-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                        Learn More <ArrowRight size={18} className="ml-2 text-violet-600" />
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

export default NFTCardSection;

import { Link } from 'react-router-dom';
import React from 'react';

import { Check, ArrowUpRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.2)] hover:-translate-y-1.5 transition-all duration-300 relative h-full">
            {/* Badges Container */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.badges?.map((badge, idx) => (
                    <span
                        key={idx}
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md ${badge === 'New' ? 'bg-green-500/90 text-white' :
                            badge === 'Popular' ? 'bg-blue-500/90 text-white' :
                                'bg-primary/90 text-white shadow-lg shadow-orange-500/20'
                            }`}
                    >
                        {badge}
                    </span>
                ))}
            </div>

            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                />

                {/* Quick Type Badge */}
                <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg shadow-sm border border-gray-100">
                    <span className="text-[10px] font-bold text-gray-800 tracking-wider uppercase">{product.type}</span>
                </div>

                {/* Tech Stack Icons Overlay */}
                <div className="absolute bottom-3 left-3 z-10 flex gap-1.5 px-2 py-1.5 bg-white/80 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {['react', 'node', 'mongodb', 'android', 'apple'].map((tech) => (
                        <div key={tech} className="w-6 h-6 rounded-md bg-white flex items-center justify-center p-1 shadow-sm border border-gray-50 transform hover:scale-110 transition-transform">
                            <img
                                src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${tech}/${tech}-original.svg`}
                                alt={tech}
                                className="w-full h-full object-contain"
                                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">
                    {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6 mt-auto">
                    {product.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                            <span className="flex items-center justify-center bg-orange-50 text-primary w-4 h-4 rounded-full">
                                <Check size={10} strokeWidth={3} />
                            </span>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-50">
                    <Link
                        to={`/products/${product.id}`}
                        className="flex items-center justify-center text-[13px] font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 py-2.5 rounded-xl transition-colors w-full"
                    >
                        View Details
                    </Link>
                    <Link
                        to={`/products/${product.id}#demo`}
                        className="group/btn flex items-center justify-center gap-1.5 text-[13px] font-bold text-white bg-primary hover:bg-orange-600 py-2.5 rounded-xl transition-colors w-full shadow-md shadow-orange-500/10 hover:shadow-orange-500/25 active:scale-95"
                    >
                        Live Demo
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

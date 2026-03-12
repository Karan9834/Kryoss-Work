import React from 'react';
import { navigationData } from './navbar.data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsMegaMenu = () => {
    const categories = navigationData.products;

    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-[98vw] bg-white rounded-[20px] shadow-[0_0_50px_rgba(0,0,0,0.18)] border border-gray-100 p-4 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
            {/* Menu Caret */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100" />

            <div className="flex gap-4 relative z-10">

                {/* Left Side Group (Transport & Home Service) */}
                <div className="flex-[1.2] space-y-4 border-r border-gray-100 pr-4">

                    {/* Transport App Solutions */}
                    <div className="space-y-1.5">
                        <div className="">
                            <h3 className="text-primary font-bold leading-tight uppercase tracking-wider text-[18px]">{categories[0].category}</h3>
                            <p className="text-gray-500 text-[13px] mt-0.5 font-medium">{categories[0].description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                            {categories[0].items.map((item, idx) => (
                                <Link key={idx} to={item.href} className="group flex items-start gap-3 p-1.5 rounded-lg hover:bg-orange-50/60 transition-all duration-300">
                                    <span className="text-3xl mt-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{item.icon}</span>
                                    <div className="flex flex-col">
                                        <span className="text-[14.5px] font-bold text-gray-800 group-hover:text-primary transition-colors leading-tight">{item.label}</span>
                                        <span className="text-[11.5px] text-gray-400 group-hover:text-gray-600 font-medium leading-tight">{item.subLabel}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100/70" />

                    {/* On demand Home Service Marketplace */}
                    <div className="space-y-1.5">
                        <div className="">
                            <h3 className="text-primary font-bold leading-tight uppercase tracking-wider text-[18px]">{categories[2].category}</h3>
                            <p className="text-gray-500 text-[13px] mt-0.5 font-medium">{categories[2].description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                            {categories[2].items.map((item, idx) => (
                                <Link key={idx} to={item.href} className="group flex items-start gap-3 p-1.5 rounded-lg hover:bg-orange-50/60 transition-all duration-300">
                                    <span className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{item.icon}</span>
                                    <div className="flex flex-col">
                                        <span className="text-[14px] font-bold text-gray-800 group-hover:text-primary transition-colors">{item.label}</span>
                                        <span className="text-[11px] text-gray-400 group-hover:text-gray-600 font-medium leading-tight">{item.subLabel}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side Group (Delivery & Social) */}
                <div className="flex-1 space-y-4">

                    {/* Delivery App Solutions */}
                    <div className="space-y-1.5">
                        <div className="">
                            <h3 className="text-primary font-bold leading-tight uppercase tracking-wider text-[18px]">{categories[1].category}</h3>
                            <p className="text-gray-500 text-[13px] mt-0.5 font-medium pr-4">{categories[1].description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                            {categories[1].items.map((item, idx) => (
                                <Link key={idx} to={item.href} className="group flex items-start gap-3 p-1.5 rounded-lg hover:bg-orange-50/60 transition-all duration-300">
                                    <span className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{item.icon}</span>
                                    <div className="flex flex-col">
                                        <span className="text-[14px] font-bold text-gray-800 group-hover:text-primary transition-colors">{item.label}</span>
                                        <span className="text-[11px] text-gray-400 group-hover:text-gray-600 font-medium leading-tight">{item.subLabel}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100/70" />

                    {/* Bottom Section - Social + Connect Card */}
                    <div className="flex gap-4 items-start">
                        <div className="flex-1 space-y-1.5">
                            <div className="">
                                <h3 className="text-primary font-bold leading-tight uppercase tracking-wider text-[18px]">{categories[3].category}</h3>
                                <p className="text-gray-500 text-[12px] mt-0.5 font-medium">{categories[3].description}</p>
                            </div>
                            <div className="space-y-0.5">
                                {categories[3].items.map((item, idx) => (
                                    <Link key={idx} to={item.href} className="group flex items-start gap-3 p-1.5 rounded-lg hover:bg-orange-50/60 transition-all duration-300">
                                        <span className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{item.icon}</span>
                                        <div className="flex flex-col">
                                            <span className="text-[14.5px] font-bold text-gray-800 group-hover:text-primary transition-colors leading-tight">{item.label}</span>
                                            <span className="text-[11.5px] text-gray-400 group-hover:text-gray-600 font-medium leading-tight">{item.subLabel}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="pt-4">
                                <Link
                                    to="/products"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="inline-flex items-center gap-2 bg-primary text-white w-full justify-center py-4 rounded-full text-[13px] font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 uppercase tracking-widest active:scale-95"
                                >
                                    Explore All Products <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Connect Card */}
                        <div className="w-[170px] bg-gradient-to-br from-[#f8faff] to-[#eff4ff] rounded-[20px] p-3 flex flex-col items-center text-center border border-blue-100 shadow-sm self-stretch justify-center">
                            <h4 className="font-bold text-gray-800 text-[14px] mb-2">Connect With Us</h4>
                            <div className="mb-3">
                                <div className="w-14 h-14 bg-white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center border border-blue-50 overflow-hidden">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3126/3126588.png"
                                        alt="Consult"
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                            </div>
                            <Link to="/company/contact" className="text-primary text-[14px] font-bold hover:underline flex items-center gap-1 group">
                                Get Started <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductsMegaMenu;

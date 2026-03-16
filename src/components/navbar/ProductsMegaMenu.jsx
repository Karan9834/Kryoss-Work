import React from 'react';
import { navigationData } from './navbar.data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsMegaMenu = () => {
    const categories = navigationData.products;

    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-[98vw] bg-white rounded-[20px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_35px_rgba(34,197,94,0.25)] border border-green-50/50 p-4 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
            {/* Menu Caret */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-green-50/50" />

            <div className="flex gap-4 relative z-10">

                {/* Left Side Group (Transport & Home Service) */}
                <div className="flex-[1.2] space-y-4 border-r border-gray-100 pr-4">

                    {/* Transport App Solutions */}
                    <div className="space-y-1.5">
                        <div className="">
                            <h3 className="text-primary font-bold leading-tight text-[15.5px]">{categories[0].category}</h3>
                            <p className="text-gray-500 text-[12.5px] mt-1 font-medium">{categories[0].description}</p>
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

                    {/* Enterprise Products */}
                    <div className="space-y-1.5">
                        <div className="">
                            <h3 className="text-primary font-bold leading-tight text-[15.5px]">{categories[1].category}</h3>
                            <p className="text-gray-500 text-[12.5px] mt-1 font-medium">{categories[1].description}</p>
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

                    {/* On demand Home Service Marketplace */}
                    <div className="space-y-1.5">
                        <div className="">
                            <h3 className="text-primary font-bold leading-tight text-[15.5px]">{categories[3].category}</h3>
                            <p className="text-gray-500 text-[12.5px] mt-1 font-medium">{categories[3].description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                            {categories[3].items.map((item, idx) => (
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

                    <div className="space-y-1.5">
                        <div className="">
                            <h3 className="text-primary font-bold leading-tight text-[15.5px]">{categories[2].category}</h3>
                            <p className="text-gray-500 text-[12.5px] mt-1 font-medium pr-4">{categories[2].description}</p>
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

                    <div className="w-full h-px bg-gray-100/70" />

                    {/* Bottom Section - Social + Connect Card */}
                    <div className="flex gap-4 items-start">
                        <div className="flex-1 space-y-1.5">
                            <div className="">
                                <h3 className="text-primary font-bold leading-tight text-[15.5px]">{categories[4].category}</h3>
                                <p className="text-gray-500 text-[12.5px] mt-1 font-medium">{categories[4].description}</p>
                            </div>
                            <div className="space-y-0.5">
                                {categories[4].items.map((item, idx) => (
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

                        {/* Enhanced Connect Card */}
                        <div className="w-[190px] bg-gradient-to-br from-primary/5 via-white to-primary/10 rounded-[22px] p-4 flex flex-col items-center text-center border border-primary/10 shadow-sm self-stretch justify-center relative overflow-hidden group/card">
                            {/* Decorative Background Element */}
                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-2xl group-hover/card:bg-primary/10 transition-colors" />

                            <h4 className="font-extrabold text-gray-900 text-[14.5px] mb-1.5 relative z-10">Custom App Idea?</h4>
                            <p className="text-[11.5px] text-gray-500 font-medium mb-3.5 leading-relaxed relative z-10">
                                Have a unique vision? We can build it for you.
                            </p>

                            <div className="mb-4 relative z-10">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-primary/5 group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform duration-500">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3126/3126588.png"
                                        alt="Consultation"
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                            </div>

                            <Link
                                to="/company/contact"
                                className="w-full bg-white border border-primary/10 text-primary py-2 rounded-xl text-[13px] font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-primary/20 flex items-center justify-center gap-1.5 group relative z-10"
                            >
                                Consult Experts
                                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductsMegaMenu;

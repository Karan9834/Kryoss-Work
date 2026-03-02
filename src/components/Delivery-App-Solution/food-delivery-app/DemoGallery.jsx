import React, { useState } from 'react';
import { Smartphone, Layout, ShoppingCart, Truck, Search, ChevronRight } from 'lucide-react';

const DemoGallery = () => {
    const screens = [
        { title: "User Interface", category: "User App", img: "https://whitelabelfox.com/assets/images/online-food-ordering-app/food-delivery-page-user-app-ui-1.webp" },
        { title: "Delivery Portal", category: "Driver App", img: "https://whitelabelfox.com/assets/images/online-food-ordering-app/food-delivery-page-driver-app-ui-1.webp" },
        { title: "Store Management", category: "Store App", img: "https://whitelabelfox.com/assets/images/online-food-ordering-app/food-delivery-page-store-app-ui-1.webp" }
    ];

    const highlights = [
        { icon: <Search size={20} />, label: "Smart Search" },
        { icon: <ShoppingCart size={20} />, label: "Quick Checkout" },
        { icon: <Truck size={20} />, label: "Live Tracking" },
        { icon: <Smartphone size={20} />, label: "Mobile-First" }
    ];

    return (
        <section className="py-16 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-primary">
                            Intuitive <span className="text-[#FF5722]">User Interfaces</span>
                        </h2>
                        <p className="text-gray-600 text-base">
                            Explore our meticulously crafted user interfaces designed for conversions and ease of use.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 font-bold text-sm text-gray-700 shadow-sm">
                                <span className="text-[#FF5722]">{h.icon}</span> {h.label}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {screens.map((screen, index) => (
                        <div key={index} className="group relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 hover:shadow-orange-500/10 transition-all duration-500 transform hover:-translate-y-4">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8 text-white">
                                <span className="text-[#FF5722] font-black tracking-widest text-xs uppercase mb-2">{screen.category}</span>
                                <h3 className="text-2xl font-bold mb-4">{screen.title}</h3>
                                <button className="flex items-center gap-2 text-sm font-bold bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-[#FF5722] transition-colors w-max">
                                    View Large <ChevronRight size={16} />
                                </button>
                            </div>
                            <img
                                src={screen.img}
                                alt={screen.title}
                                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-50 text-[#FF5722] rounded-full font-bold cursor-pointer hover:bg-[#FF5722] hover:text-white transition-all transform hover:scale-105 shadow-sm">
                        <Layout size={18} /> Explore Complete UI/UX Case Study
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoGallery;

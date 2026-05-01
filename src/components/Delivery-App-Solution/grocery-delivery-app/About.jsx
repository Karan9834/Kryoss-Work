import React from 'react';
import { ShoppingBasket, Zap, TrendingUp, Handshake } from 'lucide-react';
import aboutimg from '@/assets/dtbasket-grocery-img/about.png';
const About = () => {
    const stats = [
        { icon: <Zap size={24} />, label: "Quick Setup", value: "1-2 Weeks" },
        { icon: <TrendingUp size={24} />, label: "Business Growth", value: "200%+" },
        { icon: <ShoppingBasket size={24} />, label: "Active Stores", value: "500+" },
        { icon: <Handshake size={24} />, label: "Client Trust", value: "99%" }
    ];

    return (
        <section className="py-20 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Content */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                Transform Your Offline Store Into <br />
                                <span className="text-[#10B981]">A Digital Powerhouse</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-[#10B981] rounded-full"></div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            With the shift in consumer behavior, having an online presence is no longer
                            optional for grocery businesses. Our Fox-Grocery app provides a robust
                            foundation to launch your digital storefront, allowing customers to order
                            from the comfort of their homes.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/50">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#10B981]">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 italic border-l-4 border-emerald-400 pl-6 py-2">
                            "Our mission is to bridge the gap between local grocery vendors and
                            tech-savvy consumers through innovative on-demand delivery technology."
                        </p>
                    </div>

                    {/* Right: Illustration */}
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute inset-0 bg-[#10B981]/10 rounded-full blur-[80px] group-hover:bg-[#10B981]/20 transition-all duration-700"></div>
                        <img
                            src={aboutimg}
                            alt="Fox Grocery Platform Overview"
                            className="relative w-full h-auto z-10 drop-shadow-2xl rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

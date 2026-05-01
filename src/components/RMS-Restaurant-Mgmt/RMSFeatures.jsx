import React from 'react';
import { ChefHat, ShoppingCart, Smartphone, LineChart, Users, Receipt } from 'lucide-react';

const RMSFeatures = () => {
    const features = [
        {
            icon: <ChefHat className="text-red-500 w-8 h-8" />,
            title: "Smart Kitchen Display",
            desc: "Send orders straight to the kitchen instantly, track prep times, and reduce ticket errors all in one place.",
        },
        {
            icon: <ShoppingCart className="text-amber-500 w-8 h-8" />,
            title: "Automated Inventory",
            desc: "Track every ingredient down to the gram. Get low-stock alerts before you run out and manage recipes natively.",
        },
        {
            icon: <Smartphone className="text-rose-500 w-8 h-8" />,
            title: "Online Ordering Sync",
            desc: "Merge UberEats, DoorDash, and direct web orders into a single, cohesive dashboard without juggling tablets.",
        },
        {
            icon: <LineChart className="text-orange-500 w-8 h-8" />,
            title: "Menu Engineering",
            desc: "Identify your star dishes and underperformers with deep profitability metrics and AI-driven suggestions.",
        },
        {
            icon: <Users className="text-yellow-600 w-8 h-8" />,
            title: "Loyalty Programs",
            desc: "Keep diners coming back with points, customized discounts, and VIP tiers managed seamlessly at checkout.",
        },
        {
            icon: <Receipt className="text-red-600 w-8 h-8" />,
            title: "Split Billing & Tips",
            desc: "Handle complex checks, partial payments, and tip sharing with zero mathematical hassle.",
        }
    ];

    return (
        <section className="py-24 relative bg-[#0f1115] overflow-hidden">
            {/* Super premium dark theme for RMS features */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-900 rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900 rounded-full blur-[150px] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 shadow-sm text-[12px] font-medium tracking-[0.05em] uppercase text-rose-300">
                        Premium Hospitality Tools
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
                            Engineered For Excellence
                        </span>
                    </h2>
                    
                    {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-gray-400 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        We developed modules specific to the restaurant industry to cover your entire workflow from procurement to plate, wrapped in a sleek interface.
                    </p>
                </div>

                {/* Unique format: Dark glassmorphism grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-red-500/30 transition-all duration-500 flex flex-col items-start min-h-[300px]"
                        >
                            {/* Accent Top Gradient Line */}
                            <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                                {feature.icon}
                            </div>

                            {/* Card Title - Updated: text-[20px] md:text-[22px] font-bold leading-[1.3] */}
                            <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.3] text-white mb-4 group-hover:text-red-300 transition-colors">
                                {feature.title}
                            </h3>
                            
                            {/* Card Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                            <p className="text-gray-400 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RMSFeatures;
import React from 'react';
import {
    Percent,
    TrendingUp,
    Ban,
    Clock,
    Wallet,
} from "lucide-react";
import strategy from "../../assets/transport-uber-img/strategy.webp";
const revenueItems = [
    {
        title: "Profit-Sharing Revenue Engine",
        desc: "Configure granular commission parameters to generate income from every successful trip. As your journey volume scales, your revenue engine produces predictable, growing returns.",
        icon: Percent,
    },
    {
        title: "Dynamic Demand Surcharges",
        desc: "Our intelligent surcharge logic balances passenger demand with partner availability in real-time, boosting per-assignment margins without requiring manual adjustment.",
        icon: TrendingUp,
    },
    {
        title: "Accountability Fee Structures",
        desc: "Deter platform misuse through structured cancellation and waiting fees, fostering a disciplined ecosystem while adding a layer of compensatory income for partners.",
        icon: Ban,
    },
    {
        title: "Premium Membership Tiers",
        desc: "Launch exclusive subscription options for regular passengers or dedicated partners, securing a steady stream of recurring monthly capital for your business.",
        icon: Wallet,
    },
    {
        title: "High-Activity Fare Logic",
        desc: "Execute precise pricing strategies during peak hours to maximize profit saturation while maintaining long-term user trust and transparency.",
        icon: Clock,
    },
];

const RevenueMonetization = () => {
    return (
        <section className="w-full bg-black py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* TOP TAG */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-600 rounded-full px-5 py-1 text-sm text-gray-300">
                        Revenue Orchestration
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[32px] md:text-[42px] leading-[44px] md:leading-[56px] font-semibold text-white mb-6">
                    Maximize Your Market Earnings with Our Advanced Mobility Framework
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-[15.5px] text-gray-300 max-w-4xl mx-auto mb-16">
                    Architected with diverse monetization layers, our elite transportation suite ensures
                    you capture value from every ecosystem interaction. Implement individual models
                    or combine them for a customized revenue strategy.
                </p>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT – SCROLLABLE CARDS */}
                    <div
                        className="
               max-h-[420px]
    overflow-y-scroll
    pr-4
    space-y-8
    hide-scrollbar
            "
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {/* Hide scrollbar for webkit */}
                        <style>
                            {`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
                        </style>
                        {revenueItems.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="flex gap-5 items-start">
                                    {/* ICON */}
                                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-gray-600 flex items-center justify-center flex-shrink-0">
                                        <Icon size={20} className="text-white" />
                                    </div>

                                    {/* CONTENT */}
                                    <div>
                                        <h3 className="text-white text-[18px] font-semibold mb-2">
                                            {item.title}
                                        </h3>

                                        <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-5 py-4 text-[14.5px] leading-[24px] text-gray-300">
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT – SINGLE IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="w-full max-w-[420px] h-[420px] bg-gray-800 rounded-2xl flex items-center justify-center">
                            {/* SINGLE IMAGE PLACEHOLDER */}
                            <img src={strategy}
                                alt="Revenue & Monetoring strategy"
                                className="w-full h-full object-contain" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RevenueMonetization;
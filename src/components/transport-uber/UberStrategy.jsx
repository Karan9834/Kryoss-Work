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
        title: "Commission-Based Earnings Model",
        desc: "You can configure different commission rates to earn revenue from every completed ride. Increase in ride volume = revenue growth, creating a predictable income engine.",
        icon: Percent,
    },
    {
        title: "Dynamic Surge Pricing",
        desc: "Smart surge helps you balance rider demand and driver supply simultaneously to boost per-trip earnings without manual intervention.",
        icon: TrendingUp,
    },
    {
        title: "Ride Cancellation & Waiting Charges",
        desc: "Decrease unnecessary booking abuse to improve platform discipline and add a revenue layer to keep operations fair for drivers.",
        icon: Ban,
    },
    {
        title: "Subscription & Membership Plans",
        desc: "Offer premium memberships to riders or drivers for exclusive benefits, ensuring recurring monthly revenue.",
        icon: Wallet,
    },
    {
        title: "Peak Hour Pricing Rules",
        desc: "Apply intelligent pricing rules during peak hours to maximize profitability without affecting customer trust.",
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
                        Revenue & Monetization Strategy
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[32px] md:text-[42px] leading-[44px] md:leading-[56px] font-semibold text-white mb-6">
                    How Can You Bring More Profit to Your Table with Uber Clone Script?
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-[15.5px] text-gray-300 max-w-4xl mx-auto mb-16">
                    Built with multiple revenue models – a taxi booking app like Uber helps
                    you earn from every transaction. Go for a different option or combine
                    different ones based on your business strategy.
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
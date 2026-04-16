import React from 'react';
import { useState } from "react";
import {
    Bot,
    DollarSign,
    Route,
    Cpu,
    ChevronDown,
} from "lucide-react";
import AIpoweredgrowth from "../../assets/transport-uber-img/aigrowth.webp";
const aiFeatures = [
    {
        title: "Intelligent Assistant",
        icon: Bot,
        content: `A vast majority of users expect a response within a very short timeframe, and our integrated AI assistant ensures you meet those expectations. Your users receive immediate, automated help, ensuring no request goes unanswered in real time.

Operating expenses remain manageable as the AI handles routine inquiries without human intervention. This results in superior user satisfaction and a steady growth in business performance.`,
    },
    {
        title: "Algorithmic Fare Calculator",
        icon: DollarSign,
        content:
            "Our intelligent pricing framework dynamically modulates rates based on real-time factors like localized demand, trip distance, and current traffic density to optimize both revenue and user trust.",
    },
    {
        title: "Smart Navigation Logic",
        icon: Route,
        content:
            "Sophisticated pathfinding algorithms empower partners to utilize the most efficient routes available, effectively lowering operational costs and minimizing trip duration.",
    },
    {
        title: "Predictive Assignment Logic",
        icon: Cpu,
        content:
            "Advanced machine learning models identify and assign the most compatible service provider based on physical proximity, past performance metrics, and current availability.",
    },
];

const UberAIGrowth = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section
            className="relative w-full py-16 text-white bg-black bg-fixed bg-center bg-cover"
            style={{
                backgroundImage:
                    "url('/ai-growth-bg-placeholder.jpg')", // 🔁 BG IMAGE PLACEHOLDER
                fontFamily: "IBM Plex Sans, sans-serif",
            }}
        >
            {/* overlay */}
            {/* <div className="absolute inset-0 bg-black/80" /> */}

            <div className="relative max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>
                    {/* TAG */}
                    <span className="inline-flex items-center gap-2 border border-gray-500 rounded-full px-4 py-1 text-sm mb-4">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        AI-Enhanced Scaling
                    </span>

                    {/* HEADING */}
                    <h2 className="text-[36px] md:text-[44px] leading-[48px] md:leading-[56px] font-semibold mb-6">
                        Scale Your Mobility Venture with an Advanced Digital Solution
                    </h2>

                    {/* DESC */}
                    <p className="text-[#d0d0d0] text-[16px] leading-[26px] max-w-xl">
                        As a premier engineering partner, we offer intelligent mobility
                        frameworks that empower your business to operate with greater precision.
                        By moving beyond manual decision-making, our platform leverages deep
                        insights to deliver an optimized experience for all platform participants.
                    </p>

                    {/* AI VISUAL */}
                    <div className="relative mt-16 w-[300px] h-[300px]  flex items-center justify-center">


                        <img src={AIpoweredgrowth}
                            alt="AIpoweredgrowth"
                            className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>

                {/* RIGHT ACCORDION */}
                <div className="space-y-6">
                    {aiFeatures.map((item, index) => {
                        const Icon = item.icon;
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-[20px] border border-[#2a2a2a]"
                            >
                                {/* HEADER */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? -1 : index)
                                    }
                                    className="w-full flex items-center justify-between gap-4 p-6"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center">
                                            <Icon size={22} className="text-black" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <ChevronDown
                                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* CONTENT */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] px-6 pb-6" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-[#d5d5d5] text-[15px] leading-[26px] whitespace-pre-line">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default UberAIGrowth;
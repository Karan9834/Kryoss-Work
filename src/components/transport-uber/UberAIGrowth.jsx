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
        title: "AI Chatbot",
        icon: Bot,
        content: `More than 93% of customers expect a brand to reply within 24 hours, and an AI chatbot helps you with the same. Your valued customers don't have to wait long, as the AI chatbot handles everything in real time.

Support costs also stay in control as AI handles the repetitive conversations automatically. As a result, customer satisfaction is high, and your business profit increases continuously.`,
    },
    {
        title: "AI-Based Pricing Engine",
        icon: DollarSign,
        content:
            "AI-powered pricing engine dynamically adjusts fares based on demand, distance, traffic, and availability to maximize profitability and fairness.",
    },
    {
        title: "AI-Powered Route Optimization",
        icon: Route,
        content:
            "Intelligent routing algorithms help drivers choose the shortest and fastest routes, reducing fuel costs and trip duration.",
    },
    {
        title: "AI/ML Driver Assignment",
        icon: Cpu,
        content:
            "AI/ML algorithms assign the best-suited drivers based on proximity, performance, availability, and ratings.",
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
                        AI-Powered Growth
                    </span>

                    {/* HEADING */}
                    <h2 className="text-[36px] md:text-[44px] leading-[48px] md:leading-[56px] font-semibold mb-6">
                        Differentiate Your Business with an AI-Powered Uber Clone App
                    </h2>

                    {/* DESC */}
                    <p className="text-[#d0d0d0] text-[16px] leading-[26px] max-w-xl">
                        As a known taxi app development company, White Label Fox develops
                        AI-powered solutions that help you operate smarter. No more relying
                        on manual decisions, as our platform uses real-time data and
                        intelligence to deliver an improved experience for everyone
                        involved.
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
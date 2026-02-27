import React from 'react';
import {
    Smartphone,
    Rocket,
    FileLock,
    Layers,
    Plug,
    Store,
    Bug,
    ClipboardList,
} from "lucide-react";

const whyUsData = [
    {
        title: "100% White-Label with Source Code",
        desc: "No more dependency, just complete freedom. You receive the platform with full source code access.",
        icon: Smartphone,
    },
    {
        title: "Rapid Deployment & Go-Live Support",
        desc: "Delays can hurt your revenue, so we address all issues faster with real human guidance and priority technical assistance.",
        icon: Rocket,
    },
    {
        title: "NDA Protection",
        desc: "We sign a Non-Disclosure Agreement to keep your business data details fully confidential and legally protected at all times.",
        icon: FileLock,
    },
    {
        title: "Scalable Architecture Design",
        desc: "No more performance breakdown – an Uber like taxi app grows with your business without rebuilding the tech stack.",
        icon: Layers,
    },
    {
        title: "Third-Party API Integration",
        desc: "We integrate third-party APIs to meet your requirements. Just specify what you want, and we will do it for you.",
        icon: Plug,
    },
    {
        title: "App Store Deployment",
        desc: "We guide you through the tricky store approval process, reducing back-and-forth delays and rejections effectively.",
        icon: Store,
    },
    {
        title: "1 Year Bug-Fix Support",
        desc: "Our team provides 12 months of technical support to fix bugs & maintain smooth operations without unexpected extra costs.",
        icon: Bug,
    },
    {
        title: "Dedicated Project Management",
        desc: "Our project manager is here to coordinate. They will understand what you want to solve all your queries quickly.",
        icon: ClipboardList,
    },
];

const WhyUs = () => {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* TOP TAG */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 rounded-full px-5 py-1 text-sm text-gray-600">
                        Why we better
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[32px] md:text-[42px] leading-[44px] md:leading-[56px] font-semibold text-[#2f2f2f] mb-6">
                    Why White Label Fox as a Taxi App Development Company?
                </h2>

                {/* SUB TEXT */}
                <p className="text-center text-[16px] text-[#5f5f5f] max-w-4xl mx-auto mb-16">
                    Choosing the right taxi app development company is a big decision, as
                    they help you build a long-term business. We create a taxi booking app
                    like Uber for every business owner who wants more than a packaged
                    script. Check what sets White Label Fox apart:
                </p>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyUsData.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="
                  group
                  rounded-[20px]
                  p-6
                  bg-white
                  border border-[#e5e5e5]
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                    w-12 h-12 rounded-xl
                    border border-gray-300
                    flex items-center justify-center
                    mb-4
                    transition-all duration-300
                    group-hover:bg-black
                    group-hover:border-black
                  "
                                >
                                    <Icon
                                        size={22}
                                        className="text-black transition-colors duration-300 group-hover:text-white"
                                    />
                                </div>

                                {/* TITLE */}
                                <h3
                                    className="
                    text-[17px]
                    font-semibold
                    text-[#2f2f2f]
                    mb-2
                    transition-colors duration-300
                    group-hover:text-black
                  "
                                >
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-[14.5px] leading-[24px] text-[#5f5f5f]">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhyUs;
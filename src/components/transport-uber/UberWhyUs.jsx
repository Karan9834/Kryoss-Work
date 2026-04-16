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
        title: "Transparent White-Label Ownership",
        desc: "Eliminate third-party reliance and gain complete autonomy. We deliver the entire platform with exhaustive source code access.",
        icon: Smartphone,
    },
    {
        title: "Priority Deployment & Expert Care",
        desc: "Time-to-market is critical; we bypass delays with personalized engineering guidance and high-priority technical support during your launch.",
        icon: Rocket,
    },
    {
        title: "Rigid Professional Confidentiality",
        desc: "We formalize our partnership with a comprehensive NDA, ensuring your proprietary business intelligence remains legally shielded and strictly private.",
        icon: FileLock,
    },
    {
        title: "Future-Ready Elastic Framework",
        desc: "Our high-performance architecture expands alongside your venture, allowing for massive scaling without the need for expensive core re-engineering.",
        icon: Layers,
    },
    {
        title: "Bespoke API Orchestration",
        desc: "We integrate custom third-party services tailored to your specific operational roadmap. Simply define your requirements, and our team handles the complexity.",
        icon: Plug,
    },
    {
        title: "Frictionless App Store Strategy",
        desc: "Navigate the complexities of platform approval with our expert assistance, significantly reducing the probability of rejections and publication delays.",
        icon: Store,
    },
    {
        title: "Annual Performance Assurance",
        desc: "Our engineering team provides 12 months of dedicated technical oversight to maintain operational continuity and address anomalies without hidden costs.",
        icon: Bug,
    },
    {
        title: "Strategic Project Coordination",
        desc: "A dedicated lead manages your implementation, acting as a direct bridge to our technical resources to resolve your inquiries with speed.",
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
                        Our Competitive Advantage
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[32px] md:text-[42px] leading-[44px] md:leading-[56px] font-semibold text-[#2f2f2f] mb-6">
                    What Makes Kryoss Work the Premier Mobility Engineering Partner?
                </h2>

                {/* SUB TEXT */}
                <p className="text-center text-[16px] text-[#5f5f5f] max-w-4xl mx-auto mb-16">
                    Selecting a long-term engineering partner is the most consequential decision for your
                    transportation venture. We build advanced mobility ecosystems for entrepreneurs
                    who demand sophisticated solutions over generic scripts. Discover our competitive edge:
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
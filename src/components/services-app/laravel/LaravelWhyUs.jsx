import React from "react";
import {
    ShieldCheck,
    Award,
    Rocket,
    Wallet,
    TrendingUp,
    UserCog,
} from "lucide-react";

import whyUsImg from "../../../assets/services-laravel-img/laravelwhyus.webp";

const features = [
    {
        icon: ShieldCheck,
        title: "100% NDA-Protected Workflow",
        desc: "Every white label laravel development solution is delivered under strict NDA to keep your agency fully protected.",
    },
    {
        icon: Award,
        title: "Consistent, Agency-Grade Quality",
        desc: "Our Laravel experts follow structured QA and coding standards to deliver reliable laravel development services.",
    },
    {
        icon: Rocket,
        title: "Faster Project Turnaround",
        desc: "Agile sprint execution ensures quicker releases when you outsource laravel development to us.",
    },
    {
        icon: Wallet,
        title: "Lower Operational Costs",
        desc: "Reduce hiring and infrastructure costs while increasing margins with our white label web development model.",
    },
    {
        icon: TrendingUp,
        title: "Scale Without Limits",
        desc: "Quickly hire Laravel developers from our 40+ expert team and expand project capacity anytime.",
    },
    {
        icon: UserCog,
        title: "Dedicated Project Manager",
        desc: "A single point of contact ensures smooth communication and on-time Laravel application development delivery.",
    },
];

const WhyUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">

                    <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Why Partner With Us
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        <span className="text-orange-500">
                            Benefits of Choosing
                        </span>{" "}
                        Our White Label Laravel Development Company
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Partnering with Kryoss Work gives your agency the technical
                        strength to deliver complex Laravel projects without hiring
                        in-house developers. As a trusted white label laravel development
                        company, we help you scale faster, reduce operational costs, and
                        deliver enterprise-grade solutions under your brand name.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={whyUsImg}
                            alt="White Label Laravel"
                            className="w-full max-w-[600px] rounded-[28px]"
                        />
                    </div>

                    {/* RIGHT CARDS */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="group bg-white border border-gray-200 rounded-[24px] p-7 transition-all duration-300 hover:border-orange-400 hover:bg-[#fff7ed]"
                                >
                                    {/* ICON + HEADING */}
                                    <div className="flex items-center gap-4 mb-4">

                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-orange-300 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition">
                                            <Icon size={22} />
                                        </div>

                                        <h3 className="text-lg font-semibold leading-snug  group-hover:text-orange-600 transition">
                                            {item.title}
                                        </h3>

                                    </div>

                                    {/* DESCRIPTION */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyUs;
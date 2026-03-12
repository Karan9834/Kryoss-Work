import React from "react";
import {
    ShieldCheck,
    Rocket,
    UserCog,
    BarChart3,
    FileCode2,
    BadgeCheck,
} from "lucide-react";

import benefitImg from "../../../assets/services-wordpress-img/wordpressbenifit.webp";

const benefits = [
    {
        icon: ShieldCheck,
        title: "NDA Protected",
        desc: "Every project is delivered under your brand. We sign NDA upfront – your client never knows we exist & your business stays fully protected.",
    },
    {
        icon: Rocket,
        title: "Faster Project Turnaround",
        desc: "Our dedicated WordPress teams run parallel workflows so you hit client deadlines without cutting corners on quality.",
    },
    {
        icon: UserCog,
        title: "No-Hiring / Training Overhead",
        desc: "Skip the months-long hiring cycle. Get experienced WordPress developers ready to execute from day one.",
    },
    {
        icon: BarChart3,
        title: "Scalable Capacity On Demand",
        desc: "One project or ten — scale up or down based on your pipeline and pay only for what you need.",
    },
    {
        icon: FileCode2,
        title: "Clean, Documented & Handoff-Ready Code",
        desc: "Every deliverable includes clean code, proper documentation, and thorough QA.",
    },
    {
        icon: BadgeCheck,
        title: "End-to-End WordPress Expertise",
        desc: "From theme development and plugins to WooCommerce and ongoing maintenance.",
    },
];

const Benefits = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}
                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-sm mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Our Benefits
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Benefits of Choosing{" "}
                        <span className="text-orange-500">
                            White Label WordPress Development
                        </span>
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Stop limiting your agency’s growth to what your in-house team can
                        handle. Here’s what you gain when you partner with a white label
                        WordPress development company.
                    </p>
                </div>

                {/* layout */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT IMAGE */}
                    <div>
                        <img
                            src={benefitImg}
                            alt="benefits"
                            className="w-full rounded-[30px] object-cover"
                        />
                    </div>

                    {/* RIGHT CARDS */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {benefits.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="group bg-gray-50 border rounded-2xl p-6 transition-all duration-300 hover:bg-[#fff7ed] hover:border-orange-300"
                                >

                                    {/* icon */}
                                    <div className="flex items-start gap-4">

                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-orange-500 flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition">

                                            <Icon size={22} />

                                        </div>

                                        <div>

                                            {/* title */}
                                            <h3 className="font-semibold text-lg leading-snug line-clamp-2 group-hover:text-orange-600 transition">

                                                {item.title}

                                            </h3>

                                        </div>

                                    </div>

                                    {/* desc */}
                                    <p className="text-gray-600 mt-4 text-sm leading-relaxed">

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

export default Benefits;
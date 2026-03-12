import React from "react";
import { Star, Users, Rocket, Wrench } from "lucide-react";
import edgeImg from "../../../assets/services-laravel-img/laraveledge.webp";

const features = [
    {
        icon: Star,
        title: "8+ Years of Laravel Expertise",
        desc: "We have deep hands-on experience building complex laravel application development projects across multiple industries.",
    },
    {
        icon: Users,
        title: "40+ Dedicated Laravel Developers",
        desc: "Our in-house experts allow agencies to hire Laravel developers instantly and scale without delays.",
    },
    {
        icon: Rocket,
        title: "200+ Projects Delivered Successfully",
        desc: "As a trusted white label laravel development company, we have built enterprise-grade backend systems, SaaS platforms, and custom web applications.",
    },
    {
        icon: Wrench,
        title: "1-Year Post-Launch Support",
        desc: "We provide ongoing maintenance, performance optimization, and cloud support after delivery to ensure business continuity.",
    },
];

const OurEdge = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* RED PANEL */}
                <div className="bg-gradient-to-r from-[#5b0a05] to-[#7b0c07] rounded-[40px] p-10 md:p-14 text-white relative overflow-hidden">

                    {/* TOP HEADING */}
                    <div className="text-center max-w-4xl mx-auto mb-14">

                        <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1 text-sm mb-4">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Our Edge
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                            <span className="text-orange-400">
                                Why White Label Fox
                            </span>{" "}
                            Is the Right White Label Laravel Development Partner
                        </h2>

                        <p className="text-white/80 mt-5 leading-relaxed">
                            With 8+ years of experience and 200+ successful projects, White
                            Label Fox delivers secure, scalable, and fully confidential
                            white label laravel development solutions for agencies, SaaS
                            startups, and enterprise IT firms worldwide.
                        </p>

                    </div>

                    {/* MAIN GRID */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT SCROLLABLE TIMELINE */}
                        <div className="relative max-h-[420px] overflow-y-auto pr-6"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}>

                            <div className="relative space-y-12 pl-0">

                                {/* dotted line */}
                                <div className="absolute left-[22px] top-2 bottom-2 border-l-2 border-dashed border-white/40"></div>

                                {features.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={index} className="flex gap-6 relative">

                                            {/* icon */}
                                            <div className="relative z-10 flex-shrink-0">
                                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#8b1a14] border border-white/20">
                                                    <Icon size={22} />
                                                </div>
                                            </div>

                                            {/* CARD */}
                                            <div className="bg-[#7a140f] border border-white/20 rounded-[18px] p-6 max-w-[520px]">

                                                <h3 className="text-lg font-semibold mb-2">
                                                    {item.title}
                                                </h3>

                                                <p className="text-white/80 text-sm leading-relaxed">
                                                    {item.desc}
                                                </p>

                                            </div>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">

                            <img
                                src={edgeImg}
                                alt="Laravel Experts"
                                className="w-full max-w-[600px] object-contain"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default OurEdge;
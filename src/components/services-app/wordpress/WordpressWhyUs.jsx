import React from "react";
import { Users, Award, Rocket } from "lucide-react";
import whyImg from "../../../assets/services-wordpress-img/wordpresswhyus.webp";

const items = [
    {
        icon: Users,
        title: "Dedicated WordPress Developers, Not Shared Resources",
        desc: "You get developers assigned exclusively to your projects – not a pool of shared freelancers juggling five clients at once. That means better focus, consistent quality, and faster turnaround on every WordPress build.",
    },
    {
        icon: Award,
        title: "8+ Years Delivering Enterprise-Grade WordPress Projects",
        desc: "We've spent 8+ years building WordPress solutions for agencies and businesses across 70+ countries. From simple business websites to complex headless WordPress architectures – we've handled it all.",
    },
    {
        icon: Rocket,
        title: "Transparent Communication & On-Time Delivery – Always",
        desc: "No surprises, no radio silence. You get regular progress updates, structured sprint reports, and a project manager as your single point of contact.",
    },
];

const WhyUs = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* GREENISH CONTAINER */}
                <div className="bg-gradient-to-r from-[#032c34] to-[#0a4a54] rounded-[50px] px-10 md:px-16 py-16 text-white">

                    {/* heading */}
                    <div className="text-center mb-14">

                        <div className="inline-flex items-center gap-2 border border-white/30 px-4 py-1 rounded-full text-sm mb-4">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Why Us
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold">
                            Explore Why Agencies &{" "}
                            <span className="text-orange-400">
                                Businesses Choose White Label Fox
                            </span>
                        </h2>

                        <p className="text-white/80 mt-4 max-w-3xl mx-auto">
                            There's no shortage of WordPress development companies. Here's
                            what makes White Label Fox the partner agencies, startups, and
                            enterprises keep coming back to.
                        </p>

                    </div>

                    {/* main layout */}
                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        {/* LEFT SIDE CARDS */}
                        <div className="relative max-h-[420px] overflow-y-auto pr-6"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}>

                            <div className="relative space-y-12 pl-0">

                                {/* dotted line */}
                                <div className="absolute left-[22px] top-2 bottom-2 border-l-2 border-dashed border-white/40"></div>

                                {items.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={index} className="flex gap-6 relative ">

                                            {/* icon */}
                                            <div className="relative z-10 flex-shrink-0">
                                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0b3a42] border border-white/20">
                                                    <Icon size={22} />
                                                </div>
                                            </div>

                                            {/* card */}
                                            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm  ">

                                                <h3 className="text-xl font-semibold mb-3 text-white">
                                                    {item.title}
                                                </h3>

                                                <p className="text-white/90 leading-relaxed">
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
                                src={whyImg}
                                alt="why us"
                                className="w-full max-w-[600px] object-contain"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhyUs;
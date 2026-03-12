import React from "react";
import aboutImg from "../../../assets/services-wordpress-img/wordpressaboutus.webp";

import {
    Target,
    DollarSign,
    ShieldCheck,
    Headphones
} from "lucide-react";

const About = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        <img
                            src={aboutImg}
                            alt="WordPress Team"
                            className="w-full max-w-[620px] object-contain rounded-xl"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* badge */}
                        <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            About Us
                        </div>

                        {/* heading */}
                        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">

                            What Is White Label WordPress Development
                            <span className="text-orange-500">
                                {" "} & Why Your Business Needs It
                            </span>

                        </h2>

                        {/* paragraph */}
                        <p className="text-gray-600 mb-6 leading-relaxed">

                            White label WordPress development means hiring a dedicated
                            technical team that builds WordPress websites entirely under
                            your brand name. Your clients see your company while we stay
                            invisible — no credits, no branding, no conflict.

                        </p>

                        <p className="text-gray-600 mb-10 leading-relaxed">

                            Whether you're an agency looking to scale capacity, a startup
                            that needs a reliable tech partner, or an enterprise managing
                            multiple WordPress projects — we provide the development
                            backbone without the overhead of hiring and managing an
                            in-house team.

                        </p>

                        {/* points */}
                        <div className="space-y-6">

                            {/* item */}
                            <div className="flex items-start gap-4">

                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-orange-500 rounded-full text-white">
                                    <Target size={18} />
                                </div>

                                <p className="text-gray-700">
                                    Targets agencies turning down WordPress projects due to
                                    capacity constraints and revenue loss.
                                </p>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-orange-500 rounded-full text-white">
                                    <DollarSign size={18} />
                                </div>

                                <p className="text-gray-700">
                                    Helps agencies improve margins by reducing development
                                    overhead and project delays.
                                </p>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-orange-500 rounded-full text-white">
                                    <ShieldCheck size={18} />
                                </div>

                                <p className="text-gray-700">
                                    Eliminates freelancer risks like broken plugins,
                                    messy code, and lack of documentation.
                                </p>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-orange-500 rounded-full text-white">
                                    <Headphones size={18} />
                                </div>

                                <p className="text-gray-700">
                                    Solves the post-launch gap by providing reliable
                                    ongoing WordPress maintenance and support.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;
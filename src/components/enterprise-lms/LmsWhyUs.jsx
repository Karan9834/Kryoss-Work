import React from "react";
import whyus from "../../assets/homeservice-tutor-img/whyus.webp";

const LmsWhyUs = () => {
    return (
        <section className="bg-[#0f172a] py-8 lg:py-24 overflow-hidden relative">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* BADGE */}
                <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-violet-400/30 text-violet-200 text-sm bg-violet-400/5">
                        <span className="w-2 h-2 bg-violet-400 rounded-full" />
                        Why Choose Our LMS
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[34px] lg:text-[48px] font-semibold text-white mb-6 leading-tight">
                    Why Choose us for <span className="text-violet-400">LMS Development</span>
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-indigo-100/70 text-[16px] lg:text-[18px] max-w-4xl mx-auto mb-20 leading-relaxed">
                    We combine innovative technology with pedagogical best practices to deliver an LMS that truly transforms the learning experience. Here's why we are the preferred choice for digital academies:
                </p>

                {/* INFOGRAPHIC IMAGE */}
                <div className="w-full flex justify-center mb-24">
                     <div className="relative group">
                        <div className="absolute -inset-4 bg-violet-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <img
                            src={whyus}
                            alt="Why choose our LMS"
                            className="relative w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* BULLET POINTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

                    {/* LEFT LIST */}
                    <div className="space-y-12">
                        <div className="flex items-start gap-6 group">
                            <div className="mt-2 w-3 h-3 rounded-full bg-violet-500 group-hover:scale-150 transition-transform shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                            <p className="text-indigo-50/90 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Empower your instructors and students with real-time feedback loops, interactive dashboards, and live engagement metrics for a superior educational experience.
                            </p>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="mt-2 w-3 h-3 rounded-full bg-violet-500 group-hover:scale-150 transition-transform shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                            <p className="text-indigo-50/90 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Fully customize your learning environment with specialized modules for course authoring, gamification, assessment engines, and video conferencing integrations.
                            </p>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="mt-2 w-3 h-3 rounded-full bg-violet-500 group-hover:scale-150 transition-transform shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                            <p className="text-indigo-50/90 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Designed with an intuitive, learner-centric interface that ensures high engagement rates and easy navigation for users of all technical skill levels.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="space-y-12">
                        <div className="flex items-start gap-6 group">
                            <div className="mt-2 w-3 h-3 rounded-full bg-violet-500 group-hover:scale-150 transition-transform shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                            <p className="text-indigo-50/90 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Built on a secure, enterprise-grade cloud architecture that scales effortlessly as your student base grows, keeping your educational content protected.
                            </p>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="mt-2 w-3 h-3 rounded-full bg-violet-500 group-hover:scale-150 transition-transform shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                            <p className="text-indigo-50/90 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Launch your sophisticated LMS platform in just 5 working days, allowing you to focus on content delivery while we handle the technical infrastructure.
                            </p>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="mt-2 w-3 h-3 rounded-full bg-violet-500 group-hover:scale-150 transition-transform shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                            <p className="text-indigo-50/90 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Leveraging agile development and the latest educational technology trends to deliver a future-proof LMS that stays ahead of the competition.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default LmsWhyUs;

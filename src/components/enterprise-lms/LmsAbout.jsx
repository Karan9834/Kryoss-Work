import React from "react";
import lmsabout from "../../assets/lms-img/lmsabout.jpg";

const LmsAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-violet-50/50 -skew-x-12 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-violet-500/10 blur-3xl "></div>
                        <div className="relative overflow-hidden rounded-[40px] border-8 border-violet-100/50 shadow-2xl">
                            <img
                                src={lmsabout}
                                alt="About our LMS - Showcase Image Placeholder"
                                className="w-full h-auto min-h-[400px] object-cover bg-violet-50"
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-violet-600 text-white p-8 rounded-3xl shadow-xl shadow-violet-900/20 max-w-[180px] text-center hidden md:block">
                            <p className="text-3xl font-bold mb-1">10+</p>
                            <p className="text-xs font-medium uppercase tracking-widest text-violet-100">Years of EdTech Excellence</p>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="text-slate-800">
                        {/* Capsule */}
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-xs font-bold text-violet-700 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></span>
                                Discover Our Vision
                            </span>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-semibold mb-8 leading-[1.1] tracking-tight text-slate-900">
                            Empowering Education Through <span className="text-violet-700">Digital Innovation</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed italic">
                            <p>
                                At the heart of a successful Learning Management System (LMS) is the ability to bridge the gap between complex instruction and intuitive delivery. We specialize in building platforms that don't just store content, but actively facilitate knowledge growth.
                            </p>

                            <p>
                                Our approach to LMS development is built on years of pedagogical research and technical expertise. We understand that every learner is different, which is why our systems prioritize personalization and engagement metrics from the ground up.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="border-l-4 border-violet-200 pl-4">
                                    <p className="text-2xl font-semibold text-slate-900">Scalable</p>
                                    <p className="text-sm font-medium text-slate-500">Built to grow with your audience.</p>
                                </div>
                                <div className="border-l-4 border-violet-200 pl-4">
                                    <p className="text-2xl font-semibold text-slate-900">Secure</p>
                                    <p className="text-sm font-medium text-slate-500">Enterprise-grade data protection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LmsAbout;

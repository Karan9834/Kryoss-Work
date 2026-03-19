import React from 'react';
import lmscta2 from "../../assets/lms-img/lmscta2.jpg";

const LmsCTA2 = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-slate-50">
             {/* Decorative Background Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-violet-200/50 blur-3xl rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-200/50 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="bg-gradient-to-br from-violet-700 to-indigo-900 rounded-[40px] px-8 md:px-16 py-16 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative group shadow-2xl">

                    {/* Left Content */}
                    <div className="lg:w-3/5 text-white relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                            Empower Your <span className="text-violet-300">Digital Academy</span> with Next-Gen LMS
                        </h2>

                        <p className="text-lg text-violet-100/90 mb-10 leading-relaxed max-w-xl">
                            Unlock the potential of modern learning with our cutting-edge 
                            technology. Request a customized demo today and see how we 
                            can transform your educational and training programs.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <button className="px-10 py-4 bg-white text-violet-900 font-bold rounded-full hover:bg-violet-50 transition shadow-xl active:scale-95 duration-300">
                                Request Free Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Image (Overflowing) */}
                    <div className="lg:w-2/5 flex justify-end relative z-10">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                            <img
                                src={lmscta2}
                                alt="LMS Platform Showcase Placeholder"
                                className="w-[380px] md:w-[480px] lg:scale-110 rounded-3xl min-h-[300px] bg-white/10 backdrop-blur-sm object-cover border border-white/20 shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LmsCTA2;

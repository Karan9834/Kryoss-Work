import React from 'react';
import lmscta1 from "../../assets/lms-img/lmscta11.jpeg";

const LmsCTA1 = () => {
    return (
        <section className="py-24 bg-[#1e1b4b] relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -ml-64 -mb-64"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Image */}
                <div className="relative order-2 lg:order-1 flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-violet-500/20 blur-2xl rounded-[40px]"></div>
                        <img
                            src={lmscta1}
                            alt="LMS Mobile Placeholder"
                            className="relative w-full max-w-[520px] rounded-[40px] shadow-2xl border-8 border-white/5 min-h-[300px] bg-indigo-900/50 object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 text-white">
                    <h2 className="text-2xl lg:text-3xl font-semibold leading-tight mb-8">
                        Your Academy, Anywhere on <span className="text-violet-400 text-glow">Any Device</span>
                    </h2>

                    <p className="text-lg text-indigo-100/80 mb-10 leading-relaxed max-w-xl">
                        Break geographic barriers. Manage your global academy from a
                        unified learning app, ensuring educators and students stay connected
                        to knowledge 24/7, even on the move.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <button className="px-10 py-4 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition shadow-[0_0_20px_rgba(139,92,246,0.3)] active:scale-95">
                            Get Custom Quote
                        </button>
                    </div>
                </div>

            </div>

            <style>{`
                .text-glow {
                    text-shadow: 0 0 10px rgba(167, 139, 250, 0.4);
                }
            `}</style>
        </section>
    );
};

export default LmsCTA1;

import React from "react";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/pharmacynextaipms-img/pharmacynextaipmsabout.jpg";

const PharmacyNextAIAbout = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden text-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Visual Space (IMAGE ON LEFT) */}
                    <div className="relative group mb-12 lg:mb-0">
                        <div className="relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-slate-50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-slate-100 flex items-center justify-center transition-all duration-700 group-hover:scale-[1.02]">
                            <img src={aboutImg} alt="PharmacyNext AI Inventory" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative floating badge */}
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-teal-900 text-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(13,148,136,0.3)] z-20">
                            <p className="text-teal-300 font-black text-3xl sm:text-4xl md:text-5xl mb-1 leading-none">99%</p>
                            <p className="text-[10px] sm:text-xs font-bold text-teal-100 uppercase tracking-widest leading-none">Prediction Accuracy</p>
                        </div>
                        <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-100 rounded-full blur-[100px] opacity-40 -z-0 animate-pulse" />
                    </div>

                    {/* Right: Content (CONTENT ON RIGHT) */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest block font-medium">The AI Edge</span>
                             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                                Pharmacy Management,{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                                    Redefined for Retail.
                                </span>
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-bold tracking-tight">
                                Traditional pharmacy systems are slow, manual, and prone to error. PharmacyNext AI leverages advanced algorithms to automate inventory, predict demand, and ensure consumer safety with every transaction.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "AI-Powered inventory forecasting",
                                "Zero-touch digital prescription sync",
                                "Automated drug interaction engine",
                                "Lightning-fast omni-channel POS",
                                "Integrated loyalty & CRM tools",
                                "Stock expiry & slow-moving alerts"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-teal-50/50 border border-teal-100 hover:bg-teal-50 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="text-teal-50" size={14} />
                                    </div>
                                    <span className="text-slate-700 font-black text-xs uppercase tracking-tighter">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PharmacyNextAIAbout;

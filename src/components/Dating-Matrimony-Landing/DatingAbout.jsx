import React from 'react';
import { Target, Shield, Zap, CheckCircle, Flame, Heart } from 'lucide-react';
import aboutImg from '../../assets/datinglanding-img/datinglandingabout.jpg';

const DatingAbout = () => {
    const benefits = [
        "End-to-End Encryption",
        "AI-Based Personality Match",
        "Verified Video Profiles",
        "Advanced Privacy Controls"
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-rose-50 rounded-full blur-[100px] -translate-x-1/2 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left: Visual Section with Image Placeholder */}
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-purple-400 rounded-[40px] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

                        <div className="relative z-10 w-full aspect-[5/5] bg-white rounded-[40px] border-8 border-white shadow-xl flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-[1.01]">
                            <img src={aboutImg} alt="About Matrimony Platform" className="w-full h-full object-cover rounded-[32px]" />
                        </div>

                        {/* Floating Success Card */}
                        {/* <div className="absolute -right-6 bottom-12 bg-white p-6 rounded-3xl shadow-2xl z-20 animate-float border border-rose-50 hidden sm:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-200">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase">AI Accuracy</p>
                                    <p className="text-lg font-black text-slate-900">98.5%</p>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Right: Content Section */}
                    <div className="lg:w-1/2 space-y-8 animate-fadeIn">
                        <div className="space-y-4">
                            <span className="text-purple-600 font-bold text-sm uppercase tracking-[0.2em] block">Redefining Connection</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                                More Than Just a Swipe, <br />
                                <span className="text-rose-500">A Meaningful Journey</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our platform isn't just about finding dates; it's about building lasting relationships. We combine cutting-edge AI technology with deep psychological insights to connect people who truly resonate with each other.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                                        <CheckCircle size={16} />
                                    </div>
                                    <span className="text-slate-700 font-semibold">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-slate-100 flex items-center gap-6">
                            {/* <div className="flex -space-x-2">
                                {[1].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-100"></div>
                                ))}
                            </div> */}
                            <p className="text-sm text-slate-500 font-medium">
                                <span className="text-slate-900 font-bold">10k+ active users</span> currently searching for their match.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DatingAbout;

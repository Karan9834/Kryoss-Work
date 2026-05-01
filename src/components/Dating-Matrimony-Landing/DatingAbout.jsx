import React from 'react';
import { Target, Shield, Zap, CheckCircle, Flame, Heart } from 'lucide-react';
import aboutImg from '../../assets/maternitydating-product/More Than Just a Swipe A Meaningful Journey.png';

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
                    </div>

                    {/* Right: Content Section - Updated Typography */}
                    <div className="lg:w-1/2 space-y-8 animate-fadeIn">
                        <div className="space-y-4">
                            {/* Badge - Updated: text-[14px] font-bold tracking-[0.2em] uppercase */}
                            <span className="text-purple-600 text-[14px] font-bold tracking-[0.2em] uppercase block">Redefining Connection</span>
                            
                            {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-slate-900">
                                More Than Just a Swipe, <br />
                                <span className="text-rose-500">A Meaningful Journey</span>
                            </h2>
                            
                            {/* Description Text - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
                            <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-slate-600">
                                Our platform isn't just about finding dates; it's about building lasting relationships. We combine cutting-edge AI technology with deep psychological insights to connect people who truly resonate with each other.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                                        <CheckCircle size={16} />
                                    </div>
                                    {/* Benefit text - Updated: text-[14px] md:text-[16px] font-semibold */}
                                    <span className="text-slate-700 font-semibold text-[14px] md:text-[16px]">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-slate-100 flex items-center gap-6">
                            {/* Stats text - Updated: text-[14px] font-normal leading-[1.6] */}
                            <p className="text-[14px] font-normal leading-[1.6] text-slate-500 font-medium">
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
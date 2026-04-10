import React from 'react';
import { CheckCircle2, Lightbulb, Target, Rocket } from 'lucide-react';
import aboutImg from '../../assets/educationlanding-img/educationlandingabout.webp';

const EducationAbout = () => {
    const highlights = [
        "Personalized Learning Paths",
        "Expert-Led Virtual Classes",
        "Interactive Skill Assessments",
        "Comprehensive Student Analytics",
        "Seamless Parent Communication",
        "Mobile-First Experience"
    ];

    const stats = [
        { icon: Lightbulb, label: "Smart Content", color: "text-amber-500" },
        { icon: Target, label: "Defined Goals", color: "text-emerald-500" },
        { icon: Rocket, label: "Fast Progress", color: "text-indigo-500" }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative group order-2 lg:order-1">
                        <div className="absolute -inset-10 bg-indigo-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <img
                            src={aboutImg}
                            alt="Education Vision"
                            className="w-[520px] h-[520px] object-contain relative z-10 group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Interactive Stats Overlay */}
                        <div className="absolute -right-2 top-10 lg:-right-4 lg:top-1/4 space-y-3 lg:space-y-4 z-20">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl flex items-center gap-2 lg:gap-3 animate-float-delayed border border-indigo-50" style={{ animationDelay: `${idx * 0.5}s` }}>
                                    <stat.icon className={`${stat.color} w-5 h-5 lg:w-6 lg:h-6`} />
                                    <span className="font-bold text-xs lg:text-sm whitespace-nowrap">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Content - Updated Typography */}
                    <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
                        <div className="space-y-4">
                            {/* Badge - Updated: text-[14px] font-bold tracking-[0.3em] uppercase */}
                            <span className="text-indigo-600 text-[14px] font-bold tracking-[0.3em] uppercase">Our Vision</span>
                            
                            {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
                                Empowering Global <span className="text-indigo-600">Education</span> Through Technology
                            </h2>

                            {/* Description Text - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
                            <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-[#4A4B5E]">
                                We're on a mission to make world-class education accessible to everyone. Our platform bridges the gap between expert tutors and eager learners, creating a dynamic ecosystem that adapts to individual needs.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-indigo-50/50 rounded-2xl hover:bg-indigo-100 transition-all group cursor-default border border-transparent hover:border-indigo-100">
                                    <CheckCircle2 size={20} className="text-indigo-600 group-hover:scale-110 transition-transform" />
                                    {/* Highlight text - Updated: text-[14px] md:text-[16px] font-semibold */}
                                    <span className="text-[#1A1C2C] font-semibold text-[14px] md:text-[16px]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                .animate-fadeInRight {
                    animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float-delayed { animation: float 4s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default EducationAbout;
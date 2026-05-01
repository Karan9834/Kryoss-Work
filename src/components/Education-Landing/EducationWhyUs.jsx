import React from 'react';
import {
    Sparkles,
    Layers,
    Globe,
    Zap,
    Heart,
    Award
} from 'lucide-react';

const EducationWhyUs = () => {
    const reasons = [
        {
            icon: Sparkles,
            title: "Advanced AI Proctoring",
            desc: "Ensure exam integrity with our state-of-the-art AI-driven proctoring and cheat detection systems.",
            color: "from-blue-500 to-indigo-600",
            lightColor: "bg-blue-50"
        },
        {
            icon: Layers,
            title: "Scalable Infrastructure",
            desc: "Our platform grows with you, supporting thousands of concurrent users without any lag.",
            color: "from-purple-500 to-pink-600",
            lightColor: "bg-purple-50"
        },
        {
            icon: Globe,
            title: "Multi-Language Support",
            desc: "Break language barriers with interfaces and content available in multiple global languages.",
            color: "from-teal-400 to-emerald-500",
            lightColor: "bg-teal-50"
        },
        {
            icon: Zap,
            title: "Lightning Fast Performance",
            desc: "Optimized for speed, providing a smooth user experience even on low-bandwidth connections.",
            color: "from-amber-400 to-orange-500",
            lightColor: "bg-amber-50"
        },
        {
            icon: Heart,
            title: "Student-Centric Design",
            desc: "Every pixel is designed with the student's comfort and learning outcomes in mind.",
            color: "from-rose-400 to-red-500",
            lightColor: "bg-rose-50"
        },
        {
            icon: Award,
            title: "Certified Excellence",
            desc: "Built following international e-learning standards and best practices for quality education.",
            color: "from-cyan-400 to-blue-500",
            lightColor: "bg-cyan-50"
        }
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-[150px] -ml-40 opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-[150px] -mr-40 opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header - Updated Typography ONLY */}
                <div className="text-center mb-20 space-y-4">
                    {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
                        Why Experts <span className="text-indigo-600">Choose Us</span>
                    </h2>
                    {/* Description - 16px, weight 400, line-height 1.6 */}
                    <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                        We combine cutting-edge technology with instructional design to deliver the best learning experience possible.
                    </p>
                </div>

                {/* Cards - Fonts KEPT ORIGINAL (unchanged) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover background reveal */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className="space-y-6 relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} p-[2px] shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                        <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
                                            <Icon className="text-indigo-600" size={32} />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {/* Card Title - ORIGINAL FONT (unchanged) */}
                                        <h3 className="text-xl font-bold text-[#1A1C2C] group-hover:text-indigo-600 transition-colors">
                                            {reason.title}
                                        </h3>
                                        {/* Card Description - ORIGINAL FONT (unchanged) */}
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Glow */}
                                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${reason.color} group-hover:w-full transition-all duration-700`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EducationWhyUs;
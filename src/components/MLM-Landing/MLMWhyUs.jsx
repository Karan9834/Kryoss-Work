import React from 'react';
import { Award, Users, ShieldCheck, Zap } from 'lucide-react';

const MLMWhyUs = () => {
    const reasons = [
        {
            icon: <Award className="w-10 h-10 text-blue-600 mb-6" />,
            title: "Expert MLM Developers",
            desc: "Years of experience in developing complex network marketing systems with secure payout logic."
        },
        {
            icon: <Zap className="w-10 h-10 text-blue-600 mb-6" />,
            title: "Performance Ready",
            desc: "Our software is optimized for high-traffic and large member bases, ensuring smooth operations 24/7."
        }
    ];

    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                        Why Kryoss MLM
                    </div>
                    <h2 className="text-4xl font-extrabold text-[#1E293B] leading-tight">
                        Powering Your <br />
                        <span className="text-blue-600">Network Marketing Success</span>
                    </h2>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed">
                        We work with clients to establish an understanding of the business needs and requirements, providing the best means to achieve them. Our software includes E-wallet, distributor management, and automated commission processing.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {reasons.map((reason, i) => (
                            <div key={i}>
                                {reason.icon}
                                <h4 className="text-xl font-bold text-[#1E293B] mb-3">{reason.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-[4/3] bg-blue-50 rounded-[4rem] border-8 border-white shadow-2xl overflow-hidden relative z-10">
                       <img src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800" alt="Why us MLM" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-200/50 rounded-full blur-3xl -z-0 opacity-50"></div>
                </div>
            </div>
        </section>
    );
};

export default MLMWhyUs;

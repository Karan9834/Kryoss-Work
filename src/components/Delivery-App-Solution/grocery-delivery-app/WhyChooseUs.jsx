import React from 'react';
import { ShieldCheck, Rocket, Palette, MousePointer2, Settings2, Headset, FileText, Globe } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        { icon: <ShieldCheck />, title: "Secure & Reliable", desc: "Top-tier security protocols for data and transactions." },
        { icon: <Rocket />, title: "Quick Launch", desc: "Ready-to-market solution that gets you live in days." },
        { icon: <Palette />, title: "White-Label", desc: "Fully branded apps with your logos and color schemes." },
        { icon: <MousePointer2 />, title: "User-Centric UI", desc: "Meticulously designed UX for high conversion rates." },
        { icon: <Settings2 />, title: "Scalable Logic", desc: "Built to handle thousands of concurrent orders easily." },
        { icon: <Headset />, title: "24/7 Support", desc: "Round-the-clock technical assistance for your peace of mind." },
        { icon: <FileText />, title: "NDA Protected", desc: "Your business secrets are safe with our strict NDAs." },
        { icon: <Globe />, title: "Global Ready", desc: "Support for multi-language and multi-currency out of the box." }
    ];

    return (
        <section className="py-24 px-4 sm:px-10 lg:px-20 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Why We are the <span className="text-[#10B981]">Right Choice</span>
                    </h2>
                    <p className="text-gray-600 text-lg lg:lowercase">
                        EXPERIENCE EXCELLENCE WITH OUR WORLD-CLASS GROCERY APP DEVELOPMENT TEAM.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-emerald-100 transition-all duration-500">
                            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#10B981] mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                {React.cloneElement(reason.icon, { size: 28 })}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Branding Badge */}
                <div className="mt-20 flex justify-center">
                    <div className="bg-[#10B981] text-white px-10 py-6 rounded-[3rem] shadow-2xl shadow-emerald-500/30 flex items-center gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-black">100%</div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-80">White label</div>
                        </div>
                        <div className="h-10 w-[1px] bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-3xl font-black">Full</div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Ownership</div>
                        </div>
                        <div className="h-10 w-[1px] bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-3xl font-black">Free</div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Deployment</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

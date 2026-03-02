import React from 'react';
import { Smartphone, Monitor, Globe, Server, ShieldCheck, HeartPulse } from 'lucide-react';

const Deliverables = () => {
    const items = [
        { icon: <Smartphone />, title: "Android Customer App", desc: "Premium native experience for Android users." },
        { icon: <Smartphone />, title: "iOS Customer App", desc: "Polished iOS application for Apple ecosystems." },
        { icon: <Monitor />, title: "Store Management Panel", desc: "Dedicated dashboard for grocery store partners." },
        { icon: <Monitor />, title: "Delivery Partner App", desc: "Efficient utility app for the delivery fleet." },
        { icon: <Monitor />, title: "Super Admin Control", desc: "The brain of your business operations." },
        { icon: <Globe />, title: "User Web Platform", desc: "Responsive web portal for desktop ordering." }
    ];

    return (
        <section className="py-24 px-4 sm:px-10 lg:px-20 bg-emerald-950 text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#10B981]/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full -mr-48 -mb-48 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 italic tracking-tight uppercase">
                        Our Comprehensive <span className="text-[#10B981]">Package</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We don't just provide an app; we deliver a complete technological infrastructure
                        to manage and scale your grocery business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-[#10B981]/10 hover:border-[#10B981]/30 transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-8 border border-[#10B981]/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                {React.cloneElement(item.icon, { size: 28 })}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Trust Band */}
                <div className="mt-20 flex flex-wrap justify-center gap-12 py-10 border-t border-white/5 opacity-60">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="text-[#10B981]" size={24} />
                        <span className="text-sm font-bold uppercase tracking-widest">Full Source Code</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Server className="text-[#10B981]" size={24} />
                        <span className="text-sm font-bold uppercase tracking-widest">Free Deployment</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <HeartPulse className="text-[#10B981]" size={24} />
                        <span className="text-sm font-bold uppercase tracking-widest">Lifetime Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deliverables;

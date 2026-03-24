import React from 'react';
import { Award, Shield, Zap, Headphones, PieChart, FlaskConical } from 'lucide-react';

const TaxiWhyUs = () => {
    const reasons = [
        {
            icon: Award,
            title: "Market Proven",
            desc: "Our solutions are used by 100+ fleet owners globally, ensuring high reliability.",
            number: "01"
        },
        {
            icon: Shield,
            title: "Safe & Secure",
            desc: "Advanced encryption and real-time monitoring for total passenger safety.",
            number: "02"
        },
        {
            icon: Zap,
            title: "Super Fast",
            desc: "Optimized for speed, our apps offer sub-second response times for instant bookings.",
            number: "03"
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            desc: "Our technical experts are available around the clock to assist you and your drivers.",
            number: "04"
        },
        {
            icon: PieChart,
            title: "ROI Driven",
            desc: "Lower commissions and higher efficiency lead to a significantly better return on investment.",
            number: "05"
        },
        {
            icon: FlaskConical,
            title: "Innovative Core",
            desc: "We constantly update our tech stack to keep you ahead of the mobility competition.",
            number: "06"
        }
    ];

    return (
        <section className="py-24 bg-[#1E293B] text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] -ml-40 -mb-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-8">
                    <div className="lg:max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
                            Why the Best <span className="text-yellow-500 italic">Fleet Owners</span> <br />
                            Choose Our Technology
                        </h2>
                    </div>
                    <div className="lg:max-w-md text-center lg:text-left">
                        <p className="text-slate-400 text-lg">
                            We bridge the gap between complex transport logistics and simple user experiences with our award-winning taxi software.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="relative group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-yellow-500/50 transition-all duration-300">
                            {/* Large Background Number */}
                            <span className="absolute top-4 right-8 text-7xl font-black text-white/5 pointer-events-none group-hover:text-yellow-500/10 transition-colors">
                                {reason.number}
                            </span>
                            
                            <div className="space-y-6 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-slate-700 text-yellow-500 flex items-center justify-center shadow-lg group-hover:bg-yellow-500 group-hover:text-[#1E293B] transition-all duration-500 group-hover:rotate-6">
                                    <reason.icon size={28} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold group-hover:text-yellow-500 transition-colors">{reason.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t border-slate-700/50 flex flex-wrap justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <span className="font-bold text-xl uppercase tracking-widest flex items-center gap-2">
                       <Zap className="text-yellow-500" /> FastTech
                    </span>
                    <span className="font-bold text-xl uppercase tracking-widest flex items-center gap-2">
                       <Shield className="text-blue-500" /> SecureLink
                    </span>
                    <span className="font-bold text-xl uppercase tracking-widest flex items-center gap-2">
                       <PieChart className="text-green-500" /> DataCore
                    </span>
                </div>
            </div>
        </section>
    );
};

export default TaxiWhyUs;

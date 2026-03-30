import React from 'react';
import { motion } from 'framer-motion';
import { 
    Cpu, 
    ShieldCheck, 
    Zap, 
    Layers, 
    Globe, 
    BarChart3, 
    Award,
    Users
} from 'lucide-react';

const NFTWhyUs = () => {
    const reasons = [
        {
            icon: <Award className="w-10 h-10 text-violet-600 mb-6" />,
            title: "Blockchain Experts",
            desc: "A team of specialized blockchain developers with deep knowledge of smart contracts and NFT protocols."
        },
        {
            icon: <Users className="w-10 h-10 text-violet-600 mb-6" />,
            title: "White Label Ready",
            desc: "Launch your marketplace quickly with our customizable and fully-tested script, reducing costs and time."
        }
    ];

    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <div className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                        Why Choose Kryoss
                    </div>
                    <h2 className="text-4xl font-extrabold text-[#1E293B] leading-tight">
                        The Most Creative Way of <br />
                        <span className="text-violet-600">Digital Item Exchange</span>
                    </h2>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed">
                        Create a unique and distinguishable non-fungible token platform with SemiDot Infotech. We are a reliable, leading NFT marketplace development company. Join the most creative way of digital item exchange with us.
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
                    <div className="aspect-[4/3] bg-violet-50 rounded-[4rem] border-8 border-white shadow-2xl overflow-hidden relative z-10">
                       <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" alt="Why us" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-violet-200/50 rounded-full blur-3xl -z-0 opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[120%] bg-violet-100 rounded-full blur-[100px] -z-10 opacity-30"></div>
                </div>
            </div>
        </section>
    );
};

export default NFTWhyUs;

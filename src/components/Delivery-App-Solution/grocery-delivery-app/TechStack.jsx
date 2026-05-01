import React from 'react';

const TechStack = () => {
    const techs = [
        { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
        { name: "iOS", icon: "https://cdn.simpleicons.org/apple" },
        { name: "Android", icon: "https://cdn.simpleicons.org/android" },
        { name: "PHP/Laravel", icon: "https://cdn.simpleicons.org/laravel" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
        { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
        { name: "Amazon S3", icon: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg" }
    ];

    return (
        <section className="py-24 px-4 sm:px-10 lg:px-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-block bg-emerald-100 text-[#10B981] px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase mb-6">
                        POWERED BY BEST-IN-CLASS TECH
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Scalable <span className="text-[#10B981]">Technology Stack</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                    {techs.map((tech, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center justify-center group-hover:shadow-2xl group-hover:-translate-y-2 transition-all">
                                <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full object-contain" />
                            </div>
                            <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <div className="bg-white/80 backdrop-blur-md px-10 py-6 rounded-3xl border border-gray-100 shadow-xl flex items-center gap-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-gray-900">100%</span>
                            <span className="text-[10px] font-black uppercase tracking-tighter text-[#10B981]">Stability Rate</span>
                        </div>
                        <div className="w-[1px] h-10 bg-gray-200"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-gray-900">0.1s</span>
                            <span className="text-[10px] font-black uppercase tracking-tighter text-[#10B981]">Latency Goal</span>
                        </div>
                        <div className="w-[1px] h-10 bg-gray-200"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-gray-900">∞</span>
                            <span className="text-[10px] font-black uppercase tracking-tighter text-[#10B981]">Scalability</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;

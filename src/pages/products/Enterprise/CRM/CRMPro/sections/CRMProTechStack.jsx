import React from 'react';

const CRMProTechStack = () => {
    const techs = [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Redis", icon: "🔴" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" }
    ];

    return (
        <section className="py-24 bg-slate-900 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 font-semibold">
                        Built for <span className="text-indigo-400">Scale</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto italic">
                        Leveraging the most modern and reliable enterprise technology stack available today.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {techs.map((tech, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-4xl mb-4 border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-500 shadow-xl">
                                {tech.icon}
                            </div>
                            <span className="text-gray-300 font-bold tracking-wider group-hover:text-indigo-400 transition-colors uppercase text-xs">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CRMProTechStack;

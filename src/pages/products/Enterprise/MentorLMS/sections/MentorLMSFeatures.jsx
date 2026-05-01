import React from "react";
import { Star, Users, PlayCircle, BookOpen, Award, ShieldCheck, Zap, Globe, Target } from "lucide-react";

const MentorLMSFeatures = () => {
    const syllabusFeatures = [
        {
            title: "Expert Instruction",
            desc: "Onboard industry leaders and subject matter experts to deliver high-impact curricula.",
            icon: <Star size={32} />,
            color: "purple"
        },
        {
            title: "Universal Delivery",
            desc: "Reach students across 120+ countries with low-latency content nodes.",
            icon: <Globe size={32} />,
            color: "indigo"
        },
        {
            title: "Mastery Assessments",
            desc: "Create robust, AI-powered examinations and assignment portals for student tracking.",
            icon: <Target size={32} />,
            color: "fuchsia"
        },
        {
            title: "Certification Hub",
            desc: "Automated issuance of professional, institution-branded certificates upon completion.",
            icon: <Award size={32} />,
            color: "purple"
        },
        {
            title: "Knowledge Library",
            desc: "Collaborative resource management for structured course materials and assets.",
            icon: <BookOpen size={32} />,
            color: "indigo"
        },
        {
            title: "Secured Compliance",
            desc: "Enterprise-level data protection and Industrial-grade security protocols.",
            icon: <ShieldCheck size={32} />,
            color: "fuchsia"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }}>

            {/* Glowing Background Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-20 space-y-4">
                    <span className="text-fuchsia-300 font-bold text-sm uppercase tracking-widest block font-medium uppercase italic">Curriculum Excellence</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        Built for the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-indigo-200">
                            Knowledge Marketplace.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {syllabusFeatures.map((f, i) => (
                        <div key={i} className="group p-8 lg:p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:border-fuchsia-400/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.03] overflow-hidden">
                            <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-fuchsia-400 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-fuchsia-600 group-hover:text-white group-hover:rotate-3`}>
                                {f.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-none  transition-colors group-hover:text-fuchsia-300">
                                    {f.title}
                                </h3>
                                <p className="text-fuchsia-100/60 text-sm lg:text-base leading-relaxed font-medium">
                                    {f.desc}
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest leading-none">Global Standard</span>
                                <Zap size={14} className="text-fuchsia-300 animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentorLMSFeatures;

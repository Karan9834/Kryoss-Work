import React from "react";
import { Zap, ShieldCheck, PieChart, Users, BookOpen, GraduationCap } from "lucide-react";

const features = [
    {
        icon: <Zap size={24} />,
        title: "Quick Admission",
        desc: "Lightning-fast student enrollment and automated admission flow.",
        color: "from-blue-400 to-blue-600",
        light: "bg-blue-500/10",
        text: "text-blue-400"
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Campus Security",
        desc: "Integrated security protocols and real-time attendance alerts.",
        color: "from-indigo-400 to-indigo-600",
        light: "bg-indigo-500/10",
        text: "text-indigo-400"
    },
    {
        icon: <BookOpen size={24} />,
        title: "Smart Curriculum",
        desc: "Automated course planning and digital syllabus management.",
        color: "from-cyan-400 to-cyan-600",
        light: "bg-cyan-500/10",
        text: "text-cyan-400"
    },
    {
        icon: <GraduationCap size={24} />,
        title: "Exam Engine",
        desc: "Unified assessment tools with automated result generation.",
        color: "from-blue-400 to-blue-600",
        light: "bg-blue-500/10",
        text: "text-blue-400"
    },
    {
        icon: <Users size={24} />,
        title: "HR & Payroll",
        desc: "Automated staff management and payroll distribution alerts.",
        color: "from-emerald-400 to-emerald-600",
        light: "bg-emerald-500/10",
        text: "text-emerald-400"
    },
    {
        icon: <PieChart size={24} />,
        title: "Campus BI",
        desc: "Real-time institutional analytics and performance reports.",
        color: "from-blue-500 to-indigo-500",
        light: "bg-blue-500/10",
        text: "text-blue-400"
    }
];

const AcadifyEduERPFeatures = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" }}>

            {/* background decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-20 space-y-4">
                    <span className="text-blue-400 font-bold text-sm uppercase tracking-widest block">Intelligent Features</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        Next-Gen{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #60a5fa, #818cf8)" }}>
                            Campus Intelligence.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="group relative">
                            {/* Pill-shaped Card */}
                            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[4rem] p-4 sm:p-4 border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex items-center gap-4 sm:gap-6 group-hover:bg-white/10 shadow-xl overflow-hidden">
                                {/* Side color glow */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 sm:w-2 bg-gradient-to-b ${f.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${f.light} flex items-center justify-center flex-shrink-0 ${f.text} group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                                    {React.cloneElement(f.icon, { size: 24 })}
                                </div>
                                <div className="space-y-1 py-3 sm:py-4 pr-6 sm:pr-10">
                                    <h3 className="text-lg sm:text-xl font-bold text-white leading-none tracking-tighter transition-colors group-hover:text-blue-400">{f.title}</h3>
                                    <p className="text-blue-50/50 text-[10px] sm:text-xs leading-relaxed font-medium">
                                        {f.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcadifyEduERPFeatures;

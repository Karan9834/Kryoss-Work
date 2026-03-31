import React from "react";
import { GraduationCap, Users, BookOpen, UserCheck, BarChart3, Globe } from "lucide-react";

const features = [
    {
        icon: <GraduationCap size={32} />,
        title: "Student Admissions",
        desc: "Automated student acquisition, document validation, and streamlined multi-step enrollment workflows.",
        color: "bg-red-900 border-red-700/50",
        text: "text-red-400",
        light: "bg-red-500/10",
        detail: "Manage global applicants from registration to residence hall assignments."
    },
    {
        icon: <Users size={32} />,
        title: "Faculty & Staff Hub",
        desc: "Advanced workload automation, research tracking, and comprehensive payroll management.",
        color: "bg-blue-900 border-blue-700/50",
        text: "text-blue-400",
        light: "bg-blue-500/10",
        detail: "Real-time visibility into teaching hours and research progress."
    },
    {
        icon: <BookOpen size={32} />,
        title: "Curriculum & Exams",
        desc: "Credit-based systems, faculty scheduling, and rigorous assessment management protocols.",
        color: "bg-yellow-900 border-yellow-700/50",
        text: "text-yellow-400",
        light: "bg-yellow-500/10",
        detail: "Dynamic course catalogs for every department and degree program."
    },
    {
        icon: <UserCheck size={32} />,
        title: "Alumni Relations",
        desc: "Lifelong student records, alumni engagement portals, and coordinated fundraising tracking.",
        color: "bg-slate-800 border-slate-700/50",
        text: "text-slate-400",
        light: "bg-slate-500/10",
        detail: "Donations, event management, and mentor network development."
    },
    {
        icon: <BarChart3 size={32} />,
        title: "ERP & Finance",
        desc: "Centralized budget forecasting, procurement workflows, and multi-currency fee processing.",
        color: "bg-emerald-900 border-emerald-700/50",
        text: "text-emerald-400",
        light: "bg-emerald-500/10",
        detail: "Audit-ready financial reporting compliant with global standards."
    },
    {
        icon: <Globe size={32} />,
        title: "Campus Integration",
        desc: "Unified data across multiple locations, campuses, and international programs.",
        color: "bg-indigo-900 border-indigo-700/50",
        text: "text-indigo-400",
        light: "bg-indigo-500/10",
        detail: "Synchronized academic policies and centralized administrative control."
    }
];

const GlobalFeatures = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #020617 100%)" }}>

            {/* background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[120px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-24 space-y-4">
                    <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest block">Elite Modules</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                        Powering Your{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #facc15, #f87171)" }}>
                            Institutional Core.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">
                    {features.map((f, i) => (
                        <div key={i} className="group perspective-1000">
                            {/* 3D Stack Effect */}
                            <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-105">

                                {/* Bottom Layer */}
                                <div className="absolute inset-0 bg-yellow-500/20 rounded-[2.5rem] sm:rounded-[3.5rem] translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 group-hover:translate-x-8 sm:group-hover:translate-x-10 group-hover:translate-y-8 sm:group-hover:translate-y-10 transition-transform duration-700 -z-20 blur-sm" />

                                {/* Middle Layer */}
                                <div className="absolute inset-0 bg-red-500/20 rounded-[2.5rem] sm:rounded-[3.5rem] translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 group-hover:translate-x-4 sm:group-hover:translate-x-5 group-hover:translate-y-4 sm:group-hover:translate-y-5 transition-transform duration-700 -z-10 blur-[2px]" />

                                {/* Main Card */}
                                <div className={`relative h-full bg-slate-900 border border-white/10 rounded-[2.5rem] sm:rounded-[3.5rem] p-10 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden`}>
                                    {/* Shining effect on hover */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl ${f.light} flex items-center justify-center mb-8 sm:mb-12 ${f.text} group-hover:scale-110 transition-transform duration-700 border border-white/10 shadow-2xl`}>
                                        {React.cloneElement(f.icon, { size: 32 })}
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6  tracking-tighter leading-none group-hover:text-yellow-400 transition-colors">
                                        {f.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-bold tracking-tight">
                                        {f.desc}
                                    </p>

                                    {/* <div className="pt-6 border-t border-white/5">
                                        <p className="text-[10px] text-yellow-500/60 font-black uppercase tracking-[0.25em]">
                                            Core Protocol
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalFeatures;

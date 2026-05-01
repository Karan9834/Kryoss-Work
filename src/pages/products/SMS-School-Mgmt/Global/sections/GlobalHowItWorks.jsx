import React from "react";
import { Search, UserPlus, Settings2, Database, PieChart } from "lucide-react";

const steps = [
    {
        icon: <Search size={28} />,
        title: "Intake & Discovery",
        desc: "Automate leads from your website and social platforms directly into your admissions funnel.",
        color: "text-red-600",
        bg: "bg-red-50"
    },
    {
        icon: <UserPlus size={28} />,
        title: "Enrollment Hub",
        desc: "Streamlined enrollment documents, scholarship evaluation, and housing assignments.",
        color: "text-yellow-600",
        bg: "bg-yellow-50"
    },
    {
        icon: <Settings2 size={28} />,
        title: "Curriculum Design",
        desc: "Configure multi-level courses, credit tracking, and faculty workloads in one interface.",
        color: "text-slate-900",
        bg: "bg-slate-100"
    },
    {
        icon: <Database size={28} />,
        title: "Records Central",
        desc: "Secure, ISO-compliant student dossiers with full version history and access control.",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        icon: <PieChart size={28} />,
        title: "Institutional Reporting",
        desc: "Audit-ready financial statements and accreditation compliance reports on-demand.",
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    }
];

const GlobalHowItWorks = () => {
    return (
        <section className="py-12 md:py-16 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-28 space-y-4">
                    <span className="text-red-800 font-bold text-sm uppercase tracking-widest block">Governance Flow</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
                        Integrated{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-600">
                            Academic Integration.
                        </span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-lg mt-6 font-medium leading-relaxed px-4">
                        Seamlessly connecting every touchpoint of the student lifecycle from admission to alumni status.
                    </p>
                </div>

                <div className="relative mt-20">
                    {/* Governance Ribbon Background (Desktop) */}
                    <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-2 bg-slate-100 -translate-y-1/2 -z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="group relative flex flex-col items-center text-center">
                                {/* Metallic-styled Container */}
                                <div className="relative mb-10">
                                    <div className={`w-24 h-24 sm:w-28 sm:h-28 bg-white border-[8px] border-slate-50 rounded-full flex items-center justify-center ${step.color} shadow-2xl group-hover:scale-110 transition-transform duration-500 z-10 relative`}>
                                        {React.cloneElement(step.icon, { size: 36 })}
                                    </div>
                                    {/* Outer Ring */}
                                    <div className="absolute inset-[-10px] border-2 border-dashed border-slate-200 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-red-500 transition-colors" />

                                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-xl z-20">
                                        0{idx + 1}
                                    </div>
                                </div>

                                <div className="space-y-4 px-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900  tracking-tighter leading-none group-hover:text-red-700 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm sm:text-xs leading-relaxed font-bold tracking-tight">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Connecting Arrow (Desktop) */}
                                {idx < 4 && (
                                    <div className="hidden lg:block absolute top-[50%] left-[85%] w-[30%] h-[2px] bg-red-600/10 -translate-y-1/2 -z-10">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-600 rounded-full pulse" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-50 rounded-full blur-[120px] -z-0 opacity-40 animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-50 rounded-full blur-[120px] -z-0 opacity-40 delay-2000 animate-pulse" />
        </section>
    );
};

export default GlobalHowItWorks;

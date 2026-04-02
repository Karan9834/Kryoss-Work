import React from "react";
import { UserPlus, Settings, PieChart, CheckCheck, BookOpen } from "lucide-react";

const events = [
    {
        icon: <Settings size={30} />,
        title: "Setup Campus",
        desc: "Define your school structure, classes, and sections in minutes.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        label: "Configuration"
    },
    {
        icon: <UserPlus size={30} />,
        title: "Fast Admission",
        desc: "Register students online with automated admission flow.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        label: "Enrollment"
    },
    {
        icon: <BookOpen size={30} />,
        title: "Daily Ops",
        desc: "Manage attendance, exams, and payroll in one click.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        label: "Operations"
    },
    {
        icon: <PieChart size={30} />,
        title: "Track Success",
        desc: "Generate insightful reports and institutional analytics.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        label: "Analytics"
    },
    {
        icon: <CheckCheck size={30} />,
        title: "Unified Hub",
        desc: "All stakeholders connected on a single cloud platform.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        label: "Integration"
    }
];

const AcadifyEduERPHowItWorks = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-24 space-y-4">
                    <span className="text-blue-600 font-bold text-sm uppercase tracking-widest block">Workflow Timeline</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                        Streamlined Flow for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Modern institutions.
                        </span>
                    </h2>
                </div>

                <div className="relative pt-10">
                    <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-1 bg-slate-100 -z-10" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4">
                        {events.map((event, idx) => (
                            <div key={idx} className="flex flex-col items-center group relative">
                                <div className="mb-6 sm:mb-10 relative">
                                    <div className={`w-20 h-20 sm:w-28 sm:h-28 ${event.bg} rounded-full flex items-center justify-center ${event.color} border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                        {React.cloneElement(event.icon, { size: 30 })}
                                    </div>
                                    <div className="absolute top-[50%] left-[105%] hidden lg:block w-[70px] h-[2px] bg-blue-500 opacity-20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 sm:w-10 h-8 sm:h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-[10px] sm:text-xs shadow-lg">
                                        0{idx + 1}
                                    </div>
                                </div>
                                <div className="text-center space-y-2 sm:space-y-3 px-4 sm:px-6">
                                    <p className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] ${event.color}`}>{event.label}</p>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 leading-none">{event.title}</h3>
                                    <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed font-medium">
                                        {event.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-0 opacity-40 animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -z-0 opacity-40 delay-2000 animate-pulse" />
        </section>
    );
};

export default AcadifyEduERPHowItWorks;

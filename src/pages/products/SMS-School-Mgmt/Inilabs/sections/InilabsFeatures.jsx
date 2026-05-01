import React from "react";
import { GraduationCap, Users, BookOpen, UserCheck, BarChart3, Globe } from "lucide-react";

const features = [
    {
        icon: <GraduationCap size={32} />,
        title: "Student Admissions",
        desc: "Automated student acquisition, document validation, and streamlined multi-step enrollment workflows.",
        color: "from-emerald-500 to-teal-500",
        light: "bg-emerald-50",
    },
    {
        icon: <Users size={32} />,
        title: "Teacher Performance",
        desc: "Advanced teacher workload tracking, performance reviews, and automated payroll management.",
        color: "from-blue-500 to-indigo-500",
        light: "bg-blue-50",
    },
    {
        icon: <BookOpen size={32} />,
        title: "Academic Engine",
        desc: "Dynamic curriculum design, credit tracking, and comprehensive examination management.",
        color: "from-indigo-500 to-purple-500",
        light: "bg-indigo-50",
    },
    {
        icon: <UserCheck size={32} />,
        title: "Parent-Teacher Portals",
        desc: "Secure, real-time communication for parents and teachers with unified messaging systems.",
        color: "from-teal-500 to-cyan-500",
        light: "bg-teal-50",
    },
    {
        icon: <BarChart3 size={32} />,
        title: "Finance & Fee Mgmt",
        desc: "Multi-mode fee collection, automated online payment gateway, and sophisticated reports.",
        color: "from-sky-500 to-blue-500",
        light: "bg-sky-50",
    },
    {
        icon: <Globe size={32} />,
        title: "Global Compliance",
        desc: "Multilingual interface and automated compliance with local educational standards.",
        color: "from-green-500 to-emerald-500",
        light: "bg-green-50",
    }
];

const InilabsFeatures = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)" }}>

            {/* background decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-24 space-y-4">
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest block">Core Modules</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        Built for Educational{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #6ee7b7, #fbbf24)" }}>
                            Transformation.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                    {features.map((f, i) => (
                        <div key={i} className="group relative pt-8">
                            {/* Floating Card */}
                            <div className="h-full bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_30px_70px_rgba(16,185,129,0.15)] group-hover:-translate-y-2 relative border border-slate-100">

                                {/* Floating Icon Container */}
                                <div className={`absolute -top-10 left-8 sm:left-12 w-20 h-20 rounded-3xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6`}>
                                    {React.cloneElement(f.icon, { size: 32 })}
                                </div>

                                <div className="mt-6 space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800  tracking-tighter leading-none group-hover:text-emerald-600 transition-colors">{f.title}</h3>
                                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                                        {f.desc}
                                    </p>
                                </div>

                                {/* <div className="mt-8 flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                                    Learn More
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InilabsFeatures;

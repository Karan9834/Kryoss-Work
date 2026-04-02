import React from 'react';
import {
    Users,
    BookOpen,
    Calendar,
    CreditCard,
    ClipboardCheck,
    MessageSquare,
    Sparkles,
    Shield
} from 'lucide-react';

const SMSFeatures = () => {
    const features = [
        {
            icon: <Users className="w-8 h-8 text-blue-400" />,
            title: "Student Management",
            desc: "Comprehensive student profiles, academic history, and behavioral tracking.",
            glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
            border: "group-hover:border-blue-400"
        },
        {
            icon: <BookOpen className="w-8 h-8 text-emerald-400" />,
            title: "Curriculum Planning",
            desc: "Manage lesson plans, course materials, and learning resources digitally.",
            glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]",
            border: "group-hover:border-emerald-400"
        },
        {
            icon: <Calendar className="w-8 h-8 text-indigo-400" />,
            title: "Exam & Timetable",
            desc: "Automated scheduling for exams and classes with conflict resolution.",
            glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]",
            border: "group-hover:border-indigo-400"
        },
        {
            icon: <CreditCard className="w-8 h-8 text-amber-400" />,
            title: "Fee Management",
            desc: "Online fee collection, invoicing, and detailed financial reporting.",
            glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]",
            border: "group-hover:border-amber-400"
        },
        {
            icon: <ClipboardCheck className="w-8 h-8 text-rose-400" />,
            title: "Attendance Automation",
            desc: "Biometric and RFID integration for seamless attendance tracking.",
            glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.5)]",
            border: "group-hover:border-rose-400"
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
            title: "Parent Communication",
            desc: "Internal messaging system for instant updates and collaborative engagement.",
            glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
            border: "group-hover:border-cyan-400"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-emerald-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Phase */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-bold uppercase tracking-widest text-blue-300">
                        <Sparkles size={16} /> Elite Educational Ecosystem
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-200">
                            Revolutionizing Institutions with 3D Precision
                        </span>
                    </h2>
                    <p className="text-blue-100/70 text-xl font-medium">
                        Our immersive interface provides a futuristic perspective on school management, designed for the next generation of educators.
                    </p>
                </div>

                {/* 3D Isometric Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative perspective-1000"
                        >
                            <div className={`
                                h-full p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10
                                transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                                 group-hover:bg-white/10
                                ${feature.glow} ${feature.border}
                                flex flex-col items-center text-center shadow-2xl relative z-10
                            `}>
                                <div className="w-18 h-18 rounded-3xl bg-white/10 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter leading-none">
                                    {feature.title}
                                </h3>
                                <p className="text-blue-100/60 leading-relaxed font-medium">
                                    {feature.desc}
                                </p>

                                {/* Decorative Shimmer */}
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </div>

                            {/* Shadow/Reflection beneath the 3D card */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md shadow-2xl group hover:bg-white/20 transition-all cursor-pointer">
                        <Shield className="text-emerald-400" />
                        <span className="font-bold text-blue-100 tracking-wide uppercase text-sm">Enterprise Grade Security & 3D Analytics Integrated</span>
                    </div>
                </div>

            </div>

            <style>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .rotate-x-12 {
                    transform: rotateX(12deg);
                }
                .rotate-y--12 {
                    transform: rotateY(-12deg);
                }
                .rotate-z-2 {
                    transform: rotateZ(2deg);
                }
            `}</style>
        </section>
    );
};

export default SMSFeatures;

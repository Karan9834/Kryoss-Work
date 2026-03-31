import React from "react";
import { ClipboardCheck, Stethoscope, ShoppingCart, UserCheck, Search, ShieldPlus, UserPlus, ShieldCheck, Database, BarChart3 } from "lucide-react";

const steps = [
    {
        icon: <ClipboardCheck size={28} />,
        title: "Clinical Intake",
        desc: "Physicians and nurses enter prescriptions directly into the ward store system.",
        color: "text-sky-600",
        bg: "bg-sky-50"
    },
    {
        icon: <Stethoscope size={28} />,
        title: "Pharmacist Validation",
        desc: "Automated clinical validation for interactions and dosages before dispensing.",
        color: "text-teal-600",
        bg: "bg-teal-50"
    },
    {
        icon: <ShoppingCart size={28} />,
        title: "Inventory Sync",
        desc: "Real-time stock deduction from ward stores and automated replenishment alerts.",
        color: "text-sky-500",
        bg: "bg-sky-50/50"
    },
    {
        icon: <UserCheck size={28} />,
        title: "Patient Billing",
        desc: "Integrated billing for in-patients and out-patients with insurance workflows.",
        color: "text-teal-500",
        bg: "bg-teal-50/50"
    },
    {
        icon: <ShieldPlus size={28} />,
        title: "Compliance Audit",
        desc: "Complete audit trails and HIPAA-compliant record management system.",
        color: "text-sky-700",
        bg: "bg-sky-100/50"
    }
];

const KiviCareHowItWorks = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 lg:mb-24 space-y-4">
                    <span className="text-sky-600 font-bold text-sm uppercase tracking-widest block">Operational Workflow</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                        Integrated Clinical{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">
                            Pharmacy Ops.
                        </span>
                    </h2>
                </div>

                <div className="relative mt-20 max-w-4xl mx-auto">
                    {/* Medical Wave Line (Desktop) */}
                    <svg className="hidden md:block absolute left-[39px] top-0 bottom-0 w-8 h-full text-blue-100 -z-0" preserveAspectRatio="none" viewBox="0 0 40 100">
                        <path d="M20 0 Q 40 25 20 50 Q 0 75 20 100" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>

                    <div className="space-y-16">
                        {[
                            { icon: <Search size={28} />, title: "Inventory Audit", desc: "Automate stock counts and expiration tracking with AI-guided scanning." },
                            { icon: <UserPlus size={28} />, title: "Ward Integration", desc: "Seamlessly receive and fulfill medication orders from hospital wards." },
                            { icon: <ShieldCheck size={28} />, title: "Clinical Check", desc: "Automated verification of patient records and drug interaction safety." },
                            { icon: <Database size={28} />, title: "Secure Storage", desc: "ISO-compliant digital storage for all clinical pharmacy records." },
                            { icon: <BarChart3 size={28} />, title: "Live Analytics", desc: "Monitor hospital-wide drug utilization and cost-efficiency in real-time." },
                        ].map((step, idx) => (
                            <div key={idx} className="group relative flex items-start gap-8 sm:gap-16">
                                {/* Pulse Node */}
                                <div className="flex-shrink-0 relative mt-4">
                                    <div className="w-20 h-20 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-blue-600 shadow-2xl z-10 relative group-hover:scale-125 transition-transform duration-500">
                                        {React.cloneElement(step.icon, { size: 28 })}
                                    </div>
                                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping scale-150 -z-10 group-hover:bg-blue-500/40" />
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-[10px] z-20 shadow-lg">
                                        {idx + 1}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 bg-white/60 backdrop-blur-md border border-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(59,130,246,0.05)] hover:shadow-[0_40px_80px_rgba(59,130,246,0.1)] transition-all duration-700 hover:-translate-y-2">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800  tracking-tighter leading-none group-hover:text-blue-600 transition-colors">
                                                {step.title}
                                            </h3>
                                            <span className="text-[10px] font-black text-blue-500/40 uppercase tracking-widest hidden sm:block">Medical Protocol</span>
                                        </div>
                                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-bold tracking-tight">
                                            {step.desc}
                                        </p>
                                    </div>
                                    {/* <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                                        <div className="w-10 h-1 bg-blue-500 rounded-full" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Step {idx + 1} Sequence</span>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KiviCareHowItWorks;

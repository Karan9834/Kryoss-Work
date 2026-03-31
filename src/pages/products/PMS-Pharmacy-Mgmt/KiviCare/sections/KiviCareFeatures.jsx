import React from "react";
import { ClipboardList, Stethoscope, Users, Box, BarChart, ShieldAlert } from "lucide-react";

const features = [
    {
        icon: <ClipboardList size={24} />,
        title: "Ward Stock Management",
        desc: "Real-time visibility into medication levels across all hospital wards and clinics.",
        color: "text-sky-400",
        border: "border-sky-500/20"
    },
    {
        icon: <Stethoscope size={24} />,
        title: "Physician Integration",
        desc: "Direct digital prescription intake from hospital doctors and specialists.",
        color: "text-teal-400",
        border: "border-teal-500/20"
    },
    {
        icon: <Users size={24} />,
        title: "Inpatient Billing",
        desc: "Single-click billing for inpatient medication administration with insurance sync.",
        color: "text-emerald-400",
        border: "border-emerald-500/20"
    },
    {
        icon: <Box size={24} />,
        title: "Bulk Procurement",
        desc: "Manage large-scale hospital orders, vendors, and multi-store transfers seamlessly.",
        color: "text-sky-300",
        border: "border-sky-400/20"
    },
    {
        icon: <BarChart size={24} />,
        title: "Clinical Analytics",
        desc: "Comprehensive reports on medication usage, trends, and departmental performance.",
        color: "text-teal-300",
        border: "border-teal-400/20"
    },
    {
        icon: <ShieldAlert size={24} />,
        title: "Drug Safety Check",
        desc: "Enterprise-grade drug interaction engine and automated dosage validation.",
        color: "text-emerald-300",
        border: "border-emerald-400/20"
    }
];

const KiviCareFeatures = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #075985 0%, #0c4a6e 40%, #082f49 100%)" }}>

            {/* Soft background decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-24 space-y-4">
                    <span className="text-sky-400 font-bold text-sm uppercase tracking-widest block">Enterprise Modules</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                        Powering Your{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #7dd3fc, #99f6e4)" }}>
                            Clinical Core.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((f, i) => (
                        <div key={i} className={`p-8 sm:p-12 border ${f.border} hover:bg-white/5 transition-all duration-500 group relative shadow-inner`}>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500">
                                <div className={`${f.color}`}>{React.cloneElement(f.icon, { size: typeof window !== 'undefined' && window.innerWidth < 640 ? 20 : 24 })}</div>
                            </div>
                            <h3 className="text-lg sm:text-2xl font-bold text-white mb-4  tracking-tighter transition-colors group-hover:text-sky-300">{f.title}</h3>
                            <p className="text-sky-100/60 text-xs sm:text-sm leading-relaxed font-medium">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KiviCareFeatures;

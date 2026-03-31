import React from "react";
import { Zap, ShieldCheck, PieChart, ShoppingCart, UserPlus, PackageSearch } from "lucide-react";

const features = [
    {
        icon: <Zap size={24} />,
        title: "Quick Bill",
        desc: "Lightning-fast barcode scanning and multi-payment POS integration.",
        color: "from-teal-400 to-teal-600",
        light: "bg-teal-500/10",
        text: "text-teal-400"
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "AI Safety Engine",
        desc: "Automatic drug interaction checks and allergy alerts during billing.",
        color: "from-indigo-400 to-indigo-600",
        light: "bg-indigo-500/10",
        text: "text-indigo-400"
    },
    {
        icon: <PackageSearch size={24} />,
        title: "Smart Inventory",
        desc: "Predictive reordering based on sales history and stock levels.",
        color: "from-cyan-400 to-cyan-600",
        light: "bg-cyan-500/10",
        text: "text-cyan-400"
    },
    {
        icon: <ShoppingCart size={24} />,
        title: "Omni-channel",
        desc: "Unified online and offline sales management with stock sync.",
        color: "from-blue-400 to-blue-600",
        light: "bg-blue-500/10",
        text: "text-blue-400"
    },
    {
        icon: <UserPlus size={24} />,
        title: "CRM & Loyalty",
        desc: "Automated customer profiles, reminders, and reward programs.",
        color: "from-emerald-400 to-emerald-600",
        light: "bg-emerald-500/10",
        text: "text-emerald-400"
    },
    {
        icon: <PieChart size={24} />,
        title: "AI Analytics",
        desc: "Real-time sales forecasts and profit-margin optimization reports.",
        color: "from-teal-500 to-indigo-500",
        light: "bg-teal-500/10",
        text: "text-teal-400"
    }
];

const PharmacyNextAIFeatures = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0d9488 0%, #0f172a 100%)" }}>

            {/* background decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-20 space-y-4">
                    <span className="text-teal-400 font-bold text-sm uppercase tracking-widest block">AI Capabilities</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        Next-Gen{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #6ee7b7, #3b82f6)" }}>
                            Retail Intelligence.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="group relative">
                            {/* Pill-shaped Card */}
                            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[4rem] p-4 sm:p-4 border border-white/10 hover:border-teal-500/50 transition-all duration-500 flex items-center gap-4 sm:gap-6 group-hover:bg-white/10 shadow-xl overflow-hidden">
                                {/* Side color glow */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 sm:w-2 bg-gradient-to-b ${f.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${f.light} flex items-center justify-center flex-shrink-0 ${f.text} group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                                    {React.cloneElement(f.icon, { size: typeof window !== 'undefined' && window.innerWidth < 640 ? 18 : 24 })}
                                </div>
                                <div className="space-y-1 py-3 sm:py-4 pr-6 sm:pr-10">
                                    <h3 className="text-lg sm:text-xl font-bold text-white leading-none  tracking-tighter transition-colors group-hover:text-teal-400">{f.title}</h3>
                                    <p className="text-teal-50/50 text-[10px] sm:text-xs leading-relaxed font-medium">
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

export default PharmacyNextAIFeatures;

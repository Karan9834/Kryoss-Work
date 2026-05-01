import React from "react";
import { Wallet, FileText, RefreshCw, Globe, ChartBar, ShieldCheck } from "lucide-react";

const AgencyManagementFeatures = () => {
    const features = [
        {
            title: "Commission Management",
            desc: "Automate agent payouts and calculate tier-based commissions without any manual errors.",
            icon: Wallet,
            color: "text-amber-600",
            bg: "bg-amber-50",
            points: ["Tiered payout logic", "Real-time tracking"]
        },
        {
            title: "Dynamic Invoicing",
            desc: "Generate professional GST-ready invoices and adjust rates based on demand patterns.",
            icon: FileText,
            color: "text-orange-600",
            bg: "bg-orange-50",
            points: ["One-click GST billing", "Automated reminders"]
        },
        {
            title: "Vendor Hub",
            desc: "Connect directly with hotels and transport providers via a unified management portal.",
            icon: RefreshCw,
            color: "text-yellow-600",
            bg: "bg-yellow-50",
            points: ["Direct API bookings", "Contract management"]
        },
        {
            title: "Global Payments",
            desc: "Accept payments in multiple currencies with integrated secure gateway support.",
            icon: Globe,
            color: "text-amber-700",
            bg: "bg-amber-100/50",
            points: ["Instant settlement", "Multi-currency support"]
        },
        {
            title: "Business Insights",
            desc: "Track ROI, booking trends, and agency growth with real-time visual dashboards.",
            icon: ChartBar,
            color: "text-orange-700",
            bg: "bg-orange-100/50",
            points: ["Custom reports", "Booking thermal maps"]
        },
        {
            title: "Role Security",
            desc: "Define granular access controls for sub-agents, staff, and accountants for data safety.",
            icon: ShieldCheck,
            color: "text-yellow-700",
            bg: "bg-yellow-100/50",
            points: ["IP-based access", "Audit logs"]
        }
    ];

    return (
        <section className="py-24 bg-[#FCF8F1] overflow-hidden relative">
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-[10px] font-black uppercase tracking-[0.2em]">
                        Travel Agency Modules
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E293B]">
                        Comprehensive <span className="text-amber-600">Management Capabilities</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Automate every aspect of your travel business with tools built for speed and precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feat, idx) => (
                        <div 
                            key={idx} 
                            className={`group relative p-10 rounded-[40px] bg-white border border-amber-100 shadow-sm hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
                        >
                            {/* Hover accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                            
                            <div className={`w-16 h-16 rounded-2xl ${feat.bg} ${feat.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-black/5`}>
                                <feat.icon size={30} />
                            </div>

                            <h3 className="text-xl font-bold text-[#1E293B] mb-4 group-hover:text-amber-600 transition-colors uppercase tracking-tight">{feat.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                {feat.desc}
                            </p>

                            <div className="space-y-3">
                                {feat.points.map((point, i) => (
                                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                                        {point}
                                    </div>
                                ))}
                            </div>

                            {/* Faded background icon */}
                            <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                                <feat.icon size={120} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgencyManagementFeatures;

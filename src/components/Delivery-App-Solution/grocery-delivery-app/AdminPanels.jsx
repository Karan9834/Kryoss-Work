import React, { useState } from 'react';
import { LayoutDashboard, PieChart, Users, Settings } from 'lucide-react';

const AdminPanels = () => {
    const [activePanel, setActivePanel] = useState('super');

    const panels = {
        super: {
            title: "Super Admin Panel",
            image: "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-Super-admin-panel-mockup.webp",
            features: [
                "Full Management Control",
                "Commission Configuration",
                "Advanced Real-time Analytics",
                "Payout & Settlement Management",
                "Geofencing & Zone Settings",
                "Marketing & Push Campaigns"
            ]
        },
        store: {
            title: "Store/Partner Dashboard",
            image: "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-store-app-feature-ui.webp", // Reusing generic UI for demo
            features: [
                "Detailed Inventory Control",
                "Dynamic Item Categorization",
                "Order Execution Pipeline",
                "Revenue Statistics",
                "User Review Management",
                "Operating Hours Settings"
            ]
        }
    };

    return (
        <section className="py-24 px-4 sm:px-10 lg:px-20 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-10 animate-fade-in-left">
                        <div className="space-y-4">
                            <div className="inline-block bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-lg font-bold text-sm tracking-widest uppercase border border-[#10B981]/20">
                                Management Infrastructure
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                                Centralized <span className="text-[#10B981]">Control Panels</span> <br />
                                for Total Command
                            </h2>
                        </div>

                        <div className="flex gap-4 p-1.5 bg-white/5 rounded-2xl border border-white/10 w-fit">
                            <button
                                onClick={() => setActivePanel('super')}
                                className={`px-6 py-3 rounded-xl font-bold transition-all ${activePanel === 'super' ? 'bg-[#10B981] text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Super Admin
                            </button>
                            <button
                                onClick={() => setActivePanel('store')}
                                className={`px-6 py-3 rounded-xl font-bold transition-all ${activePanel === 'store' ? 'bg-[#10B981] text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Store Panel
                            </button>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-4">
                            {panels[activePanel].features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0">
                                        <PieChart size={12} />
                                    </div>
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <LayoutDashboard className="text-[#10B981]" />
                                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Total Visibility</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="text-[#10B981]" />
                                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Cloud Managed</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Settings className="text-[#10B981]" />
                                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Customizable</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Dashboard Preview */}
                    <div className="relative animate-fade-in-right">
                        <div className="absolute top-0 right-0 w-full h-full bg-[#10B981]/20 blur-[150px] -z-10 animate-pulse"></div>
                        <div className="bg-white/5 p-4 rounded-[40px] border border-white/10 backdrop-blur-3xl shadow-2xl">
                            <img
                                src={panels[activePanel].image}
                                alt={panels[activePanel].title}
                                className="w-full h-auto rounded-[28px] shadow-2xl"
                            />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-2xl animate-float hidden lg:block">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-[#10B981]">
                                    <PieChart size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Growth</div>
                                    <div className="text-lg font-black text-gray-900">+45.8%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPanels;

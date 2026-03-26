import React from 'react';
import { Package, Truck, Users, Globe } from 'lucide-react';

const RetailAbout = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest block">The Retail Operating System</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1E293B] leading-tight">
                        One Platform, <span className="text-emerald-600">Unlimited Growth.</span>
                    </h2>
                </div>

                {/* Hover-based detail cards (Different Structure) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Package, title: "Inventory", desc: "Real-time stock tracking across all your outlets and warehouses.", color: "indigo" },
                        { icon: Users, title: "Customers", desc: "Build loyalty with personalized experiences and unified profiles.", color: "emerald" },
                        { icon: Truck, title: "Supply Chain", desc: "Automate purchase orders and manage vendor relationships easily.", color: "amber" },
                        { icon: Globe, title: "E-Commerce", desc: "Sell online and offline with perfectly synced inventory and sales.", color: "rose" }
                    ].map((item, idx) => (
                        <div key={idx} className="group p-8 bg-white rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:-translate-y-2">
                            <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 text-${item.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-indigo-600 transition-colors tracking-tight">{item.title}</h3>
                            <p className="text-gray-500 text-sm font-semibold leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 relative p-1 rounded-[4rem] bg-gradient-to-r from-indigo-100 via-emerald-100 to-amber-100">
                    <div className="bg-white rounded-[3.8rem] p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="space-y-4 max-w-xl">
                            <h3 className="text-2xl font-bold text-[#1E293B] tracking-tighter">Scale Globally with Confidence</h3>
                            <p className="text-gray-500 font-bold text-sm">Whether you have 1 store or 1000, our cloud infrastructure ensures your data is always secure, synced, and accessible from anywhere in the world.</p>
                        </div>
                        <button className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-3xl hover:bg-emerald-600 transition-all shadow-xl tracking-widest text-xs">
                            Learn About Scalability
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetailAbout;

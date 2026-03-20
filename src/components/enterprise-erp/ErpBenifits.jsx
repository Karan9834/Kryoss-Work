import React from 'react';
import erpbenifits from "../../assets/erp-img/erpbenifits.jpg";

const ErpBenifits = () => {
    const benefits = [
        { title: "35% Faster Order Processing", desc: "Automate your sales pipeline from lead to delivery." },
        { title: "Zero Inventory Leakage", desc: "Real-time tracking with sophisticated auditing tools." },
        { title: "Automated Compliance", desc: "Stay updated with local and global regulatory standards automatically." }
    ];

    return (
        <section className="py-24 bg-blue-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Image */}
                <div className="relative order-2 lg:order-1 flex justify-center">
                    <img 
                        src={erpbenifits} 
                        alt="ERP Benefits" 
                        className="w-full max-w-[500px] rounded-[40px] shadow-2xl border-8 border-white/5"
                    />
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 text-white">
                    <h2 className="text-2xl lg:text-3xl font-semibold leading-tight mb-10">
                        Benefits of <span className="text-blue-400">Custom ERP Development</span>
                    </h2>

                    <div className="space-y-8">
                        {benefits.map((item, i) => (
                            <div key={i} className="flex gap-5 group">
                                <div className="mt-1 w-7 h-7 flex-shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                    <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ErpBenifits;

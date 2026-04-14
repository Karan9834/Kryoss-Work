import React from 'react';
import erpappdevelopment1 from "../../assets/erp-img/erpappdevelopment1.jpg";
import erpappdevelopment2 from "../../assets/erp-img/erpappdevelopment2.jpg";
import erpappdevelopment3 from "../../assets/erp-img/erpappdevelopment3.jpg";

const ErpAppDevelopment = () => {

    const sections = [
        {
            title: "Financial Module",
            subtitle: "General Ledger & Accounting",
            desc: "Comprehensive financial management with automated bookkeeping, multi-currency support, and real-time reporting.",
            features: ["Automated Invoicing", "GST Compliance", "P&L Reports", "Expense Tracking"],
            image: erpappdevelopment1
        },
        {
            title: "Inventory Module",
            subtitle: "Supply Chain & Warehouse",
            desc: "Track inventory across multiple warehouses with automation, alerts, and supplier integrations.",
            features: ["Barcode System", "Low Stock Alerts", "Supplier Management", "Asset Tracking"],
            image: erpappdevelopment2
        },
        {
            title: "HRM Module",
            subtitle: "Human Resources & Payroll",
            desc: "Manage employees with payroll automation, attendance tracking, and performance analytics.",
            features: ["Payroll Automation", "Leave Management", "Employee Portal", "Analytics"],
            image: erpappdevelopment3
        }
    ];

    return (
        <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Badge - Updated Typography */}
                <div className="max-w-2xl mb-16">
                    <span className="inline-block px-4 py-1 rounded-full border border-blue-200 bg-blue-50 text-[12px] font-medium tracking-[0.05em] uppercase text-blue-700 mb-4">
                        Core Infrastructure
                    </span>
                    
                    {/* Heading - Updated Typography */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1a1a1a]">
                        Explore Our High-Performance <span className="text-blue-700">Enterprise Modules</span>
                    </h2>
                </div>

                {/* Sections */}
                <div className="space-y-20">
                    {sections.map((item, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* TEXT */}
                            <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                                {/* Module Title */}
                                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                
                                {/* Subtitle */}
                                <p className="text-blue-600 mb-4">{item.subtitle}</p>

                                {/* Description - Updated Typography */}
                                <p className="text-gray-600 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                    {item.desc}
                                </p>

                                {/* Feature List Items - Updated Typography */}
                                <div className="flex flex-wrap gap-3">
                                    {item.features.map((f, i) => (
                                        <span 
                                            key={i} 
                                            className="bg-blue-50 px-4 py-2 rounded-full text-[14px] md:text-[16px] font-normal leading-[1.6] text-blue-700 border"
                                        >
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* IMAGE */}
                            <div className={`flex justify-center ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full max-w-[500px] h-auto rounded-3xl shadow-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ErpAppDevelopment;
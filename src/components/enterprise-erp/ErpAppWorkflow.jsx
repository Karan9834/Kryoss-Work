import React from "react";
import erpworkflow from "../../assets/erp-img/erpworkflow.jpg";

const ErpAppWorkflow = () => {
    const steps = [
        {
            title: "Data Migration & Setup",
            desc: "Migrate your existing business data from legacy systems into our secure, unified ERP database environment.",
        },
        {
            title: "Module Configuration",
            desc: "Our team configures specific modules like Finance, HCM, and Supply Chain to match your specific business logic.",
        },
        {
            title: "Role-Based Access Control",
            desc: "Define custom permissions and security levels for different departments and management tiers across the organization.",
        },
        {
            title: "Process Automation",
            desc: "Set up automated approval workflows, recurring billing, and scheduled reporting to eliminate manual intervention.",
        },
        {
            title: "Real-time Operations",
            desc: "Monitor live transactions and operational metrics through a centralized command dashboard accessible from any device.",
        },
        {
            title: "Advanced Analytics",
            desc: "Generate tactical and strategic reports using built-in BI tools to drive data-informed decision making.",
        },
        {
            title: "Inventory Syncing",
            desc: "Automated synchronization of stock levels across multiple warehouses and retail entities in real-time.",
        },
        {
            title: "Secure Transactions",
            desc: "Manage all financial flows through secure, encrypted gateways with full audit trail capabilities.",
        },
        {
            title: "Performance Review",
            desc: "Evaluate organizational efficiency through detailed KPIs and performance dashboards at any level.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Capsule */}
                <div className="mb-4">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center w-fit gap-2 border-blue-200 bg-blue-50">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        ERP Workflow
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-semibold mb-4">
                    How Our <span className="text-blue-700">ERP Solution</span> Optimizes Workflow
                </h2>

                <p className="text-gray-600 max-w-xl mb-14">
                    Experience the power of centralized management. Follow these core phases
                    to transform your business operations with our custom ERP system.
                </p>

                <div className="grid lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT SCROLLABLE STEPS */}
                    <div className="h-[650px] overflow-y-auto pr-4 space-y-8 no-scrollbar"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        <style>
                            {`
                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
                        </style>

                        {steps.map((step, index) => (
                            <div key={index}>

                                {/* Title pill */}
                                <div className="flex items-center gap-4 mb-3">

                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 font-semibold">
                                        {(index + 1).toString().padStart(2, "0")}
                                    </div>

                                    <div className="border border-blue-100 rounded-full px-5 py-2 font-medium">
                                        {step.title}
                                    </div>

                                </div>

                                <p className="text-gray-600 ml-16 leading-relaxed">
                                    {step.desc}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">

                        <img
                            src={erpworkflow}
                            alt="ERP Workflow"
                            className="w-[420px] lg:w-[520px] rounded-3xl"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ErpAppWorkflow;

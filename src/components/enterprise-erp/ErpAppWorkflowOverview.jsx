import React from "react";
import { 
    GitBranch, 
    CloudLightning, 
    ShieldCheck, 
    BarChart 
} from "lucide-react";

const ErpAppWorkflowOverview = () => {
    const workflow = [
        {
            num: "01",
            title: "Requirement Gathering",
            desc: "Mapping your business processes precisely.",
            icon: GitBranch,
        },
        {
            num: "02",
            title: "Development & AI",
            desc: "Customizing your modular ERP backbone.",
            icon: CloudLightning,
        },
        {
            num: "03",
            title: "Quality Assurance",
            desc: "Rigorous testing for enterprise readiness.",
            icon: ShieldCheck,
        },
        {
            num: "04",
            title: "Scalable Deployment",
            desc: "Phased roll-out with training support.",
            icon: BarChart,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Heading */}
                <h2 className="text-4xl font-semibold mb-14 text-center">
                    ERP App <span className="text-blue-700">Workflow</span> Overview
                </h2>

                <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-10 left-20 right-20 h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

                    {workflow.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative z-10 flex-1 group">
                            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition shadow-sm">
                                <item.icon size={32} className="text-blue-600 group-hover:text-white transition" />
                            </div>
                            
                            <div className="bg-white border border-gray-100 rounded-full px-4 py-1 text-xs font-semibold text-blue-700 mb-4 shadow-sm group-hover:border-blue-600 transition">
                                Step {item.num}
                            </div>

                            <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ErpAppWorkflowOverview;

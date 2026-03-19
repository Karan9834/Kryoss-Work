import React from "react";
import { 
    BookOpen,
    Palette,
    ShieldCheck,
    Rocket
} from "lucide-react";

const LmsAppWorkflowOverview = () => {
    const workflow = [
        {
            num: "01",
            title: "Learning Strategy",
            desc: "Mapping out your educational objectives and target audience.",
            icon: BookOpen,
            color: "border-violet-600"
        },
        {
            num: "02",
            title: "Course Design",
            desc: "Developing engaging content and interactive curricula.",
            icon: Palette,
            color: "border-indigo-600"
        },
        {
            num: "03",
            title: "Platform Setup",
            desc: "Customizing your LMS environment and integrations.",
            icon: ShieldCheck,
            color: "border-violet-700"
        },
        {
            num: "04",
            title: "Launch & Scale",
            desc: "Deploying your academy and tracking learner growth.",
            icon: Rocket,
            color: "border-indigo-700"
        },
    ];

    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Heading */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20 border-b border-slate-200 pb-12">
                   <div>
                        <span className="text-violet-600 font-semibold text-xs uppercase tracking-[0.3em] mb-4 block">Strategic Path</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
                            Workflow <span className="text-violet-700 underline decoration-violet-200 underline-offset-8">Overview</span>
                        </h2>
                   </div>
                   <p className="text-slate-500 max-w-sm text-sm italic leading-relaxed">
                        A detailed lifecycle from initial pedagogical discovery to global platform deployment.
                   </p>
                </div>

                {/* Staggered Grid/Timeline Layout (Different from ERP horizontal view) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {workflow.map((item, index) => (
                        <div 
                            key={index} 
                            className={`group relative p-8 bg-white rounded-3xl border-l-8 ${item.color} shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-violet-100 transition-all duration-500`}
                        >
                            {/* Number in background */}
                            <div className="absolute top-4 right-4 text-6xl font-semibold text-slate-50 group-hover:text-violet-50 transition-colors">
                                {item.num}
                            </div>
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-violet-600 transition-all duration-500">
                                    <item.icon size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                                
                                <h3 className="text-xl font-semibold mb-4 text-slate-900 tracking-tight group-hover:text-violet-700 transition-colors">
                                    {item.title}
                                </h3>
                                
                                <p className="text-slate-500 text-sm leading-relaxed italic">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Connecting arrow indicator for visual flow (Desktop) */}
                <div className="mt-16 hidden lg:flex justify-center gap-24 items-center px-12 opacity-20">
                    <div className="h-[2px] flex-1 bg-slate-300 relative">
                        <div className="absolute -right-3 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-slate-400 rotate-45"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LmsAppWorkflowOverview;

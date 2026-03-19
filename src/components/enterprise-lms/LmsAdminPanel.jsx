import React from 'react';
import {
    LayoutDashboard,
    PieChart,
    Settings,
    FileText,
    Bell,
    Users,
    BookOpen,
    Shield
} from 'lucide-react';
import lmsadminpanel from "../../assets/lms-img/lmsadminpanel.jpg";

const LmsAdminPanel = () => {
    const adminFeatures = [
        {
            icon: LayoutDashboard,
            title: "Global Dashboard",
            desc: "Comprehensive overview of academy performance, revenue, and active learners."
        },
        {
            icon: BookOpen,
            title: "Course Management",
            desc: "Create, edit, and archive courses with sophisticated content versioning."
        },
        {
            icon: PieChart,
            title: "Learning Analytics",
            desc: "Visual representation of student progress, quiz results, and course popularity."
        },
        {
            icon: Shield,
            title: "Security & IAM",
            desc: "Granular access control and identity management for staff and students."
        },
        {
            icon: Bell,
            title: "Smart Alerts",
            desc: "Automated triggers for course deadlines, low engagement, and new enrollments."
        },
        {
            icon: Settings,
            title: "System Config",
            desc: "Customize the platform's look and feel and white-label your academy."
        }
    ];

    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    
                    {/* LEFT CONTENT - LIST STYLE */}
                    <div className="lg:w-1/2">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-400/5 text-xs font-bold text-violet-300 uppercase tracking-widest mb-6">
                            Admin Central
                        </span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10 leading-tight">
                            Command Your <span className="text-violet-400">Digital Academy</span> with Ease
                        </h2>

                        <div className="space-y-8">
                            {adminFeatures.map((feature, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-violet-600 group-hover:border-violet-500 transition-all duration-300">
                                        <feature.icon size={22} className="text-violet-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1 border-b border-white/5 pb-6 group-last:border-none">
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">{feature.title}</h4>
                                        <p className="text-indigo-100/50 text-sm leading-relaxed italic">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE - DASHBOARD MOCKUP STYLE */}
                    <div className="lg:w-1/2 relative">
                        {/* Decorative floating cards */}
                        <div className="absolute -top-10 -left-10 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl z-20 hidden md:block animate-bounce-slow">
                            <Users className="text-violet-400 mb-2" size={24} />
                            <p className="text-white font-semibold text-xl">1.2k+</p>
                            <p className="text-[10px] text-violet-100/50 uppercase tracking-widest">Active Learners</p>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-violet-500/20 blur-3xl rounded-[40px] opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative overflow-hidden rounded-[40px] border-4 border-white/10 shadow-3xl bg-slate-900">
                                 <img 
                                    src={lmsadminpanel} 
                                    alt="LMS Admin Control Panel Dashboard Placeholder" 
                                    className="w-full h-auto min-h-[450px] object-cover opacity-60 group-hover:opacity-100 transition duration-1000"
                                />
                                {/* Bottom overlay for mockup feel */}
                                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900 to-transparent"></div>
                            </div>
                        </div>

                        {/* Analysis Card */}
                        <div className="absolute -bottom-10 -right-10 bg-violet-600 p-8 rounded-[32px] shadow-2xl z-20 hidden md:block border border-violet-500">
                            <PieChart className="text-white mb-3" size={32} />
                            <p className="text-white font-semibold text-2xl">98%</p>
                            <p className="text-[10px] text-violet-100 font-bold uppercase tracking-widest leading-none">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>

            </div>
            
            <style>
                {`
                    @keyframes bounce-slow {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-15px); }
                    }
                    .animate-bounce-slow {
                        animation: bounce-slow 4s ease-in-out infinite;
                    }
                `}
            </style>
        </section>
    );
};

export default LmsAdminPanel;

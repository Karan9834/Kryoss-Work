import React, { useState } from "react";
import {
    BookOpen,
    Video,
    BarChart,
    Trophy,
    Smartphone,
    Award,
    FileText,
    Layers,
    Users,
    Settings,
    MousePointer2,
    Zap
} from "lucide-react";

const LmsFeatures = () => {
    const [activeTab, setActiveTab] = useState("instructor");

    const instructorFeatures = [
        {
            icon: BookOpen,
            title: "Course Builder",
            desc: "Drag-and-drop interface to create structured curricula with multimedia support.",
        },
        {
            icon: Video,
            title: "Live Streaming",
            desc: "Integrated virtual classrooms for real-time engagement and webinars.",
        },
        {
            icon: BarChart,
            title: "Deep Analytics",
            desc: "Comprehensive insights into learner progress, drop-off rates, and engagement.",
        },
        {
            icon: Settings,
            title: "Automated Grading",
            desc: "Save time with AI-powered assessment tools and instant feedback systems.",
        },
        {
            icon: Users,
            title: "Student Management",
            desc: "Easily handle large enrollments, groups, and communication from one place.",
        },
        {
            icon: Layers,
            title: "Resource Library",
            desc: "Centralized repository for all your documents, videos, and teaching assets.",
        },
    ];

    const studentFeatures = [
        {
            icon: Zap,
            title: "Interactive Lessons",
            desc: "Engage with dynamic content that adapts to your learning pace and style.",
        },
        {
            icon: Trophy,
            title: "Gamified Learning",
            desc: "Stay motivated with points, leaderboards, and digital badges for milestones.",
        },
        {
            icon: Smartphone,
            title: "Mobile Learning",
            desc: "Access your courses anytime, anywhere with a seamless mobile experience.",
        },
        {
            icon: Award,
            title: "Certifications",
            desc: "Earn industry-recognized certificates upon completion to boost your career.",
        },
        {
            icon: FileText,
            title: "Practice Tests",
            desc: "Enhance your skills with mock exams and interactive knowledge checks.",
        },
        {
            icon: MousePointer2,
            title: "Offline Access",
            desc: "Download course materials to continue learning even without internet.",
        },
    ];

    const features = activeTab === "instructor" ? instructorFeatures : studentFeatures;

    return (
        <section className="py-24 bg-indigo-50/50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Capsule */}
                <div className="flex justify-center mb-6">
                    <span className="border border-violet-600/20 rounded-full px-4 py-1 text-sm flex items-center gap-2 text-violet-700 bg-white shadow-sm">
                        <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></span>
                        Premium Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-semibold mb-4 text-[#1a1c2c]">
                    Unlock the Full Potential of <span className="text-violet-700">LMS Platform</span>
                </h2>

                <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12 text-lg">
                    Experience a suite of innovative tools meticulously designed to bridge the gap between 
                    teaching and learning in the digital age.
                </p>

                {/* Toggle Buttons - DIFFERENT STYLE FROM ERP */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-2xl flex gap-1 shadow-md border border-violet-100">
                        <button
                            onClick={() => setActiveTab("instructor")}
                            className={`px-8 py-3 rounded-xl flex items-center gap-2 font-medium transition-all duration-300 ${activeTab === "instructor"
                                ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                                : "text-slate-600 hover:bg-violet-50"
                                }`}
                        >
                            <Users size={18} />
                            For Instructors
                        </button>

                        <button
                            onClick={() => setActiveTab("student")}
                            className={`px-8 py-3 rounded-xl flex items-center gap-2 font-medium transition-all duration-300 ${activeTab === "student"
                                ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                                : "text-slate-600 hover:bg-violet-50"
                                }`}
                        >
                            <BookOpen size={18} />
                            For Students
                        </button>
                    </div>
                </div>

                {/* Cards - DIFFERENT STYLE FROM ERP */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-violet-100/50 flex flex-col items-center text-center overflow-hidden"
                            >
                                {/* Decorative Gradient */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-[3] transition-transform duration-700"></div>
                                
                                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-violet-50 text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                    <Icon size={30} />
                                </div>

                                <h3 className="font-bold text-xl mb-4 text-slate-800 group-hover:text-violet-700 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 leading-relaxed text-balance">
                                    {item.desc}
                                </p>
                                
                                <div className="mt-6 h-1.5 w-12 bg-violet-100 rounded-full overflow-hidden group-hover:w-20 transition-all duration-500">
                                    <div className="h-full bg-violet-600 w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default LmsFeatures;

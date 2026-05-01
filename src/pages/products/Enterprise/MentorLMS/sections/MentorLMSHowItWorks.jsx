import React from "react";
import { UserPlus, BookOpen, MessageSquare, Award } from "lucide-react";

const steps = [
    {
        icon: <UserPlus size={32} />,
        title: "Instructor Onboarding",
        desc: "Create your mentor profile, set up your bio, and verify your teaching credentials.",
        label: "Step 01"
    },
    {
        icon: <BookOpen size={32} />,
        title: "Course Creation",
        desc: "Use our interactive builder to upload videos, quizzes, and course materials.",
        label: "Step 02"
    },
    {
        icon: <MessageSquare size={32} />,
        title: "Student Engagement",
        desc: "Open discussion forums, host live sessions, and interact with your global learners.",
        label: "Step 03"
    },
    {
        icon: <Award size={32} />,
        title: "Certification",
        desc: "Automated examination and certificate issuance upon course completion.",
        label: "Step 04"
    }
];

const MentorLMSHowItWorks = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 lg:mb-24 space-y-4">
                    <span className="text-purple-600 font-bold text-sm uppercase tracking-widest block font-medium">Platform Workflow</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                        Launch Your Academy{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
                            in Simple Steps.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative text-center">
                    {/* Background line for desktop */}
                    <div className="hidden lg:block absolute top-16 left-0 w-full h-[2px] bg-slate-100 -z-10" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-8 group">
                            <div className="w-28 h-28 bg-white rounded-[4rem] shadow-xl border border-purple-100 flex items-center justify-center text-purple-600 relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                {step.icon}
                                {/* Step count badge */}
                                <div className="absolute -top-2 -right-2 w-10 h-10 bg-purple-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-xl">
                                    0{idx + 1}
                                </div>
                            </div>
                            <div className="space-y-3 px-4">
                                <p className="text-fuchsia-600 font-black text-xs uppercase tracking-[0.2em]">{step.label}</p>
                                <h3 className="text-xl font-bold text-slate-800 leading-tight">{step.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MentorLMSHowItWorks;

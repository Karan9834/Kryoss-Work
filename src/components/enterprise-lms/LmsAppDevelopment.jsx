import React from 'react';
import lmsdev1 from "../../assets/lms-img/lmsdev1.jpg";
import lmsdev2 from "../../assets/lms-img/lmsdev2.jpg";
import lmsdev3 from "../../assets/lms-img/lmsdev3.jpg";

const LmsAppDevelopment = () => {

    const sections = [
        {
            title: "Course Management",
            subtitle: "Curriculum & Content Authoring",
            desc: "Intuitive tools for instructors to create, organize, and manage diverse course content, including video lessons, quizzes, and downloadable resources.",
            features: ["Drip Content", "SCORM/AICC Support", "Resource Library", "Course Builder"],
            image: lmsdev1,
            color: "bg-violet-600"
        },
        {
            title: "Interactive Learning",
            subtitle: "Engagement & Collaboration",
            desc: "Foster a dynamic learning environment with real-time interaction, discussion forums, and collaborative tools that keep learners motivated.",
            features: ["Live Webinars", "Discussion Boards", "Peer Review", "Gamification"],
            image: lmsdev2,
            color: "bg-indigo-600"
        },
        {
            title: "Student Analytics",
            subtitle: "Performance & Insights",
            desc: "Gain deep insights into student progress and engagement with comprehensive data visualizations and performance tracking reports.",
            features: ["Progress Reports", "Engagement Heatmaps", "Quiz Analytics", "Certificate Tracking"],
            image: lmsdev3,
            color: "bg-violet-700"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-24">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-xs font-black text-violet-700 mb-6 uppercase tracking-widest">
                        Educational Engineering
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 leading-[1.1] tracking-tight text-center">
                        Our Specialized <span className="text-violet-700">LMS Modules</span>
                    </h2>
                </div>

                {/* Sections - Cards with Overlap/Unique Layout */}
                <div className="space-y-32">
                    {sections.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16`}
                        >
                            {/* IMAGE SIDE */}
                            <div className="lg:w-3/5 relative">
                                <div className={`absolute -inset-2 ${item.color} rounded-[48px] blur-2xl opacity-10`}></div>
                                <div className="relative overflow-hidden rounded-[48px] border-8 border-slate-50 shadow-2xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto min-h-[400px] object-cover bg-slate-50 "
                                    />
                                    {/* Number Indicator */}
                                    <div className={`absolute top-8 left-8 w-16 h-16 ${item.color} text-white rounded-2xl shadow-xl flex items-center justify-center text-2xl font-semibold`}>
                                        0{index + 1}
                                    </div>
                                </div>
                            </div>

                            {/* TEXT SIDE */}
                            <div className="lg:w-2/5">
                                <h3 className="text-3xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-violet-600 mb-6 font-bold uppercase tracking-widest text-sm">{item.subtitle}</p>

                                <p className="text-slate-500 mb-10 leading-relaxed text-lg italic">
                                    {item.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    {item.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                                            <span className="text-sm font-bold text-slate-700">
                                                {f}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <button className="text-sm font-semibold text-violet-700 uppercase tracking-widest border-b-2 border-violet-200 hover:border-violet-600 transition-colors pb-1">
                                        Explore Feature Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LmsAppDevelopment;

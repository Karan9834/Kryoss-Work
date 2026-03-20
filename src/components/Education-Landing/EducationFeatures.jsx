import React, { useState } from 'react';
import { 
  Laptop, 
  Video, 
  MessageSquare, 
  BarChart, 
  Shield, 
  Clock 
} from 'lucide-react';
import featuresImg from '../../assets/educationlanding-img/educationlandingfeatures.jpg';

const EducationFeatures = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: Video,
            title: "Live Virtual Classrooms",
            desc: "Host interactive, high-definition live classes with whiteboards, screen sharing, and real-time student engagement tools.",
            color: "indigo"
        },
        {
            icon: Laptop,
            title: "Self-Paced Learning",
            desc: "Allow students to learn at their own speed with recorded lectures, quizzes, and downloadable resources available 24/7.",
            color: "teal"
        },
        {
            icon: MessageSquare,
            title: "Instant Doubt Solving",
            desc: "Integrated chat and forum systems where students can ask questions and get answers from experts and peers instantly.",
            color: "purple"
        },
        {
            icon: BarChart,
            title: "Progress Visualization",
            desc: "Detailed dashboards for students and teachers to track performance, completion rates, and areas needing improvement.",
            color: "emerald"
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-indigo-600 font-bold text-sm uppercase tracking-[0.3em]">Core Features</span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#1A1C2C]">
                        Everything You Need for <span className="text-indigo-600">Modern Learning</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Experience a comprehensive suite of tools designed to enhance teaching effectiveness and student success.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Interactive Feature List */}
                    <div className="space-y-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const isActive = activeFeature === index;
                            return (
                                <div 
                                    key={index}
                                    onMouseEnter={() => setActiveFeature(index)}
                                    className={`p-6 rounded-3xl transition-all duration-500 cursor-pointer group ${
                                        isActive 
                                        ? 'bg-white shadow-2xl scale-[1.02] border-l-4 border-indigo-600' 
                                        : 'hover:bg-white/50 border-l-4 border-transparent'
                                    }`}
                                >
                                    <div className="flex gap-6 items-start">
                                        <div className={`p-4 rounded-2xl transition-colors duration-500 ${
                                            isActive ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                            <Icon size={24} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className={`text-xl font-bold transition-colors ${
                                                isActive ? 'text-indigo-600' : 'text-[#1A1C2C]'
                                            }`}>
                                                {feature.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-opacity duration-500 ${
                                                isActive ? 'opacity-100' : 'opacity-60'
                                            }`}>
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Dynamic Image Display */}
                    <div className="relative group perspective-1000 mt-12 lg:mt-0">
                        <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] rounded-full group-hover:blur-[120px] transition-all duration-700"></div>
                        <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-2xl border border-indigo-50 transform hover:rotate-y-12 transition-transform duration-700 overflow-hidden">
                            <img 
                                src={featuresImg} 
                                alt="Feature Showcase" 
                                className="w-full h-full object-cover rounded-[32px] transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Floating Overlay Card */}
                            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
                                <Shield className="text-emerald-500" size={32} />
                                <div>
                                    <p className="font-bold text-sm text-[#1A1C2C]">Secure Data</p>
                                    <p className="text-xs text-gray-500">100% Privacy Protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float { animation: float 4s ease-in-out infinite; }
                .perspective-1000 { perspective: 1000px; }
            `}</style>
        </section>
    );
};

export default EducationFeatures;

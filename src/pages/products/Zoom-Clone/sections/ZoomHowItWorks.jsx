import React from 'react';
import { UserPlus, CalendarDays, Video, UsersRound } from 'lucide-react';

const ZoomHowItWorks = () => {
    const steps = [
        {
            icon: <UserPlus size={32} />,
            title: "Sign Up & Brand",
            description: "Register for your white-labeled instance and configure your corporate branding, domains, and security settings."
        },
        {
            icon: <CalendarDays size={32} />,
            title: "Schedule Sessions",
            description: "Create recurring or one-off meetings. Integrate with your calendar and send automated invites."
        },
        {
            icon: <Video size={32} />,
            title: "Host with Confidence",
            description: "Launch meetings directly from your browser or dedicated apps with full host controls and waiting rooms."
        },
        {
            icon: <UsersRound size={32} />,
            title: "Collaborate Globally",
            description: "Engage participants with screen sharing, whiteboarding, and breakout rooms on a low-latency network."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest">How It Works</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 leading-tight">
                        From Setup to <span className="text-indigo-600">Global Communication</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
                    {/* Connection Line (Desktop only) */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-purple-200 via-indigo-200 to-sky-200 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-white shadow-xl shadow-indigo-100 flex items-center justify-center mb-8 relative border-4 border-indigo-50 group-hover:border-indigo-100 transition-colors duration-500 group-hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform">
                                    {index + 1}
                                </div>
                                <div className="text-indigo-600 group-hover:scale-110 transition-transform duration-500">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ZoomHowItWorks;

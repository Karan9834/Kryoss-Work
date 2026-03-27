import React from 'react';
import { PenTool, CalendarPlus, UserCheck, PlayCircle } from 'lucide-react';

const WebinarHowItWorks = () => {
    const steps = [
        {
            icon: <PenTool size={32} />,
            title: "1. Brand & Build",
            description: "Customize your registration pages, waiting rooms, and email templates using our intuitive builder."
        },
        {
            icon: <CalendarPlus size={32} />,
            title: "2. Schedule & Invite",
            description: "Set your date, configure ticketing if required, and broadcast invites to your mailing list."
        },
        {
            icon: <UserCheck size={32} />,
            title: "3. Manage Registrants",
            description: "Automate reminders and track registration metrics in real-time through your dashboard."
        },
        {
            icon: <PlayCircle size={32} />,
            title: "4. Go Live Globally",
            description: "Enter the studio, launch your presentation, and engage audiences with sub-second latency."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Path Line */}
            <div className="absolute top-[40%] left-0 right-0 h-px bg-slate-200 hidden lg:block z-0"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-cyan-600 font-bold text-sm uppercase tracking-widest">The Organizer Flow</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 leading-tight">
                        Launch in Four <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Simple Steps</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col pt-8 group">
                            {/* Step Indicator on the Path */}
                            <div className="hidden lg:block absolute top-[calc(-2rem-1px)] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-sky-200 rounded-full group-hover:border-sky-500 transition-colors duration-300">
                                <div className="absolute inset-1 bg-sky-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </div>

                            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col group-hover:border-sky-100">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-sky-100 text-sky-600 flex items-center justify-center mb-6 shrink-0 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">{step.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebinarHowItWorks;

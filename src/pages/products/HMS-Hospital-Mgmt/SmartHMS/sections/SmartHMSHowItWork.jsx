import React from 'react';

const steps = [
    { num: "01", title: "Registration of Patients", icon: "📋" },
    { num: "02", title: "Schedule & Set Appointment", icon: "📅" },
    { num: "03", title: "Returning Confirmation", icon: "✔️" },
    { num: "04", title: "Insurance Planning", icon: "🛡️" },
    { num: "05", title: "Consult with Doctor", icon: "👨‍⚕️" },
    { num: "06", title: "Patient's Case Study", icon: "🔍" },
    { num: "07", title: "Perform Medical Test", icon: "🩺" },
    { num: "08", title: "Transfer Report", icon: "📄" },
    { num: "09", title: "Starts Treatment", icon: "💊" },
    { num: "10", title: "Observation on Patient", icon: "👁️" }
];

const SmartHMSHowItWork = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[75rem] mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">How It Works</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
                        The Comprehensive <span className="text-cyan-600">Patient Journey</span>
                    </h3>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        Smart HMS flawlessly manages the patient lifecycle at every single touchpoint, ensuring zero friction from registration to recovery.
                    </p>
                </div>

                {/* Elegant Vertical Alternating Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* The Central Line */}
                    <div className="absolute left-[24px] lg:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-teal-200 via-cyan-200 to-teal-200 rounded-full lg:-translate-x-1/2"></div>

                    <div className="space-y-12 lg:space-y-0 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row items-center justify-between w-full lg:even:flex-row-reverse group`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-teal-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.4)] z-20 group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300">
                                    <span className="text-xl">{step.icon}</span>
                                </div>

                                {/* Content Box */}
                                <div className={`w-full lg:w-[45%] pl-20 lg:pl-0 ${idx % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'} flex flex-col justify-center`}>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group-hover:shadow-[0_10px_30px_rgba(45,212,191,0.15)] group-hover:-translate-y-1 transition-all duration-300 relative">

                                        {/* Abstract background numbering inside the card */}
                                        <div className={`absolute top-2 ${idx % 2 === 0 ? 'right-4' : 'right-4 lg:left-4 lg:right-auto'} text-slate-100 font-black text-6xl pointer-events-none select-none z-0`}>
                                            {step.num}
                                        </div>

                                        <div className="relative z-10">
                                            <h4 className="text-xl font-bold text-slate-800 mb-2">
                                                {step.title}
                                            </h4>
                                            <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                                Securely tracked and fully automated. Step {parseInt(step.num, 10)} integrates smoothly with the hospital's central EMR.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty div to balance opposite side */}
                                <div className="hidden lg:block lg:w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartHMSHowItWork;

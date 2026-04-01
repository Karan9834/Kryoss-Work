import React from 'react';

const steps = [
    {
        id: "01",
        title: "Patient Intake",
        desc: "Walk-in or online patients are registered instantly. The system automatically assigns token numbers and places them in the live queue.",
        color: "bg-fuchsia-100 text-fuchsia-700",
        border: "border-fuchsia-200",
        cardBg: "bg-gradient-to-br from-fuchsia-50 to-white hover:from-fuchsia-100"
    },
    {
        id: "02",
        title: "Doctor Consultation",
        desc: "The doctor reviews the patient's history via the clinical portal and inputs clinical notes, generating a secure electronic prescription.",
        color: "bg-purple-100 text-purple-700",
        border: "border-purple-200",
        cardBg: "bg-gradient-to-br from-purple-50 to-white hover:from-purple-100"
    },
    {
        id: "03",
        title: "Direct Pharmacy & Labs",
        desc: "Prescriptions and lab test orders are sent automatically to the respective departments without patients carrying physical slips.",
        color: "bg-indigo-100 text-indigo-700",
        border: "border-indigo-200",
        cardBg: "bg-gradient-to-br from-indigo-50 to-white hover:from-indigo-100"
    },
    {
        id: "04",
        title: "Automated Checkout",
        desc: "The front desk clicks a single button to generate a consolidated invoice including doctor fees, medicines, and tests.",
        color: "bg-blue-100 text-blue-700",
        border: "border-blue-200",
        cardBg: "bg-gradient-to-br from-blue-50 to-white hover:from-blue-100"
    }
];

const BdTaskHMSHowItWork = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Soft ambient background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
                        <span className="text-fuchsia-600 font-bold uppercase tracking-widest text-xs">How It Works</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-semibold text-slate-800 mb-6 font-sans">
                        The Agile <span className="text-purple-600">Clinic Workflow</span>
                    </h3>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        See how BdTask accelerates clinic pipelines. Say goodbye to manual paperwork and lost patient records.
                    </p>
                </div>

                <div className="relative">
                    {/* Horizontal connecting line for desktop hidden on mobile */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-fuchsia-200 via-purple-300 to-blue-200 z-0 border-t-2 border-dashed border-transparent" style={{ borderImage: 'linear-gradient(to right, #fbcfe8, #d8b4fe, #bfdbfe) 1' }}></div>

                    {/* Vertical connecting line for mobile */}
                    <div className="lg:hidden absolute left-[40px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-fuchsia-200 via-purple-300 to-blue-200 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group flex items-start lg:flex-col lg:items-center pl-4 lg:pl-0 h-full">
                                {/* Timeline Node */}
                                <div className={`w-16 h-16 lg:w-20 lg:h-20 shrink-0 ${step.color} ${step.border} border-4 rounded-full flex items-center justify-center font-black text-xl lg:text-2xl shadow-xl z-10 relative bg-white group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300 mb-6 lg:mb-8`}>
                                    {step.id}
                                </div>

                                {/* Content Card */}
                                <div className={`ml-6 lg:ml-0 lg:text-center w-full h-full flex flex-col p-6 lg:p-8 rounded-3xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 group-hover:border-purple-200 group-hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.15)] group-hover:-translate-y-2 transition-all duration-500 ${step.cardBg}`}>
                                    <h4 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BdTaskHMSHowItWork;

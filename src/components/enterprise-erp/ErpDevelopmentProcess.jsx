import React from 'react';
import erpdevelopmentprocess from "../../assets/erp-img/erpdevelopmentprocess.jpg";

const ErpDevelopmentProcess = () => {
    const steps = [
        {
            num: "01",
            title: "Strategic Discovery",
            desc: "We analyze your existing workflows to identify friction points and optimization goals.",
            icon: "🔭"
        },
        {
            num: "02",
            title: "Modular Configuration",
            desc: "Selecting and tailoring the precise ERP components for your specific industry vertical.",
            icon: "🔨"
        },
        {
            num: "03",
            title: "Seamless Integration",
            desc: "Connecting the new ERP core with your existing legacy systems and databases.",
            icon: "🔌"
        },
        {
            num: "04",
            title: "Enterprise Rollout",
            desc: "Phased deployment with intensive user training and post-launch support.",
            icon: "🎯"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading - Updated Typography */}
                <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-14 text-center">
                    ERP App <span className="text-blue-700">Development Process</span>
                </h2>

                <div className="bg-[#1e293b] rounded-[40px] px-8 md:px-12 pt-16 pb-0 flex flex-col md:flex-row items-center gap-10">

                    {/* LEFT CONTENT */}
                    <div className="md:w-1/2 pb-14">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col gap-3 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition">
                                        <span className="text-xl">{step.icon}</span>
                                    </div>
                                    <div>
                                        {/* Step Title - Updated Typography */}
                                        <h4 className="font-semibold text-white mb-2 text-[14px] md:text-[16px]">
                                            {step.title}
                                        </h4>
                                        {/* Step Description - Updated Typography */}
                                        <p className="text-gray-400 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="md:w-1/2 flex justify-center items-end ">
                        <img
                            src={erpdevelopmentprocess}
                            alt="ERP Lifecycle"
                            className="w-[320px] md:w-[400px] h-auto rounded-3xl mb-6"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ErpDevelopmentProcess;
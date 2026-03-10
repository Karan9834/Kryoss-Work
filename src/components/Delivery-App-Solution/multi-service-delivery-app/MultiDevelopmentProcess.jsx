import React from "react";
import Multidevelopmentimg from "../../../assets/delivery-multiservice-img/Multidevelopment.webp"; // Using placeholder import

const MultiDevelopmentProcess = () => {

    const steps = [
        {
            id: 1,
            title: "Requirement Gathering",
            desc: "Firstly, we ensure that we spend a considerable amount of time with you so that we can discover more about your goals and needs. During the consultation and assessment phase, we define the application's phenomenological characteristics, users, and requirements the platform will meet."
        },
        {
            id: 2,
            title: "Design",
            desc: "Second, our team of designers works on your ideas to create beautiful and adoption-friendly application interface designs. We aim to optimize interaction with a focus on the client's satisfaction and increased loyalty. Designs are refined based on your experience and suggestions to reflect your vision closely."
        },
        {
            id: 3,
            title: "Development",
            desc: "Employing advanced technological solutions and industry standards, we create a stable and customized platform to fulfil all your needs. In any development process, we ensure the client is involved in every stage to ensure transparency based on the communication channels set."
        },
        {
            id: 4,
            title: "Test and Launch",
            desc: "Last, we will create your on-demand delivery platform that is ready to launch. Some factors are tested before implementation to determine if they are in perfect working order as expected. Following the tips above, you can introduce your platform and get online orders."
        }
    ];

    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-600 mb-6 font-medium bg-white">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        Development Process
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                        Our Process for <span className="text-cyan-500">Building a Feature-Rich On-Demand Delivery App</span>
                    </h2>
                    <p className="text-gray-500 max-w-4xl mx-auto mb-16 text-lg">
                        Being a leading on demand delivery app development company, we ensure to follow a smooth and transparent process that aligns with your business goals and exceeds your expectations.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start relative">

                    {/* LEFT SCROLLABLE TABS */}
                    <div className="relative pr-6">
                        {/* Dotted Line connecting the circles */}
                        <div className="absolute left-6 top-10 bottom-10 w-[2px] border-l-2 border-dotted border-green-200 z-0"></div>

                        {/* List of Steps (Made Scrollable if content overflows) */}
                        <div className="flex flex-col gap-12 max-h-[650px] overflow-y-auto pr-4 "
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {/* Hide scrollbar for webkit */}
                            <style>
                                {`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
                            </style>

                            {steps.map((step) => (
                                <div key={step.id} className="relative z-10 flex gap-6 group">

                                    {/* Number Circle */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-green-200 bg-white flex items-center justify-center shadow-sm relative z-10 mt-1">
                                        <div className="w-10 h-10 rounded-full border border-teal-100 flex items-center justify-center text-teal-500 font-semibold text-lg bg-teal-50/30">
                                            {step.id}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="pt-2 pb-4">
                                        <h3 className="text-2xl font-semibold text-cyan-500 mb-3 group-hover:text-cyan-600 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* RIGHT IMAGE BORDER */}
                    <div className="flex justify-center items-center h-full sticky top-24">

                        {/* Huge Border Wrapper */}
                        <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] p-[20px] bg-gradient-to-br from-cyan-500 via-teal-400 to-green-500 shadow-xl overflow-visible">

                            {/* Inner White Container */}
                            <div className="w-full h-full bg-white rounded-tl-[65px] rounded-br-[65px] rounded-tr-[10px] rounded-bl-[10px] p-6 flex flex-col items-center justify-center shadow-inner relative overflow-hidden">

                                {/* Image Placeholder / Real Image */}
                                <img
                                    src={Multidevelopmentimg}
                                    className="w-full h-full object-contain relative z-10"
                                    alt="Development Process"
                                    onError={(e) => {
                                        // Fallback if image not found
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                />

                                {/* Fallback UI if image missing */}
                                <div className="hidden absolute inset-0 flex-col items-center justify-center text-gray-400 font-medium">
                                    <span>Image Placeholder</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default MultiDevelopmentProcess;

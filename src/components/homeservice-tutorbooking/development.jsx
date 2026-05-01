import React from "react";
import development1 from "../../assets/homeservice-tutor-img/development1.webp";
import development2 from "../../assets/homeservice-tutor-img/development2.webp";
import development3 from "../../assets/homeservice-tutor-img/development3.webp";
import development4 from "../../assets/homeservice-tutor-img/development4.webp";

const steps = [
    {
        title: "Strategic Discovery",
        image: development1,
        description:
            "The foundational phase involves comprehensive analysis of your commercial objectives and user demographic needs. We collaborate intensely with your team to architect specific requirements, ensuring the final application resonates with your enterprise goals. This stage focuses on functional logic, aesthetic signature, and specialized utility integration.",
    },
    {
        title: "Aesthetic & Logic Engineering",
        image: development2,
        description:
            "Our veteran designers and software engineers synchronize their expertise to materialize your digital vision. We prioritize the development of a frictionless user interface integrated with sophisticated functional modules. The visual architecture optimizes participant engagement while the backend is constructed on resilient, enterprise-grade logic.",
    },
    {
        title: "Ecosystem Integration",
        image: development3,
        description:
            "We execute the seamless orchestration of critical external services, ranging from protected financial gateways and communication protocols to spatial mapping systems. This guarantees consistent platform performance and enables mission-critical functionalities such as auditable transactions and instant alerts.",
    },
    {
        title: "Validation & Deployment",
        image: development4,
        description:
            "Prior to market introduction, the framework is subjected to exhaustive quality assurance testing to verify stability, device compatibility, and performance efficiency. Upon successful validation, we oversee the distribution to premier mobile marketplaces, initiating your instructional venture.",
    },
];

const DevelopmentProcess = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-700 mb-4">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Engineering Lifecycle
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                        Our <span className="text-orange-500">Integrated Platform</span>{" "}
                        Development Framework
                    </h2>

                    <p className="max-w-3xl mx-auto mt-4 text-gray-600">
                        We adhere to a rigorous architectural methodology to deploy your 
                        instructional ecosystem, spanning from initial strategic discovery 
                        to ultimate market deployment.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {steps.map((item, index) => (
                        <div key={index} className="group perspective">
                            <div className="relative h-[320px] w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                                {/* Front */}
                                <div className="absolute inset-0 bg-[#fff5e8] border border-orange-400 rounded-[32px] p-6 flex flex-col items-center justify-center backface-hidden">
                                    <h3 className="text-xl font-semibold text-orange-500 mb-4">
                                        {item.title}
                                    </h3>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="max-w-[200px]"
                                    />
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 bg-[#fff5e8] border border-orange-400 rounded-[32px] p-8 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
                                    <h3 className="text-xl font-semibold text-orange-500 mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 text-center text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind custom utilities */}
            <style>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </section>
    );
};

export default DevelopmentProcess;
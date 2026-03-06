import React from "react";
import development1 from "../../assets/homeservice-tutor-img/development1.webp";
import development2 from "../../assets/homeservice-tutor-img/development2.webp";
import development3 from "../../assets/homeservice-tutor-img/development3.webp";
import development4 from "../../assets/homeservice-tutor-img/development4.webp";

const steps = [
    {
        title: "Gathering Requirements",
        image: development1,
        description:
            "The first step is to understand your business needs and objectives. We work closely with you to gather detailed requirements, ensuring we tailor the app to your specific goals. This phase includes discussing features, design preferences, and overall functionality, making sure every aspect aligns with your vision.",
    },
    {
        title: "Design & Development",
        image: development2,
        description:
            "Our skilled developers and designers work together to bring your app to life. We focus on creating a user-friendly interface and developing robust functionality. The design enhances usability while the app is built with scalable and secure code.",
    },
    {
        title: "Collect Third-Party Accounts",
        image: development3,
        description:
            "Next, we integrate necessary third-party services such as payment gateways, messaging platforms, and location services. This ensures the app functions seamlessly and enables essential features like secure transactions and real-time notifications.",
    },
    {
        title: "Test and Launch",
        image: development4,
        description:
            "Before launch, the app undergoes rigorous testing for bugs, compatibility, and performance. Once approved, we deploy it on the Play Store and App Store, bringing your on-demand tutoring service to users.",
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
                        Development Process
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                        Our <span className="text-orange-500">Seamless Development</span>{" "}
                        Process
                    </h2>

                    <p className="max-w-3xl mx-auto mt-4 text-gray-600">
                        We follow a structured approach to deliver your on-demand tutor app,
                        from gathering requirements to the final launch.
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
                                    <p className="text-gray-700 text-center leading-relaxed">
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
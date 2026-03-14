import React from "react";
import Towdevelopment1 from "../../assets/homeservice-towtruck-img/Towdevelopment1.webp";
import Towdevelopment2 from "../../assets/homeservice-towtruck-img/Towdevelopment2.webp";
import Towdevelopment3 from "../../assets/homeservice-towtruck-img/Towdevelopment3.webp";
import Towdevelopment4 from "../../assets/homeservice-towtruck-img/Towdevelopment4.webp";

const steps = [
    {
        title: "Gathering Requirements",
        image: Towdevelopment1,
        description:
            "We start by understanding your specific business needs, target audience, and feature requirements to ensure the app is perfectly aligned with your goals.",
    },
    {
        title: "Design & Development",
        image: Towdevelopment2,
        description:
            "Our expert team designs an intuitive and user-friendly interface, followed by robust development to create a scalable and feature-rich app for iOS, Android, and web platforms.",
    },
    {
        title: "Collect Third-Party Accounts",
        image: Towdevelopment3,
        description:
            "We integrate necessary third-party services like payment gateways, GPS tracking, and notifications to enhance functionality and ensure smooth operations.",
    },
    {
        title: "Test and Launch",
        image: Towdevelopment4,
        description:
            "After rigorous testing to ensure the app functions flawlessly, we launch it on your chosen platforms, making sure everything is set for optimal performance and user experience.",
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
                        Our Uber for <span className="text-blue-500">Tow Trucks App Development Process</span>{" "}

                    </h2>

                    <p className="max-w-3xl mx-auto mt-4 text-gray-600">
                        Our development process is streamlined to deliver your Uber for Tow Trucks app quickly and efficiently. Here’s how we bring your app to life
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {steps.map((item, index) => (
                        <div key={index} className="group perspective">
                            <div className="relative h-[320px] w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                                {/* Front */}
                                <div className="absolute inset-0 bg-[#B4C6D6] border border-blue-400 rounded-[32px] p-6 flex flex-col items-center justify-center backface-hidden">
                                    <h3 className="text-xl font-semibold text-blue-500 mb-4">
                                        {item.title}
                                    </h3>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="max-w-[200px]"
                                    />
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 bg-[#B4C6D6] border border-blue-400 rounded-[32px] p-8 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
                                    <h3 className="text-xl font-semibold text-blue-500 mb-4">
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
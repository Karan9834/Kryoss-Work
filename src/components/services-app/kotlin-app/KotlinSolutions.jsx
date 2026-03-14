import React from "react";

const solutions = [
    {
        number: "01",
        title: "Custom App Development",
        text: "As a reputed Kotlin app development company, we provide end-to-end app development services to valuable clients like you. Based on your business and technical needs that we grasped, our experts design a Kotlin application that addresses your needs right now and grows with you tomorrow."
    },
    {
        number: "02",
        title: "App UI/UX Design",
        text: "We know how paramount it's to impress your customers. Our Kotlin app designers focus on making a solution that wows your customer from the initial step."
    },
    {
        number: "03",
        title: "Cross-Platform App Development",
        text: "Looking to launch your solution fast with minimal development cost & time? Kotlin cross-platform development is good to go."
    },
    {
        number: "04",
        title: "Enterprise-level Solutions",
        text: "With our enterprise-grade Kotlin app development services, we focus on delivering solutions that grow with your business."
    },
    {
        number: "05",
        title: "App Migration",
        text: "No matter if you want to migrate your Java or hybrid application, we've got you completely covered."
    },
    {
        number: "06",
        title: "App Optimization",
        text: "We help you make your app perform well with our Kotlin app optimization services."
    }
];

const KotlinSolutions = () => {
    return (
        <section className="bg-[#f6f6f6] py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Comprehensive Solutions
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold max-w-4xl mx-auto">
                    Robust White Label Kotlin App Development Solutions{" "}
                    <span className="text-orange-500">for Every Business Need</span>
                </h2>

                {/* Description */}
                <p className="text-center text-gray-600 max-w-4xl mx-auto mt-4">
                    Launch a high-performance brand with our enterprise-grade Kotlin
                    Multiplatform solutions designed for rapid B2B scaling. We deliver
                    fully customizable, native-quality apps for Android, iOS, and Web.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 border border-gray-200 transition duration-300 hover:border-orange-400 hover:shadow-xl"
                        >
                            {/* Number */}
                            <div className="text-4xl font-light text-gray-300 group-hover:text-orange-500 transition mb-6">
                                {item.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-500 transition">
                                {item.title}
                            </h3>

                            {/* Text */}
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default KotlinSolutions;
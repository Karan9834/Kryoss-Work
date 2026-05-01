import React from "react";

const solutions = [
    {
        number: "01",
        title: "Customer Android App Development",
        text: "After thoroughly understanding your Android app development requirements, we develop a custom Android app tailored to your specific goals. These feature-rich solutions meet your operational requirements efficiently."
    },
    {
        number: "02",
        title: "Android App Development Consultation",
        text: "Whether you're starting from zero or upgrading, our Android app development consultant helps you move forward with the right strategy. After understanding your business goals, we develop a success roadmap."
    },
    {
        number: "03",
        title: "Android Web-Based App Development",
        text: "Are you looking to develop a scalable web app that works great on all browsers? With our web-based Android application development services, we develop solutions that help you connect with your users wherever they are."
    },
    {
        number: "04",
        title: "Multi-Platform Deployment",
        text: "With our enterprise-grade Kotlin app development services, we focus on delivering solutions that grow with your business."
    },
    {
        number: "05",
        title: "Android UI/UX Design",
        text: "Great applications are effortless to use. Our UI/UX Android app designers create every screen with extra care. From the first interaction to the final action, we ensure your app feels good and guides users effortlessly."
    },
    {
        number: "06",
        title: "Android App Migration Services",
        text: "We help you future-proof your app so it runs better, lasts longer, and performs smoothly! With our Android app migration services, we help you migrate from an older Android version to an updated one without data loss or disruption."
    }
];

const AndroidWeOffer = () => {
    return (
        <section className="bg-[#f6f6f6] py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        What We Deliver
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold max-w-4xl mx-auto">
                    Scalable White Label Android App Development{" "}
                    <span className="text-orange-500">Agency Built for Growth</span>
                </h2>

                {/* Description */}
                <p className="text-center text-gray-600 max-w-4xl mx-auto mt-4">
                    Every business has different goals, and our White Label Android App Development Service is built to match them. As a trusted White Label Android App Development Agency, we provide scalable, fully branded Android solutions that help startups, agencies, and enterprises launch faster and grow smarter.
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

export default AndroidWeOffer;
import React from "react";

const solutions = [
    {
        number: "01",
        title: "E-Commerce Web Design",
        text: "We create visually stunning and user-friendly e-commerce websites that convert visitors into customers. Our design team focuses on creating a seamless shopping experience that enhances user engagement and drives sales."
    },
    {
        number: "02",
        title: "Custom E-Commerce Development",
        text: "We build custom e-commerce solutions tailored to your business needs. Our development team creates a scalable, secure, and feature-rich platform that meets your specific requirements."
    },
    {
        number: "03",
        title: "E-Commerce Consulting",
        text: "We provide expert guidance to help you make informed decisions about your e-commerce strategy. Our consultants analyze your business needs and recommend the best approach for growth and success."
    },
    {
        number: "04",
        title: "E-Commerce site Maintenance",
        text: "We offer regular maintenance and updates to keep your e-commerce site running smoothly. Our team ensures that your site is secure, fast, and always up-to-date with the latest features."
    },
    {
        number: "05",
        title: "E-Commerce Integration",
        text: "We integrate your e-commerce platform with other tools and services to enhance functionality and improve user experience. Our integration team ensures seamless connections between different systems."
    },
    {
        number: "06",
        title: "E-Commerce Migration",
        text: "We help you migrate your existing e-commerce platform to a new system or upgrade to a more advanced solution. Our migration team ensures a smooth transition with minimal downtime."
    }
];

const EcommerceExpertise = () => {
    return (
        <section className="bg-[#f6f6f6] py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Our Expertise
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold max-w-4xl mx-auto">
                    <span className="text-orange-500">Comprehensive White Label </span>Ecommerce Development Services
                </h2>

                {/* Description */}
                <p className="text-center text-gray-600 max-w-4xl mx-auto mt-4">
                    We deliver scalable white label ecommerce development solutions that let you launch fully branded online stores with complete control, flexibility, and long-term growth support.
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

export default EcommerceExpertise;
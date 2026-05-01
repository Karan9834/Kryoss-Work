import React from "react";
import { Clock, TrendingUp, BadgeCheck } from "lucide-react";

const advantages = [
    {
        icon: <Clock className="w-8 h-8 text-[#8b5e2c]" />,
        title: "24/7 Online Presence",
        text: "With an e-commerce website, you can be available to your customers 24/7, providing them with the convenience of shopping at any time."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-[#8b5e2c]" />,
        title: "Higher Conversion Rates",
        text: "An e-commerce website can help you convert more visitors into customers by providing a seamless shopping experience."
    },
    {
        icon: <BadgeCheck className="w-8 h-8 text-[#8b5e2c]" />,
        title: "Stronger Brand Identity",
        text: "An e-commerce website can help you convert more visitors into customers by providing a seamless shopping experience."
    }
];

const EcommerceBenifits = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* LEFT CONTENT - STICKY */}
                    <div className="lg:w-1/2">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>

                                Key Benefits
                            </div>

                            <h2 className="text-4xl font-semibold leading-snug mb-8">
                                <span className="text-orange-500">Benefits of Choosing  </span>Our White Label Ecommerce Development
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-lg">
                                Our white label ecommerce development helps you reduce costs, accelerate time to market, increase profit margins, and launch a fully branded ecommerce platform without managing complex technical infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - SCROLLABLE CARDS */}
                    <div className="lg:w-1/2 border-l border-gray-100 pl-4 lg:pl-12">
                        <div className="space-y-6 lg:space-y-10">
                            {advantages.map((item, index) => (
                                <div key={index} className="group pb-12 lg:pb-16 border-b border-gray-100 last:border-0">

                                    {/* ICON + TITLE ROW */}
                                    <div className="flex items-center gap-6 mb-4">

                                        <div className="w-16 h-16 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-orange-200">
                                            {item.icon}
                                        </div>

                                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                                            {item.title}
                                        </h3>

                                    </div>

                                    {/* DESCRIPTION */}
                                    <p className="text-gray-600 leading-relaxed text-[17px]">
                                        {item.text}
                                    </p>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EcommerceBenifits;

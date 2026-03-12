import React from "react";
import { Hand, Expand, Smartphone, } from "lucide-react";

const advantages = [
    {
        icon: <Hand className="w-8 h-8 text-[#8b5e2c]" />,
        title: "Reach the Largest Mobile Audience",
        text: "Android is leading and is at the top of the smartphone chart. By launching an Android app, you can reach billions of potential users worldwide."
    },
    {
        icon: <Expand className="w-8 h-8 text-[#8b5e2c]" />,
        title: "Affordable Yet Scalable",
        text: "When you're just entering the market, the Android ecosystem can be the best option to choose from. It allows you to start small and build functionality later as your business grows."
    },
    {
        icon: <Smartphone className="w-8 h-8 text-[#8b5e2c]" />,
        title: "Easy Customization",
        text: "As a custom Android app development company, we tailor every aspect of your application to deliver a personalized experience that feels truly yours."
    }
];

const AndroidWhyItWork = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* LEFT CONTENT - STICKY */}
                    <div className="lg:w-1/2">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                Why It Works
                            </div>

                            <h2 className="text-4xl font-semibold leading-snug mb-8">
                                <span className="text-orange-500">The Real Benefits of </span>White Label Android App Developmen
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-lg">
                                White Label Android App Development gives businesses a faster, smarter way to launch fully branded mobile solutions without heavy development costs. It offers scalability, flexibility, and performance that support long-term growth across industries..
                            </p>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - SCROLLABLE CARDS */}
                    <div className="lg:w-1/2 border-l border-gray-100 pl-4 lg:pl-12">
                        <div className="space-y-6 lg:space-y-10">
                            {advantages.map((item, index) => (
                                <div key={index} className="flex flex-col gap-6 group">
                                    <div className="w-16 h-16 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-orange-200">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-4 pb-12 lg:pb-16 border-b border-gray-100 last:border-0">
                                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-[17px]">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AndroidWhyItWork;

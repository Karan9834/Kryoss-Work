import React from "react";
import { Zap, Puzzle, ShieldCheck } from "lucide-react";

const advantages = [
    {
        icon: <Zap className="w-8 h-8 text-[#8b5e2c]" />,
        title: "Faster Development Cycles",
        text: "Kotlin's expressive syntax dramatically reduces the need to write code again & again. These implications help you focus on developing advanced functionalities rather than juggling with repetitive coding."
    },
    {
        icon: <Puzzle className="w-8 h-8 text-[#8b5e2c]" />,
        title: "Interoperability with Java",
        text: "With 100% interoperability with Java, Kotlin is the perfect fit for modernizing your current application. This flexibility allows business owners like yours to modernize feature-by-feature at their own pace."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-[#8b5e2c]" />,
        title: "Improved App Stability",
        text: "Kotlin helps you detect possible issues during compile time. It helps our developers write crash-resistant code for a more stable app, which helps to deliver a smooth user experience."
    }
];

const KotlinStrategicAdvantages = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* LEFT CONTENT - STICKY */}
                    <div className="lg:w-1/2">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                Strategic Advantages
                            </div>

                            <h2 className="text-4xl font-semibold leading-snug mb-8">
                                Scalable Benefits of <span className="text-orange-500">White Label Kotlin App Development Solutions</span>
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-lg">
                                Unlock rapid market entry with rebrandable solutions that offer the perfect
                                balance of native performance and cross-platform efficiency. By leveraging
                                Kotlin Multiplatform, your business gains a high-value digital asset with full
                                source code ownership, significantly reducing long-term maintenance costs
                                and technical debt.
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

export default KotlinStrategicAdvantages;

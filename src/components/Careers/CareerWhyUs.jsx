import react from 'react';

import { Users, Gamepad2, MessageCircle, Cpu, Smile, Cake, BookOpen, Gem, Sparkles } from "lucide-react";

const CareerWhyUs = () => {

    const features = [
        {
            icon: Users,
            title: "Employee First",
            desc: "We prioritize our employees' well-being, growth, and success."
        },
        {
            icon: Gamepad2,
            title: "Fun Connect",
            desc: "Engaging activities and events to keep work enjoyable."
        },
        {
            icon: MessageCircle,
            title: "Transparent Comm.",
            desc: "Open and honest communication for collaboration."
        },
        {
            icon: Cpu,
            title: "Advanced Resources",
            desc: "Access to cutting-edge tools and technology."
        },
        {
            icon: Smile,
            title: "Positive Environment",
            desc: "A supportive workplace that fosters innovation."
        },
        {
            icon: Cake,
            title: "Birthday Celebration",
            desc: "Making every employee feel special on their big day."
        },
        {
            icon: BookOpen,
            title: "Learning sessions",
            desc: "Continuous learning opportunities to enhance skills."
        },
        {
            icon: Gem,
            title: "Rewards & benefits",
            desc: "Recognizing hard work with exciting perks."
        },
        {
            icon: Sparkles,
            title: "Festival celebration",
            desc: "Celebrating cultural diversity with joyful events."
        }
    ];

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

                {/* LEFT TEXT */}

                <div>

                    <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm mb-6">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Work Culture
                    </div>

                    <h2 className="text-4xl font-semibold mb-6">
                        Why <span className="text-orange-500">Work With Us?</span>
                    </h2>

                    <p className="text-gray-600 leading-relaxed max-w-lg">
                        Join a workplace that values employees, fosters growth, and ensures
                        a positive, fun-filled environment. We believe in transparency,
                        advanced resources, and celebrating every milestone together!
                    </p>

                    {/* Why Us Image */}
                    <img
                        src="/images/company/companyabout/commitment.png"
                        alt="Work Culture at Kryoss Work"
                        className="mt-8 w-full max-w-[600px] max-h-[450px] rounded-2xl object-cover shadow-lg"
                    />

                </div>

                {/* RIGHT CARDS */}

                <div className="h-[650px] overflow-y-auto pr-4 space-y-6"
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

                    {features.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group flex gap-5 items-start border border-gray-200 rounded-3xl p-6 transition-all duration-300 hover:border-orange-400"
                            >

                                <div className="w-16 h-16 flex items-center justify-center rounded-2xl border border-gray-200 text-gray-500 group-hover:text-orange-500 group-hover:border-orange-400 transition">

                                    <Icon size={28} />

                                </div>

                                <div>

                                    <h3 className="text-xl font-semibold mb-1 group-hover:text-orange-500 transition">

                                        {item.title}

                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">

                                        {item.desc}

                                    </p>

                                </div>

                            </div>
                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default CareerWhyUs;
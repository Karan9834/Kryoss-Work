import React from 'react';

import { Users, Gamepad2, MessageCircle, Cpu, Smile, Cake, BookOpen, Gem, Sparkles } from "lucide-react";
import whyusimg from "../../assets/company-career-img/careerwhyus.jpg";

const CareerWhyUs = () => {

    const features = [
        {
            icon: Users,
            title: "People First",
            desc: "We prioritize our team members' well-being, development, and achievements."
        },
        {
            icon: Gamepad2,
            title: "Engaging Culture",
            desc: "Regular activities and team events to keep work enjoyable and balanced."
        },
        {
            icon: MessageCircle,
            title: "Open Communication",
            desc: "Clear and honest dialogue that enables effective collaboration."
        },
        {
            icon: Cpu,
            title: "Modern Tools",
            desc: "Access to up-to-date technologies and professional resources."
        },
        {
            icon: Smile,
            title: "Supportive Atmosphere",
            desc: "A nurturing workplace that encourages creativity and initiative."
        },
        {
            icon: Cake,
            title: "Personal Milestones",
            desc: "Recognizing and celebrating important moments with our team."
        },
        {
            icon: BookOpen,
            title: "Skill Development",
            desc: "Ongoing learning opportunities to grow professional capabilities."
        },
        {
            icon: Gem,
            title: "Recognition & Rewards",
            desc: "Acknowledging dedication with meaningful incentives and perks."
        },
        {
            icon: Sparkles,
            title: "Inclusive Celebrations",
            desc: "Embracing diversity through shared festivities and gatherings."
        }
    ];

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

                {/* LEFT TEXT */}

                <div>

                    <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm mb-6">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Our Culture
                    </div>

                    <h2 className="text-4xl font-semibold mb-6">
                        Why <span className="text-orange-500">Join Our Team?</span>
                    </h2>

                    <p className="text-gray-600 leading-relaxed max-w-lg">
                        Become part of a workplace that values its people, encourages growth, and maintains
                        a positive, engaging atmosphere. We believe in transparency,
                        modern resources, and celebrating achievements together.
                    </p>

                    {/* Why Us Image */}
                    <img
                        src={whyusimg}
                        alt="Team culture at Kryoss Work"
                        className="mt-8 w-full max-w-[600px] max-h-[480px] rounded-2xl object-cover shadow-lg"
                    />

                </div>

                {/* RIGHT CARDS */}

                <div className="h-[680px] overflow-y-auto pr-4 space-y-6"
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
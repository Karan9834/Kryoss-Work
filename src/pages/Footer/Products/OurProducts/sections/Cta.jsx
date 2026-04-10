import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

const CTASection = ({
    bgGradient = "bg-gradient-to-br from-gray-50 to-white",
    cardGradient = "bg-gradient-to-br from-purple-50 to-indigo-50",
    textColor = "text-purple-900",
    subtextColor = "text-purple-700",
    buttonBg = "bg-purple-600",
    buttonText = "text-white",
    hoverButtonBg = "hover:bg-purple-700",
    outlineButtonBorder = "border-purple-200",
    outlineButtonText = "text-purple-700",
    outlineButtonHover = "hover:bg-purple-100"
}) => {
    const navigate = useNavigate();

    return (
        <section className={`w-full px-4 md:px-16 lg:px-24 xl:px-32 py-16 ${bgGradient}`}>
            <div className="max-w-5xl mx-auto">
                <div className={`w-full rounded-3xl overflow-hidden relative shadow-xl text-center ${cardGradient} border border-white/60`}>

                    {/* Background Blur Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/40 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/40 rounded-full blur-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-14 md:py-16">

                        {/* Heading */}
                        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} leading-tight max-w-3xl`}>
                            Ready to Elevate Your Product Experience?
                        </h1>

                        {/* Subtext */}
                        <p className={`${subtextColor} text-sm md:text-base mt-4 max-w-2xl leading-relaxed opacity-90`}>
                            Showcase your product with clarity, engage your users, and deliver seamless digital experiences with a modern, scalable platform built for growth.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">

                            <button onClick={() => navigate('/company/contact')} className={`${buttonBg} ${buttonText} font-medium px-6 py-3 rounded-full flex items-center gap-2 shadow-md ${hoverButtonBg} transition`}>
                                Get Started
                                <ArrowRight size={16} />
                            </button>

                            <button className={`border ${outlineButtonBorder} ${outlineButtonText} px-6 py-3 rounded-full ${outlineButtonHover} transition bg-white/50 backdrop-blur-sm`}>
                                Book a Consultation
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

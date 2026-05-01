import React from "react";
import { Star, Users, TrendingUp, MessageCircle, ArrowRight } from "lucide-react";
import aicontentheroimg from "@/assets/aicontent-generator-img/aicontentgeneratorhero.jpg"
const AIContentGeneratorHero = () => {
    return (
        <section className="py-28 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] text-white relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 ">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8 order-1">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm w-fit">
                            {"</>"} AI Tools
                        </div>

                        {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            AI Content Generator <span className="text-purple-300">SaaS</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
                            Generate high-quality content instantly using advanced AI
                            technology. Create blog posts, social media captions, product
                            descriptions, marketing articles, and SEO-friendly content
                            in seconds with our intelligent AI content generator platform.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://preview.codecanyon.net/item/writerap-ai-content-generator-with-seo-optimizer-saas-application/full_screen_preview/56509990"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
                            >
                                Live Demo
                            </a>
                            <a
                                href="/company/contact"
                                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition shadow-lg backdrop-blur-md"
                            >
                                <MessageCircle size={18} />
                                Let's Discuss
                                <ArrowRight size={18} />
                            </a>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-start order-2">

                        {/* Premium Badge - Removed as requested */}
                        
                        {/* Replace with your downloaded image */}
                        <img
                            src={aicontentheroimg}
                            alt="AI Content Generator"
                            className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AIContentGeneratorHero;
import React from "react";
import aicontentaboutimg from "@/assets/aicontent-generator-img/aicontentgeneratorabout.jpg"
const AIContentGeneratorAbout = () => {
    return (
        <section className="py-24 bg-[#f4f3ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-6 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        {/* Replace with your downloaded image */}
                        <img
                            src={aicontentaboutimg}
                            alt="AI Content Generator Platform"
                            className="w-full max-w-sm rounded-3xl shadow-xl object-cover"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-purple-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About AI Platform
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            What is an <span className="text-purple-600">AI Content Generator?</span>
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            An AI content generator is a smart platform that uses advanced
                            artificial intelligence models to automatically create written
                            content. It helps businesses, marketers, and creators generate
                            articles, blog posts, marketing text, and social media content
                            in seconds.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Instead of spending hours writing and editing, users can simply
                            enter a topic or prompt and let AI generate high-quality content
                            instantly. The system analyzes language patterns and context to
                            produce natural and engaging text.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our AI content generator supports multiple use cases including
                            SEO blog writing, product descriptions, email marketing, ad
                            copy, and social media content creation.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Whether you're a content creator, digital marketer, startup, or
                            enterprise business, this platform helps you scale your content
                            production while saving time and resources.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AIContentGeneratorAbout;
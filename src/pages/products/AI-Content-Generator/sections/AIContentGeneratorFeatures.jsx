import React from "react";
import {
    FileText,
    Search,
    PenTool,
    RefreshCw,
    MessageSquare,
    Sparkles
} from "lucide-react";

const features = [
    {
        icon: FileText,
        title: "Blog & Article Generator",
        desc: "Create long-form blog posts and detailed articles instantly using AI-powered writing models."
    },
    {
        icon: Search,
        title: "SEO Content Writer",
        desc: "Generate SEO-friendly articles optimized with keywords to help improve search engine rankings."
    },
    {
        icon: MessageSquare,
        title: "Social Media Content",
        desc: "Generate captions, tweets, LinkedIn posts, and social media content within seconds."
    },
    {
        icon: PenTool,
        title: "Product Description Generator",
        desc: "Automatically create compelling product descriptions for eCommerce platforms."
    },
    {
        icon: RefreshCw,
        title: "AI Paraphrasing Tool",
        desc: "Rewrite existing text with improved clarity and unique wording using AI."
    },
    {
        icon: Sparkles,
        title: "Creative Content Ideas",
        desc: "Generate headlines, blog ideas, and creative writing prompts instantly."
    }
];

const AIContentFeatures = () => {
    return (
        <section className="py-24 bg-[#f6f4ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                        AI Features
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        Powerful AI Content Generation Tools
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Our AI platform provides a collection of intelligent tools designed
                        to generate high-quality content for marketing, blogging, and
                        social media instantly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group flex gap-6 bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-xl transition duration-300"
                            >

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-600 transition">
                                    <Icon size={26} className="text-purple-600 group-hover:text-white" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                        {feature.desc}
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

export default AIContentFeatures;
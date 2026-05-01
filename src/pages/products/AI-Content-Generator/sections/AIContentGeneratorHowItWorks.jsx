import React from "react";

const steps = [
    {
        number: "01",
        title: "Enter Your Topic",
        desc: "Start by entering a topic, keyword, or prompt describing the content you want to generate."
    },
    {
        number: "02",
        title: "AI Understands Input",
        desc: "The AI analyzes your prompt and processes it using advanced language models."
    },
    {
        number: "03",
        title: "Generate Content",
        desc: "The system instantly generates high-quality articles, blogs, or marketing content."
    },
    {
        number: "04",
        title: "Edit & Customize",
        desc: "Modify the generated text, adjust tone, and refine the content as needed."
    },
    {
        number: "05",
        title: "Export or Publish",
        desc: "Download, copy, or publish your content directly to your website or platform."
    }
];

const AIContentHowItWorks = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                        Workflow
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        How AI Content Generator Works
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Create high-quality content in just a few simple steps using our
                        intelligent AI-powered content generation platform.
                    </p>

                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-10">

                    {steps.slice(0, 3).map((step, index) => (
                        <div key={index} className="text-center relative">

                            <div className="text-purple-500 text-4xl font-bold mb-4">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {step.desc}
                            </p>


                        </div>
                    ))}

                </div>

                {/* Second Row */}
                <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-3xl mx-auto">

                    {steps.slice(3).map((step, index) => (
                        <div key={index} className="text-center relative">

                            <div className="text-purple-500 text-4xl font-bold mb-4">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default AIContentHowItWorks;
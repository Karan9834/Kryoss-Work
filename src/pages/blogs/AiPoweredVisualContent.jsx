import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../../assets/blog/Helping Brands Scale Faster with AI-Powered Visual Content Solutions.png";

const AiPoweredVisualContent = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/blog" className="text-orange-500 font-medium flex items-center gap-2 mb-8 hover:-translate-x-1 transition-transform inline-flex">
          <span>←</span> Back to Blogs
        </Link>

        {/* Article Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">Article</span>
            <span>20 February, 2026</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Helping Brands Scale Faster with AI-Powered Visual Content Solutions
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              PE
            </div>
            <div>
              <p className="font-semibold text-gray-800">Product Engineering Team</p>
              <p className="text-sm text-gray-500">Tech Experts at Kryoss</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-12 shadow-xl">
          <img 
            src={blogImg} 
            alt="Hero" 
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-lg">
          <p className="mb-6 text-xl text-gray-600 font-medium italic border-l-4 border-orange-500 pl-6 py-2">
            Discover how we built an AI-driven design tool that enables businesses to create high-quality marketing visuals instantly without expensive production setups.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-orange-500">The Challenge</h2>
          <p className="mb-6">
            In the era of rapid social media consumption, brands need to produce content faster than ever. Standard design processes are often too slow and expensive to keep up with the demand for personalized, multi-channel visuals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-orange-500">The Solution</h2>
          <p className="mb-6">
            We leveraged generative AI models to create a tool that automates basic design tasks, enabling marketing teams to generate hundreds of localized visuals in seconds. This solution has reduced content production costs by 60% for our key enterprise clients, while ensuring perfectly consistent branding across all global channels.
          </p>

          <blockquote className="bg-gray-50 p-8 rounded-xl border-l-8 border-orange-500 my-10 font-bold text-gray-800">
            "AI is not replacing designers; it's giving them super-powers. We've removed the repetitive grunt work so creative teams can focus on big-picture strategy."
          </blockquote>
        </div>

        {/* CTA */}
        <div className="mt-16 p-10 bg-gray-900 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4 italic">Ready to build your next big thing?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our team of expert engineers and designers is ready to help you scale your business with cutting-edge digital solutions.
          </p>
          <Link to="/company/contact" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors inline-block">
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiPoweredVisualContent;

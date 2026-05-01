import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../../assets/blog/Helping Brands Scale Faster with AI-Powered Visual Content Solutions.png";

const AiDrivenAutomation = () => {
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
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">Case Study</span>
            <span>Featured Project</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Scaling a Digital Product with AI-Driven Automation Features
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
            Discover how we integrated AI capabilities into a product to automate processes, reduce manual effort, and enhance overall efficiency.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-orange-500">The Challenge</h2>
          <p className="mb-6">
            Automation is the key to scalability. Our client was struggling with high manual overhead and slow response times as their business grew. They needed a way to automate complex, data-heavy tasks without sacrificing accuracy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-orange-500">The Solution</h2>
          <p className="mb-6">
            By integrating NLP engines for automated customer support and machine learning for predictive maintenance, we helped our client scale their operations globally with a lean team. This achieved a 50% reduction in operational overhead while simultaneously improving data accuracy across the board.
          </p>

          <blockquote className="bg-gray-50 p-8 rounded-xl border-l-8 border-orange-500 my-10 font-bold text-gray-800">
            "We didn't just build a feature; we built a competitive advantage. The platform now thinks and reacts faster than ever before."
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

export default AiDrivenAutomation;

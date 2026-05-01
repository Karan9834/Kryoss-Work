import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../../assets/blog/Crafting a Conversion-Focused SaaS Dashboard for Better User Engagement.jpg";

const IntuitiveSaasDashboard = () => {
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
            Designing an Intuitive SaaS Dashboard for Better User Experience
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
            Learn how we transformed a complex platform into a clean, user-friendly dashboard that improved engagement and streamlined workflows.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-orange-500">The Challenge</h2>
          <p className="mb-6">
            Complexity is the enemy of productivity. Our client's existing platform was feature-rich but overwhelming for users. Workflows were convoluted, leading to high drop-off rates and excessive support tickets.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-orange-500">The Solution</h2>
          <p className="mb-6">
            We stripped back unnecessary features and focused on core user needs. The new dashboard features interactive data visualizations, customizable widgets, and a streamlined navigation system that allows users to find what they need in two clicks or less.
          </p>

          <blockquote className="bg-gray-50 p-8 rounded-xl border-l-8 border-orange-500 my-10 font-bold text-gray-800">
            "We turned a 20-step onboarding process into a 5-step journey, resulting in a 300% increase in successful user conversions."
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

export default IntuitiveSaasDashboard;

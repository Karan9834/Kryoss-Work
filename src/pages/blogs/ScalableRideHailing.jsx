import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../../assets/blog/Building a Scalable Ride-Hailing Platform for a Growing Urban Market.png";

const ScalableRideHailing = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="text-orange-500 font-medium flex items-center gap-2 mb-8 hover:-translate-x-1 transition-transform inline-flex">
          <span>←</span> Back to Blogs
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">Article</span>
            <span>18 March, 2026</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Building a Scalable Ride-Hailing Platform for a Growing Urban Market
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">PE</div>
            <div>
              <p className="font-semibold text-gray-800">Product Engineering Team</p>
              <p className="text-sm text-gray-500">Tech Experts at Kryoss</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-12 shadow-xl">
          <img src={blogImg} alt="Hero" className="w-full h-auto max-h-[500px] object-cover" />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-lg">
          <p className="mb-6 text-xl text-gray-600 font-medium italic border-l-4 border-orange-500 pl-6 py-2">
            How we helped a mobility startup launch a high-performance ride-hailing app with real-time tracking, smart pricing, and seamless user experience across multiple cities.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-orange-500">The Challenge</h2>
          <p className="mb-6">Our client faced the daunting task of entering a crowded market dominated by established giants. They needed more than just an app; they needed a robust, high-performance ecosystem capable of handling thousands of simultaneous requests without latency.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-orange-500">The Solution</h2>
          <p className="mb-6">We engineered a scalable architecture using microservices, ensuring that as the user base grew, the platform's performance remained consistent. Key features included an AI-driven smart pricing engine, advanced geospatial tracking for accurate arrival times, and a multi-layered payment gateway integration.</p>
          <blockquote className="bg-gray-50 p-8 rounded-xl border-l-8 border-orange-500 my-10 font-bold text-gray-800 italic">
            "The level of scalability we achieved allowed the platform to handle a 300% surge in traffic during peak holiday seasons without a single second of downtime."
          </blockquote>
        </div>

        <div className="mt-16 p-10 bg-gray-900 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4 italic">Ready to build your next big thing?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our team of expert engineers and designers is ready to help you scale your business with cutting-edge digital solutions.</p>
          <Link to="/company/contact" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors inline-block">Get Started Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ScalableRideHailing;

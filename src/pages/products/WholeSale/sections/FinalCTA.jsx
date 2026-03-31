import React from "react";
import { ArrowRight, Play } from "lucide-react";

const FinalCTA = () => {
  const demoLink =
    "https://preview.codecanyon.net/item/wholesale-inventory-control-and-inventory-management-system/full_screen_preview/20291791";

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full mb-5 font-medium">
          Get Started Today
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Ready to Transform Your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Inventory Management?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          Experience real-time tracking, powerful analytics, and seamless
          automation. Take control of your inventory like never before.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-8 flex justify-center">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            <Play size={18} className="fill-white" />
            Live Demo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </a>
        </div>

        {/* Trust Line */}
        <p className="mt-4 text-sm text-gray-400">
          No signup required • Instant access • Fully responsive demo
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
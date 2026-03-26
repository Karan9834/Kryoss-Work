import React from "react";
import { CheckCircle } from "lucide-react";

const AboutWriteFlow = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">

      {/* 🔥 SUBTLE GLOW */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-yellow-200/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">

          {/* GLOW */}
          <div className="absolute -inset-8 bg-yellow-400/10 blur-2xl rounded-3xl"></div>

          {/* IMAGE CARD */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400"
              alt="AI Writing"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* BADGE */}
          <div className="inline-flex px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mb-6">
            About WriteFlow AI
          </div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Built to Help You Write{" "}
            <span className="text-yellow-500">Faster & Smarter</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            WriteFlow AI is designed to transform the way businesses create content.
            From marketing copy to professional emails and reports, our AI helps you
            generate high-quality content in seconds — saving time and boosting productivity.
          </p>

          {/* BULLETS */}
          <div className="mt-6 space-y-4">
            {[
              "Generate content instantly with AI",
              "Built for business and productivity",
              "Supports multiple tones and languages",
              "Easy to use, no technical skills required",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-yellow-500 w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">10k+</h3>
              <p className="text-gray-500 text-sm">Users</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">1M+</h3>
              <p className="text-gray-500 text-sm">Content Generated</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">99%</h3>
              <p className="text-gray-500 text-sm">Satisfaction</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWriteFlow;
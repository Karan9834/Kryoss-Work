import React from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200"
              alt="Team working"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* subtle accent glow (very light) */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 blur-2xl rounded-full opacity-40"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Built for Businesses That Want
            <span className="text-blue-600"> More Control & Clarity</span>
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Our ERP platform simplifies complex financial workflows, helping businesses
            manage accounting, inventory, payroll, and reporting from a single dashboard.
            Designed for efficiency and accuracy, we empower teams to make smarter decisions faster.
          </p>

          {/* BULLETS */}
          <div className="mt-6 space-y-4">
            {[
              "All-in-one financial management",
              "Real-time reporting & analytics",
              "Secure and scalable infrastructure",
              "Automation that saves time",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-500 text-sm">Businesses</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
              <p className="text-gray-500 text-sm">Uptime</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
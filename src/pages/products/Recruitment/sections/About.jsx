import React from "react";
import { CheckCircle, Users, Briefcase, BarChart } from "lucide-react";

const ATSAbout = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
            alt="ATS Dashboard"
            className="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <span className="text-sm text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
            About ATS Platform
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Simplify Hiring with a{" "}
            <span className="text-blue-600">Smart ATS System</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our Applicant Tracking System helps recruiters manage the entire hiring process —
            from sourcing candidates to onboarding — all in one place.
          </p>

          <p className="mt-4 text-gray-500 leading-relaxed">
            With automation, analytics, and seamless collaboration,
            you can hire faster and make better decisions with confidence.
          </p>

          {/* POINTS */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            <div className="flex gap-3">
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-gray-700">End-to-end hiring pipeline</p>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-gray-700">Team collaboration tools</p>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-gray-700">Automated workflows</p>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-gray-700">Data-driven insights</p>
            </div>

          </div>

          {/* STATS */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-600">

            <span><Users className="inline mr-1 text-blue-500"/>500+ Companies</span>
            <span><Briefcase className="inline mr-1 text-blue-500"/>10K+ Hires</span>
            <span><BarChart className="inline mr-1 text-blue-500"/>98% Efficiency</span>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ATSAbout;
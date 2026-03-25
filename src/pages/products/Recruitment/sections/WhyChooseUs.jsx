import React from "react";
import {
  ShieldCheck,
  Zap,
  Users,
  BarChart,
  Clock,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security to protect candidate and company data.",
  },
  {
    icon: Zap,
    title: "Faster Hiring",
    desc: "Reduce hiring time with automation and smart workflows.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Collaborate with your hiring team seamlessly in one platform.",
  },
  {
    icon: BarChart,
    title: "Data Insights",
    desc: "Make better decisions with detailed hiring analytics.",
  },
  {
    icon: Clock,
    title: "Time Efficient",
    desc: "Automate repetitive tasks and focus on quality hiring.",
  },
  {
    icon: CheckCircle,
    title: "Easy to Use",
    desc: "Simple and intuitive interface for recruiters and HR teams.",
  },
];

const ATSWhyChoose = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our ATS Platform
          </h2>
          <p className="mt-4 text-gray-600">
            Designed for modern hiring teams to recruit smarter and faster.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 blur-xl rounded-2xl"></div>

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="mt-2 text-gray-600 text-sm">
                    {item.desc}
                  </p>

                  {/* Bottom line */}
                  <div className="w-0 h-0.5 bg-blue-500 mt-4 group-hover:w-full transition-all duration-300"></div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ATSWhyChoose;
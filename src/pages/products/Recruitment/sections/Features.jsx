import React from "react";
import {
  Users,
  BarChart,
  Zap,
  FileText,
  CheckCircle,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Candidate Management",
    desc: "Track and manage all applicants in one centralized dashboard.",
  },
  {
    icon: BarChart,
    title: "Hiring Analytics",
    desc: "Get insights into hiring performance and pipeline metrics.",
  },
  {
    icon: Zap,
    title: "Automation",
    desc: "Automate repetitive tasks like emails and interview scheduling.",
  },
  {
    icon: FileText,
    title: "Resume Parsing",
    desc: "Automatically extract candidate data from resumes.",
  },
  {
    icon: CheckCircle,
    title: "Workflow Tracking",
    desc: "Move candidates through hiring stages efficiently.",
  },
  {
    icon: Clock,
    title: "Interview Scheduling",
    desc: "Schedule interviews seamlessly with integrated tools.",
  },
];

const ATSFeatures = () => {
  return (
    <section className="relative bg-[#0A0A0F] py-24 px-6 text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features for Modern Hiring
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to manage recruitment efficiently.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition hover:-translate-y-2 hover:bg-white/20"
              >

                {/* Icon */}
                <div className="w-12 h-12 bg-white/10 text-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="mt-4 font-semibold text-lg">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="mt-2 text-gray-400 text-sm">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ATSFeatures;
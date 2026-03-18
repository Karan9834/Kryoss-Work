import React from "react";
import { UserPlus, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Set Up Your Workspace",
    desc: "Create your HR workspace, add your team, and configure roles in minutes.",
  },
  {
    icon: Settings,
    title: "Automate HR Processes",
    desc: "Streamline payroll, attendance, and performance tracking with automation.",
  },
  {
    icon: Rocket,
    title: "Scale & Optimize",
    desc: "Use insights and analytics to improve productivity and grow efficiently.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>

          <p className="text-gray-500 text-lg">
            Launch and manage your HR operations effortlessly with a simple and powerful workflow.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                  relative p-8 rounded-2xl
                  bg-white border border-gray-200
                  shadow-sm
                  hover:shadow-lg
                  transition duration-300
                  text-center
                "
              >

                {/* ICON */}
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl mb-6
                                bg-gradient-to-br from-purple-600 to-indigo-600
                                shadow-md">
                  <Icon className="text-white" size={22} />
                </div>

                {/* STEP */}
                <div className="text-purple-600 font-semibold mb-2">
                  Step {index + 1}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;
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
          {/* Optional Badge - Add if needed */}
          {/* <div className="inline-flex items-center justify-center mb-4">
            <div className="px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-purple-600">How It Works</span>
            </div>
          </div> */}
          
          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-5">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6]">
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

                {/* Step Number - Updated: text-[13px] font-semibold uppercase tracking-[0.05em] */}
                <div className="text-purple-600 font-semibold text-[13px] uppercase tracking-[0.05em] mb-2">
                  Step {index + 1}
                </div>

                {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Card Description - Updated: text-[14px] md:text-[14px] font-normal leading-[1.6] */}
                <p className="text-gray-600 text-[14px] md:text-[14px] font-normal leading-[1.6]">
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
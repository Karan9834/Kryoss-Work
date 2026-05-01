import React from "react";
import { CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      title: "Inquiry Review",
      desc: "Our team carefully reviews your request to understand your requirements.",
    },
    {
      title: "Initial Response",
      desc: "You’ll receive a confirmation email or call within 24 hours to discuss the next steps.",
    },
    {
      title: "Requirement Discussion",
      desc: "We schedule a detailed discussion to dive deeper into your business needs.",
    },
    {
      title: "Tailored Proposal",
      desc: "Our experts craft a custom strategy and share the best solution for you.",
    },
    {
      title: "Finalizing the Plan",
      desc: "We refine the approach based on your feedback and finalize project details.",
    },
    {
      title: "Project Kickoff",
      desc: "Once everything is set, we begin turning your vision into reality!",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-full text-sm">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
            What’s Next?
          </div>
        </div>


        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Process After You Reach Out
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Once you submit the contact form, our team takes prompt action.
          Here’s what happens next to ensure a smooth and efficient collaboration.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition"
            >

              {/* Icon */}
              <div className="flex-shrink-0">
                <CheckCircle className="text-indigo-600 w-8 h-8" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
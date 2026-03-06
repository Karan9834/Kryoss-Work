import React from "react";

const steps = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    title: "1. Log in/ Sign Up",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
    title: "2. Browse Nearest Provider",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    title: "3. Select Package",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png",
    title: "4. Select Date & Time",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    title: "5. Service In Progress",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    title: "6. Rate, Review & Payment",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-green-600 rounded-full px-4 py-1 text-sm text-green-700 mb-6">
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
          App Workflow Overview
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Graphical Flow of the{" "}
          <span className="text-green-700">Dog Walking App</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 mb-16">
          Visualize how our dog walking app works through a detailed graphical
          flow. From customer booking requests to dog walker confirmations,
          every step is streamlined for efficiency.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* Card */}
              <div className="bg-green-100 p-4 rounded-3xl">

                <div className="bg-white rounded-2xl p-6 shadow-md w-[220px] h-[200px] flex items-center justify-center">

                  <img
                    src={step.img}
                    alt={step.title}
                    className="h-[120px] object-contain"
                  />

                </div>

              </div>

              {/* Title */}
              <p className="mt-4 text-gray-700 font-medium">
                {step.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WorkflowSection;
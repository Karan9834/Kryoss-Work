import React from "react";
import workflowImage from "../../assets/Handyman/handymanworks.webp";

const HandymanWorkflow = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#fdf6e3] overflow-hidden">

      <div className="max-w-7xl mx-auto text-center">

        {/* Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-full 
          bg-yellow-100 text-yellow-700 border border-yellow-300 font-medium">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            Handyman App Workflow
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#3a2d00]">
          How Does a Handyman{" "}
          <span className="text-yellow-600">App Like Uber</span> Work?
        </h2>

        <p className="max-w-3xl mx-auto text-[#6b5200] mb-20">
          A handyman app like Uber simplifies the process of hiring skilled
          service providers for customers. Whereas it helps you as a business
          owner to manage operations effortlessly.
        </p>

        {/* MAIN WORKFLOW AREA */}
        <div className="relative flex justify-center items-center">

          {/* Background Card */}
          <div className="absolute w-[520px] h-[520px] 
          bg-gradient-to-br from-[#ffe082] to-[#fbbf24] 
          rounded-[50px] shadow-xl"></div>

          {/* Center Image */}
          <img
            src={workflowImage}
            alt="Workflow"
            className="relative z-10 w-[380px] md:w-[450px] object-contain"
          />

          {/* LEFT SIDE CARDS */}
          <div className="hidden lg:block absolute left-[8%] top-0 z-20 space-y-6">

            <WorkflowCard
              number="1."
              title="Login/Signup"
              text="User can log in or sign up with providing basic information."
            />

            <WorkflowCard
              number="2."
              title="Search Provider"
              text="User can search nearest provider and view details."
            />

            <WorkflowCard
              number="3."
              title="Place Order"
              text="User chooses service and places the order."
            />

          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="hidden lg:block absolute right-[8%] top-0 z-20 space-y-6">

            <WorkflowCard
              number="4."
              title="Provider Offer Service"
              text="Provider arrives at user location and offers service."
            />

            <WorkflowCard
              number="5."
              title="Secure Payment"
              text="User can pay via card, cash, or in-app wallet."
            />

            <WorkflowCard
              number="6."
              title="Rating & Review"
              text="Users and providers give ratings & reviews."
            />

          </div>

        </div>

      </div>
    </section>
  );
};

const WorkflowCard = ({ number, title, text }) => {
  return (
    <div className="w-[340px] bg-white rounded-2xl shadow-lg p-6 text-left">
      <h4 className="text-yellow-600 font-semibold mb-2">
        {number} {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default HandymanWorkflow;
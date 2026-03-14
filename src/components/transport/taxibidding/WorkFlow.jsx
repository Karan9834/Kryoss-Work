import React from "react";

const steps = [
  {
    title: "User Registration & Profile Setup",
    desc: "Be a customer or driver, they can follow a quick registration process and create profiles with details like name, contact info, etc.",
  },
  {
    title: "Booking a Ride or Sending a Parcel",
    desc: "Customers can file a taxi service or parcel delivery request by entering the required details, helping them get started smoothly.",
  },
  {
    title: "Fare Bidding",
    desc: "Customers enter the fare they're willing to pay while drivers can choose to accept or decline or counter-offer on the app like inDriver.",
  },
  {
    title: "Driver Selection",
    desc: "Customers review driver profiles and other details before accepting their service, helping them choose what suits their needs.",
  },
  {
    title: "Real-Time Tracking",
    desc: "Once a driver is selected, customers can track their ride or package delivery in real-time through GPS-enabled tracking.",
  },
  {
    title: "Payments",
    desc: "Customers can make payments through multiple options including wallets, cards, etc.",
  },
  {
    title: "Feedback & Ratings",
    desc: "After the service is completed, both customers and drivers can rate and review each other.",
  },
  {
    title: "Admin Dashboard",
    desc: "Manage customer requests, driver earnings, and analytics via a powerful dashboard.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="w-full py-24 bg-[#f3f4f6] flex justify-center">
      <div className="w-full max-w-6xl px-6">

        {/* Small Label */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-sm font-medium 
                           text-[#5aa114] border border-[#c7d8a4] 
                           px-4 py-1 rounded-full">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            On-demand Taxi & Delivery Solution Workflow
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-6 text-[#1f2937]">
          How Does an{" "}
          <span className="text-[#5aa114]">
            inDriver-like App Work?
          </span>
        </h2>

        <p className="text-center text-[#4b5563] max-w-3xl mx-auto mb-16">
          Our feature-rich inDriver like app combines ride booking with fare
          negotiation and parcel delivery services into a single platform.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {steps.map((step, index) => (
            <div key={index} className="relative group">

              {/* Floating Pill */}
              <div className="absolute -top-5 left-8">
                <span
                  className="px-6 py-2 text-sm font-semibold rounded-full
                             bg-[#eaf6d8] text-[#4f8f12]
                             border border-[#6dbb1a]
                             transition-all duration-300
                             group-hover:bg-[#6dbb1a]
                             group-hover:text-white"
                >
                  {step.title}
                </span>
              </div>

              {/* Card */}
              <div
                className="bg-[#f0f5e8]
                           border border-[#6dbb1a]
                           rounded-[26px]
                           px-8 py-10
                           text-center
                           transition-all duration-300"
              >
                <p className="text-[15px] leading-relaxed text-[#374151]">
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

export default WorkflowSection;
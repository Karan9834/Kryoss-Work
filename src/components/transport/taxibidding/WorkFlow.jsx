import React from "react";

const steps = [
  {
    title: "Unified Onboarding Process",
    desc: "Whether joining as a rider or service provider, users complete a streamlined registration to establish their professional digital identity.",
  },
  {
    title: "Initiating Service Requests",
    desc: "Users can instantly post transport or delivery requirements by providing destination details and essential service parameters.",
  },
  {
    title: "Dynamic Fare Negotiation",
    desc: "Riders propose their budget-friendly rates, giving partners the flexibility to confirm or negotiate via optimized bidding tools.",
  },
  {
    title: "Partner Evaluation & Approval",
    desc: "Riders assess driver performance history and vehicle metrics to select the most qualified partner for their specific journey.",
  },
  {
    title: "Live Service Monitoring",
    desc: "Following confirmation, users gain access to precise GPS tracking to observe the real-time progress of their ride or parcel delivery.",
  },
  {
    title: "Integrated Secure Transactions",
    desc: "The platform supports diverse payment architectures, allowing for frictionless settlements via digital wallets and credit systems.",
  },
  {
    title: "Community Integrity Review",
    desc: "Post-service, both participants contribute to platform quality by exchanging objective ratings and descriptive testimonials.",
  },
  {
    title: "Centralized Command Oversight",
    desc: "Administrators supervise service volume, partner revenue, and data insights through a high-performance management console.",
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
            End-to-End Operational Lifecycle: Taxi & Logistics
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-6 text-[#1f2937]">
          How Does Our{" "}
          <span className="text-[#5aa114]">
            inDrive Replica Function?
          </span>
        </h2>

        <p className="text-center text-[#4b5563] max-w-3xl mx-auto mb-16">
          Our versatile inDrive-style platform merges trip coordination, price
          negotiation, and shipment services into a unified digital environment.
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
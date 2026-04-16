import React from "react";
import workflowImage from "../../../assets/workflow.webp";

const QuickFlowSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0f1408] to-[#060b03] text-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-stretch">

        {/* LEFT SIDE - INTERNAL SCROLL */}
        <div className="h-[650px] overflow-y-auto pr-6 custom-scroll"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {/* Pill */}
          <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-1 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[#9FE870] rounded-full"></span>
            Operational Roadmap
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6 leading-snug">
            Understanding the{" "}
            <span className="text-[#9FE870]">
              Mechanics of Our inDrive Replica
            </span>
          </h2>

          <p className="text-white/80 mb-10">
            Examine our streamlined and systematic process designed to guarantee 
            efficient service delivery and crystal-clear interactions between 
            users and providers.
          </p>

          <div className="mb-14">
            <h3 className="text-xl font-semibold mb-3">1. Passenger Trip Workflow</h3>

            <p className="text-white/80 mb-4">
              Users access the system, choose their preferred transport mode, define route 
              endpoints, and propose a fare that matches their budget.
            </p>

            <p className="text-white/80 mb-4">
              Local partners are notified immediately and can confirm the rate 
              or suggest an alternative, ensuring an equitable marketplace.
            </p>

            <p className="text-white/80">
              Following mutual agreement, live GPS monitoring activates, 
              leading to an integrated payment settlement and quality review.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="mb-14">
            <h3 className="text-xl font-semibold mb-3">2. Logistics Parcel Workflow</h3>

            <p className="text-white/80 mb-4">
              Riders specify collection and delivery points, describe the 
              shipment, and offer a transparent delivery fee.
            </p>

            <p className="text-white/80 mb-4">
              Available couriers in the vicinity evaluate the request and 
              engage in real-time negotiation to finalize terms.
            </p>

            <p className="text-white/80">
              End-to-end tracking and protected financial protocols facilitate 
              a dependable shipment experience and successful delivery validation.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE - IMAGE FULL SECTION HEIGHT */}
        <div className="h-[650px] flex items-end">

          <img
            src={workflowImage}
            alt="Workflow"
            className="w-full h-full object-contain"
          />

        </div>

      </div>

    </section>
  );
};

export default QuickFlowSection;
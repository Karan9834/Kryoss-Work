import React from "react";
import workflowImage from "../../../assets/workflow.webp";

const QuickFlowSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0f1408] to-[#060b03] text-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-stretch">

        {/* LEFT SIDE - INTERNAL SCROLL */}
        <div className="h-[650px] overflow-y-auto pr-6 custom-scroll">

          {/* Pill */}
          <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-1 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[#9FE870] rounded-full"></span>
            Quick Flow
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6 leading-snug">
            How Does the{" "}
            <span className="text-[#9FE870]">
              indrive clone App
            </span>{" "}
            Work ?
          </h2>

          <p className="text-white/80 mb-10">
            Have a look at our seamless and structured workflow that ensures
            smooth service execution and transparent communication between
            customers and drivers.
          </p>

          {/* STEP 1 */}
          <div className="mb-14">
            <h3 className="text-xl font-semibold mb-3">1. Taxi Booking Flow</h3>

            <p className="text-white/80 mb-4">
              Users log into the platform, select vehicle type, enter pickup and drop locations,
              and place a bid amount according to their preference.
            </p>

            <p className="text-white/80 mb-4">
              Nearby drivers receive the request instantly and respond
              by accepting or counter-offering, ensuring fair pricing.
            </p>

            <p className="text-white/80">
              Once confirmed, real-time tracking begins and the ride
              concludes with secure in-app payment and rating.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="mb-14">
            <h3 className="text-xl font-semibold mb-3">2. Courier Delivery Flow</h3>

            <p className="text-white/80 mb-4">
              Customers provide pickup and drop details along with
              package specifications and suggested delivery price.
            </p>

            <p className="text-white/80 mb-4">
              Delivery agents nearby receive the request and respond
              in real-time, creating a transparent negotiation model.
            </p>

            <p className="text-white/80">
              Live tracking and secure payments ensure smooth delivery
              and confirmation upon completion.
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
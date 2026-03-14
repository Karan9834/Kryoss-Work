import React from "react";

const steps = [
  {
    title: "Download & Register",
    desc: "Users download the Uber clone app and create their account using email or phone number for quick access."
  },
  {
    title: "Book a Ride",
    desc: "Riders enter their pickup and drop location, select a vehicle type, and confirm the ride instantly."
  },
  {
    title: "Driver Accepts Request",
    desc: "Nearby drivers receive the ride request and accept it. The rider can track the driver in real-time."
  },
  {
    title: "Complete Ride & Payment",
    desc: "Once the ride ends, the rider pays using cash, card, or wallet and both rider and driver can rate the experience."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            How the Uber Clone App Works
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our Uber clone platform simplifies the entire ride-hailing process
            for both riders and drivers. From booking a ride to completing the
            trip, everything happens seamlessly within the app.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >

              <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full mb-4 font-bold">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
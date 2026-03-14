import React from "react";

const steps = [
  {
    title: "Place an Order",
    desc: "Customers browse the app, select their desired alcohol, and place an order with just a few taps.",
  },
  {
    title: "Order Confirmation",
    desc: "Once an order is placed, the store receives the request and confirms availability.",
  },
  {
    title: "Driver Assignment",
    desc: "A nearby driver is automatically assigned to pick up and deliver the order to the customer.",
  },
  {
    title: "Real-Time Tracking",
    desc: "Customers can track their orders in real-time and receive updates on delivery status.",
  },
  {
    title: "Secure Payment",
    desc: "Payments are securely processed through the app, offering multiple payment options.",
  },
  {
    title: "Successful Delivery",
    desc: "The driver delivers the alcohol, and the customer receives the order at their doorstep.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 bg-[#260011]">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* BADGE */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 border border-[#55D7FF] text-white px-4 py-1.5 rounded-full text-sm">
                <span className="w-2 h-2 bg-gradient-to-r from-[#921E4B] to-[#4A011D] rounded-full"></span>
                How App Works
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-white">
              How Our{" "}
             <span className=" bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text">
                Alcohol Delivery App
              </span>{" "}
              Works
            </h2>

            {/* SCROLLABLE POINTS */}
            <div className="max-h-[320px] overflow-y-auto pr-4 space-y-6 scrollbar-thin">

              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">

                  {/* NUMBER */}
                  <div className="flex items-start justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-white font-semibold">
                    {index + 1}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-semibold text-lg text-white">{step.title}</h4>
                    <p className="text-white text-sm mt-1">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-how-app-works.webp"
              alt="Alcohol Delivery Workflow"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
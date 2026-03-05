import React from "react";

const steps = [
  {
    number: "1",
    title: "Login/Signup",
    desc: "Customers can log in or sign up by providing basic information or through social sites like Facebook or Google.",
  },
  {
    number: "2",
    title: "Search Provider",
    desc: "Customers can find the nearest beautician, view their profile, service pricing, ratings, and distance from their location.",
  },
  {
    number: "3",
    title: "Place Order",
    desc: "After viewing the beautician's profile and pricing, customers can select the service and place their order.",
  },
  {
    number: "4",
    title: "Provider Offer Service",
    desc: "After accepting customer requests, the beautician arrives at the customer location and offers the beauty service.",
  },
  {
    number: "5",
    title: "Secure Payment",
    desc: "Once the service is completed, customers have flexible payment options like cash, card, or in-app wallet.",
  },
  {
    number: "6",
    title: "Rating & Review",
    desc: "After payment, both customer and provider can leave ratings and reviews based on their experience.",
  },
];

const HowitWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
       
      <div className="flex items-center justify-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 w-fit mx-auto border-2">
  <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
  About Uber for Beauty App
</div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6">
          How the  <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
          Uber for Beauty App Works
            </span> 
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Our Uber for Beauty App is designed to streamline the beauty service
          process for both customers and beauticians. From booking appointments
          to managing services, every feature is crafted to offer a seamless
          experience. Here’s how the app works step-by-step.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg relative"
            >
              
              {/* Step Number */}
              <div
                className="w-12 h-12 flex items-center justify-center text-white font-bold rounded-lg mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, #FF2485 0%, #C739FF 100%)",
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-pink-500 transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom Hover Border */}
              <span
                className="absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #FF2485 0%, #C739FF 100%)",
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
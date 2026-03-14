import React from "react";

const steps = [
  {
    icon: "/icons/signup.png",
    title: "User Signup/Login",
    desc: "Customers and drivers can quickly register using their phone number, email, or social media accounts, ensuring a smooth onboarding process."
  },
  {
    icon: "/icons/payment.png",
    title: "Secure Payments",
    desc: "Users can pay seamlessly through multiple options, including cash, wallets, or integrated payment gateways."
  },
  {
    icon: "/icons/rating.png",
    title: "Rate & Review",
    desc: "After completing the ride, both riders and drivers can provide ratings and feedback to improve service quality."
  },
  {
    icon: "/icons/bookride.png",
    title: "Book a Ride",
    desc: "Riders enter pickup and drop-off locations, get fare estimates, and request a ride instantly with just a few taps."
  },
  {
    icon: "/icons/driver.png",
    title: "Driver Accepts",
    desc: "Nearby drivers receive instant notifications, review ride details, and accept the request within seconds."
  },
  {
    icon: "/icons/tracking.png",
    title: "Real-Time Tracking",
    desc: "Riders and drivers can track the ride in real-time using GPS navigation."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900">
            How It Works
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Simple & Efficient Bike Taxi Booking Process. Our Bike Ride
            Booking App ensures a hassle-free experience for both riders
            and drivers. Here’s how it works in just a few simple steps.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >

              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 mb-5"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorksSection;
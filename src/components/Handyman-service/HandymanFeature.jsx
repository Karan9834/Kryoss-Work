import React from "react";
import rightImage from "../../assets/Handyman/handymannew.webp"; // replace manually

const features = [
  {
    icon: "F",
    title: "Social Login",
    desc: "A user has an option to log in through a social account like Facebook, Google, or via Email.",
  },
  {
    icon: "📅",
    title: "Schedule Booking",
    desc: "Users can book handyman services with go or schedule their appointment at a particular time.",
  },
  {
    icon: "💳",
    title: "Easy Payment",
    desc: "To pay for provider services, the user has multiple payment options such as cash, credit, and wallet.",
  },
  {
    icon: "📍",
    title: "Real-time Tracking",
    desc: "Users can track down the handyman service provider location with a real-time tracking option.",
  },
  {
    icon: "%",
    title: "Offer & Discount",
    desc: "Users can use offer & discount, to get a discount for their handyman services and reduce payment.",
  },
  {
    icon: "⭐",
    title: "Review & Rating",
    desc: "After done service, users can give reviews & ratings to the provider based on their experiences.",
  },
];

const HandymanFeatures = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm">
            Essential Customer App Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold mb-4">
          <span className="text-yellow-600">Powerful Features</span> to Build
          Your Handyman App Like Uber
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Enhance service booking, secure payments, and streamline processes
          for your customers with our customer-centric handyman app clone.
        </p>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE - FEATURE CARDS */}
          <div className="grid sm:grid-cols-2 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#fafafa] border border-yellow-400 rounded-[20px] p-6 shadow-sm"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-yellow-500 
                                flex items-center justify-center text-white 
                                mb-4 text-lg font-semibold">
                  {item.icon}
                </div>

                <h4 className="text-lg font-semibold mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE - DARK PANEL */}
          <div className="bg-gradient-to-br from-[#3a2d00] to-[#1f1400] 
                          rounded-[35px] p-10 flex justify-center items-center">

            <img
              src={rightImage}
              alt="Preview"
              className="w-[300px] md:w-[360px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default HandymanFeatures;
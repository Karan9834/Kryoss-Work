import React from "react";
import leftImage from "../../assets/Handyman/providerapp.webp"; 

const features = [
  {
    title: "Registration",
    desc: "Handyman professionals register into an application with their information like name, email, contact details, etc.",
  },
  {
    title: "Manage Service",
    desc: "Handyman professionals can add select services which they want to offer like plumber, electrician, etc.",
  },
  {
    title: "Profile Management",
    desc: "Professional can manage their profile information such as name, email, location, service radius, and profile picture.",
  },
  {
    title: "Manage Request",
    desc: "Handyman professional manage new services request with one tap accepts or reject option based on availability.",
  },
  {
    title: "View Earning",
    desc: "Professional has the option to view their earning report with complete, cancel, running, and pending services requests.",
  },
  {
    title: "On/Off Status",
    desc: "After the handyman account is approved by the admin, they have the option to manage their service status with the on/off option.",
  },
];

const ProviderFeatures = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm">
            Provider App Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4">
          <span className="text-yellow-600">Provider</span> App Features
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Allow service providers to manage bookings, track their tasks, and receive payments from an all-in-one handyman app like Uber.
        </p>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE DARK PANEL */}
          <div className="bg-gradient-to-br from-[#3a2d00] to-[#1f1400] 
                          rounded-[35px] p-8 flex justify-center items-center">

            <img
              src={leftImage}
              alt="Provider Preview"
              className="w-[300px] md:w-[340px] object-contain"
            />

          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#fafafa] border border-yellow-400 
                           rounded-[18px] p-5 transition duration-300
                           hover:shadow-md hover:-translate-y-1"
              >
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-yellow-500 
                                flex items-center justify-center text-white 
                                mb-3 text-sm font-semibold">
                  ★
                </div>

                <h4 className="text-base font-semibold mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProviderFeatures;
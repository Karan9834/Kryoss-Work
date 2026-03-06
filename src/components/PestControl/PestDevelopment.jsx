import React from "react";
import development from "../../assets/PestControl/development.webp";
import {
  ClipboardList,
  Puzzle,
  Code2,
  Rocket
} from "lucide-react";

const steps = [
  {
    icon: <ClipboardList size={22} />,
    title: "1. Gathering Requirements",
    desc: "We start by understanding your unique business needs and goals. This stage involves gathering all the necessary details to ensure the app is tailored to your specific requirements."
  },
  {
    icon: <Puzzle size={22} />,
    title: "2. Collect Third-Party Accounts",
    desc: "To enhance your app’s functionality, we integrate third-party services like payment gateways, maps, and customer verification systems."
  },
  {
    icon: <Code2 size={22} />,
    title: "3. Design & Development",
    desc: "Our design and development team creates a user-friendly interface and robust backend to ensure smooth functionality."
  },
  {
    icon: <Rocket size={22} />,
    title: "4. Test and Launch",
    desc: "Before the official launch, we thoroughly test the app for performance, usability, and security."
  }
];

const DevelopmentProcess = () => {
  return (
    <section className="py-24 bg-white">

      <div
        className="max-w-7xl mx-auto px-6 py-20 rounded-3xl"
        style={{
          background:
            "linear-gradient(90deg,#2a0f00,#4a1f00,#2a0f00)"
        }}
      >

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="border border-white/30 text-white text-sm px-4 py-1 rounded-full">
            Development Process
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold text-white mb-4">
          Uber for
          <span className="text-orange-400">
            {" "}Pest Control Service App Development Process
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
          Our development process for the Uber-like Pest Control Service App is
          straightforward and efficient. From gathering your requirements to
          launching the app on Android and iOS, we ensure that every step is
          carefully executed for a seamless and successful app launch.
        </p>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT TIMELINE */}
          <div className="relative">

            {/* vertical dotted line */}
            <div className="absolute left-6 top-0 bottom-0 border-l border-dashed border-white/40"></div>

            <div className="space-y-10">

              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">

                  {/* icon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl text-white z-10">
                    {step.icon}
                  </div>

                  {/* text */}
                  <div>

                    <h3 className="text-white text-lg font-semibold mb-2">
                      {step.title}
                    </h3>

                    <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-gray-300 text-sm max-w-lg">
                      {step.desc}
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <img
              src={development}
              alt="development process"
              className="w-full max-w-md"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default DevelopmentProcess;
import React from "react";

const HomeCleaningDevelopmentProcess = () => {
  const steps = [
    {
      title: "1. Gathering Requirements",
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-gathering-requirements.webp",
      desc: "The first step is understanding your house cleaning business needs and goals. We work closely with you to gather detailed requirements,ensuring the app is tailored to your objectives. This phase includes discussionsabout features, design preferences, and functionality to align the app with yourvision, creating a seamless experience for both homeowners and cleaning professionals. ",
    },
    {
      title: "2. Design & Development",
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-design-and-development.webp",
      desc: "Our skilled team of designers and developers collaborate to create a visually appealing and user-friendly interface while building the app’s  robust functionality. The design is optimized for ease of use, and the app is developed with secure, scalable code to ensure high performance across Android,iOS, and web platforms.",
    },
    {
      title: "3. Collect Third-Party Accounts",
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-collect-third-party-accounts.webp",
      desc: "Next, we integrate essential third-party services, such as  payment gateways, messaging platforms, and real-time tracking. Configuring these  accounts ensures smooth app functionality, secure transactions, and up-to-date  service status, guaranteeing a reliable and efficient user experience for   customers and cleaners alike.",
    },
    {
      title: "4. Test and Launch",
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-test-and-launch.webp",
      desc: "Before the official launch, your app undergoes comprehensive   testing to ensure everything is functioning as expected. We check for bugs,  compatibility, and performance, making any necessary adjustments. Once the app is thoroughly tested and refined, we launch it on both the Play Store and AppStore, bringing your Uber-like house cleaning service platform to life. ",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== TOP HEADING ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-[#55D7FF] 
                          text-[#009ACA] px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[#55D7FF] rounded-full"></span>
            Development Process
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Our Streamlined{" "}
            <span className="text-[#009ACA]">Development Process</span>
          </h2>

          <p className="text-gray-600">
            We follow a systematic process to deliver your Uber for House Cleaning App,
            ensuring a smooth and successful experience from start to finish.
          </p>

        </div>

        {/* ===== FLIP CARDS ===== */}
        <div className="grid md:grid-cols-2 gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="group perspective"
            >
              <div
                className="relative h-[350px] w-full 
      transition-transform duration-700 
      transform-style preserve-3d 
      group-hover:rotate-y-180"
              >

                {/* FRONT SIDE */}
                <div className="absolute inset-0 bg-[#EAF7FB] 
        rounded-3xl p-8 
        border border-[#55D7FF] 
        backface-hidden">

                  <h3 className="text-2xl font-semibold text-[#009ACA] mb-6 text-center">
                    {step.title}
                  </h3>

                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[220px] object-contain"
                  />
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 bg-white 
        rounded-3xl p-8 
        border border-[#55D7FF] 
        rotate-y-180 
        backface-hidden 
        items-center justify-center text-center">

                  <h3 className="text-2xl font-semibold text-[#009ACA] mb-6">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* CUSTOM STYLES */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default HomeCleaningDevelopmentProcess;
import React from "react";

const DevelopmentProcess = () => {
  const steps = [
    {
      title: "1. Gathering Requirements",
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-gathering-requirements.webp",
      desc: "The first step is to understand your business needs and objectives. We work closely with you to gather detailed requirements, ensuring we tailor the app to your specific goals. This phase includes discussing features, design preferences, and overall functionality, making sure every aspect aligns with your vision.",
    },
    {
      title: "2. Design & Development",
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-design-and-development.webp",
      desc: "Our skilled developers and designers work together to bring your app to life. In this stage, we focus on creating a user-friendly interface and developing robust functionality. The design is carefully crafted to enhance usability, while the app is developed with scalable and secure code, ensuring performance and reliability.",
    },
    {
      title: "3. Collect Third-Party Accounts",
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-collect-third-party-accounts.webp",
      desc: "Next, we integrate any necessary third-party services such as payment gateways, messaging platforms, or location services. Collecting and configuring these accounts ensures the app functions seamlessly, offering a smooth user experience. This step is critical for enabling essential features like secure transactions and real-time notifications.",
    },
    {
      title: "4. Test and Launch",
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-test-and-launch.webp",
      desc: "Before your app goes live, it undergoes rigorous testing to ensure everything works perfectly. We test for bugs, compatibility, and performance, making adjustments as necessary. Once we’re confident the app is ready, we launch it on the Play Store and App Store, bringing your on-demand app development service to life for users to enjoy. ",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== TOP HEADING ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-[#55D7FF] 
                          text-[#009ACA] px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#921E4B] to-[#4A011D]  rounded-full"></span>
            Development Process
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
           Our Seamless {" "}
            <span className="bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text">Alcohol Delivery App Development Process</span>
          </h2>

          <p className="text-gray-600">
       At White Label Fox, we make launching your alcohol delivery business fast and easy. Our development process is designed to ensure quick deployment and a smooth experience from start to finish. Here’s how we bring your app to life:
          </p>

        </div>

        {/* ===== FLIP CARDS ===== */}
        <div className="grid md:grid-cols-2 gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`group perspective 
              ${index === 1 || index === 3 ? "md:mt-12" : ""}`}
            >
              <div className="relative h-[350px] w-full 
                              transition-transform duration-700 
                              transform-style preserve-3d 
                              group-hover:rotate-y-180">

                {/* FRONT SIDE */}
                <div className="absolute inset-0 bg-[#FFEFF4] 
                                rounded-3xl p-8 
                                border border-[#4A011D] 
                                backface-hidden">

                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text mb-6 text-center">
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
                                border border-[#4A011D] 
                                rotate-y-180 
                                backface-hidden 
                                 items-center justify-center text-center">

                                     <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text mb-6">
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
      <style>{`
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

export default DevelopmentProcess;
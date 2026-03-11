import React from "react";

const features = [
  {
    icon: "/icons/expert.png",
    title: "Expert-Driven Approach",
    desc: "Our team consists of skilled professionals with years of hands-on experience in crafting digital solutions.",
  },
  {
    icon: "/icons/innovation.png",
    title: "Innovative Mindset",
    desc: "We embrace the latest technologies and trends to ensure your project stays ahead of the curve.",
  },
  {
    icon: "/icons/client.png",
    title: "Client-Centric Focus",
    desc: "Your success is our priority. We work closely with clients to deliver customized solutions that fit their needs.",
  },
  {
    icon: "/icons/support.png",
    title: "End-to-End Support",
    desc: "From brainstorming ideas to post-launch support, we guide you through every stage of development.",
  },
  {
    icon: "/icons/scalable.png",
    title: "Scalability & Flexibility",
    desc: "Whether a startup or an enterprise, our solutions are designed to grow with your business.",
  },
  {
    icon: "/icons/culture.png",
    title: "Passionate Culture",
    desc: "Beyond work, we foster a team culture that values creativity, teamwork, and fun—because a happy team creates great results!",
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            What Sets Us Apart
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-4">
          A Team <span className="text-orange-400">That Makes </span>the Difference
        </h2>

        {/* Paragraph */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Our strength lies in expertise, collaboration, and a passion for innovation.
          We don’t just build projects; we create experiences, ensuring quality,
          efficiency, and long-term success. Here’s what makes us different:
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition"
            >
              
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-600">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhatSetsUsApart;
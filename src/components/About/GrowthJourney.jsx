import React, { useState } from "react";

const timelineData = [
  {
    year: "2025",
    desc: "Established White Label Fox as a global leader by advancing DevOps-driven, secure, ready-to-launch white-label platforms.",
    images: [
      "https://whitelabelfox.com/assets/images/about-us/2025.webp",
    ],
  },
  {
    year: "2024",
    desc: "Expanded our product ecosystem and strengthened partnerships with global startups.",
    images: [
      "https://whitelabelfox.com/assets/images/about-us/2024.webp",
    ],
  },
  {
    year: "2023",
    desc: "Scaled operations and introduced multiple on-demand solutions for enterprises.",
    images: ["https://whitelabelfox.com/assets/images/about-us/2023.webp",],
  },
  {
    year: "2022",
    desc: "Reached major milestones with successful enterprise deployments.",
    images: ["https://whitelabelfox.com/assets/images/about-us/2022.webp",],
  },
  {
    year: "2021",
    desc: "Introduced new digital product development services.",
    images: ["https://whitelabelfox.com/assets/images/about-us/2021.webp",],
  },
  {
    year: "2020",
    desc: "Focused on global market expansion.",
    images: ["https://whitelabelfox.com/assets/images/about-us/2020.webp",],
  },
  {
    year: "2019",
    desc: "Strengthened the development team and launched new platforms.",
    images: ["https://whitelabelfox.com/assets/images/about-us/2019.webp",],
  },
  {
    year: "2018",
    desc: "The journey started with a vision to build scalable digital solutions.",
    images: ["https://whitelabelfox.com/assets/images/about-us/2018.webp",],
  },
];

const GrowthJourney = () => {
  const [active, setActive] = useState(0);

  const current = timelineData[active];

  return (
    <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-24"
    style={{backgroundImage: "url(https://whitelabelfox.com/assets/images/about-us/about-us-page-our-journey-bg-image.webp)",
backgroundRepeat: "no-repeat"

    }}
    
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-[-100px]">
          <span className="border border-white px-4 py-1 rounded-full text-sm">
            Our Success Story
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Our <span className="text-orange-400">Growth Journey</span>
          </h2>

          <p className="text-gray-200 mt-3 max-w-xl">
            Discover our key milestones and achievements as we evolve into a
            leading digital solutions provider.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Text */}
          <div>
            <h1 className="text-9xl font-bold mb-6">{current.year}</h1>
            <p className="text-gray-200 mb-6">{current.desc}</p>
          </div>

        

    {/* Images */}
<div className="flex justify-center md:justify-end ">

  <img
    src={current.images[0]}
    alt=""
    className="rounded-2xl shadow-2xl w-[420px] md:w-[520px] h-auto object-cover"
  />

</div>

        </div>



        {/* Timeline */}
        <div className="mt-12 relative">

          <div className="h-[2px] bg-gray-400 w-full absolute top-3"></div>

          <div className="flex justify-between relative">
            {timelineData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-6 h-6 rounded-full border-4 ${
                  active === index
                    ? "bg-orange-400 border-orange-400"
                    : "bg-white border-gray-400"
                }`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GrowthJourney;
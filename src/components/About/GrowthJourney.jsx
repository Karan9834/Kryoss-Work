import React, { useState, useEffect } from "react";

const timelineData = [
  {
    year: "2025",
    badge: "Our Success Story",
    title: "Global Leadership",
    desc: "Established KryossOne as a global leader by advancing DevOps-driven, secure, and ready-to-launch white-label platforms across Europe and Asia.",
    image: "/images/company/companyabout/growth1.png",
  },
  {
    year: "2024",
    badge: "Scaling New Heights",
    title: "Ecosystem Expansion",
    desc: "Expanded our product ecosystem and strengthened partnerships with global startups, reaching a milestone of 100+ active enterprise clients.",
    image: "/images/company/companyabout/growth2.png",
  },
  {
    year: "2023",
    badge: "Innovation Phase",
    title: "AI Integration",
    desc: "Scaled operations and introduced multiple AI-driven on-demand solutions, streamlining business workflows for modern enterprises.",
    image: "/images/company/companyabout/growth3.png",
  },
  {
    year: "2022",
    badge: "Market Penetration",
    title: "Enterprise Solutions",
    desc: "Reached major milestones with successful enterprise deployments in the logistics and fintech sectors.",
    image: "/images/company/companyabout/growth4.png",
  },
  {
    year: "2021",
    badge: "The Beginning",
    title: "Visionary Foundation",
    desc: "The journey started with a vision to build scalable digital solutions.",
    image: "/images/company/companyabout/growth5.png",
  },
];

const GrowthJourney = () => {
  const [active, setActive] = useState(0);

  // 🔥 AUTO CHANGE EVERY 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % timelineData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = timelineData[active];

  return (
    <section
      className="relative w-full lg:h-[calc(100vh-80px)] min-h-[700px] flex items-center bg-[#2d004b] py-10 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://whitelabelfox.com/assets/images/about-us/about-us-page-our-journey-bg-image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-purple-900/40 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center">

        {/* HEADER */}
        <div className="mb-6">
          <span className="inline-block border border-white/40 px-3 py-1 rounded-full text-xs font-medium text-white uppercase tracking-widest mb-2">
            {current.badge}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Our <span className="text-orange-400 font-bold">Growth Journey</span>
          </h2>

          <p className="text-gray-300 mt-3 max-w-lg text-base md:text-lg leading-relaxed">
            Discover our key milestones and achievements as we evolve into a leading digital solutions provider.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="relative flex flex-col justify-center">

            {/* YEAR */}
            <h1 className="text-[80px] md:text-[110px] lg:text-[140px] font-extrabold text-white/10 leading-none -mb-4">
              {current.year}
            </h1>

            {/* CONTENT */}
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {current.title}
              </h3>

              <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-md border-l-4 border-orange-400 pl-4">
                {current.desc}
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end md:-mt-32 mt-10">
            <div className="relative p-2 bg-white shadow-2xl rounded transform rotate-2 max-w-[500px]">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 border border-white/20"></div>

              <div className="overflow-hidden rounded-sm">
                <img
                  src={current.image}
                  alt={current.year}
                  className="w-full h-auto max-h-[500px] object-contain"
                />
              </div>

              <div className="pt-2 text-center">
                <p className="text-gray-800 text-sm font-semibold">
                  KryossOne Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mt-2 relative">
          <div className="h-[2px] bg-white/20 w-full absolute top-1/2"></div>

          <div
            className="h-[3px] bg-orange-400 absolute top-1/2 transition-all duration-500"
            style={{
              width: `${(active / (timelineData.length - 1)) * 100}%`,
            }}
          ></div>

          <div className="flex justify-between relative z-10">
            {timelineData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-6 h-6 rounded-full ${active === index ? "bg-orange-400 scale-125" : "bg-gray-300"
                  } transition`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthJourney;
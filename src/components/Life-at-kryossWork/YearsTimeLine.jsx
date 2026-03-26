import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Images
import img2025 from "../../assets/Life/companylife-at-kryosswork/image1.png";
import img2024 from "../../assets/Life/companylife-at-kryosswork/image2.png";
import img2023 from "../../assets/Life/companylife-at-kryosswork/image3.png";

const years = [
  {
    year: "2025",
    img: img2025,
    bg: "from-yellow-200 to-orange-200",
    title: "Latest Milestones",
    description: "Achieved new heights with innovative solutions",
  },
  {
    year: "2024",
    img: img2024,
    bg: "from-green-200 to-emerald-300",
    title: "Growth & Expansion",
    description: "Expanded our team and client base globally",
  },
  {
    year: "2023",
    img: img2023,
    bg: "from-purple-200 to-pink-200",
    title: "Foundation Years",
    description: "Built strong foundations for future success",
  },
];

const YearsTimeline = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".year-card");

      // 🔥 FIXED: each card gets its own scroll range
      cards.forEach((card, index) => {
        if (index === 0) return;

        gsap.fromTo(
          card,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: () => `top -${index * window.innerHeight}`,
              end: () => `top -${(index + 1) * window.innerHeight}`,
              scrub: true,
            },
          }
        );
      });

      // 🔥 Pin section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=" + window.innerHeight * years.length,
        pin: true,
        scrub: true,
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">

        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full text-sm bg-white/80 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse"></span>
            Our Journey
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Celebrating{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text">
            Our Journey
          </span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          A journey full of achievements, memories, and teamwork that continues to inspire
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full mt-6"></div>
      </div>

      {/* TIMELINE */}
      <div
        ref={sectionRef}
        className="relative h-screen max-w-7xl mx-auto"
      >
        {years.map((item, index) => (
          <div
            key={index}
            className="year-card absolute top-0 left-0 w-full h-screen flex items-center justify-center px-6"
            style={{ zIndex: index + 1 }}
          >
            <div className={`relative bg-gradient-to-r ${item.bg} rounded-[40px] p-6 md:p-10 shadow-2xl max-w-6xl w-full h-[75vh] md:h-[80vh]`}>

              {/* YEAR BADGE */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-lg font-bold text-gray-800">{item.year}</span>
              </div>

              {/* IMAGE */}
              <img
                src={item.img}
                alt={`Company ${item.year}`}
                className="w-full rounded-2xl h-[60vh] md:h-[65vh] object-cover shadow-lg"
              />

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="text-center mt-8 pt-8">
        <p className="text-sm text-gray-400">
          Scroll to explore our journey through the years
        </p>

        <div className="flex justify-center gap-2 mt-3">
          {years.map((_, index) => (
            <div key={index} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YearsTimeline;
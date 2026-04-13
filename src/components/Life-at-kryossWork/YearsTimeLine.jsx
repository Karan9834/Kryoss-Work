import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Images
import journey1 from "../../assets/Life/companylife-at-kryosswork/journey1.png";
import journey2 from "../../assets/Life/companylife-at-kryosswork/journey2.png";
import journey3 from "../../assets/Life/companylife-at-kryosswork/journey3.png";
import journey4 from "../../assets/Life/companylife-at-kryosswork/journey4.png";
import journey5 from "../../assets/Life/companylife-at-kryosswork/journey5.png";
import journey6 from "../../assets/Life/companylife-at-kryosswork/journey6.png";

const years = [
  {
    year: "2025",
    img: journey1,
    bg: "from-yellow-200 to-orange-200",
  },
  {
    year: "2024",
    img: journey2,
    bg: "from-green-200 to-emerald-300",
  },
  {
    year: "2023",
    img: journey3,
    bg: "from-purple-200 to-pink-200",
  },
  {
    year: "2022",
    img: journey4,
    bg: "from-blue-200 to-indigo-200",
  },
  {
    year: "2021",
    img: journey5,
    bg: "from-orange-200 to-red-200",
  },
  {
    year: "2020",
    img: journey6,
    bg: "from-teal-200 to-cyan-200",
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
        end: "+=" + window.innerHeight * (years.length + 1), // Increased buffer to prevent last card jumping
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
            className="year-card absolute top-0 left-0 w-full h-screen flex items-center justify-center px-4 md:px-6"
            style={{ zIndex: index + 1 }}
          >
            <div className={`relative bg-gradient-to-r ${item.bg} rounded-[30px] md:rounded-[40px] p-4 md:p-10 shadow-2xl max-w-6xl w-full h-[50vh] md:h-[80vh]`}>
              
              {/* YEAR BADGE */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 shadow-lg z-20">
                <span className="text-sm md:text-lg font-bold text-gray-800">{item.year}</span>
              </div>

              {/* IMAGE */}
              <div className="w-full h-full relative z-10">
                <img
                  src={item.img}
                  alt={`Company ${item.year}`}
                  className="w-full h-full object-contain rounded-xl md:rounded-2xl"
                />
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
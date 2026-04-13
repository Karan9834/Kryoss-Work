import React, { useEffect, useRef } from "react";
import sol1 from "../../assets/Hotel-Management/sol1.png";
import sol2 from "../../assets/Hotel-Management/sol2.png";
import sol3 from "../../assets/Hotel-Management/sol3.png";
import sol4 from "../../assets/Hotel-Management/sol4.png";

const timeline = [
  {
    title: "Discover & Analyze",
    desc: "We deeply understand your hotel operations, workflows, and challenges to design a solution that perfectly fits your business needs.",
    image: sol1,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "System Setup",
    desc: "Our platform is configured to match your processes including bookings, room allocation, and staff coordination.",
    image: sol2,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Seamless Integration",
    desc: "We integrate payment systems, third-party tools, and APIs to ensure everything works together effortlessly.",
    image: sol3,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Launch & Optimize",
    desc: "Go live with confidence and continuously improve performance using real-time analytics and insights.",
    image: sol4,
    color: "from-green-500 to-lime-500",
  },
];

const TimelineSection = () => {
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = lineRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / rect.height),
      );

      section.style.setProperty("--fill", `${progress * 100}%`);

      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
          setTimeout(() => {
            el.classList.add("opacity-100", "translate-y-0");
          }, i * 150);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-cyan-50 via-white to-emerald-50 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading - Updated Typography */}
        <div className="text-center mb-14">
          {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-3 bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Our Solution Process
          </h2>

          {/* Description - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
          <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 max-w-xl mx-auto">
            Designed for speed, clarity, and seamless execution across every
            stage of your hotel operations
          </p>

          {/* Section Underline - width: 64px, height: 2px */}
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full opacity-70"></div>
          </div>
        </div>

        <div ref={lineRef} className="relative">
          {/* LINE BASE */}
          <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gray-200 -translate-x-1/2"></div>

          {/* LINE FILL */}
          <div
            className="absolute left-1/2 top-0 w-[3px] bg-gradient-to-b from-cyan-500 to-emerald-500 -translate-x-1/2 transition-all duration-300"
            style={{ height: "var(--fill)" }}
          />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="grid md:grid-cols-2 gap-8 items-center opacity-0 translate-y-10 transition-all duration-700 relative"
                >
                  {/* CONTENT */}
                  <div className={isLeft ? "" : "md:order-2"}>
                    <div
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        e.currentTarget.style.setProperty("--x", `${x}px`);
                        e.currentTarget.style.setProperty("--y", `${y}px`);
                      }}
                      className={`relative p-5 rounded-xl text-white overflow-hidden shadow-md hover:shadow-xl transition bg-gradient-to-br ${item.color}`}
                    >
                      {/* CURSOR GLOW */}
                      <div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition"
                        style={{
                          background:
                            "radial-gradient(250px circle at var(--x) var(--y), rgba(255,255,255,0.25), transparent 40%)",
                        }}
                      />

                      {/* Card Title - Updated: text-[22px] md:text-[26px] font-bold leading-[1.3] */}
                      <h3 className="text-[22px] md:text-[26px] font-bold leading-[1.3] mb-2 relative z-10">
                        {item.title}
                      </h3>

                      {/* Card Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                      <p className="text-[14px] md:text-[15px] font-normal leading-[1.6] text-white/90 relative z-10">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className={isLeft ? "" : "md:order-1"}>
                    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-[180px] object-fit transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* DOT */}
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-300/50"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
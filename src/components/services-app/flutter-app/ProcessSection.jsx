import React, { useEffect, useRef } from "react";
import { Code, Palette, Server, ShieldCheck, Rocket, Settings } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Settings size={18} />,
    title: "Requirement Strategy",
    desc: "Understanding project goals and defining the roadmap before development.",
  },
  {
    id: "02",
    icon: <Palette size={18} />,
    title: "UI / UX Design",
    desc: "Designing intuitive interfaces and seamless user journeys.",
  },
  {
    id: "03",
    icon: <Code size={18} />,
    title: "Flutter Development",
    desc: "Building scalable cross-platform applications using Flutter.",
  },
  {
    id: "04",
    icon: <Server size={18} />,
    title: "API Integration",
    desc: "Connecting backend systems and third-party services.",
  },
  {
    id: "05",
    icon: <ShieldCheck size={18} />,
    title: "Quality Testing",
    desc: "Ensuring performance, reliability and security.",
  },
  {
    id: "06",
    icon: <Rocket size={18} />,
    title: "App Deployment",
    desc: "Publishing applications to stores with compliance.",
  },
  {
    id: "07",
    icon: <Settings size={18} />,
    title: "Maintenance",
    desc: "Continuous updates and long-term support.",
  },
];

export default function FlutterProcessSection() {

  const sliderRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {

    const slider = sliderRef.current;
    const timeline = timelineRef.current;

    let animation;

    const startAnimation = () => {

      animation = setInterval(() => {

        slider.scrollLeft += 320;
        timeline.scrollLeft += 320;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
          timeline.scrollLeft = 0;
        }

      }, 2500);

    };

    startAnimation();

    slider.addEventListener("mouseenter", () => clearInterval(animation));
    slider.addEventListener("mouseleave", startAnimation);

    return () => clearInterval(animation);

  }, []);

  const infiniteSteps = [...steps, ...steps];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <div>

          <span className="px-4 py-1 text-sm rounded-full bg-orange-100 text-orange-600 font-medium">
            Our Development Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6 leading-snug">

            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Strategic White Label Flutter
            </span>

            <br />

            App Development Process We Follow

          </h2>

          <p className="text-gray-600 mt-6 max-w-lg">
            Our Flutter development workflow focuses on speed, clarity and
            scalable architecture from planning to deployment.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-orange-50 rounded-3xl p-10 overflow-hidden">

          {/* TIMELINE */}

          <div className="relative mb-10">

            <div className="absolute top-4 left-0 w-full h-[3px] bg-orange-200"></div>

            <div
              ref={timelineRef}
              className="flex gap-20 overflow-x-scroll no-scrollbar"
            >

              {infiniteSteps.map((step, i) => (

                <div
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-semibold
                  bg-gradient-to-r from-orange-500 to-orange-600
                  text-white shadow-lg"
                >
                  {step.id}
                </div>

              ))}

            </div>

          </div>


          {/* SLIDER */}

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-scroll no-scrollbar"
          >

            {infiniteSteps.map((step, i) => (

              <div
                key={i}
                className="min-w-[300px] p-6 rounded-2xl
                backdrop-blur-lg bg-white/60
                border border-white/40
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-2"
              >

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-9 h-9 flex items-center justify-center
                  rounded-lg bg-orange-100 text-orange-600">
                    {step.icon}
                  </div>

                  <span className="text-xs font-semibold text-orange-500">
                    STEP {step.id}
                  </span>

                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
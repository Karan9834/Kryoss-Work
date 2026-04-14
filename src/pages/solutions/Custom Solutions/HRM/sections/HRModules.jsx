import React, { useState, useRef, useEffect } from "react";
import img1 from "../../../../../assets/human-resources/feature1.png";
import img2 from "../../../../../assets/human-resources/feature2.png";
import img3 from "../../../../../assets/human-resources/feature3.png";
import img4 from "../../../../../assets/human-resources/feature4.png";

const modules = [
  {
    id: "01",
    title: "HR Administrative Tasks",
    points: [
      "Employee database",
      "Employee profiles",
      "Employment life cycle transactions",
      "Payroll management",
      "Employee benefits",
      "Reporting and analytics",
    ],
    img: img1,
  },
  {
    id: "02",
    title: "HR Service Management",
    points: [
      "Corporate policies and procedures",
      "Employee handbook",
      "Organizational chart",
      "Employee knowledge base",
      "Employee self-service portal",
      "Virtual assistants and chatbots",
    ],
    img: img2,
  },
  {
    id: "03",
    title: "Talent Management",
    points: [
      "Recruiting",
      "Onboarding",
      "Performance management",
      "Competency management",
      "Career planning",
      "Workforce planning",
    ],
    img: img3,
  },
  {
    id: "04",
    title: "Labor Management",
    points: [
      "Absence management",
      "Worktime tracking",
      "Time and attendance",
      "Employee scheduling",
      "Task tracking",
      "Workforce analytics",
    ],
    img: img4,
  },
];

const ChevronIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6l4 4 4-4" />
  </svg>
);

const HRModules = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const [rightHeight, setRightHeight] = useState(0);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  const activeModule = openIdx !== null ? modules[openIdx] : modules[0];
  // Using orange gradient color that matches "Functional Modules" heading
  const themeColor = "#E85D2F";

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  useEffect(() => {
    const updateHeight = () => {
      if (rightRef.current) {
        const height = rightRef.current.offsetHeight;
        setRightHeight(height);
        if (imageRef.current) {
          imageRef.current.style.height = `${height}px`;
          imageRef.current.style.width = "auto";
        }
      }
    };

    updateHeight();
    const timer = setTimeout(updateHeight, 300);
    window.addEventListener('resize', updateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeight);
    };
  }, [openIdx]);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="py-16 px-6 bg-gradient-to-br from-orange-50 via-orange-100/30 to-amber-50"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@400;500&display=swap');`}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1 text-xs text-orange-700 mb-4">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: themeColor }}
            />
            HR Software Suite
          </div>
          <h2
            className="text-slate-900 mb-2 text-[30px] md:text-[36px] font-bold leading-[1.2]"

          >
            Main HR Software{" "}
            <span style={{ color: themeColor }}>Functional Modules</span>
          </h2>
          <div
            className="w-8 h-0.5 rounded-full mb-3 transition-colors duration-300"
            style={{ background: themeColor }}
          />
          <p className="text-slate-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Comprehensive HR solutions built for modern businesses — from payroll to talent.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* LEFT — Image with themed border and stats */}
          <div className="md:w-5/12 flex flex-col gap-3">
            {/* Image with subtle themed border */}
            <div
              className="rounded-2xl overflow-hidden flex justify-center p-1"
              style={{
                border: `2px solid ${themeColor}20`,
                background: `linear-gradient(135deg, ${themeColor}08, white)`
              }}
            >
              <img
                ref={imageRef}
                src={activeModule.img}
                alt={activeModule.title}
                className="object-contain transition-all duration-300 rounded-xl"
                style={{
                  height: rightHeight > 0 ? `${rightHeight}px` : 'auto',
                  width: 'auto',
                  maxWidth: '100%'
                }}
              />
            </div>

            {/* Stats Row with theme color */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "4", label: "Core Modules" },
                { num: "24+", label: "Features" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="rounded-xl border px-4 py-3 transition-all duration-300 hover:shadow-md"
                  style={{
                    borderColor: `${themeColor}30`,
                    background: `linear-gradient(135deg, white, ${themeColor}04)`,
                  }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: themeColor,
                    }}
                  >
                    {num}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Accordions with theme color */}
          <div ref={rightRef} className="md:w-7/12 flex flex-col gap-2">
            {modules.map((module, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border overflow-hidden transition-all duration-300 bg-white"
                  style={{
                    borderColor: isOpen ? themeColor : "#fed7aa",
                    boxShadow: isOpen ? `0 0 0 3px ${themeColor}20` : "none",
                  }}
                >
                  {/* Header Button */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-orange-50 transition-colors duration-200"
                  >
                    {/* Number badge */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        background: isOpen ? themeColor : "#fff0e6",
                        color: isOpen ? "#fff" : themeColor,
                      }}
                    >
                      {module.id}
                    </div>

                    {/* Title */}
                    <span className="flex-1 text-sm font-medium text-slate-800">
                      {module.title}
                    </span>

                    {/* Chevron */}
                    <span
                      className="transition-transform duration-250 flex items-center"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isOpen ? themeColor : "#ea9a5e",
                      }}
                    >
                      <ChevronIcon />
                    </span>
                  </button>

                  {/* Expandable Content */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? "200px" : "0px" }}
                  >
                    <div className="px-4 pb-4 flex flex-wrap gap-2">
                      {module.points.map((point, pi) => (
                        <span
                          key={pi}
                          className="text-xs px-3 py-1.5 rounded-full border"
                          style={{
                            background: `${themeColor}0D`,
                            borderColor: `${themeColor}30`,
                            color: themeColor,
                          }}
                        >
                          {point}
                        </span>
                      ))}
                    </div>
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

export default HRModules;
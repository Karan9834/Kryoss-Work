import React from "react";

const TechStack = () => {
  const technologies = [
    { name: "iOS", icon: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
    { name: "Android", icon: "https://cdn-icons-png.flaticon.com/512/226/226770.png" },
    { name: "Google Maps", icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" },
    { name: "Android Studio", icon: "https://cdn-icons-png.flaticon.com/512/226/226770.png" },
    { name: "Flutter", icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
    { name: "Digital Ocean", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
    { name: "BitBucket", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png" },
    { name: "Swift", icon: "https://cdn-icons-png.flaticon.com/512/919/919841.png" },
    { name: "Laravel", icon: "https://cdn-icons-png.flaticon.com/512/919/919830.png" },
    { name: "PHP", icon: "https://cdn-icons-png.flaticon.com/512/919/919830.png" },
    { name: "Firebase", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "AWS", icon: "https://cdn-icons-png.flaticon.com/512/919/919828.png" },
    { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
    { name: "Bootstrap", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    { name: "CSS 3", icon: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
    { name: "HTML 5", icon: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
  ];

  return (
    <section
      className="py-20 text-white"
      style={{
        background:
          "linear-gradient(107.57deg, #5CA3FF 0%, #9673FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-white/40 
                          px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Tech-Stack
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Our Technical Architecture for High-Capacity Digital Ecosystems
          </h2>

          <p className="text-white/90 text-lg">
            We utilize advanced, agile, and resilient technologies to engineer
            professional-grade mobile interfaces, web modules, and distributed 
            backend architectures.
          </p>

        </div>

        {/* ===== TECH BUTTONS ===== */}
        <div className="flex flex-wrap justify-center gap-6">

          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 
                         bg-white text-black 
                         px-6 py-3 rounded-full 
                         shadow-md
                         hover:scale-105 
                         transition duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 object-contain"
              />
              <span className="font-medium">
                {tech.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TechStack;
import React from "react";
import {
  FaApple,
  FaAndroid,
  FaGoogle,
  FaAws,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSwift
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiBitbucket,
  SiLaravel,
  SiMysql,
  SiDigitalocean
} from "react-icons/si";

const techStack = [
  { name: "iOS", icon: <FaApple /> },
  { name: "Android", icon: <FaAndroid /> },
  { name: "Google Maps", icon: <FaGoogle /> },
  { name: "Android Studio", icon: <FaAndroid /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Digital Ocean", icon: <SiDigitalocean /> },
  { name: "BitBucket", icon: <SiBitbucket /> },
  { name: "Swift", icon: <FaSwift /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "CSS 3", icon: <FaCss3Alt /> },
  { name: "HTML 5", icon: <FaHtml5 /> }
];

const TechStackSection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-[#5f9cff] to-[#8a5fff] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1 rounded-full text-sm mb-6 bg-white/10 backdrop-blur-md">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Tech-Stack
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Technologies We Use to Build Scalable Digital Solutions
        </h2>

        <p className="text-white/90 max-w-3xl mx-auto mb-16">
          We use modern, scalable, and secure technologies to develop high-performance 
          mobile applications, web platforms, and backend systems. Our stack ensures 
          reliability, fast deployment, seamless integrations, and long-term scalability.
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap justify-center gap-6">

          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-full shadow-md hover:scale-105 transition duration-300 cursor-pointer"
            >
              <span className="text-xl text-[#5f9cff]">
                {tech.icon}
              </span>
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

export default TechStackSection;
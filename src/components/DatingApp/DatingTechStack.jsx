import React from "react";
import {
  FaApple,
  FaAndroid,
  FaJava,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiFlutter,
  SiLaravel,
  SiPhp,
  SiFirebase,
  SiMysql,
  SiSwift,
  SiGooglemaps,
  SiDigitalocean,
  SiBitbucket,
} from "react-icons/si";

const tech = [
  { name: "iOS", icon: <FaApple /> },
  { name: "Android", icon: <FaAndroid /> },
  { name: "Google Maps", icon: <SiGooglemaps /> },
  { name: "Android Studio", icon: <FaAndroid /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Digital Ocean", icon: <SiDigitalocean /> },
  { name: "BitBucket", icon: <SiBitbucket /> },
  { name: "Swift", icon: <SiSwift /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "100 MS", icon: <FaAws /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "CSS 3", icon: <FaCss3Alt /> },
  { name: "HTML 5", icon: <FaHtml5 /> },
];

export default function TechStack() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="mb-4">
          <span className="px-4 py-1 rounded-full border text-sm">
            Tech-Stack
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Technologies We Use to Build Scalable Digital Solutions
        </h2>

        {/* Description */}
        <p className="text-white/80 max-w-3xl mx-auto mb-10">
          We use modern, scalable, and secure technologies to develop
          high-performance mobile applications, web platforms, and backend
          systems. Our technology stack ensures reliability and long-term
          scalability.
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap justify-center gap-4">

          {tech.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white text-gray-800 px-5 py-2 rounded-full shadow-sm"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
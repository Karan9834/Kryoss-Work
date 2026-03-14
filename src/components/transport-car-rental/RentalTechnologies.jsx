import React from "react";
import {
  FaApple,
  FaAndroid,
  FaGoogle,
  FaJava,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaAws,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";

import {
  SiFirebase,
  SiFlutter,
  SiMysql,
  SiBitbucket,
  SiSwift,
  SiDigitalocean,
} from "react-icons/si";

const tech = [
  { name: "iOS", icon: <FaApple /> },
  { name: "Android", icon: <FaAndroid /> },
  { name: "Google Maps", icon: <FaGoogle /> },
  { name: "Android Studio", icon: <FaAndroid /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Digital Ocean", icon: <SiDigitalocean /> },

  { name: "BitBucket", icon: <SiBitbucket /> },
  { name: "Swift", icon: <SiSwift /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Java", icon: <FaJava /> },

  { name: "MySQL", icon: <SiMysql /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "CSS 3", icon: <FaCss3Alt /> },
  { name: "HTML 5", icon: <FaHtml5 /> },
];

const TechStackSection = () => {
  return (
    <section
      className="
        py-20
        text-white
        bg-gradient-to-r
        from-blue-500
        via-indigo-500
        to-purple-500
      "
    >
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* pill */}

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full bg-white/20 backdrop-blur">
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            Tech-Stack
          </div>
        </div>

        {/* title */}

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technologies We Use to Build Scalable Digital Solutions
        </h2>

        <p className="max-w-3xl mx-auto text-white/90 mb-10">
          We use modern, scalable, and secure technologies to develop high-performance
          mobile applications, web platforms, and backend systems.
        </p>


        {/* pills */}

        <div className="flex flex-wrap justify-center gap-4">

          {tech.map((t, i) => (
            <div
              key={i}
              className="
                flex
                items-center
                gap-2
                bg-white
                text-gray-800
                px-5
                py-2
                rounded-full
                shadow
                text-sm
                font-medium
                hover:scale-105
                transition
              "
            >
              <span className="text-lg">
                {t.icon}
              </span>

              {t.name}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
import React from "react";

const techStack = [
  { name: "iOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Google Maps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Digital Ocean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },

  { name: "BitBucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
  { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },

  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-500 to-purple-500 text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center border border-white/40 rounded-full px-4 py-1 text-sm mb-6">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          Tech-Stack
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-6">
          Technologies We Use to Build Scalable Digital Solutions
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-white/90 mb-14 text-sm leading-relaxed">
          We use modern, scalable, and secure technologies to develop high-performance mobile
          applications, web platforms, and backend systems. Our technology stack is carefully
          selected to ensure reliability, fast deployment, seamless integrations, and long-term scalability.
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap justify-center gap-4">

          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
            >
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TechStackSection;
import React from "react";

const techStack = [
  { name: "iOS", icon: "https://cdn.simpleicons.org/apple/000000" },
  { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84" },
  { name: "Google Maps", icon: "https://cdn.simpleicons.org/googlemaps/EA4335" },
  { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "Digital Ocean", icon: "https://cdn.simpleicons.org/digitalocean/0080FF" },
  { name: "Bitbucket", icon: "https://cdn.simpleicons.org/bitbucket/0052CC" },
  { name: "Swift", icon: "https://cdn.simpleicons.org/swift/F05138" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "100ms", icon: "https://cdn.simpleicons.org/webrtc/FF0000" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/232F3E" },
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" }
];

export default function TechStack() {
  return (
    <section
      className="py-24 text-white"
      style={{
        background:
          "linear-gradient(90deg,#5ea3ff,#7b8bff,#9c6bff)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="border border-white/40 px-4 py-1 rounded-full text-sm">
          Tech-Stack
        </span>

        {/* Title */}
        <h2 className="text-4xl font-semibold mt-6 mb-6">
          Technologies We Use to Build Scalable Digital Solutions
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-white/80 mb-14">
          We use modern, scalable, and secure technologies to develop high-performance
          mobile applications, web platforms, and backend systems. Our technology stack
          is carefully selected to ensure reliability, fast deployment, seamless
          integrations, and long-term scalability.
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap justify-center gap-5">

          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-full shadow-sm"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6"
              />
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
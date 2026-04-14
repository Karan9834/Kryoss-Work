// src/components/Common/TechStack.jsx
import React from "react";

// Master list of all technologies with their icons
const techLibrary = {
  // Programming Languages
  javascript: { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  typescript: { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  python: { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  java: { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
  c: { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC" },
  cpp: { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
  csharp: { name: "C#", icon: "https://cdn.simpleicons.org/csharp/239120" },
  php: { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  ruby: { name: "Ruby", icon: "https://cdn.simpleicons.org/ruby/CC342D" },
  swift: { name: "Swift", icon: "https://cdn.simpleicons.org/swift/F05138" },
  kotlin: { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
  go: { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
  rust: { name: "Rust", icon: "https://cdn.simpleicons.org/rust/000000" },

  // Frontend
  react: { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  vue: { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  angular: { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
  nextjs: { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  html: { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  css: { name: "CSS3", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  tailwind: { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  bootstrap: { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },

  // Mobile
  flutter: { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
  reactnative: { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  ios: { name: "iOS", icon: "https://cdn.simpleicons.org/apple/000000" },
  android: { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84" },

  // Backend
  nodejs: { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  express: { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
  laravel: { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  django: { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
  flask: { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },

  // Databases
  mysql: { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  postgresql: { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  mongodb: { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  firebase: { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  redis: { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },

  // Cloud & DevOps
  aws: { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  googlecloud: { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  azure: { name: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  docker: { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  kubernetes: { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },

  // Tools
  git: { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  github: { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
  figma: { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },

  // Maps
  googlemaps: { name: "Google Maps", icon: "https://cdn.simpleicons.org/googlemaps/EA4335" },

  // AI & ML
  tensorflow: { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  pytorch: { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  openai: { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/412991" },

  // Others
  wordpress: { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  shopify: { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/7AB55C" },
  stripe: { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/008CDD" },
  webrtc: { name: "WebRTC", icon: "https://cdn.simpleicons.org/webrtc/FF0000" },
  digitalocean: { name: "Digital Ocean", icon: "https://cdn.simpleicons.org/digitalocean/0080FF" },
  androidstudio: { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
  xcode: { name: "Xcode", icon: "https://cdn.simpleicons.org/xcode/147EFB" },
  graphql: { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
  json: {
    name: "JSON",
    icon: "https://cdn.simpleicons.org/json/000000"
  },

  sass: {
    name: "Sass",
    icon: "https://cdn.simpleicons.org/sass/CC6699"
  },

  sql: {
    name: "SQL",
    icon: "https://cdn.simpleicons.org/mysql/4479A1"
  },
};

const TechStack = ({
  techs = [],
  title = "Technologies We Use",
  description = "We use modern, scalable, and secure technologies to develop high-performance solutions.",
  badgeText = "Tech Stack",
  variant = "default",
  className = ""
}) => {

  const getTechList = () => {
    if (!techs || techs.length === 0) return [];
    return techs
      .filter(tech => techLibrary[tech.toLowerCase()])
      .map(tech => techLibrary[tech.toLowerCase()]);
  };

  const techList = getTechList();

  const getGradientStyle = () => {
    switch (variant) {
      case 'dark':
        return {
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          color: "#ffffff"
        };
      case 'light':
        return {
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          color: "#212529"
        };
      default:
        return {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#ffffff"
        };
    }
  };

  const isLightVariant = variant === 'light';

  return (
    <section
      className={`py-24 ${className}`}
      style={getGradientStyle()}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge - IMPROVED STYLING */}
        <div className="inline-block">
          <span
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold 
                 transition-all duration-300 hover:scale-105 cursor-default
                 ${isLightVariant
                ? 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300 shadow-sm'
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 shadow-lg'
              }`}
          >
            {/* Decorative icon/dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>

            {badgeText}

            {/* Optional: Add a small arrow or icon */}
            <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>

        {/* Title */}
        <h2
          className={`text-4xl font-semibold mt-6 mb-6 ${isLightVariant ? 'text-gray-900' : 'text-white'
            }`}
        >
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p
            className={`max-w-3xl mx-auto mb-14 ${isLightVariant ? 'text-gray-600' : 'text-white/80'
              }`}
          >
            {description}
          </p>
        )}

        {/* Tech Pills remain the same */}
        {techList.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {techList.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white text-gray-800 shadow-md transition-all duration-300 hover:scale-105"
              >
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No technologies specified</p>
        )}
      </div>
    </section>
  );
};

export default TechStack;
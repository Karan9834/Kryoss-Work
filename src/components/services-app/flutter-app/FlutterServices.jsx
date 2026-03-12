import React from "react";
import { Code, RefreshCw, Lightbulb, Palette, ShieldCheck, Puzzle } from "lucide-react";

const services = [
  {
    id: "01",
    icon: <Code size={22} />,
    title: "Custom Flutter Development",
    desc: "Build scalable cross-platform mobile applications tailored to your business needs using a single Flutter codebase.",
  },
  {
    id: "02",
    icon: <RefreshCw size={22} />,
    title: "App Migration & Upgrade",
    desc: "Upgrade or migrate existing applications to Flutter to improve performance, maintainability, and scalability.",
  },
  {
    id: "03",
    icon: <Lightbulb size={22} />,
    title: "Flutter Consulting",
    desc: "Get expert advice on architecture, strategy, and implementation for building high-performance Flutter apps.",
  },
  {
    id: "04",
    icon: <Palette size={22} />,
    title: "UI / UX Design",
    desc: "Design beautiful and intuitive mobile interfaces that deliver seamless user experiences.",
  },
  {
    id: "05",
    icon: <ShieldCheck size={22} />,
    title: "Testing & Quality Assurance",
    desc: "Ensure smooth and bug-free performance with structured testing and continuous quality assurance.",
  },
  {
    id: "06",
    icon: <Puzzle size={22} />,
    title: "Plugin Development",
    desc: "Extend your Flutter apps with custom plugins and integrations tailored to your business requirements.",
  },
];

const gradientClasses = [
  "bg-white",
  "bg-gradient-to-br from-blue-50 to-white",
  "bg-gradient-to-br from-blue-100 to-white",
  "bg-gradient-to-br from-blue-200 to-blue-50",
  "bg-gradient-to-br from-blue-300 to-blue-100",
  "bg-gradient-to-br from-blue-500 to-indigo-500 text-white",
];

const FlutterServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 text-sm rounded-full bg-orange-100 text-orange-600 font-medium">
            What We Deliver
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Scalable Flutter App Development
            </span>{" "}
            <span className="text-gray-900">
              Services for Modern Businesses
            </span>
          </h2>

          <p className="mt-6 text-gray-600">
            From strategy to launch, our Flutter development services help
            businesses build powerful cross-platform applications faster while
            maintaining flexibility, performance, and scalability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ${gradientClasses[index]}`}
            >

              {/* Big Background Number */}
              <span className="absolute top-6 right-6 text-6xl font-bold opacity-10">
                {service.id}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/70 text-blue-600 mb-6 shadow-sm">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed opacity-90">
                {service.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FlutterServicesSection;
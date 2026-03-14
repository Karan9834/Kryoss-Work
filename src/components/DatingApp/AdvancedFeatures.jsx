import React from "react";
import {
  Globe,
  Settings,
  Headphones,
  Layers,
  Code,
  Upload,
  ShieldCheck,
  Languages,
  Link,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: <Globe size={22} />,
    title: "RTL Language Support",
    desc: "Expand globally with built-in support for right-to-left languages like Arabic, ensuring accessibility for a wider audience.",
  },
  {
    icon: <Settings size={22} />,
    title: "Flexible Customization",
    desc: "Adapt the platform to your brand with configurable design, workflows, and features tailored to your business needs.",
  },
  {
    icon: <Headphones size={22} />,
    title: "Dedicated Tech Support",
    desc: "Our expert team assists you with setup, troubleshooting, and performance optimization whenever you need it.",
  },
  {
    icon: <Layers size={22} />,
    title: "Scalable Infrastructure",
    desc: "Built on a modern architecture that supports growing user bases while maintaining speed and reliability.",
  },
  {
    icon: <Code size={22} />,
    title: "Full Source Code Access",
    desc: "Gain complete control over your platform with access to the source code for customization and long-term development.",
  },
  {
    icon: <Upload size={22} />,
    title: "App Store Deployment",
    desc: "Receive guidance for publishing your dating app smoothly on the Play Store and App Store platforms.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "App Approval Assistance",
    desc: "If your app faces store rejection, our team helps resolve issues quickly and ensures compliance with guidelines.",
  },
  {
    icon: <Languages size={22} />,
    title: "Multi-Language Platform",
    desc: "Allow users to interact with your app in their preferred language to enhance global reach and engagement.",
  },
  {
    icon: <Link size={22} />,
    title: "Third-Party Integrations",
    desc: "Connect your platform with APIs, payment gateways, and analytics tools for extended functionality.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Ready-to-Launch Solution",
    desc: "Launch your dating app quickly with a complete turnkey solution that covers development, deployment, and scaling.",
  },
];

const AdvancedFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="border border-pink-200 text-sm px-4 py-1 rounded-full">
            Advanced Features
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            What Makes Our{" "}
            <span className="text-pink-500">Dating Platform</span> Stand Out?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Discover powerful features designed to help your dating platform
            grow, scale, and deliver an engaging experience to users worldwide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`group bg-white border border-pink-200 rounded-2xl p-7 shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-pink-400
    ${index === features.length - 1 ? "lg:col-start-2" : ""}`}
            >
              <div
                className={`flex items-start gap-4 ${index === features.length - 1 ? "max-w-md" : ""}`}
              >
                <div className="p-3 rounded-full bg-pink-100 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-500 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;

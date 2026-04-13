import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Turn data into powerful business decisions instantly.",
      points: ["Real-time insights", "Predictive AI", "Smart dashboards"],
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Enterprise Security",
      description: "Advanced protection with next-gen encryption.",
      points: ["Zero-trust system", "AI threat detection", "Secure APIs"],
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "Automation Engine",
      description: "Automate workflows and boost productivity.",
      points: ["No-code builder", "Workflow automation", "Time saving"],
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 4,
      title: "Team Collaboration",
      description: "Connect teams with real-time communication.",
      points: ["Live chat", "Video calls", "Shared workspace"],
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
      
      {/* LIGHT BACKGROUND (optimized) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/20 blur-2xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/20 blur-2xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-24">
          {/* Optional Badge - Add if needed */}
          {/* <div className="inline-flex items-center justify-center mb-4">
            <div className="px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-purple-600">Our Solutions</span>
            </div>
          </div> */}
          
          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            Next-Gen SaaS{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
          
          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Designed for performance, built for scale.
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* CENTER LINE (FIXED POSITION) */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gray-200"></div>

          {/* CARDS */}
          <div className="space-y-24">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-12 items-center relative"
                >
                  
                  {/* DOT */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>

                  {/* IMAGE */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className="w-full h-[320px] object-cover"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="p-6 rounded-2xl bg-white shadow-md border border-gray-100">
                      
                      {/* ICON */}
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r ${item.color} mb-4`}
                      >
                        <Icon className="text-white w-5 h-5" />
                      </div>

                      {/* Card Title - Updated: text-[20px] md:text-[24px] font-bold leading-[1.3] */}
                      <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.3] mb-2">
                        {item.title}
                      </h3>

                      {/* Card Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                      <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6] mb-4">
                        {item.description}
                      </p>

                      {/* BULLETS - Updated: text-[13px] md:text-[14px] font-normal */}
                      <ul className="space-y-2 mb-4">
                        {item.points.map((p, i) => (
                          <li key={i} className="flex items-center gap-2 text-[13px] md:text-[14px] font-normal text-gray-600">
                            <CheckCircle className="w-4 h-4 text-purple-500" />
                            {p}
                          </li>
                        ))}
                      </ul>

                      {/* CTA - Updated: text-[13px] md:text-[14px] font-medium */}
                      <button className="inline-flex items-center gap-2 text-[13px] md:text-[14px] font-medium text-purple-600 hover:text-purple-800 transition">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
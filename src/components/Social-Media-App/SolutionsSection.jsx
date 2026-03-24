import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Zap, Shield, Globe, Sparkles } from "lucide-react";

import sol1 from "../../assets/Socila-media-app/sol1.png";
import sol2 from "../../assets/Socila-media-app/sol2.png";
import sol3 from "../../assets/Socila-media-app/sol3.png";
import sol4 from "../../assets/Socila-media-app/sol4.png";

const solutions = [
  {
    id: 1,
    title: "Smart Social Connectivity",
    description:
      "Connect users seamlessly with real-time communication.",
    image: sol1,
    icon: Zap,
  },
  {
    id: 2,
    title: "Community Engagement",
    description:
      "Boost engagement with interactive features and feeds.",
    image: sol2,
    icon: Globe,
  },
  {
    id: 3,
    title: "Secure & Scalable Platform",
    description:
      "Enterprise-grade security with scalable architecture.",
    image: sol3,
    icon: Shield,
  },
  {
    id: 4,
    title: "AI-Powered Insights",
    description:
      "Understand users and deliver personalized experiences.",
    image: sol4,
    icon: Sparkles,
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const height = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 80, damping: 20 }
  );

  return (
    <section
      ref={ref}
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white"
    >
      {/* BG Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-purple-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-pink-200/40 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20 relative z-20">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
              Solutions
            </span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Designed to elevate your digital experience with cutting-edge technology.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-[180px] w-[2px] h-[calc(100%-180px)] bg-gray-200 transform -translate-x-1/2 hidden lg:block">
          <motion.div
            style={{ height }}
            className="w-full bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 origin-top"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-32">

          {solutions.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.icon;

            const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

            return (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row items-center gap-12 relative"
              >

                {/* 🔢 PREMIUM NUMBER */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="relative group">

                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 blur-md opacity-60 group-hover:opacity-100 transition" />

                    <div className="relative w-14 h-14 rounded-full bg-white border flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition">
                      <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                        {String(item.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className={`flex-1 group ${
                    isLeft ? "lg:text-right" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  {/* 🔥 DESCRIPTION WITH HOVER EFFECT */}
                  <p className="relative text-gray-600 text-base lg:text-lg leading-relaxed max-w-md transition-all duration-300 group-hover:text-gray-900">

                    {/* Accent line */}
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500 to-pink-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 rounded-full" />

                    <span className="pl-4 block">
                      {item.description}
                    </span>
                  </p>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                  style={{ y }}
                  className={`flex-1 flex justify-center ${
                    isLeft ? "" : "lg:order-1"
                  }`}
                >
                  <div className="relative w-[300px] sm:w-[340px] lg:w-[380px]">

                    <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 blur-2xl opacity-40 rounded-2xl" />

                    {/* Floating Icon */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-4 -right-4 bg-white shadow-lg p-3 rounded-xl z-10"
                    >
                      <Icon className="w-6 h-6 text-purple-500" />
                    </motion.div>

                    {/* Glass Card */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>

                  </div>
                </motion.div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
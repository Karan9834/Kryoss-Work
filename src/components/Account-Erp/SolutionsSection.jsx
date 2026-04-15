import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, Shield, Zap, Users } from "lucide-react";
import img1 from "@/assets/account-erp-img/sol1.jpg";
import img2 from "@/assets/account-erp-img/sol2.jpeg";
import img3 from "@/assets/account-erp-img/sol3.jpeg";
import img4 from "@/assets/account-erp-img/sol4.jpg";
const SolutionsSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const solutions = [
    {
      title: "AI-Powered Analytics",
      desc: "Transform your business data into actionable insights with real-time dashboards and predictive analytics.",
      image:
        img1,
      icon: BarChart3,
    },
    {
      title: "Enterprise Security",
      desc: "Protect your operations with advanced encryption, access control, and compliance-ready infrastructure.",
      image:
        img2,
      icon: Shield,
    },
    {
      title: "Automation Workflows",
      desc: "Eliminate repetitive tasks and streamline processes with intelligent automation tools.",
      image:
        img3,
      icon: Zap,
    },
    {
      title: "Team Collaboration",
      desc: "Enhance communication and productivity with integrated collaboration tools.",
      image:
        img4,
      icon: Users,
    },
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* 🔝 TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-20" viewBox="0 0 1200 120">
          <path
            d="M0,0V46.29c47.79,22,103.59,32,158,28,70.36-5,136.33-33,206.8-37C438.64,32,512.34,53,583,72s141.64,28,212.2,14C872,71,938,37,1008,30c63.64-6,127.36,10,192,26V0Z"
            className="fill-blue-50"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Optional Badge - Add if needed */}
          {/* <div className="inline-flex items-center justify-center mb-4">
            <div className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-blue-600">Our Solutions</span>
            </div>
          </div> */}

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            Complete Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Modern Businesses
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Powerful tools designed to simplify operations and drive growth.
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div ref={ref} className="relative">

          {/* 🔥 CENTER LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gray-200">
            <motion.div
              style={{ height }}
              className="w-full bg-gradient-to-b from-blue-500 to-indigo-500"
            />
          </div>

          {/* ITEMS */}
          <div className="space-y-28">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative grid lg:grid-cols-2 gap-12 items-center"
                >

                  {/* DOT */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 z-10">
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-60"></div>
                  </div>

                  {/* IMAGE CARD */}
                  <div
                    className={`group relative ${isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-md transition group-hover:shadow-2xl group-hover:-translate-y-2">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-90"
                      />

                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                    <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>
                  </div>

                  {/* TEXT CARD */}
                  <div
                    className={`${isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <div className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-transparent hover:from-blue-500 hover:to-indigo-500 transition duration-500">

                      <div className="relative p-8 rounded-3xl bg-white shadow-md border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">

                        {/* ICON */}
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
                          <Icon className="text-white w-6 h-6" />
                        </div>

                        {/* Card Title - Updated: text-[22px] md:text-[28px] font-bold leading-[1.3] */}
                        <h3 className="text-[22px] md:text-[28px] font-bold leading-[1.3] text-gray-900 mb-3 group-hover:text-blue-600 transition">
                          {item.title}
                        </h3>

                        {/* Card Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                        <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                          {item.desc}
                        </p>

                        {/* GLOW */}
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 🔻 BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg className="w-full h-20" viewBox="0 0 1200 120">
          <path
            d="M0,0V46.29c47.79,22,103.59,32,158,28,70.36-5,136.33-33,206.8-37C438.64,32,512.34,53,583,72s141.64,28,212.2,14C872,71,938,37,1008,30c63.64-6,127.36,10,192,26V0Z"
            className="fill-blue-50"
          />
        </svg>
      </div>

    </section>
  );
};

export default SolutionsSection;
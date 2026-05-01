import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

import sol1 from "../../assets/Food-delivery/sol1.png";
import sol2 from "../../assets/Food-delivery/sol2.png";
import sol3 from "../../assets/Food-delivery/sol3.png";
import sol4 from "../../assets/Food-delivery/sol4.png";
import sol5 from "../../assets/Food-delivery/sol5.png";

const SolutionSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressPercent = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const solutions = [
    {
      id: 1,
      title: "Discover Local Favorites",
      desc: "Explore top-rated restaurants and hidden gems curated based on your taste preferences and past orders.",
      image: sol1,
    },
    {
      id: 2,
      title: "Real-Time Order Tracking",
      desc: "Track your food live from kitchen to doorstep with accurate delivery updates and ETA notifications.",
      image: sol2,
    },
    {
      id: 3,
      title: "Contactless Delivery",
      desc: "Safe and secure delivery with zero contact. Your order is placed safely at your doorstep.",
      image: sol3,
    },
    {
      id: 4,
      title: "Exclusive Deals & Rewards",
      desc: "Enjoy discounts, cashback, and loyalty rewards on every order with our premium membership.",
      image: sol4,
    },
    {
      id: 5,
      title: "24/7 Customer Support",
      desc: "Instant help anytime via chat, call, or email. We ensure a smooth experience every time.",
      image: sol5,
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      <div ref={containerRef} className="relative max-w-6xl mx-auto px-4">

        {/* SECTION HEADER - Updated Typography */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-orange-700 text-[14px] font-bold uppercase tracking-widest">Our Solutions</span>
          </div>

          {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              Seamless Food Delivery
            </span>
          </h2>

          {/* Description - 16px, weight 400, line-height 1.6 */}
          <p className="max-w-2xl mx-auto text-[16px] font-normal leading-[1.6] text-gray-600">
            We provide end-to-end digital solutions to transform how you deliver food, ensuring speed, safety, and ultimate customer satisfaction.
          </p>
        </div>

        <div className="relative pt-12">
          {/* PROGRESS LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-gray-200 rounded-full">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-orange-500 via-red-500 to-amber-500 rounded-full"
            />
          </div>

          <div className="space-y-32">
            {solutions.map((item, index) => {
              const isLeft = index % 2 === 0;

              // Tilt values
              const x = useMotionValue(0);
              const y = useMotionValue(0);

              const handleMove = (e, ref) => {
                const rect = ref.getBoundingClientRect();
                x.set((e.clientX - rect.left - rect.width / 2) / 20);
                y.set(-(e.clientY - rect.top - rect.height / 2) / 20);
              };

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row ${isLeft ? "" : "lg:flex-row-reverse"
                    } items-center gap-16`}
                >
                  {/* DOT */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-orange-500 rounded-full shadow-xl items-center justify-center z-10">
                    <span className="text-orange-600 font-bold text-lg">
                      {item.id}
                    </span>
                  </div>

                  {/* IMAGE (PARALLAX + TILT) */}
                  <motion.div
                    style={{ x, y }}
                    onMouseMove={(e) => handleMove(e, e.currentTarget)}
                    onMouseLeave={() => {
                      x.set(0);
                      y.set(0);
                    }}
                    className="flex-1"
                  >
                    <motion.div
                      style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, -50]),
                      }}
                      className="overflow-hidden rounded-3xl shadow-2xl"
                    >
                      <img
                        src={item.image}
                        className="w-full md:h-85 h-65 object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  {/* CONTENT - Updated Typography */}
                  <div className="flex-1 space-y-5 text-center lg:text-left">
                    {/* Title H3 - 24px mobile, 30px desktop, weight 700, line-height 1.3 */}
                    <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3]">
                      <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                        {item.title}
                      </span>
                    </h3>

                    {/* Description - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
                    <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
                      {item.desc}
                    </p>

                    {/* Highlight line - width 64px, height 2px */}
                    <div className="w-16 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MOBILE VERSION - Updated Typography */}
          <div className="lg:hidden mt-16 space-y-10 border-l-2 border-orange-300 pl-6">
            {solutions.map((item) => (
              <div key={item.id} className="relative">
                <div className="absolute -left-[10px] top-2 w-4 h-4 bg-orange-500 rounded-full"></div>
                {/* Title H3 mobile - 24px, weight 700, line-height 1.3 */}
                <h3 className="text-[24px] font-bold leading-[1.3] text-orange-600">
                  {item.title}
                </h3>
                {/* Description mobile - 14px, weight 400, line-height 1.6 */}
                <p className="text-[14px] font-normal leading-[1.6] text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
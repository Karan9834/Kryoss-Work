import { Link } from 'react-router-dom';
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Sparkles, Shield, Clock, Wrench, CheckCircle } from "lucide-react";

import sol1 from "../../assets/Home-Service/sol1.png";
import sol2 from "../../assets/Home-Service/sol2.png";
import sol3 from "../../assets/Home-Service/sol3.png";
import sol4 from "../../assets/Home-Service/sol4.png";

const solutions = [
  {
    id: 1,
    title: "Easy Service Booking",
    description:
      "Book home services in just a few clicks with a smooth and intuitive interface.",
    image: sol1,
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    id: 2,
    title: "Trusted Professionals",
    description:
      "All providers are verified, experienced, and highly rated.",
    image: sol2,
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    title: "Real-Time Tracking",
    description:
      "Track your service provider live from arrival to completion.",
    image: sol3,
    icon: Clock,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    id: 4,
    title: "Complete Home Solutions",
    description:
      "Everything from cleaning to repairs in one platform.",
    image: sol4,
    icon: Wrench,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  // Animated line progress
  const height = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 80, damping: 20, mass: 0.5 }
  );

  // Glow effect for active nodes
  const glowIntensity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.5, 0.8, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full py-28 lg:py-32 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/20 rounded-full blur-[120px]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">

        {/* Premium Heading - Updated Typography ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 px-5 py-2.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            {/* Badge - Updated: text-[14px] font-semibold */}
            <span className="text-[14px] font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </div>
          
          {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-4">
            Smart{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
              Solutions
            </span>
          </h2>
          
          {/* Description - 16px, weight 400, line-height 1.6 */}
          <p className="text-[16px] font-normal leading-[1.6] text-gray-600 max-w-2xl mx-auto">
            Built to simplify your home service experience with cutting-edge technology
          </p>
        </motion.div>

        {/* Premium Center Line */}
        <div className="absolute left-1/2 top-[280px] w-[3px] h-[calc(100%-560px)] transform -translate-x-1/2 hidden lg:block">
          {/* Base Line */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-200 to-gray-200 rounded-full" />
          
          {/* Animated Gradient Line */}
          <motion.div
            style={{ height }}
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full shadow-lg shadow-purple-500/30"
          />
          
          {/* Glow Effect */}
          <motion.div
            style={{ opacity: glowIntensity }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl"
          />
        </div>

        {/* Content - Card fonts KEPT ORIGINAL */}
        <div className="flex flex-col gap-32 lg:gap-40">
          {solutions.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.icon;

            // Parallax effect
            const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 40 : -40, index % 2 === 0 ? -40 : 40]);

            return (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative"
              >
                {/* Premium Number Badge with Node */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Outer Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-md opacity-60`} />
                    
                    {/* Pulse Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r ${item.color} opacity-30`}
                    />
                    
                    {/* Main Badge */}
                    <div className={`relative w-14 h-14 bg-white border-2 border-${item.color.split(' ')[0].replace('from-', '')}/20 flex items-center justify-center rounded-full shadow-xl`}>
                      <span className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {String(item.id).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex-1 ${isLeft ? "lg:text-right lg:pr-12" : "lg:order-2 lg:pl-12"}`}
                >
                  <div className={`inline-flex items-center gap-2 ${item.bgColor} px-4 py-2 rounded-full mb-4 ${isLeft ? "lg:float-right" : ""}`}>
                    <Icon className={`w-4 h-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                    <span className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      Step {item.id}
                    </span>
                  </div>
                  
                  {/* Card Title - ORIGINAL FONT (unchanged) */}
                  <h3 className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-4 ${isLeft ? "lg:text-right" : ""}`}>
                    {item.title}
                  </h3>

                  {/* Card Description - ORIGINAL FONT (unchanged) */}
                  <p className={`text-gray-600 leading-relaxed max-w-md ${isLeft ? "lg:ml-auto lg:text-right" : ""}`}>
                    {item.description}
                  </p>

                  {/* Decorative Check */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    viewport={{ once: true }}
                    className={`mt-4 flex items-center gap-2 ${isLeft ? "lg:justify-end" : ""}`}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-gray-400">Verified process</span>
                  </motion.div>
                </motion.div>

                {/* Image with Premium Effects */}
                <motion.div
                  style={{ y }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`flex-1 flex justify-center ${isLeft ? "" : "lg:order-1"}`}
                >
                  <div className="relative w-[300px] sm:w-[340px] lg:w-[400px]">
                    {/* Premium Glow Effect */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-2xl opacity-30`}
                    />
                    
                    {/* Floating Icon */}
                    <motion.div
                      animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute -top-5 -right-5 bg-white shadow-xl p-3 rounded-xl z-20 border border-${item.color.split(' ')[0].replace('from-', '')}/20`}
                    >
                      <Icon className={`w-6 h-6 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                    </motion.div>

                    {/* Main Image Card */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 hover:opacity-10 transition-opacity duration-500`} />
                    </motion.div>

                    {/* Decorative Corner */}
                    <div className={`absolute -bottom-3 -left-3 w-16 h-16 border-2 border-${item.color.split(' ')[0].replace('from-', '')}/20 rounded-xl opacity-50`} />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-600">Trusted by 10,000+ homeowners</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <Link to="/company/contact" className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:gap-2 transition-all">
              Get Started →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
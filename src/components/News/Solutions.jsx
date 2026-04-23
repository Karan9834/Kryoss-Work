import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Zap,
  Brain,
  Sparkles,
  Globe,
  ChevronRight,
  TrendingUp,
  Clock,
  Shield
} from "lucide-react";
import img1 from '@/assets/news-magazine-img/sol1.png';
import img2 from '@/assets/news-magazine-img/sol2.jpg';
import img3 from '@/assets/news-magazine-img/sol3.jpg';
import img4 from '@/assets/news-magazine-img/sol4.jpg';
gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Real-Time News Collection",
    desc: "We gather breaking news instantly from trusted sources worldwide. Our network spans across 100+ countries with 24/7 monitoring, ensuring you never miss important updates as they happen.",
    image: img1,
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    statLabel: "Response Time",
  },
  {
    title: "AI-Powered Analysis",
    desc: "Advanced machine learning algorithms analyze millions of data points to filter noise, identify trends, and surface only the most important and relevant stories for you.",
    image: img2,
    icon: Brain,
    gradient: "from-indigo-500 to-purple-500",
    statLabel: "Accuracy Rate",
  },
  {
    title: "Curated Delivery",
    desc: "Only relevant, verified content reaches our readers. Our expert editors hand-pick stories that matter, delivering personalized content tailored to your interests.",
    image: img3,
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-500",
    statLabel: "Daily Stories",
  },
  {
    title: "Global Coverage",
    desc: "Coverage from 50+ countries with real-time updates. Our journalists and correspondents bring you local insights with a global perspective, covering stories that shape our world.",
    image: img4,
    icon: Globe,
    gradient: "from-emerald-500 to-teal-500",
    statLabel: "Countries",
  },
];

const Solutions = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const dotRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Only run timeline animations on desktop
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      // Progress line animation
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 15%",
            end: "bottom 85%",
            scrub: true,
          },
        }
      );

      // Moving dot animation
      gsap.to(dotRef.current, {
        top: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 15%",
          end: "bottom 85%",
          scrub: true,
        },
      });
    }

    // Card animations (works on all devices)
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50/30 px-6 md:px-16 py-20 md:py-28 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-50/40 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f605_1px,transparent_1px),linear-gradient(to_bottom,#3b82f605_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24 relative z-10">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Process
            </span>
            <Clock className="w-5 h-5 text-indigo-500" />
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            How We Deliver{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Trusted News
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
            A seamless process powered by technology and human expertise
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* CENTER LINE - Desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] top-0 bottom-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-200 to-gray-200/50"></div>

            {/* PROGRESS LINE */}
            <div
              ref={lineRef}
              className="absolute left-0 w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 h-0"
              style={{ bottom: 'auto', top: 0 }}
            ></div>

            {/* MOVING DOT */}
            <div
              ref={dotRef}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-lg ring-4 ring-blue-200"
              style={{ top: 0 }}
            ></div>

            {/* Static Dots */}
            {solutions.map((_, index) => (
              <div
                key={index}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-300 rounded-full"
                style={{ top: `${(index + 0.5) * (100 / solutions.length)}%` }}
              ></div>
            ))}
          </div>

          {/* ITEMS - Alternating Layout */}
          <div className="space-y-20 md:space-y-28 lg:space-y-32">
            {solutions.map((item, index) => {
              // First solution: text left, image right
              // Second solution: image left, text right
              // Third solution: text left, image right
              // and so on...
              const isTextLeft = index % 2 === 0; // Even index = text left, odd = text right
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="relative"
                >
                  {/* Mobile Step Indicator */}
                  <div className="md:hidden flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
                      <IconComponent className={`w-4 h-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                      <span className="text-[11px] font-semibold text-gray-700">Step {index + 1}</span>
                      <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                      <span className={`text-[11px] font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.stat}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

                    {/* TEXT SECTION - Position based on isTextLeft */}
                    <div
                      className={`${isTextLeft
                        ? "md:order-1 md:text-left md:pr-8 lg:pr-12"
                        : "md:order-2 md:text-left md:pl-8 lg:pl-12"
                        }`}
                    >
                      {/* Desktop Step Badge */}
                      <div className={`hidden md:inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 ${!isTextLeft ? 'md:ml-auto' : ''}`}>
                        <IconComponent className={`w-4 h-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                        <span className="text-[11px] font-medium text-gray-600">Step {index + 1}</span>
                      </div>

                      {/* Card Title - Updated: text-[22px] md:text-[26px] lg:text-[30px] font-bold leading-[1.3] */}
                      <h3 className={`text-[22px] md:text-[26px] lg:text-[30px] font-bold leading-[1.3] mb-3 md:mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.title}
                      </h3>

                      {/* Card Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                      <p className="text-gray-600 text-[14px] md:text-[15px] font-normal leading-[1.6] mb-4 md:mb-6">
                        {item.desc}
                      </p>

                      {/* Stats - Updated typography */}
                      <div className={`inline-flex items-center gap-2 md:gap-3 bg-gray-50 md:bg-white md:shadow-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-100 ${!isTextLeft ? 'md:ml-auto md:justify-end' : ''}`}>
                        <span className={`text-[16px] md:text-[20px] font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.stat}
                        </span>
                        <span className="text-[11px] md:text-[12px] font-normal text-gray-500">{item.statLabel}</span>
                      </div>
                    </div>

                    {/* IMAGE SECTION - Position opposite of text */}
                    <div
                      className={`${isTextLeft
                        ? "md:order-2 md:pl-8 lg:pl-12"
                        : "md:order-1 md:pr-8 lg:pr-12"
                        }`}
                    >
                      <div className="group relative">
                        {/* Glow Effect */}
                        <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>

                        {/* Image Container */}
                        <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[220px] md:h-[280px] lg:h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
                          />

                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                          {/* Decorative Corner */}
                          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-white/60 rounded-br-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Divider */}
                  {index < solutions.length - 1 && (
                    <div className="md:hidden mt-8 pt-6">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
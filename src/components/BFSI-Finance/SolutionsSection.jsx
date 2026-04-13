import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Zap,
  Brain,
  BarChart3,
  TrendingUp,
  Wallet,
  Shield,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  const solutions = [
    {
      title: "Real-Time Market Intelligence",
      description: "Capture market movements instantly with AI-powered insights and real-time data processing.",
      icon: Zap,
      features: ["Real-time monitoring", "Predictive analytics", "Market trends"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "AI Risk Analytics",
      description: "Analyze risks and detect anomalies in real-time with advanced machine learning.",
      icon: Brain,
      features: ["Risk scoring", "Anomaly detection", "Compliance monitoring"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      title: "Portfolio Management",
      description: "Optimize investments using predictive models and real-time analytics.",
      icon: BarChart3,
      features: ["Asset allocation", "Performance tracking", "Scenario analysis"],
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-500 to-rose-500",
    },
    {
      title: "Automated Trading",
      description: "Execute trades with smart algorithms and real-time market analysis.",
      icon: TrendingUp,
      features: ["Algorithmic execution", "Smart routing", "Backtesting"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Wealth Platform",
      description: "Manage assets and client portfolios with comprehensive wealth tools.",
      icon: Wallet,
      features: ["Goal planning", "Client reports", "Tax optimization"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      gradient: "from-rose-500 to-orange-500",
    },
    {
      title: "Security Suite",
      description: "Bank-grade encryption ensuring complete data protection and compliance.",
      icon: Shield,
      features: ["Data encryption", "Access control", "Audit trails"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  useEffect(() => {
    // Animate center line
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );
    }

    // Animate cards
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden"
    >
      {/* Light Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </div>
          
          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            Intelligent Solutions for{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Financial Excellence
            </span>
          </h2>
          
          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
            Powerful financial tools designed for growth and success
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative mt-8">

          {/* CENTER LINE - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] top-0 bottom-0">
            <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
            <div
              ref={lineRef}
              className="absolute left-0 w-full bg-gradient-to-b from-amber-500 via-orange-500 to-rose-500 h-0 rounded-full"
              style={{ bottom: 'auto', top: 0 }}
            />
          </div>

          {/* ITEMS - Alternating Layout */}
          <div className="space-y-20 md:space-y-24 lg:space-y-28">
            {solutions.map((item, index) => {
              // First solution: text left, image right
              // Second solution: image left, text right
              // Third solution: text left, image right
              // and so on...
              const isTextLeft = index % 2 === 0; // Even index = text left, odd = text right
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  {/* TEXT SECTION - Position based on index */}
                  <div
                    className={`${
                      isTextLeft
                        ? "md:order-1 md:text-left md:pr-8 lg:pr-12"
                        : "md:order-2 md:text-left md:pl-8 lg:pl-12"
                    }`}
                  >
                    {/* Icon for mobile */}
                    <div className={`md:hidden inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200`}>
                      <Icon className={`w-4 h-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                      <span className="text-[11px] font-medium text-gray-600">Step {index + 1}</span>
                    </div>
                    
                    {/* Card Title - Updated: text-[22px] md:text-[28px] font-bold leading-[1.3] */}
                    <h3
                      className={`text-[22px] md:text-[28px] font-bold leading-[1.3] mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                    >
                      {item.title}
                    </h3>

                    {/* Card Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                    <p className="text-gray-600 text-[14px] md:text-[15px] font-normal leading-[1.6] mb-4">
                      {item.description}
                    </p>

                    {/* Features List - Updated typography */}
                    <ul className="space-y-2 mb-4">
                      {item.features.map((f, i) => (
                        <li key={i} className="text-[13px] md:text-[14px] font-normal text-gray-600 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`}></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats Section Removed */}
                  </div>

                  {/* IMAGE SECTION - Position based on index (opposite of text) */}
                  <div
                    className={`${
                      isTextLeft
                        ? "md:order-2 md:pl-8 lg:pl-12"
                        : "md:order-1 md:pr-8 lg:pr-12"
                    }`}
                  >
                    <div className="group relative">
                      <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl pointer-events-none`}></div>
                      <img
                        src={item.image}
                        loading="lazy"
                        alt={item.title}
                        className="w-full h-[200px] md:h-[240px] lg:h-[260px] object-cover rounded-xl shadow-md group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Bottom */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
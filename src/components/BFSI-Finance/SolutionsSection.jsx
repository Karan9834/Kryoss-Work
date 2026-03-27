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
      stat: "< 100ms",
      statLabel: "Latency",
      features: ["Real-time monitoring", "Predictive analytics", "Market trends"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "AI Risk Analytics",
      description: "Analyze risks and detect anomalies in real-time with advanced machine learning.",
      icon: Brain,
      stat: "99.9%",
      statLabel: "Accuracy",
      features: ["Risk scoring", "Anomaly detection", "Compliance monitoring"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      title: "Portfolio Management",
      description: "Optimize investments using predictive models and real-time analytics.",
      icon: BarChart3,
      stat: "95%",
      statLabel: "Accuracy",
      features: ["Asset allocation", "Performance tracking", "Scenario analysis"],
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-500 to-rose-500",
    },
    {
      title: "Automated Trading",
      description: "Execute trades with smart algorithms and real-time market analysis.",
      icon: TrendingUp,
      stat: "24/7",
      statLabel: "Trading",
      features: ["Algorithmic execution", "Smart routing", "Backtesting"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Wealth Platform",
      description: "Manage assets and client portfolios with comprehensive wealth tools.",
      icon: Wallet,
      stat: "$2.5T+",
      statLabel: "Assets",
      features: ["Goal planning", "Client reports", "Tax optimization"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      gradient: "from-rose-500 to-orange-500",
    },
    {
      title: "Security Suite",
      description: "Bank-grade encryption ensuring complete data protection and compliance.",
      icon: Shield,
      stat: "256-bit",
      statLabel: "Encryption",
      features: ["Data encryption", "Access control", "Audit trails"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  useEffect(() => {
    // Optimized: Only run animations if element exists
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

    // Optimized: Use a single ScrollTrigger for all cards
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
            once: true, // Only animate once for better performance
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
      {/* Light Background Decorations - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent uppercase tracking-wider">
              Our Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Intelligent Solutions for{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Financial Excellence
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
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

          {/* ITEMS */}
          <div className="space-y-20 md:space-y-24 lg:space-y-28">
            {solutions.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  {/* TEXT */}
                  <div
                    className={`${
                      isLeft
                        ? "md:text-right md:pr-8 lg:pr-12"
                        : "md:pl-8 lg:pl-12 order-2 md:order-1"
                    }`}
                  >
                    {/* Icon for mobile */}
                    <div className={`md:hidden inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200`}>
                      <Icon className={`w-4 h-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                      <span className="text-xs font-medium text-gray-600">Step {index + 1}</span>
                    </div>
                    
                    <h3
                      className={`text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {item.features.map((f, i) => (
                        <li key={i} className={`text-sm text-gray-600 flex items-center gap-2 ${isLeft ? "justify-end" : ""}`}>
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} ${isLeft ? "order-2" : ""}`}></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-lg ${!isLeft ? '' : 'md:ml-auto'}`}>
                      <span className={`text-lg font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.stat}
                      </span>
                      <span className="text-xs text-gray-500">{item.statLabel}</span>
                    </div>
                  </div>

                  {/* IMAGE - Optimized with loading="lazy" */}
                  <div
                    className={`${
                      isLeft
                        ? "md:pl-8 lg:pl-12"
                        : "md:pr-8 lg:pr-12 order-1 md:order-2"
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
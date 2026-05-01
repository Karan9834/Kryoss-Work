import React from "react";
import {
  Award,
  Clock,
  Users,
  Shield,
  Headphones,
  Rocket,
} from "lucide-react";

// Default data outside component to prevent recreation
const defaultReasons = [
  {
    id: "expertise",
    icon: <Award size={22} strokeWidth={1.5} />,
    title: "Industry Expertise",
    description: "Years of experience delivering scalable and reliable solutions for enterprise clients.",
  },
  {
    id: "delivery",
    icon: <Clock size={22} strokeWidth={1.5} />,
    title: "Fast Delivery",
    description: "Agile development ensuring quick turnaround without compromising on quality.",
  },
  {
    id: "team",
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Expert Team",
    description: "Skilled professionals with deep technical knowledge across modern stacks.",
  },
  {
    id: "security",
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Secure Platform",
    description: "Built with enterprise-grade security standards and industry best practices.",
  },
  {
    id: "support",
    icon: <Headphones size={22} strokeWidth={1.5} />,
    title: "24/7 Support",
    description: "Dedicated support team always available to assist your business needs.",
  },
  {
    id: "scalable",
    icon: <Rocket size={22} strokeWidth={1.5} />,
    title: "Scalable Systems",
    description: "Future-ready architecture that scales seamlessly with your growth.",
  },
];

const WhyChooseUs = ({
  title = "Built for",
  highlightedText = "Performance & Growth",
  subtitle = "We combine innovation, speed, and reliability to deliver powerful solutions that drive real business results.",
  reasons = defaultReasons,
  className = "",
  badgeText = "Why Choose Us",
}) => {
  return (
    <section 
      className={`w-full py-24 bg-gradient-to-b from-white via-orange-50/20 to-orange-50/40 overflow-hidden ${className}`}
      aria-label="Why choose us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-5">
            <span className="relative">
              {badgeText}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            {title}{" "}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              {highlightedText}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group relative"
            >
              {/* Wave Background Animation */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Wave 1 */}
                <div className="absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-wave-slow">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="none">
                      <path
                        d="M0,400 Q200,300 400,400 T800,400"
                        fill="none"
                        stroke="rgba(249,115,22,0.1)"
                        strokeWidth="2"
                        className="animate-wave-move"
                      />
                      <path
                        d="M0,450 Q200,350 400,450 T800,450"
                        fill="none"
                        stroke="rgba(249,115,22,0.08)"
                        strokeWidth="2"
                        className="animate-wave-move-reverse"
                      />
                    </svg>
                  </div>
                </div>

                {/* Wave 2 - Different pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100">
                  <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-wave-medium">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="none">
                      <path
                        d="M0,500 Q150,600 300,500 T600,500"
                        fill="none"
                        stroke="rgba(234,179,8,0.1)"
                        strokeWidth="2"
                        className="animate-wave-move"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              
              {/* Card */}
              <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                
                {/* Icon Container with Ripple Effect */}
                <div className="relative">
                  <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 group-hover:scale-110 transition-transform duration-300 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white relative z-10">
                    <div className="transition-colors duration-300">
                      {reason.icon}
                    </div>
                  </div>
                  
                  {/* Ripple Animation */}
                  <div className="absolute inset-0 w-12 h-12 rounded-xl opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-xl bg-orange-400 animate-ping-slow" />
                    <div className="absolute inset-0 rounded-xl bg-orange-300 animate-ping-slower" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative line - appears on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-full" />
                
                {/* Wave Particles */}
                <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-full bg-gradient-to-r from-orange-400/50 via-yellow-400/50 to-orange-400/50 animate-wave-flow" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-20 pt-8 border-t border-gray-200/60">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span>Trusted by 500+ businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span>99.9% uptime guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span>30-day satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS animations */}
      <style>{`
        @keyframes wave-slow {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(-10%, -10%) rotate(360deg);
          }
        }
        
        @keyframes wave-medium {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(-5%, -5%) rotate(180deg);
          }
        }
        
        @keyframes wave-move {
          0% {
            d: path("M0,400 Q200,300 400,400 T800,400");
          }
          50% {
            d: path("M0,400 Q200,350 400,400 T800,400");
          }
          100% {
            d: path("M0,400 Q200,300 400,400 T800,400");
          }
        }
        
        @keyframes wave-move-reverse {
          0% {
            d: path("M0,450 Q200,350 400,450 T800,450");
          }
          50% {
            d: path("M0,450 Q200,400 400,450 T800,450");
          }
          100% {
            d: path("M0,450 Q200,350 400,450 T800,450");
          }
        }
        
        @keyframes wave-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-wave-slow {
          animation: wave-slow 20s linear infinite;
        }
        
        .animate-wave-medium {
          animation: wave-medium 15s linear infinite;
        }
        
        .animate-wave-move {
          animation: wave-move 3s ease-in-out infinite;
        }
        
        .animate-wave-move-reverse {
          animation: wave-move-reverse 3s ease-in-out infinite;
        }
        
        .animate-wave-flow {
          animation: wave-flow 2s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
import React from "react";
import {
  Award,
  Clock,
  Users,
  Shield,
  Headphones,
  Rocket,
  ArrowRight,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award size={24} />,
      title: "Industry Expertise",
      desc: "5+ years delivering scalable, enterprise-grade solutions with proven success.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "group-hover:border-amber-200",
      shadowColor: "group-hover:shadow-amber-100",
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Delivery",
      desc: "Agile workflows ensuring faster time-to-market without compromising quality.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "group-hover:border-blue-200",
      shadowColor: "group-hover:shadow-blue-100",
    },
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      desc: "Skilled developers with deep domain expertise and innovative thinking.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "group-hover:border-purple-200",
      shadowColor: "group-hover:shadow-purple-100",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure System",
      desc: "Built with strong security protocols and industry best practices.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "group-hover:border-green-200",
      shadowColor: "group-hover:shadow-green-100",
    },
    {
      icon: <Headphones size={24} />,
      title: "24/7 Support",
      desc: "Always available to help you grow without any downtime or delays.",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "group-hover:border-red-200",
      shadowColor: "group-hover:shadow-red-100",
    },
    {
      icon: <Rocket size={24} />,
      title: "Scalable Tech",
      desc: "Architecture that grows seamlessly with your business needs.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "group-hover:border-indigo-200",
      shadowColor: "group-hover:shadow-indigo-100",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Wave Pattern Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f0f9ff"
            fillOpacity="0.6"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,176C672,171,768,181,864,197.3C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle fill="#3b82f6" cx="2" cy="2" r="1.5"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"></rect>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Built for Performance & Scale
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We combine technology, speed, and reliability to deliver powerful solutions
            that drive real business growth.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl bg-white border border-gray-100 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl ${item.shadowColor} ${item.borderColor} hover:-translate-y-2`}
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>

              {/* ICON WRAPPER */}
              <div
                className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>

              {/* LEARN MORE LINK */}
              <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  Learn More
                </span>
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${item.color === "from-amber-500 to-orange-500" ? "text-amber-500" : item.color === "from-blue-500 to-cyan-500" ? "text-blue-500" : item.color === "from-purple-500 to-pink-500" ? "text-purple-500" : item.color === "from-green-500 to-emerald-500" ? "text-green-500" : item.color === "from-red-500 to-rose-500" ? "text-red-500" : "text-indigo-500"}`} />
              </div>

              {/* Background Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${item.color}`}></div>
            </div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <div className="mt-20 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Shield size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Security</div>
                <div className="font-semibold text-gray-900">99.9% Uptime</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users size={18} className="text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Trusted By</div>
                <div className="font-semibold text-gray-900">100+ Businesses</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Rocket size={18} className="text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Scalability</div>
                <div className="font-semibold text-gray-900">Enterprise Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Pattern Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f0f9ff"
            fillOpacity="0.4"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from "react";
import {
  Shield,
  Headphones,
  Link,
  BarChart3,
  Smartphone,
  Building,
} from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Enterprise Security",
      desc: "Bank-level encryption with continuous monitoring and secure backups.",
      icon: Shield,
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      title: "24/7 Support",
      desc: "Expert assistance anytime to keep your operations running smoothly.",
      icon: Headphones,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Seamless Integrations",
      desc: "Connect with payment gateways, PMS, and 100+ external tools.",
      icon: Link,
      gradient: "from-indigo-400 to-blue-500",
    },
    {
      title: "Real-Time Analytics",
      desc: "Track performance with powerful dashboards and insights.",
      icon: BarChart3,
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      title: "Mobile Friendly",
      desc: "Manage your hotel anytime with responsive and mobile-first design.",
      icon: Smartphone,
      gradient: "from-cyan-400 to-teal-500",
    },
    {
      title: "Scalable System",
      desc: "Grow from one property to multiple locations without friction.",
      icon: Building,
      gradient: "from-green-400 to-emerald-500",
    },
  ];

  const handleMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);

    const rotateX = -(y - rect.height / 2) / 20;
    const rotateY = (x - rect.width / 2) / 20;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const reset = (el) => {
    el.style.transform = `rotateX(0) rotateY(0) scale(1)`;
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-gray-400">
            Built for modern hotels that demand performance, reliability, and scale
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-70"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]">
          {benefits.map((b, i) => {
            const Icon = b.icon;

            return (
              <div
                key={i}
                onMouseMove={(e) => handleMove(e, e.currentTarget)}
                onMouseLeave={(e) => reset(e.currentTarget)}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Cursor Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background:
                      "radial-gradient(300px circle at var(--x) var(--y), rgba(0,255,200,0.18), transparent 40%)",
                  }}
                />

                {/* Animated Border Top */}
                <div
                  className={`absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${b.gradient}`}
                />

                {/* ICON */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <Icon size={26} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                  {b.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.desc}
                </p>

                {/* Glow blob */}
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "10K+", label: "Hotels" },
            { val: "99.9%", label: "Uptime" },
            { val: "24/7", label: "Support" },
            { val: "100+", label: "Integrations" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {s.val}
              </div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
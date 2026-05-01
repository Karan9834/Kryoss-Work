const techs = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
];

// Duplicate for seamless marquee
const row1 = [...techs.slice(0, 8), ...techs.slice(0, 8)];
const row2 = [...techs.slice(8), ...techs.slice(8)];

export default function TechStack() {
  return (
    <section className="relative py-24 bg-[#0B0F1A] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#5B8CFF]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00C2A8]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#5B8CFF]/20 rounded-full px-4 py-1.5 bg-[#5B8CFF]/5">
            <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
            <span className="text-[#5B8CFF] text-xs font-semibold uppercase tracking-widest">
              Technology Stack
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Powered by{" "}
            <span className="bg-gradient-to-r from-[#5B8CFF] to-[#00C2A8] bg-clip-text text-transparent italic">
              Modern Technologies
            </span>
          </h2>
          <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            We choose the right tool for every challenge — staying on the cutting edge so your product doesn't fall behind.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="space-y-5">
          {/* Row 1 — left scroll */}
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex gap-5 animate-scroll-left">
              {row1.map((t, i) => (
                <TechChip key={`r1-${i}`} tech={t} />
              ))}
            </div>
          </div>

          {/* Row 2 — right scroll */}
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex gap-5 animate-scroll-right">
              {row2.map((t, i) => (
                <TechChip key={`r2-${i}`} tech={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechChip({ tech }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/6 backdrop-blur-sm hover:border-[#5B8CFF]/50 hover:bg-[#5B8CFF]/10 transition-all duration-200 cursor-default shrink-0 group">
      <img
        src={tech.logo}
        alt={tech.name}
        className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition"
      />
      <span className="text-slate-300 text-sm font-medium group-hover:text-white transition whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

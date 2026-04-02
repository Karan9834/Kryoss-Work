import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#0B0F1A]">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5B8CFF]/20 via-transparent to-[#00C2A8]/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#5B8CFF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating shapes */}
      <div className="absolute top-6 left-8 w-16 h-16 rounded-full border border-[#5B8CFF]/20 animate-pulse pointer-events-none" />
      <div className="absolute bottom-6 right-12 w-10 h-10 rounded-full border border-[#00C2A8]/20 animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#5B8CFF]/40 rounded-full animate-bounce pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left — Text */}
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-[#5B8CFF]/30 rounded-full px-4 py-1.5 bg-[#5B8CFF]/10">
              <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
              <span className="text-[#5B8CFF] text-xs font-semibold uppercase tracking-widest">
                Start a Project
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-[#5B8CFF] to-[#00C2A8] bg-clip-text text-transparent">
                Powerful
              </span>{" "}
              Together
            </h2>

            <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
              We focus on delivering high-quality, cost-effective, and
              customized solutions tailored to your business needs.
            </p>
          </div>

          {/* Right — Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(91,140,255,0.4)]"
              style={{
                background: "linear-gradient(135deg, #5B8CFF, #00C2A8)",
              }}
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <ArrowRight className="w-4 h-4" />
              Request a Quote
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white border border-[#5B8CFF]/40 bg-[#5B8CFF]/10 hover:bg-[#5B8CFF]/20 hover:border-[#5B8CFF]/70 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#5B8CFF]" />
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

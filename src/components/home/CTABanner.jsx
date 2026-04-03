import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-6">
                Want to Develop An On-Demand App For Your{" "}
                <span className="text-primary italic">Specific Industry?</span>
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                Let our experts craft a customized digital solution for your business. From idea to
                launch — we've got you covered with end-to-end product engineering.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/10">
                Hire Our Expert <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/whitelabel-assets/assets/images/cta-illustration.png"
              alt="On-Demand App Development"
              className="max-h-72 object-contain"
                onError={(e) => { if (!e.currentTarget.dataset.error) { e.currentTarget.dataset.error = "true"; e.currentTarget.src = "/placeholder.svg"; } }} />
            
          </div>
        </div>
      </div>
    </section>);

}
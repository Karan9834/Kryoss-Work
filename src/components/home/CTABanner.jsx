import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white leading-tight">
              Want to Develop An On-Demand App For Your{" "}
              <span className="text-primary">Specific Industry?</span>
            </h2>
            <p className="text-white/70 leading-relaxed">
              Let our experts craft a customized digital solution for your business. From idea to
              launch — we've got you covered with end-to-end product engineering.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-md font-bold hover:bg-orange-600 transition-colors">
              
              Hire Our Expert <ArrowRight className="h-4 w-4" />
            </a>
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
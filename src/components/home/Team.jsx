import { ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">
              Our Team
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Meet the Minds Behind{" "}
              <span className="text-primary">KryossWork</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our team is a diverse mix of visionary engineers, creative designers, strategic
              consultants, and dedicated project managers — all united by a passion for building
              exceptional digital products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With backgrounds spanning mobile, web, AI, cloud, and enterprise software, our experts
              bring the perfect blend of skills to every project.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-md font-semibold hover:bg-orange-600 transition-colors">

              Meet Our Team <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right — Team Photo */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/whitelabel-assets/assets/images/team.jpg"
              alt="KryossWork Team"
              className="w-full h-[420px] object-cover"
              onError={(e) => { if (!e.currentTarget.dataset.error) { e.currentTarget.dataset.error = "true"; e.currentTarget.src = "/placeholder.svg"; } }} />

          </div>
        </div>
      </div>
    </section>);

}
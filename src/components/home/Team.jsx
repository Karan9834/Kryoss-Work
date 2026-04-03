import { ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                Our Team
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6">
                Meet the Minds Behind{" "}
                <span className="text-primary italic">KryossWork</span>
              </h2>
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Our team is a diverse mix of visionary engineers, creative designers, strategic
                  consultants, and dedicated project managers — all united by a passion for building
                  exceptional digital products.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  With backgrounds spanning mobile, web, AI, cloud, and enterprise software, our experts
                  bring the perfect blend of skills to every project.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-lg text-sm font-medium hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/10">
                Meet Our Team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
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
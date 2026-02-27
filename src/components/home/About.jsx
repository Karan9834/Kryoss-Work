import { CheckCircle, ArrowRight } from "lucide-react";

const pills = [
  "Customer-Centric Approach",
  "Scalable & Secure Apps",
  "Innovative Solutions",
  "Reliable Digital Partner"];


export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">
              About KryossWork
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Building Digital Products That{" "}
              <span className="text-primary">Make a Difference</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              KryossWork is a product engineering company specializing in on-demand app
              development, white-label solutions, and enterprise digital transformation. Since our
              founding, we've delivered 250+ projects to clients across 70+ countries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of 40+ experts combines deep industry knowledge with cutting-edge technology
              to build products that scale, perform, and delight users.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              {pills.map((p) =>
                <div
                  key={p}
                  className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5">

                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{p}</span>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-md font-semibold hover:bg-orange-600 transition-colors">

              About Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right — Team Photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/whitelabel-assets/assets/images/about-team.jpg"
                alt="KryossWork Team"
                className="w-full h-[450px] object-cover"
                onError={(e) => {
                  if (!e.currentTarget.dataset.error) {
                    e.currentTarget.dataset.error = "true";
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80";
                  }
                }} />

            </div>
            {/* Decorative orange blob */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>);

}
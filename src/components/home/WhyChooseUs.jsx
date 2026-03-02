const reasons = [
  {
    image: "/whitelabel-assets/assets/images/why-choose/industry-solutions.webp",
    fallback: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
    title: "Industry-Specific Solutions",
    description:
      "We deeply understand your industry's nuances and deliver solutions crafted for your specific vertical and user base."
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/expert-team.webp",
    fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    title: "Expert Team & Support",
    description:
      "Our 40+ skilled developers, designers, and consultants are with you every step — from planning to post-launch."
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/track-record.webp",
    fallback: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&q=80",
    title: "Proven Track Record",
    description:
      "250+ successfully delivered projects across 70+ countries speak to our reliability and commitment to excellence."
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/tech.webp",
    fallback: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest frameworks, AI tools, and cloud infrastructure to future-proof your product."
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/user-centric.webp",
    fallback: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80",
    title: "User-Centric Approach",
    description:
      "Every design and development decision is guided by deep user research and proven UX principles."
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/end-to-end.webp",
    fallback: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
    title: "End-to-End Service",
    description:
      "From ideation and design to development, deployment, and ongoing support — we handle it all."
  }];


export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Why We Are the{" "}
            <span className="text-primary">Best Choice</span> for Your Digital Solution?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) =>
            <div
              key={r.title}
              className="rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:border-primary/20 transition-all group">

              <div className="h-48 overflow-hidden bg-gray-50">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { if (!e.currentTarget.dataset.error) { e.currentTarget.dataset.error = "true"; e.currentTarget.src = "/placeholder.svg"; } }} />

              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
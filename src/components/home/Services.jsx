import { useState } from "react";

const services = [
{
  id: "mobile",
  label: "Mobile App Development",
  image: "/whitelabel-assets/assets/images/mobile-app-development.png",
  tags: ["Flutter", "UI/UX Design", "Kotlin", "iOS", "Android", "MVP Development", "Swift", "React Native"],
  description:
  "We build high-performance native and cross-platform mobile apps tailored for your business goals."
},
{
  id: "ai",
  label: "Data & AI",
  image: "/whitelabel-assets/assets/images/data-ai.png",
  tags: ["Data Engineering", "Generative AI", "Blockchain", "Big Data", "Machine Learning", "NLP", "Computer Vision"],
  description:
  "Transform your business with data-driven insights and AI-powered automation solutions."
},
{
  id: "web",
  label: "Website Development",
  image: "/whitelabel-assets/assets/images/website-development.png",
  tags: ["MERN Stack", "Laravel", "React.JS", "Next.JS", "Node.js", "Python", "PHP", "Vue.JS"],
  description:
  "We deliver scalable, beautiful web solutions using the latest frameworks and best practices."
},
{
  id: "product",
  label: "Product Engineering",
  image: "/whitelabel-assets/assets/images/product-engineering.png",
  tags: ["Product Planning", "Consulting", "Cyber Security", "Quality Assurance", "Agile", "Architecture"],
  description:
  "End-to-end product engineering from ideation to deployment with expert consulting."
},
{
  id: "devops",
  label: "DevOps & Cloud",
  image: "/whitelabel-assets/assets/images/devops-cloud.png",
  tags: ["Cloud Consulting", "Cloud Migration", "Security", "CI/CD Automation", "AWS", "GCP", "Azure", "Kubernetes"],
  description:
  "Streamline your infrastructure with modern DevOps practices and cloud-native solutions."
}];


export default function Services() {
  const [active, setActive] = useState("mobile");
  const current = services.find((s) => s.id === active);

  return (
    <section
      id="services"
      className="py-24 bg-[#0B0F1A] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Services We Offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-6">
            Innovative{" "}
            <span className="text-primary italic">Cloud, AI, Web & Mobile App</span>{" "}
            Development Solutions
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {services.map((s) =>
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            active === s.id ?
            "bg-primary text-white shadow-lg shadow-orange-500/20" :
            "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"}`
            }>
              {s.label}
            </button>
          )}
        </div>

        {/* Service Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 grid md:grid-cols-2 gap-12 items-center transition-all duration-500">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">{current.label}</h3>
            <p className="text-base text-slate-400 leading-relaxed">{current.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {current.tags.map((tag) =>
              <span
                key={tag}
                className="bg-white/5 text-slate-400 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/5">
                  {tag}
                </span>
              )}
            </div>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-orange-600 transition-all hover:scale-105 shadow-md shadow-orange-500/10">
                Get Started
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={current.image}
              alt={current.label}
              className="max-h-72 object-contain"
                onError={(e) => { if (!e.currentTarget.dataset.error) { e.currentTarget.dataset.error = "true"; e.currentTarget.src = "/placeholder.svg"; } }} />
            
          </div>
        </div>
      </div>
    </section>);

}
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
      className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      
      {/* Hexagon Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0-6l22-12.7V22.7L28 10 6 22.7v24.6L28 60z' fill='%23f97316'/%3E%3C/svg%3E")`
        }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Services We Offer
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
            Innovative{" "}
            <span className="text-primary">Cloud, AI, Web & Mobile App</span>{" "}
            Development Solutions
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {services.map((s) =>
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
            active === s.id ?
            "bg-primary text-white" :
            "bg-white/10 text-white hover:bg-white/20"}`
            }>
            
              {s.label}
            </button>
          )}
        </div>

        {/* Service Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white">{current.label}</h3>
            <p className="text-white/70 leading-relaxed">{current.description}</p>
            <div className="flex flex-wrap gap-2">
              {current.tags.map((tag) =>
              <span
                key={tag}
                className="bg-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                
                  {tag}
                </span>
              )}
            </div>
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors">
              
              Get Started
            </a>
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
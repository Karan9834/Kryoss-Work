import { Bot, Sparkles, Brain, Users, Eye, Plug } from "lucide-react";

const aiServices = [
{
  icon: Brain,
  title: "AI Consulting",
  description: "Strategic AI roadmaps tailored to your business objectives and growth targets."
},
{
  icon: Bot,
  title: "Custom AI Models",
  description: "Build and deploy proprietary AI models fine-tuned for your domain and data."
},
{
  icon: Sparkles,
  title: "Generative AI",
  description: "Leverage cutting-edge generative models for content, code, and creative outputs."
},
{
  icon: Users,
  title: "AI Agents",
  description: "Autonomous AI agents that handle complex workflows and decision-making at scale."
},
{
  icon: Eye,
  title: "Computer Vision",
  description: "Intelligent visual recognition and analysis systems for real-world applications."
},
{
  icon: Plug,
  title: "AI Integration",
  description: "Seamlessly embed AI capabilities into your existing products and platforms."
}];


export default function AISolutions() {
  return (
    <section id="ai" className="py-24 bg-[#0B0F1A] relative overflow-hidden">
      {/* Orange glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            {/* Fox AI branding */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Fox AI</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-6">
                Next-Gen AI for{" "}
                <span className="text-primary italic">High-Growth Businesses</span>
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                Harness the power of artificial intelligence to automate processes, unlock insights,
                and build smarter products that outpace the competition.
              </p>
            </div>

            {/* AI Service Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {aiServices.map(({ icon: Icon, title, description }) =>
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-primary/20 transition-all group">
                
                  <div className="bg-primary/10 p-2.5 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">{title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-lg text-sm font-medium hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
              Explore AI Solutions
            </a>
          </div>

          {/* Right — Illustration */}
          <div className="flex justify-center">
            <img
              src="/whitelabel-assets/assets/images/ai-solutions.png"
              alt="AI Development Solutions"
              className="max-w-full max-h-[500px] object-contain"
                onError={(e) => { if (!e.currentTarget.dataset.error) { e.currentTarget.dataset.error = "true"; e.currentTarget.src = "/placeholder.svg"; } }} />
            
          </div>
        </div>
      </div>
    </section>);

}
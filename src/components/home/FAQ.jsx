import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What services does kryossone offer?",
    a: "kryossone offers a comprehensive range of services including mobile app development, web development, Data & AI solutions, product engineering, DevOps & cloud services, and white-label clone apps for on-demand businesses."
  },
  {
    q: "Can you build a custom mobile app for my business?",
    a: "Absolutely! We specialize in building custom iOS, Android, and cross-platform apps using Flutter, React Native, Swift, and Kotlin. We tailor every feature to your specific business needs and user expectations."
  },
  {
    q: "How long does it take to develop a website?",
    a: "Development timelines vary depending on complexity. A standard business website typically takes 2–4 weeks, while complex platforms with custom features may take 2–4 months. We provide detailed project timelines after initial discovery."
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes! We offer comprehensive post-launch support packages including bug fixes, performance monitoring, feature updates, security patches, and 24/7 emergency support to ensure your product stays healthy."
  },
  {
    q: "Can you integrate AI into my existing product?",
    a: "Yes, our AI integration service is designed to embed intelligent capabilities into existing platforms. We work with OpenAI, custom ML models, and enterprise AI frameworks to enhance your product without a complete rebuild."
  },
  {
    q: "How much does it cost to build an on-demand app?",
    a: "Costs vary widely based on features, platforms, and complexity. A basic MVP typically starts around $15,000–$30,000, while full-featured platforms can range from $50,000 to $150,000+. Contact us for a free custom quote."
  },
  {
    q: "Do you offer white-label clone app solutions?",
    a: "Yes! Our white-label clone apps are ready-to-launch solutions modeled after successful platforms like Uber, Swiggy, and Gojek. They're fully customizable with your brand identity and can be deployed in 4–6 weeks."
  },
  {
    q: "What DevOps and cloud services do you provide?",
    a: "We provide cloud consulting, migration, infrastructure automation, CI/CD pipeline setup, security hardening, and 24/7 monitoring across AWS, Google Cloud, and Azure environments."
  },
  {
    q: "Can you handle large-scale enterprise projects?",
    a: "Absolutely. We have extensive experience with enterprise-grade projects involving complex integrations, high-traffic architectures, multi-region deployments, and compliance requirements (HIPAA, GDPR, SOC2)."
  },
  {
    q: "How do I get started with kryossone?",
    a: "Getting started is easy! Simply click 'Get a Free Quote' or reach out via our contact form. We'll schedule a free discovery call to understand your requirements and provide a detailed proposal within 48 hours."
  }];


export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't find what you're looking for, feel free
            to contact us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, i) =>
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "border-primary shadow-lg bg-white" : "border-gray-300 bg-gray-50/50 hover:border-gray-400 hover:bg-white"}`
              }>

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left outline-none">

                <span className={`text-[17px] font-semibold leading-tight pr-4 ${open === i ? "text-primary" : "text-gray-900"}`}>{faq.q}</span>
                <div className={`shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                  {open === i ?
                    <Minus className="h-5 w-5 text-primary" /> :
                    <Plus className="h-5 w-5 text-gray-400" />
                  }
                </div>
              </button>
              {open === i &&
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-base text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              }
            </div>
          )}
        </div>
      </div>
    </section>);

}
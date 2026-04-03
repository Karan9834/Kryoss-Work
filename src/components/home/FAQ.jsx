import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What services does KryossWork offer?",
    a: "KryossWork offers a comprehensive range of services including mobile app development, web development, Data & AI solutions, product engineering, DevOps & cloud services, and white-label clone apps for on-demand businesses."
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
    q: "How do I get started with KryossWork?",
    a: "Getting started is easy! Simply click 'Get a Free Quote' or reach out via our contact form. We'll schedule a free discovery call to understand your requirements and provide a detailed proposal within 48 hours."
  }];


export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't find what you're looking for, feel free
            to contact us.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) =>
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${open === i ? "border-primary shadow-sm" : "border-border"}`
              }>

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">

                <span className="text-lg font-medium text-gray-900 pr-4">{faq.q}</span>
                {open === i ?
                  <Minus className="h-5 w-5 text-primary shrink-0" /> :
                  <Plus className="h-5 w-5 text-gray-400 shrink-0" />
                }
              </button>
              {open === i &&
                <div className="px-5 pb-5">
                  <p className="text-base text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              }
            </div>
          )}
        </div>
      </div>
    </section>);

}
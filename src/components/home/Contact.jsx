import { useState } from "react";
import { MessageCircle, Mail, Calendar, Send } from "lucide-react";

const products = [
  "Delivery App",
  "Transport/Taxi App",
  "Handyman App",
  "Fox-Jek Super App",
  "Custom Mobile App",
  "Web Application",
  "AI/ML Solution",
  "DevOps/Cloud",
  "Other"];


const budgets = [
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+"];


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    budget: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Let's Build Something{" "}
            <span className="text-primary">Amazing Together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/917016842729"
                      className="font-semibold text-foreground hover:text-primary transition-colors">

                      +91 70168 42729
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:hello@kryosswork.com"
                      className="font-semibold text-foreground hover:text-primary transition-colors">

                      hello@kryosswork.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Schedule a Meeting</p>
                    <a
                      href="#"
                      className="font-semibold text-primary hover:underline">

                      Book a Free Consultation →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/whitelabel-assets/assets/images/contact-illustration.png"
              alt="Contact Us"
              className="max-h-64 object-contain"
              onError={(e) => { if (!e.currentTarget.dataset.error) { e.currentTarget.dataset.error = "true"; e.currentTarget.src = "/placeholder.svg"; } }} />

          </div>

          {/* Right — Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-gray-50 rounded-2xl p-8 border border-border">

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />

              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />

              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />

            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Product</label>
                <select
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">

                  <option value="">Select Product</option>
                  {products.map((p) =>
                    <option key={p}>{p}</option>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Budget</label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">

                  <option value="">Select Budget</option>
                  {budgets.map((b) =>
                    <option key={b}>{b}</option>
                  )}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />

            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">

              {submitted ?
                "Message Sent! ✓" :

                <>
                  <Send className="h-4 w-4" />
                  Contact Us
                </>
              }
            </button>
          </form>
        </div>
      </div>
    </section>);

}
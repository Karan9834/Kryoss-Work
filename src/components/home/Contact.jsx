import { useState } from "react";
import { MessageCircle, Mail, Phone, Calendar, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white via-orange-50/40 to-white"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Let’s Build Something <span className="text-primary">Great</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between h-full">

            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Tell us about your idea
                </h3>
                <p className="text-sm text-gray-500 mt-2 max-w-sm leading-relaxed">
                  We design and develop scalable digital products for startups and businesses.
                </p>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-2 gap-4 text-sm max-w-md">
                {[
                  { icon: MessageCircle, text: "WhatsApp", link: "https://wa.me/917016842729" },
                  { icon: Phone, text: "+91 70168 42729", link: "tel:+917016842729" },
                  { icon: Mail, text: "hello@kryosswork.com", link: "mailto:hello@kryosswork.com" },
                  { icon: Calendar, text: "Book a call", link: "#" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.link}
                      className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition"
                    >
                      <div className="p-2 rounded-lg bg-orange-50">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-700 text-sm">
                        {item.text}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Image */}
            <div className="mt-10">
              <img
                src="https://illustrations.popsy.co/gray/work-from-home.svg"
                alt="Contact"
                className="max-h-60 object-contain"
              />
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="h-full flex">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-between bg-white p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition"
            >

              {/* ✅ NEW FORM HEADING */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Start a Project
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Fill the form and we’ll get back to you shortly.
                </p>
              </div>

              <div className="space-y-5">

                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition"
                />

                <input
                  required
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition"
                />

                <input
                  required
                  type="tel"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition"
                />

                <textarea
                  required
                  rows={4}
                  placeholder="Your project idea..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-primary text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-orange-600 active:scale-[0.98] transition"
              >
                {submitted ? "Sent ✓" : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
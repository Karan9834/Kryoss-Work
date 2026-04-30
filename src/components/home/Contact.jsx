import { useState } from "react";
import { MessageCircle, Mail, Phone, Calendar, Send, CheckCircle, X, User, Globe } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  // EmailJS configuration
  const SERVICE_ID = "service_89wfn1t";
  const TEMPLATE_ID = "template_2dnzvsa";
  const PUBLIC_KEY = "_MpRtWWJMYsm3lC-8";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      emailjs.init(PUBLIC_KEY);

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
        to_name: "Kryoss Team",
        reply_to: form.email,
      };

      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      if (response.status === 200) {
        setSubmitted(true);
        setShowPopup(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        
        // Auto close popup after 5 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 bg-gradient-to-b from-white via-orange-50/40 to-white"
      >
        <div className="max-w-6xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
              Let's Build Something <span className="text-primary">Great</span>
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
                    { icon: Mail, text: "hello@kryossone.com", link: "mailto:hello@kryossone.com" },
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

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Start a Project
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Fill the form and we'll get back to you shortly.
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

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
                  disabled={loading}
                  className="mt-6 w-full bg-primary text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-orange-600 active:scale-[0.98] transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : submitted ? (
                    "Sent ✓"
                  ) : (
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

      {/* Professional Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-white" />
                <h3 className="text-white font-bold text-lg">Success!</h3>
              </div>
              <button 
                onClick={closePopup}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600 text-sm">
                  Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
                </p>
              </div>
              
              {/* Summary */}
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Message Summary</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600">{form.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600">{form.email}</span>
                  </div>
                  {form.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-600">{form.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
              <button
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-300"
              >
                Got it, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
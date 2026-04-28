import React, { useState } from "react";
import { CheckCircle, AlertCircle, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Contact number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[\s\-\+\(\)]/g, ""))) {
      tempErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus({
        submitted: false,
        success: false,
        error: true,
        message: "Please fix the errors in the form.",
      });
      return;
    }

    setStatus({ submitted: true, success: false, error: false, message: "" });

    // Simulated API call
    setTimeout(() => {
      setStatus({
        submitted: false,
        success: true,
        error: false,
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="absolute md:top-0 top-10 bg-white text-black rounded-3xl shadow-2xl p-8 w-full border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <h2 className="font-extrabold text-4xl mb-2 tracking-tight text-gray-900">
            Let’s Talk <span className="text-orange-500 underline decoration-orange-200 decoration-4 underline-offset-8">Together!</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6 font-medium">Have an idea? Let's make it a reality.</p>
        </div>

        {/* Notifications */}
        {status.success && (
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-semibold">{status.message}</p>
          </div>
        )}

        {status.error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-semibold">{status.message}</p>
          </div>
        )}

        <div className="space-y-4">
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 group-hover:border-orange-300'} rounded-xl px-5 py-3.5 text-sm outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.name}</p>}
          </div>

          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 group-hover:border-orange-300'} rounded-xl px-5 py-3.5 text-sm outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.email}</p>}
          </div>

          <div className="relative group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              className={`w-full border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 group-hover:border-orange-300'} rounded-xl px-5 py-3.5 text-sm outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.phone}</p>}
          </div>

          <div className="relative group">
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website (Optional)"
              className="w-full border border-gray-200 group-hover:border-orange-300 rounded-xl px-5 py-3.5 text-sm outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300"
            />
          </div>

          <div className="relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className={`w-full border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 group-hover:border-orange-300'} rounded-xl px-5 py-3.5 text-sm outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 resize-none`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={status.submitted}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:scale-100"
        >
          {status.submitted ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </>
          )}
        </button>

        <p className="text-[11px] text-gray-400 text-center font-medium">
          We'll get back to you within 24 hours. Promise.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
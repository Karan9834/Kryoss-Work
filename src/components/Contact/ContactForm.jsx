import React, { useState } from "react";
import { CheckCircle, AlertCircle, Send, X, Mail, Phone, User, Globe } from "lucide-react";
import emailjs from '@emailjs/browser';

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
  const [showPopup, setShowPopup] = useState(false);

  // EmailJS configuration
  const SERVICE_ID = "service_fzo18v4";
  const TEMPLATE_ID = "template_098rfiw";
  const PUBLIC_KEY = "0Rqoqe4pxTHIKV1qg";

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
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

    try {
      emailjs.init(PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        website: formData.website || "Not provided",
        message: formData.message,
        to_name: "Kryoss Team",
        reply_to: formData.email,
      };

      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      if (response.status === 200) {
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
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        submitted: false,
        success: false,
        error: true,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setShowPopup(true);
      // Auto close popup after 8 seconds for errors, 5 for success
      setTimeout(() => {
        setShowPopup(false);
      }, status.error ? 8000 : 5000);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="absolute md:top-0 top-10 bg-white text-black rounded-3xl shadow-2xl p-8 w-full border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h2 className="font-extrabold text-4xl mb-2 tracking-tight text-gray-900">
              Let's Talk <span className="text-orange-500 underline decoration-orange-200 decoration-4 underline-offset-8">Together!</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6 font-medium">Have an idea? Let's make it a reality.</p>
          </div>



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

      {/* Professional Status Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className={`bg-gradient-to-r ${status.error ? "from-red-500 to-rose-600" : "from-green-500 to-emerald-600"} px-6 py-4 flex justify-between items-center`}>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold text-lg">
                  {status.error ? "Error!" : "Success!"}
                </h3>
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
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {status.error ? "Failed to Send Message" : "Message Sent Successfully!"}
                </h4>
                <p className="text-gray-600 text-sm">
                  {status.error 
                    ? "We encountered an issue while sending your message. Please check your connection or try again later."
                    : "Thank you for reaching out to us. We've received your message and will get back to you within 24 hours."}
                </p>
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
              <button
                onClick={closePopup}
                className={`w-full ${status.error ? "bg-gray-800 hover:bg-gray-900" : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"} text-white font-semibold py-2.5 rounded-xl transition-all duration-300`}
              >
                {status.error ? "Close and Try Again" : "Got it, Thanks!"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
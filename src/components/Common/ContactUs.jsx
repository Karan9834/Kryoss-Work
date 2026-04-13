import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
} from "lucide-react";

// Import your image
import contactImage from "../../assets/E-Commerce-App/contact2.jpg";

const ContactUs = ({
  theme = "purple",
  productName = "E-Commerce",
  bgGradient = "",
  accentGradient = "",
  buttonGradient = "",
  showImage = true,
  customImage = null,
}) => {
  // Theme-based color mapping for e-commerce
  const themeColors = {
    purple: {
      light: "purple-50",
      medium: "purple-500",
      dark: "purple-600",
      gradient: "from-purple-500 to-pink-500",
      badge: "bg-purple-100 text-purple-600",
    },
    teal: {
      light: "cyan-50",
      medium: "cyan-500",
      dark: "teal-600",
      gradient: "from-cyan-500 to-emerald-500",
      badge: "bg-cyan-100 text-cyan-600",
    },
    "orange-teal": {
      light: "#FFF7ED",
      medium: "orange-500",
      dark: "orange-600",
      gradient: "from-orange-500 to-teal-500",
      badge: "bg-orange-100 text-orange-600",
    },
    blue: {
      light: "blue-50",
      medium: "blue-500",
      dark: "blue-600",
      gradient: "from-blue-500 to-cyan-500",
      badge: "bg-blue-100 text-blue-600",
    },
    green: {
      light: "green-50",
      medium: "green-500",
      dark: "green-600",
      gradient: "from-green-500 to-emerald-500",
      badge: "bg-green-100 text-green-600",
    },
    orange: {
      light: "orange-50",
      medium: "orange-500",
      dark: "orange-600",
      gradient: "from-orange-500 to-red-500",
      badge: "bg-orange-100 text-orange-600",
    },
  };

  const colors = themeColors[theme] || themeColors.purple;

  const currentBgGradient = bgGradient || `from-${colors.light} to-white`;
  const currentAccentGradient = accentGradient || colors.gradient;
  const currentButtonGradient = buttonGradient || colors.gradient;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  // Set product name in message when component mounts
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      message: `I'm interested in your ${productName} solution. Please provide more details.`,
    }));
  }, [productName]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (simulated for now)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show submitting state
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! We'll contact you soon.",
    });

    // Log form data (you can replace this with actual API call later)
    console.log("Form submitted:", formData);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: "" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: `I'm interested in your ${productName} solution. Please provide more details.`,
      });
    }, 3000);
  };

  const companyDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 E-Commerce Blvd", "Suite 200", "San Francisco, CA 94105"],
      gradient: currentAccentGradient,
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      gradient: currentAccentGradient,
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["sales@ecommerceapp.com", "support@ecommerceapp.com"],
      gradient: currentAccentGradient,
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9am - 8pm EST",
        "Saturday: 10am - 4pm EST",
        "Sunday: Closed",
      ],
      gradient: currentAccentGradient,
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Instagram, url: "#", label: "Instagram" },
  ];

  return (
    <section
      className={`w-full bg-gradient-to-b ${currentBgGradient} py-24 px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} rounded-full mb-6`}
          >
            <MessageCircle size={16} />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}
            >
              Our Team
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our {productName} solution? We're here to help!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Company Details */}
          <div className="lg:w-1/2 space-y-8">
            {/* Image with improved layout */}
            {showImage && (
              <div className="relative mb-10">
                {/* Decorative elements around image */}
                <div
                  className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-2xl opacity-20`}
                ></div>
                <div
                  className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-2xl opacity-20`}
                ></div>

                {/* Image container with improved styling */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${currentAccentGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  <img
                    src={customImage || contactImage}
                    alt="Contact us"
                    className="w-full h-[300px] object-fit group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <p className="text-sm font-medium text-gray-800">
                      We're here to help
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Company Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} text-white mb-4`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Form in Box */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
              {/* Decorative gradient elements */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-3xl opacity-10`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-3xl opacity-10`}
              ></div>

              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600 text-sm">
                  Interested in our {productName} solution? Fill out the form
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Success Message */}
              {formStatus.success && (
                <div
                  className={`mb-6 p-4 bg-gradient-to-r ${currentAccentGradient} text-white rounded-xl flex items-center gap-3`}
                >
                  <CheckCircle size={20} />
                  <span>{formStatus.message}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-${colors.medium} focus:border-transparent transition-all duration-300`}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-${colors.medium} focus:border-transparent transition-all duration-300`}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-${colors.medium} focus:border-transparent transition-all duration-300`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-${colors.medium} focus:border-transparent transition-all duration-300 resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.submitted}
                  className={`w-full px-8 py-4 bg-gradient-to-r ${currentButtonGradient} text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {formStatus.submitted ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting, you agree to our privacy policy and consent to
                  being contacted.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
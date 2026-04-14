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
  ExternalLink,
} from "lucide-react";

// Import your image
import contactImage from "../../assets/E-Commerce-App/contact-us.jpg";

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
      focusRing: "focus:ring-purple-500",
    },
    teal: {
      light: "cyan-50",
      medium: "cyan-500",
      dark: "teal-600",
      gradient: "from-cyan-500 to-emerald-500",
      badge: "bg-cyan-100 text-cyan-600",
      focusRing: "focus:ring-cyan-500",
    },
    "orange-teal": {
      light: "#FFF7ED",
      medium: "orange-500",
      dark: "orange-600",
      gradient: "from-orange-500 to-teal-500",
      badge: "bg-orange-100 text-orange-600",
      focusRing: "focus:ring-orange-500",
    },
    blue: {
      light: "blue-50",
      medium: "blue-500",
      dark: "blue-600",
      gradient: "from-blue-500 to-cyan-500",
      badge: "bg-blue-100 text-blue-600",
      focusRing: "focus:ring-blue-500",
    },
    green: {
      light: "green-50",
      medium: "green-500",
      dark: "green-600",
      gradient: "from-green-500 to-emerald-500",
      badge: "bg-green-100 text-green-600",
      focusRing: "focus:ring-green-500",
    },
    orange: {
      light: "orange-50",
      medium: "orange-500",
      dark: "orange-600",
      gradient: "from-orange-500 to-red-500",
      badge: "bg-orange-100 text-orange-600",
      focusRing: "focus:ring-orange-500",
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

    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! We'll contact you soon.",
    });

    console.log("Form submitted:", formData);

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

  // Function to generate Google Maps link from address
  const getGoogleMapsLink = () => {
    const address = "Kryoss Softech Private Ltd, Office No. 837-A, 8th Floor, JMD Megapolis, Sohna Road, Gurgaon, Haryana, India";
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  // Company details with interactive links
  const companyDetails = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "Kryoss Softech Private Ltd,",
        "Office No. 837-A, 8th Floor",
        "JMD Megapolis, Sohna Road",
        "Gurgaon, Haryana, India",
      ],
      gradient: currentAccentGradient,
      isLinkable: true,
      linkUrl: getGoogleMapsLink(),
      linkText: "View on Maps →",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { text: "sales@kryoss.com", mailto: "mailto:sales@kryoss.com" },
        { text: "info@kryoss.com", mailto: "mailto:info@kryoss.com" },
      ],
      gradient: currentAccentGradient,
      isEmail: true,
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        { text: "011 6926 9633", tel: "tel:+911169269633" },
        { text: "Mon–Fri, 10AM–6PM", isPlain: true },
      ],
      gradient: currentAccentGradient,
      isPhone: true,
    },
  ];

  // Office Timings Box
  const officeTimings = {
    icon: Clock,
    title: "Office Timings",
    schedule: [
      { day: "Monday - Friday", hours: "10:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    note: "IST (Indian Standard Time)",
    gradient: currentAccentGradient,
  };

  return (
    <section
      className={`w-full bg-gradient-to-b ${currentBgGradient} py-16 px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge - Updated Typography */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} rounded-full mb-5 text-[12px] font-medium tracking-[0.05em] uppercase`}
          >
            <MessageCircle size={14} />
            <span>Get In Touch</span>
          </div>

          {/* Heading - Updated Typography */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-3">
            Contact
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}
            >
              Our Team
            </span>
          </h2>
          
          {/* Description - Updated Typography */}
          <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 max-w-2xl mx-auto">
            Have questions about our {productName} solution? We're here to help!
          </p>
        </div>

        {/* Main Content - Flex row with equal heights using items-stretch */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Side - Company Details */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Image - Properly sized */}
            {showImage && (
              <div className="relative mb-6 flex-shrink-0">
                <div
                  className={`absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-2xl opacity-20`}
                ></div>
                <div
                  className={`absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-2xl opacity-20`}
                ></div>

                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={customImage || contactImage}
                    alt="Contact us"
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${currentAccentGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                    <p className="text-xs sm:text-sm font-medium text-gray-800">
                      We're here to help
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Company Details Grid - 2x2 layout that grows to fill space */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
              {companyDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${item.gradient} text-white mb-3 flex-shrink-0`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex-1">
                      {item.isLinkable && (
                        <>
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6] mb-0.5">
                              {detail}
                            </p>
                          ))}
                          <a
                            href={item.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[14px] md:text-[16px] font-medium mt-2 transition-colors text-purple-600 hover:text-purple-700"
                          >
                            {item.linkText}
                            <ExternalLink size={14} />
                          </a>
                        </>
                      )}

                      {item.isEmail && (
                        <div className="space-y-1.5">
                          {item.details.map((detail, idx) => (
                            <a
                              key={idx}
                              href={detail.mailto}
                              className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6] hover:text-purple-600 transition-colors block break-words"
                            >
                              {detail.text}
                            </a>
                          ))}
                        </div>
                      )}

                      {item.isPhone && (
                        <div className="space-y-1.5">
                          {item.details.map((detail, idx) => (
                            detail.isPlain ? (
                              <p key={idx} className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                {detail.text}
                              </p>
                            ) : (
                              <a
                                key={idx}
                                href={detail.tel}
                                className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6] hover:text-purple-600 transition-colors block font-medium"
                              >
                                {detail.text}
                              </a>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Office Timings Box */}
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${officeTimings.gradient} text-white mb-3 flex-shrink-0`}
                >
                  <Clock size={20} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {officeTimings.title}
                </h3>
                <div className="space-y-2 flex-1">
                  {officeTimings.schedule.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline text-[14px] md:text-[16px] font-normal leading-[1.6]">
                      <span className="font-medium text-gray-800">{item.day}</span>
                      <span className="text-gray-600">{item.hours}</span>
                    </div>
                  ))}
                  <div className="pt-1.5 mt-1.5 border-t border-gray-100">
                    <p className="text-[12px] md:text-[14px] text-gray-500 flex items-center gap-1">
                      <Clock size={12} />
                      {officeTimings.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form in Box - Now aligned with boxes bottom */}
          <div className="lg:w-1/2 flex">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden w-full flex flex-col">
              {/* Decorative gradient elements */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-3xl opacity-10`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-3xl opacity-10`}
              ></div>

              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Send us a Message
                </h3>
                <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                  Interested in our {productName} solution? Fill out the form
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Success Message */}
              {formStatus.success && (
                <div
                  className={`mb-5 p-3 bg-gradient-to-r ${currentAccentGradient} text-white rounded-lg flex items-center gap-2 text-sm`}
                >
                  <CheckCircle size={16} />
                  <span>{formStatus.message}</span>
                </div>
              )}

              {/* Form - Will stretch to fill available space */}
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                {/* Name Field */}
                <div>
                  <label className="block text-[14px] md:text-[16px] font-medium text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 ${colors.focusRing} focus:border-transparent transition-all duration-300 text-[14px] md:text-[16px]`}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-[14px] md:text-[16px] font-medium text-gray-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 ${colors.focusRing} focus:border-transparent transition-all duration-300 text-[14px] md:text-[16px]`}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-[14px] md:text-[16px] font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 ${colors.focusRing} focus:border-transparent transition-all duration-300 text-[14px] md:text-[16px]`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Message Field - Grows to take remaining space */}
                <div className="flex-1">
                  <label className="block text-[14px] md:text-[16px] font-medium text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`w-full h-full min-h-[100px] px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 ${colors.focusRing} focus:border-transparent transition-all duration-300 resize-none text-[14px] md:text-[16px]`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.submitted}
                  className={`w-full px-6 py-3 bg-gradient-to-r ${currentButtonGradient} text-white font-semibold text-[16px] tracking-[0.01em] rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed mt-2`}
                >
                  {formStatus.submitted ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-[12px] text-gray-500 text-center mt-3">
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
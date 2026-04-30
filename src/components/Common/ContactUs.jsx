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
  X,
  User,
  AlertCircle,
} from "lucide-react";
import emailjs from '@emailjs/browser';

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

  // EmailJS configuration
  const SERVICE_ID = "service_cx1izwh";
  const TEMPLATE_ID = "template_66o6bb4";
  const PUBLIC_KEY = "_MpRtWWJMYsm3lC-8";

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
    error: false,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (formData.phone.trim() && !/^\d{10,15}$/.test(formData.phone.replace(/[\s\-\+\(\)]/g, ""))) {
      tempErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setFormStatus({
        submitted: false,
        success: false,
        error: true,
        message: "Please fix the errors in the form.",
      });
      return;
    }

    setLoading(true);
    setFormStatus({
      submitted: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      emailjs.init(PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        solution_name: productName,
        to_name: "Kryoss Team",
        reply_to: formData.email,
      };

      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      if (response.status === 200) {
        setFormStatus({
          submitted: false,
          success: true,
          error: false,
          message: "Thank you! Your message has been sent successfully.",
        });
        setShowPopup(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: `I'm interested in your ${productName} solution. Please provide more details.`,
        });
        
        // Auto close popup after 5 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus({
        submitted: false,
        success: false,
        error: true,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
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
      { day: "Saturday-Sunday", hours: "Closed" },
    ],
    note: "IST (Indian Standard Time)",
    gradient: currentAccentGradient,
  };

  return (
    <>
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

          {/* Main Content - Flex row with equal heights */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Left Side - Company Details */}
            <div className="lg:w-1/2 flex flex-col">
              {/* Image - Smaller and balanced */}
              {showImage && (
                <div className="relative mb-5 flex-shrink-0">
                  <div
                    className={`absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-2xl opacity-20`}
                  ></div>
                  <div
                    className={`absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-2xl opacity-20`}
                  ></div>

                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img
                      src={customImage || contactImage}
                      alt="Contact us"
                      className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-700"
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

              {/* Company Details Grid - 2x2 layout with equal box sizes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {companyDetails.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r ${item.gradient} text-white mb-2 flex-shrink-0`}
                      >
                        <Icon size={18} />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                        {item.title}
                      </h3>

                      <div className="flex-1">
                        {item.isLinkable && (
                          <>
                            {item.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600 text-[12px] md:text-[13px] font-normal leading-[1.5] mb-0.5">
                                {detail}
                              </p>
                            ))}
                            <a
                              href={item.linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[12px] md:text-[13px] font-medium mt-1.5 transition-colors text-purple-600 hover:text-purple-700"
                            >
                              {item.linkText}
                              <ExternalLink size={12} />
                            </a>
                          </>
                        )}

                        {item.isEmail && (
                          <div className="space-y-1">
                            {item.details.map((detail, idx) => (
                              <a
                                key={idx}
                                href={detail.mailto}
                                className="text-gray-600 text-[12px] md:text-[13px] font-normal leading-[1.5] hover:text-purple-600 transition-colors block break-words"
                              >
                                {detail.text}
                              </a>
                            ))}
                          </div>
                        )}

                        {item.isPhone && (
                          <div className="space-y-1">
                            {item.details.map((detail, idx) => (
                              detail.isPlain ? (
                                <p key={idx} className="text-gray-600 text-[12px] md:text-[13px] font-normal leading-[1.5]">
                                  {detail.text}
                                </p>
                              ) : (
                                <a
                                  key={idx}
                                  href={detail.tel}
                                  className="text-gray-600 text-[12px] md:text-[13px] font-normal leading-[1.5] hover:text-purple-600 transition-colors block font-medium"
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

                {/* Office Timings Box - Same size as others */}
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r ${officeTimings.gradient} text-white mb-2 flex-shrink-0`}
                  >
                    <Clock size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                    {officeTimings.title}
                  </h3>
                  <div className="space-y-1.5 flex-1">
                    {officeTimings.schedule.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-baseline text-[12px] md:text-[13px] font-normal leading-[1.5]">
                        <span className="font-medium text-gray-800">{item.day}</span>
                        <span className="text-gray-600">{item.hours}</span>
                      </div>
                    ))}
                    <div className="pt-1 mt-1 border-t border-gray-100">
                      <p className="text-[11px] md:text-[12px] text-gray-500 flex items-center gap-1">
                        <Clock size={10} />
                        {officeTimings.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form in Box - Compact and balanced */}
            <div className="lg:w-1/2 flex">
              <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border border-gray-100 relative overflow-hidden w-full flex flex-col">
                {/* Decorative gradient elements */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-3xl opacity-10`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r ${currentAccentGradient} rounded-full blur-3xl opacity-10`}
                ></div>

                {/* Form Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600 text-[13px] md:text-[14px] font-normal leading-[1.5]">
                    Interested in our {productName} solution? Fill out the form
                    and we'll get back to you within 24 hours.
                  </p>
                </div>

                {/* Status Message */}
                {formStatus.success && !showPopup && (
                  <div
                    className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2 text-sm animate-in fade-in slide-in-from-top-2"
                  >
                    <CheckCircle size={16} />
                    <span>{formStatus.message}</span>
                  </div>
                )}

                {formStatus.error && (
                  <div
                    className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2 text-sm animate-in fade-in slide-in-from-top-2"
                  >
                    <AlertCircle size={16} className="text-red-500" />
                    <span>{formStatus.message}</span>
                  </div>
                )}

                {/* Form - Increased textarea height and reduced gap */}
                <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
                  {/* Name Field */}
                  <div>
                    <label className="block text-[13px] md:text-[14px] font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 ${colors.focusRing} focus:border-transparent transition-all duration-300 text-[13px] md:text-[14px]`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-[13px] md:text-[14px] font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 ${colors.focusRing} focus:border-transparent transition-all duration-300 text-[13px] md:text-[14px]`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-[13px] md:text-[14px] font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 rounded-lg border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 ${colors.focusRing} focus:border-transparent transition-all duration-300 text-[13px] md:text-[14px]`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                  </div>

                  {/* Message Field - Increased textarea height */}
                  <div className="flex-1">
                    <label className="block text-[13px] md:text-[14px] font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-3 py-2 rounded-lg border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 ${colors.focusRing} focus:border-transparent transition-all duration-300 resize-none text-[13px] md:text-[14px]`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button - Reduced top margin to close gap */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-4 py-2.5 bg-gradient-to-r ${currentButtonGradient} text-white font-semibold text-[14px] tracking-[0.01em] rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-[11px] text-gray-500 text-center mt-2">
                    By submitting, you agree to our privacy policy and consent to
                    being contacted.
                  </p>
                </form>
              </div>
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
                  Thank you for reaching out to us. We've received your inquiry about <span className="font-semibold text-orange-600">{productName}</span> and will get back to you within 24 hours.
                </p>
              </div>
              
              {/* Summary */}
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Message Summary</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600">{formData.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600">{formData.email}</span>
                  </div>
                  {formData.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-600">{formData.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600 font-medium">{productName}</span>
                  </div>
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
};

export default ContactUs;
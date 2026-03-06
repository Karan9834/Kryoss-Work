import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does the milk delivery app streamline daily operations?",
      answer:
        "Our milk delivery app automates the entire ordering and delivery process, making it easier for customers to subscribe to daily milk deliveries or place one-time orders. The app notifies drivers in real time about assigned deliveries, ensuring timely service. Additionally, the admin panel provides full control over order tracking, payments, and customer management, simplifying operations for business owners",
    },
    {
      question: "Can I personalize the app with my brand identity?",
      answer:
        "Absolutely! Our white-label milk delivery app allows you to customize every aspect, from the logo and color scheme to the user interface. This ensures that your app reflects your brand’s identity, offering a unique and professional look that enhances customer trust and loyalty. With complete control over the branding, you can establish a strong presence in the online milk delivery market.",
    },
    {
      question: "Does the app support subscription-based deliveries for customers?",
      answer:
        "Yes! Our app is designed to handle flexible subscription models, allowing customers to schedule daily or weekly deliveries with ease. They can modify their subscription plans, pause deliveries when needed, and even add extra items to their regular orders. The automated system ensures seamless recurring deliveries without manual intervention from the admin.",
    },
    {
      question: "What payment options are available for customers?",
      answer:
        "To provide convenience, our app supports multiple secure payment methods, including credit and debit cards, mobile wallets, UPI, and cash on delivery. Integrated with trusted payment gateways, the app ensures safe and seamless transactions, reducing payment failures and enhancing customer experience.",
    },
    {
      question: "Is there an option for customers to pause their milk delivery when on vacation?",
      answer:
        "Yes! Customers can activate the 'Vacation Mode' feature to temporarily pause their milk delivery service. They simply need to select the start and end dates, and the app will automatically resume deliveries once the specified period ends. This feature prevents unnecessary deliveries and improves user satisfaction.",
    },
    {
      question: "How does the real-time driver tracking feature benefit my business?",
      answer:
        "The app includes a built-in GPS tracking system that allows you to monitor your delivery drivers in real time. This feature helps optimize delivery routes, improve efficiency, and ensure that orders are delivered on time. It also enhances transparency by allowing customers to track their orders and receive estimated delivery times.",
    },
    {
      question: "What kind of reports and insights does the admin dashboard provide?",
      answer:
        "The admin panel offers comprehensive reports on daily orders, revenue, customer activity, driver performance, and subscription trends. These real-time insights help business owners analyze demand patterns, identify growth opportunities, and make data-driven decisions to improve overall efficiency.",
    },
    {
      question: "Can customers set multiple delivery locations for their orders?",
      answer:
        "Yes! Customers can add multiple delivery addresses to their profiles, such as home, office, or a secondary residence. They can easily switch between locations while placing an order, ensuring hassle-free and convenient deliveries wherever they are.",
    },
    {
      question: "Is there a feature to offer discounts, promo codes, or referral rewards?",
      answer:
        "Yes! Our milk delivery app comes with built-in marketing tools that enable admins to create promotional offers, discount coupons, and referral programs. This helps attract new customers, encourage repeat orders, and boost overall customer retention. The admin panel provides full control over setting up and managing these offers.",
    },
    {
      question: "How quickly can I launch my online milk delivery app?",
      answer:
        "With our ready-made white-label solution, you can launch your fully customized milk delivery app within just 5 working days. We handle everything from branding and app setup to deployment on the Play Store and App Store. Our goal is to get your business online as quickly as possible, so you can start delivering milk to customers without any delays.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-gray-200 
                          text-black  px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
            FAQ’s
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">
          Have any questions?
          </h2>

        </div>

        {/* ===== FAQ GRID ===== */}
        <div className="grid md:grid-cols-2 gap-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 
                         hover:shadow-md transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <Minus className="text-[#003C52]" />
                ) : (
                  <Plus className="text-[#003C52]" />
                )}
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;
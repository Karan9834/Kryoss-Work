import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is an Alcohol Delivery App Clone Script?",
      answer:
        "An Alcohol Delivery App Clone Script is a pre-built solution that mimics the core functionalities of popular alcohol delivery platforms. It provides all the essential features necessary to launch your own liquor delivery service without the long development cycle. This ready-made script includes a user app, driver app, and admin panel, allowing you to quickly customize, brand, and deploy the app to both Android and iOS platforms.",
    },
     {
      question: "How fast can I launch my Alcohol Delivery App?",
      answer:
        "With our Alcohol Delivery App Clone Script, you can have your app up and running in just 5 working days. Unlike traditional app development that can take months, our solution is ready to go and can be launched on the Play Store and App Store in a fraction of the time, enabling you to start your business quickly and efficiently.",
    },
     {
      question: "Is it possible to customize the Alcohol Delivery App Clone Script for my business?",
      answer:
        "Yes, our Alcohol Delivery App Clone Script is fully customizable. You can tailor the app to match your business model, branding, and design preferences. Whether you want to add unique features, adjust colors, or modify user interface elements, we offer flexibility to make sure your app stands out and fits your business needs.",
    },
     {
      question: "What features are included in the Alcohol Delivery App Clone Script?",
      answer:
        "Our Alcohol Delivery App Clone Script includes a comprehensive set of features for both users and admin panels. Key features include: User App: Browse liquor stores, place orders, real-time tracking, and secure payment options. Driver App: Order management, route optimization, and delivery tracking. Store App: Manage inventory, process orders, and track deliveries. Admin Panel: Full control over operations, detailed analytics, order management, and customer management.",
    },
     {
      question: "Can I integrate third-party services into my Alcohol Delivery App?",
      answer:
        "Absolutely! Our Alcohol Delivery App Clone Script supports third-party integrations for services like payment gateways, maps and navigation, and customer support systems. You can easily integrate popular services such as Google Maps, Stripe, PayPal, and more to enhance the functionality of your app.",
    },
     {
      question: "How secure is the Alcohol Delivery App for customers and business owners?",
      answer:
        "Security is a top priority in our Alcohol Delivery App Clone Script. The app is built with industry-standard encryption protocols to ensure secure transactions and data protection. From customer information to payment details, everything is securely stored and protected. We also follow best practices in data privacy and compliance with relevant regulations to safeguard your business and users.",
    },
     {
      question: "How do I manage orders and deliveries from the admin panel?",
      answer:
        "The Admin Panel provides a comprehensive dashboard for managing orders and deliveries. You can view all incoming orders, assign them to drivers, monitor delivery progress, and track customer interactions. Additionally, the panel provides powerful analytics tools that help you make data-driven decisions for your alcohol delivery business, optimizing operations and improving customer service.",
    },
     {
      question: "Can I offer promotions and discounts through the Alcohol Delivery App?",
      answer:
        "Yes, you can offer discounts, promotions, and seasonal offers directly through your Alcohol Delivery App. The Admin Panel lets you create and manage special offers, discount codes, and loyalty programs, making it easier to engage customers and boost sales. This flexibility helps you create marketing strategies that work for your audience.",
    },
     {
      question: "What kind of support do you provide after purchasing the Alcohol Delivery App Clone Script?",
      answer:
        "We offer comprehensive post-launch support to ensure your Alcohol Delivery App runs smoothly. From bug fixes to feature updates and technical assistance, our team is available to help you with any issues that arise after deployment. We also provide detailed documentation to help you manage the app on your own.",
    },
     {
      question: "How can I ensure my alcohol delivery business is compliant with local laws?",
      answer:
        "Ensuring compliance with local alcohol delivery laws is critical. While our Alcohol Delivery App Clone Script is customizable to meet legal requirements, we recommend consulting with legal professionals in your jurisdiction to ensure your business operations comply with all relevant laws, including age restrictions, delivery zones, and licensing. We can help guide you on setting up the app in accordance with regulatory guidelines, but ultimately it’s important to stay informed about local legislation.",
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
            <span className="w-2 h-2 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            FAQ’s
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
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
                  <Minus className="text-[#FF2485]" />
                ) : (
                  <Plus className="text-[#FF2485]" />
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
import React, { useState } from "react";

const policies = {
  privacy: {
    title: "Privacy Policy",
    content: `Privacy Policy – Kryoss Work

Kryoss Work ("we", "our", "us") is committed to protecting your privacy and safeguarding your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.

1. Information We Collect
We may collect the following types of information:
• Personal information (name, email address, phone number, business details)
• Project-related data shared for service delivery
• Technical data (IP address, browser type, device information, usage behavior)

2. How We Use Your Information
We use your information to:
• Deliver software, consulting, and digital services
• Communicate updates, support, and service-related information
• Improve our website, products, and user experience

3. Data Sharing
• We do not sell your personal data
• Data may be shared with trusted third-party partners (hosting, analytics, payment providers)
• Information is shared only as required to deliver services or comply with legal obligations

4. Data Security
We implement industry-standard security measures to protect your data from unauthorized access, ensuring confidentiality and integrity.

5. Cookies & Tracking
We use cookies and tracking technologies to enhance user experience, analyze traffic, and improve performance. You may disable cookies through your browser settings.

6. Third-Party Services
Our website may include third-party tools or integrations. These services operate under their own privacy policies.

7. User Rights
You may request access, correction, or deletion of your personal data at any time.

8. Policy Updates
We may update this Privacy Policy periodically. Continued use of our website implies acceptance of the updated policy.

9. Contact Us
For privacy-related queries, contact: support@kryoss.com`
  },

  refund: {
    title: "Refund & Cancellation Policy",
    content: `Refund & Cancellation Policy – Kryoss Work

1. Cancellation Policy
• Clients may request cancellation before the project or service begins
• Once a project has started, cancellation requests will be reviewed on a case-by-case basis
• Advance payments for confirmed services may be non-refundable

2. Refund Policy
• Refunds are applicable only if services have not been initiated
• Partial refunds may be issued for partially completed work, based on the work delivered
• No refunds will be provided for completed services or delivered digital products

3. Processing Time
Approved refunds will be processed within 7–10 business days and credited to the original payment method.

4. Non-Refundable Services
• Consultation fees
• Custom development work
• Third-party service costs already incurred

5. Rescheduling
Services may be rescheduled upon mutual agreement if requested in advance.

6. Contact
For cancellation or refund requests, contact: support@kryoss.com`
  },

  terms: {
    title: "Terms & Conditions",
    content: `Terms & Conditions – Kryoss Work

These Terms & Conditions govern your use of our website and services.

1. Acceptance of Terms
By accessing this website, you agree to comply with these terms. If you do not agree, please do not use our services.

2. Use of Services
• You agree to provide accurate and complete information
• You will not misuse, copy, or exploit our services unlawfully
• Unauthorized access or malicious activity is strictly prohibited

3. Services & Payments
• All services are subject to agreed pricing and timelines
• Payments must be made as per agreed terms
• We reserve the right to suspend services in case of non-payment

4. Intellectual Property
All content, designs, code, and materials are the property of Kryoss Work and may not be reused without permission.

5. Limitation of Liability
We are not liable for any indirect or consequential damages arising from the use of our services.

6. Third-Party Services
We may use third-party tools or services and are not responsible for their policies or actions.

7. Termination
We reserve the right to suspend or terminate access if these terms are violated.

8. Changes to Terms
We may update these terms at any time. Continued use implies acceptance of the updated terms.

9. Contact Us
For any queries: support@kryoss.com`
  },

  disclaimer: {
    title: "Trademark & Brand Disclaimer",
    content: `Trademark & Brand Usage Disclaimer – Kryoss Work

This disclaimer outlines the permitted use of Kryoss Work’s brand assets.

1. Ownership of Trademarks
All logos, brand names, trademarks, and service marks displayed on this website are the property of Kryoss Work. Unauthorized use is strictly prohibited.

2. Permitted Use
• Brand assets may be used only with prior written permission
• Usage must be accurate and not misleading
• Brand identity must not be altered

3. Prohibited Use
• No commercial use without permission
• No reproduction, distribution, or modification
• No use that harms brand reputation

4. Third-Party Trademarks
Any third-party trademarks mentioned remain the property of their respective owners and do not imply endorsement.

5. Intellectual Property Rights
All website content including text, graphics, and designs is protected under applicable copyright and trademark laws.

6. Enforcement
We reserve the right to take legal action against misuse of our brand or trademarks.

7. Updates
We may update this disclaimer at any time without prior notice.

8. Contact
For permissions or queries: support@kryoss.com`
  }
};

const Policies = () => {
  const [active, setActive] = useState("privacy");

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            Policies & Legal Terms
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Kryoss Work <span className="text-orange-400">Policies & Terms</span>
        </h2>

        {/* Paragraph */}
        <p className="text-center text-gray-600 max-w-6xl mx-auto mb-16">
          Review our Disclaimer, Terms & Conditions, Privacy Policy, and Refund &
          Cancellation Policy to understand our guidelines on service usage,
          data protection, and transactions.
        </p>

        {/* Card */}
        <div className="grid grid-cols-12 bg-gray-50 rounded-3xl shadow border overflow-hidden">

          {/* Left Menu */}
          <div className="col-span-5 border-r bg-white p-6 text-2xl">

            {Object.keys(policies).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`w-full text-left p-4 rounded-xl mb-3 transition 
                ${
                  active === key
                    ? "bg-orange-400 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {policies[key].title}
              </button>
            ))}

          </div>

          {/* Right Content */}
          <div className="col-span-7 p-8">

            <h3 className="text-2xl font-semibold mb-4 text-orange-500">
              {policies[active].title}
            </h3>

            <div className="text-gray-600 whitespace-pre-line leading-relaxed">
              {policies[active].content}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Policies;
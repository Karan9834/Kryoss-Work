import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactDetails = () => {
  return (
    <div className="text-white">

      <h1 className="text-4xl font-bold mb-6">
        Get in Touch
      </h1>

      <h3 className="text-xl font-semibold mb-4">
        We'd Love to Hear From You
      </h3>

      <p className="text-gray-400 mb-10 leading-relaxed max-w-xl">
        Have questions or need support? Reach out to us anytime. Our team is ready to assist you through your preferred method of contact.
      </p>

      {/* OUR BASE */}
      <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 mb-8 flex items-start gap-4">

        <div className="bg-orange-500/10 p-3 rounded-xl">
          <MapPin className="text-orange-500" size={22} />
        </div>

        <div>
          <p className="text-orange-500 text-sm font-semibold tracking-wide mb-1">
            OUR LOCATION
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 leading-relaxed hover:text-orange-400 transition"
          >
            123 Business Hub, Cyber City, Sector 62, Noida, Uttar Pradesh - 201301
          </a>

          <div className="mt-3">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-orange-400 transition"
            >
              View on Maps ↗
            </a>
          </div>
        </div>
      </div>

      {/* MAP (optional placeholder like your UI) */}
      <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl h-64 mb-8 flex items-center justify-center text-gray-500">
        Interactive Map (Integration Available)
      </div>

      {/* MAIL + CALL */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* MAIL */}
        <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 flex items-start gap-4">

          <div className="bg-orange-500/10 p-3 rounded-xl">
            <Mail className="text-orange-500" size={20} />
          </div>

          <div>
            <p className="text-orange-500 text-sm font-semibold mb-2">
              EMAIL US
            </p>

            <a
              href="mailto:hello@kryossone.com"
              className="block text-gray-300 hover:text-orange-400 transition"
            >
              hello@kryossone.com
            </a>

            <a
              href="mailto:support@kryossone.com"
              className="block text-gray-300 hover:text-orange-400 transition"
            >
              support@kryossone.com
            </a>
          </div>
        </div>

        {/* CALL */}
        <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 flex items-start gap-4">

          <div className="bg-orange-500/10 p-3 rounded-xl">
            <Phone className="text-orange-500" size={20} />
          </div>

          <div>
            <p className="text-orange-500 text-sm font-semibold mb-2">
              CALL US
            </p>

            <a
              href="tel:+911204567890"
              className="text-lg font-semibold text-white hover:text-orange-400 transition"
            >
              +91 120 456 7890
            </a>

            <p className="text-sm text-gray-400 mt-1">
              MONDAY–FRIDAY, 9AM–6PM IST
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ContactDetails;
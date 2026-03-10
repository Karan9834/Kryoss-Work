import React from "react";

const ContactDetails = () => {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-6">
        Connect with Us
      </h1>

      <h3 className="text-xl font-semibold mb-4">
        Reach Us Anytime, Anywhere
      </h3>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Have a question or need assistance? Call, email, or message us—we’re
        here to help! Get in touch through your preferred contact method and
        let’s talk.
      </p>

      <div className="space-y-6">

        <div>
          <h4 className="font-semibold text-lg">WhatsApp</h4>
          <p className="text-gray-600">+91 798-493-1943</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Drop us a mail</h4>
          <p className="text-gray-600">sales@whitelabelfox.com</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Our premises</h4>
          <p className="text-gray-600 leading-relaxed">
            1007, The Spire-1, Near Ayodhya Chowk BRTS Stop,
            150 Feet Ring Road, Rajkot, 360007,
            Gujarat, India.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ContactDetails;
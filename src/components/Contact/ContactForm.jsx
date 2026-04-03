import React from "react";

const ContactForm = () => {
  return (

    <div className="absolute md:top-0 top-10 bg-white text-black rounded-2xl shadow-2xl p-8 w-full">

      <form className="space-y-8">

        <h2 className="font-bold text-4xl">Let’s Talk  <span className="text-orange-500">& Innovate Together!</span></h2>

        {/* HERO PART */}

        <input

          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3"
        />



        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-3"
        />

        {/* REST OF FORM */}

        <input
          type="tel"
          placeholder="Contact Number"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Website"
          className="w-full border rounded-lg px-4 py-3"
        />

        <select className="w-full border rounded-lg px-4 py-3">
          <option>Select Budget</option>
          <option>$500 - $1000</option>
          <option>$1000 - $5000</option>
          <option>$5000+</option>
        </select>

        <select className="w-full border rounded-lg px-4 py-3">
          <option>Select Product</option>
          <option>Taxi App</option>
          <option>Food Delivery</option>
          <option>Ecommerce</option>
        </select>

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button className="bg-orange-600 text-white w-full py-3 rounded-lg">
          Get in Touch with Us
        </button>

      </form>

    </div>

  );
};

export default ContactForm;
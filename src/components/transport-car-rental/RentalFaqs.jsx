import React, { useState } from "react";

const faqs = [
  {
    q: "What is a Car Rental Clone Script?",
    a: "A Car Rental Clone Script is a ready-made solution to launch your own car rental business with features like booking, payments, admin panel, and user apps.",
  },
  {
    q: "How does the Car Rental App work for customers?",
    a: "Customers can search vehicles, select date & time, book instantly, make payment, and pick up the vehicle from the host.",
  },
  {
    q: "How can vehicle owners benefit from the Car Rental App?",
    a: "Vehicle owners can list their cars, manage bookings, earn income, and track all rentals from the dashboard.",
  },
  {
    q: "What features does the Car Rental App offer for Admins?",
    a: "Admin can manage users, vehicles, bookings, payments, reports, commissions, and settings from the admin panel.",
  },
  {
    q: "How do customers make payments for car rentals?",
    a: "Customers can pay using card, wallet, UPI, or online payment gateway integrated into the app.",
  },
  {
    q: "How does the Car Rental App ensure the safety of vehicles?",
    a: "The app includes verification, documents upload, tracking, ratings, and secure booking system.",
  },
  {
    q: "Can I customize the Car Rental Clone Script?",
    a: "Yes, the script is fully customizable based on your business needs.",
  },
  {
    q: "How long does it take to launch a Car Rental App?",
    a: "You can launch within a few days because the script is already developed.",
  },
  {
    q: "What kind of support do you provide after launching?",
    a: "We provide technical support, bug fixing, and updates after launch.",
  },
  {
    q: "Can I launch my Car Rental App on multiple platforms?",
    a: "Yes, you can launch on Android, iOS, and Web platforms.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-4">

        {/* pill */}

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full bg-white">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            FAQs
          </div>
        </div>


        {/* title */}

        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Have <span className="text-sky-600">any questions?</span>
        </h2>


        {/* grid */}

        <div className="grid md:grid-cols-2 gap-6">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b pb-3"
            >

              {/* question */}

              <div
                onClick={() => toggle(i)}
                className="flex justify-between cursor-pointer font-medium"
              >
                {item.q}

                <span className="text-xl">
                  {open === i ? "-" : "+"}
                </span>

              </div>


              {/* answer */}

              {open === i && (
                <p className="mt-3 text-gray-600">
                  {item.a}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQSection;
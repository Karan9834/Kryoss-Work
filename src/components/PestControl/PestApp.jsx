import React from "react";
import appfeature from "../../assets/PestControl/appfeature.webp";
import {
  UserPlus,
  CalendarDays,
  CreditCard,
  MessageCircle,
  MapPin,
  Star
} from "lucide-react";

const features = [
  {
    icon: <UserPlus size={22} />,
    title: "Sign Up",
    text: "A user has the option to sign up through simple details like name, email, contact details, and password.",
  },
  {
    icon: <CalendarDays size={22} />,
    title: "Schedule Booking",
    text: "A user can schedule pest control services booking as per their requirements.",
  },
  {
    icon: <CreditCard size={22} />,
    title: "Flexible Payment",
    text: "To pay for pests services, a user has flexible payment options like cash, credit, and wallet.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Chat",
    text: "If users have any queries, they have the option to talk to booked pest control services provider.",
  },
  {
    icon: <MapPin size={22} />,
    title: "In-app Track",
    text: "After booked pest control service, the user has the option to track provider location and estimate arrival time.",
  },
  {
    icon: <Star size={22} />,
    title: "Feedback",
    text: "A user can rate pest control service providers based on their service experience.",
  },
];

const UserFeatures = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP HEADING */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-sm mb-5">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            User App Features
          </div>

          <h2 className="text-4xl font-semibold mb-4">
            User App Features for Seamless
            <span className="text-orange-500"> Pest Control Services</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our user-friendly pest control app is packed with features to ensure a
            smooth and efficient experience. From easy registration and real-time
            provider tracking to secure payments and service feedback.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SCROLLABLE FEATURES */}
          <div className="space-y-6 max-h-[520px] overflow-y-auto pr-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>

            {features.map((item, index) => (
              <div
                key={index}
                className="border border-orange-200 rounded-2xl p-6 flex gap-5 bg-[#fffaf2]"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-orange-500 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* RIGHT STICKY IMAGE */}
          <div className="relative">

            <div className="sticky top-28 flex justify-center">

              <img
                src={appfeature}
                alt="pest control app"
                className="max-w-md w-full"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default UserFeatures;
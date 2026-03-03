import React, { useState } from "react";
import {
  LogIn,
  Car,
  MessageSquare,
  Upload,
  Search,
  XCircle,
} from "lucide-react";

const customerFeatures = [
  {
    title: "Registration/Login",
    text: "Login using social media or basic info",
    icon: LogIn,
  },
  {
    title: "Check Vehicle Status",
    text: "Check fuel, kms, damage etc",
    icon: Car,
  },
  {
    title: "In-App Messaging",
    text: "Chat with host easily",
    icon: MessageSquare,
  },
  {
    title: "Upload Documents",
    text: "Upload license & ID",
    icon: Upload,
  },
  {
    title: "Search Vehicle",
    text: "Search based on location",
    icon: Search,
  },
  {
    title: "Cancel Booking",
    text: "Cancel anytime",
    icon: XCircle,
  },
];

const hostFeatures = customerFeatures;

const FeaturesSection = () => {
  const [tab, setTab] = useState("customer");

  const data =
    tab === "customer" ? customerFeatures : hostFeatures;

  return (
    <section className="bg-gray-100 pt-20">

  <div
    className="
      bg-cover
      bg-bottom
      pt-16
      pb-40
      rounded-t-[45%]
    "
    style={{
      backgroundImage:
        "url(https://whitelabelfox.com/assets/images/car-rental-app/fox-rental-app-features-bg.webp)",
    }}
  >
        <div className="max-w-6xl mx-auto px-4">

          {/* pill */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 border rounded-full px-4 py-1 bg-white">

              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>

              <span>Features</span>

            </div>
          </div>


          {/* title */}

          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
            Key Features of Our{" "}
            <span className="text-sky-600">
              Car Rental App
            </span>
          </h2>


          <p className="text-center max-w-2xl mx-auto mt-3 text-gray-700">
            Our Car Rental App offers seamless booking,
            easy vehicle management, secure payments.
          </p>



          {/* toggle */}

          <div className="flex justify-center mt-6 mb-10">

            <div className="flex rounded-full p-1 bg-blue-900 text-white">

              <button
                onClick={() => setTab("customer")}
                className={`px-5 py-2 rounded-full ${
                  tab === "customer"
                    ? "bg-white text-blue-900"
                    : ""
                }`}
              >
                Customer App
              </button>

              <button
                onClick={() => setTab("host")}
                className={`px-5 py-2 rounded-full ${
                  tab === "host"
                    ? "bg-white text-blue-900"
                    : ""
                }`}
              >
                Host App
              </button>

            </div>

          </div>



          {/* cards */}

          <div className="grid md:grid-cols-2 gap-6 pb-40">

            {data.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
  className="
    group
    bg-white
    rounded-2xl
    p-5
    shadow-md
    flex
    gap-4
    items-start
    transition-all
    duration-300
    hover:shadow-xl
    hover:border
    hover:border-blue-400
  "
>

  {/* icon */}
  <div
    className="
      w-10
      h-10
      rounded-full
      bg-blue-100
      flex
      items-center
      justify-center
      text-blue-600
      transition-all
      duration-300
      group-hover:bg-blue-600
      group-hover:text-white
    "
  >
    <Icon size={18} />
  </div>


  {/* text */}
  <div>

    <h3 className="text-sky-600 font-semibold">
      {item.title}
    </h3>

    <p className="text-sm text-gray-600">
      {item.text}
    </p>

  </div>

</div>
              );
            })}

          </div>

        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;
import React, { useState } from "react";

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("FindRide");

  const features = {
    FindRide: [
      {
        icon: "/features/icon1.png",
        title: "Automatic Fare Suggestion",
        desc: "The user gets automatic fare suggestion which is editable based on total distance, fuel cost, the total no of seats, & vehicle category of ride.",
      },
      {
        icon: "/features/icon2.png",
        title: "Track Location",
        desc: "A user can track a live location of a driver from the app. After the rider booking a ride, they can check where is the current location of the driver.",
      },
      {
        icon: "/features/icon3.png",
        title: "Promo Code",
        desc: "IA user can use a promo code and get a discount offers from the booking ride. Promo code is one of the best ways to market your app to more peoples.",
      },
      {
        icon: "/features/icon4.png",
        title: "Cancel Booking",
        desc: "A user has an option to cancel a booking ride with a particular reason. After the cancel rides by user drivers get instant notification of the cancellation.",
      },
      {
        icon: "/features/icon5.png",
        title: "Multiple Payment",
        desc: "A user has multiple options for a shared ride. A user can pay the ride charges via cash, cards, and Wallet.",
      },
      {
        icon: "/features/icon6.png",
        title: "Search Ride",
        desc: "Riders can search all available shared rides according to their ride pickup and drop location.",
      },
    ],
    OfferRide: [
      {
        icon: "/features/icon1.png",
        title: "Manage Required Documents",
        desc: "Drivers can easily upload and update essential documents like licenses and insurance for verification and active status.",
      },
      {
        icon: "/features/icon2.png",
        title: "Manage Ride",
        desc: "Drivers can easily view, edit, and manage their active and completed rides, ensuring better control over their trips.",
      },
      {
        icon: "/features/icon3.png",
        title: "Chat option",
        desc: "Users are also provided with an app inbuilt chat option to solve any queries or to connect with another user of that ride.",
      },
      {
        icon: "/features/icon4.png",
        title: "Manage Vehicle",
        desc: "Drivers can add, update, or remove vehicles, ensuring their ride-sharing service stays up-to-date and fully operational.",
      },
      {
        icon: "/features/icon5.png",
        title: "Rate & Review",
        desc: "Riders and drivers both can be sent reviews and comments to each other after the ride is completed based on their ride experience.",
      },
      {
        icon: "/features/icon6.png",
        title: "Round Trip Offering Option",
        desc: "The user who offers a ride will be given a round trip option to smooth up the ride creation experience if he is planning for the return trip.",
      },
    ],
    AppMenu: [
      {
        icon: "/features/icon1.png",
        title: "Chat option",
        desc: "Users are also provided with an app inbuilt chat option to solve any queries or to connect with another user of that ride.",
      },
      {
        icon: "/features/icon2.png",
        title: "Manage Profile",
        desc: "Update personal details, change contact info, and customize preferences for a personalized user experience.",
      },
      {
        icon: "/features/icon3.png",
        title: "Ride History",
        desc: "Access and track past and upcoming ride details, making it easy to reference previous trips and plan future rides.",
      },
      {
        icon: "/features/icon4.png",
        title: "Wallet Management",
        desc: "DEasily view balance, add funds, and manage payment methods for seamless transactions and ride payments.",
      },
      {
        icon: "/features/icon5.png",
        title: "Navigation Map",
        desc: "The app has inbuilt navigation features for drivers. Drivers use the Google Maps navigation for pickups and find the best routes for the ride.",
      },
      {
        icon: "/features/icon6.png",
        title: "Instant Notification",
        desc: "Riders & Drivers both get an instant notification. They get important alerts via push requests, feedback, notifications, SMS, and email.",
      },
    ],
  };

  return (
    <section
      className="py-24 text-black h-380"
      style={{
        backgroundImage:
          "url(https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-features-section-Bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-full text-sm mb-6">
          <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
          Powerful Carpooling Features
        </div>

        {/* Heading */}
        <h2 className="text-[40px] font-semibold mb-12">
        Carpooling Clone Script: Powerful Features for Seamless Ride-Sharing Operations
        </h2>
        <p className="text-[20px] font-semibold mb-12">
            Our carpooling clone script offers a customizable, feature-rich solution, enabling an easy launch and seamless management of your carpooling business with essential features like real-time tracking and efficient ride management.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-16 ">
          <div className=" rounded-full p-1 flex gap-2 backdrop-blur-md border-2 bg-[#0094E8]">

            {["FindRide", "OfferRide", "AppMenu"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition capitalize ${
                  activeTab === tab
                    ? "bg-white text-cyan-400"
                    : "text-white"
                }`}
              >
                {tab}
              </button> 
            ))}

          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 text-left bg-white text-black">

          {features[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-4xl border border-2"
            >
              <img
                src={item.icon}
                alt=""
                className="w-12 mb-5"
              />

              <h3 className="text-xl font-semibold mb-3 text-[#0094E8]">
                {item.title}
              </h3>

              <p className=" text-[15px] leading-relaxed text-black">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
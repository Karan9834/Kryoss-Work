import React, { useState } from "react";

const featuresData = {
  user: {
    image:
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/fox-massage-page-user-app-features-image.webp",
    items: [
      { title: "Registration", desc: "A user can Sign up for a spa booking app by furnishing details like name, email, contact no., etc." },
      { title: "Therapist Profile", desc: "After login, the user can view the massage therapist’s profile with all information like name, rating, address, etc." },
      { title: "Book Session", desc: "Once a user has to find therapists, they can book a therapist at their preferred time for a session." },
      { title: "Manage Profile", desc: "A user can manage their profile information such as name, email, contact details, and profile picture." },
      { title: "Payment Option", desc: "To pay for therapists sessions, the user has multiple payment options like cash, credit, and in-app wallet." },
      { title: "Review & Rating", desc: "After completed services, users can give reviews & ratings to therapists based on their experience." },

    ],
  },
  provider: {
    image:
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/fox-massage-page-provider-app-features-image.webp",
    items: [
      { title: "Social Login", desc: "A therapist has the option to login through their social account like Facebook, Google, or via Email." },
      { title: "Available Status", desc: "A therapist can manage their status On/Off based on their availability for a new service request." },
      { title: "Navigation", desc: "To find the exact location of the user, the therapist can use Google map navigation within the app." },
      { title: "Earning Report", desc: "A therapist can view their earning report with all completed, cancel, running, and pending services requests." },
      { title: "Manage Services", desc: "Therapists can easily manage service requests with a simple accept or reject option" },
      { title: "Rate User", desc: "After completed the services, the therapist can give feedback to the user based on their services experience." },

    ],
  },
};

const Features = () => {
  const [activeTab, setActiveTab] = useState("user");

  const currentData = featuresData[activeTab];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* ===== Top Content ===== */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 w-fit mx-auto border-2">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            Key Features
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">Powerful Features of Our</span> Uber for Massage App
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our Uber for Massage app is designed with advanced features to ensure a smooth experience for both users and providers. With our solution, customers can easily book massages, while providers can manage their services efficiently. </p>
        </div>

        {/* ===== Toggle Buttons ===== */}
        <div className="flex justify-center gap-4 mb-14">
          {["user", "provider"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${activeTab === type
                  ? "bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-white"
                  : "border border-gray-300 text-gray-700"
                }`}
            >
              {type === "user" ? "User App" : "Provider App"}
            </button>
          ))}
        </div>

        {/* ===== 3 Column Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch ">

          {/* LEFT CARDS */}
          <div className="space-y-10 ">
            {currentData.items.slice(0, 3).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>

          {/* CENTER IMAGE (Dynamic) */}
          <div className="flex justify-center ">
            <img
              src={currentData.image}
              alt="App Features"
              className="w-full 
                         max-w-md sm:max-w-lg lg:max-w-xl
                         h-150
                         object-contain
                         rounded-3xl 
                         shadow-xl 
                         transition duration-500"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-10">
            {currentData.items.slice(3, 6).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

const FeatureCard = ({ item }) => {
  return (
    <div className="group  
                    rounded-2xl p-5 text-left 
                    transition duration-300 
                    hover:bg-gradient-to-r 
                    hover:from-[#FF2485] 
                    hover:to-[#C739FF] 
                      
                    hover:text-white border-2 border-[#FF2485]">

      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="w-12 h-12 flex shrink-0 flex items-center justify-center 
                        rounded-full 
                        bg-[#C739FF]/20 
                        text-[#FF2485] 
                        font-bold text-lg
                        group-hover:bg-white 
                        group-hover:text-[#009ACA]">
          ✓
        </div>

        {/* Text */}
        <div>
          <h4 className="font-semibold mb-1">
            {item.title}
          </h4>
          <p className="text-sm opacity-80 group-hover:opacity-100">
            {item.desc}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Features;
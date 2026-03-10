import React, { useState } from "react";

const featuresData = {
  CustomerApp: {
    image:
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-user-app-features-image.webp",
    items: [
      { title: "Social Login", desc: "To use an alcohol app, users can sign up through social accounts like Facebook, Google, or via Email." },
      { title: "Add to cart", desc: "A user can add a product to the cart option. After they can able to add or remove the product based on requirements." },
      { title: "Manage Profile", desc: "A user can manage their profile information such as name, email, contact details, and profile picture." },
      { title: "Review & Rating", desc: "Customers can rate and review their orders based on their experience." },
      { title: "Advanced search option", desc: "By using this option, a user can search for an alcohol shop based on the location, place, and city." },
      { title: "Payment option", desc: "To pay for order amount, you have multiple payment options such as cash, credit and in-app wallet." },
      { title: "Live Order Tracking", desc: "After placing an order, the user can track their real-time alcohol delivery status within the app." },
      { title: "Tip to Driver", desc: "Option to add a tip for excellent service while making payments." },
    ],
  },
    DriverApp: {
    image:
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-driver-app-features-image.webp",
    items: [
      { title: "Map Navigation", desc: "To find the exact location of the delivery address, the driver can use Google map navigation within the app." },
      { title: "Accept/Reject", desc: "A driver has an option to manage the new delivery request. They have an option to accept or reject it." },
      { title: "Earning Report", desc: "A driver can view full daily, weekly, monthly and yearly earnings report." },
      { title: "Easy Login", desc: "Quick and secure login to start receiving alcohol delivery requests." },
      { title: "Manage Profile", desc: "A delivery person can manage their profile information like name, email, and profile picture." },
      { title: "Feedback", desc: "A delivery person has an option to check all the feedback with the user & delivery details provided." },
      { title: "Manage Bank Details", desc: "A driver can add and manage the bank details to get their delivery earnings from the admin." },
      { title: "Manage Vehicle", desc: "Drivers can add, update, or modify vehicle details within the app." },
    ],
  },
    StoreApp: {
    image:
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-store-app-features-image.webp",
    items: [
      { title: "Manage Order", desc: "The store vendor gets an order request within the app and manages the request with a single tap." },
      { title: "Store setting", desc: "A store vendor can set store details like store timing, delivery charges, estimated delivery time, and more" },
      { title: "Set Offer", desc: "Store vendor can add/modified the store offers with details to get more orders." },
      { title: "Chat & Call", desc: "Seamless communication with both customers and delivery drivers." },
      { title: "Earning report", desc: "A store vendor can easily view earning reports with all complete and canceled order requests." },
      { title: "Online/Offline", desc: "A store vendor set store profile status online or offline based on their requirements." },
      { title: "Order History", desc: "A store vendor can view all the completed, cancel, running and pending order history with order details." },
      { title: "Manage Products", desc: "Effortlessly update product listings, prices, and stock availability." },
    ],
  },

};

const KeyFeatures = () => {
  const [activeTab, setActiveTab] = useState("CustomerApp");

  const currentData = featuresData[activeTab];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 overflow-x-hidden bg-[#FFEFF4]"
    style={{
      border: "1px solid #CE6487"
    }}
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* ===== Top Content ===== */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 
                          bg-[#eaf4fd] px-4 py-1.5 
                          rounded-full border border-[#b7d4f6] 
                          text-xs sm:text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#921E4B] to-[#4A011D] rounded-full"></span>
            Essential Features
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
           <span className=" bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text">Key Features of</span>  Uber for House Cleaning App
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our Uber for House Cleaning App provides essential features for customers, cleaners, and service owners. It simplifies booking, enhances management, and ensures seamless communication.
          </p>
        </div>

        {/* ===== Toggle Buttons ===== */}
        {/* <div className="flex justify-center gap-4 mb-14">
          {["CustomerApp", "DriverApp","StoreApp"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                activeTab === type
                  ? "text-white bg-gradient-to-r from-[#009ACA] to-[#006C8D]"
                  : "border border-gray-300 text-gray-700"
              }`}
            >
              {type === "CustomerApp" ? "Customer App" : "Driver App" }
            </button>
          ))}
        </div> */}

        {/* ===== Toggle Buttons ===== */}
<div className="flex justify-center gap-4 mb-14">
  {["CustomerApp", "DriverApp", "StoreApp"].map((type) => (
    <button
      key={type}
      onClick={() => setActiveTab(type)}
      className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
        activeTab === type
          ? "text-white bg-gradient-to-r from-[#921E4B] to-[#4A011D]"
          : "border border-gray-300 text-gray-700"
      }`}
    >
      {type === "CustomerApp"
        ? "Customer App"
        : type === "DriverApp"
        ? "Driver App"
        : "Store App"}
    </button>
  ))}
</div>

        {/* ===== 3 Column Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch ">

          {/* LEFT CARDS */}
          <div className="space-y-6 ">
            {currentData.items.slice(0, 4).map((item, i) => (
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
                         h-full
                         object-contain
                         rounded-3xl 
                         shadow-xl 
                         transition duration-500"
                         style={{
                          background:"linear-gradient(143.07deg, #220110 2.88%, #300116 99.53%)"
                         }}
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-6">
            {currentData.items.slice(4, 8).map((item, i) => (
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
                    
                    hover:from-[#921E4B] hover:to-[#4A011D]
                    hover:text-white border-2 border-[#4A011D]">

      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center 
                        rounded-full 
                        bg-[#4A011D]/20 
                        text-[#4A011D] 
                        font-bold text-lg
                        group-hover:bg-white 
                        group-hover:text-[#4A011D]">
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

export default KeyFeatures;
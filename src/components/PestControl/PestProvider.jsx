import React from "react";
import providerfeature from "../../assets/PestControl/providerfeature.webp";
import {
  LogIn,
  ToggleRight,
  Map,
  UserCog,
  BarChart3,
  Phone
} from "lucide-react";

const features = [
  {
    icon: <LogIn size={22} />,
    title: "Social Login",
    text: "To log in easily, pest control providers have the option to login through social account sites like Facebook, Google."
  },
  {
    icon: <ToggleRight size={22} />,
    title: "Availability",
    text: "Pest control provider manage their profile of new pest service with accepting or reject options based on availability."
  },
  {
    icon: <Map size={22} />,
    title: "Map Navigation",
    text: "To find the user location or shortest path, pest control providers can use map navigation within the app."
  },
  {
    icon: <UserCog size={22} />,
    title: "Profile Management",
    text: "A service provider can manage their profile information such as name, contact details, service radius, and profile picture."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "View Earning",
    text: "Pest control provider views their earning report with all completed, cancel, pending and running services."
  },
  {
    icon: <Phone size={22} />,
    title: "Call",
    text: "If the pest control service provider has any doubts regarding services, they can call users."
  }
];

const ProviderFeatures = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Provider App Features
          </div>

          <h2 className="text-4xl font-semibold mb-4">
            Provider App Features for Efficient
            <span className="text-orange-500"> Pest Control Management</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our provider app ensures that pest control professionals can deliver
            top-notch services effortlessly. From managing bookings and service
            requests to real-time navigation and secure payment processing.
          </p>

        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT IMAGE (Sticky) */}
          <div className="relative">

            <div className="sticky top-28 flex justify-center">

              <img
                src={providerfeature}
                alt="provider features"
                className="max-w-md w-full"
              />

            </div>

          </div>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="space-y-6 max-h-[520px] overflow-y-auto pr-4"
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

        </div>

      </div>

    </section>
  );
};

export default ProviderFeatures;
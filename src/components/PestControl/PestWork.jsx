import React from "react";
import pestwork from "../../assets/PestControl/appworks.webp";
import {
  UserRound,
  Search,
  ShoppingBag,
  Wrench,
  CreditCard,
  Star,
} from "lucide-react";

const steps = [
  {
    icon: <UserRound size={26} />,
    title: "Login/Signup",
    desc: "User can log in or sign up with providing basic information or through social sites like Facebook or Google.",
  },
  {
    icon: <Search size={26} />,
    title: "Search Provider",
    desc: "Users can search the nearest provider, they can view provider profile details with name, far from their location, service pricing, ratings, etc.",
  },
  {
    icon: <ShoppingBag size={26} />,
    title: "Place Order",
    desc: "After checking the provider profile and pricing, a user can choose the service based on their requirements and place the order.",
  },
  {
    icon: <Wrench size={26} />,
    title: "Provider Offer Service",
    desc: "After accepting user requests, the provider arrives at the user location and offers the service.",
  },
  {
    icon: <CreditCard size={26} />,
    title: "Secure Payment",
    desc: "Once the service is completed, the user has flexible payment options like cash, card, and in-app wallet.",
  },
  {
    icon: <Star size={26} />,
    title: "Rating & Review",
    desc: "After payment completion, both user and provider can review and rate each other.",
  },
];

const PestHowItWorks = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-gradient-to-r from-[#2a1700] to-[#120800] rounded-[40px] px-10 py-16 text-white">

          {/* badge */}
          <div className="flex justify-center mb-6">
            <div className="border border-gray-500 rounded-full px-4 py-1 text-sm">
              How Product Works
            </div>
          </div>

          {/* heading */}
          <h2 className="text-center text-4xl font-semibold mb-6">
            How the{" "}
            <span className="text-orange-400">
              Uber for Pest Control App
            </span>{" "}
            Works
          </h2>

          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-14">
            Our Uber for Pest Control app simplifies the process of booking pest
            control services. Customers can easily schedule a service, choose a
            provider, make secure payments, and provide feedback.
          </p>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT SCROLLABLE STEPS */}
            <div className="space-y-10 max-h-[450px] overflow-y-auto pr-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}>

              {steps.map((step, index) => (
                <div key={index} className="flex gap-5">

                  {/* ICON */}
                  <div className="w-14 h-14 flex items-center justify-center bg-yellow-500 text-white rounded-xl shrink-0">
                    {step.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="sticky top-28">
                <img
                  src={pestwork}
                  alt="pest control"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PestHowItWorks;
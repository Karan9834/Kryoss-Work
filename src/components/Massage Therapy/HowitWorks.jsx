import React from "react";
import {
  LogIn,
  Search,
  ShoppingCart,
  UserCheck,
  CreditCard,
  Star,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Login/Signup",
    desc: "A user can log in or sign up by providing information or through social sites like Facebook or Google.",
    icon: LogIn,
  },
  {
    number: "2",
    title: "Search Massage Therapist",
    desc: "Users can find nearby therapists, view profiles with details like name, distance, pricing, and ratings.",
    icon: Search,
  },
  {
    number: "3",
    title: "Place Order",
    desc: "After checking the therapist profile and pricing; the user can choose the service based on their requirements.",
    icon: ShoppingCart,
  },
  {
    number: "4",
    title: "Therapists Offer Service",
    desc: "After accepting user requests, the therapist arrives at the user location and provides the service.",
    icon: UserCheck,
  },
  {
    number: "5",
    title: "Secure Payment",
    desc: "Once the service is complete, the user has flexible payment options like cash, card, and in-app wallet.",
    icon: CreditCard,
  },
  {
    number: "6",
    title: "Rating & Review",
    desc: "Once payment is complete, both the user and therapist can leave reviews and ratings.",
    icon: Star,
  },
];

const HowitWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex items-center justify-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 w-fit mx-auto border">
          <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
          Uber for Massage App Functionality
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6">
          How the{" "}
          <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
            Uber for Massage App Works
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          The Uber for Massage app lets users easily book massage services by browsing available therapists,
          scheduling appointments, and making payments.
        </p>

        {/* DARK BACKGROUND CONTAINER */}
        <div
          className="rounded-3xl p-10"
          style={{
            background:
              "radial-gradient(140.19% 341.98% at -24.66% 133.05%, #0E0104 0%, #1C0109 100%)",
          }}
        >

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl relative transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                >

                  {/* TOP ROW */}
                  <div className="flex items-start gap-6 mb-4">
                    {/* ICON + NUMBER */}
                    <div className="flex items-center gap-3">

                      <Icon className="w-8 h-8 text-white" />

                    </div>

                    {/* <div className="text-white text-lg font-bold">
                      {step.number}
                    </div> */}
                    {/* TITLE */}
                    <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition">
                      {step.title}
                    </h3>



                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowitWorks;
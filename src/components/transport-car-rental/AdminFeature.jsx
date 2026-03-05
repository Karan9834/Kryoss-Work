import React from "react";
import admin from "../../assets/Car-rental/admin.webp"
import {
  Settings,
  Calendar,
  Bell,
  ShieldCheck,
  Layers,
  UserCheck,
} from "lucide-react";

const features = [
  {
    title: "Manage Host",
    text: "Admin can control host accounts.",
    icon: Settings,
  },
  {
    title: "Manage Booking",
    text: "Admin controls bookings.",
    icon: Calendar,
  },
  {
    title: "Extensive Modules",
    text: "Policies, wallet, promo codes.",
    icon: Layers,
  },
  {
    title: "Vehicle Verification",
    text: "Approve vehicle listings.",
    icon: ShieldCheck,
  },
  {
    title: "Notifications",
    text: "Send alerts & updates.",
    icon: Bell,
  },
  {
    title: "Customer Verification",
    text: "Verify users.",
    icon: UserCheck,
  },
];

const AdminFeaturesSection = () => {
  return (
    <section className="bg-gray-100 pt-20">

      {/* ---------- TOP PART ---------- */}

      <div className="max-w-6xl mx-auto text-center px-4">

        {/* pill */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border rounded-full px-4 py-1 bg-white">

            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>

            <span>Web Admin Panel</span>

          </div>
        </div>


        <h2 className="text-2xl md:text-4xl font-bold">
          Super Admin Features for{" "}
          <span className="text-sky-600">
            Seamless Car Rental Management
          </span>
        </h2>


        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Effortlessly manage and monitor your rental service.
        </p>



        {/* MONITOR IMAGE */}

        <div className="relative mt-10 z-10 flex justify-center">

          <img
            src={admin}
            className="w-[300px] md:w-[500px] lg:w-[650px]"
          />

        </div>

      </div>



      {/* ---------- DARK BOX ---------- */}

      <div
        className="
          mt-[-80px]
          pt-32
          pb-16
          bg-gradient-to-br
          from-[#02122b]
          via-[#041a3a]
          to-[#02122b]
          rounded-t-[80px]
        "
      >

        <div className="max-w-6xl mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-6">

            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="
                    group
                    bg-white/10
                    backdrop-blur
                    border
                    border-white/20
                    rounded-2xl
                    p-5
                    flex
                    gap-4
                    text-white
                    transition
                    hover:bg-white/20
                  "
                >

                  {/* icon */}
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      border
                      border-blue-400
                      flex
                      items-center
                      justify-center
                      text-blue-400
                      group-hover:bg-blue-500
                      group-hover:text-white
                      transition
                    "
                  >
                    <Icon size={20} />
                  </div>


                  <div>

                    <h3 className="font-semibold text-sky-400">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-200">
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

export default AdminFeaturesSection;
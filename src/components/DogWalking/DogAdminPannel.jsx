import React from "react";
import AdminPannel1 from "../../assets/DogWalking/admin-panel.webp"
import {
  LayoutDashboard,
  DollarSign,
  Star,
  ClipboardList,
  Percent,
  BarChart3
} from "lucide-react";

const AdminPanel = () => {

  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      desc: "Take a bird’s view of the entire business operations, including users, service professionals, and other details to make data-driven decisions."
    },
    {
      icon: DollarSign,
      title: "Manage Earning Reports",
      desc: "Admin can check the earning details of providers and get more details on how much they need to collect or pay to providers."
    },
    {
      icon: Star,
      title: "Manage Reviews and Ratings",
      desc: "Monitor reviews and feedback from users or service professionals to improve business performance."
    },
    {
      icon: ClipboardList,
      title: "Manage Bookings",
      desc: "Admin can easily view the ongoing, scheduled, and upcoming requests and allocate service professionals."
    },
    {
      icon: Percent,
      title: "Commission Management",
      desc: "Let the admin manage financial activity seamlessly and change the commission percentage on each request."
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Enable admin to generate reports related to booking requests, income, and business performance."
    }
  ];

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-green-600 rounded-full px-4 py-1 text-sm text-green-700 mb-6">
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
          Admin Panel
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-700 mb-6">
          Powerful Admin Panel for Seamless Management
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 mb-16">
          Take control of your dog walking business with our intuitive admin
          panel. Manage users, track service requests, monitor payments,
          and gain valuable insights all in one place.
        </p>

    <div className="flex justify-center mb-20">

  <div className="rounded-3xl border border-green-200 shadow-lg p-3">

    <div className="rounded-2xl border-4 border-green-200 p-2">

      <img
        src={AdminPannel1}
        alt="Admin Dashboard"
        className="w-[900px] rounded-xl"
      />

    </div>

  </div>

</div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group border border-green-300 rounded-2xl p-8 text-left transition duration-300 hover:shadow-xl hover:-translate-y-1
                bg-green-50 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-900"
              >

                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">

                  <div className="bg-green-600 text-white p-3 rounded-lg group-hover:bg-white group-hover:text-green-700 transition">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-green-700 group-hover:text-white transition">
                    {feature.title}
                  </h3>

                </div>

                <p className="text-gray-600 group-hover:text-green-100 text-sm leading-relaxed transition">
                  {feature.desc}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default AdminPanel;
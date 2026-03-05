import React from "react";
import {
    LayoutDashboard,
    FileText,
    Bell,
    Star,
    UserCheck,
    BarChart3,
    Users,
    TicketPercent,
} from "lucide-react";
import adminpanel from "../../assets/homeservice-tutor-img/adminpanel.webp"
const features = [
    {
        title: "Dashboard",
        desc: "With the powerful dashboard, admin can view the total order request, total revenue, new order request, and new users.",
        icon: LayoutDashboard,
    },
    {
        title: "Manage Document",
        desc: "Admin can add and edit the required document for a tutor like a Professional id, education document, and more document.",
        icon: FileText,
    },
    {
        title: "Mass Notification",
        desc: "Admin can send a mass notification to the user and tutor for new offers, festival greeting and more.",
        icon: Bell,
    },
    {
        title: "Review & Rating",
        desc: "Admin can see all the reviews and ratings with the service details and user details who provide it.",
        icon: Star,
    },
    {
        title: "Approve Tutor",
        desc: "Admin can check approved tutor details with name, email, total pending, completed requests, and status.",
        icon: UserCheck,
    },
    {
        title: "Earning Report",
        desc: "Admin can view each detailed earning report of the tutor and system total commission earning.",
        icon: BarChart3,
    },
    {
        title: "Tutor Details",
        desc: "Admin can see all the tutor details with name, email, contact number, address, history, and uploaded document.",
        icon: Users,
    },
    {
        title: "Promo Code",
        desc: "Admin can manage promo code details including promo code name, offer type, usage limit and expired date of promo code.",
        icon: TicketPercent,
    },
];

const AdminPanelFeatures = () => {
    return (
        /* 🔥 FULL SCREEN BACKGROUND – NO GAP GUARANTEE */
        <section className="w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,#3a241d,#0c0a0a)] py-24">

            {/* INNER CENTERED CONTENT */}
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

                {/* BADGE */}
                <div className="mb-4 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-sm text-white">
                        <span className="h-2 w-2 rounded-full bg-white" />
                        Web Admin Panel
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="mb-4 text-center text-[30px] font-semibold text-white sm:text-[38px]">
                    <span className="text-yellow-400">Super Web Admin Panel</span>{" "}
                    Features for Your Tutor App
                </h2>

                {/* SUB TEXT */}
                <p className="mx-auto mb-12 max-w-[900px] text-center font-medium text-white/80">
                    Explore the powerful features of our Super Web Admin Panel, designed to give you complete control over your on-demand tutor app. Manage users, tutors, and more with ease.
                </p>

                {/* IMAGE */}
                <div className="mb-14 flex justify-center">
                    <img
                        src={adminpanel}
                        alt="Admin Panel"
                        className="w-full max-w-[920px] rounded-xl shadow-2xl"
                    />
                </div>

                {/* CARDS */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="
                  group
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/5
                  px-6
                  py-6
                  text-white
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-gray-900
                "
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition group-hover:bg-orange-100">
                                    <Icon className="h-6 w-6 text-yellow-400 transition group-hover:text-orange-500" />
                                </div>

                                <h3 className="mb-2 text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed opacity-80 transition group-hover:opacity-100">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default AdminPanelFeatures;
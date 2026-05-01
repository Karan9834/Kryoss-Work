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
        title: "Operational Dashboard",
        desc: "Through our sophisticated control center, administrators can monitor request volumes, overall fiscal performance, recent sign-ups, and emerging user trends.",
        icon: LayoutDashboard,
    },
    {
        title: "Certification Governance",
        desc: "Authority to configure and modify essential verification requirements for instructors, including professional identification and academic credentials.",
        icon: FileText,
    },
    {
        title: "Broadcast Communication",
        desc: "Deploy large-scale electronic notifications to the entire user and instructor base regarding promotional incentives and critical system announcements.",
        icon: Bell,
    },
    {
        title: "Feedback Moderation",
        desc: "Examine comprehensive user testimonials and performance scores, correlated with specific instructional sessions and participant profiles.",
        icon: Star,
    },
    {
        title: "Expert Verification",
        desc: "Validate instructor credentials, monitoring their professional status, engagement history, pending requests, and overall platform standing.",
        icon: UserCheck,
    },
    {
        title: "Revenue Analytics",
        desc: "Access granular financial summaries detailing individual instructor earnings alongside consolidated platform commission performance.",
        icon: BarChart3,
    },
    {
        title: "Instructor Profiles",
        desc: "Gain a detailed perspective of all instructional partners, including contact parameters, residential data, assignment history, and verified documentation.",
        icon: Users,
    },
    {
        title: "Incentive Management",
        desc: "Configure and manage promotional campaigns, defining discount parameters, usage constraints, and expiration schedules for high-conversion marketing.",
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
                        Centralized Management Hub
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="mb-4 text-center text-[30px] font-semibold text-white sm:text-[38px]">
                    <span className="text-yellow-400">Comprehensive Administrative Portal</span>{" "}
                    for your Education Marketplace
                </h2>

                {/* SUB TEXT */}
                <p className="mx-auto mb-12 max-w-[900px] text-center font-medium text-white/80">
                    Discover the extensive capabilities of our Master Oversight Dashboard, engineered to provide absolute governance over your on-demand learning ecosystem. Coordinate participants and financial logistics seamlessly.
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
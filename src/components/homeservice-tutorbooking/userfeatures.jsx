import React from "react";
import {
    LogIn,
    User,
    CalendarCheck,
    MessageCircle,
    CreditCard,
    Star,
} from "lucide-react";
import tutorappfeatures from "../../assets/homeservice-tutor-img/tutorfeatures.webp";
const features = [
    {
        title: "External Authentication",
        desc: "Users can instantly access the platform via established social identities such as Google or Facebook, eliminating the need for tedious manual data entry.",
        icon: LogIn,
    },
    {
        title: "Expert Profile Analysis",
        desc: "Learners can examine comprehensive instructor portfolios, including academic credentials, instructional packages, contact availability, and physical locations.",
        icon: User,
    },
    {
        title: "Session Coordination",
        desc: "Schedule immediate instructional support or organize future academic sessions with ease. The interface also allows for flexible session cancellation management.",
        icon: CalendarCheck,
    },
    {
        title: "Integrated Communication",
        desc: "Facilitate real-time dialogue with your instructor following request acceptance, ensuring all academic queries are addressed promptly.",
        icon: MessageCircle,
    },
    {
        title: "Diverse Settlement Portals",
        desc: "Our framework supports multiple financial channels, including digital cards, bank transfers, and integrated virtual wallets for instruction settlement.",
        icon: CreditCard,
    },
    {
        title: "Instructional Feedback",
        desc: "Students can contribute to platform integrity by submitting testimonials and performance ratings based on their personalized educational experience.",
        icon: Star,
    },
];

const UserAppFeatures = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

                {/* TOP BADGE */}
                <div className="mb-4 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm text-gray-700">
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        Student Empowerment Tools
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="mb-4 text-center text-[30px] font-semibold sm:text-[36px]">
                    Vyom Tutor <span className="text-orange-500">Learner Ecosystem Functionalities</span>
                </h2>

                <p className="mx-auto mb-12 max-w-[900px] text-center font-medium text-gray-700 whitespace-normal lg:whitespace-nowrap">
                    Our dedicated Student Application enables learners to effortlessly discover elite educators, execute protected transactions, and manage their learning path through our optimized digital framework.
                </p>

                {/* CONTENT */}
                <div className="flex flex-col gap-12 lg:flex-row">

                    {/* LEFT SCROLLABLE CARDS */}
                    <div
                        className="no-scrollbar w-full max-h-[620px] space-y-6 overflow-y-scroll pr-3 lg:w-1/2"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="
                    group
  rounded-2xl
  bg-white
  px-6
  py-6
  border
  border-gray-200
  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
  transition-all
  duration-300
  hover:shadow-[0_18px_45px_rgba(0,0,0,0.15)]
  hover:border-orange-400
  hover:bg-[linear-gradient(135deg,#f59e0b,#d97706)]
                  "
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 transition group-hover:bg-white">
                                        <Icon className="h-6 w-6 text-orange-500 transition group-hover:text-orange-600" />
                                    </div>

                                    <h3 className="mb-2 text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed font-medium text-gray-600 transition group-hover:text-white/90">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex w-full items-center justify-center lg:w-1/2">
                        <img
                            src={tutorappfeatures}
                            alt="tutor App Features"
                            className="w-full max-w-[480px] object-contain scale-105"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UserAppFeatures;
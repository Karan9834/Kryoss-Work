import React from "react";
import {
    PackagePlus,
    ClipboardList,
    MapPinned,
    FileText,
    Receipt,
    History,
} from "lucide-react";
import providerappfeatures from "../../assets/homeservice-tutor-img/providerfeatures.webp";
const features = [
    {
        title: "Add Packages",
        desc: "After successful login into the app, the tutor can add service packages with details of package name, price, and more.",
        icon: PackagePlus,
    },
    {
        title: "Manage Request",
        desc: "A tutor can view the new request with full details they have the option to accept or reject the request with cancellation reason.",
        icon: ClipboardList,
    },
    {
        title: "Map Navigation",
        desc: "If a tutor can’t find the student address, they can use the map navigation within the app.",
        icon: MapPinned,
    },
    {
        title: "Manage Document",
        desc: "A tutor can manage the document which is required for the tutor service.",
        icon: FileText,
    },
    {
        title: "View Order Details",
        desc: "Once the new order request gets tutor can view the order with details and manage it.",
        icon: Receipt,
    },
    {
        title: "Order History",
        desc: "A tutor can view the complete, running, cancel, and pending order history with details.",
        icon: History,
    },
];

const ProviderAppFeatures = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

                {/* TOP BADGE */}
                <div className="mb-4 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm text-gray-700">
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        Provider App Features
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="mb-4 text-center text-[30px] font-semibold sm:text-[36px]">
                    Fox-Tutor <span className="text-orange-500">Provider App Features</span>
                </h2>

                {/* ONE-LINE PARAGRAPH */}
                <p className="mx-auto mb-12 max-w-[1100px] text-center font-medium text-gray-700 whitespace-normal lg:whitespace-nowrap">
                    Fox-Tutor Provider App allows tutors to add packages, manage requests, navigate with maps, and view order details and history, all with ease.
                </p>

                {/* CONTENT */}
                <div className="flex flex-col gap-12 lg:flex-row">

                    {/* LEFT IMAGE */}
                    <div className="flex w-full items-center justify-center lg:w-1/2">
                        <img
                            src={providerappfeatures}
                            alt="Provider App Features"
                            className="w-full max-w-[480px] object-contain scale-105"
                        />
                    </div>

                    {/* RIGHT SCROLLABLE CARDS */}
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

                </div>
            </div>
        </section>
    );
};

export default ProviderAppFeatures;
import React from "react";
import {
FaTruck,
FaHeartbeat,
FaStore,
FaShieldAlt,
FaUniversity,
FaVideo,
FaSeedling,
FaShippingFast,
FaTools,
FaUsers,
FaTaxi
} from "react-icons/fa";

export default function IndustriesSection() {

const industries = [
{
icon: <FaTruck />,
title: "Hyperlocal Delivery",
color: "text-orange-500",
span: "lg:col-span-2",
desc: "Build scalable delivery platforms for groceries, food, and on-demand services using Flutter technology."
},
{
icon: <FaHeartbeat />,
title: "Healthcare",
color: "text-red-500",
desc: "Develop secure healthcare apps including appointment booking, telemedicine, and digital medical records."
},
{
icon: <FaStore />,
title: "Marketplace",
color: "text-green-600",
desc: "Create scalable B2B and B2C marketplace apps connecting buyers and sellers with seamless transactions."
},
{
icon: <FaShieldAlt />,
title: "Insurance",
color: "text-blue-600",
desc: "Launch insurance applications that simplify policy management, claims processing, and user engagement."
},
{
icon: <FaUniversity />,
title: "Banking & Finance",
color: "text-yellow-600",
desc: "Build secure fintech applications for payments, transactions, and digital banking solutions."
},
{
icon: <FaVideo />,
title: "Video Streaming",
color: "text-pink-600",
span: "lg:col-span-2",
desc: "Deliver high-performance video streaming platforms with real-time content delivery and monetization."
},
{
icon: <FaSeedling />,
title: "Agriculture",
color: "text-green-700",
desc: "Connect farmers, buyers, and suppliers through modern agriculture mobile platforms."
},
{
icon: <FaShippingFast />,
title: "Logistics",
color: "text-blue-700",
desc: "Manage fleet operations, deliveries, and supply chains using powerful logistics applications."
},
{
icon: <FaTools />,
title: "Handyman",
color: "text-orange-600",
desc: "Create service booking platforms connecting customers with professional home service providers."
},
{
icon: <FaUsers />,
title: "Social Media",
color: "text-green-600",
desc: "Develop engaging social networking platforms with messaging, content sharing, and communities."
},
{
icon: <FaTaxi />,
title: "Transportation",
color: "text-red-600",
span: "lg:col-span-2",
desc: "Launch ride-hailing and transport apps with real-time tracking, booking systems, and driver management."
}
];

return (
<section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6">

{/* Header */}

<div className="text-center mb-14">

<span className="inline-flex items-center gap-2 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
Who We Serve
</span>

<h2 className="text-4xl font-semibold mt-4 text-blue-600">
Industries We Empower with Flutter App Development
</h2>

<p className="text-gray-600 mt-4 max-w-3xl mx-auto">
Our Flutter solutions support businesses across many industries by
delivering scalable and high-performance mobile applications.
</p>

</div>


{/* Grid */}

<div className="grid lg:grid-cols-3 gap-8">

{industries.map((item, index) => (

<div
key={index}
className={`bg-gray-50 rounded-2xl p-8 ${item.span || ""}`}
>

<div className="flex items-start gap-4">

<div className="bg-white p-3 rounded-xl shadow-sm text-2xl">
<span className={item.color}>
{item.icon}
</span>
</div>

<div>

<h3 className={`text-lg font-semibold ${item.color}`}>
{item.title}
</h3>

<p className="text-gray-600 mt-2">
{item.desc}
</p>

</div>

</div>

</div>

))}

</div>

</div>

</section>
);
}
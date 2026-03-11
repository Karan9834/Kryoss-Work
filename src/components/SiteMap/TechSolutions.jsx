import React from "react";
import { CheckCheck } from "lucide-react";

const TechSolutions = () => {

const apps = [
"Product Engineering",
"DevOps & Cloud Consulting",
"Data and AI",
"Mobile App Development",
"Web Development Services",
"Flutter App Development",
"Android App Development",
"Kotlin App Development",
"iOS App Development",
"Mvp App Development",
"Laravel Development",
"Wordpress Development",
"Ecommerce Web Development",
"DevOps Consulting Services",
"Product Maintenance & Support",
"Generative AI Services"
];

return (
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-10">
End-to-End <span className="text-orange-400">Tech Solutions</span>
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

{apps.map((app,index)=>(
<div key={index} className="flex items-center gap-3 group cursor-pointer">

<div className="w-8 h-8 flex items-center justify-center rounded-full border
group-hover:bg-orange-400 group-hover:border-orange-400 transition">

<CheckCheck className="w-5 h-5 text-orange-600 group-hover:text-white"/>

</div>

<span className="text-lg font-medium text-gray-700">{app}</span>

</div>
))}

</div>
</div>
</section>
);
};

export default TechSolutions;
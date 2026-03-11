import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FirebaseFAQ() {

const [openIndex,setOpenIndex] = useState(null)

const faqs = [

{
question:"What is white-label Firebase app development?",
answer:"White-label Firebase development allows agencies to deliver scalable cloud-powered applications to their clients under their own brand name. Our team builds the backend infrastructure, real-time features, and deployment systems while your agency remains the primary service provider."
},

{
question:"How much does Firebase application development cost?",
answer:"The cost of a Firebase application depends on the complexity of the features, integrations, and scalability requirements. Simple applications can be built quickly, while enterprise platforms may require more advanced architecture and development time."
},

{
question:"Is Firebase suitable for large-scale applications?",
answer:"Yes. Firebase is designed to handle applications with millions of users by offering real-time databases, cloud functions, and automatic scaling infrastructure. This makes it ideal for both startups and large digital platforms."
},

{
question:"How does a white-label partnership remain invisible to my clients?",
answer:"Our white-label model ensures your agency remains the face of the project. All communication, documentation, and deliverables can be branded under your company while we operate as your backend development partner."
},

{
question:"What technologies are used with Firebase development?",
answer:"Firebase applications commonly use technologies like Cloud Functions, Firestore, Realtime Database, authentication services, and modern frontend frameworks such as React, Flutter, or Next.js."
},

{
question:"Do you offer support after launching the application?",
answer:"Yes. We provide continuous monitoring, performance optimization, bug fixes, and feature updates after launch to ensure the application remains stable and secure as user demand grows."
},

{
question:"How long does it take to develop a Firebase application?",
answer:"Development timelines vary depending on the project requirements. Smaller MVP applications can take a few weeks, while complex platforms with integrations and advanced features may take several months."
},

{
question:"Can I hire dedicated Firebase developers for my agency?",
answer:"Absolutely. Agencies can hire dedicated Firebase engineers from our team to work as an extension of their development department for ongoing projects or long-term partnerships."
},

{
question:"Are Firebase apps secure for industries like fintech or healthcare?",
answer:"Firebase offers robust authentication, encrypted data transmission, and advanced security rules. When implemented correctly, it can support applications that require strong data protection and compliance standards."
},

{
question:"Why choose a professional development team instead of app builders?",
answer:"App builders offer limited customization and scalability. Professional Firebase developers create flexible architectures, integrate advanced features, and ensure the product can evolve as your business grows."
}

]

const toggle = (index)=>{
setOpenIndex(openIndex === index ? null : index)
}

return(

<section className="py-24 bg-white">

<div className="max-w-4xl mx-auto px-6">

{/* HEADER */}

<div className="text-center mb-14">

<span className="px-4 py-1 text-sm bg-green-100 text-green-600 rounded-full">
FAQs
</span>

<h2 className="text-4xl font-semibold mt-5">
Frequently Asked Questions
</h2>

<p className="text-gray-500 mt-4 max-w-2xl mx-auto">
We’ve compiled answers to the most common questions agencies and businesses ask when exploring Firebase powered application development.
</p>

</div>


{/* FAQ ITEMS */}

<div className="space-y-5">

{faqs.map((faq,index)=>{

const isOpen = openIndex === index

return(

<div
key={index}
className="border border-gray-200 rounded-xl transition hover:shadow-md"
>

<button
onClick={()=>toggle(index)}
className="w-full flex justify-between items-center text-left p-6"
>

<span className="font-medium text-gray-800">
{faq.question}
</span>

{isOpen ? (
<Minus className="text-green-600"/>
) : (
<Plus className="text-gray-400"/>
)}

</button>

{isOpen && (

<div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
{faq.answer}
</div>

)}

</div>

)

})}

</div>

</div>

</section>

)

}
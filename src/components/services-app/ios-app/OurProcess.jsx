import { useEffect, useRef, useState } from "react";

export default function FirebaseProcess() {

const sliderRef = useRef(null)
const [active,setActive] = useState(0)

const steps = [

{
title:"Consultation",
desc:"We begin by understanding your business goals and designing a scalable Firebase architecture tailored to your application needs."
},

{
title:"UI/UX Planning",
desc:"Our design team builds intuitive user journeys and modern interfaces that improve engagement and usability."
},

{
title:"Development",
desc:"Using Firebase and modern frameworks we develop secure, scalable applications optimized for performance."
},

{
title:"Quality Assurance",
desc:"Our QA engineers test every feature to ensure reliability, security, and smooth performance across devices."
},

{
title:"Deployment",
desc:"We launch your application with optimized cloud infrastructure ensuring seamless delivery and stability."
},

{
title:"Maintenance",
desc:"Continuous updates, monitoring, and improvements keep your application secure and running efficiently."
}

]

useEffect(()=>{

let index = 0

const interval = setInterval(()=>{

index = (index + 1) % steps.length
setActive(index)

sliderRef.current.scrollTo({
left:index*380,
behavior:"smooth"
})

},2000)

return ()=>clearInterval(interval)

},[])

return(

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

{/* LEFT CONTENT */}

<div>

<span className="px-4 py-1 text-sm bg-green-100 text-green-600 rounded-full">
Our Process
</span>

<h2 className="text-4xl font-semibold mt-4 leading-tight">

Our Proven{" "}
<span className="text-green-600">
Firebase Development Process
</span>

</h2>

<p className="text-gray-500 mt-5 max-w-lg leading-relaxed">

Our structured development workflow ensures transparency and
efficiency from concept to deployment. Each step focuses on
building scalable Firebase powered applications that perform
reliably as your business grows.

</p>

</div>


{/* RIGHT SIDE */}

<div className="relative">

{/* Animated Progress Line */}

<div className="absolute top-4 left-0 w-full h-1 bg-gray-200 rounded-full">

<div
className="h-1 bg-green-500 rounded-full transition-all duration-700"
style={{width:`${(active+1)/steps.length*100}%`}}
/>

</div>


{/* STEP INDICATORS */}

<div className="flex justify-between mb-10 mt-2">

{steps.map((_,i)=>(

<div
key={i}
className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-500
${active===i
?"bg-green-600 text-white shadow-lg shadow-green-300 scale-110"
:"bg-green-100 text-green-600"}
`}
>
{i+1}
</div>

))}

</div>


{/* SLIDER */}

<div
ref={sliderRef}
className="flex gap-6 overflow-hidden"
>

{steps.map((step,index)=>(

<div
key={index}
className={`min-w-[360px] rounded-2xl p-7 border border-green-200
transition-all duration-500
${active===index
?"bg-green-50 shadow-xl shadow-green-100"
:"bg-white"}
`}
>

{/* ICON */}

<div className="w-10 h-10 mb-4 rounded-lg bg-green-600 text-white flex items-center justify-center">

⚡

</div>


{/* TITLE */}

<h3 className="font-semibold text-lg text-gray-800">
{step.title}
</h3>


{/* DESCRIPTION */}

<p className="text-gray-500 text-sm mt-3 leading-relaxed">
{step.desc}
</p>

</div>

))}

</div>

</div>

</div>

</section>

)

}
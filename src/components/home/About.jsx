// import { CheckCircle, ArrowRight } from "lucide-react";

// const pills = [
//   "Customer-Centric Approach",
//   "Scalable & Secure Apps",
//   "Innovative Solutions",
//   "Reliable Digital Partner"];


// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left */}
//           <div className="space-y-6">
//             <p className="text-primary text-sm font-semibold uppercase tracking-widest">
//               About KryossWork
//             </p>
//             <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
//               Building Digital Products That{" "}
//               <span className="text-primary">Make a Difference</span>
//             </h2>
//             <p className="text-muted-foreground leading-relaxed">
//               KryossWork is a product engineering company specializing in on-demand app
//               development, white-label solutions, and enterprise digital transformation. Since our
//               founding, we've delivered 250+ projects to clients across 70+ countries.
//             </p>
//             <p className="text-muted-foreground leading-relaxed">
//               Our team of 40+ experts combines deep industry knowledge with cutting-edge technology
//               to build products that scale, perform, and delight users.
//             </p>

//             {/* Pills */}
//             <div className="flex flex-wrap gap-3">
//               {pills.map((p) =>
//                 <div
//                   key={p}
//                   className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5">

//                   <CheckCircle className="h-4 w-4 text-primary" />
//                   <span className="text-sm font-medium text-foreground">{p}</span>
//                 </div>
//               )}
//             </div>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-md font-semibold hover:bg-orange-600 transition-colors">

//               About Us <ArrowRight className="h-4 w-4" />
//             </a>
//           </div>

//           {/* Right — Team Photo */}
//           <div className="relative">
//             <div className="rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="/whitelabel-assets/assets/images/about-team.jpg"
//                 alt="KryossWork Team"
//                 className="w-full h-[450px] object-cover"
//                 onError={(e) => {
//                   if (!e.currentTarget.dataset.error) {
//                     e.currentTarget.dataset.error = "true";
//                     e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80";
//                   }
//                 }} />

//             </div>
//             {/* Decorative orange blob */}
//             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
//             <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full -z-10" />
//           </div>
//         </div>
//       </div>
//     </section>);

// }










import { CheckCircle, ArrowRight } from "lucide-react";

const pills = [
  "Customer-Centric Approach",
  "Scalable & Secure Apps",
  "Innovative Solutions",
  "Reliable Digital Partner"
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50"
    >

      {/* 🔥 Background Blobs (soft but premium) */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      {/* subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-7 backdrop-blur-md bg-white/60 p-8 rounded-2xl border border-white/40 shadow-lg">

            <p className="text-primary text-sm font-semibold uppercase tracking-widest">
              About KryossWork
            </p>

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              Building Digital Products That{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Make a Difference
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              KryossWork is a product engineering company specializing in on-demand app
              development, white-label solutions, and enterprise transformation.
              We’ve delivered 250+ projects across 70+ countries.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team builds scalable, high-performance digital products
              that actually grow businesses.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {pills.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-orange-50 hover:border-orange-200 transition"
                >
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-gray-700">{p}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-orange-600 transition shadow-md"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* glow */}
            <div className="absolute -inset-6 bg-orange-100 blur-2xl rounded-3xl opacity-50"></div>

            <div className="relative rounded-2xl overflow-hidden border border-white/40 shadow-xl">
              <img
                src="/whitelabel-assets/assets/images/about-team.jpg"
                alt="KryossWork Team"
                className="w-full h-[450px] object-cover"
                onError={(e) => {
                  if (!e.currentTarget.dataset.error) {
                    e.currentTarget.dataset.error = "true";
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80";
                  }
                }}
              />
            </div>

            {/* floating accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>

          </div>
        </div>
      </div>
    </section>
  );
}
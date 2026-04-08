import { Link } from 'react-router-dom';
// import { Quote, Play } from "lucide-react";

// const testimonials = [
//   {
//     name: "James Mitchell",
//     role: "CEO, DeliverEase",
//     photo: "/whitelabel-assets/assets/images/testimonials/client1.jpg",
//     fallback: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
//     text: "KryossWork transformed our business with a feature-rich delivery app. Their team was professional, responsive, and delivered beyond our expectations. Highly recommended!",
//     video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//   },
//   {
//     name: "Priya Sharma",
//     role: "Founder, RideSwift",
//     photo: "/whitelabel-assets/assets/images/testimonials/client2.jpg",
//     fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
//     text: "The transport app they built for us is exceptional. Smooth UX, real-time tracking, and a robust driver management system. Our user base grew 300% in 6 months!",
//     video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//   },
//   {
//     name: "Carlos Ruiz",
//     role: "CTO, HomeHelpr",
//     photo: "/whitelabel-assets/assets/images/testimonials/client3.jpg",
//     fallback: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
//     text: "Working with KryossWork was a game changer. They understood our vision and built a handyman marketplace that our customers love. The post-launch support is stellar.",
//     video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//   }];


// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
//             Client Testimonials
//           </p>
//           <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
//             Let's Check What Our{" "}
//             <span className="text-primary">Clients Love</span> to Share!
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((t) =>
//             <div
//               key={t.name}
//               className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow relative">

//               <Quote className="h-8 w-8 text-primary/20 mb-4" />
//               <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.text}</p>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={t.photo}
//                     alt={t.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                     onError={(e) => { if (!e.currentTarget.dataset.error) { e.currentTarget.dataset.error = "true"; e.currentTarget.src = "/placeholder.svg"; } }} />

//                   <div>
//                     <p className="font-bold text-sm text-foreground">{t.name}</p>
//                     <p className="text-xs text-muted-foreground">{t.role}</p>
//                   </div>
//                 </div>
//                 <a
//                   href={t.video}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full hover:bg-red-600 transition-colors">

//                   <Play className="h-4 w-4 text-white fill-white" />
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="text-center mt-8">
//           <Link to="/company/testimonials"
//             
//             className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">

//             View 20 More Testimonials →
//           </Link>
//         </div>
//       </div>
//     </section>);

// }









import { Quote, Play } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    role: "CEO, DeliverEase",
    photo: "/whitelabel-assets/assets/images/testimonials/client1.jpg",
    fallback: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    text: "KryossWork transformed our business with a feature-rich delivery app. Their team was professional, responsive, and delivered beyond our expectations. Highly recommended!",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    name: "Priya Sharma",
    role: "Founder, RideSwift",
    photo: "/whitelabel-assets/assets/images/testimonials/client2.jpg",
    fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    text: "The transport app they built for us is exceptional. Smooth UX, real-time tracking, and a robust driver management system. Our user base grew 300% in 6 months!",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    name: "Carlos Ruiz",
    role: "CTO, HomeHelpr",
    photo: "/whitelabel-assets/assets/images/testimonials/client3.jpg",
    fallback: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    text: "Working with KryossWork was a game changer. They understood our vision and built a handyman marketplace that our customers love. The post-launch support is stellar.",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-green-100 via-white to-red-200 overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Client Testimonials
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Check What Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent italic">
              Clients Love
            </span>{" "}
            to Share!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group"
            >

              <Quote className="h-8 w-8 text-primary/20 mb-4 group-hover:scale-110 transition" />

              <p className="text-base text-gray-600 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover grayscale-0 group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      if (!e.currentTarget.dataset.error) {
                        e.currentTarget.dataset.error = "true";
                        e.currentTarget.src = t.fallback;
                      }
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>

                <a
                  href={t.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full hover:bg-red-600 transition-all shadow-md hover:scale-110 animate-pulse"
                >
                  <Play className="h-4 w-4 text-white fill-white" />
                </a>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/company/testimonials"
            
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View 20 More Testimonials →
          </Link>
        </div>

      </div>
    </section>
  );
}
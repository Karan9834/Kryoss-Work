// import { useState } from "react";
// import { Mail } from "lucide-react";

// export default function Newsletter() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       setSubmitted(true);
//       setEmail("");
//       setTimeout(() => setSubmitted(false), 3000);
//     }
//   };

//   return (
//     <section className="py-16 bg-primary">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
//           <Mail className="h-5 w-5 text-white" />
//         </div>
//         <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
//           Stay Ahead with Our Latest Updates
//         </h2>
//         <p className="text-white/80 mb-8">
//           Subscribe to get insights on app development, industry trends, and exclusive offers
//           delivered to your inbox.
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">

//           <input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email address"
//             className="flex-1 px-5 py-3 rounded-lg text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-white/50" />

//           <button
//             type="submit"
//             className="bg-[#1a1a1a] text-white px-7 py-3 rounded-lg font-bold hover:bg-black transition-colors whitespace-nowrap">

//             {submitted ? "Subscribed! ✓" : "Subscribe"}
//           </button>
//         </form>
//       </div>
//     </section>);

// }






















import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 relative overflow-hidden">

      {/* gradient blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6 shadow-md">
          <Mail className="h-6 w-6 text-white" />
        </div>

        {/* heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Stay Ahead with Our Latest Updates
        </h2>

        {/* description */}
        <p className="text-gray-600 mb-10">
          Subscribe to get insights on app development, industry trends,
          and exclusive offers delivered to your inbox.
        </p>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto bg-white/70 backdrop-blur-md p-2 rounded-xl shadow-lg"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-lg text-gray-700 bg-transparent focus:outline-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-md"
          >
            {submitted ? "Subscribed! ✓" : "Subscribe"}
          </button>
        </form>

      </div>
    </section>
  );
}
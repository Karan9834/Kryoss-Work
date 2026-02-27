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
    <section className="py-16 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
          <Mail className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
          Stay Ahead with Our Latest Updates
        </h2>
        <p className="text-white/80 mb-8">
          Subscribe to get insights on app development, industry trends, and exclusive offers
          delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-lg text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-white/50" />
          
          <button
            type="submit"
            className="bg-[#1a1a1a] text-white px-7 py-3 rounded-lg font-bold hover:bg-black transition-colors whitespace-nowrap">
            
            {submitted ? "Subscribed! ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>);

}
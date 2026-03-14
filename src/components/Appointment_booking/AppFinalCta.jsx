export default function Newsletter() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="border px-4 py-1 rounded-full text-sm">
          Get Updates
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4">
          Stay Ahead with Our <span className="text-blue-600">Latest Updates</span>
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Subscribe to our newsletter for exclusive updates and tips on the
          latest trends in app development solutions.
        </p>

        {/* Email Input */}
        <div className="flex items-center bg-white border rounded-full p-2 max-w-md mx-auto">

          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 px-4 py-2 outline-none rounded-full"
          />

          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}
export default function Newsletter() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="border px-4 py-1 rounded-full text-sm">
          Stay Informed
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4">
          Remain Competitive with Our <span className="text-blue-600">Weekly Tech Bulletins</span>
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Join our subscriber list acquiring premium perspectives alongside
          tactical advice concerning modern software engineering strategies.
        </p>

        {/* Email Input */}
        <div className="flex items-center bg-white border rounded-full p-2 max-w-md mx-auto">

          <input
            type="email"
            placeholder="Type your email address"
            className="flex-1 px-4 py-2 outline-none rounded-full"
          />

          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full">
            Join Now
          </button>

        </div>

      </div>

    </section>
  );
}
export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* TAG */}

        <span className="px-4 py-1 text-sm bg-green-100 text-green-600 rounded-full">
          Get Updates
        </span>

        {/* HEADING */}

        <h2 className="text-3xl font-semibold mt-4">
          Stay Updated with Our{" "}
          <span className="text-green-600">Latest Insights</span>
        </h2>

        {/* DESCRIPTION */}

        <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
          Join our newsletter to receive useful insights, development
          strategies, and the latest updates in modern application
          technology directly in your inbox.
        </p>

        {/* INPUT */}

        <div className="mt-8 flex justify-center">

          <div className="flex items-center border rounded-full overflow-hidden bg-white shadow-sm">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 w-64 outline-none text-sm"
            />

            <button className="bg-green-600 text-white px-6 py-3 text-sm hover:bg-green-700 transition">
              Subscribe
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
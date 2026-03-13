import React from "react";

const DummySection = () => {
  return (
    <section className="w-full py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Uber Clone Dummy Section
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          This is a test section to verify that the Uber Clone page structure
          and routing are working correctly.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Feature 1</h3>
            <p className="text-sm text-gray-500 mt-2">
              Passenger ride booking
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Feature 2</h3>
            <p className="text-sm text-gray-500 mt-2">
              Driver dashboard
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Feature 3</h3>
            <p className="text-sm text-gray-500 mt-2">
              Real-time tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DummySection;
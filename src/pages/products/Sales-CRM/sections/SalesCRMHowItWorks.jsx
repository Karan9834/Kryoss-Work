import react from 'react';
const SalesCRMHowItWorks = () => {
    return (
        <section className="py-24 bg-[#eef2ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        How Our CRM Works
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Manage your entire sales process step-by-step
                    </p>
                </div>

                {/* PIPELINE */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                    {[
                        "Capture Leads",
                        "Assign to Sales Team",
                        "Track Interactions",
                        "Convert Opportunities",
                        "Close Deals"
                    ].map((step, i) => (
                        <div key={i} className="flex items-center gap-4">

                            {/* Step */}
                            <div className="bg-white border border-indigo-200 px-6 py-4 rounded-full shadow text-center font-medium">
                                {step}
                            </div>

                            {/* Arrow */}
                            {i !== 4 && (
                                <div className="hidden lg:block text-indigo-400 text-2xl">
                                    →
                                </div>
                            )}

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default SalesCRMHowItWorks;
import react from 'react';
import Multiappbenifitimg from "../../../assets/delivery-multiservice-img/Multiappbenifit.webp";
const AppBenefitsCustomers = () => {
    return (
        <section className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* top heading */}

                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm text-gray-600 mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        App Benefits to Customers
                    </div>

                    <h2 className="text-4xl font-semibold mb-4">
                        <span className="text-cyan-500">Benefits of On-Demand</span>{" "}
                        Delivery Apps for Customers
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Here, we will explore how an on-demand delivery app makes life easier
                        for customers.
                    </p>

                </div>

                {/* content */}

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT TEXT */}

                    <div className="space-y-6 text-gray-600 leading-relaxed">

                        <p>
                            Our on-demand delivery software is all about making things easier
                            for both you and your customers. Your customers will love the
                            convenience of features like fast, easy ordering and real-time
                            tracking. Whether they are ordering groceries, food, or any other
                            product, they can rest assured knowing their delivery is in good
                            hands.
                        </p>

                        <p>
                            Also, with our app we make sure that deliveries are always on time
                            with our optimized routes and intelligent scheduling features. It
                            not only improves the experience for your customers, but also
                            helps you grow your delivery business.
                        </p>

                        <p>
                            Our on-demand delivery software is designed to help you increase
                            revenue by reaching new markets. With built-in marketing tools and
                            customised platforms, you can offer promotions and loyalty
                            programs to keep customers coming back.
                        </p>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="flex justify-center lg:justify-end">

                        <img
                            src={Multiappbenifitimg}
                            alt="app benefits"
                            className="w-[420px] md:w-[480px] lg:w-[520px]"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AppBenefitsCustomers;
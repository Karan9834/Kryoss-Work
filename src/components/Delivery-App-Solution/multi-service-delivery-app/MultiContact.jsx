import {
    Phone,
    Mail,
    CalendarCheck,
} from "lucide-react";
import contact from "../../../assets/homeservice-tutor-img/contact-img.webp"
const ContactSection = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border text-sm">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                        Get Help
                    </span>

                    <h2 className="text-4xl font-bold mt-4">
                        Contact <span className="text-cyan-500">Us</span>
                    </h2>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                    {/* LEFT INFO */}
                    <div className="relative rounded-2xl bg-gradient-to-b from-green-50 to-cyan-50 p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-6">
                                Building On-demand Solutions with Modern Technology Solutions.
                            </h3>

                            <div className="space-y-6">
                                {/* WhatsApp */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">WhatsApp</p>
                                        <p className="font-semibold">+91 79849 31943</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Write to us</p>
                                        <p className="font-semibold">sales@whitelabelfox.com</p>
                                    </div>
                                </div>

                                {/* Schedule */}
                                <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-medium w-fit">
                                    Schedule Meeting
                                    <CalendarCheck size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Bottom Image */}
                        <div className="mt-10">
                            <img
                                src={contact}
                                alt="Support"
                                className="max-w-xs mx-auto"
                            />
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="border rounded-2xl p-8">
                        <form className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    className="w-full border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            {/* Contact + Product */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Contact Number:
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Product
                                    </label>
                                    <select className="w-full border rounded-full px-5 py-3 bg-white outline-none">
                                        <option>Select Product</option>
                                        <option>Custom Solution</option>
                                        <option>Gojek Clone App</option>
                                        <option>Food Delivery</option>
                                        <option>UberEats Clone App</option>
                                        <option>Uber Taxi Booking</option>
                                        <option>Medicine Delivery App</option>
                                        <option>Grocery Delivery App (Instacart Clone)</option>
                                        <option>Doctor Appointment Booking System</option>
                                        <option>Carpooling App Script</option>
                                        <option>Tinder Clone</option>
                                        <option>Multiple Delivery App (Glovo)</option>
                                        <option>Uber Beauty App</option>
                                        <option>Uber for Tutor App</option>
                                        <option>Uber for House Cleaning</option>
                                        <option>Other Product</option>
                                    </select>
                                </div>
                            </div>

                            {/* Budget */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Budget
                                </label>
                                <select className="w-full border rounded-full px-5 py-3 bg-white outline-none">
                                    <option>Select your budget</option>
                                    <option>Below $5,000 - MVPs with core features</option>
                                    <option>$5,000 - $10,000 - MVPs with custom features</option>
                                    <option>$10,000 - $30,000 - Custom solutions</option>
                                    <option>$30,000 - $50,000 - Advanced tailored solutions</option>
                                    <option>Above $50,000 - Enterprise-grade solutions</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Message:
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full border rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="bg-cyan-500 hover:bg-teal-400 text-white font-semibold px-8 py-3 rounded-full mx-auto block"
                            >
                                Contact Us
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ContactSection;
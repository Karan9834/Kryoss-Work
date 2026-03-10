import { Mail, Phone, Linkedin } from "lucide-react";
import Careerjoin from "../../assets/company-career-img/Careerjoin.webp";
const CareerJoinUs = () => {
    return (
        <section className="py-24 bg-[#faf7f2]">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

                {/* LEFT FORM */}

                <div className="bg-white border rounded-3xl p-8 shadow-sm">

                    <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm mb-6">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Join Our Team!
                    </div>

                    <h2 className="text-4xl font-semibold mb-3">
                        Join Our <span className="text-orange-500">Team – Apply Now!</span>
                    </h2>

                    <p className="text-orange-500 font-medium mb-4">
                        Note: Apply only if you are from Rajkot or Saurashtra region
                    </p>

                    <p className="text-gray-600 mb-8">
                        Take the next step in your career with White Label Fox! Fill out the form below to apply for our current openings.
                    </p>

                    {/* FORM */}

                    <form className="space-y-6">

                        <div className="grid md:grid-cols-2 gap-4">

                            <input
                                type="text"
                                placeholder="Name"
                                className="border rounded-xl px-4 py-3 w-full focus:outline-none focus:border-orange-400"
                            />

                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="border rounded-xl px-4 py-3 w-full focus:outline-none focus:border-orange-400"
                            />

                        </div>

                        <input
                            type="email"
                            placeholder="Email"
                            className="border rounded-xl px-4 py-3 w-full focus:outline-none focus:border-orange-400"
                        />

                        <div className="grid md:grid-cols-2 gap-4">

                            <select className="border rounded-xl px-4 py-3 w-full focus:outline-none focus:border-orange-400">
                                <option>Select Position</option>
                                <option>BDE</option>
                                <option>BA</option>
                                <option>SEO Executive</option>
                                <option>Sales Executive</option>
                            </select>

                            <select className="border rounded-xl px-4 py-3 w-full focus:outline-none focus:border-orange-400">
                                <option>Select Experience</option>
                                <option>Entry Level (0-1 years)</option>
                                <option>Junior (1-3 years)</option>
                                <option>Mid-Level (2-4 years)</option>
                            </select>

                        </div>

                        {/* Upload */}

                        <div className="border border-dashed rounded-xl p-6 text-center text-gray-500">
                            Upload Resume (PDF, DOC)
                            <input type="file" className="hidden" />
                        </div>

                        {/* Submit */}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
                        >
                            Submit
                        </button>

                    </form>

                </div>

                {/* RIGHT SIDE */}

                <div className="space-y-8">

                    {/* IMAGE */}

                    <img
                        src={Careerjoin}
                        alt="team"
                        className="rounded-3xl w-full object-cover"
                    />

                    {/* CONTACT BOX */}

                    <div className="bg-[#f5ede4] border rounded-3xl p-6">

                        <div className="grid md:grid-cols-2 gap-6">

                            {/* EMAIL */}

                            <a
                                href="mailto:hr@whitelabelfox.com"
                                className="flex items-center gap-4 bg-white p-5 rounded-2xl hover:shadow transition"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl text-orange-500">
                                    <Mail size={22} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="text-gray-600 text-sm">
                                        hr@whitelabelfox.com
                                    </p>
                                </div>
                            </a>

                            {/* LINKEDIN */}

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="flex items-center gap-4 bg-white p-5 rounded-2xl hover:shadow transition"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl text-orange-500">
                                    <Linkedin size={22} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">LinkedIn</h4>
                                    <p className="text-gray-600 text-sm">
                                        HR Manager
                                    </p>
                                </div>
                            </a>

                        </div>

                        {/* PHONE */}

                        <a
                            href="tel:+916352587360"
                            className="flex items-center gap-4 bg-white p-5 rounded-2xl hover:shadow transition mt-6"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl text-orange-500">
                                <Phone size={22} />
                            </div>

                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <p className="text-gray-600 text-sm">
                                    +91 6352 587 360
                                </p>
                            </div>
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CareerJoinUs;
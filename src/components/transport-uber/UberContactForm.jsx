import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const UberContactForm = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-10 lg:px-20">
                <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    {/* Contact Info Side */}
                    <div className="lg:w-1/3 bg-primary p-12 text-white space-y-12">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
                            <p className="text-white/80">Ready to launch your own Uber clone? Contact us today for a free consultation and personalized quote.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold tracking-widest text-white/60">Call Us</p>
                                    <p className="font-bold">+91 12345 67890</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold tracking-widest text-white/60">Email Us</p>
                                    <p className="font-bold">sales@whitelabelfox.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold tracking-widest text-white/60">Location</p>
                                    <p className="font-bold">Ahmedabad, Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/20">
                            <p className="text-sm italic">"Join 250+ businesses that have scaled with our solutions."</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-2/3 p-12 lg:p-20">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                                    <input type="text" placeholder="+1 234 567 890" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Plan/Budget</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                                        <option className="bg-gray-900">$5k - $10k</option>
                                        <option className="bg-gray-900">$10k - $25k</option>
                                        <option className="bg-gray-900">$25k+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Your Message</label>
                                <textarea rows="4" placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
                            </div>

                            <button className="w-full bg-primary text-white font-bold py-5 rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-orange-500/20 active:scale-[0.98]">
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UberContactForm;

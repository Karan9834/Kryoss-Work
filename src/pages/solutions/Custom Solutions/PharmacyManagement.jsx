import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Pill, Shield, PlusCircle, LayoutDashboard, Cloud, ShoppingCart,
    Smartphone, PenTool, Database, Search, ArrowRight, Activity,
    CheckCircle, List, FileText, Share2, FileDigit, BarChart3, Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import PMSCardSection from '../../../components/PMS-Pharmacy-Mgmt/PMSCardSection';

// Asset Imports
import HeroImg from '../../../assets/Pharmacy Management/Landing page_.jpg';
import IntroImg from '../../../assets/Pharmacy Management/What is Pharmacy Management_.jpg';
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const PharmacyManagement = () => {
    const [activeFeatureTab, setActiveFeatureTab] = useState("Key");

    const services = [
        {
            icon: Settings,
            title: "Custom Pharmacy Software Development",
            desc: "Make your pharmacy more advanced and boost productivity within, using a pharmacy software customized to your needs. Includes solution consultancy, software architecting, custom development, and managed services."
        },
        {
            icon: Activity,
            title: "Pharmacy Automation System",
            desc: "Automate menial tasks like prescription filling, formula compounding, and more with pharmacy automation systems like medical dispenser systems, compounding software, automated inventory management, and IVR auto-refill."
        },
        {
            icon: LayoutDashboard,
            title: "Custom Module Development and Integration",
            desc: "Upgrade your pharmacy software to the requirements of the new era with tailor-made POS integration, e-Prescription integration, legacy modernization, and system QA/testing."
        },
        {
            icon: FileText,
            title: "Pharmacy Document Management Software",
            desc: "Make organizing information from physical forms easier than ever with pharmacy document management software, prescription records, embedded solutions, procurement, and EHR integration."
        },
        {
            icon: Database,
            title: "Pharmacy Inventory Management System",
            desc: "Manage your pharmacy inventory seamlessly in a few clicks with automated inventory management, aggregation and sync, cloud-based solutions, and e-prescription integration."
        }
    ];

    const systemFeatures = [
        { icon: LayoutDashboard, title: "Manage Store", desc: "Easy to use interface that allows pharmacy store owners to update details and manage it in a few clicks." },
        { icon: Pill, title: "Add Available Drugs", desc: "Update the medicines available in your inventory and share information corresponding to them across users." },
        { icon: FileDigit, title: "In-built e-billing", desc: "Invoice creation made easier. Just enter the details of billable items, and the system takes care of the rest." },
        { icon: ShoppingCart, title: "Electronic Wholesaler Ordering", desc: "Ensure updated costing and inventory at all times, helping with reliable margin reporting and inventory valuations." },
        { icon: Share2, title: "Auto-Fax", desc: "Lets doctors call or fax the patient's refill to the pharmacist, saving the patient’s visit to the pharmacy." },
        { icon: BarChart3, title: "Reporting and Analytics", desc: "View comprehensive details easily and analyze parameters like customer details, revenue, inventory, and more." },
        { icon: FileText, title: "e-Prescriptions", desc: "Access to prescriptions available online. Use the same to ensure accurate order delivery." },
        { icon: Database, title: "Inventory Management", desc: "Manage your inventory better with an inbuilt system that brings all the information on a single screen." }
    ];

    const keyFeatures = [
        "Complete Demographic Details", "Full Prescription Management", "Automatic Operating at Reception",
        "Dispensary Management", "Accuracy & Safety", "Overall Data Management",
        "Commission Reporting", "Comprehensive Billing Information", "Report Generation on Monthly, Weekly & Daily basis"
    ];

    const benefits = [
        "Paperless Record", "User-Friendly System", "Easy Information Sharing",
        "Flexible Reporting System", "Complete Data Security With Authorization", "A Centralized Pharmacy Record System",
        "Accessible With Doctors & Other Staff Members", "Easy & Customizable Data Entry Forms", "Helps To Run Entire Hospital's Functions Smoothly"
    ];

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            <Helmet>
                <title>Pharmacy Management System Solution | kryossone</title>
                <meta name="description" content="Custom-made online pharmacy app development solution. Kryoss Softech provides cost-effective pharmacy software development services." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden bg-gradient-to-br from-[#F0FDF4] via-white to-[#DCFCE7]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-green-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10 py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-green-50 transition-colors shadow-sm border border-gray-100 mb-8 cursor-pointer"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-semibold text-gray-700">ERP & Account Software Development</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6 text-gray-900"
                            >
                                Pharmacy Management <br /> <span className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">System Solution</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto lg:mx-0 mb-6 text-gray-600"
                            >
                                In concurrent times when pharmacy management software development is in outstanding demand, our developers leave no stones unturned to provide custom-made, cost-effective solutions. 100% Guaranteed Compliance.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="tracking-[0.01em] group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 text-[16px] font-semibold tracking-[0.01em] normal-case">
                                    Start Exploring
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-[55%] relative flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-teal-500/10 rounded-3xl blur-2xl transform rotate-3" />
                                <img
                                    src={HeroImg}
                                    alt="Pharmacy Management Software Solution"
                                    className="max-w-full max-h-full object-contain rounded-3xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="py-20 lg:py-32 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-4 bg-green-50 border border-green-100 rounded-[2rem] transform -rotate-2" />
                            <img
                                src={IntroImg}
                                alt="What is Pharmacy Management Software"
                                className="relative w-full rounded-2xl shadow-xl object-cover h-auto"
                            />
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="leading-[1.2] text-gray-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
                                What is <span className="text-green-600">Pharmacy Management</span> Software?
                            </h2>
                            <p className="leading-[1.6] text-gray-600 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                Pharmacy management software enables users at pharmacy stores to optimize operational efficiency, leverage actionable data points, and reduce costs, compliance risks, and flaws. The solutions are enriched with an extensive range of features that streamline the workflows for a majority of tasks, including drug dispensing, medical claims management, as well as patient's medication adherence.
                            </p>
                            <p className="text-gray-600 mb-8 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">
                                Pharmaceutical management software provides online software to automate processes and increase revenue by using our CRM tools for daily activities planning, marketing, sales, and production analytics.
                            </p>
                            <button className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-green-600 transition-all shadow-md text-[16px] font-semibold tracking-[0.01em] normal-case">
                                Request a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Services Layout */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/40 py-20 px-6">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="leading-[1.2] text-slate-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
                            Wide Range of <span className="text-green-600">Pharmacy Software Development</span> Services
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mt-6"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-green-300 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                                    <service.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="leading-[1.6] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Features Grid */}
            <section className="py-24 bg-[#1E293B] relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] opacity-[0.05]" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="leading-[1.2] text-white mb-6 font-display text-[30px] md:text-[36px] font-bold leading-[1.2]">
                            Pharmacy Management <span className="text-green-400">System Features</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {systemFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-green-500/30 group">
                                <div className="w-14 h-14 bg-green-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors border border-green-800/50">
                                    <feature.icon className="text-green-400 group-hover:text-white transition-colors" size={26} />
                                </div>
                                <h3 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-white mb-3">{feature.title}</h3>
                                <p className="text-green-200/70 text-[14px] md:text-[16px] font-normal leading-[1.6]">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Key Features & Benefits */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 xl:gap-20">
                        {/* Benefits Panel */}
                        <div className="w-full lg:w-1/2">
                            <span className="tracking-[0.05em] inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full mb-4 text-[12px] font-medium tracking-[0.05em] uppercase">
                                Why Upgrade?
                            </span>
                            <h2 className="text-gray-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
                                Benefits of Using <span className="text-green-600">Pharmacy Software</span>
                            </h2>
                            <p className="text-gray-600 mb-8 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">
                                With the help of an intelligent software system improves productivity and business revenue. Pharmacy Software is the most reliable and effective cut the operating and actively manage overall aspects. Manual tasks look tedious, but entering pharmacy details into the system to manage the account, stock and delivery is quite easier.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm font-semibold text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Key Features */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden text-white">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
                                <h3 className="text-2xl font-bold mb-8 relative z-10">Key Features of Pharmacy</h3>
                                <p className="mb-8 text-slate-300 relative z-10 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                    Apart from manual entries other work seems a good job along with the software. The staff is responsible to put efforts and managing effectively in-house pharmacy.
                                </p>
                                <div className="space-y-4 relative z-10">
                                    {keyFeatures.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-green-400" />
                                            <span className="text-slate-200 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PMSCardSection />
            <OurWork theme={{ primary: "text-green-600", accent: "bg-green-600" }} />
            <Testimonial theme="green" />
            <Industries theme={{ bg: "bg-[#f0fdf4]", primary: "text-green-600", iconBg: "bg-green-100", iconColor: "text-green-600" }} />
            <PopularBlogs />
            <ContactUs id="contact-us" theme="green" />
            <TeamMoments />
        </div>
    );
};

export default PharmacyManagement;

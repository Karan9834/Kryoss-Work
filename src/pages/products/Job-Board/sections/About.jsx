import React from "react";
import { CheckCircle, Users, Briefcase, Star } from "lucide-react";
import jobAboutImg from "@/assets/job portal products in/About Platfor Connectin.png";

const JobAbout = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <img
          src={jobAboutImg}
          alt="About Platform Connecting"
          className="w-full max-w-lg rounded-2xl shadow-2xl"
        />

        <div>
          <span className="text-green-600 bg-green-50 px-4 py-1 rounded-full text-sm">
            About Platform
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Connecting Talent with{" "}
            <span className="text-green-600">Top Companies</span>
          </h2>

          <p className="mt-6 text-gray-600">
            Our job board platform helps job seekers discover opportunities and
            companies find the best talent efficiently.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <p className="flex gap-2"><CheckCircle className="text-green-500"/> Verified Jobs</p>
            <p className="flex gap-2"><CheckCircle className="text-green-500"/> Easy Applications</p>
            <p className="flex gap-2"><CheckCircle className="text-green-500"/> Smart Matching</p>
            <p className="flex gap-2"><CheckCircle className="text-green-500"/> Career Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobAbout;
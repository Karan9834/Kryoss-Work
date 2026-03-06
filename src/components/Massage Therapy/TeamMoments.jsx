import React from "react";



const TeamMoments = () => {
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-14">
          Inside Our Team:{" "}
          <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">Moments That Matter</span>
        </h2>

        {/* Single Image */}
        <div className="flex justify-center">
          <img
            src="https://whitelabelfox.com/assets/images/bottom-our-team-slider/bottom-our-team-image.webp"
            alt="Team Moments"
            className="w-full max-w-8xl rounded-3xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};




export default TeamMoments;
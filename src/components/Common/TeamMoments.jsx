import React from "react";

/**
 * TeamMoments Component
 * A reusable section to showcase inside team gallery/image.
 * 
 * @param {string} spanClassName - Optional Tailwind classes for the accent span text.
 * @param {string} accentText - Optional custom accent text (defaults to 'Moments That Matter').
 */
const TeamMoments = ({
  spanClassName = "text-orange-500",
  accentText = "Moments That Matter"
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">

          Inside Our Team:{" "}
          <span className={`${spanClassName} italic`}>{accentText}</span>
        </h2>

        {/* Image Card Container */}
        <div className="flex justify-center transition-all duration-500">
          <img
            src="/images/company/Inside -our-team.png"
            alt="Inside kryossone Team"
            className="w-full max-w-8xl rounded-[32px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamMoments;

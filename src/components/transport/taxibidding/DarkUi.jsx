import React from "react";
import phone1 from "../../../assets/phone1.webp";

const DarkModeSection = () => {
  return (
    <section
  className="w-full py-16 flex justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://whitelabelfox.com/assets/images/indriver-clone-app/fox-drive-dark-mode-ui-section-bg.webp')",
  }}
>
  <div className="w-full max-w-6xl px-6 text-center">

    <div className="mb-4">
      <span className="inline-flex items-center gap-2 text-sm font-medium
                       text-[#5aa114] border border-[#c7d8a4]
                       px-4 py-1 rounded-full bg-white/70 backdrop-blur-sm">
        <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
        Dark Mode On
      </span>
    </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Sleek Dark Mode for{" "}
          <span className="text-[#9FE870]">Enhanced Experience</span>
        </h2>

    <p className="max-w-2xl mx-auto text-[#4b5563] mb-10 leading-relaxed">
      Provide your riders and partners with a visually striking and eye-friendly 
      interface designed for optimal low-light navigation.
    </p>

    <div className="relative flex justify-center">
      <img
        src={phone1}
        alt="Dark Mode UI"
        className="relative w-full max-w-5xl object-contain"
      />
    </div>

  </div>
</section>
  );
};

export default DarkModeSection;
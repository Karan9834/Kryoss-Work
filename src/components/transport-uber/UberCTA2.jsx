import React from 'react'
import cta2 from "../../assets/transport-uber-img/cta2.webp";
const UberCTA2 = () => {
    return (
        <section className="w-full py-24">
            <div className="max-w-[1400px] mx-auto px-4">
                <div
                    className="
        relative
        flex flex-col lg:flex-row
        items-center
        justify-between
        gap-12
        bg-gradient-to-r from-[#16005c] to-[#2b0fbf]
        rounded-[28px]
        px-8 md:px-16
        py-14
      "
                >
                    {/* LEFT CONTENT */}
                    <div className="max-w-[520px] text-white">
                        <h2 className="text-[30px] md:text-[38px] leading-[40px] md:leading-[48px] font-semibold mb-4">
                            Ready to Take the Next Step for <br />
                            Your Transportation Business?
                        </h2>

                        <p className="text-[15.5px] leading-[26px] text-white/90 mb-8">
                            Book a free demo to discuss your Uber like taxi app development
                            requirements today.
                        </p>

                        <button
                            className="
            border border-white
            text-white
            px-7 py-3
            rounded-full
            text-sm font-medium
            transition-all duration-300
            hover:bg-white
            hover:text-[#2b0fbf]
          "
                        >
                            Get Free Consultation
                        </button>
                    </div>

                    {/* RIGHT IMAGE (SINGLE IMAGE ONLY) */}
                    <div className="w-full lg:w-[520px]">
                        <img
                            src={cta2}
                            alt="CTA Transportation"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default UberCTA2;
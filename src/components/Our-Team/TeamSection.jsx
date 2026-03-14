import React from "react";

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          

           <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          Meet Our Skilled Experts
          </div>
        </div>

          <h2 className="text-4xl font-bold mt-4 mb-4">
            The Minds <span className="text-orange-400"> Behind Innovation</span>
          </h2>

          <p className="text-gray-600 max-w-6xl mx-auto">
            Behind every successful project is a team of dedicated professionals.
            Meet our backend, frontend, mobile, UI/UX, and marketing teams along
            with the tools and technologies we use to build innovative solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">
      

          {/* Backend Team */}
          <div className="col-span-8 bg-blue-100 p-8 rounded-3xl border hover:bg-blue-950">

            <div className="grid grid-cols-2 gap-6">

              {/* Tech stack */}
              <div className="grid grid-cols-3 gap-4">
                <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/Laravel.svg" className="bg-white p-4 rounded-xl"/>
                <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/go-lang.svg" className="bg-white p-4 rounded-xl"/>
                <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/Python.svg" className="bg-white p-4 rounded-xl"/>
                <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/mern.svg" className="bg-white p-4 rounded-xl"/>
                <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/Postgreysql.svg" className="bg-white p-4 rounded-xl"/>
              </div>

              {/* Team */}
              <div className="flex flex-col justify-center items-center">

                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  Backend Team
                </h3>

                <img
                  src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Deep-Faldu.webp"
                  className="w-16 h-16 rounded-full mb-4"
                />

                <div className="flex gap-3">
                  <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Rahul-Matta.webp" className="w-16 h-16 rounded-full"/>
                  <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Samarth-Raval.webp" className="w-16 h-16 rounded-full"/>
                  <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Vatsal-Chotaliya.webp" className="w-16 h-16 rounded-full"/>
                </div>

              </div>

            </div>

          </div>

          {/* App Team */}
          <div className="col-span-4 row-span-2 bg-green-100 p-8 rounded-3xl border h-120 hover:bg-green-950">

            <div className="grid grid-cols-3 gap-4 mb-6">
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/flutter.svg" className="bg-white p-4 rounded-xl"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/Kotlin.svg" className="bg-white p-4 rounded-xl"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/Swift.svg" className="bg-white p-4 rounded-xl"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/mvp-development.svg" className="bg-white p-4 rounded-xl"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/android.svg" className="bg-white p-4 rounded-xl"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/iOS.svg" className="bg-white p-4 rounded-xl"/>
            </div>

            <h3 className="text-xl font-semibold text-center mb-4 text-green-500">
              App Team
            </h3>

            <div className="flex justify-center mb-4">
              <img
                src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/sahil-unagar.webp"
                className="w-16 h-16 rounded-full"
              />
            </div>

            <div className="flex justify-center gap-3">
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Prashant-Kanjariya.webp" className="w-16 h-16 rounded-full"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Dushyant-Mehta.webp" className="w-16 h-16 rounded-full"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Kunj-Shingala.webp" className="w-16 h-16 rounded-full"/>
            </div>

          </div>

          {/* Design Team */}
          <div className="col-span-4 bg-purple-100 p-8 rounded-3xl border hover:bg-purple-950">

            <div className="flex gap-4 mb-6">
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Hetvi-Bakori.webp" className="w-16 h-16 rounded-full"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Jalpa-Chhaya.webp" className="w-16 h-16 rounded-full"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Naisargee-Machchhar.webp" className="w-16 h-16 rounded-full"/>
            </div>

            <h3 className="text-xl font-semibold mt-10 text-purple-500">
              Design Team
            </h3>

            {/* <img
              src="/icons/figma.png"
              className="w-16 bg-white p-3 rounded-xl"
            /> */}

               <div className="flex justify-center mt-10">
             <img
              src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/figma.svg"
              className="w-16 bg-white p-3 rounded-xl"
            />
            </div>

            <div className="flex justify-center gap-6 mt-10">
          <img
              src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/adobe-xd.svg"
              className="w-16 bg-white p-3 rounded-xl"
            />
             <img
              src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/adobe-illustrator.svg"
              className="w-16 bg-white p-3 rounded-xl"
            />
             <img
              src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/adobe-after-effect.svg"
              className="w-16 bg-white p-3 rounded-xl"
            />
            </div>

          </div>

          {/* Frontend Team */}
          <div className="col-span-4 bg-orange-100 p-8 rounded-3xl border h-120 hover:bg-orange-950">

            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Frontend Team
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/bootstrap.svg" className="bg-white p-4 rounded-xl"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/html.svg" className="bg-white p-4 rounded-xl"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/css.svg" className="bg-white p-4 rounded-xl"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/javascript.svg" className="bg-white p-4 rounded-xl"/>
            </div>


              <div className="flex justify-center mt-4">
             
            </div>

            <div className="flex justify-center gap-3 mt-10">

                 <img
                src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Keval-shah.webp"
                className="w-16 h-16 rounded-full"
              />
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Karan-Sakhiya.webp" className="w-16 h-16 rounded-full"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Viral-Agravat.webp" className="w-16 h-16 rounded-full"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Meet-Makwana.webp" className="w-16 h-16 rounded-full"/>
            </div>

          </div>

          {/* Marketing Team */}
          <div className=" col-span-4 col-start-9 row-start-1 bg-blue-50 p-8 rounded-3xl border hover:bg-blue-950">
          

            <div className="flex gap-4">
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/google-ads.svg" className="bg-white p-4 rounded-xl"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/technology-icon/google-analytics.svg" className="bg-white p-4 rounded-xl"/>
           
            </div>
<h3 className="text-xl font-semibold mt-6 text-blue-500">
              SEO Team
            </h3>

             <div className="flex justify-center gap-3">
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Yash-Mehta.webp" className="w-12 h-12 rounded-full"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Twinkle-Ashar.webp" className="w-12 h-12 rounded-full"/>
              <img src="https://whitelabelfox.com/assets/images/our-team/the-minds-behind-innovation/Mansi-Mankad.webp" className="w-12 h-12 rounded-full"/>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
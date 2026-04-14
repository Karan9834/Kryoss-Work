import React from "react";
import { motion } from "framer-motion";

const KeyFeaturesOfNewsPortal = () => {
  const features = [
    {
      title: "Black on White",
      description: "Traditional printed newspaper is white or gray and the text is black. This color combo is perfect for our eyes. The contrast of colors facilitates the readability and that is why this color scheme is the most suitable for newspaper style websites, which are usually stuffed with much content. You can step aside from this classic color mix, but you should always keep in mind that contrast is a must."
    },
    {
      title: "Minimal Graphics",
      description: "The website with newspaper layout is clean, informative, structural and has graphic elements designed accurately and in the minimalist way. Graphic elements are: lines, shapes, colors, typography & textures. The textures are rarely used on newspaper web designs, because a wall of text with images on a wood or grunge texture will distract your visitors and aggravate the readability of the content."
    },
    {
      title: "Headlines and Excerpts",
      description: "Do you want to open each post and read it when you enter a website or blog with many texts? Headlines help us to differentiate interesting article from the secondary one. So, each content block needs to be entitled. Whether it is a small section on a grid or a full-height column, it should have a headline. The headline is to be of a bigger font, typed in bold or highlighted with a different color. This point is clear, I suggest."
    },
    {
      title: "Space for Advertisement",
      description: "How are you going to make money before your website becomes popular? Advertisement is how many website owners make rather big profits. Ad banners have to be placed not just somewhere but this position has to be defined exactly. The right places are sidebar, both left and right, Header or Footer. Promotion banners are often seen right in the middle of the text articles, but this point is controversial."
    },
    {
      title: "Functional Sidebar",
      description: "Sidebar can feature not advertisements only, but content categories, recent content, search box, email newsletter bar, navigation, social sharing buttons, discounts/special offers, etc. Newspaper website layout is great to implement sidebar on, because it would be just another column in the row as per size, colors, fonts, placement. A sidebar should be smaller or equal to the regular column on your layout, no way bigger."
    },
    {
      title: "Social Sharing Encouraged",
      description: "Blogs and news sites are the most common to use newspaper style, and these websites can't exist without social media integration. It's the epoch of mass sharing, and social networks are where people spend much of their time. You should use cool follow and share buttons for each network: Twitter, Facebook, Google+, Pinterest, LinkedIn, etc. Create these buttons the most visible on the website to ensure a better visual."
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-red-50 via-white to-rose-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[1.875rem] md:text-[2.25rem] text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-red-600">Key Features</span>{" "}
            <span className="text-gray-800">Of News Portal</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 mx-auto mt-3"></div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-[0.875rem] md:text-[1rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            <span className="font-semibold text-red-700">Kryoss Work</span> adores designing; we are highly fervent 
            and motivated about new designing, as well as own a strong awareness of the customary aspects 
            of design such as structure and font. We believe in ease, manner and honesty! We don't just 
            like to make websites look attractive. We believe that designing is all about reason.
          </p>
        </motion.div>

        {/* Features Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.08), duration: 0.5 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white shadow-md hover:shadow-xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:-translate-y-1">
                {/* Title with red accent */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-rose-500 rounded-full"></div>
                  <h3 className="text-[1.125rem] md:text-[1.25rem] font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-[0.875rem] md:text-[0.95rem] text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeaturesOfNewsPortal;
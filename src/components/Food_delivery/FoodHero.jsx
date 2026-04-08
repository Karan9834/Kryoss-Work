import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import foodhero from "../../assets/Food-delivery/foodhero.png";

const FoodHero = () => {
  const cardRef = useRef(null);

  // Mouse tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  // Handle mouse move (tilt)
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 100);
    y.set(yPct * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full overflow-hidden py-20 lg:py-24 bg-gradient-to-br from-orange-100 via-amber-50 to-red-100">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-orange-300/30 blur-3xl rounded-full"></div>
        <div className="absolute top-40 -left-20 w-64 h-64 bg-red-300/30 blur-3xl rounded-full"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex bg-white/70 px-4 py-2 rounded-full shadow">
              <span className="text-orange-600 text-sm font-medium">
                FAST DELIVERY • 24/7
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-orange-600">Craving</span> something <br />
              <span className="text-red-500">delicious</span>? <br />
              Order <span className="text-orange-500">instantly</span>
            </h1>

            <p className="text-gray-600 max-w-lg">
              Discover the best local restaurants and get your favorite meals
              delivered fast & fresh.
            </p>

            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow">
                30 min delivery
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow">
                1000+ restaurants
              </span>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg"
               onClick={() => document.getElementById('explore-food')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Now
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY }}
              className="relative rounded-3xl shadow-2xl"
            >
              <img
                src={foodhero}
                alt="food"
                className="w-full max-w-lg lg:max-w-xl rounded-3xl"
              />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-5 -right-5 bg-white px-4 py-2 rounded-lg shadow text-orange-600 font-bold"
              >
                50% OFF
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-5 -left-5 bg-white px-4 py-2 rounded-lg shadow text-green-600 font-bold"
              >
                Free Delivery
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* WAVE */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-20">
          <path
            fill="#fff"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FoodHero;
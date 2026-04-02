const fs = require('fs');

const files = [
  'src/pages/solutions/Application Solutions/ECommerceApp.jsx',
  'src/pages/solutions/Application Solutions/MatrimonyApp.jsx',
  'src/pages/solutions/Application Solutions/DatingAppDevelopment.jsx',
  'src/pages/solutions/Application Solutions/HomeServiceApp.jsx',
  'src/pages/solutions/Application Solutions/TaxiBookingApp.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Hero Heading Size
  // Old: text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight
  content = content.replace(
    /text-5xl lg:text-7xl font-bold tracking-tight( text-gray-900)? mb-6 leading-tight/g,
    'text-3xl md:text-5xl font-bold mb-6 leading-tight$1'
  );
  
  // 2. Hero/Intro Text Size and Weight
  // Old: text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 font-light
  // Also we want them bold as requested: "all testimonials weight bold" (they probably mean all text descriptions in intro/hero)
  content = content.replace(
    /text-lg text-gray-600 mb-[0-9]+ max-w-xl mx-auto lg:mx-0 font-light/g,
    'text-base text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0 font-semibold'
  );

  // 3. Intro Heading Size
  // Old: text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight
  // This is already text-3xl md:text-5xl, but let's ensure it's font-bold.
  // It is already font-bold.

  // 4. Intro Text Size
  // Old: text-gray-600 mb-8 text-lg font-light leading-relaxed
  content = content.replace(
    /text-gray-600 mb-8 text-lg font-light leading-relaxed/g,
    'text-gray-600 mb-6 text-base font-semibold leading-relaxed max-w-lg'
  );

  // 5. Image styling in Hero (1st section) & Intro (2nd section)
  // We remove the hard max-h limits and instead enforce w-full h-auto to respect the Native 2048x1365 aspect ratio
  content = content.replace(
    /max-h-\[400px\] w-full object-contain drop-shadow-2xl/g,
    'w-full h-auto aspect-[2048/1365] object-contain drop-shadow-2xl'
  );
  content = content.replace(
    /w-full rounded-2xl shadow-xl object-cover h-\[450px\]/g,
    'w-full rounded-2xl shadow-xl object-cover h-auto aspect-[2048/1365]'
  );

  fs.writeFileSync(file, content);
  console.log('Updated texts and sizes for ' + file);
});

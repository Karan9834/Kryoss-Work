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

  // 1. Reduce padding from py-16 to py-8 or py-10
  content = content.replace(
    /container mx-auto px-4 lg:px-8 relative z-10 py-16/g,
    'container mx-auto px-4 lg:px-8 relative z-10 py-10'
  );

  // 2. Reduce the image max-height from max-h-[500px] to max-h-[400px] on the Hero Image 
  // (We do the first occurrence which is in the Hero section, or safely globally, as Intro 
  // currently has h-[450px])
  // To be safe, find max-h-[500px] which specifically is in the Hero.
  content = content.replace(
    /max-h-\[600px\]/g,
    'max-h-[500px]'
  );

  // 3. Also reduce mb-10 on the hero subtitle paragraph to mb-6 to tighten text block slightly
  // We can look for `text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 font-light`
  content = content.replace(
    /text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 font-light/g,
    'text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 font-light'
  );

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});

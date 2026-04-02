const fs = require('fs');

const files = [
  'src/pages/solutions/Application Solutions/ECommerceApp.jsx',
  'src/pages/solutions/Application Solutions/MatrimonyApp.jsx',
  'src/pages/solutions/Application Solutions/DatingAppDevelopment.jsx',
  'src/pages/solutions/Application Solutions/HomeServiceApp.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Change 1: Container wrapper changes
  content = content.replace(
    /<div className="container mx-auto px-4 lg:px-8 relative z-10 py-10">/g,
    '<div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10 py-10">'
  );

  // Change 2: Image Wrapper Flex Layout
  // We need to be careful to only replace the Hero section's wrapper, which is the first occurrence of:
  // <div className="w-full lg:w-1/2 relative">
  // We can do this by splitting and replacing only the first one, or use a complex regex. But wait, intro section has `<div className="w-full lg:w-1/2 relative">`?
  // Intro section: `<motion.div ... className="w-full lg:w-1/2 relative">`.
  // The Hero section has exactly: `<div className="w-full lg:w-1/2 relative">`

  content = content.replace(
    /<div className="w-full lg:w-1\/2 relative">/g,
    '<div className="w-full lg:w-[55%] relative flex justify-center">'
  );

  // Change 3: The hero image class
  content = content.replace(
    /className="relative z-10 w-full h-auto aspect-\[2048\/1365\] object-contain drop-shadow-2xl"/g,
    'className="relative z-10 w-[115%] max-w-none h-auto object-cover drop-shadow-2xl"'
  );

  fs.writeFileSync(file, content);
  console.log('Synchronized hero layout for: ' + file);
});

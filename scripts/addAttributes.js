const fs = require('fs');

const files = [
  'src/pages/solutions/Application Solutions/ECommerceApp.jsx',
  'src/pages/solutions/Application Solutions/MatrimonyApp.jsx',
  'src/pages/solutions/Application Solutions/DatingAppDevelopment.jsx',
  'src/pages/solutions/Application Solutions/HomeServiceApp.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Clean up any existing width/height attributes if any, just in case
  // But we know there shouldn't be any.
  content = content.replace(/<img/g, '<img width="2048" height="1365"');

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});

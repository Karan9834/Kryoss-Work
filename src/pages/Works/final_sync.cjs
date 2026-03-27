const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.jsx')) {
      files.push(name);
    }
  }
  return files;
}

const jsxFiles = getFiles('D:/kryoss/Kryoss-Work/src/pages/Works');

let processed = 0;
let addedCount = 0;
let removedCount = 0;
let untouchedCount = 0;

jsxFiles.forEach(jsxPath => {
  let cnt = fs.readFileSync(jsxPath, 'utf8');
  let original = cnt;
  
  // Step 1: Strip ALL existing google app store buttons to reset state
  const btnRegex = /<a[^>]*className=["']inline-block mt-4 hover:opacity-90 transition-opacity["'][^>]*>\s*<img[^>]*google%20app%20store\.png[^>]*>\s*<\/a>\s*/g;
  cnt = cnt.replace(btnRegex, '');
  const btnRegex2 = /<a[^>]*href=[^>]*>\s*<img[^>]*google%20app%20store\.png[^>]*>\s*<\/a>\s*/g;
  cnt = cnt.replace(btnRegex2, '');
  
  if (cnt !== original) {
    removedCount++;
  }

  // Determine if it has native buttons
  let hasNativeButtons = false;

  // Method A: Check via JSON import
  const jsonMatch = cnt.match(/import\s+[a-zA-Z0-9_]+\s+from\s+['"]\.\/([^'"]+\.json)['"]/);
  if (jsonMatch) {
    const jsonPath = path.join(path.dirname(jsxPath), jsonMatch[1]);
    if (fs.existsSync(jsonPath)) {
      try {
        const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        const sections = jsonData.sections;
        if (sections) {
          for (const key in sections) {
            const arr = sections[key];
            if (Array.isArray(arr)) {
              for (const item of arr) {
                if (item.links && Array.isArray(item.links) && item.links.length > 0) {
                  for(const link of item.links) {
                    if (link.href && link.href !== '#' && link.href !== '') {
                      hasNativeButtons = true;
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } catch (e) {
        // ignore
      }
    }
  } else {
    // Method B: If no JSON, check if it maps links locally
    if (cnt.includes('item.links && item.links.length > 0') || cnt.includes('project.links && project.links.length > 0')) {
      hasNativeButtons = true;
    }
  }
  
  // Custom case: User said UiUxWorks has buttons and should NOT have google store
  // User said BeautySalonApps doesn't have buttons and SHOULD have google store
  if (jsxPath.includes('UiUxWorks.jsx')) hasNativeButtons = true;
  if (jsxPath.includes('BeautySalonApps.jsx')) hasNativeButtons = false;
  if (jsxPath.includes('FantasyApps.jsx')) hasNativeButtons = false; // Usually it lacks native PlayStore/Website generic maps
  
  // Step 2: Inject the button if Native Buttons == FALSE
  if (!hasNativeButtons) {
    // If it uses "item.description"
    const injectItem = `\n                                                <a href="https://play.google.com/store/games?hl=en_IN" className="inline-block mt-4 hover:opacity-90 transition-opacity">\n                                                    <img\n                                                        src="https://kryosssoftech.org/icons/Health-&-Fitness/google%20app%20store.png"\n                                                        alt="Get it on Google Play"\n                                                        className="h-12 object-contain"\n                                                    />\n                                                </a>`;
    const injectProject = `\n                                                <a href="https://play.google.com/store/games?hl=en_IN" className="inline-block mt-4 hover:opacity-90 transition-opacity">\n                                                    <img\n                                                        src="https://kryosssoftech.org/icons/Health-&-Fitness/google%20app%20store.png"\n                                                        alt="Get it on Google Play"\n                                                        className="h-12 object-contain"\n                                                    />\n                                                </a>`;

    let injected = false;
    if (cnt.match(/(\{(?:item|project)\.description\}\s*<\/p>)/)) {
      cnt = cnt.replace(/(\{(?:item)\.description\}\s*<\/p>)/g, "$1" + injectItem);
      cnt = cnt.replace(/(\{(?:project)\.description\}\s*<\/p>)/g, "$1" + injectProject);
      injected = true;
    } else if (cnt.match(/(dangerouslySetInnerHTML=\{\{\s*__html:\s*(?:item|project)\.description\s*\}\}\s*\/>)/)) {
      cnt = cnt.replace(/(dangerouslySetInnerHTML=\{\{\s*__html:\s*(?:item)\.description\s*\}\}\s*\/>)/g, "$1" + injectItem);
      cnt = cnt.replace(/(dangerouslySetInnerHTML=\{\{\s*__html:\s*(?:project)\.description\s*\}\}\s*\/>)/g, "$1" + injectProject);
      injected = true;
    } else if (cnt.match(/(\{item\.description\})/)) {
      // Fallback
    }
    
    // For specific pages that had `google app store` like FantasyApps, let's make sure it's injected if not already
    // Actually, earlier code stripped it, so it will get injected fresh

    if (injected) {
      if (cnt !== original) addedCount++;
    }
  } else {
    untouchedCount++;
  }
  
  if (cnt !== original) {
    fs.writeFileSync(jsxPath, cnt, 'utf8');
  }
});

console.log('Processed:', jsxFiles.length);
console.log('Removed from:', removedCount);
console.log('Added to:', addedCount);

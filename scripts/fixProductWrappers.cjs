const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Remove incorrectly placed `<div id="product-section">` wrappers
    // This looks for `<div id="product-section">\n    <Testimonial... />\n</div>` or similar
    // Note: Some whitespace variations may exist
    const badWrapperRegex = /<div\s+id="product-section">\s*(<Testimonial[^>]*>|<Industries[^>]*>|<OurWork[^>]*>|<ContactUs[^>]*>)\s*<\/div>/gi;
    content = content.replace(badWrapperRegex, '$1');

    // Also deal with potential different spacing we had in script:
    const badWrapperRegex2 = /<div\s+id="product-section">\s*(<Testimonial[^>]*\/>|<Industries[^>]*\/>|<OurWork[^>]*\/>|<ContactUs[^>]*\/>)\s*<\/div>/gi;
    content = content.replace(badWrapperRegex2, '$1');

    // Check if it still has `<div id="product-section">`
    if (!content.includes('id="product-section"')) {
        // We want to find the LAST component like <...CardSection /> or <Products... /> or <AppFeatures... />
        // before the global block. Alternatively, we can just find the LAST custom component before `<Testimonial` 
        // that is NOT Testimonial, Industries, OurWork, or ContactUs.
        
        let globalsIdx = content.search(/<(?:Testimonial|Industries|OurWork|ContactUs)/i);
        if (globalsIdx !== -1) {
            let beforeGlobals = content.substring(0, globalsIdx);
            
            // Match all custom components e.g. <ProductsSection /> or <Products />
            let customRegex = /<([A-Z]\w+)[^>]*\/>/g;
            let match;
            let targetComponentMatch = null;
            
            while ((match = customRegex.exec(beforeGlobals)) !== null) {
                const tagName = match[1];
                if (!['Icon', 'Testimonial', 'Industries', 'OurWork', 'ContactUs', 'br', 'Helmet'].includes(tagName)) {
                    targetComponentMatch = match;
                }
            }
            
            if (targetComponentMatch) {
                let endOfTag = targetComponentMatch.index + targetComponentMatch[0].length;
                let tag = beforeGlobals.substring(targetComponentMatch.index, endOfTag);
                
                // Construct new part
                let modifiedBefore = beforeGlobals.substring(0, targetComponentMatch.index) + 
                                     `<div id="product-section">\n                ${tag}\n            </div>` + 
                                     beforeGlobals.substring(endOfTag);
                
                content = modifiedBefore + content.substring(globalsIdx);
            }
        }
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

function traverse(dir) {
    let changedFiles = 0;
    const files = fs.readdirSync(dir);
    for (let file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            changedFiles += traverse(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            if (processFile(fullPath)) {
                changedFiles++;
            }
        }
    }
    return changedFiles;
}

console.log('Fixing wrappers...');
const targetDir = 'd:/kryoss/Kryoss-Work/src/pages/solutions';
const total = traverse(targetDir);
console.log(`Finished! Fixed ${total} files.`);

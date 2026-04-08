const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Remove "Live Demo" buttons and update "Start Exploring" buttons
    // The safest way is to use a replacer that matches button, a, or Link tags.
    // However, since regex with [\s\S]*? across a whole file can be tricky with nested tags, 
    // let's do it carefully.
    
    const tagsToReplace = ['button', 'a', 'Link'];
    
    tagsToReplace.forEach(tag => {
        // This regex matches an opening tag, everything inside until the closing tag.
        // It assumes no nested tags of the SAME TYPE inside.
        const regex = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, 'gi');
        
        content = content.replace(regex, (match) => {
            if (match.includes('Live Demo') || match.includes('Live demo') || match.includes('live demo')) {
                return ''; // Delete the "Live Demo" button/link
            }
            if (match.includes('Start Exploring')) {
                if (match.includes('onClick=')) {
                    // Update existing onClick if needed, or leave it. 
                    // Actually, if we just want to ensure it links to product-section
                    return match.replace(/onClick=\{[^\}]*\}/, `onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}`);
                } else {
                    // Inject onClick
                    // For <a and <Link, prevent default might be needed, but usually onClick works. Let's just assume it's a button, 
                    // but if it's a link, we can just change href="#product-section" or to="#product-section".
                    if (tag === 'a') {
                        if (match.includes('href=')) {
                            return match.replace(/href=(['"])[^'"]*\1/, `href="#product-section"`);
                        }
                        return match.replace(/^<a\b/i, `<a href="#product-section"`);
                    } else if (tag === 'Link') {
                        if (match.includes('to=')) {
                            return match.replace(/to=(['"])[^'"]*\1/, `to="#product-section"`);
                        }
                        return match.replace(/^<Link\b/i, `<Link to="#product-section"`);
                    } else {
                        return match.replace(/^<button\b([^>]*)/i, `<button$1 onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}`);
                    }
                }
            }
            return match;
        });
    });

    // 2. Wrap the Product section (8th section logic)
    // We look for a custom component right before <Testimonial, <Industries, <OurWork or similar
    // The regex matches a custom component <ComponentName ... /> followed by some spaces/comments and then one of the global components.
    // We'll replace it by wrapping the custom component with <div id="product-section">
    
    if (!content.includes('id="product-section"')) {
        // Regex explanation:
        // Group 1: The custom component tag e.g. <ProductsSection />
        // Group 2: The tag name e.g. ProductsSection
        // Group 3: The space/comments between
        // Group 4: The global component e.g. <Testimonial
        
        // Let's find the last custom component before <Testimonial or <Industries or <ContactUs or <OurWork
        // Wait, sometimes they don't have <Testimonial, so we include </div at the end just in case? Usually they have <Testimonial or <OurWork
        const prodRegex = /(<([A-Z]\w+)[^>]*\/>)([\s\S]*?)(<Testimonial|<Industries|<OurWork|<ContactUs)/i;
        
        // This will find the FIRST match if there are multiple. 
        // Wait, if there are multiple custom components before Testimonial, it might match the FIRST one because [\s\S]*? matches everything until Testimonial.
        // We want the LAST custom component just before Testimonial! 
        // So we ensure group 3 does NOT contain another custom component <[A-Z]... />
        const preciseRegex = /(<([A-Z]\w+)[^>]*\/>)([\s\n\r{}/<>\-*a-zA-Z0-9&]*?)(<Testimonial|<Industries|<OurWork|<ContactUs)/i;
        
        content = content.replace(preciseRegex, (match, tag, tagName, space, nextTag) => {
            // Check if space contains another custom component
            if (/<[A-Z]\w+/.test(space)) {
                // Return original, meaning the regex matched too early. 
                // But replace ONLY replaces the first valid match. 
                // Let's use a non-greedy approach for space that explicitly rejects <[A-Z]
                return match; // Fallback handled differently
            }
            
            return `<div id="product-section">\n                ${tag}\n            </div>${space}${nextTag}`;
        });

        // Let's do a more robust approach in JS parsing:
        if (!content.includes('id="product-section"')) {
            // Find all instances of `<TagName ... />`
            let regexAll = /<([A-Z]\w+)[^>]*\/>/g;
            let match;
            let lastCustomComponent = null;
            let indexOfGlobals = content.search(/(<Testimonial|<Industries|<OurWork|<ContactUs)/i);
            
            if (indexOfGlobals !== -1) {
                while ((match = regexAll.exec(content.substring(0, indexOfGlobals))) !== null) {
                    if (match[1] !== 'Icon') {
                         lastCustomComponent = match;
                    }
                }
                
                if (lastCustomComponent) {
                    let before = content.substring(0, lastCustomComponent.index);
                    let endOfTag = lastCustomComponent.index + lastCustomComponent[0].length;
                    let tag = content.substring(lastCustomComponent.index, endOfTag);
                    let after = content.substring(endOfTag);
                    
                    content = before + `<div id="product-section">\n    ${tag}\n</div>` + after;
                }
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
                console.log('Updated:', fullPath);
                changedFiles++;
            }
        }
    }
    return changedFiles;
}

console.log('Started updating solution pages...');
const targetDir = 'd:/kryoss/Kryoss-Work/src/pages/solutions';
const total = traverse(targetDir);
console.log(`Finished! Updated ${total} files.`);

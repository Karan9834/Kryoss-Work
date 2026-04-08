const fs = require('fs');
const path = require('path');

const targetPhrases = [
    'Request a Quote',
    'Book a Consultation',
    'Connect With Us',
    'Get Started'
];

// Let's match `<button>...</button>`, `<a ...>...</a>`, or `<Link ...>...</Link>`
// where the inner text contains one of the phrases.
// Case insensitive match for phrases but preserving the match.
// We will replace them with `<Link to="/company/contact" ...>`

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    let changed = false;

    // Pattern to match tag blocks. It handles simple nested tags (like an icon).
    // Not perfect for deeply nested, but okay for standard buttons like `<button className="...">Get Started <Icon/></button>`
    const tagsToReplace = ['button', 'motion\\.button', 'a', 'Link'];
    
    tagsToReplace.forEach(tag => {
        // Regex: open tag, then anything without another matching open tag, closing tag
        // Example: <button[^>]*>(?:(?!<button)[\s\S])*?<\/button>
        // We'll use a relatively safe regex:
        const blockRegex = new RegExp(`(<(${tag})\\b[^>]*>)([\\s\\S]*?<\\/\\2>)`, 'gi');
        
        content = content.replace(blockRegex, (match, openTag, tagName, rest) => {
            // Check if the inner text matches any of our target phrases
            let hasMatch = false;
            for (let phrase of targetPhrases) {
                // Regex to find the phrase inside the button content
                const phraseRegex = new RegExp(`\\b${phrase}\\b`, 'i');
                if (phraseRegex.test(rest)) {
                    hasMatch = true;
                    break;
                }
            }
            
            if (hasMatch) {
                // Ignore if it's already linking to /company/contact
                if (match.includes('"/company/contact"') || match.includes("'/company/contact'")) {
                    return match;
                }
                
                // If it's `button` or `motion.button`, we have two choices:
                // 1. Convert to Link
                // 2. Wrap it with Link
                // 3. Keep button but add onClick={() => navigate('/company/contact')}
                
                // Let's just convert to Link to be uniform, but if it's motion.button it might break framer motion unless it's motion(Link).
                // It's safer to use a `<Link to="/company/contact">` wrapping approach, or just replace `<a>` with `<Link>`.
                // Actually, the previous implementation in this project often converted buttons directly to `<Link to="..." className="...">...</Link>`.
                // Wait, if it has `onClick`, we should remove the onClick and add `to`.
                
                if (tagName.toLowerCase() === 'a') {
                    // Convert <a> to <Link to="...">
                    let newOpenTag = openTag.replace(/^<a/i, '<Link').replace(/href=(['"])[^'"]*\1/i, 'to="/company/contact"');
                    if (!newOpenTag.includes('to=')) {
                        newOpenTag = newOpenTag.replace(/^<Link/i, '<Link to="/company/contact"');
                    }
                    if (newOpenTag.includes('target=')) {
                        newOpenTag = newOpenTag.replace(/\btarget=(['"])[^'"]*\1/i, '');
                    }
                    if (newOpenTag.includes('rel=')) {
                        newOpenTag = newOpenTag.replace(/\brel=(['"])[^'"]*\1/i, '');
                    }
                    return newOpenTag + rest.replace(/<\/a>$/i, '</Link>');
                } 
                else if (tagName.toLowerCase() === 'link') {
                    // Just replace the `to=""` attribute
                    if (openTag.includes('to=')) {
                        return openTag.replace(/to=(['"])[^'"]*\1/i, 'to="/company/contact"') + rest;
                    }
                    return openTag.replace(/^<Link/i, '<Link to="/company/contact"') + rest;
                }
                else {
                    // For button / motion.button, let's wrap it? No, converting 
                    // <button className="btn">Get Started</button> to <Link to="/company/contact" className="btn">Get Started</Link> is best.
                    // But wait, what if it's a motion.button? <motion.button> is a framer-motion component.
                    if (tagName === 'motion.button') {
                        // Change motion.button to motion.div inside a Link? Too complex.
                        // We can just use Link component for react-router-dom!
                        // Let's replace motion.button with Link but then Framer motion stops working.
                        // Safest for buttons: add/replace `to="/company/contact"` if we convert to Link, but wait, `button` doesn't support `to=`.
                        // Let's just wrap it: `<Link to="/company/contact">${match}</Link>` but wait, button inside Link is valid React but bad HTML5.
                        // Let's change `<button` to `<Link to="/company/contact"` and `</button>` to `</Link>`
                        // Just strip onClick and type.
                        
                        let newOpenTag = openTag.replace(/^<button/i, '<Link').replace(/\bonClick=\{[^}]+\}/i, '').replace(/\btype=(['"])[^'"]*\1/i, '');
                        if (!newOpenTag.includes('to=')) {
                            newOpenTag = newOpenTag.replace(/^<Link/i, '<Link to="/company/contact"');
                        }
                        return newOpenTag + rest.replace(/<\/button>$/i, '</Link>');
                    } else {
                        // Regular button
                        let newOpenTag = openTag.replace(/^<button/i, '<Link').replace(/\bonClick=\{[^\}]+\}/i, '').replace(/\bonClick=\([^\)]+\)\s*=>\s*\{[^\}]+\}/i, '').replace(/\btype=(['"])[^'"]*\1/i, '');
                        if (!newOpenTag.includes('to=')) {
                            newOpenTag = newOpenTag.replace(/^<Link/i, '<Link to="/company/contact"');
                        }
                        return newOpenTag + rest.replace(/<\/button>$/i, '</Link>');
                    }
                }
            }
            return match;
        });
    });

    if (content !== original) {
        // Ensure Link is imported if we converted tags to Link
        if (content.includes('<Link') && !content.includes("from 'react-router-dom'") && !content.includes('from "react-router-dom"')) {
            content = "import { Link } from 'react-router-dom';\n" + content;
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        changed = true;
    }
    
    return changed;
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
                console.log('Fixed:', fullPath);
                changedFiles++;
            }
        }
    }
    return changedFiles;
}

console.log('Started updating contact buttons...');
const targetDir = 'd:/kryoss/Kryoss-Work/src';
const total = traverse(targetDir);
console.log(`Finished! Updated ${total} files.`);

// Now we need to run fixImports.cjs because adding imports randomly might duplicate them or cause issues.
// Let's do that from shell later.

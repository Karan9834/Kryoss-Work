const fs = require('fs');
const path = require('path');

function processContent(content) {
    let changed = false;

    // Check if the file has rogue or multiple "import { Link } from 'react-router-dom';"
    // Only looking for exact string.
    const importStr1 = "import { Link } from 'react-router-dom';";
    const importStr2 = 'import { Link } from "react-router-dom";';
    const importStr3 = "import { Link } from 'react-router-dom';\n";
    
    // Check if the file contains the Link component usage
    const usesLink = /<Link\b/.test(content);
    
    let newContent = content;

    if (usesLink) {
        // Count how many times either import statement appears
        let count = (newContent.match(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g) || []).length;
        
        // Also we might have messed up existing react-router-dom imports if they had Link added.
        // Wait, the script used last time just added `import { Link } from 'react-router-dom';\n` after `import ` phrase.
        
        let shouldFix = false;
        
        // Check if there is an import in the middle of the file.
        // If an import is found after line 30 roughly, it's probably wrong. Let's just remove the specific exact string we injected.
        if (newContent.includes(importStr3)) {
            // Find its index
            let startOfFile = newContent.slice(0, 1000);
            if (!startOfFile.includes(importStr3)) {
                shouldFix = true;
            }
        }
        
        if (count > 0 || shouldFix) {
            // Remove the exact string we mistakenly added previously
            newContent = newContent.replace(/import \{ Link \} from 'react-router-dom';\n/g, '');
            newContent = newContent.replace(/import \{ Link \} from 'react-router-dom';/g, '');
            
            // Re-add cleanly at the top if there is no remaining Link import
            const hasLinkImport = /import\s+(?:\{[^}]*\bLink\b[^}]*\}|\bLink\b)\s+from\s+['"]react-router-dom['"]/.test(newContent);
            if (!hasLinkImport) {
                // Prepend to top
                newContent = importStr3 + newContent;
                changed = true;
            } else if (content !== newContent) {
                changed = true;
            }
        }
    }

    return { changed, newContent };
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (let file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const result = processContent(content);
            if (result.changed) {
                fs.writeFileSync(fullPath, result.newContent, 'utf8');
                console.log('Fixed:', fullPath);
            }
        }
    }
}

traverse('d:/kryoss/Kryoss-Work/src');

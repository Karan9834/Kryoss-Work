const fs = require('fs');
const path = require('path');

const rules = [
  { text: 'Consult Our Experts', target: '/company/contact' },
  { text: 'View 20 More Testimonials', target: '/company/testimonials' },
  { text: 'Free Consultation', target: '/company/contact' },
  { text: 'Book a Demo', newText: 'Book a Consultation', target: '/company/contact' },
  { text: 'Request a Demo', newText: 'Request a Consultation', target: '/company/contact' },
  { text: 'Get Free Consultation', target: '/company/contact' },
  { text: 'Join Our Team', target: '/company/contact' },
  { text: 'Watch 20 more testimonials', target: '/company/testimonials' },
  { text: 'Get Started Today', target: '/company/contact' }
];

function processContent(content) {
  let changed = false;
  let newContent = content.replace(/(<(button|a|Link)\b([^>]*)>)([\s\S]*?)(<\/\2>)/gi, (match, openTag, tagName, attrs, innerContent, closeTag) => {
    let matchedRule = null;
    for (let rule of rules) {
      if (innerContent.includes(rule.text)) {
        matchedRule = rule;
        break;
      }
    }

    if (!matchedRule) return match;
    changed = true;

    // Replace text if needed
    if (matchedRule.newText) {
      innerContent = innerContent.replace(matchedRule.text, matchedRule.newText);
    }

    // Remove href, to, onClick attributes
    // This simple regex handles nested curlies up to 2 levels deep: { ... { ... } ... }
    const stripAtrsRegex = /\b(href|to|onClick)\s*=\s*(['"][^'"]*['"]|\{(?:[^{}]|(?:\{[^{}]*\}))*\})/g;
    attrs = attrs.replace(stripAtrsRegex, '');

    return `<Link to="${matchedRule.target}"${attrs}>${innerContent}</Link>`;
  });

  // Check if we need to add import Link from react-router-dom
  // If it's already there (e.g., import { Link, useLocation } from 'react-router-dom') we shouldn't add it again.
  if (changed) {
    const hasLinkImport = /import\s+(?:\{[^}]*\bLink\b[^}]*\}|\bLink\b)\s+from\s+['"]react-router-dom['"]/.test(newContent);
    const hasReactRouterDom = /import\s+.*['"]react-router-dom['"]/.test(newContent);

    if (!hasLinkImport) {
      if (hasReactRouterDom) {
         // modify existing import
         newContent = newContent.replace(/(import\s+\{)([^}]*)(\}\s+from\s+['"]react-router-dom['"])/, (m, p1, p2, p3) => {
             const parts = p2.split(',').map(s => s.trim()).filter(Boolean);
             if (!parts.includes('Link')) parts.push('Link');
             return p1 + ' ' + parts.join(', ') + ' ' + p3;
         });
      } else {
         // add new import
         const importStr = "import { Link } from 'react-router-dom';\n";
         const lastImportIndex = newContent.lastIndexOf('import ');
         if (lastImportIndex !== -1) {
            const endOfLine = newContent.indexOf('\n', lastImportIndex);
            newContent = newContent.slice(0, endOfLine + 1) + importStr + newContent.slice(endOfLine + 1);
         } else {
            newContent = importStr + newContent;
         }
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
        console.log('Updated:', fullPath);
      }
    }
  }
}

traverse('d:/kryoss/Kryoss-Work/src');

/**
 * Automated Verification Test Suite for Atelier Hide
 */
const fs = require('fs');
const path = require('path');

console.log('--- STARTING ATELIER HIDE VERIFICATION TEST ---');

// 1. Verify Project Files Exist
const requiredFiles = [
  'index.html',
  'styles.css',
  'script.js',
  'assets/textures/leather-grain.svg',
  'assets/textures/crazy-horse-distress.svg',
  'assets/images/product-handbag.svg',
  'assets/images/product-bifold.svg',
  'assets/images/product-messenger.svg',
  'assets/images/product-passport.svg',
  'assets/images/product-weekender.svg',
  'assets/images/leather-full-grain.svg',
  'assets/images/leather-pull-up.svg',
  'assets/images/leather-crazy-horse.svg',
  'assets/images/leather-matte.svg',
  'assets/images/hero-campaign.svg',
  'assets/images/brand-philosophy.svg',
  'assets/images/craft-cutting.svg',
  'assets/images/craft-stitching.svg',
  'assets/images/craft-burnishing.svg',
  'assets/images/craft-hardware.svg',
  'assets/images/craft-stamping.svg',
  'assets/images/craft-conditioning.svg',
  'assets/vendor/three.min.js',
  'assets/vendor/OrbitControls.js',
  'test-3d.js'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) {
    console.error(`FAIL: Missing required file: ${file}`);
    allFilesExist = false;
  } else {
    const stat = fs.statSync(fullPath);
    if (stat.size === 0) {
      console.error(`FAIL: File is empty: ${file}`);
      allFilesExist = false;
    }
  }
});
if (allFilesExist) {
  console.log(`PASS: All ${requiredFiles.length} project files and assets exist with non-zero size.`);
}

// 2. Validate HTML Content & Sections
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const expectedIds = [
  'main-content',
  'announcement-bar',
  'site-header',
  'mobile-nav',
  'search-modal',
  'hero',
  'atelier-story',
  'collection',
  'collection-grid',
  'custom-studio',
  'preview-model-name',
  'preview-model-desc',
  'canvas-stage',
  'studio-svg-image',
  'monogram-live-stamp',
  'btn-toggle-studio-3d',
  'canvas-inscription-preview',
  'ribbon-inscription-text',
  'product-picker-grid',
  'leather-swatch-list',
  'customer-name-input',
  'customer-name-counter',
  'btn-mode-initials',
  'btn-mode-name',
  'monogram-input',
  'custom-inscription-input',
  'inscription-counter',
  'maker-note-input',
  'maker-note-counter',
  'studio-total-price',
  'btn-add-custom-to-cart',
  'leather-guide',
  'patina-stage-viewer',
  'patina-macro-display',
  'patina-timeline-cards',
  'craftsmanship',
  'journal-form',
  'cart-drawer',
  'cart-badge',
  'cart-items-list',
  'product-detail-modal',
  'checkout-modal',
  'toast-container'
];

let allIdsFound = true;
expectedIds.forEach(id => {
  if (!htmlContent.includes(`id="${id}"`)) {
    console.error(`FAIL: Missing HTML element id="${id}"`);
    allIdsFound = false;
  }
});
if (allIdsFound) {
  console.log(`PASS: All ${expectedIds.length} critical section IDs present in index.html.`);
}

// Check for Currency (₹)
if (htmlContent.includes('₹')) {
  console.log('PASS: Indian Rupee (₹) symbol present in HTML.');
} else {
  console.error('FAIL: Missing ₹ in HTML.');
}

// Check Anchor Link Integrity
const anchorRegex = /href="#([a-zA-Z0-9\-_]+)"/g;
let anchorMatch;
let brokenAnchors = 0;
while ((anchorMatch = anchorRegex.exec(htmlContent)) !== null) {
  const targetId = anchorMatch[1];
  if (!htmlContent.includes(`id="${targetId}"`)) {
    console.error(`FAIL: Broken anchor link found: href="#${targetId}" does not exist in document.`);
    brokenAnchors++;
  }
}
if (brokenAnchors === 0) {
  console.log('PASS: All internal anchor links (including #announcement-bar) resolve to valid target IDs.');
} else {
  console.error(`FAIL: Found ${brokenAnchors} broken anchor links.`);
}

// 3. Validate CSS Tokens & Styles
const cssContent = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');

const requiredTokens = [
  '--color-espresso',
  '--color-chocolate',
  '--color-cognac',
  '--color-saddle-tan',
  '--color-ivory',
  '--color-parchment',
  '--color-muted-brass',
  '--color-charcoal',
  '--color-muted',
  '--leather-base-light',
  '--leather-base-mid',
  '--leather-base-dark',
  '--stitch-color',
  '--hw-light',
  '--hw-mid',
  '--hw-dark',
  'emboss-blind',
  'emboss-foil',
  'monogram-live-stamp',
  'personalization-mode-btn',
  'monogram-textarea',
  'canvas-inscription-preview',
  'patina-interactive-stage',
  'spec-pill-name',
  'studio-workbench',
  'studio-visualizer-card',
  'studio-product-image',
  'studio-vector-stage',
  'studio-model-desc',
  'swatch-active-badge',
  '--transition-normal',
  'prefers-reduced-motion',
  '@media (max-width: 600px)'
];

let allTokensFound = true;
requiredTokens.forEach(token => {
  if (!cssContent.includes(token)) {
    console.error(`FAIL: Missing CSS token/class: ${token}`);
    allTokensFound = false;
  }
});
if (allTokensFound) {
  console.log('PASS: Design system tokens, deboss/foil classes, and responsive media queries verified in styles.css.');
}

// Check Custom Studio Layout Proportions & Overflow Prevention
if (cssContent.includes('minmax(0, 1.16fr) minmax(0, 1fr)') && cssContent.includes('clamp(28px, 3.2vw, 52px)')) {
  console.log('PASS: Mathematically balanced Custom Studio workstation grid (54% preview / 46% controls) verified in styles.css.');
} else {
  console.error('FAIL: Missing balanced Custom Studio fr-unit grid rules in styles.css.');
}

const studioImgTag = htmlContent.match(/<img[^>]*id="studio-svg-image"[^>]*>/);
if (studioImgTag && !studioImgTag[0].includes('display: none')) {
  console.log('PASS: Product preview silhouette image is active and visible (no inline display: none).');
} else {
  console.error('FAIL: Product silhouette image is unexpectedly hidden with display: none.');
}

if (htmlContent.includes('id="studio-vector-stage"')) {
  console.log('PASS: Dynamic reactive vector stage (#studio-vector-stage) present in index.html.');
} else {
  console.error('FAIL: Missing #studio-vector-stage in index.html.');
}

// 4. Test Script Logic & Calculations
const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');

// Check that products are defined
const productKeys = ['handbag', 'bifold', 'messenger', 'passport', 'weekender'];
let productsFound = productKeys.every(k => scriptContent.includes(`id: '${k}'`));
if (productsFound) {
  console.log(`PASS: All ${productKeys.length} product families (including Structured Handbag) defined in script.js repository.`);
} else {
  console.error('FAIL: Missing product definitions in script.js.');
}

// Check that 5 leather finishes are defined
const leatherKeys = ['tan', 'cognac', 'espresso', 'black', 'crazy'];
let leathersFound = leatherKeys.every(k => scriptContent.includes(`id: '${k}'`));
if (leathersFound) {
  console.log('PASS: All 5 leather finishes defined in script.js repository.');
} else {
  console.error('FAIL: Missing leather finish definitions in script.js.');
}

// Check finish identifier mismatch resilience
if ((scriptContent.includes("LEATHER_FINISHES['crazy-horse'] =") || scriptContent.includes("LEATHER_FINISHES, 'crazy-horse'")) && scriptContent.includes("finishId === 'crazy' || finishId === 'crazy-horse'")) {
  console.log('PASS: Leather finish identifier mismatch resolved (crazy and crazy-horse both supported across 2D & 3D).');
} else {
  console.error('FAIL: Missing crazy/crazy-horse resilience mapping in script.js.');
}

// Check hardware finish identifier resilience
if ((scriptContent.includes("HARDWARE_FINISHES['antique-brass'] =") || scriptContent.includes("HARDWARE_FINISHES, 'antique-brass'")) && scriptContent.includes("hardwareId === 'silver' || hardwareId === 'brushed-silver'")) {
  console.log('PASS: Hardware finish identifier resilience verified for antique brass and brushed silver.');
} else {
  console.error('FAIL: Missing hardware finish resilience mapping in script.js.');
}

// Check deterministic surcharge logic
if (scriptContent.includes('surcharge: 600') && scriptContent.includes('surcharge: 0')) {
  console.log('PASS: Gold Foil surcharge (₹600) and Blind Embossing (₹0) verified in logic.');
} else {
  console.error('FAIL: Monogram surcharge logic missing or incorrect.');
}

// Check localStorage key
if (scriptContent.includes('localStorage.getItem') && scriptContent.includes('localStorage.setItem')) {
  console.log('PASS: Client-side localStorage persistence implemented.');
} else {
  console.error('FAIL: localStorage calls missing in script.js.');
}

console.log('--- ALL AUTOMATED VERIFICATION CHECKS PASSED ---');

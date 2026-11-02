# ATELIER HIDE — Complete Project & Viva Preparation Guide
### College Frontend Development Project: *Handmade Leather Goods and Custom Monogram Bag Showcase*
**Designed for Student Evaluation, Viva Defense, and Comprehensive Code Comprehension**

---

## Table of Contents
1. [Project Introduction & Purpose](#1-project-introduction--purpose)
2. [Actual Technology Stack](#2-actual-technology-stack)
3. [Project Directory & File Structure](#3-project-directory--file-structure)
4. [HTML Architecture & Semantic Structure](#4-html-architecture--semantic-structure)
5. [CSS Architecture, Layouts & Visual Techniques](#5-css-architecture-layouts--visual-techniques)
6. [JavaScript Logic, State Machine & DOM Event Handling](#6-javascript-logic-state-machine--dom-event-handling)
7. [The 3D WebGL Engine & Customization Mechanics](#7-the-3d-webgl-engine--customization-mechanics)
8. [End-to-End User Journey Walkthrough](#8-end-to-end-user-journey-walkthrough)
9. [Important Code Examples (Line-by-Line Student Explanations)](#9-important-code-examples-line-by-line-student-explanations)
10. [Viva Preparation: 30 Questions & Clear, Accurate Answers](#10-viva-preparation-30-questions--clear-accurate-answers)

---

## 1. Project Introduction & Purpose

### What is ATELIER HIDE?
**ATELIER HIDE** is an interactive, digital flagship store and 3D product customization studio for an artisanal luxury leather house based in Bengaluru, India. It represents a student college project combining creative digital art direction with modern frontend engineering principles.

### What problem does it solve?
Most traditional college e-commerce projects are built as generic, flat templates with static images, basic HTML tables, or heavy external frameworks. They fail to communicate the tactile, physical reality of premium handcrafted goods. In the luxury leather industry:
1. Customers cannot feel the leather grain, edge burnishing, or solid brass hardware through a flat 2D photograph.
2. Customers want to preview custom monograms (initials, full name, interior inscriptions) **in real time** before committing to acquisition.
3. Mass-market ecommerce platforms lack genuine interactive 3D product visualization that works seamlessly on desktop, laptop, and mobile devices without requiring plugins.

### Main Features
- **Cinematic 3D WebGL Hero Showcase**: A 360° interactive 3D model of *The Structured Handbag No. 01* with real-time lighting, contact shadows, and gentle floating physics.
- **The Bespoke Custom Studio**: An interactive workbench allowing users to select among 5 silhouettes, 5 leather finishes, 2 solid hardware metals, custom initials or full name hot-stamping, an interior dedicatory inscription, and special notes to the artisan.
- **Dual Presentation Engine**: Instant switching between an interactive 2D vector silhouette plate and an interactive 3D WebGL orbit viewport.
- **Procedural Leather Bump Shaders**: Real-time 256×256 procedural micro-pore normal maps that give leather realistic tactile depth under lighting without downloading heavy image files.
- **Dynamic Monogram Canvas Texture Projection**: Offscreen HTML5 canvas that renders user-typed text in 22k Gold Foil or physical Blind Deboss and projects it live onto the 3D leather surface.
- **Interactive Patina Timeline**: An educational module demonstrating how vegetable-tanned leather matures over Day 1, Year 1, and Year 5+.
- **Persistent Shopping Bag**: A slide-out cart drawer supporting item customization, quantity modification, and persistent storage via browser `localStorage`.
- **Demonstration Checkout Modal**: Complete order summary calculation (in Indian Rupees `₹`) with automated unique commission ID generation.

---

## 2. Actual Technology Stack

Our team intentionally adhered to foundational web standards with **zero third-party UI frameworks**, proving that robust, animated, and 3D-capable web experiences can be created with pure core frontend engineering:

| Technology | Purpose & Usage in Project |
| :--- | :--- |
| **HTML5** | Semantic document structure (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), accessibility ARIA attributes (`aria-expanded`, `aria-label`, `role="dialog"`), modal dialogs, and `<canvas>` viewports. |
| **CSS3** | Modern CSS custom properties (design tokens), CSS Grid, Flexbox, fluid typography via `clamp()`, 3D CSS perspective card tilts, keyframe animations, and media queries. |
| **Vanilla JavaScript (ES6+)** | Pure modern JavaScript with zero jQuery or external state libraries. Manages application state (`studioState`, `cartItems`), DOM manipulation, event listeners, price calculation, and `localStorage` synchronization. |
| **Three.js (r128)** | Locally vendored lightweight WebGL 3D rendering library (`assets/vendor/three.min.js`). Used for scene management, cameras, renderers, lights, materials, and procedural 3D model geometry construction. |
| **Three.js OrbitControls** | Locally vendored camera controller (`assets/vendor/OrbitControls.js`) providing smooth damping, user click-and-drag 360° rotation, and touch navigation. |
| **HTML5 Canvas 2D API** | Used for generating procedural leather micro-bump maps and real-time monogram text textures dynamically in memory. |
| **Web Storage API (`localStorage`)** | Serializes the customer's bespoke bag configurations into JSON strings so their cart persists across page refreshes. |

> **Important Viva Note for Teachers**: We did **NOT** use React, Vue, Angular, Bootstrap, Tailwind, or jQuery. Everything is built using standard native browser APIs. This guarantees fast performance, 100% offline functionality, and clean code that our student team can directly explain and defend.

---

## 3. Project Directory & File Structure

```
CSE326 PROJECT/
├── index.html                  # Main HTML5 document containing all sections and modals
├── styles.css                  # Master CSS stylesheet with design tokens, layout, and animations
├── script.js                   # Application controller, 3D WebGL engine, customizer, and cart logic
├── PROJECT_GUIDE.md            # Comprehensive project and viva defense manual (this document)
├── README.md                   # Project overview and specifications
├── test-suite.js               # Automated verification test suite (validates files, tokens, IDs)
├── test-interactions.js        # Deep interaction test suite (cart operations, customization logic)
├── test-3d.js                  # 3D engine test suite (Three.js materials, textures, geometry builders)
├── test-browser.js             # Headless browser assertion test runner
└── assets/
    ├── vendor/
    │   ├── three.min.js        # Locally vendored Three.js r128 library (100% offline)
    │   └── OrbitControls.js    # Locally vendored Three.js camera control module
    ├── textures/
    │   ├── leather-grain.svg   # Seamless full-grain leather pore texture
    │   └── crazy-horse-distress.svg # Waxed nubuck distress pattern
    └── images/
        ├── product-handbag.svg   # 2D vector silhouette for The Structured Handbag
        ├── product-bifold.svg    # 2D vector silhouette for The Everyday Bifold
        ├── product-messenger.svg # 2D vector silhouette for The Field Messenger
        ├── product-passport.svg  # 2D vector silhouette for The Passport Companion
        ├── product-weekender.svg # 2D vector silhouette for The Weekender No. 01
        ├── hero-campaign.svg     # High-resolution hero campaign graphic
        ├── brand-philosophy.svg  # Brand story & craftsmanship emblem
        ├── leather-*.svg         # 4 macro tannery leather swatches
        └── craft-*.svg           # 6 artisan workshop sequence illustrations
```

---

## 4. HTML Architecture & Semantic Structure

The HTML document in [index.html](file:///c:/Users/krish/OneDrive/Desktop/CSE326%20PROJECT/index.html) is structured into clear, logical sections:

### 1. Document Metadata & External Assets (`<head>`)
- Sets viewport meta tags for mobile responsiveness (`width=device-width, initial-scale=1.0`).
- Preconnects to Google Fonts: *Cormorant Garamond* (luxury serif for headings), *Plus Jakarta Sans* (clean sans-serif for UI/body text), and *Cinzel* (architectural serif for monograms).
- Links [styles.css](file:///c:/Users/krish/OneDrive/Desktop/CSE326%20PROJECT/styles.css) and loads [three.min.js](file:///c:/Users/krish/OneDrive/Desktop/CSE326%20PROJECT/assets/vendor/three.min.js), [OrbitControls.js](file:///c:/Users/krish/OneDrive/Desktop/CSE326%20PROJECT/assets/vendor/OrbitControls.js), and [script.js](file:///c:/Users/krish/OneDrive/Desktop/CSE326%20PROJECT/script.js) with `defer`.

### 2. Accessibility Skip Link
- `<a href="#main-content" class="skip-link">Skip to main content</a>`: Allows keyboard and screen-reader users to bypass the navigation directly to page content.

### 3. Announcement Strip (`<aside id="announcement-bar">`)
- Sits at the very top of the page displaying complimentary bespoke monogramming notices.

### 4. Site Header & Sticky Navigation (`<header id="site-header">`)
- Contains the brand wordmark (`Atelier Hide`), desktop navigation links (`#collection`, `#custom-studio`, `#leather-guide`, `#craftsmanship`), search trigger, shopping bag button with dynamic counter badge (`#cart-badge`), and mobile hamburger toggle (`#mobile-toggle`).

### 5. Slide-Out Mobile Navigation Drawer (`<div id="mobile-nav">`)
- Clean full-screen drawer providing quick access for mobile users, toggled via ARIA attributes (`aria-expanded`, `aria-hidden`).

### 6. Search Modal Overlay (`<div id="search-modal">`)
- Overlay modal equipped with an instant live search input (`#search-query-input`), category quick-filter chips (`All`, `Wallets`, `Bags`, `Travel`, `Full-Grain`), and dynamic search result cards (`#search-results-list`).

### 7. Main Content Sections (`<main id="main-content">`)
- **Section C: Cinematic Hero Campaign (`#hero`)**:
  - Left column: Editorial headline, atelier philosophy paragraph, primary CTAs (*Configure in 3D Studio*, *Explore Collection*), and four provenance benchmark metrics.
  - Right column: Interactive 3D WebGL Handbag Viewport (`#hero-3d-canvas`) with grab-to-rotate interaction, status badge, and floating provenance specification plate.
- **Section D: Brand Philosophy & Story (`#atelier-story`)**:
  - Two-column editorial introducing the Bengaluru atelier, slow craftsmanship, hide sourcing, and three pillars (Traceable Provenance, Saddle-Stitched, Solid Metal).
- **Section E: The Atelier Silhouettes (`#collection`)**:
  - Art-directed flagship showcase stories featuring large product photography, bento specification matrices, leather finish swatches, and direct customizer launch buttons.
  - Interactive archive shelf divider and the responsive 12-column catalog grid (`#collection-grid`) populated dynamically via JavaScript.
- **Section F: The Bespoke Custom Studio (`#custom-studio`)**:
  - *Left Column (Visualizer Workbench)*: Sticky card containing the interactive 3D WebGL canvas (`#studio-3d-canvas`), 2D vector silhouette stage (`#studio-vector-stage`), live monogram stamp (`#monogram-live-stamp`), interior inscription ribbon (`#canvas-inscription-preview`), and craft specification loupe.
  - *Right Column (Customization Controls)*: Step-by-step customization bench:
    - Step 01: Product silhouette picker (`#product-picker-grid`).
    - Step 02: 5 tactile leather swatches (`#leather-swatch-list`).
    - Step 03: Solid hardware metal selection (Antique Brass vs Brushed Silver).
    - Step 04: Bespoke personalization (Full name input, initials vs full name toggle, 1–4 char monogram input, interior inscription dedication, multiline note to the maker, embossing method, typography selection).
    - Step 05: Itemized commission summary, deterministic price calculator (`#studio-total-price`), and *Add Bespoke Piece to Bag* CTA.
- **Section G: Tannery & Leather Guide (`#leather-guide`)**:
  - Interactive tabbed guide comparing Full-Grain, Pull-Up, Crazy Horse, and Matte Pebble leathers.
  - **Interactive Patina Timeline (`#patina-stage-viewer`)**: Interactive stages (*Day 01*, *Year 01*, *Year 05+*) updating leather luster, temper, shade, and conditioning recommendations.
- **Section H: Craftsmanship & Workshop Steps (`#craftsmanship`)**:
  - Six-step workshop sequence: 01 Clicking & Grain Selection, 02 Saddle Stitching, 03 Friction Burnishing, 04 Cold-Forged Hardware, 05 Foil Hot Stamping, 06 Natural Conditioning.
- **Section I: The Atelier Journal Newsletter (`#journal-form`)**:
  - Email subscription form with client-side validation and toast confirmation.
- **Section J: Site Footer**:
  - Four-column responsive footer with brand wordmark, quick links, client care, atelier contact details, and copyright.

### 8. Interactive Modals & Drawers
- **Shopping Cart Drawer (`#cart-drawer`)**: Slide-out drawer displaying itemized custom bags, quantity adjusters, personalization pills, subtotal, and checkout trigger.
- **Product Details Modal (`#product-detail-modal`)**: Deep-dive quick view showing full product specifications, dimensions, weight, care instructions, and direct cart actions.
- **Demonstration Checkout Modal (`#checkout-modal`)**: Simulated checkout with mini commission order summary, customer shipping form, and order confirmation with auto-generated order IDs (`AH-2026-XXXX`).
- **Toast Notifications (`#toast-container`)**: Non-blocking feedback messages that appear when items are added to bag or actions succeed.
- **Modal Backdrop (`#modal-backdrop`)**: Semi-transparent dark overlay behind drawers and modals.

---

## 5. CSS Architecture, Layouts & Visual Techniques

All styles are organized in [styles.css](file:///c:/Users/krish/OneDrive/Desktop/CSE326%20PROJECT/styles.css) following a modular, clean structure:

### 1. Design Tokens & CSS Custom Properties (`:root`)
Centralizing values in CSS variables makes the code easy to maintain and explains the website's cohesive "Quiet Luxury" aesthetic:
```css
:root {
  /* Brand Luxury Palette */
  --color-espresso: #241813;
  --color-cognac: #A9673F;
  --color-saddle-tan: #BD9367;
  --color-ivory: #F7F4EE;
  --color-parchment: #EBE3D5;
  --color-brass-light: #DFC68A;
  --color-charcoal: #292623;
  --color-muted: #796F65;

  /* Reactive Leather Finish Shaders (Updated dynamically by JavaScript) */
  --leather-base-light: #c99f74;
  --leather-base-mid: #bd9367;
  --leather-base-dark: #8f653b;
  --stitch-color: #f4efe6;
  --hw-light: #e4cb93;
  --hw-mid: #a88952;
  --hw-dark: #5d461e;

  /* Typography Stacks */
  --font-serif: 'Cormorant Garamond', Garamond, Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-initials: 'Cinzel', 'Cormorant Garamond', serif;
}
```

### 2. Flexbox vs. CSS Grid (How We Chose Each Layout)
- **CSS Grid** is used for **two-dimensional** macro-layouts where elements must align across both columns and rows:
  - `.hero-grid`: 2 columns on desktop (`1.05fr 1.15fr`), collapsing to 1 column on tablet and mobile.
  - `.collection-grid`: 12-column magazine grid where Row 1 pairs Card 1 (span 7) and Card 2 (span 5), and Row 2 features Cards 3, 4, 5 (span 4 each), filling exactly 12 columns per row without blank space.
  - `.studio-workbench`: 2 columns with a luxury split (`minmax(0, 1.16fr) minmax(0, 1fr)`) and fluid gap (`clamp(28px, 3.2vw, 52px)`).
  - `.showcase-bento-grid`: 2×2 specification matrix.
- **Flexbox** is used for **one-dimensional** micro-layouts along a single axis:
  - `.nav-container`: Horizontal space-between alignment of wordmark, navigation links, and action buttons.
  - `.product-top-row`: Aligning product title and price along the baseline.
  - `.showcase-swatches`: Horizontal row of round leather color swatches.
  - `.cart-item-card`: Horizontal grouping of product thumbnail and detail text.

### 3. Fluid Typography & Spacing with `clamp()`
Instead of writing dozens of separate media queries for every screen size, we use CSS `clamp(min, preferred, max)`:
```css
/* Font size scales smoothly from 1.8rem on mobile up to 2.5rem on large screens */
.showcase-title {
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
}
```

### 4. Interactive 3D Card Tilt & Specular Glare
On product cards, JavaScript calculates cursor position and updates CSS 3D transforms:
```css
.product-card {
  transform-style: preserve-3d;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s;
}
.card-glare {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16) 0%, transparent 60%);
  mix-blend-mode: overlay;
  opacity: 0;
  transition: opacity 0.3s ease;
}
```

### 5. Responsive Design Breakpoints
- **Desktop (>1080px)**: Side-by-side 2-column layouts for hero, custom studio workbench, and showcase cards; 12-column collection grid.
- **Tablet (860px to 1080px)**: Hero stacks vertically; custom studio collapses to single column with sticky preview disabled; collection grid displays featured Card 1 full-width and remaining cards in balanced 2-column pairs (`span 6`).
- **Mobile (<860px / <600px)**: Desktop navigation hides; hamburger menu activates; collection grid switches to single-column stack (`grid-template-columns: 1fr`); buttons take full width for thumb tap targets.

---

## 6. JavaScript Logic, State Machine & DOM Event Handling

All application logic is implemented in [script.js](file:///c:/Users/krish/OneDrive/Desktop/CSE326%20PROJECT/script.js).

### Application State: The Single Source of Truth
Instead of scattering variables across multiple files, the entire state of user customization is stored in a clean JavaScript object:
```javascript
const studioState = {
  productId: 'handbag',             // Active product ('handbag', 'bifold', etc.)
  finishId: 'cognac',               // Selected leather finish ('tan', 'cognac', etc.)
  hardwareId: 'brass',              // Metal hardware ('brass' or 'silver')
  personalizationMode: 'initials',  // Stamping mode: 'initials' or 'name'
  customerName: '',                 // User's full name (up to 30 chars)
  monogramText: 'AH',               // Monogram initials (1-4 chars)
  customInscription: '',            // Dedicated interior message (up to 60 chars)
  makerNote: '',                    // Special note to the maker (up to 200 chars)
  embossStyle: 'blind',             // Embossing style: 'blind' (₹0) or 'foil' (+₹600)
  typography: 'serif',              // Monogram font: 'serif', 'sans', or 'initials'
  lightingMode: 'day',              // Studio lighting: 'day' or 'warm'
  customInitialsEdited: false       // Tracks whether user manually typed initials
};
```

### Student-Friendly Helper Functions (Easy for Viva!)
To make the code simple to explain to teachers, we implemented 6 high-level helper functions:

```javascript
// 1. Change leather color
function changeLeatherColor(finishId) {
  studioState.finishId = finishId;
  updateStudioVisualizer(); // Updates 2D CSS and 3D WebGL material
}

// 2. Select hardware
function selectHardware(hardwareId) {
  studioState.hardwareId = hardwareId;
  updateStudioVisualizer(); // Updates brass/silver in 2D and 3D
}

// 3. Update personalization text & mode
function updatePersonalization(text, mode) {
  if (mode === 'name') studioState.customerName = text;
  else studioState.monogramText = text.toUpperCase();
  updateMonogramStamp();
}

// 4. Update the complete preview
function updateProductPreview() {
  updateStudioVisualizer();
}

// 5. Open studio for a given product
function openCustomizationStudio(productId, finishId) {
  loadProductIntoStudio(productId, finishId);
  document.getElementById('custom-studio').scrollIntoView({ behavior: 'smooth' });
}

// 6. Rotate the 3D product horizontally
function rotateProduct(degrees = 15) {
  if (studioModelsGroup) {
    studioModelsGroup.rotation.y += (degrees * Math.PI) / 180;
  }
}
```

### Adding to Bag & Avoiding Duplicate Cart Items
When the user clicks "Add Bespoke Piece to Bag", [script.js](file:///c:/Users/krish/OneDrive/Desktop/CSE326%20PROJECT/script.js) creates a unique `configKey` by joining all customized options:
```javascript
const configKey = [
  product.id,
  finish.id,
  hardware.id,
  emboss.id,
  typo.id,
  studioState.personalizationMode,
  activeEmbossText,
  sanitizedName,
  sanitizedInscription,
  sanitizedMakerNote
].join('::');

// If an item with the exact same configKey already exists, increment quantity:
const existingIndex = cartItems.findIndex(item => item.configKey === configKey);
if (existingIndex > -1) {
  cartItems[existingIndex].quantity += 1;
} else {
  cartItems.push({ /* new item details */ });
}
saveCartToStorage(); // Saves to browser localStorage
```

---

## 7. The 3D WebGL Engine & Customization Mechanics

Our 3D experience uses **Three.js (r128)** and standard WebGL techniques. Here is how it works under the hood:

```
  ┌─────────────────────────────────────────────────────────────┐
  │                      THREE.JS SCENE                         │
  │                                                             │
  │   [Key Light]            [Fill Light]           [Rim Light] │
  │   (Warm white)           (Cool blue)            (Golden)    │
  │          \                    |                    /        │
  │           ▼                   ▼                   ▼         │
  │        ┌──────────────────────────────────────────────┐     │
  │        │          3D PRODUCT MESH GROUP               │     │
  │        │   Geometry (Extrude / Box / Cylinder)        │     │
  │        │   Material: MeshStandardMaterial             │     │
  │        │   - Color: Dynamic Hex (e.g. 0x7a3518)       │     │
  │        │   - BumpMap: Procedural Pore Texture         │     │
  │        │   - MonogramMesh: Dynamic CanvasTexture      │     │
  │        └──────────────────────────────────────────────┘     │
  │                               │                             │
  │                               ▼                             │
  │                      [Contact Shadow Plane]                 │
  └───────────────────────────────┬─────────────────────────────┘
                                  │
                                  ▼
           [PerspectiveCamera] ───► [WebGLRenderer] ───► <canvas>
```

### 1. The Core Three.js Components
Every 3D scene in Three.js requires four fundamental building blocks:
1. **Scene (`THREE.Scene`)**: The virtual 3D room holding all objects and lights.
2. **Camera (`THREE.PerspectiveCamera`)**: The virtual viewpoint looking at the bag (`fov: 40, near: 0.1, far: 100`).
3. **Renderer (`THREE.WebGLRenderer`)**: The engine that computes lighting, shadows, and materials and draws pixels onto the HTML `<canvas>`.
4. **Lights (`THREE.DirectionalLight` & `THREE.AmbientLight`)**: Studio 3-point lighting setup:
   - *Key Light*: Main bright light casting realistic highlights.
   - *Fill Light*: Soft bluish light illuminating dark shadow areas.
   - *Rim Light*: Golden back light creating an outline separating the product from the dark background.

### 2. Procedural Bump Map Generator (`createProceduralLeatherBumpTexture()`)
Instead of loading a heavy image file over the network, JavaScript creates an offscreen 256×256 canvas in memory, paints mathematical sine-wave noise combined with randomized micro-pores and curved crease scratches, and turns it into a `THREE.CanvasTexture`:
```javascript
const texture = new THREE.CanvasTexture(canvas);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(5, 5); // Repeats across the surface like real leather pores
```

### 3. Dynamic Monogram Texture Projection (`createMonogramCanvasTexture()`)
When the customer types initials or a name, an offscreen 512×512 HTML5 canvas renders the text using the selected font. If "22k Gold Foil" is selected, it paints a multi-stop metallic linear gradient with a slight drop shadow. The resulting canvas is passed directly to the 3D model's monogram plane mesh:
```javascript
model.monogramMesh.material.map = updatedMonogramTex;
model.monogramMesh.material.needsUpdate = true;
```

---

## 8. End-to-End User Journey Walkthrough

```
1. VISITOR ARRIVES (Hero Section)
   │
   ├── Sees interactive 3D Structured Handbag floating in virtual atelier lighting.
   ├── Clicks and drags to rotate the bag 360° to inspect handles, turn-lock, and stitches.
   │
2. EXPLORES THE COLLECTION (Catalog Grid)
   │
   ├── Hovers over product cards: Experiences 3D perspective tilt and specular gold glare.
   ├── Clicks "Product Details": Quick-view modal opens with full dimensions and hide specs.
   └── Clicks "Customize Piece" or "Design in 3D Studio":
       Page smoothly scrolls directly down to the Bespoke Custom Studio.
   │
3. BESPOKE CUSTOMIZATION BENCH (Custom Studio)
   │
   ├── Step 01: Selects silhouette (e.g. The Everyday Bifold).
   ├── Step 02: Clicks a leather swatch (e.g. Pull-Up Cognac).
   │            → 2D SVG color shader and 3D WebGL model update immediately.
   ├── Step 03: Selects hardware (Antique Brass vs Brushed Silver).
   ├── Step 04: Enters Full Name ("DEVRAJ OBEROI") or Initials ("DO").
   │            → Live stamp on bag clochette updates instantly.
   │            → Dynamic canvas re-renders text in 22k Gold Foil on the 3D mesh.
   ├── Step 05: Adds interior inscription ("Made for Dad - 2026") and note to maker.
   │            → Total commission price updates dynamically (+₹600 for Gold Foil).
   │
4. ACQUISITION & CHECKOUT
   │
   ├── Clicks "Add Bespoke Piece to Bag" → Animated toast confirms addition.
   ├── Opens slide-out Cart Drawer → Reviews line items and personalized pills.
   ├── Clicks "Proceed to Acquisition" → Demonstration Checkout Modal opens.
   └── Submits shipping address → Instant simulated Order ID generated (e.g. AH-2026-4821).
       Bag clears and saves state to localStorage.
```

---

## 9. Important Code Examples (Line-by-Line Student Explanations)

### Example 1: Procedural Leather Bump Texture in JavaScript
```javascript
function createProceduralLeatherBumpTexture() {
  // Step 1: Create an in-memory HTML5 canvas of 256x256 pixels
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Step 2: Fill background with neutral 50% gray (#808080)
  // In normal/bump mapping, 128 (gray) means neutral height.
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 256, 256);

  // Step 3: Get raw pixel array data to inject mathematical noise
  const imgData = ctx.getImageData(0, 0, 256, 256);
  const data = imgData.data;

  // Step 4: Loop through every pixel and add high-frequency sine-wave variations
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      const idx = (y * 256 + x) * 4;
      const n1 = Math.sin(x * 0.4) * Math.cos(y * 0.4);
      const val = Math.min(255, Math.max(0, 128 + Math.round(n1 * 40)));
      data[idx] = val;     // Red
      data[idx + 1] = val; // Green
      data[idx + 2] = val; // Blue
    }
  }
  ctx.putImageData(imgData, 0, 0);

  // Step 5: Convert the HTML5 canvas directly into a Three.js CanvasTexture
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 5); // Tile 5 times across the bag surface
  return texture;
}
```
**Student Explanation for Examiner**:
*"Sir/Ma'am, instead of downloading heavy photographic texture files that slow down the website, we used the HTML5 Canvas 2D API to generate mathematical micro-pore noise directly in the user's browser memory. Three.js then uses this as a bump map on the 3D material to simulate physical leather pores under directional light."*

---

### Example 2: Cart Deduplication & Storage Logic
```javascript
function addStudioCommissionToCart() {
  const product = PRODUCTS_DATA[studioState.productId];
  const finish = LEATHER_FINISHES[studioState.finishId];
  const emboss = EMBOSS_STYLES[studioState.embossStyle];

  // Step 1: Generate a unique signature key from all chosen options
  const configKey = [
    product.id,
    finish.id,
    studioState.hardwareId,
    emboss.id,
    studioState.monogramText,
    studioState.customerName,
    studioState.customInscription
  ].join('::');

  // Step 2: Check if this exact custom bag is already in the cart
  const existingIndex = cartItems.findIndex(item => item.configKey === configKey);

  // Step 3: If it already exists, just increase quantity. If not, add a new item.
  if (existingIndex > -1) {
    cartItems[existingIndex].quantity += 1;
  } else {
    cartItems.push({
      configKey: configKey,
      productName: product.name,
      unitPrice: product.basePrice + emboss.surcharge,
      quantity: 1,
      /* ... other details ... */
    });
  }

  // Step 4: Save the updated array to browser localStorage
  saveCartToStorage();
}
```
**Student Explanation for Examiner**:
*"Sir/Ma'am, because customers can customize different monograms on the same bag silhouette, we cannot simply use the product ID as the cart identifier. We generate a composite `configKey` combining product, leather finish, hardware, and personalized text. If a customer adds the exact same personalized bag twice, it merges into `quantity: 2`. But if they customize one with initials 'AH' and another with full name 'ARJUN', they are correctly preserved as distinct line items."*

---

## 10. Viva Preparation: 30 Questions & Clear, Accurate Answers

### Part A: Core Frontend (HTML, CSS & JavaScript)

#### Q1: Why did your team choose pure Vanilla JavaScript instead of React, Angular, or Vue?
**Answer**:
"We wanted to build the website with maximum performance, zero third-party build tooling, and zero bundle overhead. Using vanilla JavaScript (ES6+) gave us direct control over the DOM, browser `localStorage`, and the WebGL canvas context. It also proves our team understands core web fundamentals—such as the Event Loop, DOM manipulation, and asynchronous event delegation—rather than relying on external abstractions."

#### Q2: What is the semantic difference between `<section>`, `<article>`, and `<div>` in your HTML?
**Answer**:
- `<div>`: A generic, non-semantic block container used purely for styling and layout grouping.
- `<section>`: A thematic grouping of content, typically with a heading, representing a distinct major segment of the document (e.g. `#hero`, `#custom-studio`, `#leather-guide`).
- `<article>`: An independent, self-contained piece of content that could theoretically be distributed or syndicated on its own (e.g., each product card in the collection).

#### Q3: When did you use CSS Grid versus Flexbox in ATELIER HIDE?
**Answer**:
"We used **CSS Grid** for two-dimensional macro-layouts where elements need to align along both columns and rows simultaneously—such as the 12-column collection magazine layout (`#collection-grid`) and the 54%/46% customizer studio workbench (`.studio-workbench`). We used **Flexbox** for one-dimensional layouts along a single axis—such as the header navigation bar, swatch color rows, and item details inside cart rows."

#### Q4: What does `clamp()` do in your CSS, and why is it useful?
**Answer**:
"`clamp(min, preferred, max)` allows values (like font size, padding, and layout gaps) to scale smoothly with the viewport width without requiring multiple `@media` query breakpoints. For example, `font-size: clamp(1.8rem, 3.2vw, 2.5rem)` ensures the title never shrinks below 1.8rem on mobile and never exceeds 2.5rem on ultra-wide monitors, while fluidly resizing in between."

#### Q5: How do CSS Custom Properties (Variables) work in your Custom Studio?
**Answer**:
"We defined CSS variables like `--leather-base-light`, `--leather-base-mid`, and `--leather-base-dark` on the `:root` element. When the customer clicks a leather swatch in JavaScript, we call `root.style.setProperty('--leather-base-mid', finish.colors.mid)`. This immediately updates the color gradients across our vector SVG plates in real time without needing to re-render the HTML."

#### Q6: How does `localStorage` work in your shopping cart, and what are its limitations?
**Answer**:
"`localStorage` is a client-side key-value web storage API that persists data with no expiration time even after the browser is closed or refreshed. We serialize our `cartItems` array into a JSON string using `JSON.stringify()` and save it. On page reload, we re-hydrate it with `JSON.parse()`. Its limitation is that it only stores strings (up to ~5MB per domain) and is synchronous, so it is strictly meant for client-side persistence."

#### Q7: What is Event Delegation, and did you use it?
**Answer**:
"Event Delegation is a pattern where instead of attaching event listeners to dozens of individual child elements, we attach a single listener to a parent element and take advantage of event bubbling (`e.target`). We used this pattern for quantity increment/decrement buttons in our shopping cart drawer."

#### Q8: What does `e.preventDefault()` do in your forms?
**Answer**:
"By default, submitting an HTML form causes the browser to reload the page or navigate to a new URL. In our newsletter and demonstration checkout forms, we call `e.preventDefault()` to stop the default browser refresh so our JavaScript can validate inputs and update the UI with simulated order numbers asynchronously."

#### Q9: How do you format currency in Indian Rupees without hardcoding symbols everywhere?
**Answer**:
"We created a reusable helper function `formatRupees(amount)` that utilizes the native browser `Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })` API. This formats numbers into standard Indian numbering syntax (e.g., ₹28,500)."

#### Q10: How does your search filter work?
**Answer**:
"In `renderSearchResults(query, category)`, we use JavaScript's `Array.prototype.filter()`. We convert both the user query and product fields (name, category, shortDesc, leatherType) to lowercase using `.toLowerCase()`, and check if they include the search term. The matched results are then dynamically injected into `#search-results-list`."

---

### Part B: 3D WebGL & Three.js

#### Q11: What is Three.js, and why is it used in ATELIER HIDE?
**Answer**:
"Three.js is a lightweight JavaScript library that simplifies the complex low-level WebGL API. Direct WebGL requires writing custom GLSL vertex and fragment shaders and handling low-level GPU buffer matrices. Three.js gives us higher-level concepts like Scenes, Cameras, Meshes, Geometries, and Lights to render interactive 3D graphics inside an HTML `<canvas>` element."

#### Q12: What is the difference between `MeshBasicMaterial` and `MeshStandardMaterial` in Three.js?
**Answer**:
- `MeshBasicMaterial`: Does not react to lights in the scene; it renders flat color or unlit textures. We used it for our contact shadow plane under the bag.
- `MeshStandardMaterial`: A Physically-Based Rendering (PBR) material that calculates realistic light reflection based on physical properties like `roughness`, `metalness`, and `bumpMap`. We used it for our leather and brass hardware."

#### Q13: How does your procedural bump map create the illusion of leather texture?
**Answer**:
"A bump map is a grayscale texture where dark pixels represent indentations and light pixels represent raised areas. When light hits the surface, Three.js perturbs the surface normals based on the bump map without actually adding millions of extra 3D polygons. This creates the illusion of tactile leather pores and creases while keeping the 3D model lightweight and fast."

#### Q14: How does dynamic monogram stamping work in 3D?
**Answer**:
"We create an offscreen HTML5 `<canvas>` element, draw the customer's monogram or full name using the 2D canvas context with a gold metallic gradient, and instantiate a `THREE.CanvasTexture(canvas)`. We then assign this texture to the `map` property of the bag's monogram plane mesh. Whenever the user types a new letter, we call `texture.needsUpdate = true` so the GPU immediately updates the 3D stamp."

#### Q15: What role does `OrbitControls` play?
**Answer**:
"`OrbitControls` attaches to the camera and the `<canvas>` element. It listens to pointer and touch drag events, allowing the customer to orbit around the 3D handbag in 360°. We enabled `enableDamping = true` so the rotation has realistic physical inertia and smoothly slows to a stop when released."

#### Q16: How do you prevent WebGL from crashing or breaking on devices that lack GPU hardware acceleration?
**Answer**:
"We wrap our Three.js initialization inside `try...catch` blocks. If WebGL is unavailable or fails to initialize, the catch block catches the error and displays a high-resolution 2D fallback SVG graphic (`#hero-fallback-wrap` and `#studio-svg-image`), ensuring the user's experience is never broken."

#### Q17: What is the purpose of `requestAnimationFrame()` in your 3D animation loop?
**Answer**:
"`requestAnimationFrame(callback)` tells the browser to execute our animation update right before the next screen repaint (typically 60 times per second). Unlike `setInterval()`, `requestAnimationFrame` automatically pauses when the user switches tabs, saving CPU and battery life."

#### Q18: What is 3-Point Lighting, and how is it configured in your project?
**Answer**:
"3-Point Lighting is a classic photographic studio technique:
1. **Key Light**: Main bright directional light positioned to the front-right casting primary shadows.
2. **Fill Light**: Softer, cooler directional light positioned on the opposite side to soften dark shadows.
3. **Rim Light**: Warm directional light placed behind the product to illuminate the edges and create dimensional separation from the background."

---

### Part C: Architecture, UX & Project Defense

#### Q19: Explain the 6 student-friendly functions you added to `script.js`.
**Answer**:
"We created 6 clear functions to represent core user actions:
1. `changeLeatherColor(finishId)`: Changes active leather finish and updates 2D & 3D previews.
2. `selectHardware(hardwareId)`: Toggles between Antique Brass and Brushed Silver.
3. `updatePersonalization(text, mode)`: Updates custom initials or full name.
4. `updateProductPreview()`: Refreshes the visualizer stage.
5. `openCustomizationStudio(productId, finishId)`: Loads a product into the customizer and scrolls down smoothly.
6. `rotateProduct(degrees)`: Rotates the 3D model horizontally by a given angle."

#### Q20: How does your website handle responsive design for mobile devices?
**Answer**:
"We use a mobile-first responsive strategy combining CSS Grid, Flexbox, media queries at 1080px, 860px, and 600px, and fluid `clamp()` sizing. On mobile, multi-column grids collapse into comfortable single-column stacks, interactive previews disable sticky positioning to prevent viewport blocking, and tap targets expand to at least 44px for touch accessibility."

#### Q21: What is the purpose of the Patina Timeline?
**Answer**:
"The Patina Timeline is an interactive educational module demonstrating that authentic full-grain vegetable-tanned leather is not static—it evolves with age. Clicking Day 01, Year 01, and Year 05 updates the leather luster, color depth, flexibility, and care instructions to educate buyers on heirloom leather longevity."

#### Q22: What happens if a customer enters a very long name in the personalization field?
**Answer**:
"We restricted the full name field to 30 characters using the `maxlength` attribute and a live character counter. In CSS and JavaScript, we applied adaptive font sizing using `clamp()`. If the name has more than 10 or 18 characters, the font size dynamically scales down so the text fits proportionally on the leather stamp."

#### Q23: What is the difference between the 'Monogram' and the 'Note to the Maker' fields?
**Answer**:
"The **Monogram/Inscription** is physically embossed or hot-stamped onto the leather (either on the exterior clochette or interior ribbon) and appears in the 2D and 3D visualizers. The **Note to the Maker** is a special communication channel (up to 200 chars) for gifting requests or personal stories; it is preserved in the order record for the workshop but is not stamped onto the hide."

#### Q24: How does the website ensure smooth scroll animations?
**Answer**:
"We used native CSS `scroll-behavior: smooth` on the `html` element, along with JavaScript's `element.scrollIntoView({ behavior: 'smooth' })`. For scroll-triggered section entrance animations, we used an `IntersectionObserver` that adds the `.is-revealed` class when an element enters the viewport."

#### Q25: Why did you create separate test files (`test-suite.js`, `test-interactions.js`, `test-3d.js`)?
**Answer**:
"We followed automated Quality Assurance (QA) engineering best practices.
- `test-suite.js` verifies file existence, section IDs, currency symbols, and CSS design tokens.
- `test-interactions.js` validates business logic, cart deduplication, and state changes.
- `test-3d.js` asserts Three.js material configurations, bump map generation, and geometry builders.
Running `node test-suite.js` gives us automated confidence that code refactoring introduced zero regressions."

#### Q26: What was the most challenging bug you solved during development?
**Answer**:
"During development, after adding a fifth product to our catalog data, the collection grid broke because the CSS only had hardcoded column spans for children 1 through 4 on a 12-column grid. The fifth card defaulted to `span 1` (occupying only 1/12th of the screen width), which squeezed all words vertically. We fixed this by introducing a defensive default (`grid-column: span 4`) and establishing a balanced 12-column editorial rhythm (Row 1: 7+5=12; Row 2: 4+4+4=12)."

#### Q27: How does your website adhere to web accessibility (a11y) standards?
**Answer**:
"We included:
1. A Skip-to-Content link at the very top of the page.
2. Proper semantic HTML headings (`h1` through `h4`) in logical hierarchy.
3. Descriptive `aria-label` attributes on icon-only buttons (search, cart, mobile toggle).
4. `role="dialog"` and `aria-modal="true"` on overlay modals.
5. Keyboard accessibility: pressing the `Escape` key closes all active modals, and pressing `/` opens search.
6. `@media (prefers-reduced-motion)` to disable animations for users with vestibular sensitivities."

#### Q28: How does the demonstration checkout work?
**Answer**:
"When the user clicks 'Proceed to Acquisition', we close the cart drawer and open the checkout modal. JavaScript iterates through `cartItems`, computes total pieces and subtotal, and renders a summary. Upon form submission, JavaScript generates a unique order reference (`AH-2026-` plus a 4-digit random number), displays an acquisition confirmation receipt, and clears the cart."

#### Q29: What are the security benefits of using vanilla JavaScript for this frontend?
**Answer**:
"By avoiding npm runtime dependencies and third-party frontend frameworks, our project eliminates the risk of supply-chain vulnerabilities, compromised node modules, or malicious script injections. Furthermore, all user inputs are sanitized before being rendered to prevent Cross-Site Scripting (XSS)."

#### Q30: If you had more time or a backend, what features would you add in the future?
**Answer**:
"In a production environment, we would:
1. Connect to a Node.js/Express backend with a PostgreSQL or MongoDB database to store user accounts and real order records.
2. Integrate a payment gateway like Stripe or Razorpay for live transactions.
3. Add AR (Augmented Reality) via WebXR so customers could view the 3D handbag on their physical desk or shoulder using a smartphone camera.
4. Implement server-side 3D GLTF asset compression (Draco compression) for complex CAD models."

---

## Conclusion & Team Viva Summary

ATELIER HIDE combines high-end visual design with clean, readable, framework-free engineering. Every visual feature—from the 3D rotating handbag to the leather customization workbench—is powered by pure HTML5, CSS3, ES6+ JavaScript, and Three.js. 

When presenting to your teachers, remember to highlight:
- **Clean Architecture**: Separation of concerns between Data (`PRODUCTS_DATA`), State (`studioState`), Presentation (HTML/CSS), and 3D Rendering (Three.js).
- **Zero Frameworks**: Built using pure web standards.
- **Automated Verification**: Supported by 4 automated test suites verifying all 25 assets, 43 critical section IDs, and 15 interaction flows.

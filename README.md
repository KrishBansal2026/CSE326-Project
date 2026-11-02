# ATELIER HIDE — Premium Interactive Leather Atelier
### Handmade Leather Goods and Custom Monogram Bag Showcase
**College Project — CSE326 Frontend Development Showcase**

---

## 01. Overview

**ATELIER HIDE** is a digital flagship store and interactive bespoke product studio for an independent luxury leather goods atelier based in Bengaluru, India. 

The website balances editorial art direction, quiet luxury aesthetics, and client-side frontend engineering using **pure HTML5, CSS3, and modern vanilla JavaScript (ES6+)** with zero third-party framework dependencies.

---

## 02. Project Structure

```
CSE326 PROJECT/
├── index.html                  # Semantic, accessible HTML5 document with 3D WebGL canvases
├── styles.css                  # Design tokens, CSS custom properties, shaders, 3D card tilt & responsive styles
├── script.js                   # Application state machine, Three.js 3D engine, customizer, cart & modals
├── test-suite.js               # Automated verification and structural test suite (25 assets & scripts)
├── test-interactions.js        # Deep interaction, cart simulation, and user journey test suite (15/15 passed)
├── test-3d.js                  # 3D WebGL engine, procedural bump textures & dynamic monogram test suite (13/13 passed)
├── test-browser.js             # Automated headless browser DOM verification script
├── README.md                   # Project documentation and presentation guide
└── assets/
    ├── vendor/
    │   ├── three.min.js               # Three.js r128 (vendored locally for 100% offline execution)
    │   └── OrbitControls.js           # Three.js OrbitControls (smooth camera orbit & damping)
    ├── textures/
    │   ├── leather-grain.svg          # Tileable natural full-grain leather pore texture
    │   └── crazy-horse-distress.svg   # Waxed nubuck patina & distress noise texture
    └── images/
        ├── product-handbag.svg        # The Structured Handbag No. 01 interactive vector plate
        ├── product-bifold.svg         # The Everyday Bifold interactive vector plate
        ├── product-messenger.svg      # The Field Messenger interactive vector plate
        ├── product-passport.svg       # The Passport Companion interactive vector plate
        ├── product-weekender.svg      # The Weekender No. 01 interactive vector plate
        ├── hero-campaign.svg          # Cinematic hero structured handbag with gold monogram clochette
        ├── brand-philosophy.svg       # Atelier crest & Tuscan hide editorial composition
        ├── leather-full-grain.svg     # Full-grain vegetable tanned macro plate
        ├── leather-pull-up.svg        # Tuscan pull-up aniline macro plate
        ├── leather-crazy-horse.svg    # Waxed crazy horse nubuck macro plate
        ├── leather-matte.svg          # Nordic matte pebble macro plate
        ├── craft-cutting.svg          # Stage 01: Hand clicking & grain calibration
        ├── craft-stitching.svg        # Stage 02: Traditional two-needle saddle stitching
        ├── craft-burnishing.svg       # Stage 03: Beeswax friction edge burnishing
        ├── craft-hardware.svg         # Stage 04: Solid sand-cast brass hardware & copper rivets
        ├── craft-stamping.svg         # Stage 05: Heated foundry type & 22k gold foil hot stamping
        └── craft-conditioning.svg     # Stage 06: Bench inspection & organic balm conditioning
```

---

## 03. Core Features & User Interactions

### 0. The Immersive 3D Digital Leather Atelier (Signature 3D Experience)
- **Authentic Three.js WebGL Engine**: Fully offline 3D rendering powered by locally vendored Three.js r128 and OrbitControls with zero external CDN dependencies.
- **Hero 3D Cinematic Centerpiece**:
  - Interactive 3D model of **The Structured Handbag No. 01** in Heritage Cognac leather featuring a structured trapezoidal silhouette, hand-molded gussets, sculpted front flap, solid sand-cast brass turn-lock clasp mechanism, arched rolled top handles, side D-rings, protective base studs, and a dangling monogram clochette.
  - Studio 3-point directional lighting (warm key light, cool fill light, amber rim light) plus soft contact shadow plane.
  - Drag-to-rotate 360° inspection, subtle floating/breathing animation, and gentle mouse parallax tracking (`lerp`).
  - Seamless fallback to high-resolution vector artwork (`assets/images/hero-campaign.svg`) if WebGL is unsupported.
- **3D Customizer Studio Viewport**:
  - Genuine WebGL 3D viewport rendered directly onto `#studio-3d-canvas`.
  - Five distinct procedural 3D models engineered from Three.js geometries:
    - *The Structured Handbag No. 01* (Trapezoidal body, front flap, turn-lock clasp, arched top handles, base studs, hanging clochette).
    - *The Weekender No. 01* (Cylindrical barrel, end caps, rolled handles, hanging tag).
    - *The Field Messenger No. 02* (Structured compartment, overlapping front flap, twin roller buckles, briefcase handle).
    - *The Minimalist Bifold No. 03* (Slightly opened dual leaves, spine crease, interior card tier slots).
    - *The Folio Passport Sleeve No. 04* (Slim book folio, creased spine, retention strap with brass snap button).
  - **Procedural Leather Bump Map Generator**: Dynamically synthesizes an in-memory 256×256 micro-pore normal/bump texture with organic grain pore noise and crease streaks, giving tactile micro-relief under grazing light without heavy image assets.
  - **Real-Time Dynamic Monogram Texture Projection**: Generates an offscreen 512×512 canvas texture mapped to the product's monogram surface, rendering either **Initials** or **Full Name** with authentic 22k Gold Foil metallic shaders or physical Blind Deboss inset depth.
  - **Instant Material Synchronization**: Changing leather finish, hardware metal (Antique Brass vs Brushed Silver), typography, or deboss style immediately updates the 3D model in real time.
  - **Studio Controls**: OrbitControls with smooth damping and a one-click **"Reset Angle"** button returning the camera to the default editorial viewpoint.
- **Collection Showcase 3D Card Tilt & Specular Glare (Section E)**:
  - Interactive 3D perspective tilt (`perspective(1000px) rotateX(...) rotateY(...) scale3d(1.02, 1.02, 1.02)`) on pointer movement over catalog cards.
  - Dynamic specular glare sheen (`.card-glare`) with radial gold gradient tracking cursor position across the card surface.

### 1. The Custom Studio (Full-Width Workstation & Two-Column Layout)
- **Balanced Full-Width Workstation**: Architected with a full-width container (`max-width: min(1560px, 95vw)`) and a luxury 54% product preview to 46% customization panel split (`minmax(0, 1.16fr) minmax(0, 1fr)`) with an organic `clamp(28px, 3.2vw, 52px)` column gap, eliminating unintended blank space and ensuring balanced proportions across laptop and desktop screens.
- **Sticky Product Visualizer**: The left preview column remains smoothly sticky as users scroll through configuration steps, showcasing a grand preview stage (`aspect-ratio: 16 / 11; min-height: 440px`).
- **Product Silhouette Selection**: Switch seamlessly between *The Structured Handbag* (₹28,500), *The Everyday Bifold* (₹4,800), *The Field Messenger* (₹18,500), *The Passport Companion* (₹3,200), and *The Weekender No. 01* (₹26,000) with dynamic model description updates (`#preview-model-desc`).
- **Dual Presentation Engine**: High-fidelity 2D handcrafted vector preview silhouette with instant monogram and inscription reaction, plus an optional interactive 3D WebGL Orbit inspection mode toggle.
- **Five Tactile Leather Finishes**: *Full-Grain Tan*, *Pull-Up Cognac*, *Espresso*, *Matte Black*, and *Crazy Horse*. Each finish dynamically updates CSS custom property color shaders across the product silhouette. Fully resilient for both `crazy` and `crazy-horse` identifiers.
- **Solid Hardware Finishes**: Choose between *Antique Brass* and *Brushed Silver*, reflected live on turn-locks, buckles, rivets, and zipper details.
- **Customer Name & Initials Personalization**:
  - Full customer name input (up to 30 characters) with real-time character counter.
  - Interactive mode toggle: Select between **Custom Initials** (compact 1–4 char monogram) or **Full Name Stamping**.
  - Adaptive font scaling (`clamp()`) to ensure full names fit naturally on product clochettes, luggage tags, or stamps.
- **Live Monogram & Inscription Preview**:
  - Dynamic exterior monogram stamping positioned specifically for each silhouette (handbag clochette, bifold corner, messenger flap, passport lower center, weekender luggage tag).
  - Interior pocket ribbon preview for personal messages and dates.
- **Custom Inscription / Personal Message**:
  - Optional field for sentimental dedications (e.g., *"Made for Dad"*, *"Forever & Always"*, or milestone dates; up to 60 chars).
  - Displays live inside an interior leather ribbon preview in the Custom Studio.
- **Mission Space / Note to the Maker**:
  - Dedicated multiline area (up to 200 chars) for personal stories, heirloom intentions, or workshop instructions.
  - Transparently separated from stamped inscriptions: stored as an artisan note and itemized in cart & checkout.
- **Embossing Physics**:
  - *Blind Embossing*: Natural deep press deboss with realistic multi-layer inset shadows and bottom edge highlight (Included at ₹0).
  - *22k Gold Foil*: Lustrous metallic gold leaf gradient with specular shimmer (+₹600 artisan surcharge).
- **Three Typographic Styles**: *Classic Serif*, *Modern Sans*, and *Architectural Initials*.
- **Deterministic Live Pricing**: Base price updates immediately with transparent surcharge breakdown.
- **Studio Lighting Mode**: Toggle between crisp *Daylight* and moody *Workshop Warmth*.

### 2. Functional Client-Side Shopping Bag
- **Cart Management**: Add products from either the catalog or the custom studio.
- **Smart Line-Item Differentiation**: Identical configurations merge quantities, while distinct customizations (different leather, initials, hardware, or foil) remain distinct line items.
- **Live Counter & Subtotal**: Quantity increment/decrement (`+` / `−`), individual item deletion, and real-time subtotal in Indian Rupees (₹).
- **Persistent Storage**: Utilizes browser `localStorage` (`atelier_hide_cart_v2`) to preserve cart state across page reloads.
- **Free Shipping Progress**: Real-time complimentary courier notification for orders across India.
- **Empty State**: Tailored empty cart UI with an instant return-to-collection CTA.

### 3. Demonstration Checkout Experience
- Opens a dedicated simulated checkout modal.
- Prominent academic demonstration notice explaining that no real financial transactions occur.
- Full delivery address form (Name, Email, Phone, Address, City, Pincode).
- Simulated confirmation state generating a unique order tracking code (e.g., `AH-2026-8942`).

### 4. Interactive Live Search Modal
- Accessible via the search icon or keyboard shortcut (`/`).
- Real-time instant filtering across product names, categories, leather types, and descriptions.
- Quick filter pills (*All*, *Wallets*, *Bags*, *Travel*, *Full-Grain*).
- Instant click-through to open product details.

### 5. Product Details Modal
- High-resolution visual plate with switchable finish details.
- Technical specifications table (Dimensions, Weight, Capacity, Leather tannage, Hardware specs, Care instructions).
- Direct CTAs to configure in Custom Studio or add standard unmonogrammed edition to bag.
- Accessible via Escape key, close button, or backdrop click.

### 6. Editorial Leather Guide & Interactive Patina Timeline
- Deep-dive into *Full-Grain*, *Pull-Up*, *Crazy Horse*, and *Matte Pebble*.
- Interactive tabbed switcher with macro grain visuals and care recommendations.
- **Interactive Patina Timeline Engine**:
  - Live stage switcher: **Day 1: Fresh Bench**, **Year 1: Settled Hue**, and **Year 5+: Heirloom Gold**.
  - Dynamic macro visual plate showing realistic grain softening, burnish depth, and color shifts.
  - Interactive specification grid reporting micro-metrics (oil migration, depth, surface tactile rating, and recommended maintenance).
- Sourcing integrity and authenticity verification advice.

### 7. Artisan Craftsmanship Story
- 6-step workshop breakdown illustrating the complete journey from raw hide selection to final beeswax conditioning.

### 8. Accessibility & Performance
- Semantic HTML5 structure with accessible ARIA attributes.
- Keyboard accessible controls with visible focus rings (`:focus-visible`).
- Supports `prefers-reduced-motion` for users sensitive to motion.
- Fully responsive from 320px mobile screens to large desktop monitors.

---

## 04. How to Launch & Test

1. Open `index.html` directly in any modern browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
2. Alternatively, run a lightweight local static server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
3. To run the automated verification test suite:
   ```bash
   node test-suite.js          # Structural integrity & CSS/HTML tokens (25 assets & scripts, 43 IDs)
   node test-interactions.js   # 15 deep user journeys, real DOM previews, cart state & motion triggers (15/15 passed)
   node test-3d.js             # 3D WebGL engine, procedural bump textures & dynamic monogram test suite (13/13 passed)
   node test-browser.js        # Headless browser DOM render assertion
   ```

---

## 05. Verification Checklist

- [x] HTML5, CSS3, and ES6+ Vanilla JavaScript only (Zero frontend frameworks)
- [x] Luxury Structured Leather Handbag flagship hero with structured trapezoidal body, sculpted flap, sand-cast brass turn-lock, arched rolled top handles, and hanging gold monogram clochette
- [x] Redesigned Hero: Editorial headline, supporting copy, primary CTA "EXPLORE THE COLLECTION", secondary CTA "DESIGN YOUR PIECE", 3-point lighting 3D handbag, Motion trust bar, animated scroll indicator
- [x] Full-Width Bespoke Custom Studio Workstation (`max-width: min(1560px, 95vw)`) with 54% Product Preview to 46% Customization Panel split and zero container overflow
- [x] 5 Product Silhouettes fully operational: The Structured Handbag (₹28,500), The Everyday Bifold (₹4,800), The Field Messenger (₹18,500), The Passport Companion (₹3,200), and The Weekender No. 01 (₹26,000)
- [x] Vendored Three.js r128 and OrbitControls locally for 100% offline capability (Zero CDN reliance)
- [x] 3D Hero Handbag showcase with 360° drag rotation, floating animation, mouse parallax, and 3-point studio lighting
- [x] 3D Customizer Studio with 5 procedural models (Handbag, Weekender, Messenger, Bifold, Passport)
- [x] Procedural leather bump map generation in memory (256×256 micro-pore normal repeat)
- [x] Dynamic monogram canvas texture engine projecting Full Name or Initials with 22k Gold Foil / Blind Deboss shaders
- [x] Custom Studio: Product, finish, hardware, monogram, font, and emboss style reactive
- [x] Full customer name personalization (up to 30 chars) with toggle between initials or full name stamping
- [x] Custom personal message / inscription (up to 60 chars) with live interior ribbon preview
- [x] Dedicated Mission Space / Note to Maker (up to 200 chars) itemized in cart & checkout
- [x] Blind debossing vs Gold foil visibly differentiated (Gold foil ₹600 surcharge)
- [x] Cart preserves distinct custom items, merges identical items, and persists in localStorage
- [x] Interactive Patina Timeline with responsive stage viewer and technical spec grid
- [x] Live search with keyword matching and quick filters
- [x] Product details modal with technical specs and care instructions
- [x] Demonstration checkout with simulated order confirmation
- [x] Responsive layout with zero horizontal overflow down to mobile viewports
- [x] Zero broken links (all internal anchors including `#announcement-bar` verified)
- [x] Zero broken images (all assets locally bundled as high-resolution SVGs)
